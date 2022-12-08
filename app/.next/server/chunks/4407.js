"use strict";
exports.id = 4407;
exports.ids = [4407];
exports.modules = {

/***/ 48792:
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
/* harmony import */ var _utils_getData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5785);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_utils_getData__WEBPACK_IMPORTED_MODULE_3__]);
_utils_getData__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const SearchSuggestionBox = ({ searchDropDown , className , searchInput  })=>{
    const classIS = `nav-submenu suggestion-cart ${searchDropDown ? "open" : ""} ${className ? className : ""}`;
    const [value, setValue] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();
    const [filterData, setFilterData] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        (0,_utils_getData__WEBPACK_IMPORTED_MODULE_3__/* .getData */ .Y)(`${"http://localhost:3000/api"}/property`).then((res)=>{
            setValue(Object.keys(res.data).map((key)=>[
                    res.data[key]
                ]).flat(2));
        }).catch((error)=>console.log("Error", error));
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        const result = value?.filter((elem)=>{
            return !searchInput?.length ? elem : elem.title?.toLowerCase().includes(searchInput.toLowerCase());
        });
        setFilterData(result);
    }, [
        value,
        searchInput
    ]);
    var re = new RegExp(searchInput, "gi");
    return !!filterData?.length && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: `mytest ${classIS}`,
        children: filterData?.map((data, i)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "media",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                        href: Array.isArray(data.img) ? `/property/image-slider/?id=${data.id}` : `/property/image-box/?id=${data.id}`,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            src: Array.isArray(data.img) ? data.img[0] : data.img,
                            className: "img-fluid",
                            alt: ""
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "media-body",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                href: Array.isArray(data.img) ? `/property/image-slider/?id=${data.id}` : `/property/image-box/?id=${data.id}`,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                    children: searchInput ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        dangerouslySetInnerHTML: {
                                            __html: data.title?.toUpperCase()?.replace(re, `<mark>${searchInput.toUpperCase()}</mark>`)
                                        }
                                    }) : data.title?.toUpperCase()
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                children: [
                                    "$",
                                    data.price || 3000,
                                    "*"
                                ]
                            })
                        ]
                    })
                ]
            }, i))
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SearchSuggestionBox);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 58987:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Q": () => (/* binding */ ConfigDB)
/* harmony export */ });
const ConfigDB = {
    LayoutMode: "",
    LayoutType: "",
    PrimaryColor: "",
    SecondaryColor: ""
};


/***/ })

};
;