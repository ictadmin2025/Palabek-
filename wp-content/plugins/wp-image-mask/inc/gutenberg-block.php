<?php
/**
 * Gutenberg Block Initializer
 *
 * @since   3.0.0
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

add_filter( 'render_block', 'wpim_gutenberg_block_html', 10, 2 );
/**
 * Custom html for gutenberg elements
 */
function wpim_gutenberg_block_html( $block_content, $block ) {

	if ( 'core/image' === $block['blockName'] ) {
		if ( isset($block['attrs']['imageMask']) && $block['attrs']['imageMask'] === 'custom' && $block['attrs']['imageMaskURL'] !== '' && $block['attrs']['imageMaskID'] !== '' ) {
			$image_mask_url = $block['attrs']['imageMaskURL'];
			if ( $image_mask_url && preg_match('/<(img)([^>]*)>/', $block_content, $matches) ) {
				$first_tag = $matches[0];
				if ( strpos($first_tag, 'style="') !== false ) {
					$block_content = preg_replace(
						'/(<(img)[^>]*style="[^"]*)"/',
						'$1; -webkit-mask-image: url(' . esc_attr($image_mask_url) . ');"',
						$block_content,
						1
					);
				} else {
					$block_content = preg_replace(
						'/(<(img)[^>]*)>/',
						'$1 style="-webkit-mask-image: url(' . esc_attr($image_mask_url) . ');">',
						$block_content,
						1
					);
				}
			}
			
		}
		if ( isset($block['attrs']['imageMask']) && $block['attrs']['imageMask'] === 'custom-svg' && $block['attrs']['imageMaskSVG'] !== '' ) {
			$svg = rawurlencode(str_replace(["\r", "\n"], ' ', $block['attrs']['imageMaskSVG']));
			if ( $svg && preg_match('/<(img)([^>]*)>/', $block_content, $matches) ) {
				$first_tag = $matches[0];
				if ( strpos($first_tag, 'style="') !== false ) {
					$block_content = preg_replace(
						'/(<(img)[^>]*style="[^"]*)"/',
						'$1; -webkit-mask-image: url(data:image/svg+xml,' . esc_attr($svg) . ');"',
						$block_content,
						1
					);
				} else {
					$block_content = preg_replace(
						'/(<(img)[^>]*)>/',
						'$1 style="-webkit-mask-image: url(data:image/svg+xml,' . esc_attr($svg) . ');">',
						$block_content,
						1
					);
				}
			}
		}
	}

	return $block_content;
}