(window["modMarkdown_bundle_jsonpfunction"] = window["modMarkdown_bundle_jsonpfunction"] || []).push([[1],{

/***/ "./public/settings_options.tsx":
/*!*************************************!*\
  !*** ./public/settings_options.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SettingsOptions; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _kbn_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @kbn/i18n */ "@kbn/i18n");
/* harmony import */ var _kbn_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_kbn_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _src_plugins_vis_default_editor_public__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../src/plugins/vis_default_editor/public */ "plugin/visDefaultEditor/public");
/* harmony import */ var _src_plugins_vis_default_editor_public__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_src_plugins_vis_default_editor_public__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/react */ "@emotion/react");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_emotion_react__WEBPACK_IMPORTED_MODULE_4__);
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */






function SettingsOptions({
  stateParams,
  setValue
}) {
  return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiPanel"], {
    paddingSize: "s"
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_src_plugins_vis_default_editor_public__WEBPACK_IMPORTED_MODULE_3__["RangeOption"], {
    label: _kbn_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('visTypeMarkdown.params.fontSizeLabel', {
      defaultMessage: 'Base font size in points'
    }),
    max: 36,
    min: 8,
    paramName: "fontSize",
    showInput: true,
    value: stateParams.fontSize,
    setValue: setValue
  }), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_src_plugins_vis_default_editor_public__WEBPACK_IMPORTED_MODULE_3__["SwitchOption"], {
    label: _kbn_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('visTypeMarkdown.params.openLinksLabel', {
      defaultMessage: 'Open links in new tab'
    }),
    paramName: "openLinksInNewTab",
    value: stateParams.openLinksInNewTab,
    setValue: setValue
  }));
} // default export required for React.Lazy
// eslint-disable-next-line import/no-default-export




/***/ })

}]);
//# sourceMappingURL=modMarkdown.chunk.1.js.map