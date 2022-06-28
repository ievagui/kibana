/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"modMarkdown": 0
/******/ 	};
/******/
/******/
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "modMarkdown.chunk." + chunkId + ".js"
/******/ 	}
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["modMarkdown_bundle_jsonpfunction"] = window["modMarkdown_bundle_jsonpfunction"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "../../node_modules/@kbn/optimizer/target_node/worker/entry_point_creator.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../node_modules/@babel/runtime/helpers/defineProperty.js":
/*!******************************************************************************************************************!*\
  !*** delegated ./node_modules/@babel/runtime/helpers/defineProperty.js from dll-reference __kbnSharedDeps_npm__ ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference __kbnSharedDeps_npm__ */ "dll-reference __kbnSharedDeps_npm__"))(2);

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/extends.js":
/*!***********************************************************************************************************!*\
  !*** delegated ./node_modules/@babel/runtime/helpers/extends.js from dll-reference __kbnSharedDeps_npm__ ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference __kbnSharedDeps_npm__ */ "dll-reference __kbnSharedDeps_npm__"))(3);

/***/ }),

/***/ "../../node_modules/@kbn/optimizer/target_node/worker/entry_point_creator.js":
/*!*************************************************************************************************************************************!*\
  !*** /home/ieva/Documents/elasticsearch/kibana_plugin/kibana/node_modules/@kbn/optimizer/target_node/worker/entry_point_creator.js ***!
  \*************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../../../../../../../../.cache/bazel/_bazel_ieva/ccebe6b12d8d81d4b2b688fba3c05593/execroot/kibana/node_modules/val-loader/dist/cjs.js?key=modMarkdown!../../../../../../../../../.cache/bazel/_bazel_ieva/ccebe6b12d8d81d4b2b688fba3c05593/execroot/kibana/bazel-out/k8-fastbuild/bin/packages/kbn-ui-shared-deps-npm/target_node/public_path_module_creator.js */ "../../node_modules/val-loader/dist/cjs.js?key=modMarkdown!../../../../../../.cache/bazel/_bazel_ieva/ccebe6b12d8d81d4b2b688fba3c05593/execroot/kibana/bazel-out/k8-fastbuild/bin/packages/kbn-ui-shared-deps-npm/target_node/public_path_module_creator.js");__kbnBundles__.define('plugin/modMarkdown/public', __webpack_require__, /*require.resolve*/(/*! ../../../../../plugins/mod_markdown/public */ "./public/index.ts"))

/***/ }),

/***/ "../../node_modules/val-loader/dist/cjs.js?key=modMarkdown!../../../../../../.cache/bazel/_bazel_ieva/ccebe6b12d8d81d4b2b688fba3c05593/execroot/kibana/bazel-out/k8-fastbuild/bin/packages/kbn-ui-shared-deps-npm/target_node/public_path_module_creator.js":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /home/ieva/Documents/elasticsearch/kibana_plugin/kibana/node_modules/val-loader/dist/cjs.js?key=modMarkdown!/home/ieva/.cache/bazel/_bazel_ieva/ccebe6b12d8d81d4b2b688fba3c05593/execroot/kibana/bazel-out/k8-fastbuild/bin/packages/kbn-ui-shared-deps-npm/target_node/public_path_module_creator.js ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__.p = window.__kbnPublicPath__['modMarkdown']

/***/ }),

/***/ "./public/index.ts":
/*!*************************!*\
  !*** ./public/index.ts ***!
  \*************************/
/*! exports provided: plugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "plugin", function() { return plugin; });
/* harmony import */ var _plugin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./plugin */ "./public/plugin.ts");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

function plugin(initializerContext) {
  return new _plugin__WEBPACK_IMPORTED_MODULE_0__["MarkdownPlugin"](initializerContext);
}

/***/ }),

/***/ "./public/markdown_fn.ts":
/*!*******************************!*\
  !*** ./public/markdown_fn.ts ***!
  \*******************************/
/*! exports provided: createMarkdownVisFn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createMarkdownVisFn", function() { return createMarkdownVisFn; });
/* harmony import */ var _kbn_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @kbn/i18n */ "@kbn/i18n");
/* harmony import */ var _kbn_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_kbn_i18n__WEBPACK_IMPORTED_MODULE_0__);
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

