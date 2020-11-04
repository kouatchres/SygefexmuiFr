module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./config.js":
/*!*******************!*\
  !*** ./config.js ***!
  \*******************/
/*! exports provided: endpoint */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "endpoint", function() { return endpoint; });
// This is client side config only - don't put anything in here that shouldn't be public!
var endpoint = "http://localhost:50000"; // export const perPage = 6;
// export  {perPage};

/***/ }),

/***/ "./lib/withData.jsx":
/*!**************************!*\
  !*** ./lib/withData.jsx ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_with_apollo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-with-apollo */ "next-with-apollo");
/* harmony import */ var next_with_apollo__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_with_apollo__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! apollo-boost */ "apollo-boost");
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(apollo_boost__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config */ "./config.js");




function createClient(_ref) {
  var headers = _ref.headers;
  return new apollo_boost__WEBPACK_IMPORTED_MODULE_1___default.a({
    uri:  true ? _config__WEBPACK_IMPORTED_MODULE_2__["endpoint"] : undefined,
    request: function request(operation) {
      operation.setContext({
        fetchOptions: {
          credentials: 'include'
        },
        headers: headers
      });
    },
    // local data from apollo client
    clientState: {
      resolvers: {}
    }
  });
}

/* harmony default export */ __webpack_exports__["default"] = (next_with_apollo__WEBPACK_IMPORTED_MODULE_0___default()(createClient));

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ "@material-ui/core/CssBaseline");
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _src_components_Page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/components/Page */ "./src/components/Page.jsx");
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./theme */ "./pages/theme.js");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @apollo/react-hooks */ "@apollo/react-hooks");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _lib_withData__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../lib/withData */ "./lib/withData.jsx");
var _jsxFileName = "E:\\Sygefex-recent\\sygefex-frontend\\pages\\_app.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }












var MyApp = function MyApp(props) {
  var Component = props.Component,
      pageProps = props.pageProps,
      apollo = props.apollo;
  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(function () {
    // Remove the server-side injected CSS.
    var jssStyles = document.querySelector("#jss-server-side");

    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, "My page"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "viewport",
    content: "minimum-scale=1, initial-scale=1, width=device-width",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["ThemeProvider"], {
    theme: _theme__WEBPACK_IMPORTED_MODULE_6__["default"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_7__["ApolloProvider"], {
    client: apollo,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_8__["ApolloProvider"], {
    client: apollo,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_components_Page__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, _extends({}, pageProps, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  })))))));
}; // MyApp.propTypes = {
//   Component: PropTypes.elementType.isRequired,
//   pageProps: PropTypes.object.isRequired,
// };


/* harmony default export */ __webpack_exports__["default"] = (Object(_lib_withData__WEBPACK_IMPORTED_MODULE_9__["default"])(MyApp));

/***/ }),

/***/ "./pages/theme.js":
/*!************************!*\
  !*** ./pages/theme.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/colors */ "@material-ui/core/colors");
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1__);

 // Create a theme instance.

var theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["createMuiTheme"])({
  palette: {
    primary: {
      main: "#556cd6"
    },
    secondary: {
      main: "#19857b"
    },
    error: {
      main: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1__["red"].A400
    },
    background: {
      default: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1__["orange"]
    }
  }
});
/* harmony default export */ __webpack_exports__["default"] = (theme);

/***/ }),

