webpackHotUpdate("static\\development\\pages\\creates\\muiComps.js",{

/***/ "./src/components/attendance/AllMuiFields.jsx":
/*!****************************************************!*\
  !*** ./src/components/attendance/AllMuiFields.jsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var material_ui_formik_components_TextField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! material-ui-formik-components/TextField */ "./node_modules/material-ui-formik-components/TextField/index.js");
/* harmony import */ var material_ui_formik_components_TextField__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(material_ui_formik_components_TextField__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var material_ui_formik_components_Select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! material-ui-formik-components/Select */ "./node_modules/material-ui-formik-components/Select/index.js");
/* harmony import */ var material_ui_formik_components_Select__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(material_ui_formik_components_Select__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var material_ui_formik_components_Autocomplete__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! material-ui-formik-components/Autocomplete */ "./node_modules/material-ui-formik-components/Autocomplete/index.js");
/* harmony import */ var material_ui_formik_components_Autocomplete__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(material_ui_formik_components_Autocomplete__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _data_countries_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./data/countries.json */ "./src/components/attendance/data/countries.json");
var _data_countries_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./data/countries.json */ "./src/components/attendance/data/countries.json", 1);
var _jsxFileName = "E:\\sygefexMui\\sygefexMui-frontend\\src\\components\\attendance\\AllMuiFields.jsx";

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








var RegistrationForm = /*#__PURE__*/function (_React$Component) {
  _inherits(RegistrationForm, _React$Component);

  var _super = _createSuper(RegistrationForm);

  function RegistrationForm() {
    _classCallCheck(this, RegistrationForm);

    return _super.apply(this, arguments);
  }

  _createClass(RegistrationForm, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: this
      }, "Register"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_1__["Formik"], {
        initialValues: {
          username: "",
          gender: "Female",
          country: null
        },
        onSubmit: function onSubmit(values) {
          alert("Username: ".concat(values.username, "\nGender: ").concat(values.gender, "\nCountry: ").concat(values.country.label));
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_1__["Form"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_1__["Field"], {
        name: "username",
        label: "Username",
        component: material_ui_formik_components_TextField__WEBPACK_IMPORTED_MODULE_2__["TextField"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_1__["Field"], {
        name: "gender",
        label: "Gender",
        options: [{
          value: "Male",
          label: "Male"
        }, {
          value: "Female",
          label: "Female"
        }, {
          value: "Other",
          label: "Other"
        }],
        component: material_ui_formik_components_Select__WEBPACK_IMPORTED_MODULE_3__["Select"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_1__["Field"], {
        name: "gender",
        label: "Gender",
        options: [{
          value: "1",
          label: "Orange"
        }, {
          value: "2",
          label: "Apple"
        }, {
          value: "3",
          label: "Other"
        }],
        component: material_ui_formik_components_Select__WEBPACK_IMPORTED_MODULE_3__["Select"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_1__["Field"], {
        name: "country",
        options: _data_countries_json__WEBPACK_IMPORTED_MODULE_5__,
        component: material_ui_formik_components_Autocomplete__WEBPACK_IMPORTED_MODULE_4__["Autocomplete"],
        textFieldProps: {
          label: "Countries of the world"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        type: "submit",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, "Submit"))));
    }
  }]);

  return RegistrationForm;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (RegistrationForm);

/***/ })

})
//# sourceMappingURL=muiComps.js.cfd7521df3704f7f4473.hot-update.js.map