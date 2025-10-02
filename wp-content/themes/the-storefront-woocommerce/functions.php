<?php

// Enqueue parent and child styles
function wp_shop_woocommerce_child_enqueue_styles() {

    // 1. Load parent theme CSS
    wp_enqueue_style(
        'wp-shop-woocommerce-style', // Parent handle
        get_template_directory_uri() . '/style.css',
        array(),
        WP_SHOP_WOOCOMMERCE_VERSION
    );

    // 2. Load child theme CSS (depends on parent)
    wp_enqueue_style(
        'wp-shop-woocommerce-child-style',
        get_stylesheet_directory_uri() . '/style.css',
        array('wp-shop-woocommerce-style'),
        wp_get_theme()->get('Version')
    );
}
add_action( 'wp_enqueue_scripts', 'wp_shop_woocommerce_child_enqueue_styles' );

// Enqueue child theme JS in addition to parent JS
function wp_shop_woocommerce_child_scripts() {

    // Load child custom JS
    wp_enqueue_script(
        'wp-shop-woocommerce-child-js',
        get_stylesheet_directory_uri() . '/revolution/assets/js/custom.js', // <-- your file in child theme
        array('jquery'), // load after jQuery
        wp_get_theme()->get('Version'),
        true
    );
}
add_action( 'wp_enqueue_scripts', 'wp_shop_woocommerce_child_scripts' );


// Theme setup
if (!function_exists('the_storefront_woocommerce_setup')) :
    function the_storefront_woocommerce_setup() {
        add_theme_support('automatic-feed-links');
        add_theme_support('title-tag');
        add_theme_support('custom-header');
        add_theme_support('responsive-embeds');
        add_theme_support('post-thumbnails');
        add_theme_support('align-wide');
        add_editor_style(array('assets/css/editor-style.css'));
        add_theme_support('custom-background', apply_filters('the_storefront_woocommerce_custom_background_args', array(
            'default-color' => 'ffffff',
            'default-image' => '',
        )));

    }
endif;
add_action('after_setup_theme', 'the_storefront_woocommerce_setup');

// Set content width
function the_storefront_woocommerce_content_width() {
    $GLOBALS['content_width'] = apply_filters('the_storefront_woocommerce_content_width', 1170);
}
add_action('after_setup_theme', 'the_storefront_woocommerce_content_width', 0);

// Register widget areas
function the_storefront_woocommerce_widgets_init() {
    register_sidebar(array(
        'name' => __('Sidebar Widget Area', 'the-storefront-woocommerce'),
        'id' => 'wp-shop-woocommerce-sidebar-primary',
        'description' => __('The Primary Widget Area', 'the-storefront-woocommerce'),
        'before_widget' => '<aside id="%1$s" class="widget %2$s">',
        'after_widget' => '</aside>',
        'before_title' => '<h4 class="widget-title">',
        'after_title' => '</h4><div class="title"><span class="shap"></span></div>',
    ));
    register_sidebar(array(
        'name' => __('Footer Widget Area', 'the-storefront-woocommerce'),
        'id' => 'wp-shop-woocommerce-footer-widget-area',
        'description' => __('The Footer Widget Area', 'the-storefront-woocommerce'),
        'before_widget' => '<div class="footer-widget col-lg-3 col-sm-6 wow fadeIn" data-wow-delay="0.2s"><aside id="%1$s" class="widget %2$s">',
        'after_widget' => '</aside></div>',
        'before_title' => '<h5 class="widget-title w-title">',
        'after_title' => '</h5><span class="shap"></span>',
    ));
}
add_action('widgets_init', 'the_storefront_woocommerce_widgets_init');

// -----------Remove admin notice------------//
// Disable WP Shop Woocommerce activation notice
function remove_wp_shop_woocommerce_notice() {
    remove_action( 'admin_notices', 'wp_shop_woocommerce_admin_notice' );
}
add_action( 'admin_init', 'remove_wp_shop_woocommerce_notice', 20 );


// Remove "About Theme" and Demo Import pages
add_action( 'after_setup_theme', 'the_storefront_woocommerce_remove_parent_menu', 20 );

function the_storefront_woocommerce_remove_parent_menu() {
    add_action( 'admin_menu', 'the_storefront_woocommerce_remove_about_theme_menu', 999 );
}

function the_storefront_woocommerce_remove_about_theme_menu() {
    // Remove "About Theme" submenu
    remove_submenu_page( 'themes.php', 'wp-shop-woocommerce-getstart-page' );

    // Remove "Demo Import" submenu
    remove_submenu_page( 'themes.php', 'businessstartupexpert-wizard' );
}

