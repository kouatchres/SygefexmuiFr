webpackHotUpdate("static\\development\\pages\\_app.js",{

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
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header */ "./src/components/Header.jsx");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Footer */ "./src/components/Footer.jsx");
/* harmony import */ var _Meta__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Meta */ "./src/components/Meta.jsx");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/colors */ "./node_modules/@material-ui/core/esm/colors/index.js");
var _jsxFileName = "E:\\Sygefex-recent\\sygefex-frontend\\src\\components\\Page.jsx";

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

 // import styled, { ThemeProvider, injectGlobal } from "styled-components";






var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["makeStyles"])({
  root: {
    display: "flex",
    flexDirection: "column" // fontSize: 100,

  },
  allControls: {
    display: "flex",
    flexDirection: "column"
  }
});
var MuiTheme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["createMuiTheme"])({
  typography: {
    h4: {
      fontSize: 25
    },
    fontSize: 20
  },
  palette: {
    primary: {
      main: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_5__["orange"][500] // light: "#757ce8",
      // main2: "#3f50b5",
      // main: "#0780b7",
      // dark: "#002884",
      // contrastText: "#fff",

    },
    secondary: {
      main: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_5__["orange"][500] // light: "#ff7961",
      // dark: "#f44336",
      // main: "#ba000d",
      // contrastText: "#000",

    },
    fontFamily: ["Roboto", "sans-serif"].join(",")
  }
}); // const theme = {
//   maxWidth: "1000px",
//   quarterBB: " #003c96",
//   lightestBB: "#b3b4d1",
//   britishRed: "#d4351c",
//   complementaryBB: "#784800",
//   complementaryBB1: "#007860",
//   complementaryBB2: "#006078",
//   complementaryColours: "#456abc",
//   complementaryBB3: "#007078",
//   americanBlue: "#1d70b8",
//   britishBlue: "#003078",
//   britishLightBlue: "#1d70b8",
//   red: "#FF0000",
//   googleBlue: "#359",
//   black: "#393939",
//   goldenYellow: "#f2ab02",
//   gold: "#D4AF37",
//   goldRod: "#DAA520",
//   tableBackgrd: "#fafad2",
//   specialBlue: "#e5f5f9",
//   grey: "#aaabaa",
//   slightGrey: "#fafafa",
//   lightGrey: "#E1E1E1",
//   darkGrey: "#EEEEEE",
//   pureWhite: "#FFFFFF",
//   offWhite: "#EDEDED",
//   primary: "#00ab80",
//   black2: "#4a4a4a",
//   white3: "#ffffff",
//   error: "#e05666",
//   brownishRed: "#fo7031",
//   coolBlue: "#195e83",
//   coolerBlue: "#136ea5",
//   sand: "#eea549",
//   reddishBrown: "#f57836",
//   buff: "#edb879",
//   warna: "#E2DD9F",
//   deem: "#E7e3af",
//   deemer: "#Edcb79",
//   bootstrapBlue: "#007bff",
//   indigo: "#6610f2",
//   purple: "#6f42c1",
//   pink: "#e83e8c",
//   red: "#dc3545",
//   orange: "#fd7e14",
//   yellow: "#ffc107",
//   green: "#28a745",
//   teal: "#20c997",
//   cyan: "#17a2b8",
//   white: "#fff",
//   gray: "#6c757d",
//   darkGray: "#343a40",
//   primary: "#007bff",
//   secondary: "#6c757d",
//   success: "#28a745",
//   info: "#17a2b8",
//   warning: "#ffc107",
//   danger: "#dc3545",
//   light: "#f8f9fa",
//   dark: "#343a40",
//   tableRed: "#c2463c",
//   darkRed: "#a2463c",
//   slightDarkRed: "#b2463c",
//   brightDarkRed: "#c2463c",
//   darkDarkRed: "#d2463c",
//   lightDarkRed: "#e2463c",
//   darkGreen: "#12463c",
//   tableBlack: "#2a2943",
//   tableLightBlue: "#e4ebf8",
//   blues: [
//     "#729fbf",
//     "#b6c7d6",
//     "#0780b7",
//     "#68a1c5",
//     "#014e98",
//     "#2782b0",
//     "#5EC9F9",
//     "#c8e5eb",
//     "#b1dee3",
//     "#bde4e9",
//     "#cce7e8",
//   ],
//   fingers: ["#bcddfe", "#6581d4", "#f9f9f9", "#195e83", "#678197"],
//   lightBlues: [
//     "#c8e4f3",
//     "#d1e8ed",
//     "#b3d3ea",
//     "#c5e2f2",
//     "#f1f5ff",
//     "#e6ecfe",
//     "#9cc3dfff",
//     "#ffd662ff",
//     "#c7d3d4ff",
//   ],
//   greys: ["#F9FAFC", "#F2F2F6", "#aaabaa", "#999", "#fcfcfc", "#c8c8c8"],
//   formBS3: " inset 0.7rem 0.7rem 0.5rem  rgba(0,0,0,0.9)",
//   formBS4: " inset 0.08rem 1rem 1rem 0.03rem rgba(0,0.3,0,0.2)",
//   formBS: "  0.1rem .05rem 0.5rem rgba(0,0,0.8,0.5)",
//   formBS2: " 0.15rem 0.15rem 1rem 0.05rem rgba(0,0,0,0.4);",
//   formBS1: " 0.15rem 0.15rem 0.15rem 0.15rem rgba(0,0,0.4,0.1)",
// };
// const GenPage = styled.div`
//   /* padding-top:4rem; */
//   position: relative;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   width: 100vw;
//   font-family: "Roboto Slab";
//   min-height: 100vh;
//   background: ${(props) => props.theme.lightBlues[4]};
// `;
// const Inner = styled.div`
//   position: relative;
//   margin: 0 auto;
//   padding: 2rem;
// `;
// const Containers = styled.div`
//   display: grid;
//   grid-template-areas: "Headers" "Mains" "Footers";
//   grid-template-columns: 1fr;
//   grid-template-rows: 3.5rem 1fr 3.5rem;
//   height: 100vh;
//   background: ${(props) => props.theme.pureWhite};
//   padding: 1rem 0;
// `;
// const Headers = styled.div`
//   display: grid;
//   grid-template-columns: 1fr 4fr;
//   align-items: right;
//   grid-area: Headers;
//   position: fixed;
//   height: 3.5rem;
//   z-index: 10;
//   border-bottom: 0.2rem solid inset 0.1rem 0.05rem 0.5rem rgba(0, 0, 0.8, 0.5);
// `;
// const Footers = styled.div`
//   grid-area: Footers;
//   display: flex;
//   justify-content: center;
//   background-color: black;
//   align-items: center;
//   font-size: 1.9rem;
//   color: white;
//   padding-left: 2rem;
//   padding-right: 2rem;
// `;
// const Mains = styled.div`
//   grid-area: Mains;
//   padding-left: auto;
//   padding-top: 1rem;
//   padding-right: auto;
// `;
// injectGlobal`
// /*
// /*
// /* roboto-slab-regular - latin */
// @font-face {
//   font-family: 'Roboto Slab';
//   font-style: bold;
//   font-weight: 400;
//   src: url('/public/fonts/roboto-slab-v11-latin/roboto-slab-v11-latin-regular.eot'); /* IE9 Compat Modes */
//   src: local(''),
//        url('/public/fonts/roboto-slab-v11-latin/roboto-slab-v11-latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
//        url('/public/fonts/roboto-slab-v11-latin/roboto-slab-v11-latin-regular.woff2') format('woff2'), /* Super Modern Browsers */
//        url('/public/fonts/roboto-slab-v11-latin/roboto-slab-v11-latin-regular.woff') format('woff'), /* Modern Browsers */
//        url('/public/fonts/roboto-slab-v11-latin/roboto-slab-v11-latin-regular.ttf') format('truetype'), /* Safari, Android, iOS */
//        url('/public/fonts/roboto-slab-v11-latin/roboto-slab-v11-latin-regular.svg#RobotoSlab') format('svg'); /* Legacy iOS */
// }
// /* roboto-slab-200 - latin */
// @font-face {
//   font-family: 'Roboto Slab';
//   font-style: normal;
//   font-weight: 200;
//   src: url('/public/fonts/roboto-slab-v11-latin/roboto-slab-v11-latin-200.eot'); /* IE9 Compat Modes */
//   src: local(''),
//        url('/public/fonts/roboto-slab-v11-latin/roboto-slab-v11-latin-200.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
//        url('/public/fonts/roboto-slab-v11-latin/roboto-slab-v11-latin-200.woff2') format('woff2'), /* Super Modern Browsers */
//        url('/public/fonts/roboto-slab-v11-latin/roboto-slab-v11-latin-200.woff') format('woff'), /* Modern Browsers */
//        url('/public/fonts/roboto-slab-v11-latin/roboto-slab-v11-latin-200.ttf') format('truetype'), /* Safari, Android, iOS */
//        url('/public/fonts/roboto-slab-v11-latin/roboto-slab-v11-latin-200.svg#RobotoSlab') format('svg'); /* Legacy iOS */
// }
// /* roboto-slab-500 - latin */
// @font-face {
//   font-family: 'Roboto Slab';
//   font-style: normal;
//   font-weight: 500;
//   src: url('/public/fonts/roboto-slab-v11-latin/roboto-slab-v11-latin-500.eot'); /* IE9 Compat Modes */
//   src: local(''),
//        url('/public/fonts/roboto-slab-v11-latin/roboto-slab-v11-latin-500.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
//        url('/public/fonts/roboto-slab-v11-latin/roboto-slab-v11-latin-500.woff2') format('woff2'), /* Super Modern Browsers */
//        url('/public/fonts/roboto-slab-v11-latin/roboto-slab-v11-latin-500.woff') format('woff'), /* Modern Browsers */
//        url('/public/fonts/roboto-slab-v11-latin/roboto-slab-v11-latin-500.ttf') format('truetype'), /* Safari, Android, iOS */
//        url('/public/fonts/roboto-slab-v11-latin/roboto-slab-v11-latin-500.svg#RobotoSlab') format('svg'); /* Legacy iOS */
// }
//  */ */
//   html {
//     box-sizing: border-box;
//     font-size: 11px;
//   }
//   *, *:before, *:after {
//     box-sizing: inherit;
//   }
//   body
// {
//     padding:0;
//     margin: 0;
//     font-size: 2rem;
//     font-family: "Roboto Slab";
//     font-weight: 500;
//     font-style: normal;
//   button {  font-family: 'Roboto Slab'; }
// }
// h1, h2, h3, h4, h5, h6 {
//     font-family: "Roboto Slab";
//     font-size:2rem;
//     font-weight: 500;
//     font-style: bold;
// }
// a
// {
//     font-family: "Roboto Slab";
//     font-weight: 400;
//     font-size:1.5rem;
//     font-style: italic;
//     text-decoration: none;
//     color: ${(props) => props.theme.black};
//     :hover {
//   text-decoration: underline;
// }
// }
// `;

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
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["MuiThemeProvider"], {
        theme: MuiTheme,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 314
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Containers, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 315
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Meta__WEBPACK_IMPORTED_MODULE_3__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 316
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Headers, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 317
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Header__WEBPACK_IMPORTED_MODULE_1__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 318
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Mains, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 320
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Inner, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 321
        },
        __self: this
      }, this.props.children)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Footers, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 323
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Footer__WEBPACK_IMPORTED_MODULE_2__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 324
        },
        __self: this
      }))));
    }
  }]);

  return Page;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Page);

/***/ })

})
//# sourceMappingURL=_app.js.f504f0591106af4c007d.hot-update.js.map