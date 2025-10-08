<?php
/**
 * Shortcode
 *
 * @since   3.0.0
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

add_shortcode('wp-image-mask', 'wpim_image_mask_shortcode');
/**
 * Add image mask shortcode
 */
function wpim_image_mask_shortcode( $atts, $content = null ) {
    ob_start();

	$atts = shortcode_atts( [
		'src' => '', // source of image;
		'mask'  => '', // source of mask
		'fit'  => 'contain', // how the mask should fit into the image. cover, contain (default contain);
        'alt' => '', // alt text for image
		
	], $atts );

	if(empty($atts['src']) || empty($atts['mask'])) return ob_get_clean();

	$src = sanitize_url($atts['src']);
    $mask = sanitize_url($atts['mask']);
    $fit = sanitize_text_field($atts['fit']);
    $alt = sanitize_text_field($atts['alt']);
    $attach_id = attachment_url_to_postid($src);

	$block_classes = ['wp-image-mask', 'has-image-mask', 'has-custom-image-mask'];
    if (!empty($fit)) {
        $block_classes[] = 'has-image-mask-'.$fit.'-fit';
    }
	$block_classes = implode(" ", $block_classes);

	if ($attach_id) {
		$img_html = wp_get_attachment_image($attach_id, 'full', false, ['class' => '']);
	} else {
		$img_html = '<img src="'.esc_url($src).'" alt="'.esc_attr($alt).'" />';
	}

	if ( $mask && preg_match('/<(img)([^>]*)>/', $img_html, $matches) ) {
		$first_tag = $matches[0];
		if ( strpos($first_tag, 'style="') !== false ) {
			$img_html = preg_replace(
				'/(<(img)[^>]*style="[^"]*)"/',
				'$1; -webkit-mask-image: url(' . $mask . ');"',
				$img_html,
				1
			);
		} else {
			$img_html = preg_replace(
				'/(<(img)[^>]*)>/',
				'$1 style="-webkit-mask-image: url(' . $mask . ');">',
				$img_html,
				1
			);
		}
	}
	
	?>

	<figure class="<?php echo esc_attr($block_classes); ?>">

        <?php 
        echo $img_html;
        ?>

	</figure>

	<?php
	
	return ob_get_clean();
}