const createMarkdownVisFn = () => ({
  name: 'markdownVis',
  type: 'render',
  inputTypes: [],
  help: _kbn_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('visTypeMarkdown.function.help', {
    defaultMessage: 'Markdown visualization'
  }),
  args: {
    markdown: {
      types: ['string'],
      aliases: ['_'],
      required: true,
      help: _kbn_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('visTypeMarkdown.function.markdown.help', {
        defaultMessage: 'Markdown to render'
      })
    },
    font: {
      types: ['style'],
      help: _kbn_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('visTypeMarkdown.function.font.help', {
        defaultMessage: 'Font settings.'
      }),
      default: `{font size=12}`
    },
    openLinksInNewTab: {
      types: ['boolean'],
      default: false,
      help: _kbn_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('visTypeMarkdown.function.openLinksInNewTab.help', {
        defaultMessage: 'Opens links in new tab'
      })
    },
    convertToKQLQuery: {
      types: ['boolean'],
      default: false,
      help: _kbn_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('visTypeMarkdown.function.convertToKQLQuery.help', {
        defaultMessage: 'Format API response into KQL query'
      })
    },
    controlLabel: {
      types: ['string'],
      required: true,
      help: _kbn_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('visTypeMarkdown.function.controlLabel.help', {
        defaultMessage: 'Control Label'
      })
    }
  },

  fn(input, args) {
    return {
      type: 'render',
      as: 'markdown_vis',
      value: {
        visType: 'markdown',
        visParams: {
          markdown: args.markdown,
          openLinksInNewTab: args.openLinksInNewTab,
          convertToKQLQuery: args.convertToKQLQuery,
          fontSize: parseInt(args.font.spec.fontSize || '12', 10),
          controlLabel: args.controlLabel
        }
      }
    };
  }

});

/***/ }),

/***/ "./public/markdown_options.tsx":
/*!*************************************!*\
  !*** ./public/markdown_options.tsx ***!
  \*************************************/
/*! exports provided: MarkdownOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarkdownOptions", function() { return MarkdownOptions; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_plugins_vis_default_editor_public__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../src/plugins/vis_default_editor/public */ "plugin/visDefaultEditor/public");
/* harmony import */ var _src_plugins_vis_default_editor_public__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_src_plugins_vis_default_editor_public__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/react */ "@emotion/react");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_emotion_react__WEBPACK_IMPORTED_MODULE_3__);
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */





function MarkdownOptions({
  stateParams,
  setValue
}) {
  const onMarkdownUpdate = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(({
    target: {
      value
    }
  }) => setValue('markdown', value), [setValue]);
  const onControlLabelUpdate = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(({
    target: {
      value
    }
  }) => setValue('controlLabel', value), [setValue]);
  return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiPanel"], {
    paddingSize: "s"
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFlexGroup"], {
    direction: "column",
    gutterSize: "m",
    className: "mkdEditor"
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFlexItem"], {
    grow: false
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFlexGroup"], {
    gutterSize: "none",
    justifyContent: "spaceBetween",
    alignItems: "baseline"
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFlexItem"], {
    grow: false
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiTitle"], {
    size: "xs"
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__["jsx"])("h2", null, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__["jsx"])("label", {
    htmlFor: "markdownVisInput"
  }, "API")))))), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFlexItem"], null, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFormRow"], {
    fullWidth: true,
    label: "Link to API"
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFieldText"], {
    id: "markdownVisInput",
    className: "visEditor--markdown__textarea",
    value: stateParams.markdown,
    onChange: onMarkdownUpdate,
    fullWidth: true,
    "data-test-subj": "markdownTextarea",
    resize: "none"
  }))), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFlexItem"], null, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFormRow"], {
    fullWidth: true,
    label: "Control Label"
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFieldText"], {
    id: "markdownVisInput",
    fullWidth: true,
    value: stateParams.controlLabel,
    onChange: onControlLabelUpdate,
    "data-test-subj": "markdownTextarea",
    resize: "none"
  }))), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFlexItem"], null, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_src_plugins_vis_default_editor_public__WEBPACK_IMPORTED_MODULE_2__["SwitchOption"], {
    label: "Convert to KQL query",
    paramName: "convertToKQLQuery",
    value: stateParams.convertToKQLQuery,
    setValue: setValue
  }))));
}



/***/ }),

/***/ "./public/markdown_renderer.tsx":
/*!**************************************!*\
  !*** ./public/markdown_renderer.tsx ***!
  \**************************************/
/*! exports provided: markdownVisRenderer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "markdownVisRenderer", function() { return markdownVisRenderer; });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "../../node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _src_plugins_visualizations_public__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../src/plugins/visualizations/public */ "plugin/visualizations/public");
/* harmony import */ var _src_plugins_visualizations_public__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_src_plugins_visualizations_public__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/react */ "@emotion/react");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_emotion_react__WEBPACK_IMPORTED_MODULE_4__);


