"use strict";
exports.id = 5317;
exports.ids = [5317];
exports.modules = {

/***/ 79441:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_home_slider_filter_search_homeElements_InputForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19398);
/* harmony import */ var _utils_useMobileSize__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(65531);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_home_slider_filter_search_homeElements_InputForm__WEBPACK_IMPORTED_MODULE_2__]);
_components_home_slider_filter_search_homeElements_InputForm__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
/**
 * It's a function that returns a div with a className that is a string that is a concatenation of a
 * few strings.
 * @returns A React component.
 */ 



const AdvancedSearch = ({ advancedSearchOpen , setAdvancedSearchOpen , value  })=>{
    const mobile = (0,_utils_useMobileSize__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: `left-sidebar filter-bottom-content ${advancedSearchOpen ? "d-block open" : "d-none"}  ${!mobile ? "position-absolute" : ""} `,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                className: "d-lg-none d-block text-end",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    className: "close-filter-bottom",
                    onClick: ()=>setAdvancedSearchOpen(false),
                    children: "Close filter"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_home_slider_filter_search_homeElements_InputForm__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                value: value,
                lg: 4,
                sm: 12
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AdvancedSearch);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 95317:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(99101);
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_feather__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(67269);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _advancedSearch_AdvancedSearch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(79441);
/* harmony import */ var _utils_useMobileSize__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(65531);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([reactstrap__WEBPACK_IMPORTED_MODULE_3__, _advancedSearch_AdvancedSearch__WEBPACK_IMPORTED_MODULE_5__]);
([reactstrap__WEBPACK_IMPORTED_MODULE_3__, _advancedSearch_AdvancedSearch__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
/**
 * It renders a header with a title, a dropdown, and a grid/list toggle
 * @returns The return statement is used to return a value from a function.
 */ 






const Header = ({ grid , mapView , mapModal , gridBar , tabHeader , title , AdvancedSearchShow , productCount , setMapModal , gridDispatch  })=>{
    const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [advancedSearchOpen, setAdvancedSearchOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [mapModalOpen, setMapModalOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { sortBy , propertyStatus  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)((state)=>state.inputsReducer);
    const mobileSize = (0,_utils_useMobileSize__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)("AdvancedSearch");
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "filter-panel",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "top-panel",
                children: [
                    tabHeader ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "filters respon-filter-content filter-button-group",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                    className: propertyStatus === "Property Status" || !propertyStatus?.length ? "active" : "",
                                    onClick: ()=>dispatch({
                                            type: "propertyStatus",
                                            payload: "Property Status"
                                        }),
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        children: "All Property"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                    className: propertyStatus === "For Sale" ? "active" : "",
                                    onClick: ()=>dispatch({
                                            type: "propertyStatus",
                                            payload: "For Sale"
                                        }),
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        children: "For Sale"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                    className: propertyStatus === "For Rent" ? "active" : "",
                                    onClick: ()=>dispatch({
                                            type: "propertyStatus",
                                            payload: "For Rent"
                                        }),
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        children: "For rent"
                                    })
                                })
                            ]
                        })
                    }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                children: title
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                className: "show-result",
                                children: [
                                    "Showing",
                                    " ",
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                        children: [
                                            (title === "Agency Listing" ? 9 : 6) * (grid.toPage || 1) - (title === "Agency Listing" ? 9 : 6),
                                            "-",
                                            (title === "Agency Listing" ? 9 : 6) * (grid.toPage || 1) > productCount ? productCount : (title === "Agency Listing" ? 9 : 6) * (grid.toPage || 1),
                                            " of ",
                                            productCount
                                        ]
                                    }),
                                    " ",
                                    "Listings"
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                        className: "grid-list-filter d-flex",
                        children: [
                            mapModal && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                    onClick: ()=>{
                                        setMapModal(!mapModalOpen);
                                        setMapModalOpen(!mapModalOpen);
                                    },
                                    children: [
                                        "View on map",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "arrow-define",
                                            children: "Click to view"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                children: (AdvancedSearchShow || mobileSize) && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "filter-bottom-title",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h6", {
                                        className: "mb-0 font-roboto",
                                        onClick: ()=>setAdvancedSearchOpen(!advancedSearchOpen),
                                        children: [
                                            "Advance search ",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_feather__WEBPACK_IMPORTED_MODULE_2__.AlignCenter, {
                                                className: "float-end ms-2"
                                            })
                                        ]
                                    })
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_3__.Dropdown, {
                                    isOpen: isOpen,
                                    toggle: ()=>setIsOpen(!isOpen),
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_3__.DropdownToggle, {
                                            className: " font-rubik",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    children: sortBy || "Sort by Newest"
                                                }),
                                                " ",
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                    className: "fas fa-angle-down ms-lg-3 ms-2"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_3__.DropdownMenu, {
                                            className: " text-start",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__.DropdownItem, {
                                                    onClick: ()=>dispatch({
                                                            type: "sortBy",
                                                            payload: "Sort by Newest"
                                                        }),
                                                    children: "Sort by Newest"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__.DropdownItem, {
                                                    onClick: ()=>dispatch({
                                                            type: "sortBy",
                                                            payload: "Sort by Oldest"
                                                        }),
                                                    children: "Sort by Oldest"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__.DropdownItem, {
                                                    onClick: ()=>dispatch({
                                                            type: "sortBy",
                                                            payload: "High to Low Price"
                                                        }),
                                                    children: "High to Low Price"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__.DropdownItem, {
                                                    onClick: ()=>dispatch({
                                                            type: "sortBy",
                                                            payload: "Low to High price"
                                                        }),
                                                    children: "Low to High price"
                                                })
                                            ]
                                        })
                                    ]
                                })
                            }),
                            gridBar && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        className: `collection-grid-view ${mapView ? "d-none" : "d-block"}`,
                                        style: {
                                            opacity: `${grid.gridStyle === "grid-view" ? "1" : "0"}`
                                        },
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                        src: "/assets/images/icon/2.png",
                                                        alt: "",
                                                        className: "product-2-layout-view",
                                                        onClick: ()=>gridDispatch({
                                                                type: "gridSize",
                                                                payload: 2
                                                            })
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                        src: "/assets/images/icon/3.png",
                                                        alt: "",
                                                        className: "product-3-layout-view",
                                                        onClick: ()=>gridDispatch({
                                                                type: "gridSize",
                                                                payload: 3
                                                            })
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                        src: "/assets/images/icon/4.png",
                                                        alt: "",
                                                        className: "product-4-layout-view",
                                                        onClick: ()=>gridDispatch({
                                                                type: "gridSize",
                                                                payload: 4
                                                            })
                                                    })
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        className: `grid-btn ${grid.gridStyle === "grid-view" && "active"}`,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            className: "grid-layout-view",
                                            onClick: ()=>gridDispatch({
                                                    type: "gridStyle",
                                                    payload: "grid-view"
                                                }),
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_feather__WEBPACK_IMPORTED_MODULE_2__.Grid, {})
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        className: `list-btn ${grid.gridStyle === "list-view" && "active"}`,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            className: "list-layout-view",
                                            onClick: ()=>gridDispatch({
                                                    type: "gridStyle",
                                                    payload: "list-view"
                                                }),
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_feather__WEBPACK_IMPORTED_MODULE_2__.List, {})
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_advancedSearch_AdvancedSearch__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                advancedSearchOpen: advancedSearchOpen,
                setAdvancedSearchOpen: setAdvancedSearchOpen
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;