/***/ "./src/components/Footer.jsx":
/*!***********************************!*\
  !*** ./src/components/Footer.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "E:\\Sygefex-recent\\sygefex-frontend\\src\\components\\Footer.jsx";


var FooterItems = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.ul.withConfig({
  displayName: "Footer__FooterItems",
  componentId: "sc-1xu6ued-0"
})(["margin:0 auto;display:flex;align-content:center;padding-bottom:0.5rem;"]);
var FooterItem = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.li.withConfig({
  displayName: "Footer__FooterItem",
  componentId: "sc-1xu6ued-1"
})(["list-style:none;display:flex;padding:0 0.5rem;font-size:1.5rem;"]);
var FooterContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
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

/***/ "./src/components/HeaderMUI.jsx":
/*!**************************************!*\
  !*** ./src/components/HeaderMUI.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/AppBar */ "@material-ui/core/AppBar");
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Toolbar */ "@material-ui/core/Toolbar");
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/IconButton */ "@material-ui/core/IconButton");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Badge__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Badge */ "@material-ui/core/Badge");
/* harmony import */ var _material_ui_core_Badge__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Badge__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "@material-ui/core/MenuItem");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Menu */ "@material-ui/core/Menu");
/* harmony import */ var _material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/Menu */ "@material-ui/icons/Menu");
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/AccountCircle */ "@material-ui/icons/AccountCircle");
/* harmony import */ var _material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/icons/Mail */ "@material-ui/icons/Mail");
/* harmony import */ var _material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_icons_Notifications__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/icons/Notifications */ "@material-ui/icons/Notifications");
/* harmony import */ var _material_ui_icons_Notifications__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Notifications__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/icons/MoreVert */ "@material-ui/icons/MoreVert");
/* harmony import */ var _material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_14__);
var _jsxFileName = "E:\\Sygefex-recent\\sygefex-frontend\\src\\components\\HeaderMUI.jsx";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
















var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(function (theme) {
  return {
    grow: {
      flexGrow: 1
    },
    menuButton: {
      marginRight: theme.spacing(2)
    },
    title: _defineProperty({
      display: "none"
    }, theme.breakpoints.up("sm"), {
      display: "block"
    }),
    search: _defineProperty({
      position: "relative",
      borderRadius: theme.shape.borderRadius,
      backgroundColor: Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["fade"])(theme.palette.common.white, 0.15),
      "&:hover": {
        backgroundColor: Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["fade"])(theme.palette.common.white, 0.25)
      },
      marginRight: theme.spacing(2),
      marginLeft: 0,
      width: "100%"
    }, theme.breakpoints.up("sm"), {
      marginLeft: theme.spacing(3),
      width: "auto"
    }),
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: "100%",
      position: "absolute",
      pointerEvents: "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    },
    inputRoot: {
      color: "inherit"
    },
    inputInput: _defineProperty({
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: "calc(1em + ".concat(theme.spacing(4), "px)"),
      transition: theme.transitions.create("width"),
      width: "100%"
    }, theme.breakpoints.up("md"), {
      width: "20ch"
    }),
    sectionDesktop: _defineProperty({
      display: "none"
    }, theme.breakpoints.up("md"), {
      display: "flex"
    }),
    sectionMobile: _defineProperty({
      display: "flex"
    }, theme.breakpoints.up("md"), {
      display: "none"
    })
  };
});

