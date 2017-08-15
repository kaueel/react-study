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

        fetch('//localhost:8080/jhoeller/bookmarks', {
            mode: 'no-cors'
        }).then(function (r) {
            return JSON.parse(r);
        }).then(function (data) {
            return console.log(data);
        }).catch(function (e) {
            return console.log(e);
        });

        const { data } = yield titles.json();
        if (!data || !data.news) throw new Error('Failed to load feed titles');
        return {
            title: 'SimpleTitles webpage',
            component: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_2__components_Layout__["a" /* default */],
                {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 24
                    },
                    __self: this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__SimpleTitles__["a" /* default */], { news: data.news, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 25
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlcy8yLjdkNGViYWVlMDEwZDgwZmMwYTM0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzIjpbIi9ob21lL2thdWUvRGVza3RvcC9yZWFjdC1zdHVkeS9zcmMvcm91dGVzL3NpbXBsZS10aXRsZXMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBTaW1wbGVUaXRsZXMgZnJvbSAnLi9TaW1wbGVUaXRsZXMnO1xuaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL0xheW91dCc7XG5pbXBvcnQgJCBmcm9tIFwianF1ZXJ5XCI7XG5cbmFzeW5jIGZ1bmN0aW9uIGFjdGlvbih7ZmV0Y2h9KSB7XG4gICAgY29uc3QgdGl0bGVzID0gYXdhaXQgZmV0Y2goJy9ncmFwaHFsJywge1xuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICBxdWVyeTogJ3tuZXdze3RpdGxlfX0nLFxuICAgICAgICB9KSxcbiAgICB9KTtcblxuICAgIGZldGNoKCcvL2xvY2FsaG9zdDo4MDgwL2pob2VsbGVyL2Jvb2ttYXJrcycsIHtcbiAgICAgICAgbW9kZTogJ25vLWNvcnMnXG4gICAgfSkudGhlbihyID0+IEpTT04ucGFyc2UocikpXG4gICAgICAgIC50aGVuKGRhdGEgPT4gY29uc29sZS5sb2coZGF0YSkpXG4gICAgICAgIC5jYXRjaChlID0+IGNvbnNvbGUubG9nKGUpKTtcblxuICAgIGNvbnN0IHtkYXRhfSA9IGF3YWl0IHRpdGxlcy5qc29uKCk7XG4gICAgaWYgKCFkYXRhIHx8ICFkYXRhLm5ld3MpIHRocm93IG5ldyBFcnJvcignRmFpbGVkIHRvIGxvYWQgZmVlZCB0aXRsZXMnKTtcbiAgICByZXR1cm4ge1xuICAgICAgICB0aXRsZTogJ1NpbXBsZVRpdGxlcyB3ZWJwYWdlJyxcbiAgICAgICAgY29tcG9uZW50OiAoXG4gICAgICAgICAgICA8TGF5b3V0PlxuICAgICAgICAgICAgICAgIDxTaW1wbGVUaXRsZXMgbmV3cz17ZGF0YS5uZXdzfS8+XG4gICAgICAgICAgICA8L0xheW91dD5cbiAgICAgICAgKSxcbiAgICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBhY3Rpb247XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL3JvdXRlcy9zaW1wbGUtdGl0bGVzL2luZGV4LmpzIl0sIm1hcHBpbmdzIjoiOztBOzs7Ozs7Ozs7Ozs7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQURBO0FBQ0E7QUFLQTtBQUNBO0FBREE7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFIQTtBQVFBO0FBQ0E7QUF4QkE7Ozs7Ozs7QUFMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBMEJBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=