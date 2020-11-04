webpackHotUpdate("static\\development\\pages\\creates\\newRegion.js",{

/***/ "./src/components/region/NewRegionMui.jsx":
/*!************************************************!*\
  !*** ./src/components/region/NewRegionMui.jsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ErrorMessage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ErrorMessage.js */ "./src/components/ErrorMessage.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var formik_material_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! formik-material-ui */ "./node_modules/formik-material-ui/dist/formik-material-ui.es6.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! yup */ "./node_modules/yup/lib/index.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @apollo/react-hooks */ "./node_modules/@apollo/react-hooks/lib/react-hooks.esm.js");
/* harmony import */ var _queries_Mutations_Functions_Mutations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../queries&Mutations&Functions/Mutations */ "./src/components/queries&Mutations&Functions/Mutations.jsx");
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/colors */ "./node_modules/@material-ui/core/esm/colors/index.js");

var _jsxFileName = "E:\\Sygefex-recent\\sygefex-frontend\\src\\components\\region\\NewRegionMui.jsx";

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? Object(arguments[i]) : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }











var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["makeStyles"])({
  root: {
    display: "flex",
    flexDirection: "column" // fontSize: 100,

  },
  allControls: {
    display: "flex",
    flexDirection: "column"
  },
  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  container: {
    maxWidth: "20rem"
  }
});
var validationSchema = yup__WEBPACK_IMPORTED_MODULE_7__["object"]().shape({
  regName: yup__WEBPACK_IMPORTED_MODULE_7__["string"]().required("Nom Région Obligatoire"),
  regCode: yup__WEBPACK_IMPORTED_MODULE_7__["string"]().required("Code Région Obligatoire")
});

var NewRegionMui = function NewRegionMui() {
  var MuiTheme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["createMuiTheme"])({
    typography: {
      h4: {
        fontSize: 25
      },
      fontSize: 20
    },
    palette: {
      primary: {
        main: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_10__["orange"][500] // light: "#757ce8",
        // main2: "#3f50b5",
        // main: "#0780b7",
        // dark: "#002884",
        // contrastText: "#fff",

      },
      secondary: {
        main: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_10__["orange"][500] // light: "#ff7961",
        // dark: "#f44336",
        // main: "#ba000d",
        // contrastText: "#000",

      }
    }
  });
  var classes = useStyles();
  var initialValues = {
    regName: "",
    regCode: ""
  };

  var _useMutation = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_8__["useMutation"])(_queries_Mutations_Functions_Mutations__WEBPACK_IMPORTED_MODULE_9__["createNewRegionMutation"]),
      _useMutation2 = _slicedToArray(_useMutation, 2),
      createRegion = _useMutation2[0],
      _useMutation2$ = _useMutation2[1],
      loading = _useMutation2$.loading,
      error = _useMutation2$.error;

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_3__["Formik"], {
    method: "POST",
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(values, _ref) {
        var setSubmitting, resetForm, res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                setSubmitting = _ref.setSubmitting, resetForm = _ref.resetForm;
                _context.next = 3;
                return createRegion({
                  variables: _objectSpread({}, values)
                });

              case 3:
                res = _context.sent;
                setTimeout(function () {
                  console.log(JSON.stringify(values, null, 2));
                  console.log(res);
                  resetForm(true);
                  setSubmitting(false);
                }, 200);

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x, _x2) {
        return _ref2.apply(this, arguments);
      };
    }(),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, function (_ref3) {
    var submitForm = _ref3.submitForm,
        isSubmitting = _ref3.isSubmitting;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93
      },
      __self: this
    }, "Nouvelle R\xE9gion"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ErrorMessage_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
      error: error,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("container", {
      maxWidth: "sm",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_3__["Form"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("container", {
      className: classes.container,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("paper", {
      className: classes.paper,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Box"], {
      margin: 0.5,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_3__["Field"], {
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_6__["TextField"],
      name: "regName",
      type: "text",
      label: "Nom la R\xE9gion",
      disabled: isSubmitting,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Box"], {
      margin: 0.5,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_3__["Field"], {
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_6__["TextField"],
      name: "regCode",
      type: "text",
      label: "Code la R\xE9gion",
      disabled: isSubmitting,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Box"], {
      margin: 0.5,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Button"], {
      variant: "contained",
      color: "primary",
      disabled: isSubmitting,
      onClick: submitForm,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119
      },
      __self: this
    }, "Valid", isSubmitting ? "ation en cours" : "er")))))));
  });
};

/* harmony default export */ __webpack_exports__["default"] = (NewRegionMui);

/***/ })

})
//# sourceMappingURL=newRegion.js.6130bb054407fd4a2582.hot-update.js.map