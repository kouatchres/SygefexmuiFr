webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./src/components/Footer.jsx":
/*!***********************************!*\
  !*** ./src/components/Footer.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _jsxFileName = "E:\\Sygefex-recent\\sygefex-frontend\\src\\components\\Footer.jsx";


var FooterItems = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].ul.withConfig({
  displayName: "Footer__FooterItems",
  componentId: "sc-1xu6ued-0"
})(["margin:0 auto;display:flex;align-content:center;padding-bottom:0.5rem;"]);
var FooterItem = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].li.withConfig({
  displayName: "Footer__FooterItem",
  componentId: "sc-1xu6ued-1"
})(["list-style:none;display:flex;padding:0 0.5rem;font-size:1.5rem;"]);
var FooterContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Footer__FooterContainer",
  componentId: "sc-1xu6ued-2"
})(["margin:0 auto;margin-top:0.5rem;display:flex;bottom:0;left:0;align-items:center;color:", ";background:black;"], function (props) {
  return props.theme.pureWhite;
});

var Footer = function Footer() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FooterContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FooterItems, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FooterItem, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, "SYGEFEX"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FooterItem, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, " \u24B8 Copyright"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FooterItem, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, "Contact")));
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./src/components/Page.jsx":
/*!*********************************!*\
  !*** ./src/components/Page.jsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header */ "./src/components/Header.jsx");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Footer */ "./src/components/Footer.jsx");
