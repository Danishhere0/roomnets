"use strict";
exports.id = 8259;
exports.ids = [8259];
exports.modules = {

/***/ 8259:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(41664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(99101);
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_feather__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(67269);
/* harmony import */ var _layout_Pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(26590);
/* harmony import */ var _layout_sidebarLayout_Category__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(35033);
/* harmony import */ var _layout_sidebarLayout_PopularTags__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(43307);
/* harmony import */ var _layout_sidebarLayout_RecentlyAdded__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(18885);
/* harmony import */ var _layout_sidebarLayout_SearchBar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(75003);
/* harmony import */ var _layout_sidebarLayout_Sidebar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(96919);
/* harmony import */ var _utils_BackgroundImageRatio__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1688);
/* harmony import */ var _utils_getData__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(5785);
/* harmony import */ var _elements_propertyBoxs_BlogWrapBoxTwo__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(37550);
/* harmony import */ var _listing_gridView_grid_gridReducer__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(15705);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([reactstrap__WEBPACK_IMPORTED_MODULE_4__, _layout_sidebarLayout_RecentlyAdded__WEBPACK_IMPORTED_MODULE_8__, _layout_sidebarLayout_Sidebar__WEBPACK_IMPORTED_MODULE_10__, _utils_getData__WEBPACK_IMPORTED_MODULE_12__]);
([reactstrap__WEBPACK_IMPORTED_MODULE_4__, _layout_sidebarLayout_RecentlyAdded__WEBPACK_IMPORTED_MODULE_8__, _layout_sidebarLayout_Sidebar__WEBPACK_IMPORTED_MODULE_10__, _utils_getData__WEBPACK_IMPORTED_MODULE_12__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);















const BodyContent = ({ side  })=>{
    const [value, setValue] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();
    const [grid, gridDispatch] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useReducer)(_listing_gridView_grid_gridReducer__WEBPACK_IMPORTED_MODULE_14__/* .gridReducer */ .x, _listing_gridView_grid_gridReducer__WEBPACK_IMPORTED_MODULE_14__/* .initialGrid */ .T);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        (0,_utils_getData__WEBPACK_IMPORTED_MODULE_12__/* .getData */ .Y)(`${"http://localhost:3000/api"}/property`).then((res)=>{
            setValue(res.data.LatestBlogInCorporate);
            gridDispatch({
                type: "totalPages",
                payload: Math.ceil(res.data.LatestBlogInCorporate.length / 4)
            });
        }).catch((error)=>console.log("Error", error));
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        className: "ratio_landscape blog-list-section",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__.Container, {
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_4__.Row, {
                children: [
                    side && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_layout_sidebarLayout_Sidebar__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                        side: side,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layout_sidebarLayout_SearchBar__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {}),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layout_sidebarLayout_Category__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {}),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layout_sidebarLayout_RecentlyAdded__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {}),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layout_sidebarLayout_PopularTags__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {})
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_4__.Col, {
                        xl: "9",
                        lg: "8",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__.Row, {
                                className: "blog-grid mb-0",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__.Col, {
                                    md: "12",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "blog-wrap wow fadeInUp",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "blog-image",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_utils_BackgroundImageRatio__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                                            src: "/assets/images/blog/1.jpg",
                                                            className: "bg-img img-fluid",
                                                            alt: ""
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "blog-label",
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                                    children: "05"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                    children: "nov"
                                                                })
                                                            ]
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "blog-details",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_feather__WEBPACK_IMPORTED_MODULE_3__.MapPin, {}),
                                                            " Phonics ,Newyork"
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                            href: "/pages/blog-detail-pages/left-sidebar",
                                                            children: "Twice profit than before you ever got in business."
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        className: "font-roboto",
                                                        children: "Sometimes complemented by advice and practical assistance. Decoration is the furnishing of a space with decorative elements, sometimes complemented by advice and practical assistance. "
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                        href: "/pages/blog-detail-pages/left-sidebar",
                                                        children: "read more"
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_4__.Col, {
                                xl: "12",
                                lg: "12",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__.Row, {
                                        className: "blog-list ",
                                        children: value && value.slice(grid.toPage * 4 - 4, grid.toPage * 4).map((data, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__.Col, {
                                                md: "12",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_elements_propertyBoxs_BlogWrapBoxTwo__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                                                    data: data
                                                })
                                            }, i))
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layout_Pagination__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                        toPage: grid.toPage,
                                        gridDispatch: gridDispatch,
                                        totalPages: grid.totalPages
                                    })
                                ]
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

/***/ })

};
;