"use strict";
exports.id = 9398;
exports.ids = [9398];
exports.modules = {

/***/ 29642:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_range__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(32037);
/* harmony import */ var react_range__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_range__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(67269);
/* harmony import */ var _utils_NoSsr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(21736);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([reactstrap__WEBPACK_IMPORTED_MODULE_4__]);
reactstrap__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







const RangeInputFields = ({ label , name , filterValues , setFilterValues , min , max , sm , lg  })=>{
    const { symbol , currencyValue  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)((state)=>state.currencyReducer);
    const { price , area  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)((state)=>state.inputsReducer);
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();
    var [MIN, setMIN] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(min);
    var [MAX, setMAX] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(max);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setMIN(min);
        setMAX(max);
    }, [
        max,
        min
    ]);
    const STEP = 1;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__.Col, {
        lg: lg || 12,
        sm: sm || 12,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_utils_NoSsr__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__.FormGroup, {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "price-range",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_4__.Label, {
                            children: [
                                label,
                                " : ",
                                label === "Price" && `${symbol}`,
                                " ",
                                (label === "Area" ? area[0] : price[0] * currencyValue).toFixed(2),
                                " - ",
                                label === "Price" && `${symbol}`,
                                " ",
                                (label === "Area" ? area[1] : price[1] * currencyValue).toFixed(2),
                                " ",
                                label === "Area" && "sq ft"
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            id: label === "Price" ? "slider-1" : "slider-2",
                            className: "theme-range-3",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_range__WEBPACK_IMPORTED_MODULE_2__.Range, {
                                values: label === "Price" ? price : area,
                                step: STEP,
                                min: MIN || 1000,
                                max: MAX || 10000,
                                onChange: (values)=>{
                                    setFilterValues({
                                        ...filterValues,
                                        [`${name}`]: values
                                    });
                                    dispatch({
                                        type: label.toLowerCase(),
                                        payload: values
                                    });
                                },
                                renderTrack: ({ props , children  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        onMouseDown: props.onMouseDown,
                                        onTouchStart: props.onTouchStart,
                                        style: {
                                            ...props.style
                                        },
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            ref: props.ref,
                                            style: {
                                                height: "5px",
                                                width: "100%",
                                                borderRadius: "4px",
                                                background: (0,react_range__WEBPACK_IMPORTED_MODULE_2__.getTrackBackground)({
                                                    values: label === "Price" ? price : area,
                                                    colors: [
                                                        "#ccc",
                                                        "var(--theme-default2)",
                                                        "#ccc"
                                                    ],
                                                    min: MIN,
                                                    max: MAX
                                                }),
                                                alignSelf: "center"
                                            },
                                            children: children
                                        })
                                    }),
                                renderThumb: ({ props  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        ...props,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            style: {
                                                height: "16px",
                                                width: "8px",
                                                borderRadius: "30%",
                                                backgroundColor: "var(--theme-default2)"
                                            }
                                        })
                                    })
                            })
                        })
                    ]
                })
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RangeInputFields);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 19398:
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
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(67269);
/* harmony import */ var _utils_getData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5785);
/* harmony import */ var _elements_DropdownInputFields__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(39309);
/* harmony import */ var _elements_RangeInputFields__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(29642);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([reactstrap__WEBPACK_IMPORTED_MODULE_3__, _utils_getData__WEBPACK_IMPORTED_MODULE_4__, _elements_DropdownInputFields__WEBPACK_IMPORTED_MODULE_5__, _elements_RangeInputFields__WEBPACK_IMPORTED_MODULE_6__]);
([reactstrap__WEBPACK_IMPORTED_MODULE_3__, _utils_getData__WEBPACK_IMPORTED_MODULE_4__, _elements_DropdownInputFields__WEBPACK_IMPORTED_MODULE_5__, _elements_RangeInputFields__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
/**
 * It takes in a label, lg, and sm, and returns a row with a dropdown input field, a range input field,
 * and a button
 * @returns an object with the key of the property and the value of the property.
 */ 






const InputForm = ({ label , lg , sm , lastSm  })=>{
    const [filterValues, setFilterValues] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({});
    const [value, setValue] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        (0,_utils_getData__WEBPACK_IMPORTED_MODULE_4__/* .getData */ .Y)(`${"http://localhost:3000/api"}/property`).then((res)=>{
            setValue(res.data && res.data !== undefined && Object.keys(res.data).map((key)=>[
                    res.data[key]
                ]).flat(2).filter((arrData)=>Array.isArray(arrData.img)));
        }).catch((error)=>console.log("Error", error));
    }, []);
    let minPrice = value?.length !== 0 && value?.reduce(function(res, obj) {
        return Math.round(obj?.price) < Math.round(res?.price) ? obj : res;
    });
    let maxPrice = value?.length !== 0 && value?.reduce(function(res, obj) {
        return Math.round(obj?.price) > Math.round(res?.price) ? obj : res;
    });
    let minSqft = value?.length !== 0 && value?.reduce(function(res, obj) {
        return Math.round(obj?.sqft) < Math.round(res?.sqft) ? obj : res;
    });
    let maxSqft = value?.length !== 0 && value?.reduce(function(res, obj) {
        return Math.round(obj?.sqft) > Math.round(res?.sqft) ? obj : res;
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_3__.Row, {
        className: "gx-3",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_elements_DropdownInputFields__WEBPACK_IMPORTED_MODULE_5__/* .DropdownInputFields */ .U, {
                filterValues: filterValues,
                setFilterValues: setFilterValues,
                label: label,
                start: 0,
                end: 6,
                lg: lg,
                sm: sm,
                lastSm: lastSm
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_elements_RangeInputFields__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                label: "Price",
                name: "price",
                filterValues: filterValues,
                setFilterValues: setFilterValues,
                min: Math.round(minPrice?.price),
                max: Math.round(maxPrice?.price),
                lg: lg,
                sm: sm
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_elements_RangeInputFields__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                label: "Area",
                name: "area",
                filterValues: filterValues,
                setFilterValues: setFilterValues,
                min: Math.round(minSqft?.sqft),
                max: Math.round(maxSqft?.sqft),
                lg: lg,
                sm: sm
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__.Col, {
                lg: lg || 12,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                    href: "/listing/list-view/listing/left-sidebar",
                    className: "btn btn-gradient mt-3",
                    children: "Search"
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InputForm);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;