/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */




// @ts-ignore
const MarkdownVisComponent = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["lazy"])(() => __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ./markdown_vis_controller */ "./public/markdown_vis_controller.tsx"))); //import MarkdownVisComponent from './markdown_vis_controller';

const markdownVisRenderer = {
  name: 'markdown_vis',
  displayName: 'markdown visualization',
  reuseDomNode: true,
  render: async (domNode, {
    visParams
  }, handlers) => {
    handlers.onDestroy(() => {
      Object(react_dom__WEBPACK_IMPORTED_MODULE_2__["unmountComponentAtNode"])(domNode);
    });
    Object(react_dom__WEBPACK_IMPORTED_MODULE_2__["render"])(Object(_emotion_react__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_src_plugins_visualizations_public__WEBPACK_IMPORTED_MODULE_3__["VisualizationContainer"], {
      className: "markdownVis",
      handlers: handlers
    }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_4__["jsx"])(MarkdownVisComponent, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, visParams, {
      renderComplete: handlers.done
    }))), domNode);
  }
};

/***/ }),

/***/ "./public/markdown_vis.ts":
/*!********************************!*\
  !*** ./public/markdown_vis.ts ***!
  \********************************/
/*! exports provided: markdownVisDefinition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "markdownVisDefinition", function() { return markdownVisDefinition; });
/* harmony import */ var _kbn_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @kbn/i18n */ "@kbn/i18n");
/* harmony import */ var _kbn_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_kbn_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _markdown_options__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./markdown_options */ "./public/markdown_options.tsx");
/* harmony import */ var _src_plugins_vis_default_editor_public__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../src/plugins/vis_default_editor/public */ "plugin/visDefaultEditor/public");
/* harmony import */ var _src_plugins_vis_default_editor_public__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_src_plugins_vis_default_editor_public__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _src_plugins_visualizations_public__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../src/plugins/visualizations/public */ "plugin/visualizations/public");
/* harmony import */ var _src_plugins_visualizations_public__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_src_plugins_visualizations_public__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _to_ast__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./to_ast */ "./public/to_ast.ts");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */





const markdownVisDefinition = {
  name: 'mod_markdown',
  title: 'Modified Markdown',
  isAccessible: true,
  // icon location /home/ieva/Documents/elasticsearch/kibana_plugin/kibana/node_modules/@elastic/eui/lib/components/icon/svgs
  icon: 'bolt',
  group: _src_plugins_visualizations_public__WEBPACK_IMPORTED_MODULE_3__["VisGroups"].TOOLS,
  titleInWizard: _kbn_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('visTypeMarkdown.markdownTitleInWizard', {
    defaultMessage: 'API Call'
  }),
  description: _kbn_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('visTypeMarkdown.markdownDescription', {
    defaultMessage: 'Call an API to do stuff.'
  }),
  toExpressionAst: _to_ast__WEBPACK_IMPORTED_MODULE_4__["toExpressionAst"],
  visConfig: {
    defaults: {
      fontSize: 12,
      openLinksInNewTab: false,
      convertToKQLQuery: false,
      markdown: '',
      controlLabel: ''
    }
  },
  editorConfig: {
    optionTabs: [{
      name: 'advanced',
      title: _kbn_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('visTypeMarkdown.tabs.dataText', {
        defaultMessage: 'Data'
      }),
      editor: _markdown_options__WEBPACK_IMPORTED_MODULE_1__["MarkdownOptions"]
    } // uncomment to allow settings options

    /*{
      name: 'options',
      title: i18n.translate('visTypeMarkdown.tabs.optionsText', {
        defaultMessage: 'Options',
      }),
      editor: SettingsOptions,
    },*/
    ],
    enableAutoApply: true,
    defaultSize: _src_plugins_vis_default_editor_public__WEBPACK_IMPORTED_MODULE_2__["DefaultEditorSize"].LARGE
  },
  options: {
    showTimePicker: false,
    showFilterBar: false
  },
  inspectorAdapters: {}
};

/***/ }),

/***/ "./public/plugin.ts":
/*!**************************!*\
  !*** ./public/plugin.ts ***!
  \**************************/
/*! exports provided: MarkdownPlugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarkdownPlugin", function() { return MarkdownPlugin; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../../node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _markdown_vis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./markdown_vis */ "./public/markdown_vis.ts");
/* harmony import */ var _markdown_fn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./markdown_fn */ "./public/markdown_fn.ts");
/* harmony import */ var _markdown_renderer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./markdown_renderer */ "./public/markdown_renderer.tsx");


