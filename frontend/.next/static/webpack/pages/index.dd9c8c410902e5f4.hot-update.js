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

/***/ "./components/Login.js":
/*!*****************************!*\
  !*** ./components/Login.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Login_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/Login.module.css */ \"./styles/Login.module.css\");\n/* harmony import */ var _styles_Login_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Login_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _SignIn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SignIn */ \"./components/SignIn.js\");\n/* harmony import */ var _SignUp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SignUp */ \"./components/SignUp.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Login() {\n    var closeSignUp = function closeSignUp() {\n        setSignUp(false);\n    };\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false), signup = ref[0], setSignUp = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false), signin = ref1[0], setSignIn = ref1[1];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Login_module_css__WEBPACK_IMPORTED_MODULE_4___default().container),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_Login_module_css__WEBPACK_IMPORTED_MODULE_4___default().mainLogin),\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Login_module_css__WEBPACK_IMPORTED_MODULE_4___default().contentLogin),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Login_module_css__WEBPACK_IMPORTED_MODULE_4___default().logo)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\dreye\\\\Desktop\\\\TwitterLike\\\\frontend\\\\components\\\\Login.js\",\n                        lineNumber: 22,\n                        columnNumber: 5\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Login_module_css__WEBPACK_IMPORTED_MODULE_4___default().seeWhat),\n                        children: \"See whats happening\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\dreye\\\\Desktop\\\\TwitterLike\\\\frontend\\\\components\\\\Login.js\",\n                        lineNumber: 24,\n                        columnNumber: 5\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Login_module_css__WEBPACK_IMPORTED_MODULE_4___default().join),\n                        children: \"Join Hackatweet today.\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\dreye\\\\Desktop\\\\TwitterLike\\\\frontend\\\\components\\\\Login.js\",\n                        lineNumber: 27,\n                        columnNumber: 5\n                    }, this),\n                    signup && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SignUp__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        close: closeSignUp\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\dreye\\\\Desktop\\\\TwitterLike\\\\frontend\\\\components\\\\Login.js\",\n                        lineNumber: 30,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: function() {\n                            return setSignUp(true);\n                        },\n                        className: (_styles_Login_module_css__WEBPACK_IMPORTED_MODULE_4___default().SignUp),\n                        children: \"Sign up\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\dreye\\\\Desktop\\\\TwitterLike\\\\frontend\\\\components\\\\Login.js\",\n                        lineNumber: 31,\n                        columnNumber: 5\n                    }, this),\n                    \"Already have an account ?\",\n                    signin && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SignIn__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\dreye\\\\Desktop\\\\TwitterLike\\\\frontend\\\\components\\\\Login.js\",\n                        lineNumber: 33,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: function() {\n                            return setSignIn(true);\n                        },\n                        className: (_styles_Login_module_css__WEBPACK_IMPORTED_MODULE_4___default().SignIn),\n                        children: \"Sign in\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\dreye\\\\Desktop\\\\TwitterLike\\\\frontend\\\\components\\\\Login.js\",\n                        lineNumber: 34,\n                        columnNumber: 5\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\dreye\\\\Desktop\\\\TwitterLike\\\\frontend\\\\components\\\\Login.js\",\n                lineNumber: 21,\n                columnNumber: 5\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\dreye\\\\Desktop\\\\TwitterLike\\\\frontend\\\\components\\\\Login.js\",\n            lineNumber: 20,\n            columnNumber: 5\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\dreye\\\\Desktop\\\\TwitterLike\\\\frontend\\\\components\\\\Login.js\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, this);\n}\n_s(Login, \"HnGarLJhUC1Ra6niu0LfaSDT4EA=\");\n_c = Login;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Login); // <SignIn/>\n // <SignUp/>\nvar _c;\n$RefreshReg$(_c, \"Login\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0xvZ2luLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQWdEO0FBQ2xCO0FBQ0E7QUFDYzs7QUFHNUMsU0FBU0ssS0FBSyxHQUFHO1FBR05DLFdBQVcsR0FBcEIsU0FBU0EsV0FBVyxHQUFHO1FBQ3JCQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDbEI7O0lBSkQsSUFBNEJILEdBQWUsR0FBZkEsK0NBQVEsQ0FBQyxLQUFLLENBQUMsRUFQN0MsTUFPZSxHQUFlQSxHQUFlLEdBQTlCLEVBUGYsU0FPMEIsR0FBSUEsR0FBZSxHQUFuQjtJQU14QixJQUE0QkEsSUFBZSxHQUFmQSwrQ0FBUSxDQUFDLEtBQUssQ0FBQyxFQWI3QyxNQWFlLEdBQWVBLElBQWUsR0FBOUIsRUFiZixTQWEwQixHQUFJQSxJQUFlLEdBQW5CO0lBSXhCLHFCQUNFLDhEQUFDTyxLQUFHO1FBQUNDLFNBQVMsRUFBRVosMkVBQWdCO2tCQUNoQyw0RUFBQ1csS0FBRztZQUFDQyxTQUFTLEVBQUVaLDJFQUFnQjtzQkFDaEMsNEVBQUNXLEtBQUc7Z0JBQUNDLFNBQVMsRUFBRVosOEVBQW1COztrQ0FDbkMsOERBQUNXLEtBQUc7d0JBQUNDLFNBQVMsRUFBRVosc0VBQVc7Ozs7OzRCQUNyQjtrQ0FDTiw4REFBQ1csS0FBRzt3QkFBQ0MsU0FBUyxFQUFJWix5RUFBYztrQ0FBRSxxQkFFbEM7Ozs7OzRCQUFNO2tDQUNOLDhEQUFDVyxLQUFHO3dCQUFDQyxTQUFTLEVBQUlaLHNFQUFXO2tDQUFFLHdCQUUvQjs7Ozs7NEJBQU07b0JBQ0pRLE1BQU0sa0JBQUksOERBQUNOLCtDQUFNO3dCQUFDaUIsS0FBSyxFQUFFYixXQUFXOzs7Ozs0QkFBSTtrQ0FDMUMsOERBQUNjLFFBQU07d0JBQUNDLE9BQU8sRUFBRTttQ0FBTWQsU0FBUyxDQUFDLElBQUksQ0FBQzt5QkFBQTt3QkFBSUssU0FBUyxFQUFFWix3RUFBYTtrQ0FBRSxTQUFPOzs7Ozs0QkFBUztvQkFBQSwyQkFFcEY7b0JBQUVTLE1BQU0sa0JBQUksOERBQUNSLCtDQUFNOzs7OzRCQUFHO2tDQUN0Qiw4REFBQ21CLFFBQU07d0JBQUNDLE9BQU8sRUFBRTttQ0FBTVgsU0FBUyxDQUFDLElBQUksQ0FBQzt5QkFBQTt3QkFBRUUsU0FBUyxFQUFFWix3RUFBYTtrQ0FBRSxTQUFPOzs7Ozs0QkFBUzs7Ozs7O29CQUM1RTs7Ozs7Z0JBQ0E7Ozs7O1lBQ0EsQ0FDTjtDQUNIO0dBaENRSyxLQUFLO0FBQUxBLEtBQUFBLEtBQUs7QUFrQ2QsK0RBQWVBLEtBQUssRUFBQyxDQUVyQixZQUFZO0NBQ1osWUFBWSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0xvZ2luLmpzPzY1MGMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvTG9naW4ubW9kdWxlLmNzcyc7XHJcbmltcG9ydCBTaWduSW4gZnJvbSAnLi9TaWduSW4nO1xyXG5pbXBvcnQgU2lnblVwIGZyb20gJy4vU2lnblVwJztcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuXHJcblxyXG5mdW5jdGlvbiBMb2dpbigpIHtcclxuICBjb25zdCBbc2lnbnVwLCBzZXRTaWduVXBdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBmdW5jdGlvbiBjbG9zZVNpZ25VcCgpIHtcclxuICAgIHNldFNpZ25VcChmYWxzZSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBbc2lnbmluLCBzZXRTaWduSW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWFpbkxvZ2lufT5cclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGVudExvZ2lufT5cclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubG9nb30+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3NOYW1lID0ge3N0eWxlcy5zZWVXaGF0fT5cclxuICAgIFNlZSB3aGF0cyBoYXBwZW5pbmdcclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzc05hbWUgPSB7c3R5bGVzLmpvaW59PlxyXG4gICAgSm9pbiBIYWNrYXR3ZWV0IHRvZGF5LlxyXG4gICAgPC9kaXY+XHJcbiAgICB7IHNpZ251cCAmJiA8U2lnblVwIGNsb3NlPXtjbG9zZVNpZ25VcH0gLz4gfVxyXG4gICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRTaWduVXAodHJ1ZSl9ICAgY2xhc3NOYW1lPXtzdHlsZXMuU2lnblVwfT5TaWduIHVwPC9idXR0b24+XHJcbiAgICBBbHJlYWR5IGhhdmUgYW4gYWNjb3VudCA/XHJcbiAgICB7IHNpZ25pbiAmJiA8U2lnbkluIC8+IH1cclxuICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2V0U2lnbkluKHRydWUpfSBjbGFzc05hbWU9e3N0eWxlcy5TaWduSW59PlNpZ24gaW48L2J1dHRvbj5cclxuICAgIDwvZGl2PiAgIFxyXG4gICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2dpbjtcclxuXHJcbi8vIDxTaWduSW4vPlxyXG4vLyA8U2lnblVwLz5cclxuIl0sIm5hbWVzIjpbInN0eWxlcyIsIlNpZ25JbiIsIlNpZ25VcCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiTG9naW4iLCJjbG9zZVNpZ25VcCIsInNldFNpZ25VcCIsInNpZ251cCIsInNpZ25pbiIsInNldFNpZ25JbiIsImRpdiIsImNsYXNzTmFtZSIsImNvbnRhaW5lciIsIm1haW5Mb2dpbiIsImNvbnRlbnRMb2dpbiIsImxvZ28iLCJzZWVXaGF0Iiwiam9pbiIsImNsb3NlIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Login.js\n");

/***/ })

});