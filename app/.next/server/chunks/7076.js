"use strict";
exports.id = 7076;
exports.ids = [7076];
exports.modules = {

/***/ 97076:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _egjs_react_grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(99633);
/* harmony import */ var _egjs_react_grid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_egjs_react_grid__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(67269);
/* harmony import */ var _layout_sidebarLayout_Sidebar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(96919);
/* harmony import */ var _layout_sidebarLayout_Category__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(35033);
/* harmony import */ var _layout_sidebarLayout_RecentlyAdded__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(18885);
/* harmony import */ var _layout_sidebarLayout_PopularTags__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(43307);
/* harmony import */ var _utils_getData__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5785);
/* harmony import */ var _elements_propertyBoxs_BlogWrapBox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(18966);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([reactstrap__WEBPACK_IMPORTED_MODULE_3__, _layout_sidebarLayout_Sidebar__WEBPACK_IMPORTED_MODULE_4__, _layout_sidebarLayout_RecentlyAdded__WEBPACK_IMPORTED_MODULE_6__, _utils_getData__WEBPACK_IMPORTED_MODULE_8__]);
([reactstrap__WEBPACK_IMPORTED_MODULE_3__, _layout_sidebarLayout_Sidebar__WEBPACK_IMPORTED_MODULE_4__, _layout_sidebarLayout_RecentlyAdded__WEBPACK_IMPORTED_MODULE_6__, _utils_getData__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
/**
 * It takes an array of items and returns a new array with the items in a random order
 * @returns The return value of the function is the value of the last expression executed by the
 * function.
 */ 









const BodyContent = ({ side  })=>{
    const [value, setValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        (0,_utils_getData__WEBPACK_IMPORTED_MODULE_8__/* .getData */ .Y)(`${"http://localhost:3000/api"}/property`).then((res)=>{
            setValue(res.data?.LatestBlogInCorporate);
        }).catch((error)=>console.log("Error", error));
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__.Container, {
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_3__.Row, {
                children: [
                    side && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_layout_sidebarLayout_Sidebar__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        side: side,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layout_sidebarLayout_Category__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {}),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layout_sidebarLayout_RecentlyAdded__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {}),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layout_sidebarLayout_PopularTags__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {})
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__.Col, {
                        xl: side ? "9" : "12",
                        lg: side ? "8" : "12",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__.Row, {
                            className: "blog-grid grid",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_egjs_react_grid__WEBPACK_IMPORTED_MODULE_2__.MasonryGrid, {
                                className: "masonry-spacing",
                                children: value?.map((data, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__.Col, {
                                        sm: side ? "6" : "4",
                                        className: "grid-item wow fadeInUp ",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_elements_propertyBoxs_BlogWrapBox__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                            data: data,
                                            masonry: true
                                        })
                                    }, i))
                            })
                        })
                    })
                ]
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