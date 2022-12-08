"use strict";
exports.id = 3732;
exports.ids = [3732];
exports.modules = {

/***/ 34212:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _GallerySlider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3896);
/**
 * It renders a div with a class of 'desc-box' and an id of 'gallery'. Inside that div, it renders a
 * div with a class of 'page-section ratio3_2'. Inside that div, it renders a h4 with a class of
 * 'content-title' and the text 'gallery'. Inside that div, it renders a div with a class of
 * 'single-gallery'. Inside that div, it renders the GallerySlider component
 * @returns A div with a class of 'desc-box' and an id of 'gallery'.
 */ 


const GalleryDeskBox = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "desc-box",
        id: "gallery",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "page-section ratio3_2",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                    className: "content-title",
                    children: "gallery"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "single-gallery",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_GallerySlider__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {})
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GalleryDeskBox);


/***/ }),

/***/ 61253:
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
/* harmony import */ var _AboutDeskBox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(26587);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([reactstrap__WEBPACK_IMPORTED_MODULE_2__, _AboutDeskBox__WEBPACK_IMPORTED_MODULE_3__]);
([reactstrap__WEBPACK_IMPORTED_MODULE_2__, _AboutDeskBox__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
/**
 * It renders a div with a class of desc-box and an id of navigation. Inside that div, it renders a div
 * with a class of menu-top and a class of sticky if the fix prop is true. Inside that div, it renders
 * a Container component from reactstrap. Inside that Container component, it renders an unordered list
 * with a class of nav. Inside that unordered list, it renders a list item with a class of active.
 * Inside that list item, it renders an anchor tag with a class of empty string and an href of
 * #navigation. Inside that anchor tag, it renders the text about
 * @returns The SearchBarDeskBox component is being returned.
 */ 



const SearchBarDeskBox = ({ fix  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "desc-box",
        id: "navigation",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: `menu-top ${fix ? "sticky" : ""}`,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__.Container, {
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                        className: "nav",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                className: "active",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    className: "",
                                    href: "#navigation",
                                    children: "about"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    className: "",
                                    href: "#feature",
                                    children: "feature"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    className: "",
                                    href: "#gallery",
                                    children: "gallery"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    className: "",
                                    href: "#video",
                                    children: "video"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    className: "",
                                    href: "#details",
                                    children: "details"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    className: "",
                                    href: "#floor_plan",
                                    children: "Floor plan"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    className: "",
                                    href: "#location-map",
                                    children: "Location"
                                })
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_AboutDeskBox__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {})
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SearchBarDeskBox);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 72279:
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
/* harmony import */ var _utils_useStickyBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(14014);
/* harmony import */ var _utils_useActiveLinkInStickyBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(94146);
/* harmony import */ var _DetailsDeskBox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(48305);
/* harmony import */ var _FeatureDeskBox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(18364);
/* harmony import */ var _FloorPlanDeskBox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(88926);
/* harmony import */ var _GalleryDeskBox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(34212);
/* harmony import */ var _LocationMapDeskBox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(78098);
/* harmony import */ var _SearchBarDeskBox__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(61253);
/* harmony import */ var _VideoDeskBox__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(97617);
/* harmony import */ var _ReviewsDeskBox__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(76477);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([reactstrap__WEBPACK_IMPORTED_MODULE_2__, _DetailsDeskBox__WEBPACK_IMPORTED_MODULE_5__, _FeatureDeskBox__WEBPACK_IMPORTED_MODULE_6__, _SearchBarDeskBox__WEBPACK_IMPORTED_MODULE_10__, _VideoDeskBox__WEBPACK_IMPORTED_MODULE_11__]);
([reactstrap__WEBPACK_IMPORTED_MODULE_2__, _DetailsDeskBox__WEBPACK_IMPORTED_MODULE_5__, _FeatureDeskBox__WEBPACK_IMPORTED_MODULE_6__, _SearchBarDeskBox__WEBPACK_IMPORTED_MODULE_10__, _VideoDeskBox__WEBPACK_IMPORTED_MODULE_11__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);













const SinglePropertySection = ()=>{
    const fix = (0,_utils_useStickyBar__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)();
    (0,_utils_useActiveLinkInStickyBar__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__.Col, {
        xl: "9",
        lg: "8",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "description-section",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "description-details",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_SearchBarDeskBox__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                        fix: fix
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_FeatureDeskBox__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_GalleryDeskBox__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_VideoDeskBox__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_DetailsDeskBox__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_FloorPlanDeskBox__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_LocationMapDeskBox__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ReviewsDeskBox__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {})
                ]
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SinglePropertySection);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 54882:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
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
/* harmony import */ var _TopTitle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(72937);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_TopTitle__WEBPACK_IMPORTED_MODULE_6__]);
_TopTitle__WEBPACK_IMPORTED_MODULE_6__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
/**
 * It renders a slider with a background image and a title
 * @returns The return statement is used to return a value from a function.
 */ 