/* harmony import */ var _Meta__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Meta */ "./src/components/Meta.jsx");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/colors */ "./node_modules/@material-ui/core/esm/colors/index.js");
var _theme,
    _jsxFileName = "E:\\Sygefex-recent\\sygefex-frontend\\src\\components\\Page.jsx";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n/* \n\n/* \n/* roboto-slab-regular - latin */\n@font-face {\n  font-family: 'Roboto Slab';\n  font-style: bold;\n  font-weight: 400;\n  src: url('/public/fonts/roboto-slab-v11-latin/roboto-slab-v11-latin-regular.eot'); /* IE9 Compat Modes */\n  src: local(''),\n       url('/public/fonts/roboto-slab-v11-latin/roboto-slab-v11-latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */\n       url('/public/fonts/roboto-slab-v11-latin/roboto-slab-v11-latin-regular.woff2') format('woff2'), /* Super Modern Browsers */\n       url('/public/fonts/roboto-slab-v11-latin/roboto-slab-v11-latin-regular.woff') format('woff'), /* Modern Browsers */\n       url('/public/fonts/roboto-slab-v11-latin/roboto-slab-v11-latin-regular.ttf') format('truetype'), /* Safari, Android, iOS */\n       url('/public/fonts/roboto-slab-v11-latin/roboto-slab-v11-latin-regular.svg#RobotoSlab') format('svg'); /* Legacy iOS */\n}\n\n\n\n/* roboto-slab-200 - latin */\n@font-face {\n  font-family: 'Roboto Slab';\n  font-style: normal;\n  font-weight: 200;\n  src: url('/public/fonts/roboto-slab-v11-latin/roboto-slab-v11-latin-200.eot'); /* IE9 Compat Modes */\n  src: local(''),\n       url('/public/fonts/roboto-slab-v11-latin/roboto-slab-v11-latin-200.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */\n       url('/public/fonts/roboto-slab-v11-latin/roboto-slab-v11-latin-200.woff2') format('woff2'), /* Super Modern Browsers */\n       url('/public/fonts/roboto-slab-v11-latin/roboto-slab-v11-latin-200.woff') format('woff'), /* Modern Browsers */\n       url('/public/fonts/roboto-slab-v11-latin/roboto-slab-v11-latin-200.ttf') format('truetype'), /* Safari, Android, iOS */\n       url('/public/fonts/roboto-slab-v11-latin/roboto-slab-v11-latin-200.svg#RobotoSlab') format('svg'); /* Legacy iOS */\n}\n\n/* roboto-slab-500 - latin */\n@font-face {\n  font-family: 'Roboto Slab';\n  font-style: normal;\n  font-weight: 500;\n  src: url('/public/fonts/roboto-slab-v11-latin/roboto-slab-v11-latin-500.eot'); /* IE9 Compat Modes */\n  src: local(''),\n       url('/public/fonts/roboto-slab-v11-latin/roboto-slab-v11-latin-500.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */\n       url('/public/fonts/roboto-slab-v11-latin/roboto-slab-v11-latin-500.woff2') format('woff2'), /* Super Modern Browsers */\n       url('/public/fonts/roboto-slab-v11-latin/roboto-slab-v11-latin-500.woff') format('woff'), /* Modern Browsers */\n       url('/public/fonts/roboto-slab-v11-latin/roboto-slab-v11-latin-500.ttf') format('truetype'), /* Safari, Android, iOS */\n       url('/public/fonts/roboto-slab-v11-latin/roboto-slab-v11-latin-500.svg#RobotoSlab') format('svg'); /* Legacy iOS */\n}\n */ */\n\n\n  html {\n    box-sizing: border-box;\n    font-size: 11px;\n  }\n  *, *:before, *:after {\n    box-sizing: inherit;\n  }\n  \n  body\n{\n    padding:0;\n    margin: 0;\n    font-size: 2rem;\n    font-family: \"Roboto Slab\";\n    font-weight: 500;\n    font-style: normal;\n   \n  button {  font-family: 'Roboto Slab'; }\n\n}\n\nh1, h2, h3, h4, h5, h6 {\n    font-family: \"Roboto Slab\";\n    font-size:2rem;\n    font-weight: 500;\n    font-style: bold;\n}\n\na\n{\n    font-family: \"Roboto Slab\";\n    font-weight: 400;\n    font-size:1.5rem;\n    font-style: italic;\n    text-decoration: none;\n    color: ", ";\n    :hover {\n  text-decoration: underline;\n}\n}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["makeStyles"])({
  root: {
    display: "flex",
    flexDirection: "column" // fontSize: 100,

  },
  allControls: {
    display: "flex",
    flexDirection: "column"
  }
});
var MuiTheme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["createMuiTheme"])({
  typography: {
    h4: {
      fontSize: 25
    },
    fontSize: 20
  },
  palette: {
    primary: {
      main: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_6__["orange"][500] // light: "#757ce8",
      // main2: "#3f50b5",
      // main: "#0780b7",
      // dark: "#002884",
      // contrastText: "#fff",

    },
    secondary: {
      main: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_6__["orange"][500] // light: "#ff7961",
      // dark: "#f44336",
      // main: "#ba000d",
      // contrastText: "#000",

    },
    fontFamily: ["Roboto", "sans-serif"].join(",")
  }
});
var theme = (_theme = {
  maxWidth: "1000px",
  quarterBB: " #003c96",
  lightestBB: "#b3b4d1",
  britishRed: "#d4351c",
  complementaryBB: "#784800",
  complementaryBB1: "#007860",
  complementaryBB2: "#006078",
  complementaryColours: "#456abc",
  complementaryBB3: "#007078",
  americanBlue: "#1d70b8",
  britishBlue: "#003078",
  britishLightBlue: "#1d70b8",
  red: "#FF0000",
  googleBlue: "#359",
  black: "#393939",
  goldenYellow: "#f2ab02",
  gold: "#D4AF37",
  goldRod: "#DAA520",
  tableBackgrd: "#fafad2",
  specialBlue: "#e5f5f9",
  grey: "#aaabaa",
  slightGrey: "#fafafa",
  lightGrey: "#E1E1E1",
  darkGrey: "#EEEEEE",
  pureWhite: "#FFFFFF",
  offWhite: "#EDEDED",
  primary: "#00ab80",
  black2: "#4a4a4a",
  white3: "#ffffff",
  error: "#e05666",
  brownishRed: "#fo7031",
  coolBlue: "#195e83",
  coolerBlue: "#136ea5",
  sand: "#eea549",
  reddishBrown: "#f57836",
  buff: "#edb879",
  warna: "#E2DD9F",
  deem: "#E7e3af",
  deemer: "#Edcb79",
  bootstrapBlue: "#007bff",
  indigo: "#6610f2",
  purple: "#6f42c1",
  pink: "#e83e8c"
}, _defineProperty(_theme, "red", "#dc3545"), _defineProperty(_theme, "orange", "#fd7e14"), _defineProperty(_theme, "yellow", "#ffc107"), _defineProperty(_theme, "green", "#28a745"), _defineProperty(_theme, "teal", "#20c997"), _defineProperty(_theme, "cyan", "#17a2b8"), _defineProperty(_theme, "white", "#fff"), _defineProperty(_theme, "gray", "#6c757d"), _defineProperty(_theme, "darkGray", "#343a40"), _defineProperty(_theme, "primary", "#007bff"), _defineProperty(_theme, "secondary", "#6c757d"), _defineProperty(_theme, "success", "#28a745"), _defineProperty(_theme, "info", "#17a2b8"), _defineProperty(_theme, "warning", "#ffc107"), _defineProperty(_theme, "danger", "#dc3545"), _defineProperty(_theme, "light", "#f8f9fa"), _defineProperty(_theme, "dark", "#343a40"), _defineProperty(_theme, "tableRed", "#c2463c"), _defineProperty(_theme, "darkRed", "#a2463c"), _defineProperty(_theme, "slightDarkRed", "#b2463c"), _defineProperty(_theme, "brightDarkRed", "#c2463c"), _defineProperty(_theme, "darkDarkRed", "#d2463c"), _defineProperty(_theme, "lightDarkRed", "#e2463c"), _defineProperty(_theme, "darkGreen", "#12463c"), _defineProperty(_theme, "tableBlack", "#2a2943"), _defineProperty(_theme, "tableLightBlue", "#e4ebf8"), _defineProperty(_theme, "blues", ["#729fbf", "#b6c7d6", "#0780b7", "#68a1c5", "#014e98", "#2782b0", "#5EC9F9", "#c8e5eb", "#b1dee3", "#bde4e9", "#cce7e8"]), _defineProperty(_theme, "fingers", ["#bcddfe", "#6581d4", "#f9f9f9", "#195e83", "#678197"]), _defineProperty(_theme, "lightBlues", ["#c8e4f3", "#d1e8ed", "#b3d3ea", "#c5e2f2", "#f1f5ff", "#e6ecfe", "#9cc3dfff", "#ffd662ff", "#c7d3d4ff"]), _defineProperty(_theme, "greys", ["#F9FAFC", "#F2F2F6", "#aaabaa", "#999", "#fcfcfc", "#c8c8c8"]), _defineProperty(_theme, "formBS3", " inset 0.7rem 0.7rem 0.5rem  rgba(0,0,0,0.9)"), _defineProperty(_theme, "formBS4", " inset 0.08rem 1rem 1rem 0.03rem rgba(0,0.3,0,0.2)"), _defineProperty(_theme, "formBS", "  0.1rem .05rem 0.5rem rgba(0,0,0.8,0.5)"), _defineProperty(_theme, "formBS2", " 0.15rem 0.15rem 1rem 0.05rem rgba(0,0,0,0.4);"), _defineProperty(_theme, "formBS1", " 0.15rem 0.15rem 0.15rem 0.15rem rgba(0,0,0.4,0.1)"), _theme);
var GenPage = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Page__GenPage",
  componentId: "sc-7w315w-0"
})(["position:relative;display:flex;flex-direction:column;justify-content:center;align-items:center;width:100vw;font-family:\"Roboto Slab\";min-height:100vh;background:", ";"], function (props) {
  return props.theme.lightBlues[4];
});
var Inner = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Page__Inner",
  componentId: "sc-7w315w-1"
})(["position:relative;margin:0 auto;padding:2rem;"]);
var Containers = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Page__Containers",
  componentId: "sc-7w315w-2"
})(["display:grid;grid-template-areas:\"Headers\" \"Mains\" \"Footers\";grid-template-columns:1fr;grid-template-rows:3.5rem 1fr 3.5rem;height:100vh;background:", ";padding:1rem 0;"], function (props) {
  return props.theme.pureWhite;
});
var Headers = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Page__Headers",
  componentId: "sc-7w315w-3"
})(["display:grid;grid-template-columns:1fr 4fr;align-items:right;grid-area:Headers;position:fixed;height:3.5rem;z-index:10;border-bottom:0.2rem solid inset 0.1rem 0.05rem 0.5rem rgba(0,0,0.8,0.5);"]);
var Footers = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Page__Footers",
  componentId: "sc-7w315w-4"
})(["grid-area:Footers;display:flex;justify-content:center;background-color:black;align-items:center;font-size:1.9rem;color:white;padding-left:2rem;padding-right:2rem;"]);
var Mains = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Page__Mains",
  componentId: "sc-7w315w-5"
})(["grid-area:Mains;padding-left:auto;padding-top:1rem;padding-right:auto;"]);
Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["injectGlobal"])(_templateObject(), function (props) {
  return props.theme.black;
});

