"use strict";
exports.id = 969;
exports.ids = [969];
exports.modules = {

/***/ 30969:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'lottie-web'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'lord-icon-element'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _egjs_react_grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(99633);
/* harmony import */ var _egjs_react_grid__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_egjs_react_grid__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(67269);
/* harmony import */ var react_photoswipe_gallery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(33571);
/* harmony import */ var _grid_FilterPanel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(66234);
/* harmony import */ var _data_pagesData__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(64434);
/* harmony import */ var _utils_BackgroundImageRatio__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1688);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([reactstrap__WEBPACK_IMPORTED_MODULE_4__, react_photoswipe_gallery__WEBPACK_IMPORTED_MODULE_5__]);
([reactstrap__WEBPACK_IMPORTED_MODULE_4__, react_photoswipe_gallery__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










const BodyContent = ({ size  })=>{
    const [filterData, setFilterData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(_data_pagesData__WEBPACK_IMPORTED_MODULE_7__/* .gridData.slice */ .Mn.slice(0, `${size === "small" ? "12" : "13"}`));
    const [isActive, setIsActive] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("all");
    Object(function webpackMissingModule() { var e = new Error("Cannot find module 'lord-icon-element'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'lottie-web'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        className: "portfolio-section portfolio-grid creative-3",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__.Container, {
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__.Row, {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_4__.Col, {
                    sm: "12",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_grid_FilterPanel__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                            filterData: filterData,
                            setFilterData: setFilterData,
                            isActive: isActive,
                            setIsActive: setIsActive,
                            gridData: _data_pagesData__WEBPACK_IMPORTED_MODULE_7__/* .gridData */ .Mn,
                            size: size === "small" ? 12 : 13
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__.Row, {
                            className: " grid ratio_square zoom-gallery-multiple m-0",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_egjs_react_grid__WEBPACK_IMPORTED_MODULE_3__.FrameGrid, {
                                className: "container",
                                gap: 5,
                                defaultDirection: "end",
                                frame: size === "small" ? [
                                    [
                                        1,
                                        2,
                                        3,
                                        4,
                                        5,
                                        5
                                    ],
                                    [
                                        6,
                                        6,
                                        7,
                                        8,
                                        5,
                                        5
                                    ],
                                    [
                                        6,
                                        6,
                                        9,
                                        10,
                                        11,
                                        12
                                    ]
                                ] : [
                                    [
                                        1,
                                        2,
                                        3,
                                        4,
                                        4,
                                        4
                                    ],
                                    [
                                        5,
                                        5,
                                        6,
                                        4,
                                        4,
                                        4
                                    ],
                                    [
                                        5,
                                        5,
                                        7,
                                        4,
                                        4,
                                        4
                                    ],
                                    [
                                        8,
                                        8,
                                        9,
                                        9,
                                        10,
                                        11
                                    ],
                                    [
                                        8,
                                        8,
                                        9,
                                        9,
                                        12,
                                        13
                                    ]
                                ],
                                rectSize: 0,
                                useFrameFill: true,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_photoswipe_gallery__WEBPACK_IMPORTED_MODULE_5__.Gallery, {
                                    children: filterData.map((imgPath, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__.Col, {
                                            lg: i === 4 || i === 5 ? "4" : "2",
                                            md: "4",
                                            sm: "6",
                                            className: "sale grid-item p-0",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "overlay",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "portfolio-image",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_photoswipe_gallery__WEBPACK_IMPORTED_MODULE_5__.Item, {
                                                        original: imgPath.img,
                                                        width: "1000",
                                                        height: "600",
                                                        children: ({ ref , open  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                ref: ref,
                                                                onClick: open,
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_utils_BackgroundImageRatio__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                                                    src: imgPath.img,
                                                                    className: "bg-img"
                                                                })
                                                            })
                                                    })
                                                })
                                            })
                                        }, i))
                                })
                            })
                        })
                    ]
                })
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BodyContent);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;