/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);
/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */


const {
  __
} = wp.i18n;

/**
 * Add mask attributes for images
 */
function addMaskAttributes(settings, name) {
  if (typeof settings.attributes !== 'undefined') {
    if (name === 'core/image') {
      settings.attributes = Object.assign(settings.attributes, {
        imageMask: {
          type: 'text'
        },
        imageMaskURL: {
          type: 'string'
        },
        imageMaskID: {
          // ID of the custom image attached as mask
          type: 'number'
        },
        imageMaskSVG: {
          type: 'string'
        },
        imageMaskFit: {
          type: 'string',
          default: 'contain'
        }
      });
    }
  }
  return settings;
}
wp.hooks.addFilter('blocks.registerBlockType', 'wpim/image-mask-attributes', addMaskAttributes);

/**
 * Add image mask control for images
 * @see https://awhitepixel.com/blog/add-custom-settings-to-existing-wordpress-gutenberg-blocks/
 */
const imageInspectorControls = wp.compose.compose(wp.compose.createHigherOrderComponent(BlockEdit => {
  return props => {
    if (props.name !== 'core/image') {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(BlockEdit, {
        ...props
      });
    }
    const {
      Fragment
    } = wp.element;
    const {
      PanelBody,
      PanelRow,
      SelectControl,
      CustomSelectControl,
      Button,
      TextareaControl
    } = wp.components;
    const {
      InspectorControls,
      MediaUpload,
      MediaUploadCheck
    } = wp.blockEditor;
    const {
      attributes,
      isSelected,
      setAttributes
    } = props;
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
    };

    // Available image mask options
    const imageMaskControlOptions = [{
      name: __('None', 'wp-image-mask'),
      key: ''
    }, {
      name: __('Triangle', 'wp-image-mask'),
      key: 'triangle',
      style: {
        ...controlStyles,
        backgroundImage: `url(${wpimGlobal.pluginDirUrl}/src/img/triangle.svg)`
      }
    }, {
      name: __('Diamond', 'wp-image-mask'),
      key: 'diamond',
      style: {
        ...controlStyles,
        backgroundImage: `url(${wpimGlobal.pluginDirUrl}/src/img/diamond.svg)`
      }
    }, {
      name: __('Brush', 'wp-image-mask'),
      key: 'brush-1',
      style: {
        ...controlStyles,
        backgroundImage: `url(${wpimGlobal.pluginDirUrl}/src/img/brush-1.svg)`
      }
    }, {
      name: __('Star', 'wp-image-mask'),
      key: 'star',
      style: {
        ...controlStyles,
        backgroundImage: `url(${wpimGlobal.pluginDirUrl}/src/img/star.svg)`
      }
    }, {
      name: __('Custom image', 'wp-image-mask'),
      key: 'custom',
      style: {
        ...controlStyles,
        backgroundImage: attributes.imageMaskURL ? `url(${attributes.imageMaskURL})` : `url(${wpimGlobal.pluginDirUrl}/src/img/custom.svg)`
      }
    }, {
      name: __('SVG code', 'wp-image-mask'),
      key: 'custom-svg',
      style: {
        ...controlStyles,
        backgroundImage: `url(${wpimGlobal.pluginDirUrl}/src/img/custom-svg.svg)`
      }
    }];
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(BlockEdit, {
        ...props
      }), isSelected && props.name == 'core/image' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(InspectorControls, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(PanelBody, {
          title: __("Image mask", 'wp-image-mask'),
          initialOpen: true,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(PanelRow, {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(CustomSelectControl, {
              label: __("Select Mask Type", 'wp-image-mask'),
              value: imageMaskControlOptions.find(option => option.key === attributes.imageMask),
              options: imageMaskControlOptions,
              onChange: newVal => setAttributes({
                imageMask: newVal.selectedItem.key,
                imageMaskURL: newVal.selectedItem.key !== 'custom' ? '' : attributes.imageMaskURL,
                imageMaskID: newVal.selectedItem.key !== 'custom' ? '' : attributes.imageMaskID,
                imageMaskSVG: newVal.selectedItem.key !== 'custom-svg' ? '' : attributes.imageMaskSVG
              })
            })
          }), attributes.imageMask === 'custom' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(PanelRow, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MediaUploadCheck, {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MediaUpload, {
                onSelect: media => {
                  setAttributes({
                    imageMaskURL: media.url,
                    imageMaskID: media.id
                  });
                },
                allowedTypes: ALLOWED_MEDIA_TYPES,
                value: attributes.imageMaskID,
                render: ({
                  open
                }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Button, {
                  className: "is-tertiary",
                  onClick: open,
                  children: __('Choose Mask Image', 'wp-image-mask')
                })
              })
            }), attributes.imageMaskURL && attributes.imageMaskID && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("img", {
              src: attributes.imageMaskURL,
              alt: "custom mask preview",
              width: "50",
              height: "auto"
            })]
          }), attributes.imageMask === 'custom-svg' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(PanelRow, {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(TextareaControl, {
              label: __('Paste SVG code here', 'wp-image-mask'),
              value: attributes.imageMaskSVG,
              onChange: newVal => setAttributes({
                imageMaskSVG: newVal
              })
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(PanelRow, {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(SelectControl, {
              label: __("Mask Fit", 'wp-image-mask'),
              value: attributes.imageMaskFit,
              options: [{
                label: __('Auto', 'wp-image-mask'),
                value: 'auto'
              }, {
                label: __('Contain', 'wp-image-mask'),
                value: 'contain'
              }, {
                label: __('Cover', 'wp-image-mask'),
                value: 'cover'
              }],
              onChange: newVal => setAttributes({
                imageMaskFit: newVal
              })
            })
          })]
        })
      })]
    });
  };
}, 'imageInspectorControls'));
wp.hooks.addFilter('editor.BlockEdit', 'wpim/image-inspector-control', imageInspectorControls);

/**
 * Apply extra classes and inline styles
 */
function blocksApplyExtraClass(extraProps, blockType, attributes) {
  const {
    imageMask,
    imageMaskFit
  } = attributes;
  if (blockType.name === "core/image") {
    let className = extraProps.className != undefined ? extraProps.className : '';
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
wp.hooks.addFilter('blocks.getSaveContent.extraProps', 'wpim/image-apply-class', blocksApplyExtraClass);

/**
 * Add image inline styles for Editor wrapper blocks
 * @see https://stackoverflow.com/questions/68071302/adding-inline-style-to-gutenberg-core-blocks-in-the-editor?rq=1
 */
const withInlineStyleImage = wp.compose.createHigherOrderComponent(BlockListBlock => {
  return props => {
    const {
      block,
      attributes
    } = props;
    const {
      imageMask,
      imageMaskFit
    } = attributes;
    if ('core/image' !== block.name) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(BlockListBlock, {
        ...props
      });
    }
    let newClassName = attributes.className != undefined ? attributes.className : '';
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
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(BlockListBlock, {
      ...props,
      wrapperProps: {
        className: newClassName
      }
    });
  };
}, 'withInlineStyleImage');
wp.hooks.addFilter('editor.BlockListBlock', 'wpim/with-inline-style-image', withInlineStyleImage);

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "react/jsx-runtime":
/*!**********************************!*\
  !*** external "ReactJSXRuntime" ***!
  \**********************************/
/***/ ((module) => {

module.exports = window["ReactJSXRuntime"];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0,
/******/ 			"./style-index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkwp_image_mask"] = self["webpackChunkwp_image_mask"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["./style-index"], () => (__webpack_require__("./src/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map