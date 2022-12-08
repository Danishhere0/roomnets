(() => {
var exports = {};
exports.id = 2888;
exports.ids = [2888];
exports.modules = {

/***/ 58987:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Q": () => (/* binding */ ConfigDB)
/* harmony export */ });
const ConfigDB = {
    LayoutMode: "",
    LayoutType: "",
    PrimaryColor: "",
    SecondaryColor: ""
};


/***/ }),

/***/ 96184:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(99101);
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_feather__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(67269);
/* harmony import */ var _config_themeCustomizerConfig__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(58987);
/* harmony import */ var _utils_NoSsr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(21736);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3590);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([reactstrap__WEBPACK_IMPORTED_MODULE_4__, react_toastify__WEBPACK_IMPORTED_MODULE_7__]);
([reactstrap__WEBPACK_IMPORTED_MODULE_4__, react_toastify__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








const Customizer = ()=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const [config, setConfig] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({
        LayoutMode: "",
        LayoutType: "",
        PrimaryColor: "",
        SecondaryColor: ""
    });
    const notify = ()=>(0,react_toastify__WEBPACK_IMPORTED_MODULE_7__.toast)(`config copied successfully`, {
            type: "success",
            position: "top-right"
        });
    const handleCopy = ()=>navigator.clipboard.writeText(`{
    "LayoutMode": "${config.LayoutMode}",
    "LayoutType": "${config.LayoutType}",
    "PrimaryColor": "${config.PrimaryColor}",
    "SecondaryColor": "${config.SecondaryColor}",
  }`);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (_config_themeCustomizerConfig__WEBPACK_IMPORTED_MODULE_5__/* .ConfigDB.LayoutType */ .Q.LayoutType === "rtl") {
            document.body.classList.add("rtl");
            document.documentElement.dir = "rtl";
            setConfig((prev)=>({
                    ...prev,
                    LayoutType: "rtl"
                }));
        } else {
            document.body.classList.remove("rtl");
            document.documentElement.dir = "";
            setConfig((prev)=>({
                    ...prev,
                    LayoutType: "ltr"
                }));
        }
        if (_config_themeCustomizerConfig__WEBPACK_IMPORTED_MODULE_5__/* .ConfigDB.LayoutMode */ .Q.LayoutMode) {
            document.body.classList.add("dark-layout");
            setConfig((prev)=>({
                    ...prev,
                    LayoutMode: "dark-layout"
                }));
        } else {
            document.body.classList.remove("dark-layout");
            setConfig((prev)=>({
                    ...prev,
                    LayoutMode: "light-layout"
                }));
        }
        setTimeout(()=>{
            const getColor = document.documentElement.getAttribute("style");
            const color1Index = getColor?.search("--theme-default:");
            const color2Index = getColor?.search("--theme-default2:");
            color1Index != -1 && setConfig((prev)=>({
                    ...prev,
                    PrimaryColor: getColor?.slice(color1Index + 16, color1Index + 16 + 7)
                }));
            color2Index != -1 && setConfig((prev)=>({
                    ...prev,
                    SecondaryColor: getColor?.slice(color1Index + 16, color1Index + 16 + 7)
                }));
            setConfig((prev)=>({
                    ...prev,
                    LayoutType: document.body.classList.contains("rtl") ? "rtl" : "ltr"
                }));
            setConfig((prev)=>({
                    ...prev,
                    LayoutMode: document.body.classList.contains("dark-layout") ? "dark-layout" : "light-layout"
                }));
        }, 100);
    }, [
        router.pathname
    ]);
    const handleColor1 = (e)=>{
        setConfig((prev)=>({
                ...prev,
                PrimaryColor: e.target.value
            }));
        document.documentElement.style.setProperty("--theme-default", e.target.value);
    };
    const handleColor2 = (e)=>{
        setConfig((prev)=>({
                ...prev,
                SecondaryColor: e.target.value
            }));
        document.documentElement.style.setProperty("--theme-default2", e.target.value);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: `customizer-wrap ${isOpen ? "open" : ""} `,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "customizer-links",
                onClick: ()=>setIsOpen(true),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_feather__WEBPACK_IMPORTED_MODULE_3__.Settings, {})
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "customizer-contain custom-scrollbar",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "setting-back",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_feather__WEBPACK_IMPORTED_MODULE_3__.X, {
                                onClick: ()=>setIsOpen(false)
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "layouts-settings",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "customizer-title",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                    children: "Layout type"
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "option-setting",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        children: "Light"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                        className: "switch",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                type: "checkbox",
                                                name: "chk1",
                                                value: "option",
                                                className: "setting-check",
                                                onClick: (e)=>{
                                                    if (e.target.checked) {
                                                        document.body.classList.add("dark-layout");
                                                        setConfig((prev)=>({
                                                                ...prev,
                                                                LayoutMode: "dark-layout"
                                                            }));
                                                    } else {
                                                        document.body.classList.remove("dark-layout");
                                                        setConfig((prev)=>({
                                                                ...prev,
                                                                LayoutMode: "light-layout"
                                                            }));
                                                    }
                                                }
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "switch-state"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        children: "Dark"
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "layouts-settings",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "customizer-title",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                    children: "Layout Direction"
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "option-setting",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        children: "LTR"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                        className: "switch",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                type: "checkbox",
                                                name: "chk2",
                                                value: "option",
                                                className: "setting-check1",
                                                onClick: (e)=>{
                                                    if (e.target.checked) {
                                                        document.body.classList.add("rtl");
                                                        document.documentElement.dir = "rtl";
                                                        setConfig((prev)=>({
                                                                ...prev,
                                                                LayoutType: "rtl"
                                                            }));
                                                    } else {
                                                        document.body.classList.remove("rtl");
                                                        document.documentElement.dir = "";
                                                        setConfig((prev)=>({
                                                                ...prev,
                                                                LayoutType: "ltr"
                                                            }));
                                                    }
                                                }
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "switch-state"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        children: "RTL"
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "layouts-settings",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "customizer-title",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                    children: "Unlimited Color"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_utils_NoSsr__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "option-setting unlimited-color-layout",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__.Input, {
                                            id: "ColorPicker1",
                                            type: "color",
                                            name: "Default",
                                            className: "m-1",
                                            value: config.PrimaryColor || "",
                                            onChange: handleColor1
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__.Input, {
                                            id: "ColorPicker2",
                                            type: "color",
                                            name: "Default",
                                            className: "m-1",
                                            value: config.SecondaryColor || "",
                                            onChange: handleColor2
                                        })
                                    ]
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "layouts-settings",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "customizer-title",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                    children: "Copy Layout Config"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                            className: "text-muted",
                                            children: [
                                                "LayoutMode :",
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("b", {
                                                    children: [
                                                        " ",
                                                        config.LayoutMode,
                                                        " "
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                            className: "text-muted",
                                            children: [
                                                "LayoutType :",
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("b", {
                                                    children: [
                                                        " ",
                                                        config.LayoutType,
                                                        " "
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                            className: "text-muted",
                                            children: [
                                                " ",
                                                "PrimaryColor :",
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("b", {
                                                    children: [
                                                        " ",
                                                        config.PrimaryColor,
                                                        " "
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                            className: "text-muted",
                                            children: [
                                                " ",
                                                "SecondaryColor :",
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("b", {
                                                    children: [
                                                        " ",
                                                        config.SecondaryColor
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "text-danger",
                                                children: "* (You need to put this in config/themeCustomizerConfig.js to reflect your changes permently) "
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__.Button, {
                                    className: "mt-3 btn btn-gradient btn-pill",
                                    onClick: ()=>{
                                        handleCopy();
                                        notify();
                                    },
                                    children: "Copy"
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Customizer);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 78689:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const TapToTop = ()=>{
    const [goingUp, setGoingUp] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        // Tap to Top Scroll
        const handleScroll = ()=>{
            const currentScrollY = window.scrollY;
            if (currentScrollY > 500) setGoingUp(true);
            else setGoingUp(false);
        };
        window.addEventListener("scroll", handleScroll, {
            passive: true
        });
        return ()=>window.removeEventListener("scroll", handleScroll);
    }, [
        goingUp
    ]);
    const tapToTop = ()=>{
        window.scrollTo({
            behavior: "smooth",
            top: 0
        });
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: `tap-top ${goingUp ? "top" : ""}`,
        onClick: tapToTop,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                className: "fas fa-arrow-up"
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TapToTop);


/***/ }),

/***/ 38484:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _public_assets_scss_app_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(46283);
/* harmony import */ var _public_assets_scss_app_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_public_assets_scss_app_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(40968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3590);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(11377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _layout_TapToTop__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(78689);
/* harmony import */ var _layout_Customizer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(96184);
/* harmony import */ var _redux_toolkit_store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(66629);
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(88819);
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var photoswipe_dist_photoswipe_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(91452);
/* harmony import */ var photoswipe_dist_photoswipe_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(photoswipe_dist_photoswipe_css__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _utils_StoreOldData__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(79207);
/* harmony import */ var _config_themeCustomizerConfig__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(58987);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_toastify__WEBPACK_IMPORTED_MODULE_4__, _layout_Customizer__WEBPACK_IMPORTED_MODULE_9__]);
([react_toastify__WEBPACK_IMPORTED_MODULE_4__, _layout_Customizer__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
















function MyApp({ Component , pageProps  }) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();
    (0,react__WEBPACK_IMPORTED_MODULE_7__.useEffect)(()=>{
        router.events.on("routeChangeComplete", ()=>{
            document.documentElement.style.setProperty("--theme-default", _config_themeCustomizerConfig__WEBPACK_IMPORTED_MODULE_14__/* .ConfigDB.PrimaryColor */ .Q.PrimaryColor ? _config_themeCustomizerConfig__WEBPACK_IMPORTED_MODULE_14__/* .ConfigDB.PrimaryColor */ .Q.PrimaryColor : "#ff5c41");
            document.documentElement.style.setProperty("--theme-default2", _config_themeCustomizerConfig__WEBPACK_IMPORTED_MODULE_14__/* .ConfigDB.SecondaryColor */ .Q.SecondaryColor ? _config_themeCustomizerConfig__WEBPACK_IMPORTED_MODULE_14__/* .ConfigDB.SecondaryColor */ .Q.SecondaryColor : "#ff8c41");
        });
        document.documentElement.style.setProperty("--theme-default", _config_themeCustomizerConfig__WEBPACK_IMPORTED_MODULE_14__/* .ConfigDB.PrimaryColor */ .Q.PrimaryColor ? _config_themeCustomizerConfig__WEBPACK_IMPORTED_MODULE_14__/* .ConfigDB.PrimaryColor */ .Q.PrimaryColor : "#ff5c41");
        document.documentElement.style.setProperty("--theme-default2", _config_themeCustomizerConfig__WEBPACK_IMPORTED_MODULE_14__/* .ConfigDB.SecondaryColor */ .Q.SecondaryColor ? _config_themeCustomizerConfig__WEBPACK_IMPORTED_MODULE_14__/* .ConfigDB.SecondaryColor */ .Q.SecondaryColor : "#ff8c41");
    }, [
        router.events
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        httpEquiv: "X-UA-Compatible",
                        content: "IE=edge"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1.0"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "description",
                        content: "Sheltos - Filter search with slider home page"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "keywords",
                        content: "sheltos"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "author",
                        content: "sheltos"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "icon",
                        href: "/assets/images/favicon.png",
                        type: "image/x-icon"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: "Sheltos - Filter search with slider home page"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_redux__WEBPACK_IMPORTED_MODULE_3__.Provider, {
                store: _redux_toolkit_store__WEBPACK_IMPORTED_MODULE_10__/* .store */ .h,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                            ...pageProps
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layout_Customizer__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {}),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layout_TapToTop__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {}),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_utils_StoreOldData__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {}),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_toastify__WEBPACK_IMPORTED_MODULE_4__.ToastContainer, {
                            position: "bottom-left",
                            autoClose: 5000,
                            hideProgressBar: false,
                            newestOnTop: true,
                            closeOnClick: true,
                            rtl: false,
                            pauseOnFocusLoss: true,
                            draggable: true,
                            pauseOnHover: true,
                            theme: "light"
                        })
                    ]
                })
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_i18next__WEBPACK_IMPORTED_MODULE_5__.appWithTranslation)(MyApp));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 66629:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "h": () => (/* binding */ store)
});

;// CONCATENATED MODULE: external "@reduxjs/toolkit"
const toolkit_namespaceObject = require("@reduxjs/toolkit");
;// CONCATENATED MODULE: ./redux-toolkit/reducers/inputsReducer.js

const initialState = {
    propertyStatus: "Property Status",
    price: [
        2500,
        8500
    ],
    area: [
        2500,
        8500
    ]
};
const inputsReducer = (0,toolkit_namespaceObject.createReducer)(initialState, {
    propertyStatus: (state, action)=>{
        state.propertyStatus = action.payload;
    },
    propertyType: (state, action)=>{
        state.propertyType = action.payload;
    },
    maxRooms: (state, action)=>{
        state.maxRooms = action.payload;
    },
    bed: (state, action)=>{
        state.bed = action.payload;
    },
    bath: (state, action)=>{
        state.bath = action.payload;
    },
    agencies: (state, action)=>{
        state.agencies = action.payload;
    },
    price: (state, action)=>{
        action.payload ? state.price = [
            ...action.payload
        ] : state.price.splice(0, state.price.length);
    },
    area: (state, action)=>{
        action.payload ? state.area = [
            ...action.payload
        ] : state.area.splice(0, state.area.length);
    },
    sortBy: (state, action)=>{
        state.sortBy = action.payload;
    }
});

;// CONCATENATED MODULE: ./redux-toolkit/reducers/addToWishListReducer.js

var addToWishListReducer_initialState = {
    likedProducts: []
};
const addToWishListReducer = (0,toolkit_namespaceObject.createReducer)(addToWishListReducer_initialState, {
    defineLikedProducts: (state, action)=>{
        state.likedProducts = action.payload;
    },
    like: (state, action)=>{
        state.likedProducts?.includes(action.payload) || state.likedProducts?.push(action.payload);
    },
    unlike: (state, action)=>{
        const index = state.likedProducts?.indexOf(action.payload);
        if (index > -1) {
            state.likedProducts?.splice(index, 1);
        }
    }
});

;// CONCATENATED MODULE: ./redux-toolkit/reducers/addToCompareReducer.js

var addToCompareReducer_initialState = {
    compareProducts: []
};
const addToCompareReducer = (0,toolkit_namespaceObject.createReducer)(addToCompareReducer_initialState, {
    defineCompareProducts: (state, action)=>{
        state.compareProducts = action.payload;
    },
    addCompareProducts: (state, action)=>{
        state.compareProducts?.includes(action.payload) || state.compareProducts?.push(action.payload);
    },
    removeCompareProducts: (state, action)=>{
        const index = state.compareProducts?.indexOf(action.payload);
        if (index > -1) {
            state.compareProducts?.splice(index, 1);
        }
    }
});

;// CONCATENATED MODULE: ./redux-toolkit/reducers/currencyReducer.js

const currencyReducer_initialState = {
    currency: "USD",
    name: "dollar",
    symbol: "$",
    currencyValue: 1
};
const currencyReducer = (0,toolkit_namespaceObject.createReducer)(currencyReducer_initialState, {
    currencyChange: (state, action)=>{
        state.currency = action.payload.currency;
        state.name = action.payload.name;
        state.symbol = action.payload.symbol;
        state.currencyValue = action.payload.value;
    }
});

;// CONCATENATED MODULE: ./redux-toolkit/reducers/gridReducer.js

var gridReducer_initialState = {
    gridSize: "2",
    gridStyle: ""
};
const gridReducer = (0,toolkit_namespaceObject.createReducer)(gridReducer_initialState, {
    gridSize: (state, action)=>{
        state.gridSize = action.payload;
    },
    gridStyle: (state, action)=>{
        state.gridSize = action.payload;
    }
});

;// CONCATENATED MODULE: ./redux-toolkit/store.js






const store = (0,toolkit_namespaceObject.configureStore)({
    reducer: {
        inputsReducer: inputsReducer,
        addToWishListReducer: addToWishListReducer,
        addToCompareReducer: addToCompareReducer,
        currencyReducer: currencyReducer,
        gridReducer: gridReducer
    }
});


/***/ }),

/***/ 21736:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5152);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



const NoSsr = (props)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), {
        children: props.children
    });
// eslint-disable-next-line no-undef
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(()=>Promise.resolve(NoSsr), {
    ssr: false
}));


/***/ }),

