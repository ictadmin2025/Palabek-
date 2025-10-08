/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './style.scss';

const { __ } = wp.i18n;

/**
 * Add mask attributes for images
 */
function addMaskAttributes(settings, name) {

	if (typeof settings.attributes !== 'undefined') {
		if (name === 'core/image') {
			settings.attributes = Object.assign(settings.attributes, {
				imageMask: {
					type: 'text',
				},
				imageMaskURL: {
					type: 'string',
				},
				imageMaskID: { // ID of the custom image attached as mask
					type: 'number',
				},
				imageMaskSVG: {
					type: 'string',
				},
				imageMaskFit: {
					type: 'string',
					default: 'contain',
				},
			});

		}
	}
	return settings;
}

wp.hooks.addFilter(
	'blocks.registerBlockType',
	'wpim/image-mask-attributes',
	addMaskAttributes
);


/**
 * Add image mask control for images
 * @see https://awhitepixel.com/blog/add-custom-settings-to-existing-wordpress-gutenberg-blocks/
 */
const imageInspectorControls = wp.compose.compose(

	wp.compose.createHigherOrderComponent((BlockEdit) => {
		return (props) => {

			if (props.name !== 'core/image') {
				return (<BlockEdit {...props} />);
			}

			const { Fragment } = wp.element;
			const { PanelBody, PanelRow, SelectControl, CustomSelectControl, Button, TextareaControl } = wp.components;
			const { InspectorControls, MediaUpload, MediaUploadCheck } = wp.blockEditor;
			const { attributes, isSelected, setAttributes } = props;

			const ALLOWED_MEDIA_TYPES = ['image'];

			//*
			if (attributes.imageMask != undefined) {
				const applyMaskStyles = () => {
					let rootEl = document.querySelector('.is-root-container');
					if (!rootEl) {
						rootEl = document.querySelector('[name="editor-canvas"]').contentDocument.querySelector('.is-root-container');
					}
					const blockEl = rootEl.querySelector(`#block-${props.clientId}`);
					if (blockEl) {
						blockEl.classList.add('has-image-mask', `has-${attributes.imageMask}-image-mask`);
						if (attributes.imageMaskFit) {
							blockEl.classList.add(`has-image-mask-${attributes.imageMaskFit}-fit`);
						}
						const imgEl = blockEl.querySelector('img');
						if (imgEl) {
							if (attributes.imageMask === 'custom' && attributes.imageMaskURL) {
								imgEl.style.maskImage = `url(${attributes.imageMaskURL})`;
								imgEl.style.WebkitMaskImage = `url(${attributes.imageMaskURL})`;
							} else if (attributes.imageMask === 'custom-svg' && attributes.imageMaskSVG) {
								const svg = `data:image/svg+xml,${encodeURIComponent(attributes.imageMaskSVG.replace(/(\r\n|\r|\n)/g, ""))}`;
								imgEl.style.maskImage = `url('${svg}')`;
								imgEl.style.WebkitMaskImage = `url('${svg}')`;
							} else {
								imgEl.style.removeProperty('mask-image');
								imgEl.style.removeProperty('-webkit-mask-image');
							}
						}
					}
				};

				window._wpLoadBlockEditor.then(applyMaskStyles);
			}
			// */

			const controlStyles = {
				backgroundPosition: 'left 8px center',
				backgroundRepeat: 'no-repeat',
				backgroundSize: '25px',
				paddingLeft: '38px'
			}

			// Available image mask options
			const imageMaskControlOptions = [
				{
					name: __('None', 'wp-image-mask'),
					key: '',
				},
				{
					name: __('Triangle', 'wp-image-mask'),
					key: 'triangle',
					style: { ...controlStyles, backgroundImage: `url(${wpimGlobal.pluginDirUrl}/src/img/triangle.svg)` },
				},
				{
					name: __('Diamond', 'wp-image-mask'),
					key: 'diamond',
					style: { ...controlStyles, backgroundImage: `url(${wpimGlobal.pluginDirUrl}/src/img/diamond.svg)` },
				},
				{
					name: __('Brush', 'wp-image-mask'),
					key: 'brush-1',
					style: { ...controlStyles, backgroundImage: `url(${wpimGlobal.pluginDirUrl}/src/img/brush-1.svg)` },
				},
				{
					name: __('Star', 'wp-image-mask'),
					key: 'star',
					style: { ...controlStyles, backgroundImage: `url(${wpimGlobal.pluginDirUrl}/src/img/star.svg)` },
				},
				{
					name: __('Custom image', 'wp-image-mask'),
					key: 'custom',
					style: { ...controlStyles, backgroundImage: attributes.imageMaskURL ? `url(${attributes.imageMaskURL})` : `url(${wpimGlobal.pluginDirUrl}/src/img/custom.svg)` },
				},
				{
					name: __('SVG code', 'wp-image-mask'),
					key: 'custom-svg',
					style: { ...controlStyles, backgroundImage: `url(${wpimGlobal.pluginDirUrl}/src/img/custom-svg.svg)` },
				},
			];


			return (
				<Fragment>
					<BlockEdit {...props} />
					{isSelected && (props.name == 'core/image') &&
						<InspectorControls>
							<PanelBody
								title={__("Image mask", 'wp-image-mask')}
								initialOpen={true}
							>

								<PanelRow>
									<CustomSelectControl
										label={__("Select Mask Type", 'wp-image-mask')}
										value={imageMaskControlOptions.find((option) => option.key === attributes.imageMask)}
										options={imageMaskControlOptions}
										onChange={(newVal) => setAttributes({
											imageMask: newVal.selectedItem.key,
											imageMaskURL: newVal.selectedItem.key !== 'custom' ? '' : attributes.imageMaskURL,
											imageMaskID: newVal.selectedItem.key !== 'custom' ? '' : attributes.imageMaskID,
											imageMaskSVG: newVal.selectedItem.key !== 'custom-svg' ? '' : attributes.imageMaskSVG,
										})}
									/>
								</PanelRow>

								{attributes.imageMask === 'custom' &&
									<PanelRow>
										<MediaUploadCheck>
											<MediaUpload
												onSelect={
													(media) => {
														setAttributes({ imageMaskURL: media.url, imageMaskID: media.id })
													}
												}
												allowedTypes={ALLOWED_MEDIA_TYPES}
												value={attributes.imageMaskID}
												render={({ open }) => (
													<Button className={"is-tertiary"} onClick={open}>{__('Choose Mask Image', 'wp-image-mask')}</Button>
												)}
											/>
										</MediaUploadCheck>
										{attributes.imageMaskURL && attributes.imageMaskID &&
											<img src={attributes.imageMaskURL} alt="custom mask preview" width="50" height="auto" />
										}
									</PanelRow>
								}

								{attributes.imageMask === 'custom-svg' &&
									<PanelRow>
										<TextareaControl
											label={__('Paste SVG code here', 'wp-image-mask')}
											value={attributes.imageMaskSVG}
											onChange={(newVal) => setAttributes({ imageMaskSVG: newVal })}
										/>
									</PanelRow>
								}

								<PanelRow>
									<SelectControl
										label={__("Mask Fit", 'wp-image-mask')}
										value={attributes.imageMaskFit}
										options={[
											{ label: __('Auto', 'wp-image-mask'), value: 'auto' },
											{ label: __('Contain', 'wp-image-mask'), value: 'contain' },
											{ label: __('Cover', 'wp-image-mask'), value: 'cover' },
										]}
										onChange={(newVal) => setAttributes({ imageMaskFit: newVal })}
									/>
								</PanelRow>

							</PanelBody>
						</InspectorControls>
					}
				</Fragment>
			);
		};
	}, 'imageInspectorControls'));

