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

        fetch('http://localhost:8080/jhoeller/bookmarks').then(function (response) {
            return;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlcy8yLmJiMTQwNmMyMDA2MjczYjk4NDFkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzIjpbIi9ob21lL2thdWUvRGVza3RvcC9yZWFjdC1zdHVkeS9zcmMvcm91dGVzL3NpbXBsZS10aXRsZXMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBTaW1wbGVUaXRsZXMgZnJvbSAnLi9TaW1wbGVUaXRsZXMnO1xuaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL0xheW91dCc7XG5cbmFzeW5jIGZ1bmN0aW9uIGFjdGlvbih7ZmV0Y2h9KSB7XG4gICAgY29uc3QgdGl0bGVzID0gYXdhaXQgZmV0Y2goJy9ncmFwaHFsJywge1xuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICBxdWVyeTogJ3tuZXdze3RpdGxlfX0nLFxuICAgICAgICB9KSxcbiAgICB9KTtcblxuICAgIGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjgwODAvamhvZWxsZXIvYm9va21hcmtzJylcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICByZXR1cm4gXG4gICAgICAgIH0pXG5cbiAgICBjb25zdCBib29rbWFya3MgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDo4MDgwL2pob2VsbGVyL2Jvb2ttYXJrcycsIHtcbiAgICAgICAgbW9kZTogJ25vLWNvcnMnXG4gICAgfSk7XG5cbiAgICBjb25zdCB7Ym9va21hcmtPYmplY3RzfSA9IGF3YWl0IGJvb2ttYXJrcy5qc29uKCk7XG5cbiAgICBjb25zb2xlLmxvZyhib29rbWFya09iamVjdHMpO1xuXG4gICAgY29uc3Qge2RhdGF9ID0gYXdhaXQgdGl0bGVzLmpzb24oKTtcbiAgICBpZiAoIWRhdGEgfHwgIWRhdGEubmV3cykgdGhyb3cgbmV3IEVycm9yKCdGYWlsZWQgdG8gbG9hZCBmZWVkIHRpdGxlcycpO1xuICAgIHJldHVybiB7XG4gICAgICAgIHRpdGxlOiAnU2ltcGxlVGl0bGVzIHdlYnBhZ2UnLFxuICAgICAgICBjb21wb25lbnQ6IChcbiAgICAgICAgICAgIDxMYXlvdXQ+XG4gICAgICAgICAgICAgICAgPFNpbXBsZVRpdGxlcyBuZXdzPXtkYXRhLm5ld3N9Lz5cbiAgICAgICAgICAgIDwvTGF5b3V0PlxuICAgICAgICApLFxuICAgIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGFjdGlvbjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvcm91dGVzL3NpbXBsZS10aXRsZXMvaW5kZXguanMiXSwibWFwcGluZ3MiOiI7O0E7Ozs7Ozs7Ozs7Ozs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQURBO0FBQ0E7QUFLQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBSEE7QUFRQTtBQUNBO0FBL0JBOzs7Ozs7O0FBSkE7QUFDQTtBQUNBO0FBQ0E7QUFpQ0E7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==