webpackHotUpdate("static\\development\\pages\\creates\\newRegion.js",{

/***/ "./src/components/utils/FormInputs.jsx":
/*!*********************************************!*\
  !*** ./src/components/utils/FormInputs.jsx ***!
  \*********************************************/
/*! exports provided: SygefexSelect, SygefexRadio, StyledLabel, StyledButton, ButtonStyled, SygexInput, StyledForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SygefexSelect", function() { return SygefexSelect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SygefexRadio", function() { return SygefexRadio; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledLabel", function() { return StyledLabel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledButton", function() { return StyledButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonStyled", function() { return ButtonStyled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SygexInput", function() { return SygexInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledForm", function() { return StyledForm; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-select */ "./node_modules/react-select/dist/react-select.browser.esm.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _jsxFileName = "E:\\Sygefex-recent\\sygefex-frontend\\src\\components\\utils\\FormInputs.jsx";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? Object(arguments[i]) : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var loading = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["keyframes"])(["from{background-position:0 0;}to{background-position:100% 100%;}"]);
var customStyle = {
  control: function control(provided) {
    return _objectSpread({}, provided, {
      fontFamily: "Roboto Slab",
      border: "0 solid black",
      borderBottom: "0.9px solid #0780b7",
      fontSize: "1.6rem",
      paddingTop: "1rem",
      outline: "none",
      backgroundColor: "white",
      color: "#000",
      borderRadius: "0",
      boxShadow: "none",
      alignItems: "center",
      "&:hover": {
        borderBottom: " 0.2rem solid #d4351c",
        borderRadius: "0"
      },
      // border style on hover
      "&:focus": {
        borderBottom: " 0.2rem solid #d4351c",
        borderRadius: "0"
      } // border style on hover

    });
  },
  option: function option(provided) {
    return _objectSpread({}, provided, {
      textAlign: "left",
      fontSize: "1.5rem"
    });
  }
};
var StyledInput = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].input.withConfig({
  displayName: "FormInputs__StyledInput",
  componentId: "ii1nqi-0"
})(["padding-top:1rem;margin-top:0.4rem;font-size:1.5rem;border-style:none;width:100%;outline:none;border-bottom:0.09rem solid black;z-index:10;font-family:\"Roboto Slab\";&:valid + label{top:-0.25rem;font-size:1.1rem;color:", ";}&:focus,&active{outline:none;border-bottom:0.2rem solid ", ";}&:focus + label{top:-0.25rem;font-size:1.1rem;color:#aaa;}"], function (props) {
  return props.theme.britishBlue;
}, function (props) {
  return props.theme.britishRed;
});
var InputGroup = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "FormInputs__InputGroup",
  componentId: "ii1nqi-1"
})(["position:relative;"]);
var AllRadios = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "FormInputs__AllRadios",
  componentId: "ii1nqi-2"
})(["position:relative;margin:0.5rem;label{border:0;width:2rem;height:2rem;}"]);
var StyledLabel = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].label.withConfig({
  displayName: "FormInputs__StyledLabel",
  componentId: "ii1nqi-3"
})(["font-size:1.5rem;border-style:none;position:absolute;left:1rem;top:1.5rem;color:", ";pointer-events:none;transition:all 1s ease-out;font-family:\"Roboto Slab\";&:focus{outline:none;}"], function (props) {
  return props.theme.greys[2];
});
var StyledSelect = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].select.withConfig({
  displayName: "FormInputs__StyledSelect",
  componentId: "ii1nqi-4"
})(["margin-top:1rem;font-size:1.2rem;border-style:none;border-bottom:0.09rem solid black;option{background:white;font-weight:400;display:flex;white-space:pre;min-height:20px;padding:0px 2px 1px;background:black;border-radius:0.5rem;}&:focus{outline:none;border-color:", ";}"], function (props) {
  return props.theme.britishRed;
});
var StyledErrorMessage = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "FormInputs__StyledErrorMessage",
  componentId: "ii1nqi-5"
})(["padding-top:0.2rem;font-size:1.2rem;color:", ";"], function (props) {
  return props.theme.britishRed;
});
var RadioStyled = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "FormInputs__RadioStyled",
  componentId: "ii1nqi-6"
})(["display:inline-block;input,label:hover{cursor:pointer;background:black;}input[type=\"radio\"]{margin-top:0.5rem;border:0;width:2rem;height:2rem;margin:0 0.7rem;background:black;}"]);
var StyledButton = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].button.withConfig({
  displayName: "FormInputs__StyledButton",
  componentId: "ii1nqi-7"
})(["color:black;border:0;border-radius:0.5rem;font-size:2.5rem;font-weight:300;line-height:1.5rem;cursor:pointer;"]);
var ButtonStyled = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "FormInputs__ButtonStyled",
  componentId: "ii1nqi-8"
})(["padding-bottom:0.5rem;padding-top:1rem;button{border-radius:0.6rem;font-size:1.5rem;font-weight:bold;box-shadow:", ";border:0.05rem solid black;color:black;background:", ";cursor:pointer;padding:0.8rem;outline:none;&:hover{color:black;background-color:", ";}}a{text-decoration:none;}"], function (props) {
  return props.theme.formBS;
}, function (props) {
  return props.theme.pureWhite;
}, function (props) {
  return props.theme.pureWhite;
});
var StyledForm = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "FormInputs__StyledForm",
  componentId: "ii1nqi-9"
})(["margin:0 3rem;padding:0.6rem;font-size:1.7rem;border-radius:0.9rem;border:0.001rem solid black;border-top:1rem solid black;border-bottom:1rem solid ", ";box-shadow:", ";min-width:20rem;&[disabled]{opacity:0.3;}&::before{height:0.3rem;content:\"\";display:block;background-image:linear-gradient( to right,#0780b7 0%,#e2b04a 20%,#0780b7 100% );}&[aria-busy=\"true\"]::before{background-size:50% auto;animation:", " 0.5s linear infinite;}"], function (props) {
  return props.theme.tableRed;
}, function (props) {
  return props.theme.formBS;
}, loading);

