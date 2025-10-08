=== WP Image Mask ===
Contributors: barb0ss
Tags: image, mask, shortcode, gutenberg
Requires at least: 6.0.1
Tested up to: 6.8.1
Requires PHP: 7.3
Stable tag: 3.1.3
License: GPLv2 or later
License URI: https://www.gnu.org/licenses/old-licenses/gpl-2.0.html

This plugin adds the ability to set a mask to Gutenberg's image block or via shortcode `[wp-image-mask]`.

== Description ==
Select a custom mask for your Gutenberg image's block or add a masked image anywhere via shortcode `[wp-image-mask]`.

# Shortcode attributes:

- `src` - URL of the image;
- `mask` - URL of the mask;
- `fit`  - how the mask should fit into the image. `cover`, `contain` (default `contain`);
- `alt` - alt text for the image.

== Installation ==
Upload the WP Image Mask plugin to your site, activate it and start using.

== Frequently Asked Questions ==
= Do I need to replace my images with some custom Gutenberg block to use an image mask? =

No, this plugin attaches to the native Gutenberg image block, so no need to replace your existing images.

= Can I apply my custom image mask? =

Sure! You can select a custom image mask file or paste SVG code of your image mask.

= I don't use Gutenberg - is there any other way to add an image with a mask? =

Yes! You can use shortcode `[wp-image-mask src="https://url_of_your_image" mask="https://url_of_your_mask_image"]`. 

== Screenshots ==
1. Select your image (or add a new one from Gutenberg blocks).
2. Select the type of image mask from the block's settings.
3. If you choose a custom image - click on the Choose mask image button to upload your custom mask.
4. Once you have selected the mask - it will apply to your image.
5. If you choose SVG code - paste your SVG code in the textarea field.
6. Once you have pasted the code - it will apply to your image.
7. You can also apply image masks to gallery's images.

== Changelog ==
= 3.1.3 =
* Fixed security vulnerability
= 3.1.2 =
* Removed inline <style> tags, applied image mask as inline css
* Fixed Gutenberg view for custom image mask
* Migrate to @wordpress/create-block
= 3.1.1 =
* Removed unnecessary wp-image-mask – CGB Block
= 3.1 =
* Add the ability to select mask fit in the Gutenberg block
= 3.0 =
* Stable release. 
* Add a shortcode to apply image mask. 
= 2.0 =
* Stable release. 
* Fixed issues with applying custom masks to images.
* Add the ability to paste SVG code for image masks.
= 1.0 =
* First release.


== Upgrade Notice ==
= 3.1.3 =
* Fixed security vulnerability
= 3.1.2 =
* Removed inline <style> tags, applied image mask as inline css
* Fixed Gutenberg view for custom image mask
* Migrate to @wordpress/create-block
= 3.1.1 =
* Removed unnecessary wp-image-mask – CGB Block
= 3.1 =
* Add the ability to select mask fit in the Gutenberg block
* Removed network level from the plugin
= 3.0 =
* Add a shortcode to apply image mask.
= 2.0 =
* Fixed issues with applying custom masks to images.
= 1.0 =
* First release.