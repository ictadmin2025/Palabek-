<?php
/**
 * Blocks Initializer
 *
 * Enqueue CSS/JS of all the blocks.
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

require_once plugin_dir_path( __FILE__ ) . 'gutenberg-block.php';
require_once plugin_dir_path( __FILE__ ) . 'shortcode.php';

add_action( 'init', 'wpim_block_assets' );
/**
 * Enqueue Gutenberg block assets for both frontend + backend.
 */
function wpim_block_assets() { // phpcs:ignore
	wp_register_style('wpim-style-css', plugins_url( '/build/style-index.css', dirname( __FILE__ ) ), is_admin() ? array( 'wp-block-editor' ) : null, WPIM_VERSION);
}

add_action( 'wp_enqueue_scripts', 'wpim_enqueue_styles' );
/**
 * Add styles for frontend
 */
function wpim_enqueue_styles() {
	wp_enqueue_style('wpim-style-css');
}

add_action('enqueue_block_editor_assets', 'wpim_enqueue_block_editor_assets');
function wpim_enqueue_block_editor_assets() {
	wp_enqueue_style('wpim-style-css');
	wp_enqueue_script('wpim-block-js', plugins_url( '/build/index.js', dirname( __FILE__ ) ), array( 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-block-editor' ), WPIM_VERSION, true);
	
	// WP Localized globals. Use dynamic PHP stuff in JavaScript via `wpimGlobal` object.
	wp_localize_script(
		'wpim-block-js',
		'wpimGlobal', // Array containing dynamic data for a JS Global.
		[
			'pluginDirPath' => plugin_dir_path( __DIR__ ),
			'pluginDirUrl'  => plugin_dir_url( __DIR__ ),
			// Add more data here that you want to access from `wpimGlobal` object.
		]
	);

	// Apply translations for scripts
	wp_set_script_translations( 'wpim-block-js', 'wp-image-mask', plugin_dir_path( __DIR__ ) .'languages' );
}