/***/ 79207:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);


const StoreOldData = ()=>{
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
    const { likedProducts  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)((state)=>state.addToWishListReducer);
    const { compareProducts  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)((state)=>state.addToCompareReducer);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        dispatch({
            type: "defineLikedProducts",
            payload: JSON.parse(localStorage.getItem("likedProducts")) || []
        });
        dispatch({
            type: "defineCompareProducts",
            payload: JSON.parse(localStorage.getItem("compareProducts")) || []
        });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        if (false) {}
    }, [
        likedProducts,
        compareProducts
    ]);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StoreOldData);


/***/ }),

/***/ 91452:
/***/ (() => {



/***/ }),

/***/ 88819:
/***/ (() => {



/***/ }),

/***/ 46283:
/***/ (() => {



/***/ }),

/***/ 11377:
/***/ ((module) => {

"use strict";
module.exports = require("next-i18next");

/***/ }),

/***/ 95832:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 40968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 71853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 16689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 99101:
/***/ ((module) => {

"use strict";
module.exports = require("react-feather");

/***/ }),

/***/ 6022:
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ 20997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 3590:
/***/ ((module) => {

"use strict";
module.exports = import("react-toastify");;

/***/ }),

/***/ 67269:
/***/ ((module) => {

"use strict";
module.exports = import("reactstrap");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [735,5152], () => (__webpack_exec__(38484)));
module.exports = __webpack_exports__;

})();