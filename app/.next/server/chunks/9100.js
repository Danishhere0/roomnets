"use strict";
exports.id = 9100;
exports.ids = [9100];
exports.modules = {

/***/ 69100:
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
/* harmony import */ var _utils_useFilterProducts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(17978);
/* harmony import */ var _elements_propertyBoxs_PropertyBox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(72504);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([reactstrap__WEBPACK_IMPORTED_MODULE_2__, _elements_propertyBoxs_PropertyBox__WEBPACK_IMPORTED_MODULE_4__]);
([reactstrap__WEBPACK_IMPORTED_MODULE_2__, _elements_propertyBoxs_PropertyBox__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
/**
 * It takes in a list of properties and returns a list of property boxes
 * @returns A div with a className of property-2 row column-sm zoom-gallery property-label
 * property-grid.
 */ 




const GridLayout = ({ value , grid , listSize , relativeSlider , video , infiniteScroll , myList , gridDispatch  })=>{
    let cardToShow = 6;
    const showProduct = (0,_utils_useFilterProducts__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)({
        value,
        myList
    });
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        gridDispatch({
            type: "totalPages",
            payload: Math.ceil(showProduct?.length / cardToShow)
        });
        gridDispatch({
            type: "productCount",
            payload: showProduct?.length
        });
    }, [
        showProduct,
        cardToShow
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__.Row, {
            className: `property-2 column-sm zoom-gallery property-label property-grid ${grid.gridStyle === "list-view" ? "list-view" : ""}`,
            children: showProduct && showProduct.slice(!infiniteScroll && cardToShow * grid.toPage - cardToShow, cardToShow * grid.toPage).map((data, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__.Col, {
                        sm: grid.gridStyle === "grid-view" && (grid.gridSize === 3 || 4) && "6",
                        md: grid.gridStyle === "list-view" && "12",
                        lg: grid.gridStyle === "grid-view" && (grid.gridSize === 2 && "6" || (grid.gridSize === 3 || 4) && "4"),
                        xl: grid.gridStyle === "list-view" && listSize === 2 && "6",
                        xxl: grid.gridStyle === "grid-view" && grid.gridSize === 4 && "3",
                        className: `${grid.gridStyle === "list-view" ? "list-view" : ""} wow fadeInUp grid-view `,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_elements_propertyBoxs_PropertyBox__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                            data: data,
                            relativeSlider: relativeSlider,
                            video: video
                        })
                    }, i)
                }, i))
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GridLayout);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 17978:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);



const useFilterProducts = ({ value  })=>{
    const { propertyStatus , propertyType , maxRooms , bed , bath , agencies , price , area , sortBy  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)((state)=>state.inputsReducer);
    const inputFilter = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)((state)=>state.inputsReducer);
    const [showProduct, setShowProduct] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const [work, setWork] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_0__.useRouter)();
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
    const Data = router.query;
    try {
        var oldData = !!Object.keys(Data).length && JSON.parse(decodeURIComponent(Data.filterDetails));
    } catch (err) {
        console.log(err);
    }
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        oldData?.propertyStatus && dispatch({
            type: "propertyStatus",
            payload: oldData?.propertyStatus
        });
        oldData?.propertyType && dispatch({
            type: "propertyType",
            payload: oldData?.propertyType
        });
        oldData?.maxRooms && dispatch({
            type: "maxRooms",
            payload: oldData?.maxRooms
        });
        oldData?.bed && dispatch({
            type: "bed",
            payload: oldData?.bed
        });
        oldData?.bath && dispatch({
            type: "bath",
            payload: oldData?.bath
        });
        oldData?.agencies && dispatch({
            type: "agencies",
            payload: oldData?.agencies
        });
        oldData?.sortBy && dispatch({
            type: "sortBy",
            payload: oldData?.sortBy
        });
        oldData?.price && (oldData?.price[0] !== price[0] || oldData?.price[1] !== price[1] ? dispatch({
            type: "price",
            payload: oldData?.price
        }) : "");
        oldData?.area && (oldData?.area[0] !== area[0] || oldData?.area[1] !== area[1] ? dispatch({
            type: "area",
            payload: oldData?.area
        }) : "");
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        Data
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setShowProduct(value?.filter((product)=>{
            let status = propertyStatus ? propertyStatus === "Property Status" && true || (product.propertyStatus === propertyStatus ? true : false) : true;
            let type = propertyType ? propertyType === "Property Type" && true || (product.propertyType === propertyType ? true : false) : true;
            let room = maxRooms ? maxRooms === "Max Rooms" && true || (product.rooms === Number(maxRooms) ? true : false) : true;
            let beds = bed ? bed === "Bed" && true || (product.bed === Number(bed) ? true : false) : true;
            let baths = bath ? bath === "Bath" && true || (product.bath === Number(bath) ? true : false) : true;
            let agencie = agencies ? agencies === "Agencies" && true || (product.agencies === agencies ? true : false) : true;
            let priceMatch = price ? price[0] <= product.price && price[1] >= product.price && true : true;
            let SqftMatch = area ? area[0] <= product.sqft && area[1] >= product.sqft && true : true;
            return status && type && room && beds && baths && agencie && priceMatch && SqftMatch;
        }).sort((product1, product2)=>{
            if (sortBy === "High to Low Price") {
                return product2.price < product1.price ? -1 : 1;
            } else if (sortBy === "Low to High price") {
                return product2.price > product1.price ? -1 : 1;
            } else if (sortBy === "Sort by Newest") {
                let date1 = new Date(product1.date);
                let date2 = new Date(product2.date);
                return date2?.getTime() < date1.getTime() ? -1 : 1;
            } else if (sortBy === "Sort by Oldest") {
                let date11 = new Date(product1.date);
                let date21 = new Date(product2.date);
                return date21?.getTime() > date11.getTime() ? -1 : 1;
            } else {
                return product2.price !== product1.price ? 1 : 1;
            }
        }));
        work && router.push({
            pathname: router.pathname,
            query: {
                filterDetails: encodeURIComponent(JSON.stringify(inputFilter))
            }
        }, undefined, {
            shallow: true
        });
        setTimeout(()=>{
            setWork(true);
        }, 1000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        propertyStatus,
        value,
        propertyType,
        maxRooms,
        bed,
        bath,
        agencies,
        sortBy,
        price,
        area
    ]);
    return showProduct;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useFilterProducts);


/***/ })

};
;