var SygexInput = function SygexInput(_ref) {
  var label = _ref.label,
      props = _objectWithoutProperties(_ref, ["label"]);

  var _useField = Object(formik__WEBPACK_IMPORTED_MODULE_2__["useField"])(props),
      _useField2 = _slicedToArray(_useField, 2),
      field = _useField2[0],
      meta = _useField2[1];

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(InputGroup, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledInput, _extends({
    className: "text-input"
  }, field, props, {
    required: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledLabel, {
    htmlFor: props.id || props.name,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228
    },
    __self: this
  }, label), meta.touched && meta.error ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledErrorMessage, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230
    },
    __self: this
  }, meta.error) : null);
};

var SygefexSelect = function SygefexSelect(_ref2) {
  var theme = _ref2.theme,
      props = _objectWithoutProperties(_ref2, ["theme"]);

  var customTheme = function customTheme(theme) {
    return _objectSpread({}, theme, {
      colors: _objectSpread({}, theme.colors, {
        primary25: "#0780b7",
        primary: "#d17f05"
      })
    });
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_select__WEBPACK_IMPORTED_MODULE_1__["default"], _extends({
    theme: customTheme,
    styles: customStyle
  }, props, {
    isSearchable: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 246
    },
    __self: this
  }));
};

var SygefexRadio = function SygefexRadio(_ref3) {
  var label = _ref3.label,
      options = _ref3.options,
      props = _objectWithoutProperties(_ref3, ["label", "options"]);

  var _useField3 = Object(formik__WEBPACK_IMPORTED_MODULE_2__["useField"])(props),
      _useField4 = _slicedToArray(_useField3, 2),
      field = _useField4[0],
      meta = _useField4[1];

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AllRadios, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 253
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 254
    },
    __self: this
  }, label), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], _extends({
    label: label
  }, field, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 255
    },
    __self: this
  }), function (_ref4) {
    var field = _ref4.field;
    return options.map(function (item) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(RadioStyled, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 258
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", _extends({}, field, {
        type: "radio",
        id: item.value,
        value: item.value,
        checked: field.value === item.value,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 259
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        htmlFor: props.id || item.value,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 266
        },
        __self: this
      }, item.key));
    });
  }), meta.touched && meta.error ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledErrorMessage, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 272
    },
    __self: this
  }, meta.error) : null);
};

 // <StyledLabel htmlFor={props.id || props.name}>{label}</StyledLabel>

/***/ })

})
//# sourceMappingURL=newRegion.js.78948c0ae615945f7cc0.hot-update.js.map