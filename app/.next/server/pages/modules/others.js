"use strict";
(() => {
var exports = {};
exports.id = 2578;
exports.ids = [2578];
exports.modules = {

/***/ 77467:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(38096);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _data_slickSlider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(535);
/* harmony import */ var _utils_BackgroundImageRatio__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1688);
/* harmony import */ var _utils_NoSsr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(21736);






const ImageSlider = ({ images  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_utils_NoSsr__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_slick__WEBPACK_IMPORTED_MODULE_2___default()), {
            className: "property-slider",
            ..._data_slickSlider__WEBPACK_IMPORTED_MODULE_3__/* .propertySlider */ .yt,
            children: images?.map((data, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_utils_BackgroundImageRatio__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                            src: data,
                            className: "bg-img"
                        })
                    })
                }, i))
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ImageSlider);


/***/ }),

/***/ 62846:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _data_appPropertyData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6695);
/* harmony import */ var _utils_getData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5785);
/* harmony import */ var _home_classic_Subscribe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(93782);
/* harmony import */ var _home_classic_Video__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(73830);
/* harmony import */ var _home_corporate_Pricing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(98144);
/* harmony import */ var _home_enterprise_PropertyOfTheDay__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(71063);
/* harmony import */ var _home_slider_filter_search_CitiesWiseProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(66538);
/* harmony import */ var _home_slider_filter_search_Offer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(38520);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_utils_getData__WEBPACK_IMPORTED_MODULE_3__, _home_classic_Subscribe__WEBPACK_IMPORTED_MODULE_4__, _home_classic_Video__WEBPACK_IMPORTED_MODULE_5__, _home_corporate_Pricing__WEBPACK_IMPORTED_MODULE_6__, _home_enterprise_PropertyOfTheDay__WEBPACK_IMPORTED_MODULE_7__, _home_slider_filter_search_CitiesWiseProperty__WEBPACK_IMPORTED_MODULE_8__, _home_slider_filter_search_Offer__WEBPACK_IMPORTED_MODULE_9__]);
([_utils_getData__WEBPACK_IMPORTED_MODULE_3__, _home_classic_Subscribe__WEBPACK_IMPORTED_MODULE_4__, _home_classic_Video__WEBPACK_IMPORTED_MODULE_5__, _home_corporate_Pricing__WEBPACK_IMPORTED_MODULE_6__, _home_enterprise_PropertyOfTheDay__WEBPACK_IMPORTED_MODULE_7__, _home_slider_filter_search_CitiesWiseProperty__WEBPACK_IMPORTED_MODULE_8__, _home_slider_filter_search_Offer__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










const BodyContent = ()=>{
    const [value, setValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        (0,_utils_getData__WEBPACK_IMPORTED_MODULE_3__/* .getData */ .Y)(`${"http://localhost:3000/api"}/property`).then((res)=>{
            setValue(res.data);
        }).catch((error)=>console.log("Error", error));
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_home_slider_filter_search_CitiesWiseProperty__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                value: value?.FindPropertiesInTheseCities
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_home_slider_filter_search_Offer__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                value: _data_appPropertyData__WEBPACK_IMPORTED_MODULE_2__/* .AppPropertyData.OurNewOffer */ .q.OurNewOffer
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_home_classic_Video__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_home_enterprise_PropertyOfTheDay__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                value: value?.PropertyOfTheDay
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_home_corporate_Pricing__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                value: _data_appPropertyData__WEBPACK_IMPORTED_MODULE_2__/* .AppPropertyData.PricingPlan */ .q.PricingPlan
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_home_classic_Subscribe__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {})
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BodyContent);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 38877:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(25460);
/* harmony import */ var next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _layout_headers_NavbarThree__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(57512);
/* harmony import */ var _layout_footers_FooterThree__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(66439);
/* harmony import */ var _layout_Breadcrumb_Breadcrumb__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(62532);
/* harmony import */ var _components_modules_others__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(62846);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_layout_headers_NavbarThree__WEBPACK_IMPORTED_MODULE_3__, _layout_footers_FooterThree__WEBPACK_IMPORTED_MODULE_4__, _layout_Breadcrumb_Breadcrumb__WEBPACK_IMPORTED_MODULE_5__, _components_modules_others__WEBPACK_IMPORTED_MODULE_6__]);
([_layout_headers_NavbarThree__WEBPACK_IMPORTED_MODULE_3__, _layout_footers_FooterThree__WEBPACK_IMPORTED_MODULE_4__, _layout_Breadcrumb_Breadcrumb__WEBPACK_IMPORTED_MODULE_5__, _components_modules_others__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const getStaticProps = async ({ locale  })=>({
        props: {
            ...await (0,next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_2__.serverSideTranslations)(locale, [
                "common"
            ])
        }
    });



const Others = ()=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layout_headers_NavbarThree__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layout_Breadcrumb_Breadcrumb__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_modules_others__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layout_footers_FooterThree__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {})
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Others);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 11377:
/***/ ((module) => {

module.exports = require("next-i18next");

/***/ }),

/***/ 25460:
/***/ ((module) => {

module.exports = require("next-i18next/serverSideTranslations");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 92796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 3539:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/detect-domain-locale.js");

/***/ }),

/***/ 34014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 78524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 95832:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 78020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 64406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 24964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 93431:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-locale.js");

/***/ }),

/***/ 11751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 46220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 10299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 23938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 29565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 35789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 28854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 91292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 34567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 80979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 93297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 36052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 84226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 95052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 59232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 71853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 16689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 66405:
/***/ ((module) => {

module.exports = require("react-dom");

/***/ }),

/***/ 99101:
/***/ ((module) => {

module.exports = require("react-feather");

/***/ }),

/***/ 6022:
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ 38096:
/***/ ((module) => {

module.exports = require("react-slick");

/***/ }),

/***/ 20997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 99648:
/***/ ((module) => {

module.exports = import("axios");;

/***/ }),

/***/ 3590:
/***/ ((module) => {

module.exports = import("react-toastify");;

/***/ }),

/***/ 67269:
/***/ ((module) => {

module.exports = import("reactstrap");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [735,1598,676,1664,5152,8170,1688,1957,7801,347,6439,7512,7237,3277,6695,3610,1063,9468,8144], () => (__webpack_exec__(38877)));
module.exports = __webpack_exports__;

})();