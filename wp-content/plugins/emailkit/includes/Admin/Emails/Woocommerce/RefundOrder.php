<?php 
namespace EmailKit\Admin\Emails\Woocommerce;

use WP_Query;
use EmailKit\Admin\Emails\EmailLists;
use EmailKit\Admin\Emails\Helpers\Utils;

defined("ABSPATH") || exit;

class RefundOrder
{

	private $db_query_class = null;

	public function __construct()
	{

		$args = array(
			'post_type'  => 'emailkit',
			'meta_query' => array(
				array(
					'key'   => 'emailkit_template_type',
					'value' => EmailLists::REFUNDED_ORDER,
				),
				array(
					'key'   => 'emailkit_template_status',
					'value' => 'Active',
				),
			),
		);


		$this->db_query_class = new WP_Query($args);

		if (isset($this->db_query_class->posts[0])) {
			add_action('woocommerce_email', [$this, 'remove_woocommerce_emails']);
		}


		add_filter('woocommerce_order_status_refunded', [$this, 'orderRefund'], 10, 2);
	}

	public function remove_woocommerce_emails($email_class)
	{

		remove_action('woocommerce_order_fully_refunded_notification', array($email_class->emails['WC_Email_Customer_Refunded_Order'], 'trigger_full'));
		remove_action('woocommerce_order_partially_refunded_notification', array($email_class->emails['WC_Email_Customer_Refunded_Order'], 'trigger_partial'));
	}

	public function orderRefund($order_id, $order)
	{

		$query = $this->db_query_class;
		$email = get_option('admin_email');


		if (isset($query->posts[0])) {
			$html  = get_post_meta($query->posts[0]->ID, 'emailkit_template_content_html', true);

			$replacements = [];
			$refunded_qty = 0; 
			foreach ($order->get_items() as $item_id => $item) {
				$product = $item->get_product();
				$id = $item['product_id'];
				$product_name = $item['name'];
				$item_qty = $item['quantity'];
				$item_total = $item['total'];
				$product_price = $product->get_price() * $item_qty;


				// Format the product price with the currency symbol
				$formatted_product_price = wc_price($product_price);

				// Format the item total with the currency symbol
				$formatted_item_total = wc_price($item_total);

				$product_image_id = $product->get_image_id();
				$product_image_url = $product_image_id ? wp_get_attachment_url($product_image_id) : wc_placeholder_img_src();

				$product_sku = $product->get_sku();
				$attributes = [];
				$meta_data = $item->get_meta_data();

				foreach ($meta_data as $meta) {
					// Check for product attribute (pa_ is the prefix for standard attributes)
					if (strpos($meta->key, 'pa_') === 0) {
					// Standard product attribute
					$formatted_name = ucwords(wc_attribute_label(str_replace('pa_', '', $meta->key), $product));
					$formatted_value = is_string($meta->value) ? ucwords(strtolower($meta->value)) : ''; // Capitalize the value

					// Add the attribute to the list with HTML markup
					$attributes[] = esc_html($formatted_name) . ': ' . esc_html($formatted_value);

					} else {
						
					$formatted_name = is_string($meta->key) ? ucwords(str_replace('_', ' ', strtolower($meta->key))) : '';
					$formatted_value = is_string($meta->value) ? ucwords(strtolower($meta->value)) : '';

					// Add the custom meta to the list with HTML markup
					$attributes[] = esc_html($formatted_name) . ':' . esc_html($formatted_value);

					}
				}

				$formatted_attributes = !empty($attributes) ? implode(', ', $attributes) : '';

				
				$replacements[] = [$product_name, $item_qty, $formatted_item_total, $formatted_product_price, $product_image_url, $product_sku, $formatted_attributes];

			}

			$html = \EmailKit\Admin\Emails\Helpers\Utils::order_items_replace($html, $replacements);

			// Order details array for email
			$details = Utils::woocommerce_order_email_contents($order);

			$message  = str_replace(array_keys($details), array_values($details), apply_filters('emailkit_shortcode_filter', $html));

			$currency_symbol_position = get_option('woocommerce_currency_pos');

			if($currency_symbol_position == 'left') {

				$message = Utils::adjust_price_structure($message);
				$message = preg_replace_callback(
					'/<span>(<del[^>]*>.*?<\/del>\s*<ins[^>]*>.*?<\/ins>)<\/span>\s*([\d.,]+)<\/bdi><\/span><\/span>/',
					function ($matches) {
						// Return only the del and ins tags without the extra price
						return '<span>' . $matches[1] . '</span>';
					},
					$message
				);
				
			} else if($currency_symbol_position == 'left_space') {

				$message = preg_replace_callback(
					'/<span>(<del[^>]*>.*?<\/del>\s*<ins[^>]*>.*?<\/ins>)<\/span>\s*&nbsp;[\d.,]+<\/bdi><\/span><\/span>/',
					function ($matches) {
						// Return only the del and ins tags without the extra price
						return '<span>' . $matches[1] . '</span>';
					},
					$message
				);
		
				$message = Utils::adjust_left_space_price_structure($message);
				
			}
			
			$to       = $order->get_billing_email();

			$pre_header_template = get_post_meta($query->posts[0]->ID, 'emailkit_email_preheader', true);
			$pre_header = str_replace(array_keys(Utils::transform_details_keys($details)), array_values(Utils::transform_details_keys($details)), $pre_header_template);
			$pre_header = !empty($pre_header) ? $pre_header : esc_html__("Order has been refunded", "emailkit");
			$subject_template = get_post_meta($query->posts[0]->ID, 'emailkit_email_subject', true);
      		$subject = str_replace(array_keys(Utils::transform_details_keys($details)), array_values(Utils::transform_details_keys($details)), $subject_template);
			$subject = !empty($subject) ? $subject . ' - ' . $pre_header : esc_attr($order->get_billing_first_name() . " " . $order->get_billing_last_name()) . ", ".esc_html("Your order#") . esc_attr($order_id) . " " . esc_html__(" has been  refunded", "emailkit") . ' - ' . $pre_header;


			$headers = [
				'From: ' . $email . "\r\n",
				'Reply-To: ' . $email . "\r\n",
				'Content-Type: text/html; charset=UTF-8',
			];

			wp_mail($to, $subject, $message, $headers);
		}
	}

} 
