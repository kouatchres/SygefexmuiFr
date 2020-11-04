webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./src/components/Header.jsx":
/*!***********************************!*\
  !*** ./src/components/Header.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mega_menu_MegaMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mega-menu/MegaMenu */ "./src/components/mega-menu/MegaMenu.jsx");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! nprogress */ "./node_modules/nprogress/nprogress.js");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _user_User__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user/User */ "./src/components/user/User.jsx");
var _jsxFileName = "E:\\Sygefex-recent\\sygefex-frontend\\src\\components\\Header.jsx";








next_router__WEBPACK_IMPORTED_MODULE_5___default.a.onRouteChangeStart = function () {
  nprogress__WEBPACK_IMPORTED_MODULE_4___default.a.start();
};

next_router__WEBPACK_IMPORTED_MODULE_5___default.a.onRouteChangeComplete = function () {
  nprogress__WEBPACK_IMPORTED_MODULE_4___default.a.done();
};

next_router__WEBPACK_IMPORTED_MODULE_5___default.a.onRouteChangeError = function () {
  nprogress__WEBPACK_IMPORTED_MODULE_4___default.a.done();
};

var StyledHeader = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "Header__StyledHeader",
  componentId: "sc-1ozje8u-0"
})(["position:fixed;left:0;top:0;align-content:center;z-index:100;.megaMenu{display:none;}.subBar{margin:0;align-items:center;display:grid;grid-template-columns:repeat(2,1fr);}.logo{font-size:3rem;position:relative;height:3.5rem;font-weight:bold;font-family:\"Roboto Slab\";letter-spacing:0.3rem;background:white;a{align-items:center;color:black;padding-bottom:2rem;padding:0 2rem;text-transform:uppercase;text-decoration:none;}}.meMenu{font-size:1.2rem;position:relative;height:3.5rem;font-weight:normal;font-family:\"Roboto Slab\";align-items:center;text-align:center;letter-spacing:0.15rem;color:white;background:black;padding:0  2rem;}@media(min-width:550px){position:fixed;left:0;top:0;.subBar{margin:0 auto;align-items:center;display:grid;grid-template-columns:repeat(2,1fr);.meMenu{display:grid;}.burger{display:none;}}.navigation{display:grid;grid-template-columns:1fr 1fr;}.megaMenu{display:grid;}x .burger{display:none;}}"]);
var MeMenu = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "Header__MeMenu",
  componentId: "sc-1ozje8u-1"
})(["display:grid;grid-template-columns:auto 1fr;grid-gap:2rem;"]);

var Header = function Header() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_user_User__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }, function (_ref) {
    var me = _ref.data.me;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledHeader, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "navigation",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "subBar",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "logo",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/creates/login",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117
      },
      __self: this
    }, "SYGEFEX")))), me && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "megaMenu",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MeMenu, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 123
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124
      },
      __self: this
    }, me.name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mega_menu_MegaMenu__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 125
      },
      __self: this
    }))), !me));
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./src/components/mega-menu/Burger.jsx":
false

})
//# sourceMappingURL=_app.js.f4333f5d9709594e12c7.hot-update.js.map