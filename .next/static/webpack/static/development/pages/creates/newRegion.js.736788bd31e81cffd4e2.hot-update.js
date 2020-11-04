webpackHotUpdate("static\\development\\pages\\creates\\newRegion.js",{

/***/ "./src/components/user/Login.jsx":
/*!***************************************!*\
  !*** ./src/components/user/Login.jsx ***!
  \***************************************/
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
/* harmony import */ var formik_material_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! formik-material-ui */ "./node_modules/formik-material-ui/dist/formik-material-ui.es6.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/colors */ "./node_modules/@material-ui/core/esm/colors/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! yup */ "./node_modules/yup/lib/index.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @apollo/react-hooks */ "./node_modules/@apollo/react-hooks/lib/react-hooks.esm.js");
/* harmony import */ var _queries_Mutations_Functions_Mutations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../queries&Mutations&Functions/Mutations */ "./src/components/queries&Mutations&Functions/Mutations.jsx");

var _jsxFileName = "E:\\Sygefex-recent\\sygefex-frontend\\src\\components\\user\\Login.jsx";

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












var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__["makeStyles"])({
  root: {
    display: "flex",
    flexDirection: "column" // fontSize: 100,

  },
  allControls: {
    display: "flex",
    flexDirection: "column"
  },
  pap: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  contain: {
    maxWidth: "20rem"
  }
});
var validationSchema = yup__WEBPACK_IMPORTED_MODULE_9__["object"]().shape({
  email: yup__WEBPACK_IMPORTED_MODULE_9__["string"]().min(3, "Email 3 characters au moins").required("Email Obligatoire").email("Email invalide"),
  password: yup__WEBPACK_IMPORTED_MODULE_9__["string"]().required("Mot de passe Obligatoire").min(3, "Mot de passe 3 characters au moins")
});

var Login = function Login() {
  var classes = useStyles();
  var initialValues = {
    email: "",
    password: ""
  };

  var _useMutation = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_10__["useMutation"])(_queries_Mutations_Functions_Mutations__WEBPACK_IMPORTED_MODULE_11__["loginUserMutation"], {
    refetchQueries: ["currentUserQuery"]
  }),
      _useMutation2 = _slicedToArray(_useMutation, 2),
      login = _useMutation2[0],
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
                return login({
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
      lineNumber: 57
    },
    __self: this
  }, function (_ref3) {
    var submitForm = _ref3.submitForm,
        isSubmitting = _ref3.isSubmitting;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76
      },
      __self: this
    }, "Acceder a son compte"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ErrorMessage_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
      error: error,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_3__["Form"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
      container: true,
      direction: "column",
      alignItems: "center",
      justifyItems: "center",
      margin: 0.5,
      Style: {
        minHeight: "100vh"
      },
      spacing: 5,
      background: "orange",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_3__["Field"], {
      name: "email",
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_4__["TextField"],
      type: "email",
      label: "Email",
      disabled: isSubmitting || loading,
      style: {
        marginBottom: "1rem"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_3__["Field"], {
      name: "password",
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_4__["TextField"],
      type: "password",
      label: "Mot de passe",
      disabled: isSubmitting || loading,
      style: {
        marginBottom: "1rem"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h6", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109
      },
      __self: this
    }, "Pas encore de compte?"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
      href: "/creates/signup",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111
      },
      __self: this
    }, "Cr\xE9ez votre compte"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Box"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Button"], {
      variant: "contained",
      color: "secondary",
      disabled: isSubmitting,
      onClick: submitForm,
      style: {
        marginBottom: "1rem"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115
      },
      __self: this
    }, "Valid", isSubmitting ? "ation en cours" : "er")))));
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Login);

/***/ })

})
//# sourceMappingURL=newRegion.js.736788bd31e81cffd4e2.hot-update.js.map