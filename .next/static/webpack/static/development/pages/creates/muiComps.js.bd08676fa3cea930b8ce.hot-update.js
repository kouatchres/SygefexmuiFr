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
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! yup */ "./node_modules/yup/lib/index.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var material_ui_formik_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! material-ui-formik-components */ "./node_modules/material-ui-formik-components/index.es.js");
/* harmony import */ var material_ui_formik_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(material_ui_formik_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _data_countries_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./data/countries.json */ "./src/components/attendance/data/countries.json");
var _data_countries_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./data/countries.json */ "./src/components/attendance/data/countries.json", 1);
/* harmony import */ var _data_skills_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./data/skills.json */ "./src/components/attendance/data/skills.json");
var _data_skills_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./data/skills.json */ "./src/components/attendance/data/skills.json", 1);
var _jsxFileName = "E:\\sygefexMui\\sygefexMui-frontend\\src\\components\\attendance\\AllMuiFields.jsx";






var validationSchema = Object(yup__WEBPACK_IMPORTED_MODULE_2__["object"])().shape({
  username: Object(yup__WEBPACK_IMPORTED_MODULE_2__["string"])().required("Username is required"),
  gender: Object(yup__WEBPACK_IMPORTED_MODULE_2__["string"])().required("Gender selection is required"),
  country: Object(yup__WEBPACK_IMPORTED_MODULE_2__["string"])().nullable().required("Country is required"),
  skills: Object(yup__WEBPACK_IMPORTED_MODULE_2__["array"])().required("At least one skill is required"),
  birthdate: Object(yup__WEBPACK_IMPORTED_MODULE_2__["date"])().nullable().required("Birth date is required"),
  interviewTime: Object(yup__WEBPACK_IMPORTED_MODULE_2__["mixed"])().required("Interview Time is required"),
  education: Object(yup__WEBPACK_IMPORTED_MODULE_2__["string"])().required("Education is required")
});
var initialValues = {
  username: "",
  gender: "Female",
  country: null,
  skills: [{
    label: "ASP.NET",
    value: "ASP.NET"
  }],
  birthdate: null,
  interviewTime: null,
  education: ""
};

var SimpleFormExample = function SimpleFormExample() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, "Simple Form Example"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_1__["Formik"], {
    initialValues: initialValues,
    validationSchema: validationSchema,
    validateOnBlur: false,
    validateOnChange: true,
    onSubmit: function onSubmit(values) {
      // eslint-disable-next-line no-alert
      window.alert("\n          Username: ".concat(values.username, "\n          Gender: ").concat(values.gender, "\n          Country: ").concat(values.country.label, "\n          Skills: ").concat(values.skills.map(function (v) {
        return v.label;
      }).join(", "), "\n          Birth date: ").concat(values.birthdate, "\n          Interview Time: ").concat(values.interviewTime, "\n        "));
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, function (formik) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_1__["Form"], {
      noValidate: true,
      autoComplete: "off",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_1__["Field"], {
      required: true,
      name: "username",
      label: "Username",
      component: material_ui_formik_components__WEBPACK_IMPORTED_MODULE_3__["TextField"],
      size: "small",
      variant: "outlined",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_1__["Field"], {
      required: true,
      name: "gender",
      label: "Gender",
      options: [{
        value: "",
        label: "-- No selection --"
      }, {
        value: "Male",
        label: "Male"
      }, {
        value: "Female",
        label: "Female"
      }, {
        value: "Other",
        label: "Other"
      }],
      component: material_ui_formik_components__WEBPACK_IMPORTED_MODULE_3__["Select"],
      size: "small",
      variant: "outlined",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_1__["Field"], {
      name: "country",
      options: _data_countries_json__WEBPACK_IMPORTED_MODULE_4__,
      component: material_ui_formik_components__WEBPACK_IMPORTED_MODULE_3__["Select"],
      size: "small",
      textFieldProps: {
        label: "Country",
        required: true,
        variant: "outlined"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_1__["Field"], {
      name: "skills",
      options: _data_skills_json__WEBPACK_IMPORTED_MODULE_5__,
      component: material_ui_formik_components__WEBPACK_IMPORTED_MODULE_3__["Select"],
      size: "small",
      textFieldProps: {
        label: "Skills",
        required: true,
        variant: "outlined"
      },
      multiple: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      type: "submit",
      disabled: !formik.dirty,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101
      },
      __self: this
    }, "Submit"));
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (SimpleFormExample); //   <Field
//     required
//     name="birthdate"
//     component={KeyboardDatePicker}
//     label="Birth date"
//     format="dd/MM/yyyy"
//     size="small"
//     inputVariant="outlined"
//   />
//   <Field
//     required
//     name="interviewTime"
//     component={KeyboardTimePicker}
//     label="Interview Time"
//     size="small"
//     inputVariant="outlined"
//     mask="__:__"
//     ampm={false}
//   />
//   <Field
//     required
//     name="education"
//     component={RadioGroup}
//     label="Education"
//     options={[
//       { value: "", label: "-- Please Select --" },
//       { value: "Elementary", label: "Elementary" },
//       { value: "High School", label: "High School" },
//       { value: "Bachelor", label: "Bachelor" },
//       { value: "Master", label: "Master" },
//       { value: "Ph.D.", label: "Ph.D." },
//     ]}
//     groupProps={{ row: true }}
//   />

/***/ })

})
//# sourceMappingURL=muiComps.js.bd08676fa3cea930b8ce.hot-update.js.map