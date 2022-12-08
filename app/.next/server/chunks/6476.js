"use strict";
exports.id = 6476;
exports.ids = [6476];
exports.modules = {

/***/ 96476:
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
/* harmony import */ var _layout_sidebarLayout_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(95317);
/* harmony import */ var _layout_Pagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(26590);
/* harmony import */ var _utils_getData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5785);
/* harmony import */ var _elements_GridLayout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(69100);
/* harmony import */ var _grid_gridReducer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(15705);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([reactstrap__WEBPACK_IMPORTED_MODULE_2__, _layout_sidebarLayout_Header__WEBPACK_IMPORTED_MODULE_3__, _utils_getData__WEBPACK_IMPORTED_MODULE_5__, _elements_GridLayout__WEBPACK_IMPORTED_MODULE_6__]);
([reactstrap__WEBPACK_IMPORTED_MODULE_2__, _layout_sidebarLayout_Header__WEBPACK_IMPORTED_MODULE_3__, _utils_getData__WEBPACK_IMPORTED_MODULE_5__, _elements_GridLayout__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
/**
 * It renders a map and a grid of properties
 * @param props - This is the props that are passed to the component.
 * @returns The return value of the function is the value of the last expression executed in the
 * function.
 */ 







const MapView = (props)=>{
    const [value, setValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const [grid, gridDispatch] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(_grid_gridReducer__WEBPACK_IMPORTED_MODULE_7__/* .gridReducer */ .x, _grid_gridReducer__WEBPACK_IMPORTED_MODULE_7__/* .initialGrid */ .T);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        (0,_utils_getData__WEBPACK_IMPORTED_MODULE_5__/* .getData */ .Y)(`${"http://localhost:3000/api"}/property`).then((res)=>{
            setValue(res.data?.LatestPropertyListingInEnterprise);
        }).catch((error)=>console.log("Error", error));
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        className: "property-section section-sm",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__.Container, {
            fluid: true,
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_2__.Row, {
                className: " ratio_70 property-grid-2 property-map",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__.Col, {
                        lg: "12",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layout_sidebarLayout_Header__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                            gridDispatch: gridDispatch,
                            grid: grid,
                            mapView: true,
                            gridBar: true,
                            value: value,
                            title: "Properties Listing",
                            AdvancedSearchShow: true
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__.Col, {
                        xl: "5",
                        className: `map-section  ${props.side === "right" ? "order-1" : ""}`,
                        children: props.children
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_2__.Col, {
                        xl: "7",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_elements_GridLayout__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                value: value,
                                gridSize: 2,
                                propertyTag: "all",
                                gridDispatch: gridDispatch,
                                grid: grid
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layout_Pagination__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MapView);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;