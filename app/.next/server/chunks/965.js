"use strict";
exports.id = 965;
exports.ids = [965];
exports.modules = {

/***/ 60965:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(67269);
/* harmony import */ var _components_elements_Logo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(17801);
/* harmony import */ var _data_footerData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(46294);
/* harmony import */ var _elements_FooterBlog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(51758);
/* harmony import */ var _elements_FooterContactUsDetails__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6783);
/* harmony import */ var _elements_FooterLink__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(43450);
/* harmony import */ var _elements_FooterMap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(28697);
/* harmony import */ var _elements_SubFooter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(22073);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([reactstrap__WEBPACK_IMPORTED_MODULE_2__, _elements_FooterBlog__WEBPACK_IMPORTED_MODULE_5__, _elements_FooterContactUsDetails__WEBPACK_IMPORTED_MODULE_6__, _elements_FooterLink__WEBPACK_IMPORTED_MODULE_7__, _elements_FooterMap__WEBPACK_IMPORTED_MODULE_8__, _elements_SubFooter__WEBPACK_IMPORTED_MODULE_9__]);
([reactstrap__WEBPACK_IMPORTED_MODULE_2__, _elements_FooterBlog__WEBPACK_IMPORTED_MODULE_5__, _elements_FooterContactUsDetails__WEBPACK_IMPORTED_MODULE_6__, _elements_FooterLink__WEBPACK_IMPORTED_MODULE_7__, _elements_FooterMap__WEBPACK_IMPORTED_MODULE_8__, _elements_SubFooter__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










const FooterOne = ({ logo  })=>{
    const [isActive, setIsActive] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("footer", {
        className: "footer-brown",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "footer footer-custom-col",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__.Container, {
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_2__.Row, {
                        className: "row",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_elements_FooterContactUsDetails__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                isActive: isActive,
                                setIsActive: setIsActive,
                                logo: logo || /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_elements_Logo__WEBPACK_IMPORTED_MODULE_3__/* .Logo */ .TR, {})
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_elements_FooterLink__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                value: _data_footerData__WEBPACK_IMPORTED_MODULE_4__/* .FooterData.about */ .c.about,
                                isActive: isActive,
                                setIsActive: setIsActive
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_elements_FooterMap__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                isActive: isActive,
                                setIsActive: setIsActive
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_elements_FooterLink__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                value: _data_footerData__WEBPACK_IMPORTED_MODULE_4__/* .FooterData.tag */ .c.tag,
                                isActive: isActive,
                                setIsActive: setIsActive
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_elements_FooterBlog__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                isActive: isActive,
                                setIsActive: setIsActive,
                                img: [
                                    "/assets/images/footer/1.jpg",
                                    "/assets/images/footer/2.jpg"
                                ]
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_elements_SubFooter__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {})
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FooterOne);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;