wp.hooks.addFilter(
	'editor.BlockEdit',
	'wpim/image-inspector-control',
	imageInspectorControls
);


/**
 * Apply extra classes and inline styles
 */
function blocksApplyExtraClass(extraProps, blockType, attributes) {
	const { imageMask, imageMaskFit } = attributes;

	if (blockType.name === "core/image") {
		let className = (extraProps.className != undefined) ? extraProps.className : '';

		if (imageMask != undefined && imageMask !== "") {
			className += ' has-image-mask has-' + imageMask + '-image-mask';

			if (imageMaskFit != undefined && imageMaskFit !== "") {
				className += ' has-image-mask-' + imageMaskFit + '-fit';
			}
		}

		extraProps.className = className;
	}

	return extraProps;
}

wp.hooks.addFilter(
	'blocks.getSaveContent.extraProps',
	'wpim/image-apply-class',
	blocksApplyExtraClass
);


/**
 * Add image inline styles for Editor wrapper blocks
 * @see https://stackoverflow.com/questions/68071302/adding-inline-style-to-gutenberg-core-blocks-in-the-editor?rq=1
 */
const withInlineStyleImage = wp.compose.createHigherOrderComponent(
	(BlockListBlock) => {
		return (props) => {
			const { block, attributes } = props;
			const { imageMask, imageMaskFit } = attributes;

			if ('core/image' !== block.name) {
				return <BlockListBlock {...props} />;
			}

			let newClassName = (attributes.className != undefined) ? attributes.className : '';

			if (imageMask != undefined) {
				if (imageMask === 'custom' || imageMask === 'custom-svg') {
					newClassName += ' has-image-mask has-custom-image-mask';
				} else {
					newClassName += ' has-image-mask has-' + imageMask + '-image-mask';
				}

				if (imageMaskFit != undefined && imageMaskFit !== "") {
					newClassName += ' has-image-mask-' + imageMaskFit + '-fit';
				}
			}

			return (
				<BlockListBlock
					{...props}
					wrapperProps={{ className: newClassName }}
				/>
			);
		}
	},
	'withInlineStyleImage'
);

wp.hooks.addFilter(
	'editor.BlockListBlock',
	'wpim/with-inline-style-image',
	withInlineStyleImage
);
