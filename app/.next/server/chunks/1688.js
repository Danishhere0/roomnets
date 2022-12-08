"use strict";
exports.id = 1688;
exports.ids = [1688];
exports.modules = {

/***/ 1688:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/**
 * It takes an image, hides it, and sets the parent element's background image to the image's src
 * @param props - This is the props object that is passed to the component.
 * @returns A function that returns a component
 */ 

const Img = (props)=>{
    const bgImg = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const image = bgImg.current;
        if (image && image.classList.contains("bg-img")) {
            const parentElement = image.parentElement;
            const src = props.src;
            parentElement.classList.add("bg-size");
            image.style.display = "none";
            parentElement.setAttribute("style", `
        background-image: url(${src});
        background-size:cover; 
        background-position: center;
        background-repeat: no-repeat;
        display: block;
        `);
        }
    }, [
        props.src
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
        ref: bgImg,
        ...props,
        alt: ""
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Img);


/***/ })

};
;