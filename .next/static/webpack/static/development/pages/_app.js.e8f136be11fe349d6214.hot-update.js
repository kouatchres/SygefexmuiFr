webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./src/components/HeaderMUI.jsx":
/*!**************************************!*\
  !*** ./src/components/HeaderMUI.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/AppBar */ "./node_modules/@material-ui/core/esm/AppBar/index.js");
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Toolbar */ "./node_modules/@material-ui/core/esm/Toolbar/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_Badge__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Badge */ "./node_modules/@material-ui/core/esm/Badge/index.js");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "./node_modules/@material-ui/core/esm/MenuItem/index.js");
/* harmony import */ var _material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Menu */ "./node_modules/@material-ui/core/esm/Menu/index.js");
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/Menu */ "./node_modules/@material-ui/icons/Menu.js");
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/AccountCircle */ "./node_modules/@material-ui/icons/AccountCircle.js");
/* harmony import */ var _material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/icons/Mail */ "./node_modules/@material-ui/icons/Mail.js");
/* harmony import */ var _material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_icons_Notifications__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/icons/Notifications */ "./node_modules/@material-ui/icons/Notifications.js");
/* harmony import */ var _material_ui_icons_Notifications__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Notifications__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/icons/MoreVert */ "./node_modules/@material-ui/icons/MoreVert.js");
/* harmony import */ var _material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_13__);
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
  var renderMenu = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_8__["default"], {
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
      lineNumber: 107
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
    onClick: handleMenuClose,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  }, "Profile"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
    onClick: handleMenuClose,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  }, "My account"));
  var mobileMenuId = "primary-search-account-menu-mobile";
  var renderMobileMenu = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_8__["default"], {
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
      lineNumber: 123
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_4__["default"], {
    "aria-label": "show 4 new mails",
    color: "inherit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Badge__WEBPACK_IMPORTED_MODULE_6__["default"], {
    badgeContent: 4,
    color: "secondary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_11___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    __self: this
  }, "Messages")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_4__["default"], {
    "aria-label": "show 11 new notifications",
    color: "inherit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Badge__WEBPACK_IMPORTED_MODULE_6__["default"], {
    badgeContent: 11,
    color: "secondary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Notifications__WEBPACK_IMPORTED_MODULE_12___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: this
  }, "Notifications")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
    onClick: handleProfileMenuOpen,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_4__["default"], {
    "aria-label": "account of current user",
    "aria-controls": "primary-search-account-menu",
    "aria-haspopup": "true",
    color: "inherit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_10___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157
    },
    __self: this
  }, "Profile")));
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.grow,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_2__["default"], {
    position: "static",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_4__["default"], {
    edge: "start",
    className: classes.menuButton,
    color: "inherit",
    "aria-label": "open drawer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_9___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: classes.title,
    variant: "h6",
    noWrap: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174
    },
    __self: this
  }, "SYGEFEX-OBC"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.grow,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Grid, {
    container: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Grid, {
    item: true,
    sm: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180
    },
    __self: this
  }, "Menu Here")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.sectionDesktop,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_4__["default"], {
    edge: "end",
    "aria-label": "account of current user",
    "aria-controls": menuId,
    "aria-haspopup": "true",
    onClick: handleProfileMenuOpen,
    color: "inherit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_10___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.sectionMobile,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_4__["default"], {
    "aria-label": "show more",
    "aria-controls": mobileMenuId,
    "aria-haspopup": "true",
    onClick: handleMobileMenuOpen,
    color: "inherit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_13___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204
    },
    __self: this
  }))))), renderMobileMenu, renderMenu);
};

/* harmony default export */ __webpack_exports__["default"] = (PrimarySearchAppBar);

/***/ })

})
//# sourceMappingURL=_app.js.e8f136be11fe349d6214.hot-update.js.map