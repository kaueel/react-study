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
var _jsxFileName = '/home/kaue/Desktop/react-study/src/routes/simple-titles/index.js';

let action = (() => {
    var _ref = _asyncToGenerator(function* ({ fetch }) {
        const titles = yield fetch('/graphql', {
            body: JSON.stringify({
                query: '{news{title}}'
            })
        });

        fetch('http://localhost:8080/jhoeller/bookmarks', {
            method: 'get',
            mode: 'no-cors'
        }).then(function (response) {
            console.log(response);
        }).catch(function (err) {
            console.log(err);
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
                        lineNumber: 30
                    },
                    __self: this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__SimpleTitles__["a" /* default */], { news: data.news, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 31
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlcy8yLjMxYjBlZjAwZDk3N2ZhMGM2YzQ3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzIjpbIi9ob21lL2thdWUvRGVza3RvcC9yZWFjdC1zdHVkeS9zcmMvcm91dGVzL3NpbXBsZS10aXRsZXMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBTaW1wbGVUaXRsZXMgZnJvbSAnLi9TaW1wbGVUaXRsZXMnO1xuaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL0xheW91dCc7XG5cbmFzeW5jIGZ1bmN0aW9uIGFjdGlvbih7ZmV0Y2h9KSB7XG4gICAgY29uc3QgdGl0bGVzID0gYXdhaXQgZmV0Y2goJy9ncmFwaHFsJywge1xuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICBxdWVyeTogJ3tuZXdze3RpdGxlfX0nLFxuICAgICAgICB9KSxcbiAgICB9KTtcblxuICAgIGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjgwODAvamhvZWxsZXIvYm9va21hcmtzJywge1xuICAgICAgICBtZXRob2Q6ICdnZXQnLFxuICAgICAgICBtb2RlOiAnbm8tY29ycydcbiAgICB9KS50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbiAgICB9KS5jYXRjaChmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IHtib29rbWFya09iamVjdHN9ID0gYXdhaXQgYm9va21hcmtzLmpzb24oKTtcblxuICAgIGNvbnNvbGUubG9nKGJvb2ttYXJrT2JqZWN0cyk7XG5cbiAgICBjb25zdCB7ZGF0YX0gPSBhd2FpdCB0aXRsZXMuanNvbigpO1xuICAgIGlmICghZGF0YSB8fCAhZGF0YS5uZXdzKSB0aHJvdyBuZXcgRXJyb3IoJ0ZhaWxlZCB0byBsb2FkIGZlZWQgdGl0bGVzJyk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdGl0bGU6ICdTaW1wbGVUaXRsZXMgd2VicGFnZScsXG4gICAgICAgIGNvbXBvbmVudDogKFxuICAgICAgICAgICAgPExheW91dD5cbiAgICAgICAgICAgICAgICA8U2ltcGxlVGl0bGVzIG5ld3M9e2RhdGEubmV3c30vPlxuICAgICAgICAgICAgPC9MYXlvdXQ+XG4gICAgICAgICksXG4gICAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgYWN0aW9uO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9yb3V0ZXMvc2ltcGxlLXRpdGxlcy9pbmRleC5qcyJdLCJtYXBwaW5ncyI6Ijs7QTs7Ozs7Ozs7Ozs7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBREE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUhBO0FBUUE7QUFDQTtBQS9CQTs7Ozs7OztBQUpBO0FBQ0E7QUFDQTtBQUNBO0FBaUNBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=