"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/SignIn.js":
/*!******************************!*\
  !*** ./components/SignIn.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_SignIn_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/SignIn.module.css */ \"./styles/SignIn.module.css\");\n/* harmony import */ var _styles_SignIn_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_SignIn_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nvar _s = $RefreshSig$();\nfunction SignUp(props) {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), userName = ref[0], setUserName = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), password = ref1[0], setPassword = ref1[1];\n    var close = props.close;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_SignIn_module_css__WEBPACK_IMPORTED_MODULE_2___default().main),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                onClick: function() {\n                    return close();\n                },\n                className: (_styles_SignIn_module_css__WEBPACK_IMPORTED_MODULE_2___default().close),\n                children: \"X\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\dreye\\\\Desktop\\\\TwitterLike\\\\frontend\\\\components\\\\SignIn.js\",\n                lineNumber: 15,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_SignIn_module_css__WEBPACK_IMPORTED_MODULE_2___default().logo)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\dreye\\\\Desktop\\\\TwitterLike\\\\frontend\\\\components\\\\SignIn.js\",\n                lineNumber: 16,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_SignIn_module_css__WEBPACK_IMPORTED_MODULE_2___default().join),\n                children: \"Connect to Hackatweet\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\dreye\\\\Desktop\\\\TwitterLike\\\\frontend\\\\components\\\\SignIn.js\",\n                lineNumber: 17,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                placeholder: \"Username\",\n                onChange: function(e) {\n                    return setUserName(e.target.value);\n                },\n                className: (_styles_SignIn_module_css__WEBPACK_IMPORTED_MODULE_2___default().input),\n                value: userName\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\dreye\\\\Desktop\\\\TwitterLike\\\\frontend\\\\components\\\\SignIn.js\",\n                lineNumber: 19,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                placeholder: \"Password\",\n                onChange: function(e) {\n                    return setPassword(e.target.value);\n                },\n                className: (_styles_SignIn_module_css__WEBPACK_IMPORTED_MODULE_2___default().input),\n                value: password\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\dreye\\\\Desktop\\\\TwitterLike\\\\frontend\\\\components\\\\SignIn.js\",\n                lineNumber: 20,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: function() {\n                    return setSignUp();\n                },\n                className: (_styles_SignIn_module_css__WEBPACK_IMPORTED_MODULE_2___default().SignIn),\n                children: \"Sign in\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\dreye\\\\Desktop\\\\TwitterLike\\\\frontend\\\\components\\\\SignIn.js\",\n                lineNumber: 21,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\dreye\\\\Desktop\\\\TwitterLike\\\\frontend\\\\components\\\\SignIn.js\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, this);\n}\n_s(SignUp, \"RbrO7EvaECjsVDQyExqmmCjcan0=\");\n_c = SignUp;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SignUp);\nvar _c;\n$RefreshReg$(_c, \"SignUp\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1NpZ25Jbi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFBaUQ7QUFDTDs7QUFHNUMsU0FBU0csTUFBTSxDQUFDQyxLQUFLLEVBQUU7O0lBQ3ZCLElBQStCRixHQUFZLEdBQVpBLCtDQUFRLENBQUMsRUFBRSxDQUFDLEVBTDNDLFFBS2UsR0FBZ0JBLEdBQVksR0FBNUIsRUFMZixXQUsyQixHQUFJQSxHQUFZLEdBQWhCO0lBQzNCLElBQStCQSxJQUFZLEdBQVpBLCtDQUFRLENBQUMsRUFBRSxDQUFDLEVBTjNDLFFBTWUsR0FBZ0JBLElBQVksR0FBNUIsRUFOZixXQU0yQixHQUFJQSxJQUFZLEdBQWhCO0lBRTNCLElBQU0sS0FBTyxHQUFLRSxLQUFLLENBQWZLLEtBQUs7SUFJWCxxQkFDRSw4REFBQ0MsS0FBRztRQUFDQyxTQUFTLEVBQUVYLHVFQUFXOzswQkFDM0IsOERBQUNVLEtBQUc7Z0JBQUNHLE9BQU8sRUFBRTsyQkFBTUosS0FBSyxFQUFFO2lCQUFBO2dCQUFFRSxTQUFTLEVBQUVYLHdFQUFZOzBCQUFFLEdBQUM7Ozs7O29CQUFNOzBCQUM3RCw4REFBQ1UsS0FBRztnQkFBQ0MsU0FBUyxFQUFFWCx1RUFBVzs7Ozs7b0JBQVE7MEJBQ25DLDhEQUFDVSxLQUFHO2dCQUFDQyxTQUFTLEVBQUlYLHVFQUFXOzBCQUFFLHVCQUMvQjs7Ozs7b0JBQU07MEJBQ04sOERBQUNnQixPQUFLO2dCQUFDQyxXQUFXLEVBQUMsVUFBVTtnQkFBQ0MsUUFBUSxFQUFFLFNBQUNDLENBQUM7MkJBQUtiLFdBQVcsQ0FBQ2EsQ0FBQyxDQUFDQyxNQUFNLENBQUNDLEtBQUssQ0FBQztpQkFBQTtnQkFBRVYsU0FBUyxFQUFFWCx3RUFBWTtnQkFBRXFCLEtBQUssRUFBRWhCLFFBQVE7Ozs7O29CQUFHOzBCQUN2SCw4REFBQ1csT0FBSztnQkFBQ0MsV0FBVyxFQUFDLFVBQVU7Z0JBQUNDLFFBQVEsRUFBRSxTQUFDQyxDQUFDOzJCQUFLWCxXQUFXLENBQUNXLENBQUMsQ0FBQ0MsTUFBTSxDQUFDQyxLQUFLLENBQUM7aUJBQUE7Z0JBQUVWLFNBQVMsRUFBRVgsd0VBQVk7Z0JBQUVxQixLQUFLLEVBQUVkLFFBQVE7Ozs7O29CQUFHOzBCQUN2SCw4REFBQ2UsUUFBTTtnQkFBQ1QsT0FBTyxFQUFFOzJCQUFNVSxTQUFTLEVBQUU7aUJBQUE7Z0JBQUVaLFNBQVMsRUFBRVgseUVBQWE7MEJBQUUsU0FBTzs7Ozs7b0JBQVM7Ozs7OztZQUN4RSxDQUNOO0NBQ0g7R0FuQlFHLE1BQU07QUFBTkEsS0FBQUEsTUFBTTtBQXFCZiwrREFBZUEsTUFBTSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvU2lnbkluLmpzP2VlNDgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvU2lnbkluLm1vZHVsZS5jc3MnO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuXHJcbmZ1bmN0aW9uIFNpZ25VcChwcm9wcykge1xyXG5jb25zdCBbdXNlck5hbWUsc2V0VXNlck5hbWVdID0gdXNlU3RhdGUoXCJcIilcclxuY29uc3QgW3Bhc3N3b3JkLHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKFwiXCIpXHJcblxyXG5jb25zdCB7IGNsb3NlIH0gPSBwcm9wcztcclxuXHJcblxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cclxuICAgIDxkaXYgb25DbGljaz17KCkgPT4gY2xvc2UoKX0gY2xhc3NOYW1lPXtzdHlsZXMuY2xvc2V9Plg8L2Rpdj4gICAgXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxvZ299PjwvZGl2PlxyXG4gICAgPGRpdiBjbGFzc05hbWUgPSB7c3R5bGVzLmpvaW59PkNvbm5lY3QgdG8gSGFja2F0d2VldCBcclxuICAgIDwvZGl2PlxyXG4gICAgPGlucHV0IHBsYWNlaG9sZGVyPVwiVXNlcm5hbWVcIiBvbkNoYW5nZT17KGUpID0+IHNldFVzZXJOYW1lKGUudGFyZ2V0LnZhbHVlKX0gY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXR9IHZhbHVlPXt1c2VyTmFtZX0vPlxyXG4gICAgPGlucHV0IHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIiBvbkNoYW5nZT17KGUpID0+IHNldFBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKX0gY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXR9IHZhbHVlPXtwYXNzd29yZH0vPlxyXG4gICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRTaWduVXAoKX0gY2xhc3NOYW1lPXtzdHlsZXMuU2lnbklufT5TaWduIGluPC9idXR0b24+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaWduVXA7Il0sIm5hbWVzIjpbInN0eWxlcyIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiU2lnblVwIiwicHJvcHMiLCJ1c2VyTmFtZSIsInNldFVzZXJOYW1lIiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsImNsb3NlIiwiZGl2IiwiY2xhc3NOYW1lIiwibWFpbiIsIm9uQ2xpY2siLCJsb2dvIiwiam9pbiIsImlucHV0IiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImJ1dHRvbiIsInNldFNpZ25VcCIsIlNpZ25JbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/SignIn.js\n");

/***/ })

});