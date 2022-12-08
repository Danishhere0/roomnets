"use strict";
exports.id = 1560;
exports.ids = [1560];
exports.modules = {

/***/ 81054:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(41664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_content_loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(38782);
/* harmony import */ var react_content_loader__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_content_loader__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_BackgroundImageRatio__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1688);
/* harmony import */ var _SocialAccounts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(10473);
/**
 * It's a function that returns a div with a bunch of other divs and spans inside it
 * @returns A React component
 */ 





const PropertyBoxFour = ({ data  })=>{
    const [load, setLoad] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);
    const [show, setShow] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: !load ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "property-box",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "agent-image",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_utils_BackgroundImageRatio__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                src: data?.img,
                                className: "bg-img",
                                alt: ""
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                className: "label label-shadow",
                                children: [
                                    data?.property,
                                    " properties"
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "agent-overlay"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "overlay-content",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_SocialAccounts__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {}),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        children: "Connect"
                                    })
                                ]
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "agent-content",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                href: "/pages/agency/agency-profile",
                                children: data?.name
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "font-roboto",
                            children: "Real estate Agent"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                            className: "agent-contact",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                            className: "fas fa-phone-alt"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                            className: "character",
                                            children: [
                                                "+91 ",
                                                data?.mobile === show ? data?.mobile : data?.mobile.slice(0, 5) + "*****"
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "label label-light label-flat",
                                            onClick: ()=>{
                                                setShow(data?.mobile);
                                                data?.mobile === show && setShow();
                                            },
                                            children: show === data?.mobile ? "show" : "hide"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                            className: "fas fa-envelope"
                                        }),
                                        " ",
                                        data?.mail
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                            className: "fas fa-fax"
                                        }),
                                        " ",
                                        data?.pinCode
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                            href: "/agent/agent-profile",
                            children: [
                                "View profile ",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                    className: "fas fa-arrow-right"
                                })
                            ]
                        })
                    ]
                })
            ]
        }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_content_loader__WEBPACK_IMPORTED_MODULE_3___default()), {
            className: "skeleton-svg",
            children: [
                setTimeout(()=>{
                    setLoad(false);
                }, 2000),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                    className: "skeleton-img"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                    className: "skeleton-c1"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                    className: "skeleton-c2"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                    className: "skeleton-c3"
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PropertyBoxFour);


/***/ }),

/***/ 15705:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "T": () => (/* binding */ initialGrid),
/* harmony export */   "x": () => (/* binding */ gridReducer)
/* harmony export */ });
const initialGrid = {
    gridSize: "",
    gridStyle: "",
    toPage: 1,
    totalPages: "",
    productCount: ""
};
const gridReducer = (state, action)=>{
    switch(action.type){
        case "gridSize":
            return {
                ...state,
                gridSize: action.payload
            };
        case "gridStyle":
            return {
                ...state,
                gridStyle: action.payload
            };
        case "toPage":
            return {
                ...state,
                toPage: action.payload
            };
        case "totalPages":
            return {
                ...state,
                totalPages: action.payload
            };
        case "productCount":
            return {
                ...state,
                productCount: action.payload
            };
        default:
            return state;
    }
};



/***/ }),

/***/ 21560:
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
/* harmony import */ var _layout_sidebarLayout_Exploration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(55123);
/* harmony import */ var _layout_sidebarLayout_RecentlyAdded__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(18885);
/* harmony import */ var _layout_sidebarLayout_Featured__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(52230);
/* harmony import */ var _elements_propertyBoxs_PropertyBoxFour__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(81054);
/* harmony import */ var _layout_sidebarLayout_Header__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(95317);
/* harmony import */ var _listing_gridView_grid_gridReducer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(15705);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([reactstrap__WEBPACK_IMPORTED_MODULE_2__, _layout_sidebarLayout_Sidebar__WEBPACK_IMPORTED_MODULE_3__, _layout_sidebarLayout_Exploration__WEBPACK_IMPORTED_MODULE_4__, _layout_sidebarLayout_RecentlyAdded__WEBPACK_IMPORTED_MODULE_5__, _layout_sidebarLayout_Header__WEBPACK_IMPORTED_MODULE_8__]);
([reactstrap__WEBPACK_IMPORTED_MODULE_2__, _layout_sidebarLayout_Sidebar__WEBPACK_IMPORTED_MODULE_3__, _layout_sidebarLayout_Exploration__WEBPACK_IMPORTED_MODULE_4__, _layout_sidebarLayout_RecentlyAdded__WEBPACK_IMPORTED_MODULE_5__, _layout_sidebarLayout_Header__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
/**
 * It takes in a list of data and returns a list of components
 * @returns The return statement is used to return a value from a function.
 */ 









const BodyContent = ({ clientData , listSize , size , style  })=>{
    const [grid, gridDispatch] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(_listing_gridView_grid_gridReducer__WEBPACK_IMPORTED_MODULE_9__/* .gridReducer */ .x, _listing_gridView_grid_gridReducer__WEBPACK_IMPORTED_MODULE_9__/* .initialGrid */ .T);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        gridDispatch({
            type: "gridSize",
            payload: size
        });
        gridDispatch({
            type: "gridStyle",
            payload: style || "grid-view"
        });
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        className: "agent-section property-section",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__.Container, {
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_2__.Row, {
                className: "row ratio2_3",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_2__.Col, {
                        xl: "9",
                        lg: "8",
                        className: "property-grid-3 agent-grids",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layout_sidebarLayout_Header__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                title: "Agency Listing",
                                grid: grid,
                                gridDispatch: gridDispatch,
                                gridBar: true
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: `property-wrapper-grid ${grid.gridStyle === "list-view" ? "list-view" : ""}`,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: `property-2 row column-sm property-label property-grid ${grid.gridStyle === "list-view" ? "list-view" : ""} `,
                                    children: clientData && clientData.map((data, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__.Col, {
                                            sm: grid.gridStyle === "grid-view" && (grid.gridSize === 3 || 4) && "6",
                                            // md={grid.gridStyle === 'list-view' && '12'}
                                            lg: grid.gridStyle === "grid-view" && (grid.gridSize === 2 && "6" || (grid.gridSize === 3 || 4) && "4"),
                                            xl: grid.gridStyle === "list-view" && listSize === 2 && "6",
                                            xxl: grid.gridStyle === "grid-view" && grid.gridSize === 4 && "3",
                                            className: `${grid.gridStyle === "list-view" ? "list-view" : ""} wow fadeInUp grid-view `,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_elements_propertyBoxs_PropertyBoxFour__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                                data: data
                                            })
                                        }, i))
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_layout_sidebarLayout_Sidebar__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layout_sidebarLayout_Exploration__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {}),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layout_sidebarLayout_Featured__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {}),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layout_sidebarLayout_RecentlyAdded__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {})
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