"use strict";
exports.id = 8170;
exports.ids = [8170];
exports.modules = {

/***/ 36042:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": () => (/* binding */ RightNavMenuItem),
/* harmony export */   "V": () => (/* binding */ MainNavMenuItems)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(99101);
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_feather__WEBPACK_IMPORTED_MODULE_1__);


const MainNavMenuItems = [
    {
        title: "HOME",
        icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_feather__WEBPACK_IMPORTED_MODULE_1__.Home, {}),
        type: "sub",
        children: [
            {
                path: "/home/slider-filter-search",
                title: "Slider Filter Search",
                type: "link"
            },
            {
                path: "/home/corporate",
                title: "Corporate",
                type: "link"
            },
            {
                path: "/home/enterprise",
                title: "Enterprise",
                type: "link"
            },
            {
                path: "/home/classic",
                title: "Classic",
                type: "link",
                tag: "New"
            },
            {
                path: "/home/image-with-content",
                title: "Image With Content",
                type: "link"
            },
            {
                path: "/home/modern",
                title: "Modern",
                type: "link",
                tag: "New"
            },
            {
                path: "/home/parallax-image",
                title: "Parallax Image",
                type: "link"
            },
            {
                path: "/home/search-tab",
                title: "Search Tab",
                type: "link"
            },
            {
                path: "/home/typed-image",
                title: "Typed Image",
                type: "link"
            },
            {
                path: "/home/modern-video",
                title: "Modern Video",
                type: "link"
            },
            {
                path: "/home/map-with-V-search",
                title: "Map With V-Search",
                type: "link"
            },
            {
                path: "/home/map-with-H-search",
                title: "Map With H-Search",
                type: "link"
            }
        ]
    },
    {
        title: "LISTING",
        icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_feather__WEBPACK_IMPORTED_MODULE_1__.Clipboard, {}),
        type: "sub",
        children: [
            {
                title: "Grid View",
                type: "sub",
                children: [
                    {
                        title: "2 Grid",
                        type: "sub",
                        children: [
                            {
                                path: "/listing/grid-view/2-grid/left-sidebar",
                                title: "Left Sidebar",
                                type: "link"
                            },
                            {
                                path: "/listing/grid-view/2-grid/right-sidebar",
                                title: "Right Sidebar",
                                type: "link"
                            },
                            {
                                path: "/listing/grid-view/2-grid/no-sidebar",
                                title: "No Sidebar",
                                type: "link"
                            }
                        ]
                    },
                    {
                        title: "3 Grid",
                        type: "sub",
                        children: [
                            {
                                path: "/listing/grid-view/3-grid/left-sidebar",
                                title: "Left Sidebar",
                                type: "link"
                            },
                            {
                                path: "/listing/grid-view/3-grid/right-sidebar",
                                title: "Right Sidebar",
                                type: "link"
                            },
                            {
                                path: "/listing/grid-view/3-grid/no-sidebar",
                                title: "No Sidebar",
                                type: "link"
                            }
                        ]
                    },
                    {
                        path: "/listing/grid-view/slider",
                        title: "Slider",
                        type: "link"
                    },
                    {
                        title: "Map",
                        type: "sub",
                        children: [
                            {
                                path: "/listing/grid-view/map/google-map",
                                title: "Google Map",
                                type: "link"
                            },
                            {
                                path: "/listing/grid-view/map/leaflet-map",
                                title: "Leaflet Map",
                                type: "link"
                            },
                            {
                                path: "/listing/grid-view/map/pigeon-map",
                                title: "Pigeon Map",
                                type: "link"
                            }
                        ]
                    },
                    {
                        title: "Map Modal",
                        type: "sub",
                        children: [
                            {
                                path: "/listing/grid-view/map-modal/google-map",
                                title: "Google Map",
                                type: "link"
                            },
                            {
                                path: "/listing/grid-view/map-modal/leaflet-map",
                                title: "Leaflet Map",
                                type: "link"
                            },
                            {
                                path: "/listing/grid-view/map-modal/pigeon-map",
                                title: "Pigeon Map",
                                type: "link"
                            }
                        ]
                    },
                    {
                        title: "Left Side Map",
                        type: "sub",
                        children: [
                            {
                                path: "/listing/grid-view/left-side-map/google-map",
                                title: "Google Map",
                                type: "link"
                            },
                            {
                                path: "/listing/grid-view/left-side-map/leaflet-map",
                                title: "Leaflet Map",
                                type: "link"
                            },
                            {
                                path: "/listing/grid-view/left-side-map/pigeon-map",
                                title: "Pigeon Map",
                                type: "link"
                            }
                        ]
                    },
                    {
                        title: "On Click Map",
                        type: "sub",
                        children: [
                            {
                                path: "/listing/grid-view/on-click-map/google-map",
                                title: "Google Map",
                                type: "link"
                            },
                            {
                                path: "/listing/grid-view/on-click-map/leaflet-map",
                                title: "Leaflet Map",
                                type: "link"
                            },
                            {
                                path: "/listing/grid-view/on-click-map/pigeon-map",
                                title: "Pigeon Map",
                                type: "link"
                            }
                        ]
                    },
                    {
                        title: "Map Header",
                        type: "sub",
                        children: [
                            {
                                path: "/listing/grid-view/map-header/google-map",
                                title: "Google Map",
                                type: "link"
                            },
                            {
                                path: "/listing/grid-view/map-header/leaflet-map",
                                title: "Leaflet Map",
                                type: "link"
                            },
                            {
                                path: "/listing/grid-view/map-header/pigeon-map",
                                title: "Pigeon Map",
                                type: "link"
                            }
                        ]
                    }
                ]
            },
            {
                title: "List View",
                type: "sub",
                children: [
                    {
                        title: "Listing",
                        type: "sub",
                        children: [
                            {
                                path: "/listing/list-view/listing/left-sidebar",
                                title: "Left Sidebar",
                                type: "link"
                            },
                            {
                                path: "/listing/list-view/listing/right-sidebar",
                                title: "Right Sidebar",
                                type: "link"
                            },
                            {
                                path: "/listing/list-view/listing/no-sidebar",
                                title: "No Sidebar",
                                type: "link"
                            }
                        ]
                    },
                    {
                        title: "Map",
                        type: "sub",
                        children: [
                            {
                                path: "/listing/list-view/map/google-map",
                                title: "Google Map",
                                type: "link"
                            },
                            {
                                path: "/listing/list-view/map/leaflet-map",
                                title: "Leaflet Map",
                                type: "link"
                            },
                            {
                                path: "/listing/list-view/map/pigeon-map",
                                title: "Pigeon Map",
                                type: "link"
                            }
                        ]
                    },
                    {
                        path: "/listing/list-view/slider",
                        title: "Slider",
                        type: "link"
                    },
                    {
                        path: "/listing/list-view/thumbnail-image",
                        title: "Thumbnail Image",
                        type: "link"
                    },
                    {
                        path: "/listing/list-view/video",
                        title: "Video",
                        type: "link"
                    }
                ]
            },
            {
                title: "Tab Layout",
                type: "sub",
                children: [
                    {
                        path: "/listing/tab-layout/tab-full-width",
                        title: "Tab Full Width",
                        type: "link"
                    },
                    {
                        path: "/listing/tab-layout/tab-left-sidebar",
                        title: "Tab Left Sidebar",
                        type: "link"
                    },
                    {
                        path: "/listing/tab-layout/tab-right-sidebar",
                        title: "Tab Right Sidebar",
                        type: "link"
                    }
                ]
            },
            {
                title: "Infinite Scroll",
                type: "sub",
                children: [
                    {
                        path: "/listing/infinite-scroll/tab-full-width",
                        title: "Tab Full Width",
                        type: "link"
                    },
                    {
                        path: "/listing/infinite-scroll/tab-left-sidebar",
                        title: "Tab Left Sidebar",
                        type: "link"
                    },
                    {
                        path: "/listing/infinite-scroll/tab-right-sidebar",
                        title: "Tab Right Sidebar",
                        type: "link"
                    }
                ]
            }
        ]
    },
    {
        title: "PROPERTY",
        icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_feather__WEBPACK_IMPORTED_MODULE_1__.Link, {}),
        type: "sub",
        children: [
            {
                path: "/property/sticky-tab-or-classic",
                title: "Sticky Tab Or Classic",
                type: "link"
            },
            {
                path: "/property/without-top",
                title: "Without Top",
                type: "link"
            },
            {
                path: "/property/left-sidebar",
                title: "Left Sidebar",
                type: "link"
            },
            {
                path: "/property/info-tab",
                title: "Info TAb",
                type: "link"
            },
            {
                path: "/property/image-slider",
                title: "Image Slider",
                type: "link"
            },
            {
                path: "/property/thumbnail-image",
                title: "Thumbnail Image",
                type: "link"
            },
            {
                path: "/property/image-box",
                title: "Image Box",
                type: "link"
            },
            {
                path: "/property/template-breadcrumb",
                title: "Template Breadcrumb",
                type: "link"
            },
            {
                path: "/property/modal-details",
                title: "Modal Details",
                type: "link",
                icon: "true"
            }
        ]
    },
    {
        title: "PAGES",
        icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_feather__WEBPACK_IMPORTED_MODULE_1__.Layers, {}),
        type: "mega-menu",
        children: [
            {
                type: "col",
                children: [
                    {
                        title: "Portfolio",
                        type: "sub",
                        children: [
                            {
                                path: "/pages/portfolio/2-grid",
                                title: "2 Grid",
                                type: "link"
                            },
                            {
                                path: "/pages/portfolio/3-grid",
                                title: "3 Grid",
                                type: "link"
                            },
                            {
                                path: "/pages/portfolio/4-grid",
                                title: "4 Grid",
                                type: "link"
                            },
                            {
                                path: "/pages/portfolio/2-grid-title",
                                title: "2 Grid Title",
                                type: "link"
                            },
                            {
                                path: "/pages/portfolio/3-grid-title",
                                title: "3 Grid Title",
                                type: "link"
                            },
                            {
                                path: "/pages/portfolio/4-grid-title",
                                title: "4 Grid Title",
                                type: "link"
                            },
                            {
                                path: "/pages/portfolio/3-masonry",
                                title: "3 Masonry",
                                type: "link"
                            },
                            {
                                path: "/pages/portfolio/4-masonry",
                                title: "4 Masonry",
                                type: "link"
                            },
                            {
                                path: "/pages/portfolio/parallax",
                                title: "Parallax",
                                type: "link"
                            },
                            {
                                path: "/pages/portfolio/center-slides",
                                title: "Center Slides",
                                type: "link"
                            },
                            {
                                path: "/pages/portfolio/creative-1",
                                title: "Creative 1",
                                type: "link"
                            },
                            {
                                path: "/pages/portfolio/creative-2",
                                title: "Creative 2",
                                type: "link"
                            },
                            {
                                path: "/pages/portfolio/creative-3",
                                title: "Creative 3",
                                type: "link",
                                icon: "true"
                            },
                            {
                                path: "/pages/portfolio/creative-4",
                                title: "Creative 4",
                                type: "link"
                            },
                            {
                                path: "/pages/portfolio/details",
                                title: "Details",
                                type: "link"
                            }
                        ]
                    }
                ]
            },
            {
                type: "col",
                children: [
                    {
                        title: "Blog Page",
                        type: "sub",
                        children: [
                            {
                                path: "/pages/blog-page/left-sidebar",
                                title: "Left Sidebar",
                                type: "link"
                            },
                            {
                                path: "/pages/blog-page/right-sidebar",
                                title: "Right Sidebar",
                                type: "link"
                            },
                            {
                                path: "/pages/blog-page/no-sidebar",
                                title: "No Sidebar",
                                type: "link"
                            },
                            {
                                path: "/pages/blog-page/creative-left-sidebar",
                                title: "Creative Left Sidebar",
                                type: "link"
                            },
                            {
                                path: "/pages/blog-page/creative-right-sidebar",
                                title: "Creative Right Sidebar",
                                type: "link"
                            },
                            {
                                path: "/pages/blog-page/creative-no-sidebar",
                                title: "Creative No Sidebar",
                                type: "link"
                            },
                            {
                                path: "/pages/blog-page/list-left-sidebar",
                                title: "List Left Sidebar",
                                type: "link"
                            },
                            {
                                path: "/pages/blog-page/list-right-sidebar",
                                title: "List Right Sidebar",
                                type: "link"
                            },
                            {
                                path: "/pages/blog-page/list-no-sidebar",
                                title: "List No Sidebar",
                                type: "link"
                            },
                            {
                                path: "/pages/blog-page/masonry-left-sidebar",
                                title: "Masonry Left Sidebar",
                                type: "link"
                            },
                            {
                                path: "/pages/blog-page/masonry-right-sidebar",
                                title: "Masonry Right Sidebar",
                                type: "link"
                            },
                            {
                                path: "/pages/blog-page/masonry-no-sidebar",
                                title: "Masonry No Sidebar",
                                type: "link"
                            },
                            {
                                path: "/pages/blog-page/mix-list-left-sidebar",
                                title: "Mix List Left Sidebar",
                                type: "link"
                            },
                            {
                                path: "/pages/blog-page/mix-list-right-sidebar",
                                title: "Mix List Right Sidebar",
                                type: "link"
                            },
                            {
                                path: "/pages/blog-page/mix-grid-left-sidebar",
                                title: "Mix Grid Left Sidebar",
                                type: "link"
                            },
                            {
                                path: "/pages/blog-page/mix-grid-right-sidebar",
                                title: "Mix Grid Right Sidebar",
                                type: "link"
                            }
                        ]
                    }
                ]
            },
            {
                type: "col",
                children: [
                    {
                        title: "Blog Detail Pages",
                        type: "sub",
                        children: [
                            {
                                path: "/pages/blog-detail-pages/left-sidebar",
                                title: "Left Sidebar",
                                type: "link"
                            },
                            {
                                path: "/pages/blog-detail-pages/right-sidebar",
                                title: "Right Sidebar",
                                type: "link"
                            },
                            {
                                path: "/pages/blog-detail-pages/no-sidebar",
                                title: "No Sidebar",
                                type: "link"
                            },
                            {
                                path: "/pages/blog-detail-pages/detail-with-gallery",
                                title: "Detail With Gallery",
                                type: "link"
                            },
                            {
                                path: "/pages/blog-detail-pages/detail-with-video",
                                title: "Detail With Video",
                                type: "link"
                            }
                        ]
                    },
                    {
                        title: "Elements-Breadcrumb",
                        type: "sub",
                        children: [
                            {
                                path: "/listing/grid-view/2-grid/left-sidebar",
                                title: "Basic",
                                type: "link"
                            },
                            {
                                path: "/pages/elements-breadcrumb/image-with-effect",
                                title: "Image With Effect",
                                type: "link",
                                tag: "New"
                            },
                            {
                                path: "/pages/elements-breadcrumb/right-content",
                                title: "Right Content",
                                type: "link"
                            },
                            {
                                path: "/property/sticky-tab-or-classic",
                                title: "Only Image",
                                type: "link"
                            },
                            {
                                path: "/listing/list-view/map/pigeon-map",
                                title: "Small",
                                type: "link"
                            },
                            {
                                path: "/listing/list-view/map/leaflet-map",
                                title: "Gradient",
                                type: "link"
                            }
                        ]
                    }
                ]
            },
            {
                type: "col",
                children: [
                    {
                        title: "Agency",
                        type: "sub",
                        children: [
                            {
                                path: "/pages/agency/agency-profile",
                                title: "Agency Profile",
                                type: "link"
                            },
                            {
                                path: "/pages/agency/agency-grid",
                                title: "Agency Grid",
                                type: "link"
                            },
                            {
                                path: "/pages/agency/agency-list",
                                title: "Agency List",
                                type: "link"
                            }
                        ]
                    },
                    // {
                    //   title: "Email Template",
                    //   type: "sub",
                    //   children: [
                    //     { path: "/layouts/Basics/Video", title: "Offer", type: "link" },
                    //     {
                    //       path: "/layouts/Basics/Video",
                    //       title: "Confirmation",
                    //       type: "link",
                    //     },
                    //     { path: "/layouts/Basics/Video", title: "Thank You", type: "link" },
                    //   ],
                    // },
                    {
                        title: "User Panel",
                        type: "sub",
                        children: [
                            {
                                path: "/pages/user-panel/user-dashboard",
                                title: "User Dashboard",
                                type: "link",
                                icon: "true"
                            },
                            // { path: "/pages/user-panel/my-listing", title: "My Listing", type: "link" },
                            {
                                path: "/pages/user-panel/create-property",
                                title: "Create Property",
                                type: "link"
                            },
                            {
                                path: "/pages/user-panel/my-profile",
                                title: "My Profile",
                                type: "link"
                            },
                            {
                                path: "/pages/user-panel/favourites",
                                title: "Favorites",
                                type: "link"
                            },
                            {
                                path: "/pages/user-panel/compare-property",
                                title: "Compere Property",
                                type: "link"
                            },
                            {
                                path: "/pages/user-panel/cards-&-payment",
                                title: "Cards & Payment",
                                type: "link"
                            },
                            {
                                path: "/pages/user-panel/privacy",
                                title: "Privacy",
                                type: "link"
                            }
                        ]
                    }
                ]
            },
            {
                type: "col",
                children: [
                    {
                        title: "Other Pages",
                        type: "sub",
                        children: [
                            {
                                path: "/pages/other-pages/about-us-1",
                                title: "About Us 1",
                                type: "link"
                            },
                            {
                                path: "/pages/other-pages/about-us-2",
                                title: "About Us 2",
                                type: "link"
                            },
                            {
                                path: "/pages/other-pages/services",
                                title: "Services",
                                type: "link"
                            },
                            {
                                path: "/pages/other-pages/pricing",
                                title: "Pricing",
                                type: "link"
                            },
                            {
                                path: "/pages/other-pages/coming-soon-1",
                                title: "Coming Soon 1",
                                type: "link"
                            },
                            {
                                path: "/pages/other-pages/coming-soon-2",
                                title: "Coming Soon 2",
                                type: "link"
                            },
                            {
                                path: "/pages/other-pages/coming-soon-3",
                                title: "Coming Soon 3",
                                type: "link"
                            },
                            {
                                path: "/pages/other-pages/404",
                                title: "404",
                                type: "link"
                            },
                            {
                                path: "/pages/other-pages/faq",
                                title: "FAQ",
                                type: "link"
                            },
                            {
                                path: "/pages/other-pages/login",
                                title: "Log In",
                                type: "link"
                            },
                            {
                                path: "/pages/other-pages/signup",
                                title: "Sign Up",
                                type: "link"
                            },
                            {
                                path: "/pages/other-pages/signup-wizard",
                                title: "Sign Up Wizard",
                                type: "link",
                                icon: "true"
                            },
                            {
                                path: "/pages/other-pages/forgot-password",
                                title: "Forget Password",
                                type: "link"
                            },
                            {
                                path: "/pages/other-pages/terms-&-conditions",
                                title: "Terms & Conditions",
                                type: "link"
                            },
                            {
                                path: "/pages/other-pages/privacy-policy",
                                title: "Privacy Policy",
                                type: "link"
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        title: "MODULES",
        icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_feather__WEBPACK_IMPORTED_MODULE_1__.Zap, {}),
        type: "sub",
        children: [
            {
                path: "/modules/button",
                title: "Button",
                type: "link"
            },
            {
                path: "/modules/label",
                title: "Label",
                type: "link"
            },
            {
                path: "/modules/title",
                title: "Title",
                type: "link"
            },
            {
                path: "/modules/image-ratio",
                title: "Image Ratio",
                type: "link",
                icon: "true"
            },
            {
                path: "/modules/footer",
                title: "Footer",
                type: "link"
            },
            {
                path: "/modules/blog",
                title: "Blog",
                type: "link"
            },
            {
                path: "/modules/brand",
                title: "Brand",
                type: "link"
            },
            {
                path: "/modules/testimonial",
                title: "Testimonial",
                type: "link"
            },
            {
                path: "/modules/full-banner",
                title: "Full Banner",
                type: "link"
            },
            {
                path: "/modules/about",
                title: "About",
                type: "link"
            },
            {
                path: "/modules/service",
                title: "Service",
                type: "link"
            },
            {
                path: "/modules/property",
                title: "Property",
                type: "link"
            },
            {
                path: "/modules/feature",
                title: "Feature",
                type: "link"
            },
            {
                path: "/modules/others",
                title: "others",
                type: "link"
            }
        ]
    },
    {
        title: "AGENT",
        icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_feather__WEBPACK_IMPORTED_MODULE_1__.User, {}),
        type: "sub",
        children: [
            {
                path: "/agent/agent-profile",
                title: "Agent Profile",
                type: "link"
            },
            {
                path: "/agent/agent-grid",
                title: "Agent Grid",
                type: "link"
            },
            {
                path: "/agent/agent-list",
                title: "Agent List",
                type: "link"
            },
            {
                path: "/agent/submit-property",
                title: "Submit Property",
                type: "link",
                tag: "New"
            }
        ]
    },
    {
        title: "CONTACT",
        icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_feather__WEBPACK_IMPORTED_MODULE_1__.MapPin, {}),
        type: "sub",
        children: [
            {
                path: "/contact/contact-us-1",
                title: "Contact Us 1",
                type: "link"
            },
            {
                path: "/contact/contact-us-2",
                title: "Contact Us 2",
                type: "link"
            },
            {
                path: "/contact/contact-us-3",
                title: "Contact Us 3",
                type: "link"
            }
        ]
    }
];
const RightNavMenuItem = [
    {
        title: "language",
        option: [
            {
                lang: "en",
                language: "English"
            },
            {
                lang: "fr",
                language: "French"
            },
            {
                lang: "ar",
                language: "Arabic"
            },
            {
                lang: "es",
                language: "Spanish"
            }
        ]
    },
    {
        title: "cart"
    },
    {
        title: "currency",
        type: [
            {
                currency: "USD",
                name: "dollar",
                symbol: "$",
                value: 1
            },
            {
                currency: "EUR",
                name: "euro",
                symbol: "€",
                value: 0.997
            },
            {
                currency: "GBP",
                name: "pound",
                symbol: "\xa3",
                value: 0.847
            },
            {
                currency: "IND",
                name: "rupees",
                symbol: "₹",
                value: 79.9
            }
        ]
    },
    {
        title: "user"
    }
];


/***/ }),

