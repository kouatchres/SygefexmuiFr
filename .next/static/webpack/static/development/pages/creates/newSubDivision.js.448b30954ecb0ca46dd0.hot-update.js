webpackHotUpdate("static\\development\\pages\\creates\\newSubDivision.js",{

/***/ "./src/components/subDivision/NewSubDivision.jsx":
/*!*******************************************************!*\
  !*** ./src/components/subDivision/NewSubDivision.jsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ErrorMessage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ErrorMessage.js */ "./src/components/ErrorMessage.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! yup */ "./node_modules/yup/lib/index.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var material_ui_formik_components_TextField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! material-ui-formik-components/TextField */ "./node_modules/material-ui-formik-components/TextField/index.js");
/* harmony import */ var material_ui_formik_components_TextField__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(material_ui_formik_components_TextField__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var material_ui_formik_components_Select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! material-ui-formik-components/Select */ "./node_modules/material-ui-formik-components/Select/index.js");
/* harmony import */ var material_ui_formik_components_Select__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(material_ui_formik_components_Select__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var material_ui_formik_components_Autocomplete__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! material-ui-formik-components/Autocomplete */ "./node_modules/material-ui-formik-components/Autocomplete/index.js");
/* harmony import */ var material_ui_formik_components_Autocomplete__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(material_ui_formik_components_Autocomplete__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _utils_useForm__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/useForm */ "./src/components/utils/useForm.jsx");
/* harmony import */ var _muiComponents_controls_SygefexMuiInput__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../muiComponents/controls/SygefexMuiInput */ "./src/components/muiComponents/controls/SygefexMuiInput.jsx");
/* harmony import */ var _muiComponents_controls_SygefexMuiSelect__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../muiComponents/controls/SygefexMuiSelect */ "./src/components/muiComponents/controls/SygefexMuiSelect.jsx");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @apollo/react-hooks */ "./node_modules/@apollo/react-hooks/lib/react-hooks.esm.js");
/* harmony import */ var _queries_Mutations_Functions_Queries__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../queries&Mutations&Functions/Queries */ "./src/components/queries&Mutations&Functions/Queries.jsx");
/* harmony import */ var _queries_Mutations_Functions_Functions__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../queries&Mutations&Functions/Functions */ "./src/components/queries&Mutations&Functions/Functions.jsx");
/* harmony import */ var _queries_Mutations_Functions_Mutations__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../queries&Mutations&Functions/Mutations */ "./src/components/queries&Mutations&Functions/Mutations.jsx");

var _jsxFileName = "E:\\sygefexMui\\sygefexMui-frontend\\src\\components\\subDivision\\NewSubDivision.jsx";

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

















var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_9__["makeStyles"])({
  root: {
    display: "flex",
    flexDirection: "column" // fontSize: 100,

  },
  divStyled: {
    display: "grid",
    placeItems: "center",
    top: "2rem",
    height: "90vh"
  },
  pageStyled: {
    display: "grid",
    placeItems: "center",
    marginTop: "2rem",
    padding: "1rem",
    minWidth: "30vw"
  },
  listStyled: {
    display: "grid",
    placeItems: "center",
    listStyleType: "none",
    margin: 0,
    padding: 0,
    paddingTop: "0.1rem"
  },
  titleStyled: {
    display: "grid",
    placeItems: "center"
  },
  allControls: {
    display: "grid",
    placeItems: "center",
    paddingTop: "0.2rem",
    border: "0.05rem solid #1254ac",
    // width: "20vw",
    borderRadius: "0.5rem" // marginTop: "2rem",

  },
  centerAll: {
    display: "grid",
    placeItems: "center",
    minWidth: "30vw"
  }
});
var validationSchema = yup__WEBPACK_IMPORTED_MODULE_3__["object"]().shape({
  region: yup__WEBPACK_IMPORTED_MODULE_3__["object"]().required("Choissisez une région"),
  division: yup__WEBPACK_IMPORTED_MODULE_3__["string"]().required("Choissisez un département"),
  subDivName: yup__WEBPACK_IMPORTED_MODULE_3__["string"]().required("Nom arrondissement Obligatoire"),
  subDivCode: yup__WEBPACK_IMPORTED_MODULE_3__["string"]().required("Code arrondissement Obligatoire")
});

