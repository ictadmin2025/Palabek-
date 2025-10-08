<?php
/**
 * Plugin Name: WP Image Mask
 * Description: Add the ability to set a mask to the Gutenberg Image block.
 * Plugin URI:  https://wordpress.com/plugins/wp-image-mask
 * Author URI:  https://bogdan.kyiv.ua
 * Author:      Bogdan Bendziukov
 * Version:     3.1.3
 *
 * Text Domain: wp-image-mask
 * Domain Path: /languages
 *
 * License:     GPL2
 * License URI: https://www.gnu.org/licenses/gpl-2.0.html
 *
 * Network:     false
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

define( 'WPIM_VERSION', '3.1.3' );

/**
 * Load plugin's text domain
 */
add_action( 'plugins_loaded', 'wpim_load_textdomain' );
function wpim_load_textdomain() {
	load_plugin_textdomain( 'wp-image-mask', false, basename( dirname( __FILE__ ) ) . '/languages' );
}

/**
 * Block Initializer.
 */
require_once plugin_dir_path( __FILE__ ) . 'inc/init.php';
