require("source-map-support").install();
exports.id = 2;
exports.modules = {

/***/ "./src/routes/simple-titles/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__SimpleTitles__ = __webpack_require__("./src/routes/simple-titles/SimpleTitles.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Layout__ = __webpack_require__("./src/components/Layout/Layout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jquery__ = __webpack_require__("jquery");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_jquery__);
var _jsxFileName = '/home/kaue/Desktop/react-study/src/routes/simple-titles/index.js';

let action = (() => {
    var _ref = _asyncToGenerator(function* ({ fetch }) {
        const titles = yield fetch('/graphql', {
            body: JSON.stringify({
                query: '{news{title}}'
            })
        });

        const bookmarks = yield fetch('http://localhost:8080/jhoeller/bookmarks', {
            mode: 'no-cors'
        });

        const { bookmarkObjects } = yield bookmarks.json();

        console.log(bookmarkObjects);

        const { data } = yield titles.json();
        if (!data || !data.news) throw new Error('Failed to load feed titles');
        return {
            title: 'SimpleTitles webpage',
            component: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_2__components_Layout__["a" /* default */],
                {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 26
                    },
                    __self: this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__SimpleTitles__["a" /* default */], { news: data.news, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 27
                    },
                    __self: this
                })
            )
        };
    });

    return function action(_x) {
        return _ref.apply(this, arguments);
    };
})();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }






/* harmony default export */ __webpack_exports__["default"] = (action);

/***/ })

};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlcy8yLmYwYmM5ODhjNGI0MWU1MjY1NzA5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzIjpbIi9ob21lL2thdWUvRGVza3RvcC9yZWFjdC1zdHVkeS9zcmMvcm91dGVzL3NpbXBsZS10aXRsZXMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBTaW1wbGVUaXRsZXMgZnJvbSAnLi9TaW1wbGVUaXRsZXMnO1xuaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL0xheW91dCc7XG5pbXBvcnQgJCBmcm9tIFwianF1ZXJ5XCI7XG5cbmFzeW5jIGZ1bmN0aW9uIGFjdGlvbih7ZmV0Y2h9KSB7XG4gICAgY29uc3QgdGl0bGVzID0gYXdhaXQgZmV0Y2goJy9ncmFwaHFsJywge1xuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICBxdWVyeTogJ3tuZXdze3RpdGxlfX0nLFxuICAgICAgICB9KSxcbiAgICB9KTtcblxuICAgIGNvbnN0IGJvb2ttYXJrcyA9IGF3YWl0IGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjgwODAvamhvZWxsZXIvYm9va21hcmtzJywge1xuICAgICAgICBtb2RlOiAnbm8tY29ycydcbiAgICB9KTtcblxuICAgIGNvbnN0IHtib29rbWFya09iamVjdHN9ID0gYXdhaXQgYm9va21hcmtzLmpzb24oKTtcblxuICAgIGNvbnNvbGUubG9nKGJvb2ttYXJrT2JqZWN0cyk7XG5cbiAgICBjb25zdCB7ZGF0YX0gPSBhd2FpdCB0aXRsZXMuanNvbigpO1xuICAgIGlmICghZGF0YSB8fCAhZGF0YS5uZXdzKSB0aHJvdyBuZXcgRXJyb3IoJ0ZhaWxlZCB0byBsb2FkIGZlZWQgdGl0bGVzJyk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdGl0bGU6ICdTaW1wbGVUaXRsZXMgd2VicGFnZScsXG4gICAgICAgIGNvbXBvbmVudDogKFxuICAgICAgICAgICAgPExheW91dD5cbiAgICAgICAgICAgICAgICA8U2ltcGxlVGl0bGVzIG5ld3M9e2RhdGEubmV3c30vPlxuICAgICAgICAgICAgPC9MYXlvdXQ+XG4gICAgICAgICksXG4gICAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgYWN0aW9uO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9yb3V0ZXMvc2ltcGxlLXRpdGxlcy9pbmRleC5qcyJdLCJtYXBwaW5ncyI6Ijs7QTs7Ozs7Ozs7Ozs7Ozs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFEQTtBQUNBO0FBS0E7QUFDQTtBQURBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFIQTtBQVFBO0FBQ0E7QUExQkE7Ozs7Ozs7QUFMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBNEJBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=