var NewSubDivision = function NewSubDivision() {
  var classes = useStyles();
  var client = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_13__["useApolloClient"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      _useState2 = _slicedToArray(_useState, 2),
      regions = _useState2[0],
      setRegions = _useState2[1];

  var _useForm = Object(_utils_useForm__WEBPACK_IMPORTED_MODULE_10__["default"])({
    regionID: ""
  }),
      _useForm2 = _slicedToArray(_useForm, 3),
      state = _useForm2[0],
      setState = _useForm2[1],
      handleInputChange = _useForm2[2];

  var initialValues = {
    subDivName: "",
    subDivCode: "",
    division: "",
    region: ""
  };

  var loadRegionData = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var _yield$client$query, error, data, loading;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return client.query({
                query: _queries_Mutations_Functions_Queries__WEBPACK_IMPORTED_MODULE_14__["getAllRegionsQuery"]
              });

            case 2:
              _yield$client$query = _context.sent;
              error = _yield$client$query.error;
              data = _yield$client$query.data;
              loading = _yield$client$query.loading;
              console.log(data.regions);
              loading && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["LinearProgress"], {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 102
                },
                __self: this
              });
              setRegions(data.regions);

            case 9:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    return function loadRegionData() {
      return _ref.apply(this, arguments);
    };
  }();

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    loadRegionData();
  }, []);
  console.log(state.regionID); // const refinedRegion = removeTypename(regions)

  var getRegionsOptions = regions && regions.map(function (item) {
    return {
      value: item,
      label: item.regName
    };
  });

  var _useQuery = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_13__["useQuery"])(_queries_Mutations_Functions_Queries__WEBPACK_IMPORTED_MODULE_14__["getDivisionsOfARegionQuery"], {
    skip: !state.regionID,
    variables: {
      id: state.regionID
    }
  }),
      dataRegion = _useQuery.data,
      loadingRegion = _useQuery.loadingRegion,
      errRegion = _useQuery.errRegion;

  {
    loadingRegion && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["CircularProgress"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 123
      },
      __self: this
    });
  }
  console.log(dataRegion);
  var getRegion = dataRegion && dataRegion.region;

  var _getRegion = _objectSpread({}, getRegion),
      division = _getRegion.division;

  console.log(division);
  var getDivOptions = division && division.map(function (item) {
    return {
      value: item,
      label: item.subDivName
    };
  });

  var _useMutation = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_13__["useMutation"])(_queries_Mutations_Functions_Mutations__WEBPACK_IMPORTED_MODULE_16__["createSubDivisionMutation"], {
    refetchQueries: ["getAllSubDivisionsQuery"]
  }),
      _useMutation2 = _slicedToArray(_useMutation, 2),
      createSubDivision = _useMutation2[0],
      _useMutation2$ = _useMutation2[1],
      loading = _useMutation2$.loading,
      error = _useMutation2$.error;

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_7__["Formik"], {
    method: "POST",
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(values, _ref2) {
        var setSubmitting, resetForm, res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                setSubmitting = _ref2.setSubmitting, resetForm = _ref2.resetForm;
                _context2.next = 3;
                return createSubDivision({
                  variables: _objectSpread({}, values, {
                    division: values.division && Object(_queries_Mutations_Functions_Functions__WEBPACK_IMPORTED_MODULE_15__["getObjectFromID"])(values.division.id)
                  })
                });

              case 3:
                res = _context2.sent;
                setTimeout(function () {
                  console.log(JSON.stringify(values, null, 2));
                  console.log(res);
                  resetForm(true);
                  setSubmitting(false);
                }, 400);

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function (_x, _x2) {
        return _ref3.apply(this, arguments);
      };
    }(),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: this
  }, function (_ref4) {
    var submitForm = _ref4.submitForm,
        setFieldValue = _ref4.setFieldValue,
        isSubmitting = _ref4.isSubmitting;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: classes.centerAll,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 162
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Paper"], {
      className: classes.pageStyled,
      elevation: 3,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 163
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_7__["Form"], {
      "aria-busy": isSubmitting,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 164
      },
      __self: this
    }, (isSubmitting || loading) && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["LinearProgress"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 165
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
      className: classes.centerAll,
      container: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 166
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
      container: true,
      className: classes.centerAll,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 167
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
      item: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 168
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ErrorMessage_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
      error: error,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 169
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Typography"], {
      className: classes.titleStyled,
      variant: "body1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 170
      },
      __self: this
    }, "Nouvel Arrondissement"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
      container: true,
      className: classes.centerAll,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 178
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
      item: true,
      className: classes.centerAll,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 179
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_7__["Field"], {
      variant: "standard",
      name: "region",
      label: "La R\xE9gion",
      component: material_ui_formik_components_Autocomplete__WEBPACK_IMPORTED_MODULE_6__["Autocomplete"],
      placeholder: "la R\xE9gion",
      disabled: isSubmitting,
      helperText: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_7__["ErrorMessage"], {
        name: "region",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 187
        },
        __self: this
      }),
      options: getRegionsOptions,
      textFieldProps: {
        label: "Regions of the country"
      },
      fullWidth: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 180
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_7__["Field"], {
      variant: "standard",
      name: "region",
      label: "La R\xE9gion",
      component: material_ui_formik_components_Autocomplete__WEBPACK_IMPORTED_MODULE_6__["Autocomplete"],
      placeholder: "la R\xE9gion",
      disabled: isSubmitting,
      helperText: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_7__["ErrorMessage"], {
        name: "region",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 201
        },
        __self: this
      }),
      options: getRegionsOptions,
      textFieldProps: {
        label: "divisions of a region"
      },
      fullWidth: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 194
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_muiComponents_controls_SygefexMuiInput__WEBPACK_IMPORTED_MODULE_11__["default"], {
      name: "subDivName",
      type: "text",
      label: "Nom Arrondissement",
      fullWidth: true,
      variant: "standard",
      disabled: isSubmitting || loading,
      helperText: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_7__["ErrorMessage"], {
        name: "subDivName",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 216
        },
        __self: this
      }),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 209
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_muiComponents_controls_SygefexMuiInput__WEBPACK_IMPORTED_MODULE_11__["default"], {
      name: "subDivCode",
      type: "text",
      label: "Code Arrondissement",
      fullWidth: true,
      variant: "standard",
      disabled: isSubmitting || loading,
      helperText: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_7__["ErrorMessage"], {
        name: "subDivCode",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 225
        },
        __self: this
      }),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 218
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Button"], {
      disabled: isSubmitting,
      onClick: submitForm,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 227
      },
      __self: this
    }, "Valid", isSubmitting ? "ation en cours" : "er")))))));
  });
};

