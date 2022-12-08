"use strict";
(() => {
var exports = {};
exports.id = 3336;
exports.ids = [3336];
exports.modules = {

/***/ 90:
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
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(38096);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(67269);
/* harmony import */ var _constValues_constValues__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(63277);
/* harmony import */ var _data_slickSlider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(535);
/* harmony import */ var _utils_BackgroundImageRatio__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1688);
/* harmony import */ var _utils_NoSsr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(21736);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([reactstrap__WEBPACK_IMPORTED_MODULE_4__]);
reactstrap__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];









const HomeBannerSection = ({ value  })=>{
    const [nav1, setNav1] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();
    const [nav2, setNav2] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        className: "layout-home4 p-0",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__.Container, {
            fluid: true,
            className: "p-0",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__.Row, {
                className: " m-0",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__.Col, {
                    lg: "12",
                    className: "p-0",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "sync-slider",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_utils_NoSsr__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_slick__WEBPACK_IMPORTED_MODULE_3___default()), {
                                    className: "home-slider-4 arrow-image",
                                    ..._data_slickSlider__WEBPACK_IMPORTED_MODULE_5__/* .homeSlider4 */ .GF,
                                    asNavFor: nav2,
                                    ref: (slider1)=>setNav1(slider1),
                                    children: value && value.map((data, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "slider-image img-fluid ",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_utils_BackgroundImageRatio__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                                        src: data.img,
                                                        className: "bg-img"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__.Container, {
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__.Row, {
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__.Col, {
                                                                xl: "6",
                                                                lg: "7",
                                                                md: "8",
                                                                sm: "12",
                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    className: "home-content",
                                                                    children: [
                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h6", {
                                                                            className: "line-right ",
                                                                            "data-delay-in": "0.4",
                                                                            "data-animation-in": "fadeInUp",
                                                                            children: [
                                                                                "# ",
                                                                                _constValues_constValues__WEBPACK_IMPORTED_MODULE_8__/* .Realestate */ .yh
                                                                            ]
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                                            "data-delay-in": "0.6",
                                                                            "data-animation-in": "fadeInUp",
                                                                            children: data.title
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                            "data-delay-in": "0.8",
                                                                            "data-animation-in": "fadeInUp",
                                                                            className: "font-roboto",
                                                                            children: data.details
                                                                        }),
                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h6", {
                                                                            "data-delay-in": "0.8",
                                                                            "data-animation-in": "fadeInUp",
                                                                            className: "font-roboto mb-0",
                                                                            children: [
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                                    src: "/assets/images/icon/bed.png",
                                                                                    className: "img-icon me-2",
                                                                                    alt: ""
                                                                                }),
                                                                                data.bedroom,
                                                                                " Bedroom",
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                    className: "mx-2",
                                                                                    children: "|"
                                                                                }),
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                                    src: "/assets/images/icon/bathroom.png",
                                                                                    className: "img-icon me-2",
                                                                                    alt: ""
                                                                                }),
                                                                                data.bathroom,
                                                                                " Bathroom",
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                    className: "mx-2",
                                                                                    children: "|"
                                                                                }),
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                                    src: "/assets/images/icon/sq.png",
                                                                                    className: "img-icon",
                                                                                    alt: ""
                                                                                }),
                                                                                data.sqft,
                                                                                " Sq Ft"
                                                                            ]
                                                                        }),
                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                                                                            "data-delay-in": "1.2",
                                                                            "data-animation-in": "fadeInUp",
                                                                            children: [
                                                                                "$",
                                                                                data.price
                                                                            ]
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                                            href: "/property/image-box",
                                                                            "data-delay-in": "1.4",
                                                                            "data-animation-in": "fadeInUp",
                                                                            className: "btn btn-gradient btn-lg",
                                                                            children: "View Details"
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                            "data-delay-in": "0.2",
                                                                            "data-animation-in": "fadeInLeft",
                                                                            className: "square-bg"
                                                                        })
                                                                    ]
                                                                })
                                                            })
                                                        })
                                                    })
                                                ]
                                            })
                                        }, i))
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_slick__WEBPACK_IMPORTED_MODULE_3___default()), {
                                    className: "home-nav",
                                    ..._data_slickSlider__WEBPACK_IMPORTED_MODULE_5__/* .homeNav */ .CC,
                                    asNavFor: nav1,
                                    ref: (slider2)=>setNav2(slider2),
                                    children: value && value.map((data, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "slider-image",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_utils_BackgroundImageRatio__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                                        src: data.img,
                                                        className: "bg-img"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                        children: [
                                                            "01/0",
                                                            i + 1
                                                        ]
                                                    })
                                                ]
                                            })
                                        }, i))
                                })
                            ]
                        })
                    })
                })
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HomeBannerSection);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 28121:
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
/* harmony import */ var _About__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(12736);
/* harmony import */ var _Brand__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(64776);
/* harmony import */ var _FeaturedProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(74115);
/* harmony import */ var _HomeBanner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(90);
/* harmony import */ var _LatestProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6182);
/* harmony import */ var _ListingProperty__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(72738);
/* harmony import */ var _PropertyServices__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(21737);
/* harmony import */ var _Subscribe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(93782);
/* harmony import */ var _Testimonial__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(36522);
/* harmony import */ var _Video__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(73830);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_utils_getData__WEBPACK_IMPORTED_MODULE_3__, _About__WEBPACK_IMPORTED_MODULE_4__, _Brand__WEBPACK_IMPORTED_MODULE_5__, _FeaturedProperty__WEBPACK_IMPORTED_MODULE_6__, _HomeBanner__WEBPACK_IMPORTED_MODULE_7__, _LatestProperty__WEBPACK_IMPORTED_MODULE_8__, _ListingProperty__WEBPACK_IMPORTED_MODULE_9__, _PropertyServices__WEBPACK_IMPORTED_MODULE_10__, _Subscribe__WEBPACK_IMPORTED_MODULE_11__, _Testimonial__WEBPACK_IMPORTED_MODULE_12__, _Video__WEBPACK_IMPORTED_MODULE_13__]);
([_utils_getData__WEBPACK_IMPORTED_MODULE_3__, _About__WEBPACK_IMPORTED_MODULE_4__, _Brand__WEBPACK_IMPORTED_MODULE_5__, _FeaturedProperty__WEBPACK_IMPORTED_MODULE_6__, _HomeBanner__WEBPACK_IMPORTED_MODULE_7__, _LatestProperty__WEBPACK_IMPORTED_MODULE_8__, _ListingProperty__WEBPACK_IMPORTED_MODULE_9__, _PropertyServices__WEBPACK_IMPORTED_MODULE_10__, _Subscribe__WEBPACK_IMPORTED_MODULE_11__, _Testimonial__WEBPACK_IMPORTED_MODULE_12__, _Video__WEBPACK_IMPORTED_MODULE_13__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
/**
 * It fetches data from the API and passes it to the components
 * @returns The return value of the function is the value of the last expression in the function body.
 */ 













const BodyContent = ()=>{
    const [value, setValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const [clientData, setClientData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        (0,_utils_getData__WEBPACK_IMPORTED_MODULE_3__/* .getData */ .Y)(`${"http://localhost:3000/api"}/property`).then((res)=>{
            setValue(res.data);
        }).catch((error)=>console.log("Error", error));
        (0,_utils_getData__WEBPACK_IMPORTED_MODULE_3__/* .getData */ .Y)(`${"http://localhost:3000/api"}/client-agent`).then((res)=>{
            setClientData(res.data);
        }).catch((error)=>console.log("Error", error));
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_HomeBanner__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                value: value?.HomeBannerDataInClassicLayout
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_LatestProperty__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                value: value?.LatestPropertyInClassicLayout
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_FeaturedProperty__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                value: value?.FeaturedPropertyInClassicLayout
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_PropertyServices__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                value: _data_appPropertyData__WEBPACK_IMPORTED_MODULE_2__/* .AppPropertyData.PropertyServicesInClassic */ .q.PropertyServicesInClassic
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ListingProperty__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                value: value?.ListingPropertyInClassicLayout
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Video__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_About__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                value: clientData?.OurAgentInClassicLayout
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Subscribe__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Testimonial__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                value: clientData?.OurHappyClientInClassicLayout
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Brand__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {})
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BodyContent);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 84002:
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
/* harmony import */ var _components_home_classic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(28121);
/* harmony import */ var _layout_headers_NavbarFour__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(89295);
/* harmony import */ var _layout_footers_FooterFour__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(62163);
/* harmony import */ var _config_themeCustomizerConfig__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(58987);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_home_classic__WEBPACK_IMPORTED_MODULE_3__, _layout_headers_NavbarFour__WEBPACK_IMPORTED_MODULE_4__, _layout_footers_FooterFour__WEBPACK_IMPORTED_MODULE_5__]);
([_components_home_classic__WEBPACK_IMPORTED_MODULE_3__, _layout_headers_NavbarFour__WEBPACK_IMPORTED_MODULE_4__, _layout_footers_FooterFour__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
/**
 * It takes the locale from the request and returns the translations for the given namespaces
 * @returns an object with a property of props. The props property is an object with a property of
 * ...(await serverSideTranslations(locale, ['common']))
 */ 






const getStaticProps = async ({ locale  })=>({
        props: {
            ...await (0,next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_2__.serverSideTranslations)(locale, [
                "common"
            ])
        }
    });
const Classic = ()=>{
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setTimeout(()=>{
            !_config_themeCustomizerConfig__WEBPACK_IMPORTED_MODULE_6__/* .ConfigDB.PrimaryColor */ .Q.PrimaryColor && document.documentElement.style.setProperty("--theme-default", "#f35d43");
            !_config_themeCustomizerConfig__WEBPACK_IMPORTED_MODULE_6__/* .ConfigDB.SecondaryColor */ .Q.SecondaryColor && document.documentElement.style.setProperty("--theme-default2", "#f34451");
        }, 0.1);
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layout_headers_NavbarFour__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_home_classic__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layout_footers_FooterFour__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {})
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Classic);

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

/***/ 33571:
/***/ ((module) => {

module.exports = import("react-photoswipe-gallery");;

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
var __webpack_exports__ = __webpack_require__.X(0, [735,1598,676,1664,5152,8170,1688,1957,3277,6695,473,6783,4407,6522,4115,535,3610,2163,2736,9295,1737,4776,2738], () => (__webpack_exec__(84002)));
module.exports = __webpack_exports__;

})();