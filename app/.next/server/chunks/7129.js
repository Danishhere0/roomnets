exports.id = 7129;
exports.ids = [7129];
exports.modules = {

/***/ 57129:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_leaflet_MapContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1002);
/* harmony import */ var react_leaflet_TileLayer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(36838);
/* harmony import */ var _node_modules_leaflet_dist_leaflet_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9637);
/* harmony import */ var _node_modules_leaflet_dist_leaflet_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_leaflet_dist_leaflet_css__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_leaflet_MapContainer__WEBPACK_IMPORTED_MODULE_2__, react_leaflet_TileLayer__WEBPACK_IMPORTED_MODULE_3__]);
([react_leaflet_MapContainer__WEBPACK_IMPORTED_MODULE_2__, react_leaflet_TileLayer__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const LeafletMap = ()=>{
    const [display, setDisplay] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setTimeout(()=>{
            setDisplay(true);
        }, 2500);
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
        children: display && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_leaflet_MapContainer__WEBPACK_IMPORTED_MODULE_2__.MapContainer, {
            className: "jvector-map-height",
            style: {
                height: "100%",
                width: "100%"
            },
            zoom: 13,
            center: [
                51.505,
                -0.09
            ],
            attributionControl: true,
            zoomControl: true,
            doubleClickZoom: true,
            scrollWheelZoom: true,
            dragging: true,
            animate: true,
            easeLinearity: 0.35,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_leaflet_TileLayer__WEBPACK_IMPORTED_MODULE_3__.TileLayer, {
                attribution: '\xa9 <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
                url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LeafletMap);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9637:
/***/ (() => {



/***/ })

};
;