/* harmony default export */ __webpack_exports__["default"] = (NewSubDivision); //  <SygefexMuiSelect
//    variant="standard"
//    name="division"
//    label="Le Département"
//    placeholder="Le Département"
//    disabled={isSubmitting}
//    options={getDivOptions}
//    helperText={<ErrorMessage name="division" />}
//  />;
// //
// <SygefexMuiSelect
//   variant="standard"
//   name="division"
//   label="Le Département"
//   placeholder="Le Département"
//   disabled={isSubmitting}
//   options={getDivOptions}
//   helperText={<ErrorMessage name="division" />}
// />
// <SygefexMuiSelect
//   variant="standard"
//   name="division"
//   label="Le Département"
//   placeholder="Le Département"
//   disabled={isSubmitting}
//   helperText={<ErrorMessage name="division" />}
// >
//   {division &&
//     division.map((item) => (
//       <MenuItem value={item.id} key={item.id}>
//         {item.divName}
//       </MenuItem>
//     ))}
// </SygefexMuiSelect>
// <Field
//   component={TextField}
//   select
//   name="regionD"
//   disabled={isSubmitting}
//   helperText="region"
// >
//   {regions &&
//     regions.map((item) => (
//       <MenuItem key={item.id} value={item.id}>
//         {item.regName}
//       </MenuItem>
//     ))}
// </Field>;
// <Field
//   variant="standard"
//   disabled={isSubmitting}
//   fullWidth
//   placeholder="Le Département"
//   name="division"
//   label="Département"
//   options={getDivOptions}
//   component={Select}
//   helperText={<ErrorMessage name="region" />}
// />

/***/ })

})
//# sourceMappingURL=newSubDivision.js.448b30954ecb0ca46dd0.hot-update.js.map