var Page = /*#__PURE__*/function (_Component) {
  _inherits(Page, _Component);

  var _super = _createSuper(Page);

  function Page() {
    _classCallCheck(this, Page);

    return _super.apply(this, arguments);
  }

  _createClass(Page, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["MuiThemeProvider"], {
        theme: MuiTheme,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 317
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Containers, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 318
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Meta__WEBPACK_IMPORTED_MODULE_4__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 319
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Headers, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 320
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Header__WEBPACK_IMPORTED_MODULE_2__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 321
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Mains, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 323
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Inner, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 324
        },
        __self: this
      }, this.props.children)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Footers, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 326
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Footer__WEBPACK_IMPORTED_MODULE_3__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 327
        },
        __self: this
      }))));
    }
  }]);

  return Page;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Page);

/***/ }),

/***/ "./src/components/user/Signout.jsx":
/*!*****************************************!*\
  !*** ./src/components/user/Signout.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/react-apollo.esm.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _queries_Mutations_Functions_Queries__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../queries&Mutations&Functions/Queries */ "./src/components/queries&Mutations&Functions/Queries.jsx");
/* harmony import */ var _queries_Mutations_Functions_Mutations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../queries&Mutations&Functions/Mutations */ "./src/components/queries&Mutations&Functions/Mutations.jsx");
var _jsxFileName = "E:\\Sygefex-recent\\sygefex-frontend\\src\\components\\user\\Signout.jsx";





var SingoutButton = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Signout__SingoutButton",
  componentId: "gdl0yg-0"
})(["color:white;background:black;padding-left:5rem;padding-right:2rem;cursor:pointer;"]);

var Signout = function Signout(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_1__["Mutation"], {
    mutation: _queries_Mutations_Functions_Mutations__WEBPACK_IMPORTED_MODULE_4__["signoutMutation"],
    refetchQueries: [{
      query: _queries_Mutations_Functions_Queries__WEBPACK_IMPORTED_MODULE_3__["currentUserQuery"]
    }],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, function (signout) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SingoutButton, {
      onClick: signout,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }, " Sign Out ");
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Signout);

/***/ })

})
//# sourceMappingURL=_app.js.8254cf021cc40000ccc3.hot-update.js.map