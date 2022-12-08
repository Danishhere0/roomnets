"use strict";
exports.id = 6212;
exports.ids = [6212];
exports.modules = {

/***/ 12073:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(99101);
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_feather__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);




const FilterTag = ()=>{
    const filterTag = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)((state)=>state.inputsReducer);
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();
    const StringConvert = (str)=>{
        var newStr = "";
        str.replace(str[0], str[0].toUpperCase()).split("").map((character)=>character === character.toUpperCase() ? newStr += " " + character : newStr += character);
        return newStr;
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "filter-tag-div",
        children: filterTag && Object.keys(filterTag).map((data, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
                children: filterTag[data] && (!Array.isArray(filterTag[data]) ? StringConvert(data).trim() !== filterTag[data] && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "filter-tag",
                    children: [
                        StringConvert(data),
                        " : ",
                        filterTag[data],
                        " ",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_feather__WEBPACK_IMPORTED_MODULE_2__.X, {
                            onClick: ()=>dispatch({
                                    type: data,
                                    dispatch: false
                                })
                        })
                    ]
                }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "filter-tag",
                    children: [
                        StringConvert(data),
                        " : ",
                        filterTag[data][0] + "-" + filterTag[data][1],
                        " ",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            onClick: ()=>dispatch({
                                    type: data,
                                    dispatch: []
                                })
                        })
                    ]
                }))
            }, i))
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FilterTag);


/***/ }),

/***/ 86212:
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
/* harmony import */ var _layout_Pagination__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(26590);
/* harmony import */ var _layout_sidebarLayout_Category__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(35033);
/* harmony import */ var _layout_sidebarLayout_ContactInfo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8441);
/* harmony import */ var _layout_sidebarLayout_Filter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(39812);
/* harmony import */ var _layout_sidebarLayout_Header__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(95317);
/* harmony import */ var _layout_sidebarLayout_RecentlyAdded__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(18885);
/* harmony import */ var _layout_sidebarLayout_Sidebar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(96919);
/* harmony import */ var _utils_getData__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5785);
/* harmony import */ var _elements_FilterTag__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(12073);
/* harmony import */ var _elements_GridLayout__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(69100);
/* harmony import */ var _gridReducer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(15705);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([reactstrap__WEBPACK_IMPORTED_MODULE_2__, _layout_sidebarLayout_Filter__WEBPACK_IMPORTED_MODULE_6__, _layout_sidebarLayout_Header__WEBPACK_IMPORTED_MODULE_7__, _layout_sidebarLayout_RecentlyAdded__WEBPACK_IMPORTED_MODULE_8__, _layout_sidebarLayout_Sidebar__WEBPACK_IMPORTED_MODULE_9__, _utils_getData__WEBPACK_IMPORTED_MODULE_10__, _elements_GridLayout__WEBPACK_IMPORTED_MODULE_12__]);
([reactstrap__WEBPACK_IMPORTED_MODULE_2__, _layout_sidebarLayout_Filter__WEBPACK_IMPORTED_MODULE_6__, _layout_sidebarLayout_Header__WEBPACK_IMPORTED_MODULE_7__, _layout_sidebarLayout_RecentlyAdded__WEBPACK_IMPORTED_MODULE_8__, _layout_sidebarLayout_Sidebar__WEBPACK_IMPORTED_MODULE_9__, _utils_getData__WEBPACK_IMPORTED_MODULE_10__, _elements_GridLayout__WEBPACK_IMPORTED_MODULE_12__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
/**
 * It takes in a bunch of props, and returns a bunch of JSX
 * @returns The return value of the function is the value of the last expression in the function body.
 */ 













const GridView = ({ side , size , gridType , listSize , mapModal , mapView , relativeSlider , gridBar , video , tabHeader , setMapModal , children , AdvancedSearchShow , infiniteScroll , myList  })=>{
    const [value, setValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const [grid, gridDispatch] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(_gridReducer__WEBPACK_IMPORTED_MODULE_13__/* .gridReducer */ .x, _gridReducer__WEBPACK_IMPORTED_MODULE_13__/* .initialGrid */ .T);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        gridDispatch({
            type: "gridSize",
            payload: size
        });
        gridDispatch({
            type: "gridStyle",
            payload: gridType
        });
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        (0,_utils_getData__WEBPACK_IMPORTED_MODULE_10__/* .getData */ .Y)(`${"http://localhost:3000/api"}/property`).then((res)=>{
            relativeSlider ? setValue(res.data?.LatestPropertyListingInEnterprise) : setValue(Object.keys(res.data).map((key)=>[
                    res.data[key]
                ]).flat(2).filter((arrData)=>Array.isArray(arrData.img)));
        }).catch((error)=>console.log("Error", error));
    }, [
        relativeSlider
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        className: `property-section  ${mapView && mapModal === "view" ? "section-sm" : ""}  ${relativeSlider ? "property-list-thumbnail" : ""}`,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__.Container, {
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_2__.Row, {
                className: " ratio_63",
                children: [
                    side && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_layout_sidebarLayout_Sidebar__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                        side: side,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layout_sidebarLayout_Filter__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                value: value,
                                sm: 12,
                                lg: 12
                            }),
                            " ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layout_sidebarLayout_Category__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                value: value
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layout_sidebarLayout_ContactInfo__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {}),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layout_sidebarLayout_RecentlyAdded__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {})
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_2__.Col, {
                        xl: side ? "9" : "",
                        lg: side ? "8" : "",
                        className: `${relativeSlider ? "property-grid-3" : "property-grid-2"}  property-grid-slider`,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layout_sidebarLayout_Header__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                grid: grid,
                                gridDispatch: gridDispatch,
                                title: "Properties Listing",
                                mapModal: mapModal,
                                gridBar: gridBar,
                                tabHeader: tabHeader,
                                AdvancedSearchShow: AdvancedSearchShow,
                                value: value,
                                setMapModal: setMapModal
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_elements_FilterTag__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {}),
                            children,
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: `property-wrapper-grid ${grid.gridStyle ? "list-view" : ""}`,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_elements_GridLayout__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                    grid: grid,
                                    myList: myList,
                                    value: value,
                                    listSize: listSize,
                                    relativeSlider: relativeSlider,
                                    video: video,
                                    gridDispatch: gridDispatch,
                                    infiniteScroll: infiniteScroll
                                })
                            }),
                            infiniteScroll ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                className: "btn btn-solid btn-flat load-more",
                                onClick: ()=>gridDispatch({
                                        type: "toPage",
                                        payload: grid.toPage + 0.5
                                    }),
                                children: "load more"
                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layout_Pagination__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GridView);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;