/***/ 80415:
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
/* harmony import */ var _data_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(36042);
/* harmony import */ var _mainNavComponents_DropdownMenus__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(58646);
/* harmony import */ var _mainNavComponents_MegaMenu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(76352);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_mainNavComponents_MegaMenu__WEBPACK_IMPORTED_MODULE_5__]);
_mainNavComponents_MegaMenu__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
/**
 * It renders a navbar with a list of menu items
 * @returns A navbar with a dropdown menu and a mega menu.
 */ 





const MainNav = ({ center , icon  })=>{
    const [openNavbar, setOpenNavbar] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();
    const [isOpenChild, setIsOpenChild] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();
    const [isOpenNestedChild, setIsOpenNestedChild] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("nav", {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "main-navbar",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                id: "mainnav",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "toggle-nav",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                            className: "fa fa-bars sidebar-bar",
                            onClick: ()=>setOpenNavbar(true)
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                        className: `nav-menu ${openNavbar ? "open" : ""}`,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                className: "back-btn",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "mobile-back text-end",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            onClick: ()=>setOpenNavbar(false),
                                            children: "Back"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                            "aria-hidden": "true",
                                            className: "fa fa-angle-right ps-2"
                                        })
                                    ]
                                })
                            }),
                            _data_menu__WEBPACK_IMPORTED_MODULE_3__/* .MainNavMenuItems.map */ .V.map((navTitle, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
                                    children: navTitle.type === "sub" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mainNavComponents_DropdownMenus__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                        navTitle: navTitle,
                                        isOpen: isOpen,
                                        setIsOpen: setIsOpen,
                                        isOpenChild: isOpenChild,
                                        setIsOpenChild: setIsOpenChild,
                                        isOpenNestedChild: isOpenNestedChild,
                                        setIsOpenNestedChild: setIsOpenNestedChild,
                                        icon: icon
                                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mainNavComponents_MegaMenu__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                        navTitle: navTitle,
                                        isOpen: isOpen,
                                        setIsOpen: setIsOpen,
                                        i: true,
                                        isOpenNestedChild: isOpenNestedChild,
                                        setIsOpenNestedChild: setIsOpenNestedChild
                                    })
                                }, index))
                        ]
                    }),
                    center && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "brand-logo",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                            href: "/home/slider-filter-search",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    src: "/assets/images/logo/4.png",
                                    alt: "",
                                    className: "img-fluid for-light"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    src: "/assets/images/logo/9.png",
                                    alt: "",
                                    className: "img-fluid for-dark"
                                })
                            ]
                        })
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MainNav);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 58646:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(41664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(11377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_useMobileSize__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(65531);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/**
 * It renders a dropdown menu with nested submenus
 * @returns A dropdown menu with a title and a list of items.
 */ 





const DropdownMenus = ({ navTitle , isOpen , setIsOpen , isOpenChild , setIsOpenChild , isOpenNestedChild , setIsOpenNestedChild , icon  })=>{
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_3__.useTranslation)("common");
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();
    // get window width
    const mobileSize = (0,_utils_useMobileSize__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
        className: "dropdown",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                className: `nav-link menu-title ${isOpen === navTitle.title ? "active" : ""}`,
                onClick: (e)=>{
                    e.preventDefault();
                    setIsOpen(navTitle.title);
                    isOpen === navTitle.title && setIsOpen();
                },
                children: [
                    !mobileSize && icon && navTitle.icon,
                    t(navTitle.title),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "according-menu",
                        children: isOpen === navTitle.title ? "-" : "+"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                className: `nav-submenu menu-content ${mobileSize && isOpen === navTitle.title ? "d-block" : "d-none d-xl-block"}`,
                children: navTitle.children.map((navList, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                        children: navList.type === "link" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                            children: navList.path !== router.pathname ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                href: navList.path,
                                children: [
                                    navList.title,
                                    navList.tag && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "label",
                                        children: navList.tag
                                    }),
                                    navList.icon && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "icon-trend label",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                            className: "fas fa-bolt"
                                        })
                                    })
                                ]
                            }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                children: [
                                    navList.title,
                                    navList.tag && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "label",
                                        children: navList.tag
                                    }),
                                    navList.icon && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "icon-trend label",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                            className: "fas fa-bolt"
                                        })
                                    })
                                ]
                            })
                        }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                    className: "submenu-title",
                                    onClick: (e)=>{
                                        e.preventDefault();
                                        setIsOpenChild(navList.title);
                                        isOpenChild === navList.title && setIsOpenChild();
                                    },
                                    children: [
                                        navList.title,
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "according-menu",
                                            children: navList.type === "sub" && (isOpenChild === navList.title ? "-" : "+")
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                    className: `nav-sub-childmenu level1 ${mobileSize && isOpenChild === navList.title ? "d-block" : ""}`,
                                    children: navList.type === "sub" && navList.children.map((childNavList, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                            children: [
                                                childNavList.path ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                    href: childNavList.path,
                                                    className: childNavList.type === "sub" ? "submenu-title" : "",
                                                    onClick: ()=>{
                                                        setIsOpenNestedChild(childNavList.title);
                                                        isOpenNestedChild === childNavList.title && setIsOpenNestedChild();
                                                    },
                                                    children: [
                                                        childNavList.title,
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "according-menu",
                                                            children: childNavList.type === "sub" && (isOpenNestedChild === childNavList.title ? "-" : "+")
                                                        })
                                                    ]
                                                }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                    className: childNavList.type === "sub" ? "submenu-title" : "",
                                                    onClick: ()=>{
                                                        setIsOpenNestedChild(childNavList.title);
                                                        isOpenNestedChild === childNavList.title && setIsOpenNestedChild();
                                                    },
                                                    children: [
                                                        childNavList.title,
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "according-menu",
                                                            children: childNavList.type === "sub" && (isOpenNestedChild === childNavList.title ? "-" : "+")
                                                        })
                                                    ]
                                                }),
                                                childNavList.type === "sub" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                                    className: `nav-sub-childmenu submenu-content level2  ${mobileSize && isOpenNestedChild === childNavList.title ? "d-block" : ""}`,
                                                    children: childNavList.type === "sub" && childNavList.children.map((nestedChildNavList, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                                href: nestedChildNavList.path,
                                                                children: nestedChildNavList.title
                                                            })
                                                        }, index))
                                                })
                                            ]
                                        }, index))
                                })
                            ]
                        })
                    }, index))
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DropdownMenus);


