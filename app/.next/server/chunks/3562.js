"use strict";
exports.id = 3562;
exports.ids = [3562];
exports.modules = {

/***/ 93562:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

//timer
const useTimer = (countDate)=>{
    const [timer, setTimer] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
        days: "",
        hours: "",
        minutes: "",
        seconds: ""
    });
    const [countDownDate, setCountDownDate] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(countDate);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        setTimeout(()=>{
            var now = new Date().getTime();
            var timeLeft = countDownDate - now;
            if (Math.floor(timeLeft % (1000 * 60) / 1000) <= 0 && Math.floor(timeLeft % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)) <= 0 && Math.floor(timeLeft % (1000 * 60 * 60) / (1000 * 60)) <= 0 && Math.floor(timeLeft % (1000 * 60) / 1000) <= 0) {
                const d = new Date();
                d.setDate(d.getDate() + 60);
                setCountDownDate(d);
            }
            setTimer({
                days: Math.floor(timeLeft / (1000 * 60 * 60 * 24)),
                hours: Math.floor(timeLeft % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)),
                minutes: Math.floor(timeLeft % (1000 * 60 * 60) / (1000 * 60)),
                seconds: Math.floor(timeLeft % (1000 * 60) / 1000)
            });
        }, 1000);
    }, [
        countDownDate,
        timer
    ]);
    return [
        timer?.days,
        timer?.hours,
        timer?.minutes,
        timer?.seconds
    ];
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useTimer);


/***/ })

};
;