/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */



/** @internal */

/** @internal */
class MarkdownPlugin {
  constructor(initializerContext) {
    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "initializerContext", void 0);

    this.initializerContext = initializerContext;
  }

  setup(core, {
    expressions,
    visualizations
  }) {
    visualizations.createBaseVisualization(_markdown_vis__WEBPACK_IMPORTED_MODULE_1__["markdownVisDefinition"]);
    expressions.registerRenderer(_markdown_renderer__WEBPACK_IMPORTED_MODULE_3__["markdownVisRenderer"]);
    expressions.registerFunction(_markdown_fn__WEBPACK_IMPORTED_MODULE_2__["createMarkdownVisFn"]);
  }

  start(core) {// nothing to do here yet
  }

}

/***/ }),

/***/ "./public/to_ast.ts":
/*!**************************!*\
  !*** ./public/to_ast.ts ***!
  \**************************/
/*! exports provided: toExpressionAst */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toExpressionAst", function() { return toExpressionAst; });
/* harmony import */ var _src_plugins_expressions_public__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../src/plugins/expressions/public */ "plugin/expressions/public");
/* harmony import */ var _src_plugins_expressions_public__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_plugins_expressions_public__WEBPACK_IMPORTED_MODULE_0__);
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

const toExpressionAst = vis => {
  const {
    markdown,
    fontSize,
    openLinksInNewTab,
    convertToKQLQuery,
    controlLabel
  } = vis.params;
  const markdownVis = Object(_src_plugins_expressions_public__WEBPACK_IMPORTED_MODULE_0__["buildExpressionFunction"])('markdownVis', {
    markdown,
    font: Object(_src_plugins_expressions_public__WEBPACK_IMPORTED_MODULE_0__["buildExpression"])(`font size=${fontSize}`),
    openLinksInNewTab,
    convertToKQLQuery,
    controlLabel
  });
  const ast = Object(_src_plugins_expressions_public__WEBPACK_IMPORTED_MODULE_0__["buildExpression"])([markdownVis]);
  return ast.toAst();
};

/***/ }),

/***/ "@elastic/eui":
/*!***********************************************!*\
  !*** external "__kbnSharedDeps__.ElasticEui" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __kbnSharedDeps__.ElasticEui;

/***/ }),

/***/ "@emotion/react":
/*!*************************************************!*\
  !*** external "__kbnSharedDeps__.EmotionReact" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __kbnSharedDeps__.EmotionReact;

/***/ }),

/***/ "@kbn/i18n":
/*!********************************************!*\
  !*** external "__kbnSharedDeps__.KbnI18n" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __kbnSharedDeps__.KbnI18n;

/***/ }),

/***/ "dll-reference __kbnSharedDeps_npm__":
/*!****************************************!*\
  !*** external "__kbnSharedDeps_npm__" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __kbnSharedDeps_npm__;

/***/ }),

/***/ "plugin/expressions/public":
/*!**************************************************!*\
  !*** @kbn/bundleRef "plugin/expressions/public" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {


      __webpack_require__.r(__webpack_exports__);
      var ns = __kbnBundles__.get('plugin/expressions/public');
      Object.defineProperties(__webpack_exports__, Object.getOwnPropertyDescriptors(ns))
    

/***/ }),

/***/ "plugin/visDefaultEditor/public":
/*!*******************************************************!*\
  !*** @kbn/bundleRef "plugin/visDefaultEditor/public" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {


      __webpack_require__.r(__webpack_exports__);
      var ns = __kbnBundles__.get('plugin/visDefaultEditor/public');
      Object.defineProperties(__webpack_exports__, Object.getOwnPropertyDescriptors(ns))
    

/***/ }),

/***/ "plugin/visualizations/public":
/*!*****************************************************!*\
  !*** @kbn/bundleRef "plugin/visualizations/public" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {


      __webpack_require__.r(__webpack_exports__);
      var ns = __kbnBundles__.get('plugin/visualizations/public');
      Object.defineProperties(__webpack_exports__, Object.getOwnPropertyDescriptors(ns))
    

/***/ }),

/***/ "react":
/*!******************************************!*\
  !*** external "__kbnSharedDeps__.React" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __kbnSharedDeps__.React;

/***/ }),

/***/ "react-dom":
/*!*********************************************!*\
  !*** external "__kbnSharedDeps__.ReactDom" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __kbnSharedDeps__.ReactDom;

/***/ })

/******/ });
//# sourceMappingURL=modMarkdown.plugin.js.map