/***/ }),

/***/ 76352:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(41664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(67269);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(11377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_useMobileSize__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(65531);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([reactstrap__WEBPACK_IMPORTED_MODULE_3__]);
reactstrap__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
/**
 * It renders a mega menu with nested child menus
 * @returns A React component.
 */ 





const MegaMenu = ({ navTitle , isOpen , setIsOpen , isOpenNestedChild , setIsOpenNestedChild  })=>{
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_4__.useTranslation)("common");
    const mobileSize = (0,_utils_useMobileSize__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
        className: "mega-menu",
        children: [
            " ",
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                className: `nav-link menu-title ${isOpen === navTitle.title && "active"}`,
                onClick: (e)=>{
                    e.preventDefault();
                    setIsOpen(navTitle.title);
                    isOpen === navTitle.title && setIsOpen();
                },
                children: [
                    t(navTitle.title),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "according-menu",
                        children: isOpen === navTitle.title ? "-" : "+"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: `mega-menu-container menu-content ${isOpen === navTitle.title ? "d-block" : ""} `,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__.Container, {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__.Row, {
                        children: navTitle.children.map((childNavList, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__.Col, {
                                className: "mega-box",
                                children: childNavList.children.map((nestedChildNavList, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "link-section",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: `submenu-title ${isOpen === navTitle.title ? "active" : ""}`,
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h5", {
                                                    onClick: (e)=>{
                                                        e.preventDefault();
                                                        setIsOpenNestedChild(nestedChildNavList.title);
                                                        isOpenNestedChild === nestedChildNavList.title && setIsOpenNestedChild();
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                            children: nestedChildNavList.title
                                                        }),
                                                        mobileSize && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "according-menu",
                                                            children: isOpenNestedChild === nestedChildNavList.title ? "-" : "+"
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: `submenu-content opensubmegamenu ${isOpenNestedChild === nestedChildNavList.title ? "d-block" : "d-none d-xl-block"}`,
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                                    className: "list",
                                                    children: nestedChildNavList.children.map((nestedChildNavListTitle, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                                href: nestedChildNavListTitle.path,
                                                                children: [
                                                                    nestedChildNavListTitle.title,
                                                                    nestedChildNavListTitle.tag && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                        className: "label",
                                                                        children: nestedChildNavListTitle.tag
                                                                    }),
                                                                    nestedChildNavListTitle.icon && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                        className: "icon-trend label",
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                            className: "fas fa-bolt"
                                                                        })
                                                                    })
                                                                ]
                                                            })
                                                        }, index))
                                                })
                                            })
                                        ]
                                    }, index))
                            }, index))
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MegaMenu);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5785:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Y": () => (/* binding */ getData)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(99648);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);
axios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
/**
 * It returns the data from the given url
 * @param url - The URL to make the request to.
 * @returns a promise.
 */ 
async function getData(url) {
    try {
        return await axios__WEBPACK_IMPORTED_MODULE_0__["default"].get(url);
    } catch (error) {
        console.error("Error", error);
        alert(`${"data is not fetched !! check console.............!!                     imp Note: plz run application on http://localhost:3000/"}`);
    }
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 65531:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/**
 * This function will return a boolean value of true or false depending on the size of the window.
 * @returns A boolean value.
 */ 
// Hook
function useMobileSize(props) {
    const [mobileSize, setMobileSize] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        function handleResize() {
            if (false) {}
        }
        window.addEventListener("resize", handleResize);
        handleResize();
        return ()=>window.removeEventListener("resize", handleResize);
    }, []);
    return mobileSize;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useMobileSize);


/***/ })

};
;