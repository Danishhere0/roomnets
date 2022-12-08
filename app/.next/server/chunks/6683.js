"use strict";
exports.id = 6683;
exports.ids = [6683];
exports.modules = {

/***/ 36683:
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
/* harmony import */ var _layout_sidebarLayout_Sidebar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(96919);
/* harmony import */ var _layout_sidebarLayout_SearchBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(75003);
/* harmony import */ var _layout_sidebarLayout_Category__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(35033);
/* harmony import */ var _layout_sidebarLayout_RecentlyAdded__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(18885);
/* harmony import */ var _layout_sidebarLayout_PopularTags__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(43307);
/* harmony import */ var _utils_getData__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5785);
/* harmony import */ var _elements_propertyBoxs_BlogWrapBox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(18966);
/* harmony import */ var _layout_Pagination__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(26590);
/* harmony import */ var _listing_gridView_grid_gridReducer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(15705);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([reactstrap__WEBPACK_IMPORTED_MODULE_2__, _layout_sidebarLayout_Sidebar__WEBPACK_IMPORTED_MODULE_3__, _layout_sidebarLayout_RecentlyAdded__WEBPACK_IMPORTED_MODULE_6__, _utils_getData__WEBPACK_IMPORTED_MODULE_8__]);
([reactstrap__WEBPACK_IMPORTED_MODULE_2__, _layout_sidebarLayout_Sidebar__WEBPACK_IMPORTED_MODULE_3__, _layout_sidebarLayout_RecentlyAdded__WEBPACK_IMPORTED_MODULE_6__, _utils_getData__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
/**
 * It takes a number of items per page and a total number of items and returns the total number of
 * pages
 * @returns The return value of the function is the value of the last expression executed in the
 * function.
 */ 











const BodyContent = ({ side  })=>{
    const [grid, gridDispatch] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(_listing_gridView_grid_gridReducer__WEBPACK_IMPORTED_MODULE_11__/* .gridReducer */ .x, _listing_gridView_grid_gridReducer__WEBPACK_IMPORTED_MODULE_11__/* .initialGrid */ .T);
    const [value, setValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        (0,_utils_getData__WEBPACK_IMPORTED_MODULE_8__/* .getData */ .Y)(`${"http://localhost:3000/api"}/property`).then((res)=>{
            setValue(res.data.LatestBlogInCorporate);
            gridDispatch({
                type: "totalPages",
                payload: Math.ceil(res.data.LatestBlogInCorporate.length / 6)
            });
        }).catch((error)=>console.log("Error", error));
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        className: "ratio2_1",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__.Container, {
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_2__.Row, {
                children: [
                    side && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_layout_sidebarLayout_Sidebar__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                        side: side,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layout_sidebarLayout_SearchBar__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {}),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layout_sidebarLayout_Category__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {}),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layout_sidebarLayout_RecentlyAdded__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {}),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layout_sidebarLayout_PopularTags__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {})
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_2__.Col, {
                        xl: side ? "9" : "12",
                        lg: side ? "8" : "12",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__.Row, {
                                className: "blog-grid ",
                                children: value && value.slice(grid.toPage * 6 - 6, grid.toPage * 6).map((data, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__.Col, {
                                        md: "6",
                                        lg: side === "right" || side === "left" ? "6" : "4",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_elements_propertyBoxs_BlogWrapBox__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                            data: data
                                        })
                                    }, i))
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layout_Pagination__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                toPage: grid.toPage,
                                gridDispatch: gridDispatch,
                                totalPages: grid.totalPages
                            })
                        ]
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BodyContent);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 75003:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const SearchBar = ()=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "search-bar my-3",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                type: "text",
                placeholder: "Search here.."
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                className: "fas fa-search"
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SearchBar);


/***/ })

};
;