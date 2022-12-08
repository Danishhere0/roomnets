"use strict";
(() => {
var exports = {};
exports.id = 5405;
exports.ids = [5405];
exports.modules = {

/***/ 70407:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(20997);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(71853);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(16689);
;// CONCATENATED MODULE: ./layout/loader/LoadingScreen.js


const LoadingScreen = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "loader-wrapper",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "row loader-text",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "col-12",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        src: "/assets/images/loader/loader.gif",
                        className: "img-fluid",
                        alt: ""
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "col-12",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                            className: "mb-0",
                            children: "Please wait Real estate Template loading..."
                        })
                    })
                })
            ]
        })
    });
};
const LoadingScreen2 = ()=>{
    return /*#__PURE__*/ _jsx("div", {
        className: "loader-wrapper img-gif",
        children: /*#__PURE__*/ _jsx("img", {
            src: "/assets/images/loader/loader-4.gif",
            className: "img-fluid",
            alt: ""
        })
    });
};
const LoadingScreen3 = ()=>{
    return /*#__PURE__*/ _jsx("div", {
        className: "loader-wrapper",
        children: /*#__PURE__*/ _jsx("div", {
            className: "row loader-img",
            children: /*#__PURE__*/ _jsx("div", {
                className: "col-12",
                children: /*#__PURE__*/ _jsx("img", {
                    src: "/assets/images/loader/loader-2.gif",
                    className: "img-fluid",
                    alt: ""
                })
            })
        })
    });
};


;// CONCATENATED MODULE: ./pages/index.js




const index = ()=>{
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const router = (0,router_.useRouter)();
    // eslint-disable-next-line react-hooks/rules-of-hooks
    (0,external_react_.useEffect)(()=>{
        router.push("/home/slider-filter-search");
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/ jsx_runtime_.jsx(LoadingScreen, {})
    });
};
/* harmony default export */ const pages = (index);


/***/ }),

/***/ 71853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 16689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 20997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(70407));
module.exports = __webpack_exports__;

})();