// Remove customizer settings
function the_storefront_woocommerce_remove_custom($wp_customize) {
    
    $wp_customize->remove_setting('wp_shop_woocommerce_header_topbar_text');
    $wp_customize->remove_control('wp_shop_woocommerce_header_topbar_text');

    $wp_customize->remove_setting('wp_shop_woocommerce_category_image');
    $wp_customize->remove_control('wp_shop_woocommerce_category_image');

    $wp_customize->remove_setting('wp_shop_woocommerce_product_sale_heading');
    $wp_customize->remove_control('wp_shop_woocommerce_product_sale_heading');

    $wp_customize->remove_setting('wp_shop_woocommerce_product_discount_text');
    $wp_customize->remove_control('wp_shop_woocommerce_product_discount_text');

    $wp_customize->remove_setting('wp_shop_woocommerce_product_heading_text');
    $wp_customize->remove_control('wp_shop_woocommerce_product_heading_text');

    $wp_customize->remove_setting('wp_shop_woocommerce_product_sub_heading_text');
    $wp_customize->remove_control('wp_shop_woocommerce_product_sub_heading_text');

    $wp_customize->remove_setting('wp_shop_woocommerce_category_button1_text');
    $wp_customize->remove_control('wp_shop_woocommerce_category_button1_text');
    
    $wp_customize->remove_setting('wp_shop_woocommerce_category_button1_link');
    $wp_customize->remove_control('wp_shop_woocommerce_category_button1_link');
    
}
add_action('customize_register', 'the_storefront_woocommerce_remove_custom', 1000);

// admin js and css
function the_storefront_woocommerce_child_dequeue_admin_assets() {
    // Dequeue parent theme's admin style
    wp_dequeue_style( 'wp-shop-woocommerce-admin-style' );

    // Dequeue parent theme's admin script
    wp_dequeue_script( 'wp-shop-woocommerce-dismiss-notice-script' );
}
add_action( 'admin_enqueue_scripts', 'the_storefront_woocommerce_child_dequeue_admin_assets', 100 );


function the_storefront_woocommerce_child_customize_register( $wp_customize ) {

    $wp_customize->add_setting('the_storefront_woocommerce_order_shipping_text',array(
        'default'   => 'FREE SHIPPING',
        'sanitize_callback' => 'sanitize_text_field'
    ));
    $wp_customize->add_control('the_storefront_woocommerce_order_shipping_text',array(
        'label' => __('Add Free Shipping Text','the-storefront-woocommerce'),
        'section'   => 'wp_shop_woocommerce_topbar_section',
        'type'      => 'text'
    ));
    
    $wp_customize->add_setting('the_storefront_woocommerce_order_shipping_link',array(
        'default'   => '#',
        'sanitize_callback' => 'esc_url_raw'
    ));
    $wp_customize->add_control('the_storefront_woocommerce_order_shipping_link',array(
        'label' => __('Add Free Shipping Link','the-storefront-woocommerce'),
        'section'   => 'wp_shop_woocommerce_topbar_section',
        'type'      => 'url'
    ));

    $wp_customize->add_setting('the_storefront_woocommerce_delivery_text',array(
        'default'=> 'on orders over $99. This offer is valid on all store items.',
        'sanitize_callback' => 'sanitize_text_field'
    ));
    $wp_customize->add_control('the_storefront_woocommerce_delivery_text',array(
        'label' => __('Add Offer Text','the-storefront-woocommerce'),
        'section'=> 'wp_shop_woocommerce_topbar_section',
        'type'=> 'text'
    ));

    $the_storefront_woocommerce_args = array(
        'type'      => 'product',
        'taxonomy'  => 'product_cat'
    );
    $the_storefront_woocommerce_categories = get_categories($the_storefront_woocommerce_args);
    $the_storefront_woocommerce_cat_posts = array();

    // Add "Select" as the first option
    $the_storefront_woocommerce_cat_posts['select'] = __('Select', 'the-storefront-woocommerce'); // Key must match the default value

    // Loop through categories and populate $the_storefront_woocommerce_cat_posts
    foreach ($the_storefront_woocommerce_categories as $the_storefront_woocommerce_category) {
        $the_storefront_woocommerce_cat_posts[$the_storefront_woocommerce_category->slug] = $the_storefront_woocommerce_category->name;
    }

    $wp_customize->add_setting('the_storefront_woocommerce_product_category', array(
        'default'           => 'product_cat1', // Match the key for "Select"
        'sanitize_callback' => 'wp_shop_woocommerce_sanitize_choices',
    ));

    $wp_customize->add_control('the_storefront_woocommerce_product_category', array(
        'type'    => 'select',
        'choices' => $the_storefront_woocommerce_cat_posts,
        'label'   => __('Select Sale Product Category', 'the-storefront-woocommerce'),
        'section' => 'wp_shop_woocommerce_product_section',
    ));

}
add_action( 'customize_register', 'the_storefront_woocommerce_child_customize_register', 20 );
