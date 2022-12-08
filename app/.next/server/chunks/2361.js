"use strict";
exports.id = 2361;
exports.ids = [2361];
exports.modules = {

/***/ 15705:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "T": () => (/* binding */ initialGrid),
/* harmony export */   "x": () => (/* binding */ gridReducer)
/* harmony export */ });
const initialGrid = {
    gridSize: "",
    gridStyle: "",
    toPage: 1,
    totalPages: "",
    productCount: ""
};
const gridReducer = (state, action)=>{
    switch(action.type){
        case "gridSize":
            return {
                ...state,
                gridSize: action.payload
            };
        case "gridStyle":
            return {
                ...state,
                gridStyle: action.payload
            };
        case "toPage":
            return {
                ...state,
                toPage: action.payload
            };
        case "totalPages":
            return {
                ...state,
                totalPages: action.payload
            };
        case "productCount":
            return {
                ...state,
                productCount: action.payload
            };
        default:
            return state;
    }
};



/***/ }),

/***/ 26590:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ layout_Pagination)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(20997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(16689);
;// CONCATENATED MODULE: ./utils/UsePagination.js
const UsePagination = (payload)=>{
    function calculatePages(payload) {
        var pages = [];
        let startpage = payload.toPage === 1 || payload.toPage - 2 === 0 ? 1 : payload.toPage === payload.totalPages ? payload.toPage - 2 : payload.toPage - 1;
        let endPage = payload.toPage === 1 ? payload.toPage + 2 : payload.toPage + 1 <= payload.totalPages ? payload.toPage + 1 : payload.toPage;
        for(let i = startpage; i <= endPage; i++){
            i <= payload.totalPages && pages.push(i);
        }
        return pages;
    }
    return [
        ...calculatePages(payload)
    ];
};
/* harmony default export */ const utils_UsePagination = (UsePagination);

;// CONCATENATED MODULE: ./layout/Pagination.js
/**
 * It takes in the current page number, the total number of pages, and the function to set the current
 * page number, and returns a list of page numbers to display in the pagination
 * @returns A pagination component that is being used to navigate through the pages of the application.
 */ 


const Pagination = ({ toPage , gridDispatch , totalPages  })=>{
    const pages = utils_UsePagination({
        toPage: toPage,
        totalPages: totalPages
    });
    if (1 !== totalPages && totalPages !== 0) {
        return /*#__PURE__*/ jsx_runtime_.jsx("nav", {
            className: "theme-pagination",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                className: "pagination",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        className: "page-item",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "page-link",
                            "aria-label": "Previous",
                            onClick: ()=>gridDispatch({
                                    type: "toPage",
                                    payload: 1
                                }),
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    "aria-hidden": "true",
                                    children: "\xab"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "sr-only",
                                    children: "Previous"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        className: "page-item",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "page-link",
                            "aria-label": "Previous",
                            onClick: ()=>{
                                gridDispatch({
                                    type: "toPage",
                                    payload: toPage > 1 ? toPage - 1 : toPage
                                });
                            },
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    "aria-hidden": "true",
                                    children: "<"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "sr-only",
                                    children: "Previous"
                                })
                            ]
                        })
                    }),
                    pages.map((data, i)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                            className: `page-item ${data === toPage ? "active" : ""}`,
                            onClick: ()=>{
                                gridDispatch({
                                    type: "toPage",
                                    payload: data
                                });
                            },
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "page-link",
                                children: data
                            })
                        }, i)),
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        className: "page-item",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "page-link",
                            "aria-label": "Next",
                            onClick: ()=>{
                                gridDispatch({
                                    type: "toPage",
                                    payload: toPage < totalPages ? toPage + 1 : toPage
                                });
                            },
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    "aria-hidden": "true",
                                    children: ">"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "sr-only",
                                    children: "Next"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        className: "page-item",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "page-link",
                            "aria-label": "Next",
                            onClick: ()=>gridDispatch({
                                    type: "toPage",
                                    payload: totalPages
                                }),
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    "aria-hidden": "true",
                                    children: "\xbb"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "sr-only",
                                    children: "Next"
                                })
                            ]
                        })
                    })
                ]
            })
        });
    }
};
/* harmony default export */ const layout_Pagination = (Pagination);


/***/ })

};
;