var PrimarySearchAppBar = function PrimarySearchAppBar() {
  var classes = useStyles();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
      _useState2 = _slicedToArray(_useState, 2),
      anchorEl = _useState2[0],
      setAnchorEl = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
      _useState4 = _slicedToArray(_useState3, 2),
      mobileMoreAnchorEl = _useState4[0],
      setMobileMoreAnchorEl = _useState4[1];

  var isMenuOpen = Boolean(anchorEl);
  var isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  var handleProfileMenuOpen = function handleProfileMenuOpen(event) {
    setAnchorEl(event.currentTarget);
  };

  var handleMobileMenuClose = function handleMobileMenuClose() {
    setMobileMoreAnchorEl(null);
  };

  var handleMenuClose = function handleMenuClose() {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  var handleMobileMenuOpen = function handleMobileMenuOpen(event) {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  var menuId = "primary-search-account-menu";
  var renderMenu = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_8___default.a, {
    anchorEl: anchorEl,
    anchorOrigin: {
      vertical: "top",
      horizontal: "right"
    },
    id: menuId,
    keepMounted: true,
    transformOrigin: {
      vertical: "top",
      horizontal: "right"
    },
    open: isMenuOpen,
    onClose: handleMenuClose,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_7___default.a, {
    onClick: handleMenuClose,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  }, "Profile"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_7___default.a, {
    onClick: handleMenuClose,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: this
  }, "My account"));
  var mobileMenuId = "primary-search-account-menu-mobile";
  var renderMobileMenu = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_8___default.a, {
    anchorEl: mobileMoreAnchorEl,
    anchorOrigin: {
      vertical: "top",
      horizontal: "right"
    },
    id: mobileMenuId,
    keepMounted: true,
    transformOrigin: {
      vertical: "top",
      horizontal: "right"
    },
    open: isMobileMenuOpen,
    onClose: handleMobileMenuClose,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_7___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_4___default.a, {
    "aria-label": "show 4 new mails",
    color: "inherit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Badge__WEBPACK_IMPORTED_MODULE_6___default.a, {
    badgeContent: 4,
    color: "secondary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_11___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    },
    __self: this
  }, "Messages")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_7___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_4___default.a, {
    "aria-label": "show 11 new notifications",
    color: "inherit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Badge__WEBPACK_IMPORTED_MODULE_6___default.a, {
    badgeContent: 11,
    color: "secondary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Notifications__WEBPACK_IMPORTED_MODULE_13___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: this
  }, "Notifications")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_7___default.a, {
    onClick: handleProfileMenuOpen,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_4___default.a, {
    "aria-label": "account of current user",
    "aria-controls": "primary-search-account-menu",
    "aria-haspopup": "true",
    color: "inherit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_10___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158
    },
    __self: this
  }, "Profile")));
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.grow,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_2___default.a, {
    position: "static",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_4___default.a, {
    edge: "start",
    className: classes.menuButton,
    color: "inherit",
    "aria-label": "open drawer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_9___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {
    className: classes.title,
    variant: "h6",
    noWrap: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175
    },
    __self: this
  }, "SYGEFEX-OBC"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.grow,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_12___default.a, {
    container: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_12___default.a, {
    item: true,
    sm: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181
    },
    __self: this
  }, "Menu Here")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.sectionDesktop,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_4___default.a, {
    edge: "end",
    "aria-label": "account of current user",
    "aria-controls": menuId,
    "aria-haspopup": "true",
    onClick: handleProfileMenuOpen,
    color: "inherit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_10___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.sectionMobile,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_4___default.a, {
    "aria-label": "show more",
    "aria-controls": mobileMenuId,
    "aria-haspopup": "true",
    onClick: handleMobileMenuOpen,
    color: "inherit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_14___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205
    },
    __self: this
  }))))), renderMobileMenu, renderMenu);
};

/* harmony default export */ __webpack_exports__["default"] = (PrimarySearchAppBar);

/***/ }),

/***/ "./src/components/Meta.jsx":
/*!*********************************!*\
  !*** ./src/components/Meta.jsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "E:\\Sygefex-recent\\sygefex-frontend\\src\\components\\Meta.jsx";



var Meta = function Meta() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    charSet: "UTF-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1.0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    httpEquiv: "X-UA-Compatible",
    content: "ie=edge",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "stylesheet",
    href: "/static/favicon.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "stylesheet",
    href: "/static/nprogress.css",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, "SYGEFEX"));
};

/* harmony default export */ __webpack_exports__["default"] = (Meta);

/***/ }),

/***/ "./src/components/Page.jsx":
/*!*********************************!*\
  !*** ./src/components/Page.jsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _HeaderMUI__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./HeaderMUI */ "./src/components/HeaderMUI.jsx");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Footer */ "./src/components/Footer.jsx");
/* harmony import */ var _Meta__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Meta */ "./src/components/Meta.jsx");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/colors */ "@material-ui/core/colors");
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_colors__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "E:\\Sygefex-recent\\sygefex-frontend\\src\\components\\Page.jsx";






