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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_axios__ = __webpack_require__("./node_modules/axios/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_axios__);
var _jsxFileName = '/home/kaue/Desktop/react-study/src/routes/simple-titles/index.js';

let action = (() => {
    var _ref = _asyncToGenerator(function* ({ fetch }) {
        const titles = yield fetch('/graphql', {
            body: JSON.stringify({
                query: '{news{title}}'
            })
        });

        __WEBPACK_IMPORTED_MODULE_3_axios___default.a.get('http://localhost:8080/jhoeller/bookmarks', { mode: 'no-cors' }).then(function (response) {
            return console.log(response);
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
                        lineNumber: 21
                    },
                    __self: this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__SimpleTitles__["a" /* default */], { news: data.news, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 22
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlcy8yLjIzMDBlODNjOGY1MTJjZGQ4MmEyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzIjpbIi9ob21lL2thdWUvRGVza3RvcC9yZWFjdC1zdHVkeS9zcmMvcm91dGVzL3NpbXBsZS10aXRsZXMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBTaW1wbGVUaXRsZXMgZnJvbSAnLi9TaW1wbGVUaXRsZXMnO1xuaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL0xheW91dCc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5hc3luYyBmdW5jdGlvbiBhY3Rpb24oe2ZldGNofSkge1xuICAgIGNvbnN0IHRpdGxlcyA9IGF3YWl0IGZldGNoKCcvZ3JhcGhxbCcsIHtcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgcXVlcnk6ICd7bmV3c3t0aXRsZX19JyxcbiAgICAgICAgfSksXG4gICAgfSk7XG5cbiAgICBheGlvcy5nZXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9qaG9lbGxlci9ib29rbWFya3MnLCB7bW9kZTogJ25vLWNvcnMnfSlcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gY29uc29sZS5sb2cocmVzcG9uc2UpKTtcblxuICAgIGNvbnN0IHtkYXRhfSA9IGF3YWl0IHRpdGxlcy5qc29uKCk7XG4gICAgaWYgKCFkYXRhIHx8ICFkYXRhLm5ld3MpIHRocm93IG5ldyBFcnJvcignRmFpbGVkIHRvIGxvYWQgZmVlZCB0aXRsZXMnKTtcbiAgICByZXR1cm4ge1xuICAgICAgICB0aXRsZTogJ1NpbXBsZVRpdGxlcyB3ZWJwYWdlJyxcbiAgICAgICAgY29tcG9uZW50OiAoXG4gICAgICAgICAgICA8TGF5b3V0PlxuICAgICAgICAgICAgICAgIDxTaW1wbGVUaXRsZXMgbmV3cz17ZGF0YS5uZXdzfS8+XG4gICAgICAgICAgICA8L0xheW91dD5cbiAgICAgICAgKSxcbiAgICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBhY3Rpb247XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL3JvdXRlcy9zaW1wbGUtdGl0bGVzL2luZGV4LmpzIl0sIm1hcHBpbmdzIjoiOztBOzs7Ozs7Ozs7Ozs7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQURBO0FBQ0E7QUFLQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFIQTtBQVFBO0FBQ0E7QUFyQkE7Ozs7Ozs7QUFMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBdUJBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=