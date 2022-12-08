"use strict";
exports.id = 9309;
exports.ids = [9309];
exports.modules = {

/***/ 39309:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "U": () => (/* binding */ DropdownInputFields)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(67269);
/* harmony import */ var _data_inputForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(23521);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([reactstrap__WEBPACK_IMPORTED_MODULE_3__]);
reactstrap__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
/**
 * It takes in a label and filterValues, and returns a dropdown menu with the options from the
 * InputForm array
 * @returns A dropdown menu with the options of the array in the InputForm.
 */ 




const DropdownInputFields = ({ label , filterValues , setFilterValues , lg , sm , start , end , lastSm  })=>{
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
    const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("true");
    const inputFilter = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)((state)=>state.inputsReducer);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: _data_inputForm__WEBPACK_IMPORTED_MODULE_4__/* .InputForm.slice */ .M.slice(`${start && start}`, `${end && end}`).map((value, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__.Col, {
                lg: lg || value.size,
                sm: sm ? sm : lastSm ? i > 1 && lastSm : "",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "form-group",
                    children: [
                        label && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                            children: value.label
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_3__.Dropdown, {
                            isOpen: isOpen === value.label ? true : false,
                            toggle: function noRefCheck() {
                                setIsOpen(value.label);
                                isOpen === value.label && setIsOpen();
                            },
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_3__.DropdownToggle, {
                                    className: "font-rubik",
                                    caret: true,
                                    children: [
                                        inputFilter[`${value.name}`] || value.label,
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                            className: "fas fa-angle-down"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__.DropdownMenu, {
                                    children: value.options.map((option, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            onClick: ()=>{
                                                filterValues = {
                                                    ...filterValues,
                                                    ...{
                                                        [`${value.name}`]: `${option}`
                                                    }
                                                };
                                                setIsOpen();
                                            },
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__.DropdownItem, {
                                                onClick: ()=>{
                                                    setFilterValues({
                                                        ...filterValues,
                                                        ...{
                                                            [`${value.name}`]: option
                                                        }
                                                    });
                                                    dispatch({
                                                        type: `${value.name}`,
                                                        payload: option
                                                    });
                                                },
                                                children: option
                                            })
                                        }, i))
                                })
                            ]
                        })
                    ]
                })
            }, i))
    });
};


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 23521:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "M": () => (/* binding */ InputForm)
/* harmony export */ });
/* unused harmony export createPropertyInputForms */
const InputForm = [
    {
        name: "propertyStatus",
        label: "Property Status",
        size: "12",
        options: [
            "Property Status",
            "For Rent",
            "For Sale"
        ]
    },
    {
        name: "propertyType",
        label: "Property Type",
        size: "12",
        options: [
            "Property Type",
            "Apartment",
            "Family House",
            "Cottage",
            "Condominium"
        ]
    },
    {
        name: "maxRooms",
        label: "Rooms",
        size: "6",
        options: [
            "Max Rooms",
            1,
            2,
            3,
            4,
            5,
            6
        ]
    },
    {
        name: "bed",
        label: "Bed",
        size: "6",
        options: [
            "Bed",
            1,
            2,
            3,
            4
        ]
    },
    {
        name: "bath",
        label: "Bath",
        size: "6",
        options: [
            "Bath",
            1,
            2,
            3,
            4
        ]
    },
    {
        name: "agencies",
        label: "Agencies",
        size: "6",
        options: [
            "Agencies",
            "Lincoln",
            "Blue Sky",
            "Zephry",
            "Premiere"
        ]
    }
];
const createPropertyInputForms = [
    {
        name: "propertyType",
        label: "Property Type",
        size: "12",
        options: [
            "Property Type",
            "Apartment",
            "Family House",
            "Cottage",
            "Condominium"
        ],
        validation: {
            required: true
        }
    },
    {
        name: "propertyStatus",
        label: "Property Status",
        size: "12",
        options: [
            "Property Status",
            "For Rent",
            "For Sale"
        ],
        validation: {
            required: true
        }
    },
    {
        name: "propertyPrice",
        label: "Property Price",
        placeHolder: "$2800",
        validation: {
            required: true
        }
    },
    {
        name: "maxRooms",
        label: "Rooms",
        size: "6",
        options: [
            "Max Rooms",
            1,
            2,
            3,
            4,
            5,
            6
        ],
        validation: {
            required: true
        }
    },
    {
        name: "bed",
        label: "Bed",
        size: "6",
        options: [
            "Bed",
            1,
            2,
            3,
            4
        ],
        validation: {
            required: true
        }
    },
    {
        name: "bath",
        label: "Bath",
        size: "6",
        options: [
            "Bath",
            1,
            2,
            3,
            4
        ],
        validation: {
            required: true
        }
    },
    {
        name: "propertyArea",
        label: "Property Area",
        placeHolder: "85 Sq Ft",
        validation: {
            required: true
        }
    },
    {
        name: "propertyPrice",
        label: "Property Price",
        placeHolder: "$2800",
        validation: {
            required: true
        }
    },
    {
        name: "agencies",
        label: "Agencies",
        size: "6",
        options: [
            "Agencies",
            "Lincoln",
            "Blue Sky",
            "Zephry",
            "Premiere"
        ],
        validation: {
            required: true
        }
    }
];


/***/ })

};
;