var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["makeStyles"])({
  root: {
    display: "flex",
    flexDirection: "column" // fontSize: 100,

  },
  allControls: {
    display: "flex",
    flexDirection: "column"
  },
  wholeApp: {
    display: "grid",
    gridTemplateAreas: "headers mains footers",
    gridTemplateColumns: "1fr",
    gridTemplateRows: "3rem 1fr 3rem",
    height: "100vh",
    background: "white" //   padding: 1rem 0;

  },
  headers: {
    display: "grid",
    gridTemplateColumns: "1fr 4fr",
    alignItems: "right",
    gridArea: "Headers",
    position: "fixed",
    height: "1rem",
    zIndex: "10",
    borderBottom: "0.2rem solid  0.1rem 0.05rem 0.5rem rgba(0, 0, 0.8, 0.5)"
  },
  mains: {
    gridArea: "mains",
    paddingLeft: "auto",
    paddingTop: "1rem",
    paddingRight: "auto"
  },
  footers: {
    gridArea: "Footers",
    display: "flex",
    justifyContent: "center",
    backgroundColor: "black",
    alignItems: "center",
    fontSize: "1.9rem",
    color: "white",
    paddingLeft: "2rem",
    paddingRight: "2rem"
  },
  inner: {
    position: "relative",
    margin: "0 auto",
    padding: "2rem"
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
// const container = styled.div`
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

var Page = function Page(props) {
  var classes = useStyles();
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["MuiThemeProvider"], {
    theme: MuiTheme,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 354
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.wholeApp,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 355
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Meta__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 356
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.headers,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 357
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_HeaderMUI__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 358
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.mains,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 360
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.inner,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 361
    },
    __self: this
  }, props.children)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.footers,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 363
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Footer__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 364
    },
    __self: this
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Page);

/***/ }),

/***/ 0:
/*!*****************************!*\
  !*** multi ./pages/_app.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "@apollo/react-hooks":
/*!**************************************!*\
  !*** external "@apollo/react-hooks" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@apollo/react-hooks");

/***/ }),

/***/ "@material-ui/core/AppBar":
/*!*******************************************!*\
  !*** external "@material-ui/core/AppBar" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/AppBar");

/***/ }),

/***/ "@material-ui/core/Badge":
/*!******************************************!*\
  !*** external "@material-ui/core/Badge" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Badge");

/***/ }),

/***/ "@material-ui/core/CssBaseline":
/*!************************************************!*\
  !*** external "@material-ui/core/CssBaseline" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CssBaseline");

/***/ }),

/***/ "@material-ui/core/Grid":
/*!*****************************************!*\
  !*** external "@material-ui/core/Grid" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Grid");

/***/ }),

/***/ "@material-ui/core/IconButton":
/*!***********************************************!*\
  !*** external "@material-ui/core/IconButton" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/IconButton");

/***/ }),

/***/ "@material-ui/core/Menu":
/*!*****************************************!*\
  !*** external "@material-ui/core/Menu" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Menu");

/***/ }),

/***/ "@material-ui/core/MenuItem":
/*!*********************************************!*\
  !*** external "@material-ui/core/MenuItem" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/MenuItem");

/***/ }),

/***/ "@material-ui/core/Toolbar":
/*!********************************************!*\
  !*** external "@material-ui/core/Toolbar" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Toolbar");

/***/ }),

/***/ "@material-ui/core/Typography":
/*!***********************************************!*\
  !*** external "@material-ui/core/Typography" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Typography");

/***/ }),

/***/ "@material-ui/core/colors":
/*!*******************************************!*\
  !*** external "@material-ui/core/colors" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/colors");

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "@material-ui/icons/AccountCircle":
/*!***************************************************!*\
  !*** external "@material-ui/icons/AccountCircle" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/AccountCircle");

/***/ }),

/***/ "@material-ui/icons/Mail":
/*!******************************************!*\
  !*** external "@material-ui/icons/Mail" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Mail");

/***/ }),

/***/ "@material-ui/icons/Menu":
/*!******************************************!*\
  !*** external "@material-ui/icons/Menu" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Menu");

/***/ }),

/***/ "@material-ui/icons/MoreVert":
/*!**********************************************!*\
  !*** external "@material-ui/icons/MoreVert" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/MoreVert");

/***/ }),

/***/ "@material-ui/icons/Notifications":
/*!***************************************************!*\
  !*** external "@material-ui/icons/Notifications" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Notifications");

/***/ }),

/***/ "apollo-boost":
/*!*******************************!*\
  !*** external "apollo-boost" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("apollo-boost");

/***/ }),

/***/ "next-with-apollo":
/*!***********************************!*\
  !*** external "next-with-apollo" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-with-apollo");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-apollo":
/*!*******************************!*\
  !*** external "react-apollo" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-apollo");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=_app.js.map