const SliderBreadcrumbSection = ()=>{
    const breadcrumbBg = [
        "/assets/images/property/4.jpg",
        "/assets/images/property/5.jpg",
        "/assets/images/property/4.jpg",
        "/assets/images/property/2.jpg"
    ];
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
        className: "ratio_40 breadcrumb-section p-0 single-property-images",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_utils_NoSsr__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_slick__WEBPACK_IMPORTED_MODULE_2___default()), {
                    className: "main-property-slider arrow-image",
                    ..._data_slickSlider__WEBPACK_IMPORTED_MODULE_3__/* .mainPropertySlider */ .po,
                    children: breadcrumbBg.map((item, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_utils_BackgroundImageRatio__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                    src: item,
                                    className: "bg-img",
                                    alt: ""
                                })
                            })
                        }, index))
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_TopTitle__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {})
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SliderBreadcrumbSection);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 33732:
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
/* harmony import */ var _layout_sidebarLayout_ContactInfo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8441);
/* harmony import */ var _layout_sidebarLayout_Exploration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(55123);
/* harmony import */ var _layout_sidebarLayout_Featured__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(52230);
/* harmony import */ var _layout_sidebarLayout_Filter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(39812);
/* harmony import */ var _layout_sidebarLayout_Mortgage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(60536);
/* harmony import */ var _layout_sidebarLayout_RecentlyAdded__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(18885);
/* harmony import */ var _layout_sidebarLayout_Sidebar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(96919);
/* harmony import */ var _utils_NoSsr__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(21736);
/* harmony import */ var _RelatedProperty__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2569);
/* harmony import */ var _SingleProperty__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(72279);
/* harmony import */ var _SliderBreadcrumb__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(54882);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([reactstrap__WEBPACK_IMPORTED_MODULE_2__, _layout_sidebarLayout_Exploration__WEBPACK_IMPORTED_MODULE_4__, _layout_sidebarLayout_Filter__WEBPACK_IMPORTED_MODULE_6__, _layout_sidebarLayout_Mortgage__WEBPACK_IMPORTED_MODULE_7__, _layout_sidebarLayout_RecentlyAdded__WEBPACK_IMPORTED_MODULE_8__, _layout_sidebarLayout_Sidebar__WEBPACK_IMPORTED_MODULE_9__, _RelatedProperty__WEBPACK_IMPORTED_MODULE_11__, _SingleProperty__WEBPACK_IMPORTED_MODULE_12__, _SliderBreadcrumb__WEBPACK_IMPORTED_MODULE_13__]);
([reactstrap__WEBPACK_IMPORTED_MODULE_2__, _layout_sidebarLayout_Exploration__WEBPACK_IMPORTED_MODULE_4__, _layout_sidebarLayout_Filter__WEBPACK_IMPORTED_MODULE_6__, _layout_sidebarLayout_Mortgage__WEBPACK_IMPORTED_MODULE_7__, _layout_sidebarLayout_RecentlyAdded__WEBPACK_IMPORTED_MODULE_8__, _layout_sidebarLayout_Sidebar__WEBPACK_IMPORTED_MODULE_9__, _RelatedProperty__WEBPACK_IMPORTED_MODULE_11__, _SingleProperty__WEBPACK_IMPORTED_MODULE_12__, _SliderBreadcrumb__WEBPACK_IMPORTED_MODULE_13__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
/**
 * It returns a section with a container with a row with a sidebar and a single property section
 * @returns The return statement is used to return a value from a function.
 */ 













const BodyContent = ({ side  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_utils_NoSsr__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_SliderBreadcrumb__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                className: "single-property",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__.Container, {
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_2__.Row, {
                        className: " ratio_65",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_layout_sidebarLayout_Sidebar__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                mortgage: true,
                                side: side,
                                singleProperty: true,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layout_sidebarLayout_ContactInfo__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {}),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layout_sidebarLayout_Exploration__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {}),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layout_sidebarLayout_Filter__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                        sm: 12
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layout_sidebarLayout_Featured__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {}),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layout_sidebarLayout_RecentlyAdded__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {}),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layout_sidebarLayout_Mortgage__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {})
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_SingleProperty__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {})
                        ]
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_RelatedProperty__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {})
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BodyContent);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 94146:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const useActiveLinkInStickyBar = ()=>{
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        const sections = document.querySelectorAll(".desc-box");
        const navLi = document.querySelectorAll("#navigation ul li a");
        window.addEventListener("scroll", ()=>{
            let current = "";
            sections.forEach((section)=>{
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                if (window.scrollY > 578 && window.scrollY >= sectionTop - 100 && window.scrollY < sectionTop + sectionHeight - 100) {
                    current = section.getAttribute("id") || current;
                }
            });
            navLi.forEach((el)=>{
                window.scrollY > 578 && el.getAttribute("href") === `#${current}` ? el.closest("li").classList.add("active") : el.closest("li").classList.remove("active");
                window.scrollY < 578 && navLi[0].closest("li").classList.add("active");
            });
        });
        return ()=>window.removeEventListener("scroll", ()=>{});
    }, []);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useActiveLinkInStickyBar);


/***/ }),

/***/ 14014:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const useStickyBar = ()=>{
    const [fix, setFix] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        const handleScroll = ()=>{
            const currentScrollY = window.scrollY;
            if (currentScrollY > 600) setFix(true);
            else setFix(false);
        };
        window.addEventListener("scroll", handleScroll, {
            passive: true
        });
        return ()=>window.removeEventListener("scroll", handleScroll);
    }, [
        fix
    ]);
    return fix;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useStickyBar);


/***/ })

};
;