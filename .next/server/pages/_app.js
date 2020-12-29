module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

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
const endpoint = `http://localhost:50000`; // export const perPage = 6;
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




function createClient({
  headers
}) {
  return new apollo_boost__WEBPACK_IMPORTED_MODULE_1___default.a({
    uri: true ? _config__WEBPACK_IMPORTED_MODULE_2__["endpoint"] : undefined,
    request: operation => {
      operation.setContext({
        fetchOptions: {
          credentials: 'include'
        },
        headers
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

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");

var _router2 = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

var _useIntersection = __webpack_require__(/*! ./use-intersection */ "./node_modules/next/dist/client/use-intersection.js");

const prefetched = {};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (true) {
      // rethrow to show invalid URL errors
      throw err;
    }
  });
  const curLocale = options && typeof options.locale !== 'undefined' ? options.locale : router && router.locale; // Join on an invalid URI character

  prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll, locale) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow,
    locale
  }).then(success => {
    if (!success) return;

    if (scroll) {
      window.scrollTo(0, 0);
      document.body.focus();
    }
  });
}

function Link(props) {
  if (true) {
    function createPropError(args) {
      return new Error(`Failed prop type: The prop \`${args.key}\` expects a ${args.expected} in \`<Link>\`, but got \`${args.actual}\` instead.` + (false ? undefined : ''));
    } // TypeScript trick for type-guarding:


    const requiredPropsGuard = {
      href: true
    };
    const requiredProps = Object.keys(requiredPropsGuard);
    requiredProps.forEach(key => {
      if (key === 'href') {
        if (props[key] == null || typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: props[key] === null ? 'null' : typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // TypeScript trick for type-guarding:

    const optionalPropsGuard = {
      as: true,
      replace: true,
      scroll: true,
      shallow: true,
      passHref: true,
      prefetch: true,
      locale: true
    };
    const optionalProps = Object.keys(optionalPropsGuard);
    optionalProps.forEach(key => {
      const valType = typeof props[key];

      if (key === 'as') {
        if (props[key] && valType !== 'string' && valType !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: valType
          });
        }
      } else if (key === 'locale') {
        if (props[key] && valType !== 'string') {
          throw createPropError({
            key,
            expected: '`string`',
            actual: valType
          });
        }
      } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'prefetch') {
        if (props[key] != null && valType !== 'boolean') {
          throw createPropError({
            key,
            expected: '`boolean`',
            actual: valType
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // This hook is in a conditional but that is ok because `process.env.NODE_ENV` never changes
    // eslint-disable-next-line react-hooks/rules-of-hooks

    const hasWarned = _react.default.useRef(false);

    if (props.prefetch && !hasWarned.current) {
      hasWarned.current = true;
      console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/vercel/next.js/prefetch-true-deprecated');
    }
  }

  const p = props.prefetch !== false;
  const router = (0, _router2.useRouter)();
  const pathname = router && router.pathname || '/';

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router.resolveHref)(pathname, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedAs || resolvedHref
    };
  }, [pathname, props.href, props.as]);

  let {
    children,
    replace,
    shallow,
    scroll,
    locale
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  const child = _react.Children.only(children);

  const childRef = child && typeof child === 'object' && child.ref;
  const [setIntersectionRef, isVisible] = (0, _useIntersection.useIntersection)({
    rootMargin: '200px'
  });

  const setRef = _react.default.useCallback(el => {
    setIntersectionRef(el);

    if (childRef) {
      if (typeof childRef === 'function') childRef(el);else if (typeof childRef === 'object') {
        childRef.current = el;
      }
    }
  }, [childRef, setIntersectionRef]);

  (0, _react.useEffect)(() => {
    const shouldPrefetch = isVisible && p && (0, _router.isLocalURL)(href);
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale;
    const isPrefetched = prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')];

    if (shouldPrefetch && !isPrefetched) {
      prefetch(router, href, as, {
        locale: curLocale
      });
    }
  }, [as, href, isVisible, locale, p, router]);
  const childProps = {
    ref: setRef,
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll, locale);
      }
    }
  };

  childProps.onMouseEnter = e => {
    if (!(0, _router.isLocalURL)(href)) return;

    if (child.props && typeof child.props.onMouseEnter === 'function') {
      child.props.onMouseEnter(e);
    }

    prefetch(router, href, as, {
      priority: true
    });
  }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    childProps.href = (0, _router.addBasePath)((0, _router.addLocale)(as, typeof locale !== 'undefined' ? locale : router && router.locale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/normalize-trailing-slash.js":
/*!*******************************************************************!*\
  !*** ./node_modules/next/dist/client/normalize-trailing-slash.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "./node_modules/next/dist/client/request-idle-callback.js":
/*!****************************************************************!*\
  !*** ./node_modules/next/dist/client/request-idle-callback.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

var _default = requestIdleCallback;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/route-loader.js":
/*!*******************************************************!*\
  !*** ./node_modules/next/dist/client/route-loader.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.markAssetError = markAssetError;
exports.isAssetError = isAssetError;
exports.getClientBuildManifest = getClientBuildManifest;
exports.default = void 0;

var _getAssetPathFromRoute = _interopRequireDefault(__webpack_require__(/*! ../next-server/lib/router/utils/get-asset-path-from-route */ "../next-server/lib/router/utils/get-asset-path-from-route"));

var _requestIdleCallback = _interopRequireDefault(__webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js")); // 3.8s was arbitrarily chosen as it's what https://web.dev/interactive
// considers as "Good" time-to-interactive. We must assume something went
// wrong beyond this point, and then fall-back to a full page transition to
// show the user something of value.


const MS_MAX_IDLE_DELAY = 3800;

function withFuture(key, map, generator) {
  let entry = map.get(key);

  if (entry) {
    if ('future' in entry) {
      return entry.future;
    }

    return Promise.resolve(entry);
  }

  let resolver;
  const prom = new Promise(resolve => {
    resolver = resolve;
  });
  map.set(key, entry = {
    resolve: resolver,
    future: prom
  });
  return generator ? // eslint-disable-next-line no-sequences
  generator().then(value => (resolver(value), value)) : prom;
}

function hasPrefetch(link) {
  try {
    link = document.createElement('link');
    return (// detect IE11 since it supports prefetch but isn't detected
      // with relList.support
      !!window.MSInputMethodContext && !!document.documentMode || link.relList.supports('prefetch')
    );
  } catch (_unused) {
    return false;
  }
}

const canPrefetch = hasPrefetch();

function prefetchViaDom(href, as, link) {
  return new Promise((res, rej) => {
    if (document.querySelector(`link[rel="prefetch"][href^="${href}"]`)) {
      return res();
    }

    link = document.createElement('link'); // The order of property assignment here is intentional:

    if (as) link.as = as;
    link.rel = `prefetch`;
    link.crossOrigin = undefined;
    link.onload = res;
    link.onerror = rej; // `href` should always be last:

    link.href = href;
    document.head.appendChild(link);
  });
}

const ASSET_LOAD_ERROR = Symbol('ASSET_LOAD_ERROR'); // TODO: unexport

function markAssetError(err) {
  return Object.defineProperty(err, ASSET_LOAD_ERROR, {});
}

function isAssetError(err) {
  return err && ASSET_LOAD_ERROR in err;
}

function appendScript(src, script) {
  return new Promise((resolve, reject) => {
    script = document.createElement('script'); // The order of property assignment here is intentional.
    // 1. Setup success/failure hooks in case the browser synchronously
    //    executes when `src` is set.

    script.onload = resolve;

    script.onerror = () => reject(markAssetError(new Error(`Failed to load script: ${src}`))); // 2. Configure the cross-origin attribute before setting `src` in case the
    //    browser begins to fetch.


    script.crossOrigin = undefined; // 3. Finally, set the source and inject into the DOM in case the child
    //    must be appended for fetching to start.

    script.src = src;
    document.body.appendChild(script);
  });
}

function idleTimeout(ms, err) {
  return new Promise((_resolve, reject) => (0, _requestIdleCallback.default)(() => setTimeout(() => reject(err), ms)));
} // TODO: stop exporting or cache the failure
// It'd be best to stop exporting this. It's an implementation detail. We're
// only exporting it for backwards compatibilty with the `page-loader`.
// Only cache this response as a last resort if we cannot eliminate all other
// code branches that use the Build Manifest Callback and push them through
// the Route Loader interface.


function getClientBuildManifest() {
  if (self.__BUILD_MANIFEST) {
    return Promise.resolve(self.__BUILD_MANIFEST);
  }

  const onBuildManifest = new Promise(resolve => {
    // Mandatory because this is not concurrent safe:
    const cb = self.__BUILD_MANIFEST_CB;

    self.__BUILD_MANIFEST_CB = () => {
      resolve(self.__BUILD_MANIFEST);
      cb && cb();
    };
  });
  return Promise.race([onBuildManifest, idleTimeout(MS_MAX_IDLE_DELAY, markAssetError(new Error('Failed to load client build manifest')))]);
}

function getFilesForRoute(assetPrefix, route) {
  if (true) {
    return Promise.resolve({
      scripts: [assetPrefix + '/_next/static/chunks/pages' + encodeURI((0, _getAssetPathFromRoute.default)(route, '.js'))],
      // Styles are handled by `style-loader` in development:
      css: []
    });
  }

  return getClientBuildManifest().then(manifest => {
    if (!(route in manifest)) {
      throw markAssetError(new Error(`Failed to lookup route: ${route}`));
    }

    const allFiles = manifest[route].map(entry => assetPrefix + '/_next/' + encodeURI(entry));
    return {
      scripts: allFiles.filter(v => v.endsWith('.js')),
      css: allFiles.filter(v => v.endsWith('.css'))
    };
  });
}

function createRouteLoader(assetPrefix) {
  const entrypoints = new Map();
  const loadedScripts = new Map();
  const styleSheets = new Map();
  const routes = new Map();

  function maybeExecuteScript(src) {
    let prom = loadedScripts.get(src);

    if (prom) {
      return prom;
    } // Skip executing script if it's already in the DOM:


    if (document.querySelector(`script[src^="${src}"]`)) {
      return Promise.resolve();
    }

    loadedScripts.set(src, prom = appendScript(src));
    return prom;
  }

  function fetchStyleSheet(href) {
    let prom = styleSheets.get(href);

    if (prom) {
      return prom;
    }

    styleSheets.set(href, prom = fetch(href).then(res => {
      if (!res.ok) {
        throw new Error(`Failed to load stylesheet: ${href}`);
      }

      return res.text().then(text => ({
        href: href,
        content: text
      }));
    }).catch(err => {
      throw markAssetError(err);
    }));
    return prom;
  }

  return {
    whenEntrypoint(route) {
      return withFuture(route, entrypoints);
    },

    onEntrypoint(route, execute) {
      Promise.resolve(execute).then(fn => fn()).then(exports => ({
        component: exports && exports.default || exports,
        exports: exports
      }), err => ({
        error: err
      })).then(input => {
        const old = entrypoints.get(route);
        entrypoints.set(route, input);
        if (old && 'resolve' in old) old.resolve(input);
      });
    },

    loadRoute(route) {
      return withFuture(route, routes, async () => {
        try {
          const {
            scripts,
            css
          } = await getFilesForRoute(assetPrefix, route);
          const [, styles] = await Promise.all([entrypoints.has(route) ? [] : Promise.all(scripts.map(maybeExecuteScript)), Promise.all(css.map(fetchStyleSheet))]);
          const entrypoint = await Promise.race([this.whenEntrypoint(route), idleTimeout(MS_MAX_IDLE_DELAY, markAssetError(new Error(`Route did not complete loading: ${route}`)))]);
          const res = Object.assign({
            styles
          }, entrypoint);
          return 'error' in entrypoint ? entrypoint : res;
        } catch (err) {
          return {
            error: err
          };
        }
      });
    },

    prefetch(route) {
      // https://github.com/GoogleChromeLabs/quicklink/blob/453a661fa1fa940e2d2e044452398e38c67a98fb/src/index.mjs#L115-L118
      // License: Apache 2.0
      let cn;

      if (cn = navigator.connection) {
        // Don't prefetch if using 2G or if Save-Data is enabled.
        if (cn.saveData || /2g/.test(cn.effectiveType)) return Promise.resolve();
      }

      return getFilesForRoute(assetPrefix, route).then(output => Promise.all(canPrefetch ? output.scripts.map(script => prefetchViaDom(script, 'script')) : [])).then(() => {
        (0, _requestIdleCallback.default)(() => this.loadRoute(route));
      }).catch( // swallow prefetch errors
      () => {});
    }

  };
}

var _default = createRouteLoader;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "../next-server/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router[property]) ? [] : {}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/use-intersection.js":
/*!***********************************************************!*\
  !*** ./node_modules/next/dist/client/use-intersection.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useIntersection = useIntersection;

var _react = __webpack_require__(/*! react */ "react");

var _requestIdleCallback = _interopRequireDefault(__webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js"));

const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection({
  rootMargin,
  disabled
}) {
  const isDisabled = disabled || !hasIntersectionObserver;
  const unobserve = (0, _react.useRef)();
  const [visible, setVisible] = (0, _react.useState)(false);
  const setRef = (0, _react.useCallback)(el => {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, isVisible => isVisible && setVisible(isVisible), {
        rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react.useEffect)(() => {
    if (!hasIntersectionObserver) {
      if (!visible) (0, _requestIdleCallback.default)(() => setVisible(true));
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  const {
    id,
    observer,
    elements
  } = createObserver(options);
  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers.delete(id);
    }
  };
}

const observers = new Map();

function createObserver(options) {
  const id = options.rootMargin || '';
  let instance = observers.get(id);

  if (instance) {
    return instance;
  }

  const elements = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const callback = elements.get(entry.target);
      const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id,
    observer,
    elements
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = `withRouter(${name})`;
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/compiled/path-to-regexp/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/compiled/path-to-regexp/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Tokenize input string.
 */
function lexer(str) {
    var tokens = [];
    var i = 0;
    while (i < str.length) {
        var char = str[i];
        if (char === "*" || char === "+" || char === "?") {
            tokens.push({ type: "MODIFIER", index: i, value: str[i++] });
            continue;
        }
        if (char === "\\") {
            tokens.push({ type: "ESCAPED_CHAR", index: i++, value: str[i++] });
            continue;
        }
        if (char === "{") {
            tokens.push({ type: "OPEN", index: i, value: str[i++] });
            continue;
        }
        if (char === "}") {
            tokens.push({ type: "CLOSE", index: i, value: str[i++] });
            continue;
        }
        if (char === ":") {
            var name = "";
            var j = i + 1;
            while (j < str.length) {
                var code = str.charCodeAt(j);
                if (
                // `0-9`
                (code >= 48 && code <= 57) ||
                    // `A-Z`
                    (code >= 65 && code <= 90) ||
                    // `a-z`
                    (code >= 97 && code <= 122) ||
                    // `_`
                    code === 95) {
                    name += str[j++];
                    continue;
                }
                break;
            }
            if (!name)
                throw new TypeError("Missing parameter name at " + i);
            tokens.push({ type: "NAME", index: i, value: name });
            i = j;
            continue;
        }
        if (char === "(") {
            var count = 1;
            var pattern = "";
            var j = i + 1;
            if (str[j] === "?") {
                throw new TypeError("Pattern cannot start with \"?\" at " + j);
            }
            while (j < str.length) {
                if (str[j] === "\\") {
                    pattern += str[j++] + str[j++];
                    continue;
                }
                if (str[j] === ")") {
                    count--;
                    if (count === 0) {
                        j++;
                        break;
                    }
                }
                else if (str[j] === "(") {
                    count++;
                    if (str[j + 1] !== "?") {
                        throw new TypeError("Capturing groups are not allowed at " + j);
                    }
                }
                pattern += str[j++];
            }
            if (count)
                throw new TypeError("Unbalanced pattern at " + i);
            if (!pattern)
                throw new TypeError("Missing pattern at " + i);
            tokens.push({ type: "PATTERN", index: i, value: pattern });
            i = j;
            continue;
        }
        tokens.push({ type: "CHAR", index: i, value: str[i++] });
    }
    tokens.push({ type: "END", index: i, value: "" });
    return tokens;
}
/**
 * Parse a string for the raw tokens.
 */
function parse(str, options) {
    if (options === void 0) { options = {}; }
    var tokens = lexer(str);
    var _a = options.prefixes, prefixes = _a === void 0 ? "./" : _a;
    var defaultPattern = "[^" + escapeString(options.delimiter || "/#?") + "]+?";
    var result = [];
    var key = 0;
    var i = 0;
    var path = "";
    var tryConsume = function (type) {
        if (i < tokens.length && tokens[i].type === type)
            return tokens[i++].value;
    };
    var mustConsume = function (type) {
        var value = tryConsume(type);
        if (value !== undefined)
            return value;
        var _a = tokens[i], nextType = _a.type, index = _a.index;
        throw new TypeError("Unexpected " + nextType + " at " + index + ", expected " + type);
    };
    var consumeText = function () {
        var result = "";
        var value;
        // tslint:disable-next-line
        while ((value = tryConsume("CHAR") || tryConsume("ESCAPED_CHAR"))) {
            result += value;
        }
        return result;
    };
    while (i < tokens.length) {
        var char = tryConsume("CHAR");
        var name = tryConsume("NAME");
        var pattern = tryConsume("PATTERN");
        if (name || pattern) {
            var prefix = char || "";
            if (prefixes.indexOf(prefix) === -1) {
                path += prefix;
                prefix = "";
            }
            if (path) {
                result.push(path);
                path = "";
            }
            result.push({
                name: name || key++,
                prefix: prefix,
                suffix: "",
                pattern: pattern || defaultPattern,
                modifier: tryConsume("MODIFIER") || ""
            });
            continue;
        }
        var value = char || tryConsume("ESCAPED_CHAR");
        if (value) {
            path += value;
            continue;
        }
        if (path) {
            result.push(path);
            path = "";
        }
        var open = tryConsume("OPEN");
        if (open) {
            var prefix = consumeText();
            var name_1 = tryConsume("NAME") || "";
            var pattern_1 = tryConsume("PATTERN") || "";
            var suffix = consumeText();
            mustConsume("CLOSE");
            result.push({
                name: name_1 || (pattern_1 ? key++ : ""),
                pattern: name_1 && !pattern_1 ? defaultPattern : pattern_1,
                prefix: prefix,
                suffix: suffix,
                modifier: tryConsume("MODIFIER") || ""
            });
            continue;
        }
        mustConsume("END");
    }
    return result;
}
exports.parse = parse;
/**
 * Compile a string to a template function for the path.
 */
function compile(str, options) {
    return tokensToFunction(parse(str, options), options);
}
exports.compile = compile;
/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction(tokens, options) {
    if (options === void 0) { options = {}; }
    var reFlags = flags(options);
    var _a = options.encode, encode = _a === void 0 ? function (x) { return x; } : _a, _b = options.validate, validate = _b === void 0 ? true : _b;
    // Compile all the tokens into regexps.
    var matches = tokens.map(function (token) {
        if (typeof token === "object") {
            return new RegExp("^(?:" + token.pattern + ")$", reFlags);
        }
    });
    return function (data) {
        var path = "";
        for (var i = 0; i < tokens.length; i++) {
            var token = tokens[i];
            if (typeof token === "string") {
                path += token;
                continue;
            }
            var value = data ? data[token.name] : undefined;
            var optional = token.modifier === "?" || token.modifier === "*";
            var repeat = token.modifier === "*" || token.modifier === "+";
            if (Array.isArray(value)) {
                if (!repeat) {
                    throw new TypeError("Expected \"" + token.name + "\" to not repeat, but got an array");
                }
                if (value.length === 0) {
                    if (optional)
                        continue;
                    throw new TypeError("Expected \"" + token.name + "\" to not be empty");
                }
                for (var j = 0; j < value.length; j++) {
                    var segment = encode(value[j], token);
                    if (validate && !matches[i].test(segment)) {
                        throw new TypeError("Expected all \"" + token.name + "\" to match \"" + token.pattern + "\", but got \"" + segment + "\"");
                    }
                    path += token.prefix + segment + token.suffix;
                }
                continue;
            }
            if (typeof value === "string" || typeof value === "number") {
                var segment = encode(String(value), token);
                if (validate && !matches[i].test(segment)) {
                    throw new TypeError("Expected \"" + token.name + "\" to match \"" + token.pattern + "\", but got \"" + segment + "\"");
                }
                path += token.prefix + segment + token.suffix;
                continue;
            }
            if (optional)
                continue;
            var typeOfMessage = repeat ? "an array" : "a string";
            throw new TypeError("Expected \"" + token.name + "\" to be " + typeOfMessage);
        }
        return path;
    };
}
exports.tokensToFunction = tokensToFunction;
/**
 * Create path match function from `path-to-regexp` spec.
 */
function match(str, options) {
    var keys = [];
    var re = pathToRegexp(str, keys, options);
    return regexpToFunction(re, keys, options);
}
exports.match = match;
/**
 * Create a path match function from `path-to-regexp` output.
 */
function regexpToFunction(re, keys, options) {
    if (options === void 0) { options = {}; }
    var _a = options.decode, decode = _a === void 0 ? function (x) { return x; } : _a;
    return function (pathname) {
        var m = re.exec(pathname);
        if (!m)
            return false;
        var path = m[0], index = m.index;
        var params = Object.create(null);
        var _loop_1 = function (i) {
            // tslint:disable-next-line
            if (m[i] === undefined)
                return "continue";
            var key = keys[i - 1];
            if (key.modifier === "*" || key.modifier === "+") {
                params[key.name] = m[i].split(key.prefix + key.suffix).map(function (value) {
                    return decode(value, key);
                });
            }
            else {
                params[key.name] = decode(m[i], key);
            }
        };
        for (var i = 1; i < m.length; i++) {
            _loop_1(i);
        }
        return { path: path, index: index, params: params };
    };
}
exports.regexpToFunction = regexpToFunction;
/**
 * Escape a regular expression string.
 */
function escapeString(str) {
    return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
/**
 * Get the flags for a regexp from the options.
 */
function flags(options) {
    return options && options.sensitive ? "" : "i";
}
/**
 * Pull out keys from a regexp.
 */
function regexpToRegexp(path, keys) {
    if (!keys)
        return path;
    // Use a negative lookahead to match only capturing groups.
    var groups = path.source.match(/\((?!\?)/g);
    if (groups) {
        for (var i = 0; i < groups.length; i++) {
            keys.push({
                name: i,
                prefix: "",
                suffix: "",
                modifier: "",
                pattern: ""
            });
        }
    }
    return path;
}
/**
 * Transform an array into a regexp.
 */
function arrayToRegexp(paths, keys, options) {
    var parts = paths.map(function (path) { return pathToRegexp(path, keys, options).source; });
    return new RegExp("(?:" + parts.join("|") + ")", flags(options));
}
/**
 * Create a path regexp from string input.
 */
function stringToRegexp(path, keys, options) {
    return tokensToRegexp(parse(path, options), keys, options);
}
/**
 * Expose a function for taking tokens and returning a RegExp.
 */
function tokensToRegexp(tokens, keys, options) {
    if (options === void 0) { options = {}; }
    var _a = options.strict, strict = _a === void 0 ? false : _a, _b = options.start, start = _b === void 0 ? true : _b, _c = options.end, end = _c === void 0 ? true : _c, _d = options.encode, encode = _d === void 0 ? function (x) { return x; } : _d;
    var endsWith = "[" + escapeString(options.endsWith || "") + "]|$";
    var delimiter = "[" + escapeString(options.delimiter || "/#?") + "]";
    var route = start ? "^" : "";
    // Iterate over the tokens and create our regexp string.
    for (var _i = 0, tokens_1 = tokens; _i < tokens_1.length; _i++) {
        var token = tokens_1[_i];
        if (typeof token === "string") {
            route += escapeString(encode(token));
        }
        else {
            var prefix = escapeString(encode(token.prefix));
            var suffix = escapeString(encode(token.suffix));
            if (token.pattern) {
                if (keys)
                    keys.push(token);
                if (prefix || suffix) {
                    if (token.modifier === "+" || token.modifier === "*") {
                        var mod = token.modifier === "*" ? "?" : "";
                        route += "(?:" + prefix + "((?:" + token.pattern + ")(?:" + suffix + prefix + "(?:" + token.pattern + "))*)" + suffix + ")" + mod;
                    }
                    else {
                        route += "(?:" + prefix + "(" + token.pattern + ")" + suffix + ")" + token.modifier;
                    }
                }
                else {
                    route += "(" + token.pattern + ")" + token.modifier;
                }
            }
            else {
                route += "(?:" + prefix + suffix + ")" + token.modifier;
            }
        }
    }
    if (end) {
        if (!strict)
            route += delimiter + "?";
        route += !options.endsWith ? "$" : "(?=" + endsWith + ")";
    }
    else {
        var endToken = tokens[tokens.length - 1];
        var isEndDelimited = typeof endToken === "string"
            ? delimiter.indexOf(endToken[endToken.length - 1]) > -1
            : // tslint:disable-next-line
                endToken === undefined;
        if (!strict) {
            route += "(?:" + delimiter + "(?=" + endsWith + "))?";
        }
        if (!isEndDelimited) {
            route += "(?=" + delimiter + "|" + endsWith + ")";
        }
    }
    return new RegExp(route, flags(options));
}
exports.tokensToRegexp = tokensToRegexp;
/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 */
function pathToRegexp(path, keys, options) {
    if (path instanceof RegExp)
        return regexpToRegexp(path, keys);
    if (Array.isArray(path))
        return arrayToRegexp(path, keys, options);
    return stringToRegexp(path, keys, options);
}
exports.pathToRegexp = pathToRegexp;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");

var _routeLoader = __webpack_require__(/*! ../../../client/route-loader */ "./node_modules/next/dist/client/route-loader.js");

var _denormalizePagePath = __webpack_require__(/*! ../../server/denormalize-page-path */ "./node_modules/next/dist/next-server/server/denormalize-page-path.js");

var _mitt = _interopRequireDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _escapePathDelimiters = _interopRequireDefault(__webpack_require__(/*! ./utils/escape-path-delimiters */ "./node_modules/next/dist/next-server/lib/router/utils/escape-path-delimiters.js"));

var _isDynamic = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

var _parseRelativeUrl = __webpack_require__(/*! ./utils/parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");

var _querystring = __webpack_require__(/*! ./utils/querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

var _resolveRewrites = _interopRequireDefault(__webpack_require__(/*! ./utils/resolve-rewrites */ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js"));

var _routeMatcher = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

var _routeRegex = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(prefix) : `${prefix}${path}` : path;
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function hasBasePath(path) {
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  return path.slice(basePath.length) || '/';
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  if (url.startsWith('/')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex.getRouteRegex)(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && ( // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map(_escapePathDelimiters.default).join('/') : (0, _escapePathDelimiters.default)(value)) || '/');
  })) {
    interpolatedRoute = ''; // did not satisfy all requirements
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href, resolveAs) {
  // we use a dummy base url for relative urls
  const base = new URL(currentPath, 'http://n');
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href); // Return because it cannot be routed by the Next.js router

  if (!isLocalURL(urlAsString)) {
    return resolveAs ? [urlAsString] : urlAsString;
  }

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils.formatWithValidation)({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  return {
    url: addBasePath(resolveHref(router.pathname, url)),
    as: as ? addBasePath(resolveHref(router.pathname, as)) : as
  };
}

const manualScrollRestoration =  false && false;
const SSG_DATA_NOT_FOUND_ERROR = 'SSG Data NOT_FOUND';

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      if (res.status === 404) {
        // TODO: handle reloading in development from fallback returning 200
        // to on-demand-entry-handler causing it to reload periodically
        throw new Error(SSG_DATA_NOT_FOUND_ERROR);
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      (0, _routeLoader.markAssetError)(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;
    this.locale = void 0;
    this.locales = void 0;
    this.defaultLocale = void 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      const {
        url,
        as,
        options
      } = state;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow,
        locale: options.locale || this.defaultLocale
      }));
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        initial: true,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    (0, _isDynamic.isDynamicRoute)(_pathname) && __NEXT_DATA__.autoExport ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options) {
    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    }

    let localeChange = options.locale !== this.locale;

    if (false) { var _this$locales; }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute);
    }

    as = addBasePath(addLocale(hasBasePath(as) ? delBasePath(as) : as, options.locale, this.defaultLocale));
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route]);
      Router.events.emit('hashChangeComplete', as);
      return true;
    }

    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      query
    } = parsed; // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to

    let pages, rewrites;

    try {
      pages = await this.pageLoader.getPageList();
      ({
        __rewrites: rewrites
      } = await (0, _routeLoader.getClientBuildManifest)());
    } catch (err) {
      // If we fail to resolve the page list or client-build manifest, we must
      // do a server-side transition:
      window.location.href = as;
      return false;
    }

    parsed = this._resolveHref(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1


    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname; // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url

    if (!this.urlIsNew(cleanedAs) && !localeChange) {
      method = 'replaceState';
    }

    let route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    const {
      shallow = false
    } = options; // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly

    let resolvedAs = as;

    if (true) {
      resolvedAs = (0, _resolveRewrites.default)((0, _parseRelativeUrl.parseRelativeUrl)(as).pathname, pages, basePath, rewrites, query, p => this._resolveHref({
        pathname: p
      }, pages).pathname);

      if (resolvedAs !== as) {
        const potentialHref = (0, _normalizeTrailingSlash.removePathTrailingSlash)(this._resolveHref(Object.assign({}, parsed, {
          pathname: resolvedAs
        }), pages, false).pathname); // if this directly matches a page we need to update the href to
        // allow the correct page chunk to be loaded

        if (pages.includes(potentialHref)) {
          route = potentialHref;
          pathname = potentialHref;
          parsed.pathname = pathname;
          url = (0, _utils.formatWithValidation)(parsed);
        }
      }
    }

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (true) {
            console.warn(`${shouldInterpolate ? `Interpolating href` : `Mismatching \`as\` and \`href\``} failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
          }

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://err.sh/vercel/next.js/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils.formatWithValidation)(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as);

    try {
      const routeInfo = await this.getRouteInfo(route, pathname, query, as, shallow);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props && props.pageProps && props.pageProps.__N_REDIRECT) {
        const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
        // client-navigation if it is falling back to hard navigation if
        // it's not

        if (destination.startsWith('/')) {
          const parsedHref = (0, _parseRelativeUrl.parseRelativeUrl)(destination);

          this._resolveHref(parsedHref, pages, false);

          if (pages.includes(parsedHref.pathname)) {
            const {
              url: newUrl,
              as: newAs
            } = prepareUrlAs(this, destination, destination);
            return this.change(method, newUrl, newAs, options);
          }
        }

        window.location.href = destination;
        return new Promise(() => {});
      }

      Router.events.emit('beforeHistoryChange', as);
      this.changeState(method, url, as, options);

      if (true) {
        const appComp = this.components['/_app'].Component;
        window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
      }

      await this.set(route, pathname, query, cleanedAs, routeInfo).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs);
        throw error;
      }

      if (false) {}

      if (false) {}

      Router.events.emit('routeChangeComplete', as);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if ((0, _routeLoader.isAssetError)(err) || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      let Component;
      let styleSheets;
      let props;
      const ssg404 = err.message === SSG_DATA_NOT_FOUND_ERROR;

      if (ssg404) {
        try {
          let mod;
          ({
            page: Component,
            styleSheets,
            mod
          } = await this.fetchComponent('/404')); // TODO: should we tolerate these props missing and still render the
          // page instead of falling back to _error?

          if (mod && mod.__N_SSG) {
            props = await this._getStaticData(this.pageLoader.getDataHref('/404', '/404', true, this.locale));
          }
        } catch (_err) {// non-fatal fallback to _error
        }
      }

      if (typeof Component === 'undefined' || typeof styleSheets === 'undefined') {
        ;
        ({
          page: Component,
          styleSheets
        } = await this.fetchComponent('/_error'));
      }

      const routeInfo = {
        props,
        Component,
        styleSheets,
        err: ssg404 ? undefined : err,
        error: ssg404 ? undefined : err
      };

      if (!routeInfo.props) {
        try {
          routeInfo.props = await this.getInitialProps(Component, {
            err,
            pathname,
            query
          });
        } catch (gipErr) {
          console.error('Error in error page `getInitialProps`: ', gipErr);
          routeInfo.props = {};
        }
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, shallow = false) {
    try {
      const existingRouteInfo = this.components[route];

      if (shallow && existingRouteInfo && this.route === route) {
        return existingRouteInfo;
      }

      const cachedRouteInfo = existingRouteInfo && 'initial' in existingRouteInfo ? undefined : existingRouteInfo;
      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "./node_modules/next/node_modules/react-is/index.js");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), delBasePath(as), __N_SSG, this.locale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as);
    }
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }

  _resolveHref(parsedHref, pages, applyBasePath = true) {
    const {
      pathname
    } = parsedHref;
    const cleanPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _denormalizePagePath.denormalizePagePath)(applyBasePath ? delBasePath(pathname) : pathname));

    if (cleanPathname === '/404' || cleanPathname === '/_error') {
      return parsedHref;
    } // handle resolving href for dynamic routes


    if (!pages.includes(cleanPathname)) {
      // eslint-disable-next-line array-callback-return
      pages.some(page => {
        if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
          parsedHref.pathname = applyBasePath ? addBasePath(page) : page;
          return true;
        }
      });
    }

    return parsedHref;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;

    if (false) {}

    const pages = await this.pageLoader.getPageList();
    parsed = this._resolveHref(parsed, pages, false);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // Prefetch is not supported in development mode because it would trigger on-demand-entries


    if (true) {
      return;
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    await Promise.all([this.pageLoader._isSsg(url).then(isSsg => {
      return isSsg ? this._getStaticData(this.pageLoader.getDataHref(url, asPath, true, typeof options.locale !== 'undefined' ? options.locale : this.locale)) : false;
    }), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if (false) {}

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    return fetchNextData(dataHref, this.isSsr);
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    return this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/escape-path-delimiters.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/escape-path-delimiters.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = escapePathDelimiters; // escape delimiters used by path-to-regexp

function escapePathDelimiters(segment) {
  return segment.replace(/[/#?]/g, char => encodeURIComponent(char));
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/format-url.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _querystring = __webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/


function parseRelativeUrl(url, base) {
  const globalBase = new URL(true ? 'http://n' : undefined);
  const resolvedBase = base ? new URL(base, globalBase) : globalBase;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin
  } = new URL(url, resolvedBase);

  if (origin !== globalBase.origin) {
    throw new Error('invariant: invalid relative URL');
  }

  return {
    pathname,
    query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
    search,
    hash,
    href: href.slice(globalBase.origin.length)
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/path-match.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/path-match.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.__esModule = true;
exports.pathToRegexp = exports.default = exports.customRouteMatcherOptions = exports.matcherOptions = void 0;

var pathToRegexp = _interopRequireWildcard(__webpack_require__(/*! next/dist/compiled/path-to-regexp */ "./node_modules/next/dist/compiled/path-to-regexp/index.js"));

exports.pathToRegexp = pathToRegexp;

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

const matcherOptions = {
  sensitive: false,
  delimiter: '/'
};
exports.matcherOptions = matcherOptions;

const customRouteMatcherOptions = _objectSpread(_objectSpread({}, matcherOptions), {}, {
  strict: true
});

exports.customRouteMatcherOptions = customRouteMatcherOptions;

var _default = (customRoute = false) => {
  return path => {
    const keys = [];
    const matcherRegex = pathToRegexp.pathToRegexp(path, keys, customRoute ? customRouteMatcherOptions : matcherOptions);
    const matcher = pathToRegexp.regexpToFunction(matcherRegex, keys);
    return (pathname, params) => {
      const res = pathname == null ? false : matcher(pathname);

      if (!res) {
        return false;
      }

      if (customRoute) {
        for (const key of keys) {
          // unnamed params should be removed as they
          // are not allowed to be used in the destination
          if (typeof key.name === 'number') {
            delete res.params[key.name];
          }
        }
      }

      return _objectSpread(_objectSpread({}, params), res.params);
    };
  };
};

exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js":
/*!************************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.__esModule = true;
exports.compileNonPath = compileNonPath;
exports.default = prepareDestination;

var _querystring = __webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

var _parseRelativeUrl = __webpack_require__(/*! ./parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");

var pathToRegexp = _interopRequireWildcard(__webpack_require__(/*! next/dist/compiled/path-to-regexp */ "./node_modules/next/dist/compiled/path-to-regexp/index.js"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

function compileNonPath(value, params) {
  if (!value.includes(':')) {
    return value;
  }

  for (const key of Object.keys(params)) {
    if (value.includes(`:${key}`)) {
      value = value.replace(new RegExp(`:${key}\\*`, 'g'), `:${key}--ESCAPED_PARAM_ASTERISKS`).replace(new RegExp(`:${key}\\?`, 'g'), `:${key}--ESCAPED_PARAM_QUESTION`).replace(new RegExp(`:${key}\\+`, 'g'), `:${key}--ESCAPED_PARAM_PLUS`).replace(new RegExp(`:${key}(?!\\w)`, 'g'), `--ESCAPED_PARAM_COLON${key}`);
    }
  }

  value = value.replace(/(:|\*|\?|\+|\(|\)|\{|\})/g, '\\$1').replace(/--ESCAPED_PARAM_PLUS/g, '+').replace(/--ESCAPED_PARAM_COLON/g, ':').replace(/--ESCAPED_PARAM_QUESTION/g, '?').replace(/--ESCAPED_PARAM_ASTERISKS/g, '*'); // the value needs to start with a forward-slash to be compiled
  // correctly

  return pathToRegexp.compile(`/${value}`, {
    validate: false
  })(params).substr(1);
}

function prepareDestination(destination, params, query, appendParamsToQuery, basePath) {
  let parsedDestination = {}; // clone query so we don't modify the original

  query = Object.assign({}, query);
  const hadLocale = query.__nextLocale;
  delete query.__nextLocale;
  delete query.__nextDefaultLocale;

  if (destination.startsWith('/')) {
    parsedDestination = (0, _parseRelativeUrl.parseRelativeUrl)(destination);
  } else {
    const {
      pathname,
      searchParams,
      hash,
      hostname,
      port,
      protocol,
      search,
      href
    } = new URL(destination);
    parsedDestination = {
      pathname,
      query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
      hash,
      protocol,
      hostname,
      port,
      search,
      href
    };
  }

  const destQuery = parsedDestination.query;
  const destPath = `${parsedDestination.pathname}${parsedDestination.hash || ''}`;
  const destPathParamKeys = [];
  pathToRegexp.pathToRegexp(destPath, destPathParamKeys);
  const destPathParams = destPathParamKeys.map(key => key.name);
  let destinationCompiler = pathToRegexp.compile(destPath, // we don't validate while compiling the destination since we should
  // have already validated before we got to this point and validating
  // breaks compiling destinations with named pattern params from the source
  // e.g. /something:hello(.*) -> /another/:hello is broken with validation
  // since compile validation is meant for reversing and not for inserting
  // params from a separate path-regex into another
  {
    validate: false
  });
  let newUrl; // update any params in query values

  for (const [key, strOrArray] of Object.entries(destQuery)) {
    let value = Array.isArray(strOrArray) ? strOrArray[0] : strOrArray;

    if (value) {
      // the value needs to start with a forward-slash to be compiled
      // correctly
      value = compileNonPath(value, params);
    }

    destQuery[key] = value;
  } // add path params to query if it's not a redirect and not
  // already defined in destination query or path


  let paramKeys = Object.keys(params); // remove internal param for i18n

  if (hadLocale) {
    paramKeys = paramKeys.filter(name => name !== 'nextInternalLocale');
  }

  if (appendParamsToQuery && !paramKeys.some(key => destPathParams.includes(key))) {
    for (const key of paramKeys) {
      if (!(key in destQuery)) {
        destQuery[key] = params[key];
      }
    }
  }

  const shouldAddBasePath = destination.startsWith('/') && basePath;

  try {
    newUrl = `${shouldAddBasePath ? basePath : ''}${destinationCompiler(params)}`;
    const [pathname, hash] = newUrl.split('#');
    parsedDestination.pathname = pathname;
    parsedDestination.hash = `${hash ? '#' : ''}${hash || ''}`;
    delete parsedDestination.search;
  } catch (err) {
    if (err.message.match(/Expected .*? to not repeat, but got an array/)) {
      throw new Error(`To use a multi-match in the destination you must add \`*\` at the end of the param name to signify it should repeat. https://err.sh/vercel/next.js/invalid-multi-match`);
    }

    throw err;
  } // Query merge order lowest priority to highest
  // 1. initial URL query values
  // 2. path segment values
  // 3. destination specified query values


  parsedDestination.query = _objectSpread(_objectSpread({}, query), parsedDestination.query);
  return {
    newUrl,
    parsedDestination
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/querystring.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function stringifyUrlQueryParam(param) {
  if (typeof param === 'string' || typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
    return String(param);
  } else {
    return '';
  }
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, stringifyUrlQueryParam(item)));
    } else {
      result.set(key, stringifyUrlQueryParam(value));
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = resolveRewrites;

var _pathMatch = _interopRequireDefault(__webpack_require__(/*! ./path-match */ "./node_modules/next/dist/next-server/lib/router/utils/path-match.js"));

var _prepareDestination = _interopRequireDefault(__webpack_require__(/*! ./prepare-destination */ "./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js"));

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

const customRouteMatcher = (0, _pathMatch.default)(true);

function resolveRewrites(asPath, pages, basePath, rewrites, query, resolveHref) {
  if (!pages.includes(asPath)) {
    for (const rewrite of rewrites) {
      const matcher = customRouteMatcher(rewrite.source);
      const params = matcher(asPath);

      if (params) {
        if (!rewrite.destination) {
          // this is a proxied rewrite which isn't handled on the client
          break;
        }

        const destRes = (0, _prepareDestination.default)(rewrite.destination, params, query, true, rewrite.basePath === false ? '' : basePath);
        asPath = destRes.parsedDestination.pathname;
        Object.assign(query, destRes.parsedDestination.query);

        if (pages.includes((0, _normalizeTrailingSlash.removePathTrailingSlash)(asPath))) {
          // check if we now match a page as this means we are done
          // resolving the rewrites
          break;
        } // check if we match a dynamic-route, if so we break the rewrites chain


        const resolvedHref = resolveHref(asPath);

        if (resolvedHref !== asPath && pages.includes(resolvedHref)) {
          break;
        }
      }
    }
  }

  return asPath;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__(/*! ./router/utils/format-url */ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (true) {
    var _App$prototype;

    if ((_App$prototype = App.prototype) == null ? void 0 : _App$prototype.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/vercel/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/vercel/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "./node_modules/next/dist/next-server/server/denormalize-page-path.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/server/denormalize-page-path.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js":
/*!*************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/node_modules/react-is/cjs/react-is.development.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/next/node_modules/react-is/cjs/react-is.development.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}


/***/ }),

/***/ "./node_modules/next/node_modules/react-is/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/next/node_modules/react-is/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/next/node_modules/react-is/cjs/react-is.development.js");
}


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
/* harmony import */ var _src_components_layout_index_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../src/components/layout/index.css */ "./src/components/layout/index.css");
/* harmony import */ var _src_components_layout_index_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_src_components_layout_index_css__WEBPACK_IMPORTED_MODULE_10__);
var _jsxFileName = "E:\\sygefexMui\\sygefexMui-frontend\\pages\\_app.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }













const MyApp = props => {
  const {
    Component,
    pageProps,
    apollo
  } = props;
  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");

    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  }, "My page"), __jsx("meta", {
    name: "viewport",
    content: "minimum-scale=1, initial-scale=1, width=device-width",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  })), __jsx(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["ThemeProvider"], {
    theme: _theme__WEBPACK_IMPORTED_MODULE_6__["default"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }
  }, __jsx(react_apollo__WEBPACK_IMPORTED_MODULE_7__["ApolloProvider"], {
    client: apollo,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 9
    }
  }, __jsx(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_8__["ApolloProvider"], {
    client: apollo,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 11
    }
  }, __jsx(_src_components_Page__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 15
    }
  }), __jsx(Component, _extends({}, pageProps, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 15
    }
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

const theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["createMuiTheme"])({
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
var _jsxFileName = "E:\\sygefexMui\\sygefexMui-frontend\\src\\components\\Meta.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Meta = () => __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 5
  }
}, __jsx("meta", {
  name: "viewport",
  content: "width=device-width, initial-scale=1",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 9
  }
}), __jsx("meta", {
  charSet: "UTF-8",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 9
  }
}), __jsx("meta", {
  name: "viewport",
  content: "width=device-width, initial-scale=1.0",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 9
  }
}), __jsx("meta", {
  httpEquiv: "X-UA-Compatible",
  content: "ie=edge",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 9
  }
}), __jsx("link", {
  rel: "stylesheet",
  href: "/static/favicon.png",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 9
  }
}), __jsx("link", {
  rel: "stylesheet",
  href: "/static/nprogress.css",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 9
  }
}), __jsx("title", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 9
  }
}, "SYGEFEX"));

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
/* harmony import */ var _Meta__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Meta */ "./src/components/Meta.jsx");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_SygefexTheme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/SygefexTheme */ "./src/components/utils/SygefexTheme.js");
/* harmony import */ var _layout_LayoutDrawer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layout/LayoutDrawer */ "./src/components/layout/LayoutDrawer.jsx");
var _jsxFileName = "E:\\sygefexMui\\sygefexMui-frontend\\src\\components\\Page.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])({
  root: {
    display: "flex",
    flexDirection: "column"
  },
  allControls: {
    display: "flex",
    flexDirection: "column"
  },
  wholeApp: {
    display: "grid",
    // gridTemplate: "auto 1fr  ",
    background: "white"
  },
  mains: {
    gridArea: "mains",
    paddingLeft: "auto",
    display: "grid",
    gridTemplateRows: "auto 1fr",
    paddingTop: "1rem",
    paddingRight: "auto"
  },
  footers: {
    gridArea: "Footers",
    display: "grid",
    gridTemplateColumns: "1fr 4fr",
    alignItems: "right",
    gridArea: "Headers",
    position: "fixed",
    height: "1rem",
    zIndex: "10",
    borderBottom: "0.2rem solid  0.1rem 0.05rem 0.5rem rgba(0, 0, 0.8, 0.5)"
  },
  inner: {
    // placeItems: "center",
    padding: "2rem"
  }
});

const Page = props => {
  const classes = useStyles();
  return __jsx(_layout_LayoutDrawer__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["MuiThemeProvider"], {
    theme: _utils_SygefexTheme__WEBPACK_IMPORTED_MODULE_3__["default"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }
  }, __jsx(_Meta__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: classes.root,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: classes.mains,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: classes.inner,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 13
    }
  }, props.children)))));
};

/* harmony default export */ __webpack_exports__["default"] = (Page);

/***/ }),

/***/ "./src/components/layout/LayoutDrawer.jsx":
/*!************************************************!*\
  !*** ./src/components/layout/LayoutDrawer.jsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _user_User__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../user/User */ "./src/components/user/User.jsx");
/* harmony import */ var _user_Signout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user/Signout */ "./src/components/user/Signout.jsx");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/AppBar */ "@material-ui/core/AppBar");
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ "@material-ui/core/CssBaseline");
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Divider */ "@material-ui/core/Divider");
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Drawer */ "@material-ui/core/Drawer");
/* harmony import */ var _material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Hidden */ "@material-ui/core/Hidden");
/* harmony import */ var _material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/Home */ "@material-ui/icons/Home");
/* harmony import */ var _material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_icons_Receipt__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/icons/Receipt */ "@material-ui/icons/Receipt");
/* harmony import */ var _material_ui_icons_Receipt__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Receipt__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_icons_Notifications__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/icons/Notifications */ "@material-ui/icons/Notifications");
/* harmony import */ var _material_ui_icons_Notifications__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Notifications__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_icons_DesktopWindows__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/icons/DesktopWindows */ "@material-ui/icons/DesktopWindows");
/* harmony import */ var _material_ui_icons_DesktopWindows__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_DesktopWindows__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_icons_Settings__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/icons/Settings */ "@material-ui/icons/Settings");
/* harmony import */ var _material_ui_icons_Settings__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Settings__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/IconButton */ "@material-ui/core/IconButton");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/icons/Menu */ "@material-ui/icons/Menu");
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/core/Toolbar */ "@material-ui/core/Toolbar");
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _Sidebar__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./Sidebar */ "./src/components/layout/Sidebar.jsx");
var _jsxFileName = "E:\\sygefexMui\\sygefexMui-frontend\\src\\components\\layout\\LayoutDrawer.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






















const drawerWidth = 370;
const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_20__["makeStyles"])(theme => ({
  root: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0
    }
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1 // [theme.breakpoints.up("sm")]: {
    //   width: `calc(100% - ${drawerWidth}px)`,
    //   marginLeft: drawerWidth,
    // },

  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none"
    }
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  },
  userName: {
    alignItems: "center"
  }
}));
const items = ["divider", {
  url: "../../login",
  name: "home",
  label: "Home",
  Icon: _material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_10___default.a
}, "divider", {
  // url: "../../creates/newRegion",
  name: "administration",
  label: "Administration",
  Icon: _material_ui_icons_Receipt__WEBPACK_IMPORTED_MODULE_11___default.a,
  items: [{
    // url: "../../show/results/candCodeResults",
    name: "Results",
    label: "Resultats Centre",
    items: [{
      url: "../../creates/newCES",
      name: "centerGenResults",
      label: "General par centre"
    }, {
      url: "../../creates/newCESS",
      name: "candResults",
      label: "Candidat Individuel"
    }]
  }, {
    // url: "../../show/results/candCodeResults",
    name: "localization",
    label: "Info Localization",
    items: [{
      url: "../../show/lists/allRegions",
      name: "regionList",
      label: "Region"
    }, {
      url: "../../show/lists/allDivs",
      name: "divisionList",
      label: "Departement"
    }, {
      url: "../../show/lists/allSubDivs",
      name: "subDivList",
      label: "Arrondissement"
    }, {
      url: "../../show/lists/allTown",
      name: "townList",
      label: "Ville"
    }, {
      url: "../../show/lists/allCenters",
      name: "centerList",
      label: "Centre"
    }, {
      url: "../../show/lists/centerInfo",
      name: "centerListDetails",
      label: "Details Centre "
    }]
  }, {
    // url: "../../show/results/candCodeResults",
    name: "SubjSeries",
    label: "Series & Matieres",
    items: [{
      url: "../../creates/newEducType",
      name: "educType",
      label: "Type d'enseignement"
    }, {
      url: "../../creates/newSubject",
      name: "specialty",
      label: "Series"
    }, {
      url: "../../creates/newSubject",
      name: "subject",
      label: "Matiere"
    }, {
      url: "../../creates/newCES",
      name: "SubjectsToSpecialty",
      label: "Matieres des series"
    }]
  }, {
    // url: "../../show/results/candCodeResults",
    name: "PhasesExamen",
    label: "Phases Examen",
    items: [{
      url: "../../creates/newPhase",
      name: "examStages",
      label: "Phase"
    }, {
      url: "../../creates/newRank",
      name: "rank",
      label: "Poste"
    }, {
      url: "../../creates/newSubject",
      name: "subject",
      label: "Matiere"
    }, {
      url: "../../creates/newCES",
      name: "SubjectsToSpecialty",
      label: "Matieres des series"
    }]
  }, {
    // url: "../../show/results/candCodeResults",
    name: "others",
    label: "Autres",
    items: [{
      url: "../../creates/newExam",
      name: "exams",
      label: "Examen"
    }, {
      url: "../../creates/newSession",
      name: "session",
      label: "Session"
    }, {
      url: "../../creates/newExaminer",
      name: "examiner",
      label: "Examinateur"
    }, {
      url: "../../creates/newCES",
      name: "SubjectsToSpecialty",
      label: "Matieres des series"
    }]
  }, {
    // url: "../../show/results/candCodeResults",
    name: "center",
    label: "Centre",
    items: [{
      url: "../../creates/newRegister",
      name: "candidateAttendance",
      label: "Region"
    }, {
      url: "../../creates/newRegister",
      name: "centerCandSecretCodes",
      label: "Listes des Anonymats"
    }]
  }, {
    // url: "../../show/results/candCodeResults",
    name: "MarkingPahse",
    label: "Correction",
    items: [{
      url: "../../creates/enterMarks",
      name: "candidateAMarks",
      label: "Notes des candidats"
    }, {
      url: "../../creates/newRegister",
      name: "centerCandSecretCodes",
      label: "Listes des Anonymats"
    }]
  }]
}, "divider", {
  // url: "../../creates/newRegion",
  name: "centreManagement",
  label: "Centre d'examen",
  Icon: _material_ui_icons_Receipt__WEBPACK_IMPORTED_MODULE_11___default.a,
  items: [{
    // url: "../../creates/newRegion",
    name: "examStages",
    label: "Phases de l'examen",
    items: [{
      // url: "../../show/results/candCodeResults",
      name: "centerExamPreps",
      label: "Preparation",
      items: [{
        url: "../../creates/newCES",
        name: "registerCenterForExams",
        label: "Inscrire centre aux examens"
      }, {
        url: "../../creates/newCESS",
        name: "Specialties",
        label: "Series offertes par centre"
      }, {
        url: "../../creates/newGroupCand",
        name: "candidate",
        label: "Renseignement Candidats"
      }]
    }, {
      // url: "../../show/results/candCodeResults",
      name: "centerExamRegistration",
      label: "Inscription",
      items: [{
        url: "../../creates/newRegister",
        name: "registerCandidates",
        label: "Inscrire Candidats aux examens"
      }, {
        url: "../../show/registeredCands",
        name: "registerCandidates",
        label: "Liste des candidats inscrits"
      }, {
        url: "../../show/registeredCands",
        name: "registerCandidates",
        label: "Details des candidats inscrits"
      }]
    }, {
      // url: "../../show/results/candCodeResults",
      name: "WritenPahse",
      label: "Ecrite",
      items: [{
        url: "../../creates/newAttendance",
        name: "candidateAttendance",
        label: "Presence aux epreuves"
      }, {
        url: "../../creates/newRegister",
        name: "centerCandSecretCodes",
        label: "Listes des Anonymats"
      }]
    }, {
      // url: "../../show/results/candCodeResults",
      name: "MarkingPahse",
      label: "Correction",
      items: [{
        url: "../../creates/newMarks",
        name: "candidateAMarks",
        label: "Notes des candidats"
      }, {
        url: "../../creates/newRegister",
        name: "centerCandSecretCodes",
        label: "Listes des Anonymats"
      }]
    }, {
      name: "resultsPahse",
      label: "Resultats",
      items: [{
        url: "../../show/genCenterResults",
        name: "generalCenterResults",
        label: "Généraux"
      }, {
        url: "../../show/results/candidateResults/resultsByCandRegNo",
        name: "candREgNoResults",
        label: "Personel"
      }]
    }]
  }]
}, "divider", {
  // url: "../../creates/newRegion",
  name: "candidateManagement",
  label: "Candidat",
  Icon: _material_ui_icons_Receipt__WEBPACK_IMPORTED_MODULE_11___default.a,
  items: [{
    url: "../../creates/newGroupCand",
    name: "candidateInfomation",
    label: "Reseignement Candidat"
  }, {
    url: "../../creates/newGroupCand",
    name: "registerCandidateForExams",
    label: "S'iInscrire aux examens"
  }, {
    url: "../../show/results/candidateResults/allResultsByCandCode",
    name: "candCodeResults",
    label: "Resultat candidat"
  }]
}, "divider", {
  // url: "../../creates/newExaminer",
  name: "Examiner",
  label: "Examinateur",
  Icon: _material_ui_icons_Receipt__WEBPACK_IMPORTED_MODULE_11___default.a,
  items: [{
    // url: "../../creates/newExaminer",
    name: "examiner",
    label: "Renseignement",
    items: [{
      url: "../../creates/newExaminer",
      name: "createExaminer",
      label: "Cree Examinateur"
    }, {
      url: "../../modify/modifyExaminer",
      name: "modifierExaminer",
      label: "Modifier Examinateur"
    }]
  }, {
    // url: "../../creates/newCenterExaminer",
    name: "registerExaminer",
    label: "Inscription",
    items: [{
      url: "../../creates/newCenterExaminer",
      name: "centerExaminer",
      label: "S'inscrire au Centre"
    }, {
      url: "../../modify/modifyDivision",
      name: "modifierDivision",
      label: "Examinateur"
    }, {
      url: "../../creates/newReport",
      name: "examinerReport",
      label: "Rapport "
    }]
  }, {
    url: "../../creates/newReport",
    name: "examinerReport",
    label: "Rapport ",
    items: [{
      url: "../../creates/newRegion",
      label: "Cree Region"
    }, {
      url: "../../modify/modifyRegion",
      name: "modifierRegion",
      label: "Modification"
    }]
  }, {
    url: "../../creates/newTown",
    name: "town",
    label: "Town",
    items: [{
      url: "../../creates/newRegion",
      label: "Cree Region"
    }, {
      url: "../../modify/modifyRegion",
      name: "modifierRegion",
      label: "Modification"
    }]
  }]
}, "divider", {
  url: "../../creates/newCenter",
  name: "settings",
  label: "Settings",
  Icon: _material_ui_icons_Settings__WEBPACK_IMPORTED_MODULE_14___default.a,
  items: [{
    url: "../../creates/newCenter",
    name: "profile",
    label: "Profile"
  }, {
    url: "../../creates/newCenter",
    name: "insurance",
    label: "Insurance"
  }, "divider", {
    url: "../../creates/newCenter",
    name: "notifications",
    label: "Notifications",
    Icon: _material_ui_icons_Notifications__WEBPACK_IMPORTED_MODULE_12___default.a,
    items: [{
      url: "../../creates/newCenter",
      name: "email",
      label: "Email"
    }, {
      url: "../../creates/newCenter",
      name: "desktop",
      label: "Desktop",
      Icon: _material_ui_icons_DesktopWindows__WEBPACK_IMPORTED_MODULE_13___default.a,
      items: [{
        url: "../../creates/newCenter",
        name: "schedule",
        label: "Schedule"
      }, {
        url: "../../creates/newCenter",
        name: "frequency",
        label: "Frequency"
      }]
    }, {
      url: "../../creates/newCenter",
      name: "sms",
      label: "SMS"
    }]
  }]
}];

const LayoutDrawer = props => {
  const {
    window,
    children
  } = props;
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = // <div style={{ backgroundColor: "#044562", color: "#000" }}>
  // <div style={{ backgroundColor: "#abb", color: "#000" }}>
  // <div style={{ backgroundColor: "#a7beae", color: "#722620" }}>
  __jsx("div", {
    style: {
      backgroundColor: "#829079",
      color: "#ede6b9"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 519,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: classes.toolbar,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 520,
      columnNumber: 7
    }
  }), __jsx(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_6___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 521,
      columnNumber: 7
    }
  }), __jsx(_Sidebar__WEBPACK_IMPORTED_MODULE_21__["default"], {
    items: items,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 522,
      columnNumber: 7
    }
  }));

  const container = window !== undefined ? () => window().document.body : undefined;
  return __jsx("div", {
    className: classes.root,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 528,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 529,
      columnNumber: 7
    }
  }), __jsx(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_4___default.a // style={{ backgroundColor: "#64725b",color:"#ede6b9" }}
  // style={{ backgroundColor: "#fff", color: "#000" }}
  , {
    style: {
      backgroundColor: "#b9925e",
      color: "#ede6b9"
    },
    position: "fixed",
    className: classes.appBar,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 530,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_18___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 537,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7___default.a, {
    container: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 538,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7___default.a, {
    item: true,
    xs: 6,
    sm: 9,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 539,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_15___default.a, {
    color: "inherit",
    "aria-label": "open drawer",
    edge: "start",
    onClick: handleDrawerToggle,
    className: classes.menuButton,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 540,
      columnNumber: 15
    }
  }, __jsx(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_17___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 547,
      columnNumber: 17
    }
  })), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_19___default.a, {
    variant: "h6",
    component: "h5",
    noWrap: true,
    style: {
      color: "#ede6b9"
    } // color="textSecondary"
    //  color="textPrimary"
    ,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 550,
      columnNumber: 15
    }
  }, "Sygefex-OBC")), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7___default.a, {
    className: classes.userName,
    item: true,
    xs: 6,
    sm: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 561,
      columnNumber: 13
    }
  }, __jsx(_user_User__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 562,
      columnNumber: 15
    }
  }, ({
    data: {
      me
    }
  }) => __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 564,
      columnNumber: 19
    }
  }, me ? __jsx("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gridGap: "1rem"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 566,
      columnNumber: 23
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_19___default.a, {
    style: {
      display: "grid",
      placeItems: "center"
    },
    variant: "body1",
    component: "h5",
    noWrap: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 573,
      columnNumber: 25
    }
  }, me.name), __jsx(_user_Signout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 584,
      columnNumber: 25
    }
  })) : __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "../../creates/login",
    passHref: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 587,
      columnNumber: 23
    }
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_16___default.a, {
    variant: "outlined",
    component: "a",
    style: {
      backgroundColor: "#829079",
      color: "#ede6b9",
      textTransform: "none"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 588,
      columnNumber: 25
    }
  }, "Connexion")))))))), __jsx("nav", {
    className: classes.drawer,
    "aria-label": "mailbox folders",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 608,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_9___default.a, {
    smUp: true,
    implementation: "css",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 610,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_8___default.a, {
    container: container,
    variant: "temporary",
    open: mobileOpen,
    onClose: handleDrawerToggle,
    classes: {
      paper: classes.drawerPaper
    },
    ModalProps: {
      keepMounted: true // Better open performance on mobile.

    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 611,
      columnNumber: 11
    }
  }, drawer)), __jsx(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_9___default.a, {
    xsDown: true,
    implementation: "css",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 626,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_8___default.a, {
    classes: {
      paper: classes.drawerPaper
    },
    variant: "permanent",
    open: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 627,
      columnNumber: 11
    }
  }, drawer))), __jsx("main", {
    className: classes.content,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 638,
      columnNumber: 7
    }
  }, children));
};

/* harmony default export */ __webpack_exports__["default"] = (LayoutDrawer);

/***/ }),

/***/ "./src/components/layout/Sidebar.jsx":
/*!*******************************************!*\
  !*** ./src/components/layout/Sidebar.jsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/List */ "@material-ui/core/List");
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/ListItem */ "@material-ui/core/ListItem");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Divider */ "@material-ui/core/Divider");
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/ExpandMore */ "@material-ui/icons/ExpandMore");
/* harmony import */ var _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_icons_ExpandLess__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/ExpandLess */ "@material-ui/icons/ExpandLess");
/* harmony import */ var _material_ui_icons_ExpandLess__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ExpandLess__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_Collapse__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Collapse */ "@material-ui/core/Collapse");
/* harmony import */ var _material_ui_core_Collapse__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Collapse__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);
var _jsxFileName = "E:\\sygefexMui\\sygefexMui-frontend\\src\\components\\layout\\Sidebar.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }











const SidebarItem = (_ref) => {
  let {
    depthStep = 15,
    depth = 0,
    expanded,
    item
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["depthStep", "depth", "expanded", "item"]);

  const [collapsed, setCollapsed] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(true);
  const {
    url,
    label,
    items,
    Icon,
    onClick: onClickProp
  } = item;

  const toggleCollapse = () => {
    setCollapsed(prevValue => !prevValue);
  };

  const onClick = e => {
    if (Array.isArray(items)) {
      toggleCollapse();
    }

    if (onClickProp) {
      onClickProp(e, item);
    }
  };

  let expandIcon;

  if (Array.isArray(items) && items.length) {
    expandIcon = !collapsed ? __jsx(_material_ui_icons_ExpandLess__WEBPACK_IMPORTED_MODULE_6___default.a, {
      className: "sidebar-item-expand-arrow" + " sidebar-item-expand-arrow-expanded",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 7
      }
    }) : __jsx(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_5___default.a, {
      className: "sidebar-item-expand-arrow",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 7
      }
    });
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
    href: url ? url : "",
    passHref: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_2___default.a, _extends({
    className: "sidebar-item",
    onClick: onClick,
    button: true,
    component: "a",
    dense: true
  }, rest, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 9
    }
  }), __jsx("div", {
    style: {
      paddingLeft: depth * depthStep
    },
    className: "sidebar-item-content",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 11
    }
  }, Icon && __jsx(Icon, {
    className: "sidebar-item-icon",
    fontSize: "small",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 22
    }
  }), __jsx("div", {
    className: "sidebar-item-text",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default.a, {
    variant: "body2",
    component: "h1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 15
    }
  }, label))), expandIcon)), __jsx(_material_ui_core_Collapse__WEBPACK_IMPORTED_MODULE_7___default.a, {
    in: !collapsed,
    timeout: "auto",
    unmountOnExit: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 7
    }
  }, Array.isArray(items) ? __jsx(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_1___default.a, {
    disablePadding: true,
    dense: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 11
    }
  }, items.map((subItem, index) => __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    key: `${subItem.name}${index}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 15
    }
  }, subItem === "divider" ? __jsx(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_4___default.a, {
    style: {
      margin: "6px 0"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 19
    }
  }) : __jsx(SidebarItem, {
    depth: depth + 2,
    depthStep: depthStep,
    item: subItem,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 19
    }
  })))) : null));
};

const Sidebar = ({
  items,
  depthStep,
  depth,
  expanded
}) => {
  return __jsx("div", {
    className: "sidebar",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_1___default.a, {
    disablePadding: true,
    dense: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 7
    }
  }, items.map((sidebarItem, index) => __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    key: `${sidebarItem.name}${index}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 11
    }
  }, sidebarItem === "divider" ? __jsx(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_4___default.a, {
    style: {
      margin: "6px 0"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 15
    }
  }) : __jsx(SidebarItem, {
    depthStep: depthStep,
    depth: depth,
    expanded: expanded,
    item: sidebarItem,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 15
    }
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (Sidebar);

/***/ }),

/***/ "./src/components/layout/index.css":
/*!*****************************************!*\
  !*** ./src/components/layout/index.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/components/queries&Mutations&Functions/Mutations.jsx":
/*!******************************************************************!*\
  !*** ./src/components/queries&Mutations&Functions/Mutations.jsx ***!
  \******************************************************************/
/*! exports provided: createCandidateMutation, createNewSubjectMutation, createTownMutation, createCenterExamSessionExaminerMutation, createDivisionMutation, createRegistrationMutation, createCenterMutation, createEducationTypeMutation, createSpecialtyMutation, createSubDivisionMutation, createNewSessionMutation, createNewRankMutation, createNewReportMutation, createNewRegionMutation, createExamMutation, registerSubjectSpecialtyMutation, registerNewSubjectSpecialtyMutation, updateCenterMutation, updateTownMutation, updateSessionMutation, updateRegionMutation, updateExamMutation, updateSubDivisionMutation, updateCandidateMutation, updateScoreMutation, updateDivisionMutation, updateItemMutation, createExaminerMutation, createPhaseMutation, createCenterExamSessionSpecialtyMutation, updateSpecialtyMutation, updateRankMutation, createPhaseRankMutation, createNewCountryMutation, createMultipleCandidatesMutation, updateSubjectMutation, updateExaminerMutation, createCenterExamSessionMutation, updateEducationTypeMutation, createAttendanceMutation, signInCandidate, loginUserMutation, updateSignUpMutation, signupUserMutation, deleteSubjectMutation, deleteRegionMutation, deleteCenterMutation, signoutMutation, enterMarksMutation, deleteReportMutation, deleteTownMutation, deleteDivisionMutation, deleteSubDivisionMutation, requestResetMutation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCandidateMutation", function() { return createCandidateMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createNewSubjectMutation", function() { return createNewSubjectMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTownMutation", function() { return createTownMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCenterExamSessionExaminerMutation", function() { return createCenterExamSessionExaminerMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createDivisionMutation", function() { return createDivisionMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createRegistrationMutation", function() { return createRegistrationMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCenterMutation", function() { return createCenterMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createEducationTypeMutation", function() { return createEducationTypeMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSpecialtyMutation", function() { return createSpecialtyMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSubDivisionMutation", function() { return createSubDivisionMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createNewSessionMutation", function() { return createNewSessionMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createNewRankMutation", function() { return createNewRankMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createNewReportMutation", function() { return createNewReportMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createNewRegionMutation", function() { return createNewRegionMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createExamMutation", function() { return createExamMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerSubjectSpecialtyMutation", function() { return registerSubjectSpecialtyMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerNewSubjectSpecialtyMutation", function() { return registerNewSubjectSpecialtyMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateCenterMutation", function() { return updateCenterMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateTownMutation", function() { return updateTownMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateSessionMutation", function() { return updateSessionMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateRegionMutation", function() { return updateRegionMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateExamMutation", function() { return updateExamMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateSubDivisionMutation", function() { return updateSubDivisionMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateCandidateMutation", function() { return updateCandidateMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateScoreMutation", function() { return updateScoreMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateDivisionMutation", function() { return updateDivisionMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateItemMutation", function() { return updateItemMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createExaminerMutation", function() { return createExaminerMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPhaseMutation", function() { return createPhaseMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCenterExamSessionSpecialtyMutation", function() { return createCenterExamSessionSpecialtyMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateSpecialtyMutation", function() { return updateSpecialtyMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateRankMutation", function() { return updateRankMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPhaseRankMutation", function() { return createPhaseRankMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createNewCountryMutation", function() { return createNewCountryMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createMultipleCandidatesMutation", function() { return createMultipleCandidatesMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateSubjectMutation", function() { return updateSubjectMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateExaminerMutation", function() { return updateExaminerMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCenterExamSessionMutation", function() { return createCenterExamSessionMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateEducationTypeMutation", function() { return updateEducationTypeMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createAttendanceMutation", function() { return createAttendanceMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signInCandidate", function() { return signInCandidate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginUserMutation", function() { return loginUserMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateSignUpMutation", function() { return updateSignUpMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signupUserMutation", function() { return signupUserMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteSubjectMutation", function() { return deleteSubjectMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteRegionMutation", function() { return deleteRegionMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteCenterMutation", function() { return deleteCenterMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signoutMutation", function() { return signoutMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enterMarksMutation", function() { return enterMarksMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteReportMutation", function() { return deleteReportMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteTownMutation", function() { return deleteTownMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteDivisionMutation", function() { return deleteDivisionMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteSubDivisionMutation", function() { return deleteSubDivisionMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "requestResetMutation", function() { return requestResetMutation; });
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


 //************create mutations  */

const signInCandidate = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  mutation signInCandidate($candCode: String!) {
    candidateSignIn(candCode: $candCode) {
      id
      cand1stName
    }
  }
`; //

const signoutMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  mutation signoutMutation {
    signout {
      message
    }
  }
`;
const deleteReportMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  mutation deleteReportMutation($id: ID!) {
    deleteReport(id: $id) {
      id
    }
  }
`;
const updateSessionMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  mutation updateSessionMutation(
    $id: ID!
    $sessionName: String
    $sessionCode: String
  ) {
    updateSession(
      id: $id
      sessionName: $sessionName
      sessionCode: $sessionCode
    ) {
      sessionName
      sessionCode
      id
    }
  }
`;
const updateEducationTypeMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  mutation updateEducationTypeMutation(
    $id: ID!
    $educationTypeName: String
    $educationTypeCode: String
  ) {
    updateEducationType(
      id: $id
      educationTypeName: $educationTypeName
      educationTypeCode: $educationTypeCode
    ) {
      id
      educationTypeName
      educationTypeCode
    }
  }
`;
const updateSubjectMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  mutation updateSubjectMutation(
    $id: ID!
    $subjectName: String
    $subjectCode: String
  ) {
    updateSubject(
      id: $id
      subjectName: $subjectName
      subjectCode: $subjectCode
    ) {
      subjectName
      subjectCode
      id
    }
  }
`;
const updateRankMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  mutation updateRankMutation($id: ID!, $rankName: String, $rankCode: String) {
    updateRank(id: $id, rankName: $rankName, rankCode: $rankCode) {
      id
      rankName
      rankCode
    }
  }
`;
const updateSpecialtyMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  mutation updateSpecialtyMutation(
    $id: ID!
    $specialtyName: String
    $specialtyCode: String
  ) {
    updateSpecialty(
      id: $id
      specialtyName: $specialtyName
      specialtyCode: $specialtyCode
    ) {
      specialtyName
      specialtyCode
      id
    }
  }
`;
const updateDivisionMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  mutation updateDivisionMutation(
    $id: ID!
    $divName: String
    $divCode: String
  ) {
    updateDivision(id: $id, divName: $divName, divCode: $divCode) {
      id
      divName
      divCode
    }
  }
`;
const updateRegionMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  mutation updateRegionMutation($id: ID!, $regName: String, $regCode: String) {
    updateRegion(id: $id, regName: $regName, regCode: $regCode) {
      id
      regName
      regCode
    }
  }
`;
const createNewReportMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  mutation createNewReportMutation(
    $reportImage: String!
    $reportName: String!
    $centerExamSessionExaminer: CenterExamSessionExaminerWhereUniqueInput!
  ) {
    createReport(
      reportImage: $reportImage
      reportName: $reportName
      centerExamSessionExaminer: $centerExamSessionExaminer
    ) {
      id
      reportName
      reportImage
    }
  }
`;
const createRegistrationMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  mutation createRegistrationMutation(
    $candidate: CandidateWhereUniqueInput!
    $candExamSession: String!
    $candRegistrationNumber: String!
    $centerExamSession: CenterExamSessionWhereUniqueInput!
    $centerExamSessionSpecialty: CenterExamSessionSpecialtyWhereUniqueInput!
    $specialty: SpecialtyWhereUniqueInput!
    $aptitude: String!
    $EPF1: String!
    $EPF2: String!
  ) {
    createRegistration(
      candidate: $candidate
      candExamSession: $candExamSession
      candRegistrationNumber: $candRegistrationNumber
      centerExamSession: $centerExamSession
      centerExamSessionSpecialty: $centerExamSessionSpecialty
      specialty: $specialty
      EPF1: $EPF1
      EPF2: $EPF2
      aptitude: $aptitude
    ) {
      id
      centerExamSession {
        id
        center {
          id
          centerName
        }
      }
      candidate {
        id
        cand1stName
      }
    }
  }
`;
const createCenterExamSessionMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  mutation createCenterExamSessionMutation(
    $examSession: ExamSessionWhereUniqueInput!
    $center: CenterWhereUniqueInput!
  ) {
    createCenterExamSession(examSession: $examSession, center: $center) {
      id
    }
  }
`;
const createPhaseRankMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  mutation createPhaseRankMutation(
    $phase: PhaseWhereUniqueInput!
    $rank: RankWhereUniqueInput!
  ) {
    createPhaseRank(phase: $phase, rank: $rank) {
      id
    }
  }
`;
const createCenterExamSessionExaminerMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  mutation createCenterExamSessionExaminerMutation(
    $centerExamSession: CenterExamSessionWhereUniqueInput!
    $examiner: ExaminerWhereUniqueInput!
    $phaseRank: PhaseRankWhereUniqueInput!
  ) {
    createCenterExamSessionExaminer(
      phaseRank: $phaseRank
      centerExamSession: $centerExamSession
      examiner: $examiner
    ) {
      id
    }
  }
`;
const createCenterExamSessionSpecialtyMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  mutation createCenterExamSessionSpecialtyMutation(
    $specialty: SpecialtyWhereUniqueInput!
    $centerExamSession: CenterExamSessionWhereUniqueInput!
  ) {
    createCenterExamSessionSpecialty(
      specialty: $specialty
      centerExamSession: $centerExamSession
    ) {
      id
    }
  }
`;
const createDivisionMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  mutation createDivisionMutation(
    $divName: String!
    $divCode: String!
    $region: RegionWhereUniqueInput!
  ) {
    createDivision(divName: $divName, divCode: $divCode, region: $region) {
      id
      divName
    }
  }
`;
const createCenterMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  mutation createCenterMutation(
    $centerName: String!
    $centerNumber: Int
    $centerCode: String!
    $town: TownWhereUniqueInput!
  ) {
    createCenter(
      centerName: $centerName
      centerNumber: $centerNumber
      centerCode: $centerCode
      town: $town
    ) {
      id
      centerName
      centerSecretCode
      centerCode
      town {
        townName
      }
    }
  }
`;
const createSpecialtyMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  mutation createSpecialtyMutation(
    $specialtyName: String!
    $specialtyCode: String!
    $educationType: EducationTypeWhereUniqueInput!
  ) {
    createSpecialty(
      specialtyName: $specialtyName
      specialtyCode: $specialtyCode
      educationType: $educationType
    ) {
      id
      specialtyName
    }
  }
`;
const createEducationTypeMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  mutation createEducationTypeMutation(
    $educationTypeName: String!
    $educationTypeCode: String!
  ) {
    createEducationType(
      educationTypeName: $educationTypeName
      educationTypeCode: $educationTypeCode
    ) {
      id
      educationTypeName
    }
  }
`;
const createTownMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  mutation createTownMutation(
    $townName: String!
    $townCode: String!
    $subDiv: SubDivisionWhereUniqueInput!
  ) {
    createTown(townName: $townName, townCode: $townCode, subDiv: $subDiv) {
      id
      townName
      townCode
      subDiv {
        subDivName
      }
    }
  }
`;
const createNewSubjectMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  mutation createNewSubjectMutation(
    $subjectName: String!
    $subjectCode: String!
    $subjectType: String!
    $subjectGroup: String!
    $educType: EducationTypeWhereUniqueInput!
  ) {
    createSubject(
      subjectName: $subjectName
      educType: $educType
      subjectCode: $subjectCode
      subjectType: $subjectType
      subjectGroup: $subjectGroup
    ) {
      subjectCode
      subjectName
      subjectType
      subjectGroup
    }
  }
`;
const createSubDivisionMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  mutation createSubDivisionMutation(
    $subDivName: String!
    $subDivCode: String!
    $division: DivisionWhereUniqueInput!
  ) {
    createSubDivision(
      subDivName: $subDivName
      subDivCode: $subDivCode
      division: $division
    ) {
      id
      subDivName
      subDivCode
    }
  }
`;
const createNewSessionMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  mutation createNewSessionMutation(
    $sessionName: String!
    $sessionCode: String!
  ) {
    createSession(sessionName: $sessionName, sessionCode: $sessionCode) {
      id
      sessionName
    }
  }
`;
const createNewRankMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  mutation createNewRankMutation($rankName: String!, $rankCode: String!) {
    createRank(rankName: $rankName, rankCode: $rankCode) {
      id
      rankName
    }
  }
`;
const createNewRegionMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  mutation createNewRegionMutation($regName: String!, $regCode: String!) {
    createRegion(regName: $regName, regCode: $regCode) {
      id
      regName
    }
  }
`;
const signupUserMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  mutation signupUserMutation(
    $name: String!
    $email: String!
    $password: String!
  ) {
    signup(password: $password, name: $name, email: $email) {
      id
      name
      email
    }
  }
`;
const loginUserMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  mutation loginUserMutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      id
      name
      email
      password
      permissions
    }
  }
`;
const requestResetMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  mutation requestResetMutation($email: String!) {
    requestReset(email: $email) {
      message
    }
  }
`;
const createNewCountryMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  mutation createNewCountryMutation(
    $countryName: String!
    $countryCode: String!
  ) {
    createCountry(countryName: $countryName, countryCode: $countryCode) {
      id
      countryName
      countryCode
    }
  }
`;
const createPhaseMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  mutation createPhaseMutation($phaseName: String!, $phaseCode: String!) {
    createPhase(phaseName: $phaseName, phaseCode: $phaseCode) {
      id
      phaseName
    }
  }
`;
const createAttendanceMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  mutation createAttendanceMutation(
    $subjectSpecialty: SubjectSpecialtyWhereUniqueInput!
    $centerExamSessionSpecialty: CenterExamSessionSpecialtyWhereUniqueInput!
    $collected: String!
    $candExamSecretCode: String!
    $handin: String!
  ) {
    createAttendance(
      subjectSpecialty: $subjectSpecialty
      centerExamSessionSpecialty: $centerExamSessionSpecialty
      collected: $collected
      candExamSecretCode: $candExamSecretCode
      handin: $handin
    ) {
      id
    }
  }
`;
const createExamMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  mutation createExamMutation($examName: String!, $examCode: String!) {
    createExam(examName: $examName, examCode: $examCode) {
      id
      examName
    }
  }
`;
const registerSubjectSpecialtyMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  mutation registerSubjectSpecialtyMutation(
    $subject: SubjectWhereUniqueInput!
    $specialty: SpecialtyWhereUniqueInput!
    $coeff: Int!
  ) {
    createSubjectSpecialty(
      subject: $subject
      specialty: $specialty
      coeff: $coeff
    ) {
      id
      specialty {
        id
        specialtyName
        subjectSpecialty {
          id
          subject {
            id
            subjectName
          }
        }
      }
    }
  }
`;
const registerNewSubjectSpecialtyMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  mutation registerNewSubjectSpecialtyMutation(
    $specialty: SpecialtyWhereUniqueInput!
    $subject: SubjectWhereUniqueInput!
    $coeff: Int!
  ) {
    createSubjectSpecialty(
      specialty: $specialty
      subject: $subject
      coeff: $coeff
    ) {
      id
      specialty {
        id
        specialtyName
      }
    }
  }
`;
const createCandidateMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  mutation createCandidateMutation(
    $cand1stName: String!
    $cand2ndName: String
    $cand3rdName: String
    $dadName: String
    $momName: String
    $email: String!
    $image: String!
    $phoneNumb: Int
    $dateOfBirth: DateTime
    $birthCertNumber: String
    $placeOfBirth: String
    $gender: String!
  ) {
    createCandidate(
      cand1stName: $cand1stName
      cand2ndName: $cand2ndName
      dadName: $dadName
      momName: $momName
      cand3rdName: $cand3rdName
      email: $email
      image: $image
      phoneNumb: $phoneNumb
      dateOfBirth: $dateOfBirth
      birthCertNumber: $birthCertNumber
      placeOfBirth: $placeOfBirth
      gender: $gender
    ) {
      id
      cand1stName
      cand2ndName
      cand3rdName
      momName
      dadName
      candCode
      birthCertNumber
      dateOfBirth
      image
    }
  }
`;
const createMultipleCandidatesMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  mutation createMultipleCandidatesMutation(
    $cand1stName: String!
    $cand2ndName: String
    $cand3rdName: String
    $dadName: String
    $momName: String
    $email: String!
    $image: String!
    $phoneNumb: Int
    $dateOfBirth: DateTime
    $birthCertNumber: String
    $placeOfBirth: String
    $gender: String!
  ) {
    createMultipleCandidates(
      cand1stName: $cand1stName
      cand2ndName: $cand2ndName
      dadName: $dadName
      momName: $momName
      cand3rdName: $cand3rdName
      email: $email
      image: $image
      phoneNumb: $phoneNumb
      dateOfBirth: $dateOfBirth
      birthCertNumber: $birthCertNumber
      placeOfBirth: $placeOfBirth
      gender: $gender
    ) {
      id
      cand1stName
      cand2ndName
      cand3rdName
      momName
      dadName
      candCode
      gender
      birthCertNumber
      dateOfBirth
      image
    }
  }
`;
const createExaminerMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  mutation createExaminerMutation(
    $examiner1stName: String!
    $examiner2ndName: String!
    $examinerOtherNames: String
    $examinerEmail: String!
    $examinerCNI: String!
    $examinerMatricule: String!
    $examinerImage: String!
    $examinerPhone: Int!
    $gender: String!
  ) {
    createExaminer(
      examiner1stName: $examiner1stName
      examiner2ndName: $examiner2ndName
      examinerOtherNames: $examinerOtherNames
      examinerMatricule: $examinerMatricule
      examinerCNI: $examinerCNI
      examinerEmail: $examinerEmail
      examinerImage: $examinerImage
      examinerPhone: $examinerPhone
      gender: $gender
    ) {
      id
      examiner1stName
      examiner2ndName
      examinerOtherNames
      examinerCode
      examinerEmail
      examinerImage
      examinerPhone
    }
  }
`; //************create mutations  */
////**************Update mutations */

const updateSubDivisionMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  mutation updateSubDivisionMutation(
    $id: ID!
    $subDivName: String
    $subDivCode: String
  ) {
    updateSubDivision(
      id: $id
      subDivName: $subDivName
      subDivCode: $subDivCode
    ) {
      subDivName
      subDivCode
      id
    }
  }
`;
const updateCenterMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  mutation updateCenterMutation(
    $id: ID!
    $centerName: String
    $centerCode: String
    $centerNumber: Int
  ) {
    updateCenter(
      id: $id
      centerName: $centerName
      centerCode: $centerCode
      centerNumber: $centerNumber
    ) {
      id
      centerName
      centerNumber
      centerCode
    }
  }
`;
const updateTownMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  mutation updateTownMutation($id: ID!, $townName: String, $townCode: String) {
    updateTown(id: $id, townName: $townName, townCode: $townCode) {
      townName
      townCode
      id
    }
  }
`;
const updateExamMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  mutation updateExamMutation($id: ID!, $examName: String, $examCode: String) {
    updateExam(id: $id, examName: $examName, examCode: $examCode) {
      examName
      examCode
      id
    }
  }
`;
const updateScoreMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  mutation updateScoreMutation(
    $subjectSpecialty: SubjectSpecialtyWhereUniqueInput!
    $subjectAve: Float!
    $candExamSecretCode: String!
  ) {
    updateScore(
      subjectSpecialty: $subjectSpecialty
      subjectAve: $subjectAve
      candExamSecretCode: $candExamSecretCode
    ) {
      subjectAve
      coeff
      id
      subjectSpecialty {
        id
        subjectCode
        subjectName
      }
    }
  }
`;
const enterMarksMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  mutation enterMarksMutation(
    $subjectSpecialty: SubjectSpecialtyWhereUniqueInput!
    $subjectAve: Float!
    $candExamSecretCode: String!
  ) {
    enterMarks(
      subjectSpecialty: $subjectSpecialty
      subjectAve: $subjectAve
      candExamSecretCode: $candExamSecretCode
    ) {
      subjectAve
      coeff
      id
      subjectSpecialty {
        id
      }
    }
  }
`; // const getPDFFileBuffer = gql`
// mutation getPDFFileBuffer ($url:String!){
// printPDF(url: $url){
// }
// }
// `;

const updateCandidateMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  mutation updateCandidateMutation(
    $id: ID!
    $cand1stName: String
    $cand2ndName: String
    $cand3rdName: String
    $momName: String
    $dadName: String
    $email: String
    $image: String
    $phoneNumb: Int
    $placeOfBirth: String
    $dateOfBirth: DateTime
    $birthCertNumber: String
    $gender: String
  ) {
    updateCandidate(
      id: $id
      cand1stName: $cand1stName
      cand2ndName: $cand2ndName
      cand3rdName: $cand3rdName
      momName: $momName
      dadName: $dadName
      email: $email
      image: $image
      phoneNumb: $phoneNumb
      placeOfBirth: $placeOfBirth
      dateOfBirth: $dateOfBirth
      birthCertNumber: $birthCertNumber
      gender: $gender
    ) {
      id
      cand1stName
      cand2ndName
      cand3rdName
      momName
      dadName
      email
      image
      phoneNumb
      placeOfBirth
      dateOfBirth
      birthCertNumber
      gender
    }
  }
`;
const updateExaminerMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  mutation updateExaminerMutation(
    $id: ID!
    $examiner1stName: String
    $examiner2ndName: String
    $examinerOtherNames: String
    $examinerCNI: String
    $examinerPhone: Int
    $examinerEmail: String
    $examinerImage: String
    $examinerMatricule: String
    $examinerCode: String
    $gender: String
  ) {
    updateExaminer(
      id: $id
      examiner1stName: $examiner1stName
      examiner2ndName: $examiner2ndName
      examinerOtherNames: $examinerOtherNames
      examinerCNI: $examinerCNI
      examinerPhone: $examinerPhone
      examinerEmail: $examinerEmail
      examinerMatricule: $examinerMatricule
      examinerCode: $examinerCode
      examinerImage: $examinerImage
      gender: $gender
    ) {
      id
      examiner1stName
      examiner2ndName
      examinerOtherNames
      examinerCNI
      examinerPhone
      examinerEmail
      examinerMatricule
      examinerCode
      examinerImage
      gender
    }
  }
`;
const updateSignUpMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  mutation updateSignUpMutation(
    $email: String!
    $name: String!
    $password: String!
  ) {
    updateUser(email: $email, name: $name, password: $password) {
      id
      email
      name
      password
    }
  }
`;

const updateItemMutation = async (e, updateMutation) => {
  e.preventDefault();
  console.log("Updating Region!!");
  const res = await updateMutation({
    variables: _objectSpread({
      id: undefined.props.id
    }, undefined.state)
  });
  console.log("Region Updated!!");
}; ////**************Update mutations */
/////*****************Delete Mutations */


const deleteRegionMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  mutation deleteRegionMutation($id: ID!) {
    deleteRegion(id: $id) {
      id
    }
  }
`;
const deleteCenterMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  mutation deleteCenterMutation($id: ID!) {
    deleteCenter(id: $id) {
      id
    }
  }
`;
const deleteSubDivisionMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  mutation deleteSubDivisionMutation($id: ID!) {
    deleteSubDivision(id: $id) {
      id
    }
  }
`;
const deleteDivisionMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  mutation deleteDivisionMutation($id: ID!) {
    deleteDivision(id: $id) {
      id
    }
  }
`;
const deleteSubjectMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  mutation deleteSubjectMutation($id: ID!) {
    deleteSubject(id: $id) {
      id
    }
  }
`;
const deleteTownMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  mutation deleteTownMutation($id: ID!) {
    deleteTown(id: $id) {
      id
    }
  }
`;


/***/ }),

/***/ "./src/components/queries&Mutations&Functions/Queries.jsx":
/*!****************************************************************!*\
  !*** ./src/components/queries&Mutations&Functions/Queries.jsx ***!
  \****************************************************************/
/*! exports provided: getAllSubjectSpecialtiesOfASpecialtyQuery, getAllSpecialtiesOfAnEducationTypeQuery, getAllExamsQuery, getAllSessionsQuery, getDivisionsOfARegionQuery, getAllDivisionsQuery, getSubDivisionsOfADivisionQuery, getTownsOfASubDivisionQuery, getCentersOfATownQuery, getAllEducationTypesQuery, getAllEducationTypesAndSubjectsQuery, getAllRanksQuery, getAllCandidatesQuery, getAllCentersQuery, getSingleRegionQuery, getAllSpecialtiesQuery, getAllSubDivisionsQuery, getAllSubjectsOfAnEducTypeQuery, getScoreID, singleSpecialtyQuery, getRegistrations, singleSubjectQuery, singleCandidateQuery1, getAllSubjectsWithEducTypesQuery, singleCandidateQuery, viewSingleCandidateQuery, singleCenterQuery, singleExamQuery, singleTownQuery, getAllCenterResultsQuery, singleSessionQuery, singleDivisionQuery, singleSubDivisionQuery, singleEducationTypeQuery, singleRankQuery, centerExamSessionSpecialtyForResultsQuery, getAllCandidateRegistrationIDsQuery, getCenterExamSessionSpecialtyQuery, getExamSessionQuery, getAllSpecialtiesOfACenterExamSessionQuery, getCenterResultsQuery, getCandidateRegistrationIDQuery, registrationIDFromSecretCodeQuery, getCandidateRegistrationIDsQuery, centerExamSessionForResultsQuery, resultsRegistrationQuery, getCandidateIDQuery, getASingleCenterQuery, getRegisteredCandidateCountQuery, centersPerTownQuery, getSingleCenterQuery, getCandidateResultsQuery, getCenterRegistrationIDsQuery, getCandidateByCandCodeQuery, getSingleCenterExamSessionQuery, getEachCandidateResultsQuery, getCenterIDFromCenterCodeQuery, getRegistrationIDFromRegNumberQuery, centerExamSessionSpecialtyResultsQuery, dataForAverage, getAllPhasesQuery, getAllRegionsQuery, getAllUsersQuery, singleExaminerQuery, getAllRegionsDivisionsAndTownsQuery, getAllRegionsDivisionsTownsCentersQuery, getCandidateRegistrationInfoQuery, getCESExaminerQuery, getExaminerIDQuery, getAllTownsQuery, getSpecialtyFromCESSQuery, getExaminerRegistrationQuery, getSingleProfQuery, getAllGroup1Query, getAllSubjectsQuery, getSingleCenterFromCenterSecretCodeQuery, getSingleCenterExamSessionBySecretCodeQuery, getAllGroup2Query, singleSubjectGroupQuery, getAllRegionsAndDivisionsQuery, getRegisteredCandidatesPerSpecialty, getAllSubjectGroupsQuery, getAllRanksOfAnExamPhaseQuery, getRegistrationOfCESSQuery, currentUserQuery, singlePhaseQuery, getSingleCenterByCodeQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllSubjectSpecialtiesOfASpecialtyQuery", function() { return getAllSubjectSpecialtiesOfASpecialtyQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllSpecialtiesOfAnEducationTypeQuery", function() { return getAllSpecialtiesOfAnEducationTypeQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllExamsQuery", function() { return getAllExamsQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllSessionsQuery", function() { return getAllSessionsQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDivisionsOfARegionQuery", function() { return getDivisionsOfARegionQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllDivisionsQuery", function() { return getAllDivisionsQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSubDivisionsOfADivisionQuery", function() { return getSubDivisionsOfADivisionQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTownsOfASubDivisionQuery", function() { return getTownsOfASubDivisionQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCentersOfATownQuery", function() { return getCentersOfATownQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllEducationTypesQuery", function() { return getAllEducationTypesQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllEducationTypesAndSubjectsQuery", function() { return getAllEducationTypesAndSubjectsQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllRanksQuery", function() { return getAllRanksQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllCandidatesQuery", function() { return getAllCandidatesQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllCentersQuery", function() { return getAllCentersQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSingleRegionQuery", function() { return getSingleRegionQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllSpecialtiesQuery", function() { return getAllSpecialtiesQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllSubDivisionsQuery", function() { return getAllSubDivisionsQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllSubjectsOfAnEducTypeQuery", function() { return getAllSubjectsOfAnEducTypeQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getScoreID", function() { return getScoreID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "singleSpecialtyQuery", function() { return singleSpecialtyQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRegistrations", function() { return getRegistrations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "singleSubjectQuery", function() { return singleSubjectQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "singleCandidateQuery1", function() { return singleCandidateQuery1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllSubjectsWithEducTypesQuery", function() { return getAllSubjectsWithEducTypesQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "singleCandidateQuery", function() { return singleCandidateQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "viewSingleCandidateQuery", function() { return viewSingleCandidateQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "singleCenterQuery", function() { return singleCenterQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "singleExamQuery", function() { return singleExamQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "singleTownQuery", function() { return singleTownQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllCenterResultsQuery", function() { return getAllCenterResultsQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "singleSessionQuery", function() { return singleSessionQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "singleDivisionQuery", function() { return singleDivisionQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "singleSubDivisionQuery", function() { return singleSubDivisionQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "singleEducationTypeQuery", function() { return singleEducationTypeQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "singleRankQuery", function() { return singleRankQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "centerExamSessionSpecialtyForResultsQuery", function() { return centerExamSessionSpecialtyForResultsQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllCandidateRegistrationIDsQuery", function() { return getAllCandidateRegistrationIDsQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCenterExamSessionSpecialtyQuery", function() { return getCenterExamSessionSpecialtyQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getExamSessionQuery", function() { return getExamSessionQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllSpecialtiesOfACenterExamSessionQuery", function() { return getAllSpecialtiesOfACenterExamSessionQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCenterResultsQuery", function() { return getCenterResultsQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCandidateRegistrationIDQuery", function() { return getCandidateRegistrationIDQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registrationIDFromSecretCodeQuery", function() { return registrationIDFromSecretCodeQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCandidateRegistrationIDsQuery", function() { return getCandidateRegistrationIDsQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "centerExamSessionForResultsQuery", function() { return centerExamSessionForResultsQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resultsRegistrationQuery", function() { return resultsRegistrationQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCandidateIDQuery", function() { return getCandidateIDQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getASingleCenterQuery", function() { return getASingleCenterQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRegisteredCandidateCountQuery", function() { return getRegisteredCandidateCountQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "centersPerTownQuery", function() { return centersPerTownQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSingleCenterQuery", function() { return getSingleCenterQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCandidateResultsQuery", function() { return getCandidateResultsQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCenterRegistrationIDsQuery", function() { return getCenterRegistrationIDsQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCandidateByCandCodeQuery", function() { return getCandidateByCandCodeQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSingleCenterExamSessionQuery", function() { return getSingleCenterExamSessionQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEachCandidateResultsQuery", function() { return getEachCandidateResultsQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCenterIDFromCenterCodeQuery", function() { return getCenterIDFromCenterCodeQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRegistrationIDFromRegNumberQuery", function() { return getRegistrationIDFromRegNumberQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "centerExamSessionSpecialtyResultsQuery", function() { return centerExamSessionSpecialtyResultsQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dataForAverage", function() { return dataForAverage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllPhasesQuery", function() { return getAllPhasesQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllRegionsQuery", function() { return getAllRegionsQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllUsersQuery", function() { return getAllUsersQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "singleExaminerQuery", function() { return singleExaminerQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllRegionsDivisionsAndTownsQuery", function() { return getAllRegionsDivisionsAndTownsQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllRegionsDivisionsTownsCentersQuery", function() { return getAllRegionsDivisionsTownsCentersQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCandidateRegistrationInfoQuery", function() { return getCandidateRegistrationInfoQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCESExaminerQuery", function() { return getCESExaminerQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getExaminerIDQuery", function() { return getExaminerIDQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllTownsQuery", function() { return getAllTownsQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSpecialtyFromCESSQuery", function() { return getSpecialtyFromCESSQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getExaminerRegistrationQuery", function() { return getExaminerRegistrationQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSingleProfQuery", function() { return getSingleProfQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllGroup1Query", function() { return getAllGroup1Query; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllSubjectsQuery", function() { return getAllSubjectsQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSingleCenterFromCenterSecretCodeQuery", function() { return getSingleCenterFromCenterSecretCodeQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSingleCenterExamSessionBySecretCodeQuery", function() { return getSingleCenterExamSessionBySecretCodeQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllGroup2Query", function() { return getAllGroup2Query; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "singleSubjectGroupQuery", function() { return singleSubjectGroupQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllRegionsAndDivisionsQuery", function() { return getAllRegionsAndDivisionsQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRegisteredCandidatesPerSpecialty", function() { return getRegisteredCandidatesPerSpecialty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllSubjectGroupsQuery", function() { return getAllSubjectGroupsQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllRanksOfAnExamPhaseQuery", function() { return getAllRanksOfAnExamPhaseQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRegistrationOfCESSQuery", function() { return getRegistrationOfCESSQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "currentUserQuery", function() { return currentUserQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "singlePhaseQuery", function() { return singlePhaseQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSingleCenterByCodeQuery", function() { return getSingleCenterByCodeQuery; });
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_0__);

const currentUserQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query currentUserQuery {
    me {
      id
      email
      name
    }
  }
`;
const singleEducationTypeQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query singleEducationTypeQuery($id: ID!) {
    educationType(id: $id) {
      educationTypeName
      educationTypeCode
      id
    }
  }
`;
const getCESExaminerQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query getCESExaminerQuery(
    $examiner: ExaminerWhereUniqueInput!
    $centerExamSession: CenterExamSessionWhereUniqueInput!
  ) {
    getCenterExamSessionExaminers(
      examiner: $examiner
      centerExamSession: $centerExamSession
    ) {
      id
    }
  }
`;
const getAllEducationTypesQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query getAllEducationTypesQuery {
    educationTypes(orderBy: educationTypeName_ASC) {
      id
      educationTypeName
      educationTypeCode
    }
  }
`;
const getAllEducationTypesAndSubjectsQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query getAllEducationTypesAndSubjectsQuery {
    educationTypes(orderBy: educationTypeName_ASC) {
      id
      educationTypeName
      educationTypeCode
      subject(orderBy: subjectName_ASC){
        id
        # subjectName
        # subjectCode
        # subjectType
        # subjectGroup
      }
    }
  }
`;
const getAllRegionsQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query getAllRegionsQuery {
    regions(orderBy: regName_ASC) {
      regName
      regCode
      id
    }
  }
`;
const getAllUsersQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query getAllUsersQuery {
    users(orderBy: name_ASC) {
      name
      email
      id
      password
      resetToken
    }
  }
`;
const getCenterResultsQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query getCenterResultsQuery(
    $exam: ExamWhereUniqueInput!
    $center: CenterWhereUniqueInput!
    $session: SessionWhereUniqueInput!
  ) {
    getResultsPerCenter(exam: $exam, center: $center, session: $session) {
      id
      candidate {
        cand1stName
        cand2ndName
        cand3rdName
        placeOfBirth
        email
        user {
          id
        }
        dateOfBirth
        user {
          id
        }
        gender
      }
      exam {
        examName
      }
      session {
        sessionName
      }
      center {
        centerName
      }
      scores {
        subjectAve
        coeff
        subjectSpecialty {
          subjectName
          specialty {
            id
            specialtyName
          }
        }
      }
    }
  }
`;
const getCandidateResultsQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query getCandidateResultsQuery($id: ID!) {
    registration(id: $id) {
      id
      createdAt
      candRegistrationNumber

      candidate {
        id
        cand1stName
        cand2ndName
        cand3rdName
        momName
        dadName
        placeOfBirth
        image
        email
        dateOfBirth
        gender
        user {
          id
        }
      }
      centerExamSessionSpecialty {
        id
        centerExamSession {
          id
          examSession {
            id
            exam {
              id
              examName
            }
            session {
              id
              sessionName
            }
          }
          center {
            id
            centerName
          }
        }
        specialty {
          id
          specialtyName
        }
      }
      scores{
        id
        subjectAve
        coeff
        subjectSpecialty {
          id
          subject {
            id
            subjectName
          }
        }
      }
    }
  }
`;
const getExaminerRegistrationQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query getExaminerRegistrationQuery($id: ID!) {
    centerExamSessionExaminer(id: $id) {
      id
      examiner {
        id
        examiner1stName
        examiner2ndName
        examinerOtherNames
        examinerMatricule
        examinerPhone
        examinerCNI
        examinerImage
        examinerEmail
        gender
      }
      centerExamSession {
        id
        examSession {
          id
          exam {
            id
            examName
          }
          session {
            id
            sessionName
          }
        }
        center {
          id
          centerName
        }
      }
      phaseRank {
        id
        rankName
      }
    }
  }
`;
const getAllCenterResultsQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query getAllCenterResultsQuery($centerExamSession: String!) {
    centerExamSessionSpecialtyForResults(
      centerExamSession: $centerExamSession
    ) {
      id
      specialty {
        id
        specialtyName
        subjectSpecialty {
          id
          subjectName
        }
      }
      registration {
        id
        candidate {
          cand1stName
          id
        }
        scores {
          id
          subjectAve
          coeff
          subjectSpecialty {
            id
            subjectName
          }
        }
      }
    }
  }
`;
const getEachCandidateResultsQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query getEachCandidateResultsQuery($id: ID!) {
    registration(id: $id) {
      id
      candidate {
        id
        cand1stName
        cand2ndName
        cand3rdName
        momName
        dadName
        email
        dateOfBirth
        user {
          id
        }
        gender
      }
      exam {
        id
        examName
      }
      session {
        id
        sessionName
      }
      specialty {
        id
        specialtyName
      }
      center {
        id
        centerName
      }
    }
  }
`;
const getCandidateRegistrationInfoQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query getCandidateRegistrationInfoQuery($id: ID!) {
    registration(id: $id) {
      id
      aptitude
      EPF1
      EPF2
      candExamSecretCode
      createdAt
      candRegistrationNumber
      candidate {
        id
        cand1stName
        cand2ndName
        cand3rdName
        image
        email
        phoneNumb
        candCode
        dateOfBirth
        placeOfBirth
        gender
      }
      centerExamSessionSpecialty {
        id
        specialty {
          id
          specialtyName
          specialtyCode
          subjectSpecialty {
            id
            coeff
            subject {
              id
              subjectName
              subjectCode
            }
          }
        }
        centerExamSession {
          id
          center {
            id
            centerName
          }
          examSession {
            id
            exam {
              id
              examName
            }
            session {
              id
              sessionName
            }
          }
        }
      }
    }
  }
`;
const getCandidateRegistrationIDQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query getCandidateRegistrationIDQuery(
    $centerExamSession: CenterExamSessionWhereUniqueInput!
    $candidate: CandidateWhereUniqueInput!
  ) {
    candidateRegistrationID(
      centerExamSession: $centerExamSession
      candidate: $candidate
    ) {
      id
    }
  }
`;
const getCandidateRegistrationIDsQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query getCandidateRegistrationIDsQuery($candidate: RegistrationWhereInput!) {
    candidateRegistrationIDs(candidate: $candidate) {
      id
    }
  }
`;
const registrationIDFromSecretCodeQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query registrationIDFromSecretCodeQuery($candExamSecretCode: String!) {
    getRegistration(candExamSecretCode: $candExamSecretCode) {
      id
      specialty {
        id
        specialtyName
      }
    }
  }
`;
const getAllCandidateRegistrationIDsQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query getAllCandidateRegistrationIDsQuery($id: ID!) {
    candidate(id: $id) {
      id
      cand1stName
      cand2ndName
      cand3rdName
      placeOfBirth
      dateOfBirth
      image
      momName
      dadName
      email
      user {
        id
      }
      gender
      registration {
        id

        centerExamSessionSpecialty {
          id
          specialty {
            id
            specialtyName
          }
          centerExamSession {
            id
            center {
              id
              centerName
              centerCode
              centerNumber
            }
            examSession {
              id
              exam {
                id
                examName
              }
              session {
                id
                sessionName
              }
            }
          }
        }
        scores {
          id
          subjectAve
          coeff
        }
      }
      id
    }
  }
`;
const getCandidateIDQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query getCandidateIDQuery($candCode: String!) {
    candidateCode(candCode: $candCode) {
      id
    }
  }
`;
const getExaminerIDQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query getExaminerIDQuery($examinerCode: String!) {
    examinerByCode(examinerCode: $examinerCode) {
      id
    }
  }
`;
const getRegistrationIDFromRegNumberQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query getRegistrationIDFromRegNumberQuery($candRegistrationNumber: String!) {
    candidateRegistrationNumber(
      candRegistrationNumber: $candRegistrationNumber
    ) {
      id
      candidate {
        id
        cand1stName
        cand2ndName
        cand3rdName
        placeOfBirth
        dateOfBirth
        image
        momName
        dadName
        email
        user {
          id
        }
        gender
        registration {
          id

          centerExamSessionSpecialty {
            id
            specialty {
              id
              specialtyName
            }
            centerExamSession {
              id
              center {
                id
                centerName
              }
              examSession {
                id
                exam {
                  id
                  examName
                }
                session {
                  id
                  sessionName
                }
              }
            }
          }
          scores {
            id
            subjectAve
            coeff
            subjectSpecialty {
              id
              subject{
                id
                subjectName
              }
            }
          }
        }
      }
    }
  }
`;
const getCenterIDFromCenterCodeQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query getCenterIDFromCenterCodeQuery($centerSecretCode: String!) {
    getCenterByCode(centerSecretCode: $centerSecretCode) {
      id
    }
  }
`;
const getCenterRegistrationIDsQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query getCenterRegistrationIDsQuery(
    $exam: ExamWhereUniqueInput!
    $center: CenterWhereUniqueInput!
    $session: SessionWhereUniqueInput!
  ) {
    centerRegistrationIDs(exam: $exam, center: $center, session: $session) {
      id
    }
  }
`;
const centerExamSessionSpecialtyForResultsQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query centerExamSessionSpecialtyForResultsQuery($centerExamSession: String!) {
    centerExamSessionSpecialtyForResults(
      centerExamSession: $centerExamSession
    ) {
      id
      specialty {
        id
        specialtyName
      }
    }
  }
`;
const centerExamSessionForResultsQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query centerExamSessionForResultsQuery($id: ID!) {
    centerExamSession(id: $id) {
      id
      center {
        id
        centerName
      }
      examSession {
        id
        exam {
          examName
          id
        }
        session {
          id
          sessionName
        }
      }
      registration {
        id
        EPF1
        EPF2
        centerExamSession {
          id
          center {
            id
            centerName
          }
          examSession {
            id
            exam {
              examName
              id
            }
            session {
              id
              sessionName
            }
          }
        }
        candRegistrationNumber
        candExamSecretCode
        aptitude
        candidate {
          id
          cand1stName
          cand2ndName
          cand3rdName
          dateOfBirth
          placeOfBirth
          email
          phoneNumb
          user {
            id
          }
          gender
        }
        specialty {
          id
          specialtyName
          specialtyCode
        }
        scores {
          id
          subjectAve
        }
      }
    }
  }
`;
const resultsRegistrationQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query resultsRegistrationQuery($id: ID!) {
    registration(id: $id) {
        id
        EPF1
        EPF2
        centerExamSession {
          id
          center {
            id
            centerName
          }
          examSession {
            id
            exam {
              examName
              id
            }
            session {
              id
              sessionName
            }
          }
        }
        candRegistrationNumber
        candExamSecretCode
        aptitude
        candidate {
          id
          cand1stName
          cand2ndName
          cand3rdName
          dateOfBirth
          placeOfBirth
          email
          phoneNumb
          user {
            id
          }
          gender
        }
        specialty {
          id
          specialtyName
          specialtyCode
        }
        scores {
          id
          subjectAve
        }
      }
    }
`;
const centerExamSessionSpecialtyResultsQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query centerExamSessionSpecialtyResultsQuery($id: ID!) {
    centerExamSessionSpecialty(id: $id) {
      id
      centerExamSession {
        id
        center {
          id
          centerName
          centerCode
        }
        examSession {
          exam {
            id
            examName
          }
          session {
            id
            sessionName
          }
        }
      }

      specialty {
        id
        specialtyName
        specialtyCode
      }
      registration {
        id
        candRegistrationNumber
        candExamSecretCode
        candidate {
          id
          cand1stName
          cand2ndName
          cand3rdName
          dateOfBirth
          placeOfBirth
          email
          phoneNumb
          user {
            id
          }
          gender
        }
        scores {
          id
          subjectAve
        }
      }
    }
  }
`;
const getCandidateByCandCodeQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query getCandidateByCandCodeQuery($candCode: String!) {
    getCandidateByCode(candCode: $candCode) {
      id
      cand1stName
      candCode
      dateOfBirth
      placeOfBirth
      user {
        id
      }
    }
  }
`;
const getAllRanksQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query getAllRanksQuery {
    ranks(orderBy: rankName_ASC) {
      rankName
      rankCode
      id
    }
  }
`;
const getAllPhasesQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query getAllPhasesQuery {
    phases(orderBy: phaseName_ASC) {
      phaseName
      phaseCode
      id
    }
  }
`;
const getAllSubjectsQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query getAllSubjectsQuery {
    subjects(orderBy: subjectName_ASC) {
      subjectName
      subjectCode
      id
    }
  }
`;
const getAllSubjectGroupsQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query getAllSubjectGroupsQuery {
    subjectGroups(orderBy: subjectGroupName_ASC) {
      subjectGroupName
      subjectGroupCode
      id
    }
  }
`;
const getAllSpecialtiesOfAnEducationTypeQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query getAllSpecialtiesOfAnEducationTypeQuery($id: ID!) {
    educationType(id: $id) {
      id
      educationTypeName
      specialty {
        id
        specialtyName
        specialtyCode
      }
    }
  }
`;
const getAllSpecialtiesOfACenterExamSessionQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query getAllSpecialtiesOfACenterExamSessionQuery($id: ID!) {
    centerExamSession(id: $id) {
      id
      centerExamSessionSpecialty {
        id
        registration {
          candRegistrationNumber
          id
          candidate {
            id
            cand1stName
            cand2ndName
            cand3rdName
          }
        }
        specialty {
          id
          specialtyName
          specialtyCode
        }
      }
    }
  }
`;
const getRegistrationOfCESSQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query getRegistrationOfCESSQuery($id: ID!, $CES: String) {
    centerExamSessionSpecialty(id: $id, CES: $CES) {
        id
        registration {
          candRegistrationNumber
          id
          candidate {
            id
            cand1stName
            cand2ndName
            cand3rdName
          }
        }
        
    }
  }
`;
const getAllSpecialtiesQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query getAllSpecialtiesQuery {
    specialties(orderBy: specialtyName_ASC) {
      id
      specialtyName
      specialtyCode
    }
  }
`;
const getAllSubjectsOfAnEducTypeQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query getAllSubjectsOfAnEducTypeQuery($id: ID!) {
    educationType(id: $id) {
      id
      educationTypeName
      subject(orderBy: subjectName_ASC) {
        id
        subjectName
        subjectCode
        subjectType
        subjectGroup
      }
    }
  }
`;
const getAllSubjectsWithEducTypesQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query getAllSubjectsWithEducTypesQuery {
    subjects(orderBy: subjectName_ASC) {
      id
      subjectName
      subjectCode
      subjectType
      subjectGroup
      subjectSpecialty {
        specialty {
          specialtyName
        }
      }
    }
  }
`;
const getAllSubjectSpecialtiesOfASpecialtyQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query getAllSubjectSpecialtiesOfASpecialtyQuery($id: ID!) {
    specialty(id: $id) {
      id
      subjectSpecialty {
        id
        subject {
        id
        subjectName
        subjectCode
        subjectType
        subjectGroup
      }
      }
    }
  }
`;
const getAllExamsQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query getAllExamsQuery {
    exams(orderBy: examName_ASC) {
      examName
      examCode
      id
    }
  }
`;
const getAllGroup2Query = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query getAllGroup2Query($educType: EducationTypeWhereUniqueInput!) {
    group2Subjects(educType: $educType, orderBy: subjectName_ASC) {
      subjectName
      subjectCode
      subjectGroup
      id
    }
  }
`;
const getAllGroup1Query = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query getAllGroup1Query($educType: EducationTypeWhereUniqueInput!) {
    group1Subjects(educType: $educType, orderBy: subjectName_ASC) {
      subjectName
      subjectCode
      subjectGroup
      id
    }
  }
`;
const getAllSessionsQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query getAllSessionsQuery {
    sessions(orderBy: createdAt_DESC) {
      sessionName
      sessionCode
      id
    }
  }
`;
const getAllDivisionsQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query getAllDivisionsQuery {
    divisions(orderBy: divName_ASC) {
      divName
      divCode
      id
    }
  }
`;
const getAllRegionsAndDivisionsQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query getAllRegionsAndDivisionsQuery {
    regions {
      id
      regName
      regCode
      division(orderBy: divName_ASC) {
        divName
        divCode
        id
      }
    }
  }
`;
const getAllRegionsDivisionsAndTownsQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query getAllRegionsDivisionsAndTownsQuery {
    regions {
      id
      regName
      regCode
      division(orderBy: divName_ASC) {
        divName
        divCode
        id
        subDivision {
          id
          subDivName
          subDivCode
          town(orderBy: townName_ASC) {
            id
            townName
            townCode
          }
        }
      }
    }
  }
`;
const getAllRegionsDivisionsTownsCentersQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query getAllRegionsDivisionsTownsCentersQuery {
    regions {
      id
      regName
      regCode
      division(orderBy: divName_ASC) {
        divName
        divCode
        id
        subDivision {
          id
          subDivName
          subDivCode
          town(orderBy: townName_ASC) {
            id
            townName
            townCode
            center(orderBy: centerName_ASC) {
              id
              centerName
              centerCode
              centerNumber
              centerSecretCode
            }
          }
        }
      }
    }
  }
`;
const getDivisionsOfARegionQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query getDivisionsOfARegionQuery($id: ID!) {
    region(id: $id) {
      regName
      id
      division(orderBy: divName_ASC) {
        divName
        divCode
        id
      }
    }
  }
`;
const getSubDivisionsOfADivisionQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query getSubDivisionsOfADivisionQuery($id: ID!) {
    division(id: $id) {
      divName
      id
      subDivision(orderBy: subDivName_ASC) {
        subDivName
        subDivCode
        id
      }
    }
  }
`;
const getAllSubDivisionsQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query getAllSubDivisionsQuery {
    subDivision(orderBy: subDivName_ASC) {
      subDivName
      subDivCode
      id
    }
  }
`;
const getAllTownsQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query getAllTownsQuery {
    towns(orderBy: townName_ASC) {
      townName
      townCode
      id
    }
  }
`;
const getTownsOfASubDivisionQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query getTownsOfASubDivision($id: ID!) {
    subDivision(id: $id) {
      subDivName
      id
      town(orderBy: townName_ASC) {
        townName
        townCode
        id
      }
    }
  }
`;
const getCentersOfATownQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query getCentersOfATownQuery($id: ID!) {
    town(id: $id) {
      townName
      id
      center(orderBy: centerName_ASC) {
        centerName
        centerCode
        centerNumber
        id
      }
    }
  }
`;
const centersPerTownQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query centersPerTownQuery($id: ID!) {
    town(id: $id) {
      townName
      id
      center(orderBy: centerName_ASC) {
        centerName
        centerNumber
        centerSecretCode
        centerCode
        id
      }
    }
  }
`;
const getAllCentersQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query getAllCentersQuery {
    centers(orderBy: centerName_ASC) {
      id
      centerName
      centerCode
    }
  }
`;
const getAllCandidatesQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query getAllCandidatesQuery {
    candidates(orderBy: cand1stName_ASC) {
      cand1stName
      cand2ndName
      cand3rdName
      email
      image
      phoneNumb
      placeOfBirth
      candCode
      id
    }
  }
`; ///*****************Single object queries */

const singleCenterQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query singleCenterQuery($id: ID!) {
    center(id: $id) {
      centerName
      centerNumber
      centerCode
      id
    }
  }
`;
const getSingleCenterQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query getSingleCenterQuery($centerNumber: Int!) {
    centerByNumber(centerNumber: $centerNumber) {
      id
      centerNumber
      centerCode
    }
  }
`;
const getSingleCenterFromCenterSecretCodeQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query getSingleCenterFromCenterSecretCodeQuery($CESCode: String!) {
    centerBySecretCode(CESCode: $CESCode) {
      id
      CESCode
      centerName
      centerCode
    }
  }
`;
const getSingleProfQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query getSingleProfQuery($authCode: String!) {
    profByAuthCode(authCode: $authCode) {
      authCode
      id
      auth1stName
    }
  }
`;
const getSingleCenterByCodeQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query getSingleCenterByCodeQuery($centerSecretCode: String!) {
    getCenterByCode(centerSecretCode: $centerSecretCode) {
      id
      centerCode
    }
  }
`;
const getASingleCenterQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query getASingleCenterQuery($centerNumber: Int!) {
    centerByNumber(centerNumber: $centerNumber) {
      centerNumber
      centerName
      centerCode
      id
    }
  }
`;
const singleTownQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query singleTownQuery($id: ID!) {
    town(id: $id) {
      townName
      townCode
      id
    }
  }
`;
const getSingleCenterExamSessionQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query getSingleCenterExamSessionQuery(
    $center: CenterWhereUniqueInput!
    $examSession: ExamSessionWhereUniqueInput!
  ) {
    centerExamSessionsByCode(examSession: $examSession, center: $center) {
      id
    }
  }
`;
const getSingleCenterExamSessionBySecretCodeQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query getSingleCenterExamSessionBySecretCodeQuery($CESCode: String!) {
    centerExamSessionBySecretCode(CESCode: $CESCode) {
      id
    }
  }
`;
const getAllRanksOfAnExamPhaseQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query getAllRanksOfAnExamPhaseQuery($id: ID!) {
    phase(id: $id) {
      id
      phaseRank {
        id
        rank {
          id
          rankName
          rankCode
        }
        phase {
          id
          phaseName
          phaseCode
        }
      }
    }
  }
`;
const getRegisteredCandidateCountQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query getRegisteredCandidateCountQuery($id: ID!) {
    registrationsConnection(id: $id) {
      aggregate {
        count
      }
    }
  }
`;
const getRegisteredCandidatesPerSpecialty = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query getRegisteredCandidatesPerSpecialty($id: ID!) {
    centerExamSessionSpecialty(id: $id) {
      id
      registration {
        candRegistrationNumber
        id
        candExamSecretCode
        candidate {
          id
          cand1stName
          cand2ndName
          cand3rdName
        }
      }
    }
  }
`;
const getCenterExamSessionSpecialtyQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query getCenterExamSessionSpecialtyQuery(
    $centerExamSession: CenterExamSessionWhereUniqueInput!
    $specialty: SpecialtyWhereUniqueInput!
  ) {
    centerExamSessionSpecialties(
      centerExamSession: $centerExamSession
      specialty: $specialty
    ) {
      id
    }
  }
`;
const getSpecialtyFromCESSQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query getSpecialtyFromCESSQuery($id: ID!) {
    centerExamSessionSpecialty(id: $id) {
      id
      specialty {
        id
        specialtyName
      }
    }
  }
`;
const getExamSessionQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query getExamSessionQuery(
    $exam: ExamWhereUniqueInput!
    $session: SessionWhereUniqueInput!
  ) {
    examSessions(session: $session, exam: $exam) {
      id
    }
  }
`;
const singleExamQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query singleExamQuery($id: ID!) {
    exam(id: $id) {
      examName
      examCode
      id
    }
  }
`;
const singleCandidateQuery1 = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query singleCandidateQuery1($id: ID!) {
    candidate(id: $id) {
      cand1stName
      cand2ndName
      cand3rdName
      dadName
      momName
      candCode
      email
      image
      phoneNumb
      placeOfBirth
      user {
        id
      }
      id
    }
  }
`;
const singleCandidateQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query singleCandidateQuery($id: ID!) {
    candidate(id: $id) {
      id
      dateOfBirth
      cand1stName
      cand2ndName
      cand3rdName
      candCode
      dadName
      momName
      email
      image
      phoneNumb
      birthCertNumber
      placeOfBirth
      gender
      user {
        id
      }
    }
  }
`;
const singleExaminerQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query singleExaminerQuery($id: ID!) {
    examiner(id: $id) {
      id
      examiner1stName
      examiner2ndName
      examinerOtherNames
      examinerCode
      examinerEmail
      gender
      examinerImage
      examinerPhone
      examinerMatricule
      examinerCNI
    }
  }
`;
const viewSingleCandidateQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query viewSingleCandidateQuery($candCode: String!) {
    singleCandidate(candCode: $candCode) {
      id
      dateOfBirth
      cand1stName
      cand2ndName
      cand3rdName
      candCode
      momName
      dadName
      email
      image
      phoneNumb
      birthCertNumber
      placeOfBirth
      user {
        id
      }
      gender
    }
  }
`;
const getScoreID = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query getScoreID($candExamSecretCode: String!) {
    scores(candExamSecretCode: $candExamSecretCode) {
      id
    }
  }
`;
const getRegistrations = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query getRegistrations($candExamSecretCode: String!) {
    registration(candExamSecretCode: $candExamSecretCode) {
      id
      scores {
        id
        subject(orderBy: subjectName_ASC) {
          id
          subjectName
        }
      }
    }
  }
`;
const singleSubDivisionQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query singleSubDivisionQuery($id: ID!) {
    subDivision(id: $id) {
      subDivName
      subDivCode
      id
    }
  }
`;
const getSingleRegionQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query getSingleRegionQuery($id: ID!) {
    region(id: $id) {
      regName
      regCode
      id
    }
  }
`;
const singlePhaseQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query singlePhaseQuery($id: ID!) {
    phase(id: $id) {
      phaseName
      phaseCode
      id
    }
  }
`;
const singleSpecialtyQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query singleSpecialtyQuery($id: ID!) {
    specialty(id: $id) {
      specialtyName
      specialtyCode
      id
    }
  }
`;
const dataForAverage = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query dataForAverage($candExamSecretCode: String!) {
    scores(candExamSecretCode: $candExamSecretCode) {
      id
      subjectAve
      coeff
    }
  }
`;
const singleDivisionQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query singleDivisionQuery($id: ID!) {
    division(id: $id) {
      divName
      divCode
      id
    }
  }
`;
const singleRankQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query singleRankQuery($id: ID!) {
    rank(id: $id) {
      rankName
      rankCode
      id
    }
  }
`;
const singleSubjectQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query singleSubjectQuery($id: ID!) {
    subject(id: $id) {
      subjectName
      subjectCode
      id
    }
  }
`;
const singleSubjectGroupQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query singleSubjectGroupQuery($id: ID!) {
    subjectGroup(id: $id) {
      subjectGroupName
      subjectGroupCode
      id
    }
  }
`;
const singleSessionQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query singleSessionQuery($id: ID!) {
    session(id: $id) {
      sessionName
      sessionCode
      id
    }
  }
`; ///*****************End Single object queries */



/***/ }),

/***/ "./src/components/user/Signout.jsx":
/*!*****************************************!*\
  !*** ./src/components/user/Signout.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _queries_Mutations_Functions_Queries__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../queries&Mutations&Functions/Queries */ "./src/components/queries&Mutations&Functions/Queries.jsx");
/* harmony import */ var _queries_Mutations_Functions_Mutations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../queries&Mutations&Functions/Mutations */ "./src/components/queries&Mutations&Functions/Mutations.jsx");
var _jsxFileName = "E:\\sygefexMui\\sygefexMui-frontend\\src\\components\\user\\Signout.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const Signout = props => __jsx(react_apollo__WEBPACK_IMPORTED_MODULE_1__["Mutation"], {
  mutation: _queries_Mutations_Functions_Mutations__WEBPACK_IMPORTED_MODULE_4__["signoutMutation"],
  refetchQueries: [{
    query: _queries_Mutations_Functions_Queries__WEBPACK_IMPORTED_MODULE_3__["currentUserQuery"]
  }],
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 3
  }
}, signout => __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2___default.a, {
  size: "medium",
  variant: "outlined",
  style: {
    backgroundColor: "#829079",
    color: "#ede6b9",
    // paddingLeft: "0.8rem",
    // paddingRight: "0.8rem",
    textTransform: "none"
  },
  onClick: signout,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 7
  }
}, "D\xE9connecter"));

/* harmony default export */ __webpack_exports__["default"] = (Signout);

/***/ }),

/***/ "./src/components/user/User.jsx":
/*!**************************************!*\
  !*** ./src/components/user/User.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _queries_Mutations_Functions_Queries__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../queries&Mutations&Functions/Queries */ "./src/components/queries&Mutations&Functions/Queries.jsx");
var _jsxFileName = "E:\\sygefexMui\\sygefexMui-frontend\\src\\components\\user\\User.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }






const User = props => __jsx(react_apollo__WEBPACK_IMPORTED_MODULE_1__["Query"], _extends({}, props, {
  query: _queries_Mutations_Functions_Queries__WEBPACK_IMPORTED_MODULE_3__["currentUserQuery"],
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 3
  }
}), payload => props.children(payload));

User.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (User);

/***/ }),

/***/ "./src/components/utils/SygefexTheme.js":
/*!**********************************************!*\
  !*** ./src/components/utils/SygefexTheme.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/colors */ "@material-ui/core/colors");
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1__);

 // Create a theme instance.

const SygefexTheme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["createMuiTheme"])({
  palette: {
    primary: {
      // main: "#2c5f2d",
      main: "#829079",
      // main: "#044562",
      light: "#f00" // main: "#0780b7",

    },
    secondary: {
      main: "#19857b",
      light: "#a2463c"
    },
    error: {
      main: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1__["red"].A200
    },
    background: {
      // default: "#e7e8d1",
      // default: "#cbce91ff",
      default: "#ede6b9"
    }
  },
  typography: {
    fontFamily: ["Roboto", "sans-serif"].join(","),
    body2: {
      fontFamily: "Roboto",
      fontSize: "0.8rem"
    },
    body1: {
      fontFamily: "Roboto",
      fontSize: "1rem"
    },
    subTitle1: {
      fontFamily: "Roboto",
      fontSize: "0.7rem"
    },
    subTitle2: {
      fontFamily: "Roboto",
      fontSize: "0.5rem"
    },
    h6: {
      fontFamily: "Roboto",
      fontSize: "0.8rem"
    }
  },
  shape: {
    borderRadius: "0.4rem"
  },
  spacing: 2,
  overrides: {
    MuiToolbar: {
      regular: {
        minHeight: "1.5rem",
        maxHeight: "1.9rem"
      }
    },
    MuiSelect: {
      root: {
        fontSize: "1.1rem",
        paddingBottom: "0.5rem",
        height: "1.3rem"
      } // nativeInput: {
      //   fontSize: "0.5rem",
      // },

    },
    MuiTypography: {// root: {
      //   // marginBottom: "1rem",
      // },
      // body1: {
      //   fontSize: "0.8rem",
      // },
      // h6: {
      //   fontFamily: "Roboto",
      //   fontSize: "1.2rem",
      // },
    },
    MuiOutlinedInput: {
      input: {
        height: "1.2rem",
        fontSize: "1rem",
        paddingBottom: "0.5rem" // marginBottom: "0.5rem",

      } // MuiFormInputLabel: {
      //   formControl: {
      //     margin: "0.4rem",
      //   },
      //   root: {
      //     fontSize: "0.6rem",
      //   },
      // },
      // MuiMenuItem: {
      //   root: {
      //     fontSize: "0.8rem",
      //   },
      // },

    },
    MuiButton: {
      root: {
        textTransform: "none",
        marginTop: "0.5rem",
        marginBottom: "0.5rem",
        fontSize: "1.1rem",
        fontWeight: "bold",
        padding: "0.1rem",
        // minWidth: "40%",
        margin: "1rem" // backgroundColor: "rgba(255, 125, 0, 0.65)",

      }
    },
    MuiTableRow: {
      root: {
        // borderBottom: "0.113rem solid #fff",
        "&:nth-child(2n)": {
          backgroundColor: "#e6f4dd"
        },
        // "&:nth-child(2n+1)": {
        //   background: "#e4ebf8",
        // },
        "&:hover": {
          backgroundColor: "#829079",
          color: "#ede6b9"
        }
      }
    },
    MuiTableHead: {
      root: {
        position: "sticky",
        top: 0 // zIndex: 1,
        // paddingTop: "1rem",
        // paddingBottom: "1rem",
        // fontSize: "1.2rem",
        // backgroundColor: "#abb",

      }
    },
    MuiFormControl: {
      root: {
        color: "#044562",
        fontSize: "1.2rem"
      }
    },
    MuiIconButton: {
      root: {
        paddingTop: "0.2rem",
        paddingBottom: "0.2rem",
        fontSize: "0.9rem"
      }
    },
    MuiTableCell: {
      root: {
        paddingTop: "0.01rem",
        paddingBottom: "0.01rem",
        fontSize: "01rem"
      }
    },
    MuiFormControl: {
      root: {
        width: "90%",
        margin: "0.5rem",
        fontSize: "0.8rem"
      },
      marginNormal: {
        margin: "0.5rem",
        marginTop: 0,
        marginBottom: "0.3rem"
      }
    },
    MuiPickersToolbar: {
      toolbar: {
        backgroundColor: "#829079",
        color: "#ede6b9"
      }
    },
    MuiTypography: {
      alignCenter: {
        fontSize: "1.1rem"
      }
    },
    MuiPickersCalendarHeader: {
      transitionContainer: {
        height: "2.5rem"
      },
      iconButton: {
        height: "2rem"
      }
    },
    MuiToolbar: {
      regular: {
        maxHeight: "3rem",
        minHeight: "3rem"
      }
    },
    MuiPickersToolbarText: {
      toolbarTxt: {
        fontSize: "1.3rem",
        padding: "0.5rem"
      }
    },
    MuiPickersDatePickerRoot: {
      toolbar: {
        flexDirection: "row",
        alignItems: "center"
      }
    },
    MuiPickersCalendarHeader: {
      daysHeader: {
        fontSize: "1.3rem"
      }
    },
    MuiAppBar: {
      colorPrimary: {
        color: "#ff0212" // backGroundColor: "primary",

      }
    },
    MuiPaper: {
      root: {
        // minHeight: "100vh",
        borderTop: "0.3rem solid #829079",
        borderBottom: "0.3rem solid #b9925e",
        borderRadius: "0.5rem"
      }
    },
    MuiInputBase: {
      root: {// width: "50%",
      }
    },
    MuiButtonBase: {
      root: {// width: "5rem",
      }
    },
    MuiSvgIcon: {
      root: {
        width: "2rem",
        fontSize: "1rem" // backgroundColor:"#ede6b9",
        // borderRadius:"0.2rem",

      }
    },
    MTableToolbar: {
      actions: {
        color: "#000",
        fontSize: "2rem",
        backgroundColor: "#fff",
        borderRadius: "0.3rem"
      },
      title: {
        width: "40%",
        overflow: "none"
      },
      searchField: {
        maxWidth: "15rem"
      }
    },
    MuiFormHelperText: {
      root: {
        color: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1__["orange"][900],
        "&$error": {
          "&.MuiFormHelperText-root.Mui-error": {
            color: "#e65100"
          }
        }
      }
    }
  },
  props: {
    MuiButton: {
      variant: "outlined",
      color: "primary"
    },
    MuiTextField: {
      typography: {
        fontFamily: {
          fontFamily: "Comic Sans MS",
          fontSize: "0.9rem"
        }
      }
    },
    MuiInputLabel: {
      typography: {
        fontFamily: {
          fontFamily: "Comic Sans MS",
          fontSize: "0.7rem"
        }
      }
    },
    MuiTableHead: {
      root: {
        position: "sticky",
        top: 0,
        // zIndex: 1,
        paddingTop: "1rem",
        paddingBottom: "1rem",
        fontSize: "1.2rem" // backgroundColor: "#abb1",

      }
    },
    MuiTableToolbar: {
      root: {// backgroundColor: "#4a8ba8",
      }
    },
    // MTableToolbar: {
    //   actions: {
    //     color: "#000",
    //     fontSize: "2rem",
    //     backgroundColor: "#fff",
    //     borderRadius: "0.3rem",
    //   },
    //   title: {
    //     width: "40%",
    //     overflow: "none",
    //   },
    //   searchField: {
    //     // width: "50%",
    //     maxWidth: "50%",
    //   },
    // },
    MuiGrid: {
      root: {
        display: "grid",
        placeItems: "center",
        direction: "column",
        alignItems: "center",
        justifyItems: "center"
      }
    }
  }
});
/* harmony default export */ __webpack_exports__["default"] = (SygefexTheme);

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


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

/***/ "@material-ui/core/Button":
/*!*******************************************!*\
  !*** external "@material-ui/core/Button" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Button");

/***/ }),

/***/ "@material-ui/core/Collapse":
/*!*********************************************!*\
  !*** external "@material-ui/core/Collapse" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Collapse");

/***/ }),

/***/ "@material-ui/core/CssBaseline":
/*!************************************************!*\
  !*** external "@material-ui/core/CssBaseline" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CssBaseline");

/***/ }),

/***/ "@material-ui/core/Divider":
/*!********************************************!*\
  !*** external "@material-ui/core/Divider" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Divider");

/***/ }),

/***/ "@material-ui/core/Drawer":
/*!*******************************************!*\
  !*** external "@material-ui/core/Drawer" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Drawer");

/***/ }),

/***/ "@material-ui/core/Grid":
/*!*****************************************!*\
  !*** external "@material-ui/core/Grid" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Grid");

/***/ }),

/***/ "@material-ui/core/Hidden":
/*!*******************************************!*\
  !*** external "@material-ui/core/Hidden" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Hidden");

/***/ }),

/***/ "@material-ui/core/IconButton":
/*!***********************************************!*\
  !*** external "@material-ui/core/IconButton" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/IconButton");

/***/ }),

/***/ "@material-ui/core/List":
/*!*****************************************!*\
  !*** external "@material-ui/core/List" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/List");

/***/ }),

/***/ "@material-ui/core/ListItem":
/*!*********************************************!*\
  !*** external "@material-ui/core/ListItem" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItem");

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

/***/ "@material-ui/icons/DesktopWindows":
/*!****************************************************!*\
  !*** external "@material-ui/icons/DesktopWindows" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/DesktopWindows");

/***/ }),

/***/ "@material-ui/icons/ExpandLess":
/*!************************************************!*\
  !*** external "@material-ui/icons/ExpandLess" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ExpandLess");

/***/ }),

/***/ "@material-ui/icons/ExpandMore":
/*!************************************************!*\
  !*** external "@material-ui/icons/ExpandMore" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ExpandMore");

/***/ }),

/***/ "@material-ui/icons/Home":
/*!******************************************!*\
  !*** external "@material-ui/icons/Home" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Home");

/***/ }),

/***/ "@material-ui/icons/Menu":
/*!******************************************!*\
  !*** external "@material-ui/icons/Menu" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Menu");

/***/ }),

/***/ "@material-ui/icons/Notifications":
/*!***************************************************!*\
  !*** external "@material-ui/icons/Notifications" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Notifications");

/***/ }),

/***/ "@material-ui/icons/Receipt":
/*!*********************************************!*\
  !*** external "@material-ui/icons/Receipt" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Receipt");

/***/ }),

/***/ "@material-ui/icons/Settings":
/*!**********************************************!*\
  !*** external "@material-ui/icons/Settings" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Settings");

/***/ }),

/***/ "apollo-boost":
/*!*******************************!*\
  !*** external "apollo-boost" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("apollo-boost");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "graphql-tag":
/*!******************************!*\
  !*** external "graphql-tag" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("graphql-tag");

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

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIiIsIndlYnBhY2s6Ly8vLi9jb25maWcuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL3dpdGhEYXRhLmpzeCIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L2xpbmsudHN4Iiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvcmVxdWVzdC1pZGxlLWNhbGxiYWNrLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvcm91dGUtbG9hZGVyLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvdXNlLWludGVyc2VjdGlvbi50c3giLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC93aXRoLXJvdXRlci50c3giLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wYXRoLXRvLXJlZ2V4cC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL21pdHQudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2VzY2FwZS1wYXRoLWRlbGltaXRlcnMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZm9ybWF0LXVybC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9pcy1keW5hbWljLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9wYXRoLW1hdGNoLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3ByZXBhcmUtZGVzdGluYXRpb24udHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcXVlcnlzdHJpbmcudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1tYXRjaGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLXJlZ2V4LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9zZXJ2ZXIvZGVub3JtYWxpemUtcGFnZS1wYXRoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2xpbmsuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9yZWFjdC1pcy9janMvcmVhY3QtaXMuZGV2ZWxvcG1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL3JlYWN0LWlzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3BhZ2VzL19hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvdGhlbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTWV0YS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvUGFnZS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbGF5b3V0L0xheW91dERyYXdlci5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbGF5b3V0L1NpZGViYXIuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3F1ZXJpZXMmTXV0YXRpb25zJkZ1bmN0aW9ucy9NdXRhdGlvbnMuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3F1ZXJpZXMmTXV0YXRpb25zJkZ1bmN0aW9ucy9RdWVyaWVzLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy91c2VyL1NpZ25vdXQuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3VzZXIvVXNlci5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdXRpbHMvU3lnZWZleFRoZW1lLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBhcG9sbG8vcmVhY3QtaG9va3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9BcHBCYXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9Db2xsYXBzZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0Nzc0Jhc2VsaW5lXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvRGl2aWRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0RyYXdlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0dyaWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9IaWRkZW5cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlzdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvVG9vbGJhclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9jb2xvcnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvRGVza3RvcFdpbmRvd3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvRXhwYW5kTGVzc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9FeHBhbmRNb3JlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL0hvbWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTWVudVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9Ob3RpZmljYXRpb25zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL1JlY2VpcHRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvU2V0dGluZ3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhcG9sbG8tYm9vc3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImdyYXBocWwtdGFnXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC13aXRoLWFwb2xsb1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInByb3AtdHlwZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWFwb2xsb1wiIl0sIm5hbWVzIjpbImVuZHBvaW50IiwiY3JlYXRlQ2xpZW50IiwiaGVhZGVycyIsIkFwb2xsb0NsaWVudCIsInVyaSIsInByb2RFbmRwb2ludCIsInJlcXVlc3QiLCJvcGVyYXRpb24iLCJzZXRDb250ZXh0IiwiZmV0Y2hPcHRpb25zIiwiY3JlZGVudGlhbHMiLCJjbGllbnRTdGF0ZSIsInJlc29sdmVycyIsIndpdGhBcG9sbG8iLCJwcmVmZXRjaGVkIiwicm91dGVyIiwiZXJyIiwiY3VyTG9jYWxlIiwib3B0aW9ucyIsImhyZWYiLCJldmVudCIsInRhcmdldCIsImUiLCJub2RlTmFtZSIsImlzTW9kaWZpZWRFdmVudCIsInNjcm9sbCIsImFzIiwicmVwbGFjZSIsInN1Y2Nlc3MiLCJ3aW5kb3ciLCJkb2N1bWVudCIsImFyZ3MiLCJrZXkiLCJleHBlY3RlZCIsImFjdHVhbCIsInJlcXVpcmVkUHJvcHNHdWFyZCIsInJlcXVpcmVkUHJvcHMiLCJPYmplY3QiLCJwcm9wcyIsImNyZWF0ZVByb3BFcnJvciIsIl8iLCJvcHRpb25hbFByb3BzR3VhcmQiLCJzaGFsbG93IiwicGFzc0hyZWYiLCJwcmVmZXRjaCIsImxvY2FsZSIsIm9wdGlvbmFsUHJvcHMiLCJ2YWxUeXBlIiwiaGFzV2FybmVkIiwiUmVhY3QiLCJjb25zb2xlIiwicCIsInBhdGhuYW1lIiwicmVzb2x2ZWRBcyIsImNoaWxkcmVuIiwiY2hpbGQiLCJDaGlsZHJlbiIsImNoaWxkUmVmIiwicm9vdE1hcmdpbiIsInNldFJlZiIsImVsIiwic2V0SW50ZXJzZWN0aW9uUmVmIiwic2hvdWxkUHJlZmV0Y2giLCJpc1Zpc2libGUiLCJpc1ByZWZldGNoZWQiLCJjaGlsZFByb3BzIiwicmVmIiwib25DbGljayIsImxpbmtDbGlja2VkIiwicHJpb3JpdHkiLCJMaW5rIiwicGF0aCIsIm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoIiwicHJvY2VzcyIsInJlcXVlc3RJZGxlQ2FsbGJhY2siLCJzZWxmIiwic3RhcnQiLCJEYXRlIiwic2V0VGltZW91dCIsImNiIiwiZGlkVGltZW91dCIsInRpbWVSZW1haW5pbmciLCJNYXRoIiwiTVNfTUFYX0lETEVfREVMQVkiLCJlbnRyeSIsIm1hcCIsIlByb21pc2UiLCJwcm9tIiwicmVzb2x2ZSIsInJlc29sdmVyIiwiZnV0dXJlIiwiZ2VuZXJhdG9yIiwidmFsdWUiLCJsaW5rIiwiY2FuUHJlZmV0Y2giLCJoYXNQcmVmZXRjaCIsInJlcyIsIkFTU0VUX0xPQURfRVJST1IiLCJTeW1ib2wiLCJzY3JpcHQiLCJyZWplY3QiLCJtYXJrQXNzZXRFcnJvciIsInNyYyIsIm9uQnVpbGRNYW5pZmVzdCIsImlkbGVUaW1lb3V0Iiwic2NyaXB0cyIsImFzc2V0UHJlZml4IiwiZW5jb2RlVVJJIiwiY3NzIiwiZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCIsIm1hbmlmZXN0Iiwicm91dGUiLCJhbGxGaWxlcyIsInYiLCJlbnRyeXBvaW50cyIsImxvYWRlZFNjcmlwdHMiLCJzdHlsZVNoZWV0cyIsInJvdXRlcyIsImFwcGVuZFNjcmlwdCIsImZldGNoIiwidGV4dCIsImNvbnRlbnQiLCJ3aGVuRW50cnlwb2ludCIsIndpdGhGdXR1cmUiLCJvbkVudHJ5cG9pbnQiLCJmbiIsImV4cG9ydHMiLCJjb21wb25lbnQiLCJlcnJvciIsImlucHV0Iiwib2xkIiwibG9hZFJvdXRlIiwiZ2V0RmlsZXNGb3JSb3V0ZSIsImVudHJ5cG9pbnQiLCJjbiIsIm5hdmlnYXRvciIsIm91dHB1dCIsInByZWZldGNoVmlhRG9tIiwiY3JlYXRlUm91dGVMb2FkZXIiLCJzaW5nbGV0b25Sb3V0ZXIiLCJyZWFkeUNhbGxiYWNrcyIsInJlYWR5IiwidXJsUHJvcGVydHlGaWVsZHMiLCJyb3V0ZXJFdmVudHMiLCJjb3JlTWV0aG9kRmllbGRzIiwiZ2V0IiwiUm91dGVyIiwiZmllbGQiLCJnZXRSb3V0ZXIiLCJldmVudEZpZWxkIiwiX3NpbmdsZXRvblJvdXRlciIsIm1lc3NhZ2UiLCJzdGFjayIsIlJvdXRlckNvbnRleHQiLCJjcmVhdGVSb3V0ZXIiLCJfcm91dGVyIiwiaW5zdGFuY2UiLCJBcnJheSIsImhhc0ludGVyc2VjdGlvbk9ic2VydmVyIiwiaXNEaXNhYmxlZCIsImRpc2FibGVkIiwidW5vYnNlcnZlIiwib2JzZXJ2ZSIsInNldFZpc2libGUiLCJjcmVhdGVPYnNlcnZlciIsImVsZW1lbnRzIiwib2JzZXJ2ZXIiLCJvYnNlcnZlcnMiLCJpZCIsImVudHJpZXMiLCJjYWxsYmFjayIsIkNvbXBvc2VkQ29tcG9uZW50IiwiZ2V0SW5pdGlhbFByb3BzIiwiV2l0aFJvdXRlcldyYXBwZXIiLCJuYW1lIiwiYWxsIiwib24iLCJvZmYiLCJlbWl0IiwiaGFuZGxlciIsImJhc2VQYXRoIiwiY2FuY2VsbGVkIiwicHJlZml4IiwiYWRkUGF0aFByZWZpeCIsInVybCIsImxvY2F0aW9uT3JpZ2luIiwicmVzb2x2ZWQiLCJoYXNCYXNlUGF0aCIsImludGVycG9sYXRlZFJvdXRlIiwiZHluYW1pY1JlZ2V4IiwiZHluYW1pY0dyb3VwcyIsImR5bmFtaWNNYXRjaGVzIiwiYXNQYXRobmFtZSIsInBhcmFtcyIsInBhcmFtIiwicmVwbGFjZWQiLCJyZXBlYXQiLCJvcHRpb25hbCIsImVzY2FwZVBhdGhEZWxpbWl0ZXJzIiwicmVzdWx0IiwiZmlsdGVyZWRRdWVyeSIsInF1ZXJ5IiwiYmFzZSIsInVybEFzU3RyaW5nIiwiaXNMb2NhbFVSTCIsInJlc29sdmVBcyIsImZpbmFsVXJsIiwiaW50ZXJwb2xhdGVkQXMiLCJpbnRlcnBvbGF0ZUFzIiwiaGFzaCIsIm9taXRQYXJtc0Zyb21RdWVyeSIsInJlc29sdmVkSHJlZiIsImFkZEJhc2VQYXRoIiwicmVzb2x2ZUhyZWYiLCJtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiIsIlNTR19EQVRBX05PVF9GT1VORF9FUlJPUiIsImF0dGVtcHRzIiwiZmV0Y2hSZXRyeSIsImlzU2VydmVyUmVuZGVyIiwiY29uc3RydWN0b3IiLCJhc1BhdGgiLCJjb21wb25lbnRzIiwic2RjIiwic3ViIiwiY2xjIiwicGFnZUxvYWRlciIsIl9icHMiLCJldmVudHMiLCJfd3JhcEFwcCIsImlzU3NyIiwiaXNGYWxsYmFjayIsIl9pbkZsaWdodFJvdXRlIiwiX3NoYWxsb3ciLCJsb2NhbGVzIiwiZGVmYXVsdExvY2FsZSIsInN0YXRlIiwiaW5pdGlhbCIsIl9fTl9TU0ciLCJpbml0aWFsUHJvcHMiLCJfX05fU1NQIiwiQ29tcG9uZW50IiwiX19ORVhUX0RBVEFfXyIsInJlbG9hZCIsImJhY2siLCJwdXNoIiwicHJlcGFyZVVybEFzIiwibG9jYWxlQ2hhbmdlIiwiU1QiLCJwZXJmb3JtYW5jZSIsImFkZExvY2FsZSIsImRlbEJhc2VQYXRoIiwiY2xlYW5lZEFzIiwiZGVsTG9jYWxlIiwicGFyc2VkIiwicGFnZXMiLCJfX3Jld3JpdGVzIiwibWV0aG9kIiwicG90ZW50aWFsSHJlZiIsInBhcnNlZEFzIiwicm91dGVSZWdleCIsInJvdXRlTWF0Y2giLCJzaG91bGRJbnRlcnBvbGF0ZSIsIm1pc3NpbmdQYXJhbXMiLCJyb3V0ZUluZm8iLCJkZXN0aW5hdGlvbiIsInBhcnNlZEhyZWYiLCJhcHBDb21wIiwiY2hhbmdlU3RhdGUiLCJfX04iLCJidWlsZENhbmNlbGxhdGlvbkVycm9yIiwic3NnNDA0IiwicGFnZSIsIm1vZCIsImV4aXN0aW5nUm91dGVJbmZvIiwiY2FjaGVkUm91dGVJbmZvIiwicmVxdWlyZSIsImlzVmFsaWRFbGVtZW50VHlwZSIsImRhdGFIcmVmIiwic2V0IiwiYmVmb3JlUG9wU3RhdGUiLCJvbmx5QUhhc2hDaGFuZ2UiLCJuZXdIYXNoIiwib2xkVXJsTm9IYXNoIiwib2xkSGFzaCIsInNjcm9sbFRvSGFzaCIsImlkRWwiLCJuYW1lRWwiLCJ1cmxJc05ldyIsIl9yZXNvbHZlSHJlZiIsImFwcGx5QmFzZVBhdGgiLCJjbGVhblBhdGhuYW1lIiwiaXNTc2ciLCJjYW5jZWwiLCJjb21wb25lbnRSZXN1bHQiLCJfZ2V0RGF0YSIsImRhdGEiLCJfZ2V0U3RhdGljRGF0YSIsImZldGNoTmV4dERhdGEiLCJfZ2V0U2VydmVyRGF0YSIsIkFwcFRyZWUiLCJjdHgiLCJhYm9ydENvbXBvbmVudExvYWQiLCJub3RpZnkiLCJzZWdtZW50IiwiY2hhciIsImVuY29kZVVSSUNvbXBvbmVudCIsInNsYXNoZWRQcm90b2NvbHMiLCJwcm90b2NvbCIsInVybE9iaiIsImhvc3QiLCJhdXRoIiwiaG9zdG5hbWUiLCJTdHJpbmciLCJxdWVyeXN0cmluZyIsInNlYXJjaCIsIlRFU1RfUk9VVEUiLCJnbG9iYWxCYXNlIiwicmVzb2x2ZWRCYXNlIiwib3JpZ2luIiwibWF0Y2hlck9wdGlvbnMiLCJzZW5zaXRpdmUiLCJkZWxpbWl0ZXIiLCJjdXN0b21Sb3V0ZU1hdGNoZXJPcHRpb25zIiwic3RyaWN0IiwiY3VzdG9tUm91dGUiLCJrZXlzIiwibWF0Y2hlclJlZ2V4IiwicGF0aFRvUmVnZXhwIiwibWF0Y2hlciIsInZhbGlkYXRlIiwicGFyc2VkRGVzdGluYXRpb24iLCJoYWRMb2NhbGUiLCJkZXN0UXVlcnkiLCJkZXN0UGF0aCIsImRlc3RQYXRoUGFyYW1LZXlzIiwiZGVzdFBhdGhQYXJhbXMiLCJkZXN0aW5hdGlvbkNvbXBpbGVyIiwic3RyT3JBcnJheSIsImNvbXBpbGVOb25QYXRoIiwicGFyYW1LZXlzIiwiYXBwZW5kUGFyYW1zVG9RdWVyeSIsInNob3VsZEFkZEJhc2VQYXRoIiwibmV3VXJsIiwic2VhcmNoUGFyYW1zIiwiaXNOYU4iLCJpdGVtIiwic3RyaW5naWZ5VXJsUXVlcnlQYXJhbSIsInNlYXJjaFBhcmFtc0xpc3QiLCJjdXN0b21Sb3V0ZU1hdGNoZXIiLCJyZXdyaXRlIiwiZGVzdFJlcyIsInJlIiwiZGVjb2RlIiwiZGVjb2RlVVJJQ29tcG9uZW50Iiwic2x1Z05hbWUiLCJnIiwiZ3JvdXBzIiwibSIsInN0ciIsInNlZ21lbnRzIiwibm9ybWFsaXplZFJvdXRlIiwiZ3JvdXBJbmRleCIsInBhcmFtZXRlcml6ZWRSb3V0ZSIsInBhcnNlUGFyYW1ldGVyIiwicG9zIiwiZXNjYXBlUmVnZXgiLCJyb3V0ZUtleUNoYXJDb2RlIiwicm91dGVLZXlDaGFyTGVuZ3RoIiwiZ2V0U2FmZVJvdXRlS2V5Iiwicm91dGVLZXkiLCJpIiwicm91dGVLZXlzIiwibmFtZWRQYXJhbWV0ZXJpemVkUm91dGUiLCJjbGVhbmVkS2V5IiwiaW52YWxpZEtleSIsInBhcnNlSW50IiwibmFtZWRSZWdleCIsInVzZWQiLCJwb3J0IiwiZ2V0TG9jYXRpb25PcmlnaW4iLCJBcHAiLCJnZXREaXNwbGF5TmFtZSIsInBhZ2VQcm9wcyIsImxvYWRHZXRJbml0aWFsUHJvcHMiLCJpc1Jlc1NlbnQiLCJ1cmxPYmplY3RLZXlzIiwiU1AiLCJNeUFwcCIsImFwb2xsbyIsInVzZUVmZmVjdCIsImpzc1N0eWxlcyIsInF1ZXJ5U2VsZWN0b3IiLCJwYXJlbnRFbGVtZW50IiwicmVtb3ZlQ2hpbGQiLCJ0aGVtZSIsIndpdGhEYXRhIiwiY3JlYXRlTXVpVGhlbWUiLCJwYWxldHRlIiwicHJpbWFyeSIsIm1haW4iLCJzZWNvbmRhcnkiLCJyZWQiLCJBNDAwIiwiYmFja2dyb3VuZCIsImRlZmF1bHQiLCJvcmFuZ2UiLCJNZXRhIiwidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInJvb3QiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImFsbENvbnRyb2xzIiwid2hvbGVBcHAiLCJtYWlucyIsImdyaWRBcmVhIiwicGFkZGluZ0xlZnQiLCJncmlkVGVtcGxhdGVSb3dzIiwicGFkZGluZ1RvcCIsInBhZGRpbmdSaWdodCIsImZvb3RlcnMiLCJncmlkVGVtcGxhdGVDb2x1bW5zIiwiYWxpZ25JdGVtcyIsInBvc2l0aW9uIiwiaGVpZ2h0IiwiekluZGV4IiwiYm9yZGVyQm90dG9tIiwiaW5uZXIiLCJwYWRkaW5nIiwiUGFnZSIsImNsYXNzZXMiLCJTeWdlZmV4VGhlbWUiLCJkcmF3ZXJXaWR0aCIsImp1c3RpZnlDb250ZW50IiwiZHJhd2VyIiwiYnJlYWtwb2ludHMiLCJ1cCIsIndpZHRoIiwiZmxleFNocmluayIsImFwcEJhciIsIm1lbnVCdXR0b24iLCJtYXJnaW5SaWdodCIsInNwYWNpbmciLCJ0b29sYmFyIiwibWl4aW5zIiwiZHJhd2VyUGFwZXIiLCJmbGV4R3JvdyIsInVzZXJOYW1lIiwiaXRlbXMiLCJsYWJlbCIsIkljb24iLCJIb21lSWNvbiIsIlJlY2VpcHRJY29uIiwiU2V0dGluZ3NJY29uIiwiTm90aWZpY2F0aW9uc0ljb24iLCJEZXNrdG9wV2luZG93c0ljb24iLCJMYXlvdXREcmF3ZXIiLCJtb2JpbGVPcGVuIiwic2V0TW9iaWxlT3BlbiIsInVzZVN0YXRlIiwiaGFuZGxlRHJhd2VyVG9nZ2xlIiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3IiLCJjb250YWluZXIiLCJ1bmRlZmluZWQiLCJib2R5IiwibWUiLCJncmlkR2FwIiwicGxhY2VJdGVtcyIsInRleHRUcmFuc2Zvcm0iLCJwYXBlciIsImtlZXBNb3VudGVkIiwiU2lkZWJhckl0ZW0iLCJkZXB0aFN0ZXAiLCJkZXB0aCIsImV4cGFuZGVkIiwicmVzdCIsImNvbGxhcHNlZCIsInNldENvbGxhcHNlZCIsIm9uQ2xpY2tQcm9wIiwidG9nZ2xlQ29sbGFwc2UiLCJwcmV2VmFsdWUiLCJpc0FycmF5IiwiZXhwYW5kSWNvbiIsImxlbmd0aCIsInN1Ykl0ZW0iLCJpbmRleCIsIm1hcmdpbiIsIlNpZGViYXIiLCJzaWRlYmFySXRlbSIsInNpZ25JbkNhbmRpZGF0ZSIsImdxbCIsInNpZ25vdXRNdXRhdGlvbiIsImRlbGV0ZVJlcG9ydE11dGF0aW9uIiwidXBkYXRlU2Vzc2lvbk11dGF0aW9uIiwidXBkYXRlRWR1Y2F0aW9uVHlwZU11dGF0aW9uIiwidXBkYXRlU3ViamVjdE11dGF0aW9uIiwidXBkYXRlUmFua011dGF0aW9uIiwidXBkYXRlU3BlY2lhbHR5TXV0YXRpb24iLCJ1cGRhdGVEaXZpc2lvbk11dGF0aW9uIiwidXBkYXRlUmVnaW9uTXV0YXRpb24iLCJjcmVhdGVOZXdSZXBvcnRNdXRhdGlvbiIsImNyZWF0ZVJlZ2lzdHJhdGlvbk11dGF0aW9uIiwiY3JlYXRlQ2VudGVyRXhhbVNlc3Npb25NdXRhdGlvbiIsImNyZWF0ZVBoYXNlUmFua011dGF0aW9uIiwiY3JlYXRlQ2VudGVyRXhhbVNlc3Npb25FeGFtaW5lck11dGF0aW9uIiwiY3JlYXRlQ2VudGVyRXhhbVNlc3Npb25TcGVjaWFsdHlNdXRhdGlvbiIsImNyZWF0ZURpdmlzaW9uTXV0YXRpb24iLCJjcmVhdGVDZW50ZXJNdXRhdGlvbiIsImNyZWF0ZVNwZWNpYWx0eU11dGF0aW9uIiwiY3JlYXRlRWR1Y2F0aW9uVHlwZU11dGF0aW9uIiwiY3JlYXRlVG93bk11dGF0aW9uIiwiY3JlYXRlTmV3U3ViamVjdE11dGF0aW9uIiwiY3JlYXRlU3ViRGl2aXNpb25NdXRhdGlvbiIsImNyZWF0ZU5ld1Nlc3Npb25NdXRhdGlvbiIsImNyZWF0ZU5ld1JhbmtNdXRhdGlvbiIsImNyZWF0ZU5ld1JlZ2lvbk11dGF0aW9uIiwic2lnbnVwVXNlck11dGF0aW9uIiwibG9naW5Vc2VyTXV0YXRpb24iLCJyZXF1ZXN0UmVzZXRNdXRhdGlvbiIsImNyZWF0ZU5ld0NvdW50cnlNdXRhdGlvbiIsImNyZWF0ZVBoYXNlTXV0YXRpb24iLCJjcmVhdGVBdHRlbmRhbmNlTXV0YXRpb24iLCJjcmVhdGVFeGFtTXV0YXRpb24iLCJyZWdpc3RlclN1YmplY3RTcGVjaWFsdHlNdXRhdGlvbiIsInJlZ2lzdGVyTmV3U3ViamVjdFNwZWNpYWx0eU11dGF0aW9uIiwiY3JlYXRlQ2FuZGlkYXRlTXV0YXRpb24iLCJjcmVhdGVNdWx0aXBsZUNhbmRpZGF0ZXNNdXRhdGlvbiIsImNyZWF0ZUV4YW1pbmVyTXV0YXRpb24iLCJ1cGRhdGVTdWJEaXZpc2lvbk11dGF0aW9uIiwidXBkYXRlQ2VudGVyTXV0YXRpb24iLCJ1cGRhdGVUb3duTXV0YXRpb24iLCJ1cGRhdGVFeGFtTXV0YXRpb24iLCJ1cGRhdGVTY29yZU11dGF0aW9uIiwiZW50ZXJNYXJrc011dGF0aW9uIiwidXBkYXRlQ2FuZGlkYXRlTXV0YXRpb24iLCJ1cGRhdGVFeGFtaW5lck11dGF0aW9uIiwidXBkYXRlU2lnblVwTXV0YXRpb24iLCJ1cGRhdGVJdGVtTXV0YXRpb24iLCJ1cGRhdGVNdXRhdGlvbiIsInByZXZlbnREZWZhdWx0IiwibG9nIiwidmFyaWFibGVzIiwiZGVsZXRlUmVnaW9uTXV0YXRpb24iLCJkZWxldGVDZW50ZXJNdXRhdGlvbiIsImRlbGV0ZVN1YkRpdmlzaW9uTXV0YXRpb24iLCJkZWxldGVEaXZpc2lvbk11dGF0aW9uIiwiZGVsZXRlU3ViamVjdE11dGF0aW9uIiwiZGVsZXRlVG93bk11dGF0aW9uIiwiY3VycmVudFVzZXJRdWVyeSIsInNpbmdsZUVkdWNhdGlvblR5cGVRdWVyeSIsImdldENFU0V4YW1pbmVyUXVlcnkiLCJnZXRBbGxFZHVjYXRpb25UeXBlc1F1ZXJ5IiwiZ2V0QWxsRWR1Y2F0aW9uVHlwZXNBbmRTdWJqZWN0c1F1ZXJ5IiwiZ2V0QWxsUmVnaW9uc1F1ZXJ5IiwiZ2V0QWxsVXNlcnNRdWVyeSIsImdldENlbnRlclJlc3VsdHNRdWVyeSIsImdldENhbmRpZGF0ZVJlc3VsdHNRdWVyeSIsImdldEV4YW1pbmVyUmVnaXN0cmF0aW9uUXVlcnkiLCJnZXRBbGxDZW50ZXJSZXN1bHRzUXVlcnkiLCJnZXRFYWNoQ2FuZGlkYXRlUmVzdWx0c1F1ZXJ5IiwiZ2V0Q2FuZGlkYXRlUmVnaXN0cmF0aW9uSW5mb1F1ZXJ5IiwiZ2V0Q2FuZGlkYXRlUmVnaXN0cmF0aW9uSURRdWVyeSIsImdldENhbmRpZGF0ZVJlZ2lzdHJhdGlvbklEc1F1ZXJ5IiwicmVnaXN0cmF0aW9uSURGcm9tU2VjcmV0Q29kZVF1ZXJ5IiwiZ2V0QWxsQ2FuZGlkYXRlUmVnaXN0cmF0aW9uSURzUXVlcnkiLCJnZXRDYW5kaWRhdGVJRFF1ZXJ5IiwiZ2V0RXhhbWluZXJJRFF1ZXJ5IiwiZ2V0UmVnaXN0cmF0aW9uSURGcm9tUmVnTnVtYmVyUXVlcnkiLCJnZXRDZW50ZXJJREZyb21DZW50ZXJDb2RlUXVlcnkiLCJnZXRDZW50ZXJSZWdpc3RyYXRpb25JRHNRdWVyeSIsImNlbnRlckV4YW1TZXNzaW9uU3BlY2lhbHR5Rm9yUmVzdWx0c1F1ZXJ5IiwiY2VudGVyRXhhbVNlc3Npb25Gb3JSZXN1bHRzUXVlcnkiLCJyZXN1bHRzUmVnaXN0cmF0aW9uUXVlcnkiLCJjZW50ZXJFeGFtU2Vzc2lvblNwZWNpYWx0eVJlc3VsdHNRdWVyeSIsImdldENhbmRpZGF0ZUJ5Q2FuZENvZGVRdWVyeSIsImdldEFsbFJhbmtzUXVlcnkiLCJnZXRBbGxQaGFzZXNRdWVyeSIsImdldEFsbFN1YmplY3RzUXVlcnkiLCJnZXRBbGxTdWJqZWN0R3JvdXBzUXVlcnkiLCJnZXRBbGxTcGVjaWFsdGllc09mQW5FZHVjYXRpb25UeXBlUXVlcnkiLCJnZXRBbGxTcGVjaWFsdGllc09mQUNlbnRlckV4YW1TZXNzaW9uUXVlcnkiLCJnZXRSZWdpc3RyYXRpb25PZkNFU1NRdWVyeSIsImdldEFsbFNwZWNpYWx0aWVzUXVlcnkiLCJnZXRBbGxTdWJqZWN0c09mQW5FZHVjVHlwZVF1ZXJ5IiwiZ2V0QWxsU3ViamVjdHNXaXRoRWR1Y1R5cGVzUXVlcnkiLCJnZXRBbGxTdWJqZWN0U3BlY2lhbHRpZXNPZkFTcGVjaWFsdHlRdWVyeSIsImdldEFsbEV4YW1zUXVlcnkiLCJnZXRBbGxHcm91cDJRdWVyeSIsImdldEFsbEdyb3VwMVF1ZXJ5IiwiZ2V0QWxsU2Vzc2lvbnNRdWVyeSIsImdldEFsbERpdmlzaW9uc1F1ZXJ5IiwiZ2V0QWxsUmVnaW9uc0FuZERpdmlzaW9uc1F1ZXJ5IiwiZ2V0QWxsUmVnaW9uc0RpdmlzaW9uc0FuZFRvd25zUXVlcnkiLCJnZXRBbGxSZWdpb25zRGl2aXNpb25zVG93bnNDZW50ZXJzUXVlcnkiLCJnZXREaXZpc2lvbnNPZkFSZWdpb25RdWVyeSIsImdldFN1YkRpdmlzaW9uc09mQURpdmlzaW9uUXVlcnkiLCJnZXRBbGxTdWJEaXZpc2lvbnNRdWVyeSIsImdldEFsbFRvd25zUXVlcnkiLCJnZXRUb3duc09mQVN1YkRpdmlzaW9uUXVlcnkiLCJnZXRDZW50ZXJzT2ZBVG93blF1ZXJ5IiwiY2VudGVyc1BlclRvd25RdWVyeSIsImdldEFsbENlbnRlcnNRdWVyeSIsImdldEFsbENhbmRpZGF0ZXNRdWVyeSIsInNpbmdsZUNlbnRlclF1ZXJ5IiwiZ2V0U2luZ2xlQ2VudGVyUXVlcnkiLCJnZXRTaW5nbGVDZW50ZXJGcm9tQ2VudGVyU2VjcmV0Q29kZVF1ZXJ5IiwiZ2V0U2luZ2xlUHJvZlF1ZXJ5IiwiZ2V0U2luZ2xlQ2VudGVyQnlDb2RlUXVlcnkiLCJnZXRBU2luZ2xlQ2VudGVyUXVlcnkiLCJzaW5nbGVUb3duUXVlcnkiLCJnZXRTaW5nbGVDZW50ZXJFeGFtU2Vzc2lvblF1ZXJ5IiwiZ2V0U2luZ2xlQ2VudGVyRXhhbVNlc3Npb25CeVNlY3JldENvZGVRdWVyeSIsImdldEFsbFJhbmtzT2ZBbkV4YW1QaGFzZVF1ZXJ5IiwiZ2V0UmVnaXN0ZXJlZENhbmRpZGF0ZUNvdW50UXVlcnkiLCJnZXRSZWdpc3RlcmVkQ2FuZGlkYXRlc1BlclNwZWNpYWx0eSIsImdldENlbnRlckV4YW1TZXNzaW9uU3BlY2lhbHR5UXVlcnkiLCJnZXRTcGVjaWFsdHlGcm9tQ0VTU1F1ZXJ5IiwiZ2V0RXhhbVNlc3Npb25RdWVyeSIsInNpbmdsZUV4YW1RdWVyeSIsInNpbmdsZUNhbmRpZGF0ZVF1ZXJ5MSIsInNpbmdsZUNhbmRpZGF0ZVF1ZXJ5Iiwic2luZ2xlRXhhbWluZXJRdWVyeSIsInZpZXdTaW5nbGVDYW5kaWRhdGVRdWVyeSIsImdldFNjb3JlSUQiLCJnZXRSZWdpc3RyYXRpb25zIiwic2luZ2xlU3ViRGl2aXNpb25RdWVyeSIsImdldFNpbmdsZVJlZ2lvblF1ZXJ5Iiwic2luZ2xlUGhhc2VRdWVyeSIsInNpbmdsZVNwZWNpYWx0eVF1ZXJ5IiwiZGF0YUZvckF2ZXJhZ2UiLCJzaW5nbGVEaXZpc2lvblF1ZXJ5Iiwic2luZ2xlUmFua1F1ZXJ5Iiwic2luZ2xlU3ViamVjdFF1ZXJ5Iiwic2luZ2xlU3ViamVjdEdyb3VwUXVlcnkiLCJzaW5nbGVTZXNzaW9uUXVlcnkiLCJTaWdub3V0Iiwic2lnbm91dCIsIlVzZXIiLCJwYXlsb2FkIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiZnVuYyIsImlzUmVxdWlyZWQiLCJsaWdodCIsIkEyMDAiLCJ0eXBvZ3JhcGh5IiwiZm9udEZhbWlseSIsImpvaW4iLCJib2R5MiIsImZvbnRTaXplIiwiYm9keTEiLCJzdWJUaXRsZTEiLCJzdWJUaXRsZTIiLCJoNiIsInNoYXBlIiwiYm9yZGVyUmFkaXVzIiwib3ZlcnJpZGVzIiwiTXVpVG9vbGJhciIsInJlZ3VsYXIiLCJtaW5IZWlnaHQiLCJtYXhIZWlnaHQiLCJNdWlTZWxlY3QiLCJwYWRkaW5nQm90dG9tIiwiTXVpVHlwb2dyYXBoeSIsIk11aU91dGxpbmVkSW5wdXQiLCJNdWlCdXR0b24iLCJtYXJnaW5Ub3AiLCJtYXJnaW5Cb3R0b20iLCJmb250V2VpZ2h0IiwiTXVpVGFibGVSb3ciLCJNdWlUYWJsZUhlYWQiLCJ0b3AiLCJNdWlGb3JtQ29udHJvbCIsIk11aUljb25CdXR0b24iLCJNdWlUYWJsZUNlbGwiLCJtYXJnaW5Ob3JtYWwiLCJNdWlQaWNrZXJzVG9vbGJhciIsImFsaWduQ2VudGVyIiwiTXVpUGlja2Vyc0NhbGVuZGFySGVhZGVyIiwidHJhbnNpdGlvbkNvbnRhaW5lciIsImljb25CdXR0b24iLCJNdWlQaWNrZXJzVG9vbGJhclRleHQiLCJ0b29sYmFyVHh0IiwiTXVpUGlja2Vyc0RhdGVQaWNrZXJSb290IiwiZGF5c0hlYWRlciIsIk11aUFwcEJhciIsImNvbG9yUHJpbWFyeSIsIk11aVBhcGVyIiwiYm9yZGVyVG9wIiwiTXVpSW5wdXRCYXNlIiwiTXVpQnV0dG9uQmFzZSIsIk11aVN2Z0ljb24iLCJNVGFibGVUb29sYmFyIiwiYWN0aW9ucyIsInRpdGxlIiwib3ZlcmZsb3ciLCJzZWFyY2hGaWVsZCIsIm1heFdpZHRoIiwiTXVpRm9ybUhlbHBlclRleHQiLCJ2YXJpYW50IiwiTXVpVGV4dEZpZWxkIiwiTXVpSW5wdXRMYWJlbCIsIk11aVRhYmxlVG9vbGJhciIsIk11aUdyaWQiLCJkaXJlY3Rpb24iLCJqdXN0aWZ5SXRlbXMiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixF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QyxHQUFHakYsa0RBQUk7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0F0RUE7QUF3RUEsTUFBTWtGLHdCQUF3QixHQUFHbEYsa0RBQUk7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FwREE7QUFzREEsTUFBTW1GLHNDQUFzQyxHQUFHbkYsa0RBQUk7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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Ozs7Ozs7QUNBQSwwRDs7Ozs7Ozs7Ozs7QUNBQSxvRDs7Ozs7Ozs7Ozs7QUNBQSxvRDs7Ozs7Ozs7Ozs7QUNBQSw2RDs7Ozs7Ozs7Ozs7QUNBQSx1RDs7Ozs7Ozs7Ozs7QUNBQSx3RDs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSw2Qzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSx5QyIsImZpbGUiOiJwYWdlcy9fYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIpOyIsIi8vIFRoaXMgaXMgY2xpZW50IHNpZGUgY29uZmlnIG9ubHkgLSBkb24ndCBwdXQgYW55dGhpbmcgaW4gaGVyZSB0aGF0IHNob3VsZG4ndCBiZSBwdWJsaWMhXHJcbmV4cG9ydCBjb25zdCBlbmRwb2ludCA9IGBodHRwOi8vbG9jYWxob3N0OjUwMDAwYDtcclxuLy8gZXhwb3J0IGNvbnN0IHBlclBhZ2UgPSA2O1xyXG4vLyBleHBvcnQgIHtwZXJQYWdlfTtcclxuIiwiaW1wb3J0IHdpdGhBcG9sbG8gZnJvbSAnbmV4dC13aXRoLWFwb2xsbyc7XHJcbmltcG9ydCBBcG9sbG9DbGllbnQgZnJvbSAnYXBvbGxvLWJvb3N0JztcclxuaW1wb3J0IHsgZW5kcG9pbnQgfSBmcm9tICcuLi9jb25maWcnO1xyXG5cclxuZnVuY3Rpb24gY3JlYXRlQ2xpZW50KHsgaGVhZGVycyB9KSB7XHJcbiAgcmV0dXJuIG5ldyBBcG9sbG9DbGllbnQoe1xyXG4gICAgdXJpOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50JyA/IGVuZHBvaW50IDogcHJvZEVuZHBvaW50LFxyXG4gICAgcmVxdWVzdDogb3BlcmF0aW9uID0+IHtcclxuICAgICAgb3BlcmF0aW9uLnNldENvbnRleHQoe1xyXG4gICAgICAgIGZldGNoT3B0aW9uczoge1xyXG4gICAgICAgICAgY3JlZGVudGlhbHM6ICdpbmNsdWRlJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGhlYWRlcnMsXHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgICAgLy8gbG9jYWwgZGF0YSBmcm9tIGFwb2xsbyBjbGllbnRcclxuICAgICAgY2xpZW50U3RhdGU6e1xyXG4gICAgICAgcmVzb2x2ZXJzOnt9LFxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhBcG9sbG8oY3JlYXRlQ2xpZW50KTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IENoaWxkcmVuLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7XG4gIGFkZEJhc2VQYXRoLFxuICBhZGRMb2NhbGUsXG4gIGlzTG9jYWxVUkwsXG4gIE5leHRSb3V0ZXIsXG4gIFByZWZldGNoT3B0aW9ucyxcbiAgcmVzb2x2ZUhyZWYsXG59IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnLi9yb3V0ZXInXG5pbXBvcnQgeyB1c2VJbnRlcnNlY3Rpb24gfSBmcm9tICcuL3VzZS1pbnRlcnNlY3Rpb24nXG5cbnR5cGUgVXJsID0gc3RyaW5nIHwgVXJsT2JqZWN0XG50eXBlIFJlcXVpcmVkS2V5czxUPiA9IHtcbiAgW0sgaW4ga2V5b2YgVF0tPzoge30gZXh0ZW5kcyBQaWNrPFQsIEs+ID8gbmV2ZXIgOiBLXG59W2tleW9mIFRdXG50eXBlIE9wdGlvbmFsS2V5czxUPiA9IHtcbiAgW0sgaW4ga2V5b2YgVF0tPzoge30gZXh0ZW5kcyBQaWNrPFQsIEs+ID8gSyA6IG5ldmVyXG59W2tleW9mIFRdXG5cbmV4cG9ydCB0eXBlIExpbmtQcm9wcyA9IHtcbiAgaHJlZjogVXJsXG4gIGFzPzogVXJsXG4gIHJlcGxhY2U/OiBib29sZWFuXG4gIHNjcm9sbD86IGJvb2xlYW5cbiAgc2hhbGxvdz86IGJvb2xlYW5cbiAgcGFzc0hyZWY/OiBib29sZWFuXG4gIHByZWZldGNoPzogYm9vbGVhblxuICBsb2NhbGU/OiBzdHJpbmcgfCBmYWxzZVxufVxudHlwZSBMaW5rUHJvcHNSZXF1aXJlZCA9IFJlcXVpcmVkS2V5czxMaW5rUHJvcHM+XG50eXBlIExpbmtQcm9wc09wdGlvbmFsID0gT3B0aW9uYWxLZXlzPExpbmtQcm9wcz5cblxuY29uc3QgcHJlZmV0Y2hlZDogeyBbY2FjaGVLZXk6IHN0cmluZ106IGJvb2xlYW4gfSA9IHt9XG5cbmZ1bmN0aW9uIHByZWZldGNoKFxuICByb3V0ZXI6IE5leHRSb3V0ZXIsXG4gIGhyZWY6IHN0cmluZyxcbiAgYXM6IHN0cmluZyxcbiAgb3B0aW9ucz86IFByZWZldGNoT3B0aW9uc1xuKTogdm9pZCB7XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykgcmV0dXJuXG4gIGlmICghaXNMb2NhbFVSTChocmVmKSkgcmV0dXJuXG4gIC8vIFByZWZldGNoIHRoZSBKU09OIHBhZ2UgaWYgYXNrZWQgKG9ubHkgaW4gdGhlIGNsaWVudClcbiAgLy8gV2UgbmVlZCB0byBoYW5kbGUgYSBwcmVmZXRjaCBlcnJvciBoZXJlIHNpbmNlIHdlIG1heSBiZVxuICAvLyBsb2FkaW5nIHdpdGggcHJpb3JpdHkgd2hpY2ggY2FuIHJlamVjdCBidXQgd2UgZG9uJ3RcbiAgLy8gd2FudCB0byBmb3JjZSBuYXZpZ2F0aW9uIHNpbmNlIHRoaXMgaXMgb25seSBhIHByZWZldGNoXG4gIHJvdXRlci5wcmVmZXRjaChocmVmLCBhcywgb3B0aW9ucykuY2F0Y2goKGVycikgPT4ge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAvLyByZXRocm93IHRvIHNob3cgaW52YWxpZCBVUkwgZXJyb3JzXG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG4gIH0pXG4gIGNvbnN0IGN1ckxvY2FsZSA9XG4gICAgb3B0aW9ucyAmJiB0eXBlb2Ygb3B0aW9ucy5sb2NhbGUgIT09ICd1bmRlZmluZWQnXG4gICAgICA/IG9wdGlvbnMubG9jYWxlXG4gICAgICA6IHJvdXRlciAmJiByb3V0ZXIubG9jYWxlXG5cbiAgLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiAgcHJlZmV0Y2hlZFtocmVmICsgJyUnICsgYXMgKyAoY3VyTG9jYWxlID8gJyUnICsgY3VyTG9jYWxlIDogJycpXSA9IHRydWVcbn1cblxuZnVuY3Rpb24gaXNNb2RpZmllZEV2ZW50KGV2ZW50OiBSZWFjdC5Nb3VzZUV2ZW50KSB7XG4gIGNvbnN0IHsgdGFyZ2V0IH0gPSBldmVudC5jdXJyZW50VGFyZ2V0IGFzIEhUTUxBbmNob3JFbGVtZW50XG4gIHJldHVybiAoXG4gICAgKHRhcmdldCAmJiB0YXJnZXQgIT09ICdfc2VsZicpIHx8XG4gICAgZXZlbnQubWV0YUtleSB8fFxuICAgIGV2ZW50LmN0cmxLZXkgfHxcbiAgICBldmVudC5zaGlmdEtleSB8fFxuICAgIGV2ZW50LmFsdEtleSB8fCAvLyB0cmlnZ2VycyByZXNvdXJjZSBkb3dubG9hZFxuICAgIChldmVudC5uYXRpdmVFdmVudCAmJiBldmVudC5uYXRpdmVFdmVudC53aGljaCA9PT0gMilcbiAgKVxufVxuXG5mdW5jdGlvbiBsaW5rQ2xpY2tlZChcbiAgZTogUmVhY3QuTW91c2VFdmVudCxcbiAgcm91dGVyOiBOZXh0Um91dGVyLFxuICBocmVmOiBzdHJpbmcsXG4gIGFzOiBzdHJpbmcsXG4gIHJlcGxhY2U/OiBib29sZWFuLFxuICBzaGFsbG93PzogYm9vbGVhbixcbiAgc2Nyb2xsPzogYm9vbGVhbixcbiAgbG9jYWxlPzogc3RyaW5nIHwgZmFsc2Vcbik6IHZvaWQge1xuICBjb25zdCB7IG5vZGVOYW1lIH0gPSBlLmN1cnJlbnRUYXJnZXRcblxuICBpZiAobm9kZU5hbWUgPT09ICdBJyAmJiAoaXNNb2RpZmllZEV2ZW50KGUpIHx8ICFpc0xvY2FsVVJMKGhyZWYpKSkge1xuICAgIC8vIGlnbm9yZSBjbGljayBmb3IgYnJvd3NlcuKAmXMgZGVmYXVsdCBiZWhhdmlvclxuICAgIHJldHVyblxuICB9XG5cbiAgZS5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgLy8gIGF2b2lkIHNjcm9sbCBmb3IgdXJscyB3aXRoIGFuY2hvciByZWZzXG4gIGlmIChzY3JvbGwgPT0gbnVsbCkge1xuICAgIHNjcm9sbCA9IGFzLmluZGV4T2YoJyMnKSA8IDBcbiAgfVxuXG4gIC8vIHJlcGxhY2Ugc3RhdGUgaW5zdGVhZCBvZiBwdXNoIGlmIHByb3AgaXMgcHJlc2VudFxuICByb3V0ZXJbcmVwbGFjZSA/ICdyZXBsYWNlJyA6ICdwdXNoJ10oaHJlZiwgYXMsIHsgc2hhbGxvdywgbG9jYWxlIH0pLnRoZW4oXG4gICAgKHN1Y2Nlc3M6IGJvb2xlYW4pID0+IHtcbiAgICAgIGlmICghc3VjY2VzcykgcmV0dXJuXG4gICAgICBpZiAoc2Nyb2xsKSB7XG4gICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgICBkb2N1bWVudC5ib2R5LmZvY3VzKClcbiAgICAgIH1cbiAgICB9XG4gIClcbn1cblxuZnVuY3Rpb24gTGluayhwcm9wczogUmVhY3QuUHJvcHNXaXRoQ2hpbGRyZW48TGlua1Byb3BzPikge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGZ1bmN0aW9uIGNyZWF0ZVByb3BFcnJvcihhcmdzOiB7XG4gICAgICBrZXk6IHN0cmluZ1xuICAgICAgZXhwZWN0ZWQ6IHN0cmluZ1xuICAgICAgYWN0dWFsOiBzdHJpbmdcbiAgICB9KSB7XG4gICAgICByZXR1cm4gbmV3IEVycm9yKFxuICAgICAgICBgRmFpbGVkIHByb3AgdHlwZTogVGhlIHByb3AgXFxgJHthcmdzLmtleX1cXGAgZXhwZWN0cyBhICR7YXJncy5leHBlY3RlZH0gaW4gXFxgPExpbms+XFxgLCBidXQgZ290IFxcYCR7YXJncy5hY3R1YWx9XFxgIGluc3RlYWQuYCArXG4gICAgICAgICAgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnXG4gICAgICAgICAgICA/IFwiXFxuT3BlbiB5b3VyIGJyb3dzZXIncyBjb25zb2xlIHRvIHZpZXcgdGhlIENvbXBvbmVudCBzdGFjayB0cmFjZS5cIlxuICAgICAgICAgICAgOiAnJylcbiAgICAgIClcbiAgICB9XG5cbiAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgIGNvbnN0IHJlcXVpcmVkUHJvcHNHdWFyZDogUmVjb3JkPExpbmtQcm9wc1JlcXVpcmVkLCB0cnVlPiA9IHtcbiAgICAgIGhyZWY6IHRydWUsXG4gICAgfSBhcyBjb25zdFxuICAgIGNvbnN0IHJlcXVpcmVkUHJvcHM6IExpbmtQcm9wc1JlcXVpcmVkW10gPSBPYmplY3Qua2V5cyhcbiAgICAgIHJlcXVpcmVkUHJvcHNHdWFyZFxuICAgICkgYXMgTGlua1Byb3BzUmVxdWlyZWRbXVxuICAgIHJlcXVpcmVkUHJvcHMuZm9yRWFjaCgoa2V5OiBMaW5rUHJvcHNSZXF1aXJlZCkgPT4ge1xuICAgICAgaWYgKGtleSA9PT0gJ2hyZWYnKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBwcm9wc1trZXldID09IG51bGwgfHxcbiAgICAgICAgICAodHlwZW9mIHByb3BzW2tleV0gIT09ICdzdHJpbmcnICYmIHR5cGVvZiBwcm9wc1trZXldICE9PSAnb2JqZWN0JylcbiAgICAgICAgKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2Agb3IgYG9iamVjdGAnLFxuICAgICAgICAgICAgYWN0dWFsOiBwcm9wc1trZXldID09PSBudWxsID8gJ251bGwnIDogdHlwZW9mIHByb3BzW2tleV0sXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuICAgICAgICBjb25zdCBfOiBuZXZlciA9IGtleVxuICAgICAgfVxuICAgIH0pXG5cbiAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgIGNvbnN0IG9wdGlvbmFsUHJvcHNHdWFyZDogUmVjb3JkPExpbmtQcm9wc09wdGlvbmFsLCB0cnVlPiA9IHtcbiAgICAgIGFzOiB0cnVlLFxuICAgICAgcmVwbGFjZTogdHJ1ZSxcbiAgICAgIHNjcm9sbDogdHJ1ZSxcbiAgICAgIHNoYWxsb3c6IHRydWUsXG4gICAgICBwYXNzSHJlZjogdHJ1ZSxcbiAgICAgIHByZWZldGNoOiB0cnVlLFxuICAgICAgbG9jYWxlOiB0cnVlLFxuICAgIH0gYXMgY29uc3RcbiAgICBjb25zdCBvcHRpb25hbFByb3BzOiBMaW5rUHJvcHNPcHRpb25hbFtdID0gT2JqZWN0LmtleXMoXG4gICAgICBvcHRpb25hbFByb3BzR3VhcmRcbiAgICApIGFzIExpbmtQcm9wc09wdGlvbmFsW11cbiAgICBvcHRpb25hbFByb3BzLmZvckVhY2goKGtleTogTGlua1Byb3BzT3B0aW9uYWwpID0+IHtcbiAgICAgIGNvbnN0IHZhbFR5cGUgPSB0eXBlb2YgcHJvcHNba2V5XVxuXG4gICAgICBpZiAoa2V5ID09PSAnYXMnKSB7XG4gICAgICAgIGlmIChwcm9wc1trZXldICYmIHZhbFR5cGUgIT09ICdzdHJpbmcnICYmIHZhbFR5cGUgIT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2Agb3IgYG9iamVjdGAnLFxuICAgICAgICAgICAgYWN0dWFsOiB2YWxUeXBlLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoa2V5ID09PSAnbG9jYWxlJykge1xuICAgICAgICBpZiAocHJvcHNba2V5XSAmJiB2YWxUeXBlICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgJyxcbiAgICAgICAgICAgIGFjdHVhbDogdmFsVHlwZSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKFxuICAgICAgICBrZXkgPT09ICdyZXBsYWNlJyB8fFxuICAgICAgICBrZXkgPT09ICdzY3JvbGwnIHx8XG4gICAgICAgIGtleSA9PT0gJ3NoYWxsb3cnIHx8XG4gICAgICAgIGtleSA9PT0gJ3Bhc3NIcmVmJyB8fFxuICAgICAgICBrZXkgPT09ICdwcmVmZXRjaCdcbiAgICAgICkge1xuICAgICAgICBpZiAocHJvcHNba2V5XSAhPSBudWxsICYmIHZhbFR5cGUgIT09ICdib29sZWFuJykge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2Bib29sZWFuYCcsXG4gICAgICAgICAgICBhY3R1YWw6IHZhbFR5cGUsXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuICAgICAgICBjb25zdCBfOiBuZXZlciA9IGtleVxuICAgICAgfVxuICAgIH0pXG5cbiAgICAvLyBUaGlzIGhvb2sgaXMgaW4gYSBjb25kaXRpb25hbCBidXQgdGhhdCBpcyBvayBiZWNhdXNlIGBwcm9jZXNzLmVudi5OT0RFX0VOVmAgbmV2ZXIgY2hhbmdlc1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9ydWxlcy1vZi1ob29rc1xuICAgIGNvbnN0IGhhc1dhcm5lZCA9IFJlYWN0LnVzZVJlZihmYWxzZSlcbiAgICBpZiAocHJvcHMucHJlZmV0Y2ggJiYgIWhhc1dhcm5lZC5jdXJyZW50KSB7XG4gICAgICBoYXNXYXJuZWQuY3VycmVudCA9IHRydWVcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgJ05leHQuanMgYXV0by1wcmVmZXRjaGVzIGF1dG9tYXRpY2FsbHkgYmFzZWQgb24gdmlld3BvcnQuIFRoZSBwcmVmZXRjaCBhdHRyaWJ1dGUgaXMgbm8gbG9uZ2VyIG5lZWRlZC4gTW9yZTogaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvcHJlZmV0Y2gtdHJ1ZS1kZXByZWNhdGVkJ1xuICAgICAgKVxuICAgIH1cbiAgfVxuICBjb25zdCBwID0gcHJvcHMucHJlZmV0Y2ggIT09IGZhbHNlXG5cbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgY29uc3QgcGF0aG5hbWUgPSAocm91dGVyICYmIHJvdXRlci5wYXRobmFtZSkgfHwgJy8nXG5cbiAgY29uc3QgeyBocmVmLCBhcyB9ID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XG4gICAgY29uc3QgW3Jlc29sdmVkSHJlZiwgcmVzb2x2ZWRBc10gPSByZXNvbHZlSHJlZihwYXRobmFtZSwgcHJvcHMuaHJlZiwgdHJ1ZSlcbiAgICByZXR1cm4ge1xuICAgICAgaHJlZjogcmVzb2x2ZWRIcmVmLFxuICAgICAgYXM6IHByb3BzLmFzXG4gICAgICAgID8gcmVzb2x2ZUhyZWYocGF0aG5hbWUsIHByb3BzLmFzKVxuICAgICAgICA6IHJlc29sdmVkQXMgfHwgcmVzb2x2ZWRIcmVmLFxuICAgIH1cbiAgfSwgW3BhdGhuYW1lLCBwcm9wcy5ocmVmLCBwcm9wcy5hc10pXG5cbiAgbGV0IHsgY2hpbGRyZW4sIHJlcGxhY2UsIHNoYWxsb3csIHNjcm9sbCwgbG9jYWxlIH0gPSBwcm9wc1xuXG4gIC8vIERlcHJlY2F0ZWQuIFdhcm5pbmcgc2hvd24gYnkgcHJvcFR5cGUgY2hlY2suIElmIHRoZSBjaGlsZHJlbiBwcm92aWRlZCBpcyBhIHN0cmluZyAoPExpbms+ZXhhbXBsZTwvTGluaz4pIHdlIHdyYXAgaXQgaW4gYW4gPGE+IHRhZ1xuICBpZiAodHlwZW9mIGNoaWxkcmVuID09PSAnc3RyaW5nJykge1xuICAgIGNoaWxkcmVuID0gPGE+e2NoaWxkcmVufTwvYT5cbiAgfVxuXG4gIC8vIFRoaXMgd2lsbCByZXR1cm4gdGhlIGZpcnN0IGNoaWxkLCBpZiBtdWx0aXBsZSBhcmUgcHJvdmlkZWQgaXQgd2lsbCB0aHJvdyBhbiBlcnJvclxuICBjb25zdCBjaGlsZDogYW55ID0gQ2hpbGRyZW4ub25seShjaGlsZHJlbilcbiAgY29uc3QgY2hpbGRSZWY6IGFueSA9IGNoaWxkICYmIHR5cGVvZiBjaGlsZCA9PT0gJ29iamVjdCcgJiYgY2hpbGQucmVmXG5cbiAgY29uc3QgW3NldEludGVyc2VjdGlvblJlZiwgaXNWaXNpYmxlXSA9IHVzZUludGVyc2VjdGlvbih7XG4gICAgcm9vdE1hcmdpbjogJzIwMHB4JyxcbiAgfSlcbiAgY29uc3Qgc2V0UmVmID0gUmVhY3QudXNlQ2FsbGJhY2soXG4gICAgKGVsOiBFbGVtZW50KSA9PiB7XG4gICAgICBzZXRJbnRlcnNlY3Rpb25SZWYoZWwpXG4gICAgICBpZiAoY2hpbGRSZWYpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBjaGlsZFJlZiA9PT0gJ2Z1bmN0aW9uJykgY2hpbGRSZWYoZWwpXG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiBjaGlsZFJlZiA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICBjaGlsZFJlZi5jdXJyZW50ID0gZWxcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgW2NoaWxkUmVmLCBzZXRJbnRlcnNlY3Rpb25SZWZdXG4gIClcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBzaG91bGRQcmVmZXRjaCA9IGlzVmlzaWJsZSAmJiBwICYmIGlzTG9jYWxVUkwoaHJlZilcbiAgICBjb25zdCBjdXJMb2NhbGUgPVxuICAgICAgdHlwZW9mIGxvY2FsZSAhPT0gJ3VuZGVmaW5lZCcgPyBsb2NhbGUgOiByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZVxuICAgIGNvbnN0IGlzUHJlZmV0Y2hlZCA9XG4gICAgICBwcmVmZXRjaGVkW2hyZWYgKyAnJScgKyBhcyArIChjdXJMb2NhbGUgPyAnJScgKyBjdXJMb2NhbGUgOiAnJyldXG4gICAgaWYgKHNob3VsZFByZWZldGNoICYmICFpc1ByZWZldGNoZWQpIHtcbiAgICAgIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMsIHtcbiAgICAgICAgbG9jYWxlOiBjdXJMb2NhbGUsXG4gICAgICB9KVxuICAgIH1cbiAgfSwgW2FzLCBocmVmLCBpc1Zpc2libGUsIGxvY2FsZSwgcCwgcm91dGVyXSlcblxuICBjb25zdCBjaGlsZFByb3BzOiB7XG4gICAgb25Nb3VzZUVudGVyPzogUmVhY3QuTW91c2VFdmVudEhhbmRsZXJcbiAgICBvbkNsaWNrOiBSZWFjdC5Nb3VzZUV2ZW50SGFuZGxlclxuICAgIGhyZWY/OiBzdHJpbmdcbiAgICByZWY/OiBhbnlcbiAgfSA9IHtcbiAgICByZWY6IHNldFJlZixcbiAgICBvbkNsaWNrOiAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICAgICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbkNsaWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNoaWxkLnByb3BzLm9uQ2xpY2soZSlcbiAgICAgIH1cbiAgICAgIGlmICghZS5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgIGxpbmtDbGlja2VkKGUsIHJvdXRlciwgaHJlZiwgYXMsIHJlcGxhY2UsIHNoYWxsb3csIHNjcm9sbCwgbG9jYWxlKVxuICAgICAgfVxuICAgIH0sXG4gIH1cblxuICBjaGlsZFByb3BzLm9uTW91c2VFbnRlciA9IChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XG4gICAgaWYgKCFpc0xvY2FsVVJMKGhyZWYpKSByZXR1cm5cbiAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyKGUpXG4gICAgfVxuICAgIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMsIHsgcHJpb3JpdHk6IHRydWUgfSlcbiAgfVxuXG4gIC8vIElmIGNoaWxkIGlzIGFuIDxhPiB0YWcgYW5kIGRvZXNuJ3QgaGF2ZSBhIGhyZWYgYXR0cmlidXRlLCBvciBpZiB0aGUgJ3Bhc3NIcmVmJyBwcm9wZXJ0eSBpc1xuICAvLyBkZWZpbmVkLCB3ZSBzcGVjaWZ5IHRoZSBjdXJyZW50ICdocmVmJywgc28gdGhhdCByZXBldGl0aW9uIGlzIG5vdCBuZWVkZWQgYnkgdGhlIHVzZXJcbiAgaWYgKHByb3BzLnBhc3NIcmVmIHx8IChjaGlsZC50eXBlID09PSAnYScgJiYgISgnaHJlZicgaW4gY2hpbGQucHJvcHMpKSkge1xuICAgIGNoaWxkUHJvcHMuaHJlZiA9IGFkZEJhc2VQYXRoKFxuICAgICAgYWRkTG9jYWxlKFxuICAgICAgICBhcyxcbiAgICAgICAgdHlwZW9mIGxvY2FsZSAhPT0gJ3VuZGVmaW5lZCcgPyBsb2NhbGUgOiByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZSxcbiAgICAgICAgcm91dGVyICYmIHJvdXRlci5kZWZhdWx0TG9jYWxlXG4gICAgICApXG4gICAgKVxuICB9XG5cbiAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChjaGlsZCwgY2hpbGRQcm9wcylcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGlua1xuIiwiLyoqXG4gKiBSZW1vdmVzIHRoZSB0cmFpbGluZyBzbGFzaCBvZiBhIHBhdGggaWYgdGhlcmUgaXMgb25lLiBQcmVzZXJ2ZXMgdGhlIHJvb3QgcGF0aCBgL2AuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gcGF0aC5lbmRzV2l0aCgnLycpICYmIHBhdGggIT09ICcvJyA/IHBhdGguc2xpY2UoMCwgLTEpIDogcGF0aFxufVxuXG4vKipcbiAqIE5vcm1hbGl6ZXMgdGhlIHRyYWlsaW5nIHNsYXNoIG9mIGEgcGF0aCBhY2NvcmRpbmcgdG8gdGhlIGB0cmFpbGluZ1NsYXNoYCBvcHRpb25cbiAqIGluIGBuZXh0LmNvbmZpZy5qc2AuXG4gKi9cbmV4cG9ydCBjb25zdCBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCA9IHByb2Nlc3MuZW52Ll9fTkVYVF9UUkFJTElOR19TTEFTSFxuICA/IChwYXRoOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICAgICAgaWYgKC9cXC5bXi9dK1xcLz8kLy50ZXN0KHBhdGgpKSB7XG4gICAgICAgIHJldHVybiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoKVxuICAgICAgfSBlbHNlIGlmIChwYXRoLmVuZHNXaXRoKCcvJykpIHtcbiAgICAgICAgcmV0dXJuIHBhdGhcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBwYXRoICsgJy8nXG4gICAgICB9XG4gICAgfVxuICA6IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoXG4iLCJ0eXBlIFJlcXVlc3RJZGxlQ2FsbGJhY2tIYW5kbGUgPSBhbnlcbnR5cGUgUmVxdWVzdElkbGVDYWxsYmFja09wdGlvbnMgPSB7XG4gIHRpbWVvdXQ6IG51bWJlclxufVxudHlwZSBSZXF1ZXN0SWRsZUNhbGxiYWNrRGVhZGxpbmUgPSB7XG4gIHJlYWRvbmx5IGRpZFRpbWVvdXQ6IGJvb2xlYW5cbiAgdGltZVJlbWFpbmluZzogKCkgPT4gbnVtYmVyXG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIFdpbmRvdyB7XG4gICAgcmVxdWVzdElkbGVDYWxsYmFjazogKFxuICAgICAgY2FsbGJhY2s6IChkZWFkbGluZTogUmVxdWVzdElkbGVDYWxsYmFja0RlYWRsaW5lKSA9PiB2b2lkLFxuICAgICAgb3B0cz86IFJlcXVlc3RJZGxlQ2FsbGJhY2tPcHRpb25zXG4gICAgKSA9PiBSZXF1ZXN0SWRsZUNhbGxiYWNrSGFuZGxlXG4gIH1cbn1cblxuY29uc3QgcmVxdWVzdElkbGVDYWxsYmFjayA9XG4gICh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5yZXF1ZXN0SWRsZUNhbGxiYWNrKSB8fFxuICBmdW5jdGlvbiAoY2I6IChkZWFkbGluZTogUmVxdWVzdElkbGVDYWxsYmFja0RlYWRsaW5lKSA9PiB2b2lkKSB7XG4gICAgbGV0IHN0YXJ0ID0gRGF0ZS5ub3coKVxuICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIGNiKHtcbiAgICAgICAgZGlkVGltZW91dDogZmFsc2UsXG4gICAgICAgIHRpbWVSZW1haW5pbmc6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gTWF0aC5tYXgoMCwgNTAgLSAoRGF0ZS5ub3coKSAtIHN0YXJ0KSlcbiAgICAgICAgfSxcbiAgICAgIH0pXG4gICAgfSwgMSlcbiAgfVxuXG5leHBvcnQgZGVmYXVsdCByZXF1ZXN0SWRsZUNhbGxiYWNrXG4iLCJpbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgdHlwZSB7IENsaWVudEJ1aWxkTWFuaWZlc3QgfSBmcm9tICcuLi9idWlsZC93ZWJwYWNrL3BsdWdpbnMvYnVpbGQtbWFuaWZlc3QtcGx1Z2luJ1xuaW1wb3J0IGdldEFzc2V0UGF0aEZyb21Sb3V0ZSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUnXG5pbXBvcnQgcmVxdWVzdElkbGVDYWxsYmFjayBmcm9tICcuL3JlcXVlc3QtaWRsZS1jYWxsYmFjaydcblxuLy8gMy44cyB3YXMgYXJiaXRyYXJpbHkgY2hvc2VuIGFzIGl0J3Mgd2hhdCBodHRwczovL3dlYi5kZXYvaW50ZXJhY3RpdmVcbi8vIGNvbnNpZGVycyBhcyBcIkdvb2RcIiB0aW1lLXRvLWludGVyYWN0aXZlLiBXZSBtdXN0IGFzc3VtZSBzb21ldGhpbmcgd2VudFxuLy8gd3JvbmcgYmV5b25kIHRoaXMgcG9pbnQsIGFuZCB0aGVuIGZhbGwtYmFjayB0byBhIGZ1bGwgcGFnZSB0cmFuc2l0aW9uIHRvXG4vLyBzaG93IHRoZSB1c2VyIHNvbWV0aGluZyBvZiB2YWx1ZS5cbmNvbnN0IE1TX01BWF9JRExFX0RFTEFZID0gMzgwMFxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBXaW5kb3cge1xuICAgIF9fQlVJTERfTUFOSUZFU1Q/OiBDbGllbnRCdWlsZE1hbmlmZXN0XG4gICAgX19CVUlMRF9NQU5JRkVTVF9DQj86IEZ1bmN0aW9uXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBMb2FkZWRFbnRyeXBvaW50U3VjY2VzcyB7XG4gIGNvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICBleHBvcnRzOiBhbnlcbn1cbmV4cG9ydCBpbnRlcmZhY2UgTG9hZGVkRW50cnlwb2ludEZhaWx1cmUge1xuICBlcnJvcjogdW5rbm93blxufVxuZXhwb3J0IHR5cGUgUm91dGVFbnRyeXBvaW50ID0gTG9hZGVkRW50cnlwb2ludFN1Y2Nlc3MgfCBMb2FkZWRFbnRyeXBvaW50RmFpbHVyZVxuXG5leHBvcnQgaW50ZXJmYWNlIFJvdXRlU3R5bGVTaGVldCB7XG4gIGhyZWY6IHN0cmluZ1xuICBjb250ZW50OiBzdHJpbmdcbn1cblxuZXhwb3J0IGludGVyZmFjZSBMb2FkZWRSb3V0ZVN1Y2Nlc3MgZXh0ZW5kcyBMb2FkZWRFbnRyeXBvaW50U3VjY2VzcyB7XG4gIHN0eWxlczogUm91dGVTdHlsZVNoZWV0W11cbn1cbmV4cG9ydCBpbnRlcmZhY2UgTG9hZGVkUm91dGVGYWlsdXJlIHtcbiAgZXJyb3I6IHVua25vd25cbn1cbmV4cG9ydCB0eXBlIFJvdXRlTG9hZGVyRW50cnkgPSBMb2FkZWRSb3V0ZVN1Y2Nlc3MgfCBMb2FkZWRSb3V0ZUZhaWx1cmVcblxuZXhwb3J0IHR5cGUgRnV0dXJlPFY+ID0ge1xuICByZXNvbHZlOiAoZW50cnlwb2ludDogVikgPT4gdm9pZFxuICBmdXR1cmU6IFByb21pc2U8Vj5cbn1cbmZ1bmN0aW9uIHdpdGhGdXR1cmU8VD4oXG4gIGtleTogc3RyaW5nLFxuICBtYXA6IE1hcDxzdHJpbmcsIEZ1dHVyZTxUPiB8IFQ+LFxuICBnZW5lcmF0b3I/OiAoKSA9PiBQcm9taXNlPFQ+XG4pOiBQcm9taXNlPFQ+IHtcbiAgbGV0IGVudHJ5OiBGdXR1cmU8VD4gfCBUIHwgdW5kZWZpbmVkID0gbWFwLmdldChrZXkpXG4gIGlmIChlbnRyeSkge1xuICAgIGlmICgnZnV0dXJlJyBpbiBlbnRyeSkge1xuICAgICAgcmV0dXJuIGVudHJ5LmZ1dHVyZVxuICAgIH1cbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGVudHJ5KVxuICB9XG4gIGxldCByZXNvbHZlcjogKGVudHJ5cG9pbnQ6IFQpID0+IHZvaWRcbiAgY29uc3QgcHJvbSA9IG5ldyBQcm9taXNlPFQ+KChyZXNvbHZlKSA9PiB7XG4gICAgcmVzb2x2ZXIgPSByZXNvbHZlXG4gIH0pXG4gIG1hcC5zZXQoa2V5LCAoZW50cnkgPSB7IHJlc29sdmU6IHJlc29sdmVyISwgZnV0dXJlOiBwcm9tIH0pKVxuICByZXR1cm4gZ2VuZXJhdG9yXG4gICAgPyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VxdWVuY2VzXG4gICAgICBnZW5lcmF0b3IoKS50aGVuKCh2YWx1ZSkgPT4gKHJlc29sdmVyKHZhbHVlKSwgdmFsdWUpKVxuICAgIDogcHJvbVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFJvdXRlTG9hZGVyIHtcbiAgd2hlbkVudHJ5cG9pbnQocm91dGU6IHN0cmluZyk6IFByb21pc2U8Um91dGVFbnRyeXBvaW50PlxuICBvbkVudHJ5cG9pbnQocm91dGU6IHN0cmluZywgZXhlY3V0ZTogKCkgPT4gdW5rbm93bik6IHZvaWRcbiAgbG9hZFJvdXRlKHJvdXRlOiBzdHJpbmcpOiBQcm9taXNlPFJvdXRlTG9hZGVyRW50cnk+XG4gIHByZWZldGNoKHJvdXRlOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+XG59XG5cbmZ1bmN0aW9uIGhhc1ByZWZldGNoKGxpbms/OiBIVE1MTGlua0VsZW1lbnQpOiBib29sZWFuIHtcbiAgdHJ5IHtcbiAgICBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpXG4gICAgcmV0dXJuIChcbiAgICAgIC8vIGRldGVjdCBJRTExIHNpbmNlIGl0IHN1cHBvcnRzIHByZWZldGNoIGJ1dCBpc24ndCBkZXRlY3RlZFxuICAgICAgLy8gd2l0aCByZWxMaXN0LnN1cHBvcnRcbiAgICAgICghIXdpbmRvdy5NU0lucHV0TWV0aG9kQ29udGV4dCAmJiAhIShkb2N1bWVudCBhcyBhbnkpLmRvY3VtZW50TW9kZSkgfHxcbiAgICAgIGxpbmsucmVsTGlzdC5zdXBwb3J0cygncHJlZmV0Y2gnKVxuICAgIClcbiAgfSBjYXRjaCB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbn1cblxuY29uc3QgY2FuUHJlZmV0Y2g6IGJvb2xlYW4gPSBoYXNQcmVmZXRjaCgpXG5cbmZ1bmN0aW9uIHByZWZldGNoVmlhRG9tKFxuICBocmVmOiBzdHJpbmcsXG4gIGFzOiBzdHJpbmcsXG4gIGxpbms/OiBIVE1MTGlua0VsZW1lbnRcbik6IFByb21pc2U8YW55PiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzLCByZWopID0+IHtcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgbGlua1tyZWw9XCJwcmVmZXRjaFwiXVtocmVmXj1cIiR7aHJlZn1cIl1gKSkge1xuICAgICAgcmV0dXJuIHJlcygpXG4gICAgfVxuXG4gICAgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKVxuXG4gICAgLy8gVGhlIG9yZGVyIG9mIHByb3BlcnR5IGFzc2lnbm1lbnQgaGVyZSBpcyBpbnRlbnRpb25hbDpcbiAgICBpZiAoYXMpIGxpbmshLmFzID0gYXNcbiAgICBsaW5rIS5yZWwgPSBgcHJlZmV0Y2hgXG4gICAgbGluayEuY3Jvc3NPcmlnaW4gPSBwcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOIVxuICAgIGxpbmshLm9ubG9hZCA9IHJlc1xuICAgIGxpbmshLm9uZXJyb3IgPSByZWpcblxuICAgIC8vIGBocmVmYCBzaG91bGQgYWx3YXlzIGJlIGxhc3Q6XG4gICAgbGluayEuaHJlZiA9IGhyZWZcblxuICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQobGluaylcbiAgfSlcbn1cblxuY29uc3QgQVNTRVRfTE9BRF9FUlJPUiA9IFN5bWJvbCgnQVNTRVRfTE9BRF9FUlJPUicpXG4vLyBUT0RPOiB1bmV4cG9ydFxuZXhwb3J0IGZ1bmN0aW9uIG1hcmtBc3NldEVycm9yKGVycjogRXJyb3IpOiBFcnJvciB7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXJyLCBBU1NFVF9MT0FEX0VSUk9SLCB7fSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzQXNzZXRFcnJvcihlcnI/OiBFcnJvcikge1xuICByZXR1cm4gZXJyICYmIEFTU0VUX0xPQURfRVJST1IgaW4gZXJyXG59XG5cbmZ1bmN0aW9uIGFwcGVuZFNjcmlwdChcbiAgc3JjOiBzdHJpbmcsXG4gIHNjcmlwdD86IEhUTUxTY3JpcHRFbGVtZW50XG4pOiBQcm9taXNlPHVua25vd24+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKVxuXG4gICAgLy8gVGhlIG9yZGVyIG9mIHByb3BlcnR5IGFzc2lnbm1lbnQgaGVyZSBpcyBpbnRlbnRpb25hbC5cbiAgICAvLyAxLiBTZXR1cCBzdWNjZXNzL2ZhaWx1cmUgaG9va3MgaW4gY2FzZSB0aGUgYnJvd3NlciBzeW5jaHJvbm91c2x5XG4gICAgLy8gICAgZXhlY3V0ZXMgd2hlbiBgc3JjYCBpcyBzZXQuXG4gICAgc2NyaXB0Lm9ubG9hZCA9IHJlc29sdmVcbiAgICBzY3JpcHQub25lcnJvciA9ICgpID0+XG4gICAgICByZWplY3QobWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzY3JpcHQ6ICR7c3JjfWApKSlcblxuICAgIC8vIDIuIENvbmZpZ3VyZSB0aGUgY3Jvc3Mtb3JpZ2luIGF0dHJpYnV0ZSBiZWZvcmUgc2V0dGluZyBgc3JjYCBpbiBjYXNlIHRoZVxuICAgIC8vICAgIGJyb3dzZXIgYmVnaW5zIHRvIGZldGNoLlxuICAgIHNjcmlwdC5jcm9zc09yaWdpbiA9IHByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU4hXG5cbiAgICAvLyAzLiBGaW5hbGx5LCBzZXQgdGhlIHNvdXJjZSBhbmQgaW5qZWN0IGludG8gdGhlIERPTSBpbiBjYXNlIHRoZSBjaGlsZFxuICAgIC8vICAgIG11c3QgYmUgYXBwZW5kZWQgZm9yIGZldGNoaW5nIHRvIHN0YXJ0LlxuICAgIHNjcmlwdC5zcmMgPSBzcmNcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNjcmlwdClcbiAgfSlcbn1cblxuZnVuY3Rpb24gaWRsZVRpbWVvdXQ8VD4obXM6IG51bWJlciwgZXJyOiBFcnJvcik6IFByb21pc2U8VD4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKF9yZXNvbHZlLCByZWplY3QpID0+XG4gICAgcmVxdWVzdElkbGVDYWxsYmFjaygoKSA9PiBzZXRUaW1lb3V0KCgpID0+IHJlamVjdChlcnIpLCBtcykpXG4gIClcbn1cblxuLy8gVE9ETzogc3RvcCBleHBvcnRpbmcgb3IgY2FjaGUgdGhlIGZhaWx1cmVcbi8vIEl0J2QgYmUgYmVzdCB0byBzdG9wIGV4cG9ydGluZyB0aGlzLiBJdCdzIGFuIGltcGxlbWVudGF0aW9uIGRldGFpbC4gV2UncmVcbi8vIG9ubHkgZXhwb3J0aW5nIGl0IGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbHR5IHdpdGggdGhlIGBwYWdlLWxvYWRlcmAuXG4vLyBPbmx5IGNhY2hlIHRoaXMgcmVzcG9uc2UgYXMgYSBsYXN0IHJlc29ydCBpZiB3ZSBjYW5ub3QgZWxpbWluYXRlIGFsbCBvdGhlclxuLy8gY29kZSBicmFuY2hlcyB0aGF0IHVzZSB0aGUgQnVpbGQgTWFuaWZlc3QgQ2FsbGJhY2sgYW5kIHB1c2ggdGhlbSB0aHJvdWdoXG4vLyB0aGUgUm91dGUgTG9hZGVyIGludGVyZmFjZS5cbmV4cG9ydCBmdW5jdGlvbiBnZXRDbGllbnRCdWlsZE1hbmlmZXN0KCk6IFByb21pc2U8Q2xpZW50QnVpbGRNYW5pZmVzdD4ge1xuICBpZiAoc2VsZi5fX0JVSUxEX01BTklGRVNUKSB7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShzZWxmLl9fQlVJTERfTUFOSUZFU1QpXG4gIH1cblxuICBjb25zdCBvbkJ1aWxkTWFuaWZlc3QgPSBuZXcgUHJvbWlzZTxDbGllbnRCdWlsZE1hbmlmZXN0PigocmVzb2x2ZSkgPT4ge1xuICAgIC8vIE1hbmRhdG9yeSBiZWNhdXNlIHRoaXMgaXMgbm90IGNvbmN1cnJlbnQgc2FmZTpcbiAgICBjb25zdCBjYiA9IHNlbGYuX19CVUlMRF9NQU5JRkVTVF9DQlxuICAgIHNlbGYuX19CVUlMRF9NQU5JRkVTVF9DQiA9ICgpID0+IHtcbiAgICAgIHJlc29sdmUoc2VsZi5fX0JVSUxEX01BTklGRVNUKVxuICAgICAgY2IgJiYgY2IoKVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIFByb21pc2UucmFjZShbXG4gICAgb25CdWlsZE1hbmlmZXN0LFxuICAgIGlkbGVUaW1lb3V0PENsaWVudEJ1aWxkTWFuaWZlc3Q+KFxuICAgICAgTVNfTUFYX0lETEVfREVMQVksXG4gICAgICBtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoJ0ZhaWxlZCB0byBsb2FkIGNsaWVudCBidWlsZCBtYW5pZmVzdCcpKVxuICAgICksXG4gIF0pXG59XG5cbmludGVyZmFjZSBSb3V0ZUZpbGVzIHtcbiAgc2NyaXB0czogc3RyaW5nW11cbiAgY3NzOiBzdHJpbmdbXVxufVxuZnVuY3Rpb24gZ2V0RmlsZXNGb3JSb3V0ZShcbiAgYXNzZXRQcmVmaXg6IHN0cmluZyxcbiAgcm91dGU6IHN0cmluZ1xuKTogUHJvbWlzZTxSb3V0ZUZpbGVzPiB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoe1xuICAgICAgc2NyaXB0czogW1xuICAgICAgICBhc3NldFByZWZpeCArXG4gICAgICAgICAgJy9fbmV4dC9zdGF0aWMvY2h1bmtzL3BhZ2VzJyArXG4gICAgICAgICAgZW5jb2RlVVJJKGdldEFzc2V0UGF0aEZyb21Sb3V0ZShyb3V0ZSwgJy5qcycpKSxcbiAgICAgIF0sXG4gICAgICAvLyBTdHlsZXMgYXJlIGhhbmRsZWQgYnkgYHN0eWxlLWxvYWRlcmAgaW4gZGV2ZWxvcG1lbnQ6XG4gICAgICBjc3M6IFtdLFxuICAgIH0pXG4gIH1cbiAgcmV0dXJuIGdldENsaWVudEJ1aWxkTWFuaWZlc3QoKS50aGVuKChtYW5pZmVzdCkgPT4ge1xuICAgIGlmICghKHJvdXRlIGluIG1hbmlmZXN0KSkge1xuICAgICAgdGhyb3cgbWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKGBGYWlsZWQgdG8gbG9va3VwIHJvdXRlOiAke3JvdXRlfWApKVxuICAgIH1cbiAgICBjb25zdCBhbGxGaWxlcyA9IG1hbmlmZXN0W3JvdXRlXS5tYXAoXG4gICAgICAoZW50cnkpID0+IGFzc2V0UHJlZml4ICsgJy9fbmV4dC8nICsgZW5jb2RlVVJJKGVudHJ5KVxuICAgIClcbiAgICByZXR1cm4ge1xuICAgICAgc2NyaXB0czogYWxsRmlsZXMuZmlsdGVyKCh2KSA9PiB2LmVuZHNXaXRoKCcuanMnKSksXG4gICAgICBjc3M6IGFsbEZpbGVzLmZpbHRlcigodikgPT4gdi5lbmRzV2l0aCgnLmNzcycpKSxcbiAgICB9XG4gIH0pXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVJvdXRlTG9hZGVyKGFzc2V0UHJlZml4OiBzdHJpbmcpOiBSb3V0ZUxvYWRlciB7XG4gIGNvbnN0IGVudHJ5cG9pbnRzOiBNYXA8XG4gICAgc3RyaW5nLFxuICAgIEZ1dHVyZTxSb3V0ZUVudHJ5cG9pbnQ+IHwgUm91dGVFbnRyeXBvaW50XG4gID4gPSBuZXcgTWFwKClcbiAgY29uc3QgbG9hZGVkU2NyaXB0czogTWFwPHN0cmluZywgUHJvbWlzZTx1bmtub3duPj4gPSBuZXcgTWFwKClcbiAgY29uc3Qgc3R5bGVTaGVldHM6IE1hcDxzdHJpbmcsIFByb21pc2U8Um91dGVTdHlsZVNoZWV0Pj4gPSBuZXcgTWFwKClcbiAgY29uc3Qgcm91dGVzOiBNYXA8XG4gICAgc3RyaW5nLFxuICAgIEZ1dHVyZTxSb3V0ZUxvYWRlckVudHJ5PiB8IFJvdXRlTG9hZGVyRW50cnlcbiAgPiA9IG5ldyBNYXAoKVxuXG4gIGZ1bmN0aW9uIG1heWJlRXhlY3V0ZVNjcmlwdChzcmM6IHN0cmluZyk6IFByb21pc2U8dW5rbm93bj4ge1xuICAgIGxldCBwcm9tID0gbG9hZGVkU2NyaXB0cy5nZXQoc3JjKVxuICAgIGlmIChwcm9tKSB7XG4gICAgICByZXR1cm4gcHJvbVxuICAgIH1cblxuICAgIC8vIFNraXAgZXhlY3V0aW5nIHNjcmlwdCBpZiBpdCdzIGFscmVhZHkgaW4gdGhlIERPTTpcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihgc2NyaXB0W3NyY149XCIke3NyY31cIl1gKSkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpXG4gICAgfVxuXG4gICAgbG9hZGVkU2NyaXB0cy5zZXQoc3JjLCAocHJvbSA9IGFwcGVuZFNjcmlwdChzcmMpKSlcbiAgICByZXR1cm4gcHJvbVxuICB9XG5cbiAgZnVuY3Rpb24gZmV0Y2hTdHlsZVNoZWV0KGhyZWY6IHN0cmluZyk6IFByb21pc2U8Um91dGVTdHlsZVNoZWV0PiB7XG4gICAgbGV0IHByb20gPSBzdHlsZVNoZWV0cy5nZXQoaHJlZilcbiAgICBpZiAocHJvbSkge1xuICAgICAgcmV0dXJuIHByb21cbiAgICB9XG5cbiAgICBzdHlsZVNoZWV0cy5zZXQoXG4gICAgICBocmVmLFxuICAgICAgKHByb20gPSBmZXRjaChocmVmKVxuICAgICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgaWYgKCFyZXMub2spIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3R5bGVzaGVldDogJHtocmVmfWApXG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiByZXMudGV4dCgpLnRoZW4oKHRleHQpID0+ICh7IGhyZWY6IGhyZWYsIGNvbnRlbnQ6IHRleHQgfSkpXG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgdGhyb3cgbWFya0Fzc2V0RXJyb3IoZXJyKVxuICAgICAgICB9KSlcbiAgICApXG4gICAgcmV0dXJuIHByb21cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgd2hlbkVudHJ5cG9pbnQocm91dGU6IHN0cmluZykge1xuICAgICAgcmV0dXJuIHdpdGhGdXR1cmUocm91dGUsIGVudHJ5cG9pbnRzKVxuICAgIH0sXG4gICAgb25FbnRyeXBvaW50KHJvdXRlLCBleGVjdXRlKSB7XG4gICAgICBQcm9taXNlLnJlc29sdmUoZXhlY3V0ZSlcbiAgICAgICAgLnRoZW4oKGZuKSA9PiBmbigpKVxuICAgICAgICAudGhlbihcbiAgICAgICAgICAoZXhwb3J0czogYW55KSA9PiAoe1xuICAgICAgICAgICAgY29tcG9uZW50OiAoZXhwb3J0cyAmJiBleHBvcnRzLmRlZmF1bHQpIHx8IGV4cG9ydHMsXG4gICAgICAgICAgICBleHBvcnRzOiBleHBvcnRzLFxuICAgICAgICAgIH0pLFxuICAgICAgICAgIChlcnIpID0+ICh7IGVycm9yOiBlcnIgfSlcbiAgICAgICAgKVxuICAgICAgICAudGhlbigoaW5wdXQ6IFJvdXRlRW50cnlwb2ludCkgPT4ge1xuICAgICAgICAgIGNvbnN0IG9sZCA9IGVudHJ5cG9pbnRzLmdldChyb3V0ZSlcbiAgICAgICAgICBlbnRyeXBvaW50cy5zZXQocm91dGUsIGlucHV0KVxuICAgICAgICAgIGlmIChvbGQgJiYgJ3Jlc29sdmUnIGluIG9sZCkgb2xkLnJlc29sdmUoaW5wdXQpXG4gICAgICAgIH0pXG4gICAgfSxcbiAgICBsb2FkUm91dGUocm91dGUpIHtcbiAgICAgIHJldHVybiB3aXRoRnV0dXJlPFJvdXRlTG9hZGVyRW50cnk+KHJvdXRlLCByb3V0ZXMsIGFzeW5jICgpID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBjb25zdCB7IHNjcmlwdHMsIGNzcyB9ID0gYXdhaXQgZ2V0RmlsZXNGb3JSb3V0ZShhc3NldFByZWZpeCwgcm91dGUpXG4gICAgICAgICAgY29uc3QgWywgc3R5bGVzXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgICAgICAgIGVudHJ5cG9pbnRzLmhhcyhyb3V0ZSlcbiAgICAgICAgICAgICAgPyBbXVxuICAgICAgICAgICAgICA6IFByb21pc2UuYWxsKHNjcmlwdHMubWFwKG1heWJlRXhlY3V0ZVNjcmlwdCkpLFxuICAgICAgICAgICAgUHJvbWlzZS5hbGwoY3NzLm1hcChmZXRjaFN0eWxlU2hlZXQpKSxcbiAgICAgICAgICBdIGFzIGNvbnN0KVxuXG4gICAgICAgICAgY29uc3QgZW50cnlwb2ludCA9IGF3YWl0IFByb21pc2UucmFjZShbXG4gICAgICAgICAgICB0aGlzLndoZW5FbnRyeXBvaW50KHJvdXRlKSxcbiAgICAgICAgICAgIGlkbGVUaW1lb3V0PFJvdXRlTG9hZGVyRW50cnk+KFxuICAgICAgICAgICAgICBNU19NQVhfSURMRV9ERUxBWSxcbiAgICAgICAgICAgICAgbWFya0Fzc2V0RXJyb3IoXG4gICAgICAgICAgICAgICAgbmV3IEVycm9yKGBSb3V0ZSBkaWQgbm90IGNvbXBsZXRlIGxvYWRpbmc6ICR7cm91dGV9YClcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICBdKVxuICAgICAgICAgIGNvbnN0IHJlczogUm91dGVMb2FkZXJFbnRyeSA9IE9iamVjdC5hc3NpZ248XG4gICAgICAgICAgICB7IHN0eWxlczogUm91dGVTdHlsZVNoZWV0W10gfSxcbiAgICAgICAgICAgIFJvdXRlRW50cnlwb2ludFxuICAgICAgICAgID4oeyBzdHlsZXMgfSwgZW50cnlwb2ludClcbiAgICAgICAgICByZXR1cm4gJ2Vycm9yJyBpbiBlbnRyeXBvaW50ID8gZW50cnlwb2ludCA6IHJlc1xuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICByZXR1cm4geyBlcnJvcjogZXJyIH1cbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9LFxuICAgIHByZWZldGNoKHJvdXRlKSB7XG4gICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vR29vZ2xlQ2hyb21lTGFicy9xdWlja2xpbmsvYmxvYi80NTNhNjYxZmExZmE5NDBlMmQyZTA0NDQ1MjM5OGUzOGM2N2E5OGZiL3NyYy9pbmRleC5tanMjTDExNS1MMTE4XG4gICAgICAvLyBMaWNlbnNlOiBBcGFjaGUgMi4wXG4gICAgICBsZXQgY25cbiAgICAgIGlmICgoY24gPSAobmF2aWdhdG9yIGFzIGFueSkuY29ubmVjdGlvbikpIHtcbiAgICAgICAgLy8gRG9uJ3QgcHJlZmV0Y2ggaWYgdXNpbmcgMkcgb3IgaWYgU2F2ZS1EYXRhIGlzIGVuYWJsZWQuXG4gICAgICAgIGlmIChjbi5zYXZlRGF0YSB8fCAvMmcvLnRlc3QoY24uZWZmZWN0aXZlVHlwZSkpIHJldHVybiBQcm9taXNlLnJlc29sdmUoKVxuICAgICAgfVxuICAgICAgcmV0dXJuIGdldEZpbGVzRm9yUm91dGUoYXNzZXRQcmVmaXgsIHJvdXRlKVxuICAgICAgICAudGhlbigob3V0cHV0KSA9PlxuICAgICAgICAgIFByb21pc2UuYWxsKFxuICAgICAgICAgICAgY2FuUHJlZmV0Y2hcbiAgICAgICAgICAgICAgPyBvdXRwdXQuc2NyaXB0cy5tYXAoKHNjcmlwdCkgPT4gcHJlZmV0Y2hWaWFEb20oc2NyaXB0LCAnc2NyaXB0JykpXG4gICAgICAgICAgICAgIDogW11cbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIHJlcXVlc3RJZGxlQ2FsbGJhY2soKCkgPT4gdGhpcy5sb2FkUm91dGUocm91dGUpKVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goXG4gICAgICAgICAgLy8gc3dhbGxvdyBwcmVmZXRjaCBlcnJvcnNcbiAgICAgICAgICAoKSA9PiB7fVxuICAgICAgICApXG4gICAgfSxcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVSb3V0ZUxvYWRlclxuIiwiLyogZ2xvYmFsIHdpbmRvdyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJvdXRlciwgeyBOZXh0Um91dGVyIH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyBSb3V0ZXJDb250ZXh0IH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0J1xuXG50eXBlIENsYXNzQXJndW1lbnRzPFQ+ID0gVCBleHRlbmRzIG5ldyAoLi4uYXJnczogaW5mZXIgVSkgPT4gYW55ID8gVSA6IGFueVxuXG50eXBlIFJvdXRlckFyZ3MgPSBDbGFzc0FyZ3VtZW50czx0eXBlb2YgUm91dGVyPlxuXG50eXBlIFNpbmdsZXRvblJvdXRlckJhc2UgPSB7XG4gIHJvdXRlcjogUm91dGVyIHwgbnVsbFxuICByZWFkeUNhbGxiYWNrczogQXJyYXk8KCkgPT4gYW55PlxuICByZWFkeShjYjogKCkgPT4gYW55KTogdm9pZFxufVxuXG5leHBvcnQgeyBSb3V0ZXIsIE5leHRSb3V0ZXIgfVxuXG5leHBvcnQgdHlwZSBTaW5nbGV0b25Sb3V0ZXIgPSBTaW5nbGV0b25Sb3V0ZXJCYXNlICYgTmV4dFJvdXRlclxuXG5jb25zdCBzaW5nbGV0b25Sb3V0ZXI6IFNpbmdsZXRvblJvdXRlckJhc2UgPSB7XG4gIHJvdXRlcjogbnVsbCwgLy8gaG9sZHMgdGhlIGFjdHVhbCByb3V0ZXIgaW5zdGFuY2VcbiAgcmVhZHlDYWxsYmFja3M6IFtdLFxuICByZWFkeShjYjogKCkgPT4gdm9pZCkge1xuICAgIGlmICh0aGlzLnJvdXRlcikgcmV0dXJuIGNiKClcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRoaXMucmVhZHlDYWxsYmFja3MucHVzaChjYilcbiAgICB9XG4gIH0sXG59XG5cbi8vIENyZWF0ZSBwdWJsaWMgcHJvcGVydGllcyBhbmQgbWV0aG9kcyBvZiB0aGUgcm91dGVyIGluIHRoZSBzaW5nbGV0b25Sb3V0ZXJcbmNvbnN0IHVybFByb3BlcnR5RmllbGRzID0gW1xuICAncGF0aG5hbWUnLFxuICAncm91dGUnLFxuICAncXVlcnknLFxuICAnYXNQYXRoJyxcbiAgJ2NvbXBvbmVudHMnLFxuICAnaXNGYWxsYmFjaycsXG4gICdiYXNlUGF0aCcsXG4gICdsb2NhbGUnLFxuICAnbG9jYWxlcycsXG4gICdkZWZhdWx0TG9jYWxlJyxcbl1cbmNvbnN0IHJvdXRlckV2ZW50cyA9IFtcbiAgJ3JvdXRlQ2hhbmdlU3RhcnQnLFxuICAnYmVmb3JlSGlzdG9yeUNoYW5nZScsXG4gICdyb3V0ZUNoYW5nZUNvbXBsZXRlJyxcbiAgJ3JvdXRlQ2hhbmdlRXJyb3InLFxuICAnaGFzaENoYW5nZVN0YXJ0JyxcbiAgJ2hhc2hDaGFuZ2VDb21wbGV0ZScsXG5dXG5jb25zdCBjb3JlTWV0aG9kRmllbGRzID0gW1xuICAncHVzaCcsXG4gICdyZXBsYWNlJyxcbiAgJ3JlbG9hZCcsXG4gICdiYWNrJyxcbiAgJ3ByZWZldGNoJyxcbiAgJ2JlZm9yZVBvcFN0YXRlJyxcbl1cblxuLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgJ2V2ZW50cycsIHtcbiAgZ2V0KCkge1xuICAgIHJldHVybiBSb3V0ZXIuZXZlbnRzXG4gIH0sXG59KVxuXG51cmxQcm9wZXJ0eUZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAvLyBIZXJlIHdlIG5lZWQgdG8gdXNlIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSBiZWNhdXNlLCB3ZSBuZWVkIHRvIHJldHVyblxuICAvLyB0aGUgcHJvcGVydHkgYXNzaWduZWQgdG8gdGhlIGFjdHVhbCByb3V0ZXJcbiAgLy8gVGhlIHZhbHVlIG1pZ2h0IGdldCBjaGFuZ2VkIGFzIHdlIGNoYW5nZSByb3V0ZXMgYW5kIHRoaXMgaXMgdGhlXG4gIC8vIHByb3BlciB3YXkgdG8gYWNjZXNzIGl0XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsIGZpZWxkLCB7XG4gICAgZ2V0KCkge1xuICAgICAgY29uc3Qgcm91dGVyID0gZ2V0Um91dGVyKCkgYXMgYW55XG4gICAgICByZXR1cm4gcm91dGVyW2ZpZWxkXSBhcyBzdHJpbmdcbiAgICB9LFxuICB9KVxufSlcblxuY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAvLyBXZSBkb24ndCByZWFsbHkga25vdyB0aGUgdHlwZXMgaGVyZSwgc28gd2UgYWRkIHRoZW0gbGF0ZXIgaW5zdGVhZFxuICA7KHNpbmdsZXRvblJvdXRlciBhcyBhbnkpW2ZpZWxkXSA9ICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpIGFzIGFueVxuICAgIHJldHVybiByb3V0ZXJbZmllbGRdKC4uLmFyZ3MpXG4gIH1cbn0pXG5cbnJvdXRlckV2ZW50cy5mb3JFYWNoKChldmVudCkgPT4ge1xuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHkoKCkgPT4ge1xuICAgIFJvdXRlci5ldmVudHMub24oZXZlbnQsICguLi5hcmdzKSA9PiB7XG4gICAgICBjb25zdCBldmVudEZpZWxkID0gYG9uJHtldmVudC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKX0ke2V2ZW50LnN1YnN0cmluZyhcbiAgICAgICAgMVxuICAgICAgKX1gXG4gICAgICBjb25zdCBfc2luZ2xldG9uUm91dGVyID0gc2luZ2xldG9uUm91dGVyIGFzIGFueVxuICAgICAgaWYgKF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0pIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKC4uLmFyZ3MpXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIHdoZW4gcnVubmluZyB0aGUgUm91dGVyIGV2ZW50OiAke2V2ZW50RmllbGR9YClcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGAke2Vyci5tZXNzYWdlfVxcbiR7ZXJyLnN0YWNrfWApXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9KVxufSlcblxuZnVuY3Rpb24gZ2V0Um91dGVyKCk6IFJvdXRlciB7XG4gIGlmICghc2luZ2xldG9uUm91dGVyLnJvdXRlcikge1xuICAgIGNvbnN0IG1lc3NhZ2UgPVxuICAgICAgJ05vIHJvdXRlciBpbnN0YW5jZSBmb3VuZC5cXG4nICtcbiAgICAgICdZb3Ugc2hvdWxkIG9ubHkgdXNlIFwibmV4dC9yb3V0ZXJcIiBpbnNpZGUgdGhlIGNsaWVudCBzaWRlIG9mIHlvdXIgYXBwLlxcbidcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgfVxuICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlclxufVxuXG4vLyBFeHBvcnQgdGhlIHNpbmdsZXRvblJvdXRlciBhbmQgdGhpcyBpcyB0aGUgcHVibGljIEFQSS5cbmV4cG9ydCBkZWZhdWx0IHNpbmdsZXRvblJvdXRlciBhcyBTaW5nbGV0b25Sb3V0ZXJcblxuLy8gUmVleHBvcnQgdGhlIHdpdGhSb3V0ZSBIT0NcbmV4cG9ydCB7IGRlZmF1bHQgYXMgd2l0aFJvdXRlciB9IGZyb20gJy4vd2l0aC1yb3V0ZXInXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VSb3V0ZXIoKTogTmV4dFJvdXRlciB7XG4gIHJldHVybiBSZWFjdC51c2VDb250ZXh0KFJvdXRlckNvbnRleHQpXG59XG5cbi8vIElOVEVSTkFMIEFQSVNcbi8vIC0tLS0tLS0tLS0tLS1cbi8vIChkbyBub3QgdXNlIGZvbGxvd2luZyBleHBvcnRzIGluc2lkZSB0aGUgYXBwKVxuXG4vLyBDcmVhdGUgYSByb3V0ZXIgYW5kIGFzc2lnbiBpdCBhcyB0aGUgc2luZ2xldG9uIGluc3RhbmNlLlxuLy8gVGhpcyBpcyB1c2VkIGluIGNsaWVudCBzaWRlIHdoZW4gd2UgYXJlIGluaXRpbGl6aW5nIHRoZSBhcHAuXG4vLyBUaGlzIHNob3VsZCAqKm5vdCoqIHVzZSBpbnNpZGUgdGhlIHNlcnZlci5cbmV4cG9ydCBjb25zdCBjcmVhdGVSb3V0ZXIgPSAoLi4uYXJnczogUm91dGVyQXJncyk6IFJvdXRlciA9PiB7XG4gIHNpbmdsZXRvblJvdXRlci5yb3V0ZXIgPSBuZXcgUm91dGVyKC4uLmFyZ3MpXG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcy5mb3JFYWNoKChjYikgPT4gY2IoKSlcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzID0gW11cblxuICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlclxufVxuXG4vLyBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gY3JlYXRlIHRoZSBgd2l0aFJvdXRlcmAgcm91dGVyIGluc3RhbmNlXG5leHBvcnQgZnVuY3Rpb24gbWFrZVB1YmxpY1JvdXRlckluc3RhbmNlKHJvdXRlcjogUm91dGVyKTogTmV4dFJvdXRlciB7XG4gIGNvbnN0IF9yb3V0ZXIgPSByb3V0ZXIgYXMgYW55XG4gIGNvbnN0IGluc3RhbmNlID0ge30gYXMgYW55XG5cbiAgZm9yIChjb25zdCBwcm9wZXJ0eSBvZiB1cmxQcm9wZXJ0eUZpZWxkcykge1xuICAgIGlmICh0eXBlb2YgX3JvdXRlcltwcm9wZXJ0eV0gPT09ICdvYmplY3QnKSB7XG4gICAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBPYmplY3QuYXNzaWduKFxuICAgICAgICBBcnJheS5pc0FycmF5KF9yb3V0ZXJbcHJvcGVydHldKSA/IFtdIDoge30sXG4gICAgICAgIF9yb3V0ZXJbcHJvcGVydHldXG4gICAgICApIC8vIG1ha2VzIHN1cmUgcXVlcnkgaXMgbm90IHN0YXRlZnVsXG4gICAgICBjb250aW51ZVxuICAgIH1cblxuICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IF9yb3V0ZXJbcHJvcGVydHldXG4gIH1cblxuICAvLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG4gIGluc3RhbmNlLmV2ZW50cyA9IFJvdXRlci5ldmVudHNcblxuICBjb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gICAgaW5zdGFuY2VbZmllbGRdID0gKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgICByZXR1cm4gX3JvdXRlcltmaWVsZF0oLi4uYXJncylcbiAgICB9XG4gIH0pXG5cbiAgcmV0dXJuIGluc3RhbmNlXG59XG4iLCJpbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgcmVxdWVzdElkbGVDYWxsYmFjayBmcm9tICcuL3JlcXVlc3QtaWRsZS1jYWxsYmFjaydcblxudHlwZSBVc2VJbnRlcnNlY3Rpb25PYnNlcnZlckluaXQgPSBQaWNrPEludGVyc2VjdGlvbk9ic2VydmVySW5pdCwgJ3Jvb3RNYXJnaW4nPlxudHlwZSBVc2VJbnRlcnNlY3Rpb24gPSB7IGRpc2FibGVkPzogYm9vbGVhbiB9ICYgVXNlSW50ZXJzZWN0aW9uT2JzZXJ2ZXJJbml0XG50eXBlIE9ic2VydmVDYWxsYmFjayA9IChpc1Zpc2libGU6IGJvb2xlYW4pID0+IHZvaWRcblxuY29uc3QgaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgPSB0eXBlb2YgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgIT09ICd1bmRlZmluZWQnXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VJbnRlcnNlY3Rpb248VCBleHRlbmRzIEVsZW1lbnQ+KHtcbiAgcm9vdE1hcmdpbixcbiAgZGlzYWJsZWQsXG59OiBVc2VJbnRlcnNlY3Rpb24pOiBbKGVsZW1lbnQ6IFQgfCBudWxsKSA9PiB2b2lkLCBib29sZWFuXSB7XG4gIGNvbnN0IGlzRGlzYWJsZWQgPSBkaXNhYmxlZCB8fCAhaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXJcblxuICBjb25zdCB1bm9ic2VydmUgPSB1c2VSZWY8RnVuY3Rpb24+KClcbiAgY29uc3QgW3Zpc2libGUsIHNldFZpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpXG5cbiAgY29uc3Qgc2V0UmVmID0gdXNlQ2FsbGJhY2soXG4gICAgKGVsOiBUIHwgbnVsbCkgPT4ge1xuICAgICAgaWYgKHVub2JzZXJ2ZS5jdXJyZW50KSB7XG4gICAgICAgIHVub2JzZXJ2ZS5jdXJyZW50KClcbiAgICAgICAgdW5vYnNlcnZlLmN1cnJlbnQgPSB1bmRlZmluZWRcbiAgICAgIH1cblxuICAgICAgaWYgKGlzRGlzYWJsZWQgfHwgdmlzaWJsZSkgcmV0dXJuXG5cbiAgICAgIGlmIChlbCAmJiBlbC50YWdOYW1lKSB7XG4gICAgICAgIHVub2JzZXJ2ZS5jdXJyZW50ID0gb2JzZXJ2ZShcbiAgICAgICAgICBlbCxcbiAgICAgICAgICAoaXNWaXNpYmxlKSA9PiBpc1Zpc2libGUgJiYgc2V0VmlzaWJsZShpc1Zpc2libGUpLFxuICAgICAgICAgIHsgcm9vdE1hcmdpbiB9XG4gICAgICAgIClcbiAgICAgIH1cbiAgICB9LFxuICAgIFtpc0Rpc2FibGVkLCByb290TWFyZ2luLCB2aXNpYmxlXVxuICApXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIWhhc0ludGVyc2VjdGlvbk9ic2VydmVyKSB7XG4gICAgICBpZiAoIXZpc2libGUpIHJlcXVlc3RJZGxlQ2FsbGJhY2soKCkgPT4gc2V0VmlzaWJsZSh0cnVlKSlcbiAgICB9XG4gIH0sIFt2aXNpYmxlXSlcblxuICByZXR1cm4gW3NldFJlZiwgdmlzaWJsZV1cbn1cblxuZnVuY3Rpb24gb2JzZXJ2ZShcbiAgZWxlbWVudDogRWxlbWVudCxcbiAgY2FsbGJhY2s6IE9ic2VydmVDYWxsYmFjayxcbiAgb3B0aW9uczogVXNlSW50ZXJzZWN0aW9uT2JzZXJ2ZXJJbml0XG4pIHtcbiAgY29uc3QgeyBpZCwgb2JzZXJ2ZXIsIGVsZW1lbnRzIH0gPSBjcmVhdGVPYnNlcnZlcihvcHRpb25zKVxuICBlbGVtZW50cy5zZXQoZWxlbWVudCwgY2FsbGJhY2spXG5cbiAgb2JzZXJ2ZXIub2JzZXJ2ZShlbGVtZW50KVxuICByZXR1cm4gZnVuY3Rpb24gdW5vYnNlcnZlKCkge1xuICAgIG9ic2VydmVyLnVub2JzZXJ2ZShlbGVtZW50KVxuXG4gICAgLy8gRGVzdHJveSBvYnNlcnZlciB3aGVuIHRoZXJlJ3Mgbm90aGluZyBsZWZ0IHRvIHdhdGNoOlxuICAgIGlmIChlbGVtZW50cy5zaXplID09PSAwKSB7XG4gICAgICBvYnNlcnZlci5kaXNjb25uZWN0KClcbiAgICAgIG9ic2VydmVycy5kZWxldGUoaWQpXG4gICAgfVxuICB9XG59XG5cbmNvbnN0IG9ic2VydmVycyA9IG5ldyBNYXA8XG4gIHN0cmluZyxcbiAge1xuICAgIGlkOiBzdHJpbmdcbiAgICBvYnNlcnZlcjogSW50ZXJzZWN0aW9uT2JzZXJ2ZXJcbiAgICBlbGVtZW50czogTWFwPEVsZW1lbnQsIE9ic2VydmVDYWxsYmFjaz5cbiAgfVxuPigpXG5mdW5jdGlvbiBjcmVhdGVPYnNlcnZlcihvcHRpb25zOiBVc2VJbnRlcnNlY3Rpb25PYnNlcnZlckluaXQpIHtcbiAgY29uc3QgaWQgPSBvcHRpb25zLnJvb3RNYXJnaW4gfHwgJydcbiAgbGV0IGluc3RhbmNlID0gb2JzZXJ2ZXJzLmdldChpZClcbiAgaWYgKGluc3RhbmNlKSB7XG4gICAgcmV0dXJuIGluc3RhbmNlXG4gIH1cblxuICBjb25zdCBlbGVtZW50cyA9IG5ldyBNYXA8RWxlbWVudCwgT2JzZXJ2ZUNhbGxiYWNrPigpXG4gIGNvbnN0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKChlbnRyaWVzKSA9PiB7XG4gICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgY29uc3QgY2FsbGJhY2sgPSBlbGVtZW50cy5nZXQoZW50cnkudGFyZ2V0KVxuICAgICAgY29uc3QgaXNWaXNpYmxlID0gZW50cnkuaXNJbnRlcnNlY3RpbmcgfHwgZW50cnkuaW50ZXJzZWN0aW9uUmF0aW8gPiAwXG4gICAgICBpZiAoY2FsbGJhY2sgJiYgaXNWaXNpYmxlKSB7XG4gICAgICAgIGNhbGxiYWNrKGlzVmlzaWJsZSlcbiAgICAgIH1cbiAgICB9KVxuICB9LCBvcHRpb25zKVxuXG4gIG9ic2VydmVycy5zZXQoXG4gICAgaWQsXG4gICAgKGluc3RhbmNlID0ge1xuICAgICAgaWQsXG4gICAgICBvYnNlcnZlcixcbiAgICAgIGVsZW1lbnRzLFxuICAgIH0pXG4gIClcbiAgcmV0dXJuIGluc3RhbmNlXG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBOZXh0Q29tcG9uZW50VHlwZSwgTmV4dFBhZ2VDb250ZXh0IH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzJ1xuaW1wb3J0IHsgTmV4dFJvdXRlciwgdXNlUm91dGVyIH0gZnJvbSAnLi9yb3V0ZXInXG5cbmV4cG9ydCB0eXBlIFdpdGhSb3V0ZXJQcm9wcyA9IHtcbiAgcm91dGVyOiBOZXh0Um91dGVyXG59XG5cbmV4cG9ydCB0eXBlIEV4Y2x1ZGVSb3V0ZXJQcm9wczxQPiA9IFBpY2s8XG4gIFAsXG4gIEV4Y2x1ZGU8a2V5b2YgUCwga2V5b2YgV2l0aFJvdXRlclByb3BzPlxuPlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB3aXRoUm91dGVyPFxuICBQIGV4dGVuZHMgV2l0aFJvdXRlclByb3BzLFxuICBDID0gTmV4dFBhZ2VDb250ZXh0XG4+KFxuICBDb21wb3NlZENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8QywgYW55LCBQPlxuKTogUmVhY3QuQ29tcG9uZW50VHlwZTxFeGNsdWRlUm91dGVyUHJvcHM8UD4+IHtcbiAgZnVuY3Rpb24gV2l0aFJvdXRlcldyYXBwZXIocHJvcHM6IGFueSkge1xuICAgIHJldHVybiA8Q29tcG9zZWRDb21wb25lbnQgcm91dGVyPXt1c2VSb3V0ZXIoKX0gey4uLnByb3BzfSAvPlxuICB9XG5cbiAgV2l0aFJvdXRlcldyYXBwZXIuZ2V0SW5pdGlhbFByb3BzID0gQ29tcG9zZWRDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzXG4gIC8vIFRoaXMgaXMgbmVlZGVkIHRvIGFsbG93IGNoZWNraW5nIGZvciBjdXN0b20gZ2V0SW5pdGlhbFByb3BzIGluIF9hcHBcbiAgOyhXaXRoUm91dGVyV3JhcHBlciBhcyBhbnkpLm9yaWdHZXRJbml0aWFsUHJvcHMgPSAoQ29tcG9zZWRDb21wb25lbnQgYXMgYW55KS5vcmlnR2V0SW5pdGlhbFByb3BzXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgY29uc3QgbmFtZSA9XG4gICAgICBDb21wb3NlZENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb3NlZENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJ1xuICAgIFdpdGhSb3V0ZXJXcmFwcGVyLmRpc3BsYXlOYW1lID0gYHdpdGhSb3V0ZXIoJHtuYW1lfSlgXG4gIH1cblxuICByZXR1cm4gV2l0aFJvdXRlcldyYXBwZXJcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLyoqXG4gKiBUb2tlbml6ZSBpbnB1dCBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIGxleGVyKHN0cikge1xuICAgIHZhciB0b2tlbnMgPSBbXTtcbiAgICB2YXIgaSA9IDA7XG4gICAgd2hpbGUgKGkgPCBzdHIubGVuZ3RoKSB7XG4gICAgICAgIHZhciBjaGFyID0gc3RyW2ldO1xuICAgICAgICBpZiAoY2hhciA9PT0gXCIqXCIgfHwgY2hhciA9PT0gXCIrXCIgfHwgY2hhciA9PT0gXCI/XCIpIHtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJNT0RJRklFUlwiLCBpbmRleDogaSwgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwiXFxcXFwiKSB7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiRVNDQVBFRF9DSEFSXCIsIGluZGV4OiBpKyssIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIntcIikge1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIk9QRU5cIiwgaW5kZXg6IGksIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIn1cIikge1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIkNMT1NFXCIsIGluZGV4OiBpLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCI6XCIpIHtcbiAgICAgICAgICAgIHZhciBuYW1lID0gXCJcIjtcbiAgICAgICAgICAgIHZhciBqID0gaSArIDE7XG4gICAgICAgICAgICB3aGlsZSAoaiA8IHN0ci5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB2YXIgY29kZSA9IHN0ci5jaGFyQ29kZUF0KGopO1xuICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAvLyBgMC05YFxuICAgICAgICAgICAgICAgIChjb2RlID49IDQ4ICYmIGNvZGUgPD0gNTcpIHx8XG4gICAgICAgICAgICAgICAgICAgIC8vIGBBLVpgXG4gICAgICAgICAgICAgICAgICAgIChjb2RlID49IDY1ICYmIGNvZGUgPD0gOTApIHx8XG4gICAgICAgICAgICAgICAgICAgIC8vIGBhLXpgXG4gICAgICAgICAgICAgICAgICAgIChjb2RlID49IDk3ICYmIGNvZGUgPD0gMTIyKSB8fFxuICAgICAgICAgICAgICAgICAgICAvLyBgX2BcbiAgICAgICAgICAgICAgICAgICAgY29kZSA9PT0gOTUpIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZSArPSBzdHJbaisrXTtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFuYW1lKVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJNaXNzaW5nIHBhcmFtZXRlciBuYW1lIGF0IFwiICsgaSk7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiTkFNRVwiLCBpbmRleDogaSwgdmFsdWU6IG5hbWUgfSk7XG4gICAgICAgICAgICBpID0gajtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIihcIikge1xuICAgICAgICAgICAgdmFyIGNvdW50ID0gMTtcbiAgICAgICAgICAgIHZhciBwYXR0ZXJuID0gXCJcIjtcbiAgICAgICAgICAgIHZhciBqID0gaSArIDE7XG4gICAgICAgICAgICBpZiAoc3RyW2pdID09PSBcIj9cIikge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQYXR0ZXJuIGNhbm5vdCBzdGFydCB3aXRoIFxcXCI/XFxcIiBhdCBcIiArIGopO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgd2hpbGUgKGogPCBzdHIubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHN0cltqXSA9PT0gXCJcXFxcXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgcGF0dGVybiArPSBzdHJbaisrXSArIHN0cltqKytdO1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHN0cltqXSA9PT0gXCIpXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgY291bnQtLTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvdW50ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBqKys7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChzdHJbal0gPT09IFwiKFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzdHJbaiArIDFdICE9PSBcIj9cIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhcHR1cmluZyBncm91cHMgYXJlIG5vdCBhbGxvd2VkIGF0IFwiICsgaik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcGF0dGVybiArPSBzdHJbaisrXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjb3VudClcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiVW5iYWxhbmNlZCBwYXR0ZXJuIGF0IFwiICsgaSk7XG4gICAgICAgICAgICBpZiAoIXBhdHRlcm4pXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIk1pc3NpbmcgcGF0dGVybiBhdCBcIiArIGkpO1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIlBBVFRFUk5cIiwgaW5kZXg6IGksIHZhbHVlOiBwYXR0ZXJuIH0pO1xuICAgICAgICAgICAgaSA9IGo7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiQ0hBUlwiLCBpbmRleDogaSwgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgIH1cbiAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiRU5EXCIsIGluZGV4OiBpLCB2YWx1ZTogXCJcIiB9KTtcbiAgICByZXR1cm4gdG9rZW5zO1xufVxuLyoqXG4gKiBQYXJzZSBhIHN0cmluZyBmb3IgdGhlIHJhdyB0b2tlbnMuXG4gKi9cbmZ1bmN0aW9uIHBhcnNlKHN0ciwgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgdmFyIHRva2VucyA9IGxleGVyKHN0cik7XG4gICAgdmFyIF9hID0gb3B0aW9ucy5wcmVmaXhlcywgcHJlZml4ZXMgPSBfYSA9PT0gdm9pZCAwID8gXCIuL1wiIDogX2E7XG4gICAgdmFyIGRlZmF1bHRQYXR0ZXJuID0gXCJbXlwiICsgZXNjYXBlU3RyaW5nKG9wdGlvbnMuZGVsaW1pdGVyIHx8IFwiLyM/XCIpICsgXCJdKz9cIjtcbiAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgdmFyIGtleSA9IDA7XG4gICAgdmFyIGkgPSAwO1xuICAgIHZhciBwYXRoID0gXCJcIjtcbiAgICB2YXIgdHJ5Q29uc3VtZSA9IGZ1bmN0aW9uICh0eXBlKSB7XG4gICAgICAgIGlmIChpIDwgdG9rZW5zLmxlbmd0aCAmJiB0b2tlbnNbaV0udHlwZSA9PT0gdHlwZSlcbiAgICAgICAgICAgIHJldHVybiB0b2tlbnNbaSsrXS52YWx1ZTtcbiAgICB9O1xuICAgIHZhciBtdXN0Q29uc3VtZSA9IGZ1bmN0aW9uICh0eXBlKSB7XG4gICAgICAgIHZhciB2YWx1ZSA9IHRyeUNvbnN1bWUodHlwZSk7XG4gICAgICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB2YXIgX2EgPSB0b2tlbnNbaV0sIG5leHRUeXBlID0gX2EudHlwZSwgaW5kZXggPSBfYS5pbmRleDtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlVuZXhwZWN0ZWQgXCIgKyBuZXh0VHlwZSArIFwiIGF0IFwiICsgaW5kZXggKyBcIiwgZXhwZWN0ZWQgXCIgKyB0eXBlKTtcbiAgICB9O1xuICAgIHZhciBjb25zdW1lVGV4dCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IFwiXCI7XG4gICAgICAgIHZhciB2YWx1ZTtcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgIHdoaWxlICgodmFsdWUgPSB0cnlDb25zdW1lKFwiQ0hBUlwiKSB8fCB0cnlDb25zdW1lKFwiRVNDQVBFRF9DSEFSXCIpKSkge1xuICAgICAgICAgICAgcmVzdWx0ICs9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcbiAgICB3aGlsZSAoaSA8IHRva2Vucy5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGNoYXIgPSB0cnlDb25zdW1lKFwiQ0hBUlwiKTtcbiAgICAgICAgdmFyIG5hbWUgPSB0cnlDb25zdW1lKFwiTkFNRVwiKTtcbiAgICAgICAgdmFyIHBhdHRlcm4gPSB0cnlDb25zdW1lKFwiUEFUVEVSTlwiKTtcbiAgICAgICAgaWYgKG5hbWUgfHwgcGF0dGVybikge1xuICAgICAgICAgICAgdmFyIHByZWZpeCA9IGNoYXIgfHwgXCJcIjtcbiAgICAgICAgICAgIGlmIChwcmVmaXhlcy5pbmRleE9mKHByZWZpeCkgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgcGF0aCArPSBwcmVmaXg7XG4gICAgICAgICAgICAgICAgcHJlZml4ID0gXCJcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwYXRoKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2gocGF0aCk7XG4gICAgICAgICAgICAgICAgcGF0aCA9IFwiXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXN1bHQucHVzaCh7XG4gICAgICAgICAgICAgICAgbmFtZTogbmFtZSB8fCBrZXkrKyxcbiAgICAgICAgICAgICAgICBwcmVmaXg6IHByZWZpeCxcbiAgICAgICAgICAgICAgICBzdWZmaXg6IFwiXCIsXG4gICAgICAgICAgICAgICAgcGF0dGVybjogcGF0dGVybiB8fCBkZWZhdWx0UGF0dGVybixcbiAgICAgICAgICAgICAgICBtb2RpZmllcjogdHJ5Q29uc3VtZShcIk1PRElGSUVSXCIpIHx8IFwiXCJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHZhbHVlID0gY2hhciB8fCB0cnlDb25zdW1lKFwiRVNDQVBFRF9DSEFSXCIpO1xuICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgIHBhdGggKz0gdmFsdWU7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocGF0aCkge1xuICAgICAgICAgICAgcmVzdWx0LnB1c2gocGF0aCk7XG4gICAgICAgICAgICBwYXRoID0gXCJcIjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgb3BlbiA9IHRyeUNvbnN1bWUoXCJPUEVOXCIpO1xuICAgICAgICBpZiAob3Blbikge1xuICAgICAgICAgICAgdmFyIHByZWZpeCA9IGNvbnN1bWVUZXh0KCk7XG4gICAgICAgICAgICB2YXIgbmFtZV8xID0gdHJ5Q29uc3VtZShcIk5BTUVcIikgfHwgXCJcIjtcbiAgICAgICAgICAgIHZhciBwYXR0ZXJuXzEgPSB0cnlDb25zdW1lKFwiUEFUVEVSTlwiKSB8fCBcIlwiO1xuICAgICAgICAgICAgdmFyIHN1ZmZpeCA9IGNvbnN1bWVUZXh0KCk7XG4gICAgICAgICAgICBtdXN0Q29uc3VtZShcIkNMT1NFXCIpO1xuICAgICAgICAgICAgcmVzdWx0LnB1c2goe1xuICAgICAgICAgICAgICAgIG5hbWU6IG5hbWVfMSB8fCAocGF0dGVybl8xID8ga2V5KysgOiBcIlwiKSxcbiAgICAgICAgICAgICAgICBwYXR0ZXJuOiBuYW1lXzEgJiYgIXBhdHRlcm5fMSA/IGRlZmF1bHRQYXR0ZXJuIDogcGF0dGVybl8xLFxuICAgICAgICAgICAgICAgIHByZWZpeDogcHJlZml4LFxuICAgICAgICAgICAgICAgIHN1ZmZpeDogc3VmZml4LFxuICAgICAgICAgICAgICAgIG1vZGlmaWVyOiB0cnlDb25zdW1lKFwiTU9ESUZJRVJcIikgfHwgXCJcIlxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBtdXN0Q29uc3VtZShcIkVORFwiKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cbmV4cG9ydHMucGFyc2UgPSBwYXJzZTtcbi8qKlxuICogQ29tcGlsZSBhIHN0cmluZyB0byBhIHRlbXBsYXRlIGZ1bmN0aW9uIGZvciB0aGUgcGF0aC5cbiAqL1xuZnVuY3Rpb24gY29tcGlsZShzdHIsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gdG9rZW5zVG9GdW5jdGlvbihwYXJzZShzdHIsIG9wdGlvbnMpLCBvcHRpb25zKTtcbn1cbmV4cG9ydHMuY29tcGlsZSA9IGNvbXBpbGU7XG4vKipcbiAqIEV4cG9zZSBhIG1ldGhvZCBmb3IgdHJhbnNmb3JtaW5nIHRva2VucyBpbnRvIHRoZSBwYXRoIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiB0b2tlbnNUb0Z1bmN0aW9uKHRva2Vucywgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgdmFyIHJlRmxhZ3MgPSBmbGFncyhvcHRpb25zKTtcbiAgICB2YXIgX2EgPSBvcHRpb25zLmVuY29kZSwgZW5jb2RlID0gX2EgPT09IHZvaWQgMCA/IGZ1bmN0aW9uICh4KSB7IHJldHVybiB4OyB9IDogX2EsIF9iID0gb3B0aW9ucy52YWxpZGF0ZSwgdmFsaWRhdGUgPSBfYiA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9iO1xuICAgIC8vIENvbXBpbGUgYWxsIHRoZSB0b2tlbnMgaW50byByZWdleHBzLlxuICAgIHZhciBtYXRjaGVzID0gdG9rZW5zLm1hcChmdW5jdGlvbiAodG9rZW4pIHtcbiAgICAgICAgaWYgKHR5cGVvZiB0b2tlbiA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBSZWdFeHAoXCJeKD86XCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpJFwiLCByZUZsYWdzKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICB2YXIgcGF0aCA9IFwiXCI7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdG9rZW5zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgdG9rZW4gPSB0b2tlbnNbaV07XG4gICAgICAgICAgICBpZiAodHlwZW9mIHRva2VuID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICAgICAgcGF0aCArPSB0b2tlbjtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IGRhdGEgPyBkYXRhW3Rva2VuLm5hbWVdIDogdW5kZWZpbmVkO1xuICAgICAgICAgICAgdmFyIG9wdGlvbmFsID0gdG9rZW4ubW9kaWZpZXIgPT09IFwiP1wiIHx8IHRva2VuLm1vZGlmaWVyID09PSBcIipcIjtcbiAgICAgICAgICAgIHZhciByZXBlYXQgPSB0b2tlbi5tb2RpZmllciA9PT0gXCIqXCIgfHwgdG9rZW4ubW9kaWZpZXIgPT09IFwiK1wiO1xuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFyZXBlYXQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIFxcXCJcIiArIHRva2VuLm5hbWUgKyBcIlxcXCIgdG8gbm90IHJlcGVhdCwgYnV0IGdvdCBhbiBhcnJheVwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAob3B0aW9uYWwpXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIFxcXCJcIiArIHRva2VuLm5hbWUgKyBcIlxcXCIgdG8gbm90IGJlIGVtcHR5XCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHZhbHVlLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzZWdtZW50ID0gZW5jb2RlKHZhbHVlW2pdLCB0b2tlbik7XG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWxpZGF0ZSAmJiAhbWF0Y2hlc1tpXS50ZXN0KHNlZ21lbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgYWxsIFxcXCJcIiArIHRva2VuLm5hbWUgKyBcIlxcXCIgdG8gbWF0Y2ggXFxcIlwiICsgdG9rZW4ucGF0dGVybiArIFwiXFxcIiwgYnV0IGdvdCBcXFwiXCIgKyBzZWdtZW50ICsgXCJcXFwiXCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHBhdGggKz0gdG9rZW4ucHJlZml4ICsgc2VnbWVudCArIHRva2VuLnN1ZmZpeDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSBcInN0cmluZ1wiIHx8IHR5cGVvZiB2YWx1ZSA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICAgICAgICAgIHZhciBzZWdtZW50ID0gZW5jb2RlKFN0cmluZyh2YWx1ZSksIHRva2VuKTtcbiAgICAgICAgICAgICAgICBpZiAodmFsaWRhdGUgJiYgIW1hdGNoZXNbaV0udGVzdChzZWdtZW50KSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBtYXRjaCBcXFwiXCIgKyB0b2tlbi5wYXR0ZXJuICsgXCJcXFwiLCBidXQgZ290IFxcXCJcIiArIHNlZ21lbnQgKyBcIlxcXCJcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHBhdGggKz0gdG9rZW4ucHJlZml4ICsgc2VnbWVudCArIHRva2VuLnN1ZmZpeDtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChvcHRpb25hbClcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIHZhciB0eXBlT2ZNZXNzYWdlID0gcmVwZWF0ID8gXCJhbiBhcnJheVwiIDogXCJhIHN0cmluZ1wiO1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIFxcXCJcIiArIHRva2VuLm5hbWUgKyBcIlxcXCIgdG8gYmUgXCIgKyB0eXBlT2ZNZXNzYWdlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcGF0aDtcbiAgICB9O1xufVxuZXhwb3J0cy50b2tlbnNUb0Z1bmN0aW9uID0gdG9rZW5zVG9GdW5jdGlvbjtcbi8qKlxuICogQ3JlYXRlIHBhdGggbWF0Y2ggZnVuY3Rpb24gZnJvbSBgcGF0aC10by1yZWdleHBgIHNwZWMuXG4gKi9cbmZ1bmN0aW9uIG1hdGNoKHN0ciwgb3B0aW9ucykge1xuICAgIHZhciBrZXlzID0gW107XG4gICAgdmFyIHJlID0gcGF0aFRvUmVnZXhwKHN0ciwga2V5cywgb3B0aW9ucyk7XG4gICAgcmV0dXJuIHJlZ2V4cFRvRnVuY3Rpb24ocmUsIGtleXMsIG9wdGlvbnMpO1xufVxuZXhwb3J0cy5tYXRjaCA9IG1hdGNoO1xuLyoqXG4gKiBDcmVhdGUgYSBwYXRoIG1hdGNoIGZ1bmN0aW9uIGZyb20gYHBhdGgtdG8tcmVnZXhwYCBvdXRwdXQuXG4gKi9cbmZ1bmN0aW9uIHJlZ2V4cFRvRnVuY3Rpb24ocmUsIGtleXMsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIHZhciBfYSA9IG9wdGlvbnMuZGVjb2RlLCBkZWNvZGUgPSBfYSA9PT0gdm9pZCAwID8gZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHg7IH0gOiBfYTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHBhdGhuYW1lKSB7XG4gICAgICAgIHZhciBtID0gcmUuZXhlYyhwYXRobmFtZSk7XG4gICAgICAgIGlmICghbSlcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgdmFyIHBhdGggPSBtWzBdLCBpbmRleCA9IG0uaW5kZXg7XG4gICAgICAgIHZhciBwYXJhbXMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICB2YXIgX2xvb3BfMSA9IGZ1bmN0aW9uIChpKSB7XG4gICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgICAgIGlmIChtW2ldID09PSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiY29udGludWVcIjtcbiAgICAgICAgICAgIHZhciBrZXkgPSBrZXlzW2kgLSAxXTtcbiAgICAgICAgICAgIGlmIChrZXkubW9kaWZpZXIgPT09IFwiKlwiIHx8IGtleS5tb2RpZmllciA9PT0gXCIrXCIpIHtcbiAgICAgICAgICAgICAgICBwYXJhbXNba2V5Lm5hbWVdID0gbVtpXS5zcGxpdChrZXkucHJlZml4ICsga2V5LnN1ZmZpeCkubWFwKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGVjb2RlKHZhbHVlLCBrZXkpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcGFyYW1zW2tleS5uYW1lXSA9IGRlY29kZShtW2ldLCBrZXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IG0ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIF9sb29wXzEoaSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgcGF0aDogcGF0aCwgaW5kZXg6IGluZGV4LCBwYXJhbXM6IHBhcmFtcyB9O1xuICAgIH07XG59XG5leHBvcnRzLnJlZ2V4cFRvRnVuY3Rpb24gPSByZWdleHBUb0Z1bmN0aW9uO1xuLyoqXG4gKiBFc2NhcGUgYSByZWd1bGFyIGV4cHJlc3Npb24gc3RyaW5nLlxuICovXG5mdW5jdGlvbiBlc2NhcGVTdHJpbmcoc3RyKSB7XG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKC8oWy4rKj89XiE6JHt9KClbXFxdfC9cXFxcXSkvZywgXCJcXFxcJDFcIik7XG59XG4vKipcbiAqIEdldCB0aGUgZmxhZ3MgZm9yIGEgcmVnZXhwIGZyb20gdGhlIG9wdGlvbnMuXG4gKi9cbmZ1bmN0aW9uIGZsYWdzKG9wdGlvbnMpIHtcbiAgICByZXR1cm4gb3B0aW9ucyAmJiBvcHRpb25zLnNlbnNpdGl2ZSA/IFwiXCIgOiBcImlcIjtcbn1cbi8qKlxuICogUHVsbCBvdXQga2V5cyBmcm9tIGEgcmVnZXhwLlxuICovXG5mdW5jdGlvbiByZWdleHBUb1JlZ2V4cChwYXRoLCBrZXlzKSB7XG4gICAgaWYgKCFrZXlzKVxuICAgICAgICByZXR1cm4gcGF0aDtcbiAgICAvLyBVc2UgYSBuZWdhdGl2ZSBsb29rYWhlYWQgdG8gbWF0Y2ggb25seSBjYXB0dXJpbmcgZ3JvdXBzLlxuICAgIHZhciBncm91cHMgPSBwYXRoLnNvdXJjZS5tYXRjaCgvXFwoKD8hXFw/KS9nKTtcbiAgICBpZiAoZ3JvdXBzKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZ3JvdXBzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBrZXlzLnB1c2goe1xuICAgICAgICAgICAgICAgIG5hbWU6IGksXG4gICAgICAgICAgICAgICAgcHJlZml4OiBcIlwiLFxuICAgICAgICAgICAgICAgIHN1ZmZpeDogXCJcIixcbiAgICAgICAgICAgICAgICBtb2RpZmllcjogXCJcIixcbiAgICAgICAgICAgICAgICBwYXR0ZXJuOiBcIlwiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcGF0aDtcbn1cbi8qKlxuICogVHJhbnNmb3JtIGFuIGFycmF5IGludG8gYSByZWdleHAuXG4gKi9cbmZ1bmN0aW9uIGFycmF5VG9SZWdleHAocGF0aHMsIGtleXMsIG9wdGlvbnMpIHtcbiAgICB2YXIgcGFydHMgPSBwYXRocy5tYXAoZnVuY3Rpb24gKHBhdGgpIHsgcmV0dXJuIHBhdGhUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKS5zb3VyY2U7IH0pO1xuICAgIHJldHVybiBuZXcgUmVnRXhwKFwiKD86XCIgKyBwYXJ0cy5qb2luKFwifFwiKSArIFwiKVwiLCBmbGFncyhvcHRpb25zKSk7XG59XG4vKipcbiAqIENyZWF0ZSBhIHBhdGggcmVnZXhwIGZyb20gc3RyaW5nIGlucHV0LlxuICovXG5mdW5jdGlvbiBzdHJpbmdUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIHRva2Vuc1RvUmVnZXhwKHBhcnNlKHBhdGgsIG9wdGlvbnMpLCBrZXlzLCBvcHRpb25zKTtcbn1cbi8qKlxuICogRXhwb3NlIGEgZnVuY3Rpb24gZm9yIHRha2luZyB0b2tlbnMgYW5kIHJldHVybmluZyBhIFJlZ0V4cC5cbiAqL1xuZnVuY3Rpb24gdG9rZW5zVG9SZWdleHAodG9rZW5zLCBrZXlzLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICB2YXIgX2EgPSBvcHRpb25zLnN0cmljdCwgc3RyaWN0ID0gX2EgPT09IHZvaWQgMCA/IGZhbHNlIDogX2EsIF9iID0gb3B0aW9ucy5zdGFydCwgc3RhcnQgPSBfYiA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9iLCBfYyA9IG9wdGlvbnMuZW5kLCBlbmQgPSBfYyA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9jLCBfZCA9IG9wdGlvbnMuZW5jb2RlLCBlbmNvZGUgPSBfZCA9PT0gdm9pZCAwID8gZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHg7IH0gOiBfZDtcbiAgICB2YXIgZW5kc1dpdGggPSBcIltcIiArIGVzY2FwZVN0cmluZyhvcHRpb25zLmVuZHNXaXRoIHx8IFwiXCIpICsgXCJdfCRcIjtcbiAgICB2YXIgZGVsaW1pdGVyID0gXCJbXCIgKyBlc2NhcGVTdHJpbmcob3B0aW9ucy5kZWxpbWl0ZXIgfHwgXCIvIz9cIikgKyBcIl1cIjtcbiAgICB2YXIgcm91dGUgPSBzdGFydCA/IFwiXlwiIDogXCJcIjtcbiAgICAvLyBJdGVyYXRlIG92ZXIgdGhlIHRva2VucyBhbmQgY3JlYXRlIG91ciByZWdleHAgc3RyaW5nLlxuICAgIGZvciAodmFyIF9pID0gMCwgdG9rZW5zXzEgPSB0b2tlbnM7IF9pIDwgdG9rZW5zXzEubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgIHZhciB0b2tlbiA9IHRva2Vuc18xW19pXTtcbiAgICAgICAgaWYgKHR5cGVvZiB0b2tlbiA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgcm91dGUgKz0gZXNjYXBlU3RyaW5nKGVuY29kZSh0b2tlbikpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdmFyIHByZWZpeCA9IGVzY2FwZVN0cmluZyhlbmNvZGUodG9rZW4ucHJlZml4KSk7XG4gICAgICAgICAgICB2YXIgc3VmZml4ID0gZXNjYXBlU3RyaW5nKGVuY29kZSh0b2tlbi5zdWZmaXgpKTtcbiAgICAgICAgICAgIGlmICh0b2tlbi5wYXR0ZXJuKSB7XG4gICAgICAgICAgICAgICAgaWYgKGtleXMpXG4gICAgICAgICAgICAgICAgICAgIGtleXMucHVzaCh0b2tlbik7XG4gICAgICAgICAgICAgICAgaWYgKHByZWZpeCB8fCBzdWZmaXgpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRva2VuLm1vZGlmaWVyID09PSBcIitcIiB8fCB0b2tlbi5tb2RpZmllciA9PT0gXCIqXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtb2QgPSB0b2tlbi5tb2RpZmllciA9PT0gXCIqXCIgPyBcIj9cIiA6IFwiXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICByb3V0ZSArPSBcIig/OlwiICsgcHJlZml4ICsgXCIoKD86XCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpKD86XCIgKyBzdWZmaXggKyBwcmVmaXggKyBcIig/OlwiICsgdG9rZW4ucGF0dGVybiArIFwiKSkqKVwiICsgc3VmZml4ICsgXCIpXCIgKyBtb2Q7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByb3V0ZSArPSBcIig/OlwiICsgcHJlZml4ICsgXCIoXCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpXCIgKyBzdWZmaXggKyBcIilcIiArIHRva2VuLm1vZGlmaWVyO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByb3V0ZSArPSBcIihcIiArIHRva2VuLnBhdHRlcm4gKyBcIilcIiArIHRva2VuLm1vZGlmaWVyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJvdXRlICs9IFwiKD86XCIgKyBwcmVmaXggKyBzdWZmaXggKyBcIilcIiArIHRva2VuLm1vZGlmaWVyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChlbmQpIHtcbiAgICAgICAgaWYgKCFzdHJpY3QpXG4gICAgICAgICAgICByb3V0ZSArPSBkZWxpbWl0ZXIgKyBcIj9cIjtcbiAgICAgICAgcm91dGUgKz0gIW9wdGlvbnMuZW5kc1dpdGggPyBcIiRcIiA6IFwiKD89XCIgKyBlbmRzV2l0aCArIFwiKVwiO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdmFyIGVuZFRva2VuID0gdG9rZW5zW3Rva2Vucy5sZW5ndGggLSAxXTtcbiAgICAgICAgdmFyIGlzRW5kRGVsaW1pdGVkID0gdHlwZW9mIGVuZFRva2VuID09PSBcInN0cmluZ1wiXG4gICAgICAgICAgICA/IGRlbGltaXRlci5pbmRleE9mKGVuZFRva2VuW2VuZFRva2VuLmxlbmd0aCAtIDFdKSA+IC0xXG4gICAgICAgICAgICA6IC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuICAgICAgICAgICAgICAgIGVuZFRva2VuID09PSB1bmRlZmluZWQ7XG4gICAgICAgIGlmICghc3RyaWN0KSB7XG4gICAgICAgICAgICByb3V0ZSArPSBcIig/OlwiICsgZGVsaW1pdGVyICsgXCIoPz1cIiArIGVuZHNXaXRoICsgXCIpKT9cIjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWlzRW5kRGVsaW1pdGVkKSB7XG4gICAgICAgICAgICByb3V0ZSArPSBcIig/PVwiICsgZGVsaW1pdGVyICsgXCJ8XCIgKyBlbmRzV2l0aCArIFwiKVwiO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBuZXcgUmVnRXhwKHJvdXRlLCBmbGFncyhvcHRpb25zKSk7XG59XG5leHBvcnRzLnRva2Vuc1RvUmVnZXhwID0gdG9rZW5zVG9SZWdleHA7XG4vKipcbiAqIE5vcm1hbGl6ZSB0aGUgZ2l2ZW4gcGF0aCBzdHJpbmcsIHJldHVybmluZyBhIHJlZ3VsYXIgZXhwcmVzc2lvbi5cbiAqXG4gKiBBbiBlbXB0eSBhcnJheSBjYW4gYmUgcGFzc2VkIGluIGZvciB0aGUga2V5cywgd2hpY2ggd2lsbCBob2xkIHRoZVxuICogcGxhY2Vob2xkZXIga2V5IGRlc2NyaXB0aW9ucy4gRm9yIGV4YW1wbGUsIHVzaW5nIGAvdXNlci86aWRgLCBga2V5c2Agd2lsbFxuICogY29udGFpbiBgW3sgbmFtZTogJ2lkJywgZGVsaW1pdGVyOiAnLycsIG9wdGlvbmFsOiBmYWxzZSwgcmVwZWF0OiBmYWxzZSB9XWAuXG4gKi9cbmZ1bmN0aW9uIHBhdGhUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKSB7XG4gICAgaWYgKHBhdGggaW5zdGFuY2VvZiBSZWdFeHApXG4gICAgICAgIHJldHVybiByZWdleHBUb1JlZ2V4cChwYXRoLCBrZXlzKTtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShwYXRoKSlcbiAgICAgICAgcmV0dXJuIGFycmF5VG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucyk7XG4gICAgcmV0dXJuIHN0cmluZ1RvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpO1xufVxuZXhwb3J0cy5wYXRoVG9SZWdleHAgPSBwYXRoVG9SZWdleHA7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLCIvKlxuTUlUIExpY2Vuc2VcblxuQ29weXJpZ2h0IChjKSBKYXNvbiBNaWxsZXIgKGh0dHBzOi8vamFzb25mb3JtYXQuY29tLylcblxuUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuKi9cblxuLy8gVGhpcyBmaWxlIGlzIGJhc2VkIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS9kZXZlbG9waXQvbWl0dC9ibG9iL3YxLjEuMy9zcmMvaW5kZXguanNcbi8vIEl0J3MgYmVlbiBlZGl0ZWQgZm9yIHRoZSBuZWVkcyBvZiB0aGlzIHNjcmlwdFxuLy8gU2VlIHRoZSBMSUNFTlNFIGF0IHRoZSB0b3Agb2YgdGhlIGZpbGVcblxudHlwZSBIYW5kbGVyID0gKC4uLmV2dHM6IGFueVtdKSA9PiB2b2lkXG5cbmV4cG9ydCB0eXBlIE1pdHRFbWl0dGVyID0ge1xuICBvbih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpOiB2b2lkXG4gIG9mZih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpOiB2b2lkXG4gIGVtaXQodHlwZTogc3RyaW5nLCAuLi5ldnRzOiBhbnlbXSk6IHZvaWRcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWl0dCgpOiBNaXR0RW1pdHRlciB7XG4gIGNvbnN0IGFsbDogeyBbczogc3RyaW5nXTogSGFuZGxlcltdIH0gPSBPYmplY3QuY3JlYXRlKG51bGwpXG5cbiAgcmV0dXJuIHtcbiAgICBvbih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpIHtcbiAgICAgIDsoYWxsW3R5cGVdIHx8IChhbGxbdHlwZV0gPSBbXSkpLnB1c2goaGFuZGxlcilcbiAgICB9LFxuXG4gICAgb2ZmKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcikge1xuICAgICAgaWYgKGFsbFt0eXBlXSkge1xuICAgICAgICBhbGxbdHlwZV0uc3BsaWNlKGFsbFt0eXBlXS5pbmRleE9mKGhhbmRsZXIpID4+PiAwLCAxKVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBlbWl0KHR5cGU6IHN0cmluZywgLi4uZXZ0czogYW55W10pIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbiAgICAgIDsoYWxsW3R5cGVdIHx8IFtdKS5zbGljZSgpLm1hcCgoaGFuZGxlcjogSGFuZGxlcikgPT4ge1xuICAgICAgICBoYW5kbGVyKC4uLmV2dHMpXG4gICAgICB9KVxuICAgIH0sXG4gIH1cbn1cbiIsIi8qIGdsb2JhbCBfX05FWFRfREFUQV9fICovXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1jb25zb2xlXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHtcbiAgbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2gsXG4gIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoLFxufSBmcm9tICcuLi8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoJ1xuaW1wb3J0IHsgR29vZFBhZ2VDYWNoZSwgU3R5bGVTaGVldFR1cGxlIH0gZnJvbSAnLi4vLi4vLi4vY2xpZW50L3BhZ2UtbG9hZGVyJ1xuaW1wb3J0IHtcbiAgZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCxcbiAgaXNBc3NldEVycm9yLFxuICBtYXJrQXNzZXRFcnJvcixcbn0gZnJvbSAnLi4vLi4vLi4vY2xpZW50L3JvdXRlLWxvYWRlcidcbmltcG9ydCB7IGRlbm9ybWFsaXplUGFnZVBhdGggfSBmcm9tICcuLi8uLi9zZXJ2ZXIvZGVub3JtYWxpemUtcGFnZS1wYXRoJ1xuaW1wb3J0IG1pdHQsIHsgTWl0dEVtaXR0ZXIgfSBmcm9tICcuLi9taXR0J1xuaW1wb3J0IHtcbiAgQXBwQ29udGV4dFR5cGUsXG4gIGZvcm1hdFdpdGhWYWxpZGF0aW9uLFxuICBnZXRMb2NhdGlvbk9yaWdpbixcbiAgZ2V0VVJMLFxuICBsb2FkR2V0SW5pdGlhbFByb3BzLFxuICBOZXh0UGFnZUNvbnRleHQsXG4gIFNULFxufSBmcm9tICcuLi91dGlscydcbmltcG9ydCBlc2NhcGVQYXRoRGVsaW1pdGVycyBmcm9tICcuL3V0aWxzL2VzY2FwZS1wYXRoLWRlbGltaXRlcnMnXG5pbXBvcnQgeyBpc0R5bmFtaWNSb3V0ZSB9IGZyb20gJy4vdXRpbHMvaXMtZHluYW1pYydcbmltcG9ydCB7IHBhcnNlUmVsYXRpdmVVcmwgfSBmcm9tICcuL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybCdcbmltcG9ydCB7IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkgfSBmcm9tICcuL3V0aWxzL3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHJlc29sdmVSZXdyaXRlcyBmcm9tICcuL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMnXG5pbXBvcnQgeyBnZXRSb3V0ZU1hdGNoZXIgfSBmcm9tICcuL3V0aWxzL3JvdXRlLW1hdGNoZXInXG5pbXBvcnQgeyBnZXRSb3V0ZVJlZ2V4IH0gZnJvbSAnLi91dGlscy9yb3V0ZS1yZWdleCdcblxuaW50ZXJmYWNlIFRyYW5zaXRpb25PcHRpb25zIHtcbiAgc2hhbGxvdz86IGJvb2xlYW5cbiAgbG9jYWxlPzogc3RyaW5nIHwgZmFsc2Vcbn1cblxuaW50ZXJmYWNlIE5leHRIaXN0b3J5U3RhdGUge1xuICB1cmw6IHN0cmluZ1xuICBhczogc3RyaW5nXG4gIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zXG59XG5cbnR5cGUgSGlzdG9yeVN0YXRlID0gbnVsbCB8IHsgX19OOiBmYWxzZSB9IHwgKHsgX19OOiB0cnVlIH0gJiBOZXh0SGlzdG9yeVN0YXRlKVxuXG5jb25zdCBiYXNlUGF0aCA9IChwcm9jZXNzLmVudi5fX05FWFRfUk9VVEVSX0JBU0VQQVRIIGFzIHN0cmluZykgfHwgJydcblxuZnVuY3Rpb24gYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpIHtcbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24obmV3IEVycm9yKCdSb3V0ZSBDYW5jZWxsZWQnKSwge1xuICAgIGNhbmNlbGxlZDogdHJ1ZSxcbiAgfSlcbn1cblxuZnVuY3Rpb24gYWRkUGF0aFByZWZpeChwYXRoOiBzdHJpbmcsIHByZWZpeD86IHN0cmluZykge1xuICByZXR1cm4gcHJlZml4ICYmIHBhdGguc3RhcnRzV2l0aCgnLycpXG4gICAgPyBwYXRoID09PSAnLydcbiAgICAgID8gbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2gocHJlZml4KVxuICAgICAgOiBgJHtwcmVmaXh9JHtwYXRofWBcbiAgICA6IHBhdGhcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZExvY2FsZShcbiAgcGF0aDogc3RyaW5nLFxuICBsb2NhbGU/OiBzdHJpbmcgfCBmYWxzZSxcbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuKSB7XG4gIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgcmV0dXJuIGxvY2FsZSAmJlxuICAgICAgbG9jYWxlICE9PSBkZWZhdWx0TG9jYWxlICYmXG4gICAgICAhcGF0aC5zdGFydHNXaXRoKCcvJyArIGxvY2FsZSArICcvJykgJiZcbiAgICAgIHBhdGggIT09ICcvJyArIGxvY2FsZVxuICAgICAgPyBhZGRQYXRoUHJlZml4KHBhdGgsICcvJyArIGxvY2FsZSlcbiAgICAgIDogcGF0aFxuICB9XG4gIHJldHVybiBwYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxMb2NhbGUocGF0aDogc3RyaW5nLCBsb2NhbGU/OiBzdHJpbmcpIHtcbiAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICByZXR1cm4gbG9jYWxlICYmXG4gICAgICAocGF0aC5zdGFydHNXaXRoKCcvJyArIGxvY2FsZSArICcvJykgfHwgcGF0aCA9PT0gJy8nICsgbG9jYWxlKVxuICAgICAgPyBwYXRoLnN1YnN0cihsb2NhbGUubGVuZ3RoICsgMSkgfHwgJy8nXG4gICAgICA6IHBhdGhcbiAgfVxuICByZXR1cm4gcGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gaGFzQmFzZVBhdGgocGF0aDogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiBwYXRoID09PSBiYXNlUGF0aCB8fCBwYXRoLnN0YXJ0c1dpdGgoYmFzZVBhdGggKyAnLycpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICAvLyB3ZSBvbmx5IGFkZCB0aGUgYmFzZXBhdGggb24gcmVsYXRpdmUgdXJsc1xuICByZXR1cm4gYWRkUGF0aFByZWZpeChwYXRoLCBiYXNlUGF0aClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbEJhc2VQYXRoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBwYXRoLnNsaWNlKGJhc2VQYXRoLmxlbmd0aCkgfHwgJy8nXG59XG5cbi8qKlxuICogRGV0ZWN0cyB3aGV0aGVyIGEgZ2l2ZW4gdXJsIGlzIHJvdXRhYmxlIGJ5IHRoZSBOZXh0LmpzIHJvdXRlciAoYnJvd3NlciBvbmx5KS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzTG9jYWxVUkwodXJsOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgaWYgKHVybC5zdGFydHNXaXRoKCcvJykpIHJldHVybiB0cnVlXG4gIHRyeSB7XG4gICAgLy8gYWJzb2x1dGUgdXJscyBjYW4gYmUgbG9jYWwgaWYgdGhleSBhcmUgb24gdGhlIHNhbWUgb3JpZ2luXG4gICAgY29uc3QgbG9jYXRpb25PcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG4gICAgY29uc3QgcmVzb2x2ZWQgPSBuZXcgVVJMKHVybCwgbG9jYXRpb25PcmlnaW4pXG4gICAgcmV0dXJuIHJlc29sdmVkLm9yaWdpbiA9PT0gbG9jYXRpb25PcmlnaW4gJiYgaGFzQmFzZVBhdGgocmVzb2x2ZWQucGF0aG5hbWUpXG4gIH0gY2F0Y2ggKF8pIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuXG50eXBlIFVybCA9IFVybE9iamVjdCB8IHN0cmluZ1xuXG5leHBvcnQgZnVuY3Rpb24gaW50ZXJwb2xhdGVBcyhcbiAgcm91dGU6IHN0cmluZyxcbiAgYXNQYXRobmFtZTogc3RyaW5nLFxuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbikge1xuICBsZXQgaW50ZXJwb2xhdGVkUm91dGUgPSAnJ1xuXG4gIGNvbnN0IGR5bmFtaWNSZWdleCA9IGdldFJvdXRlUmVnZXgocm91dGUpXG4gIGNvbnN0IGR5bmFtaWNHcm91cHMgPSBkeW5hbWljUmVnZXguZ3JvdXBzXG4gIGNvbnN0IGR5bmFtaWNNYXRjaGVzID1cbiAgICAvLyBUcnkgdG8gbWF0Y2ggdGhlIGR5bmFtaWMgcm91dGUgYWdhaW5zdCB0aGUgYXNQYXRoXG4gICAgKGFzUGF0aG5hbWUgIT09IHJvdXRlID8gZ2V0Um91dGVNYXRjaGVyKGR5bmFtaWNSZWdleCkoYXNQYXRobmFtZSkgOiAnJykgfHxcbiAgICAvLyBGYWxsIGJhY2sgdG8gcmVhZGluZyB0aGUgdmFsdWVzIGZyb20gdGhlIGhyZWZcbiAgICAvLyBUT0RPOiBzaG91bGQgdGhpcyB0YWtlIHByaW9yaXR5OyBhbHNvIG5lZWQgdG8gY2hhbmdlIGluIHRoZSByb3V0ZXIuXG4gICAgcXVlcnlcblxuICBpbnRlcnBvbGF0ZWRSb3V0ZSA9IHJvdXRlXG4gIGNvbnN0IHBhcmFtcyA9IE9iamVjdC5rZXlzKGR5bmFtaWNHcm91cHMpXG5cbiAgaWYgKFxuICAgICFwYXJhbXMuZXZlcnkoKHBhcmFtKSA9PiB7XG4gICAgICBsZXQgdmFsdWUgPSBkeW5hbWljTWF0Y2hlc1twYXJhbV0gfHwgJydcbiAgICAgIGNvbnN0IHsgcmVwZWF0LCBvcHRpb25hbCB9ID0gZHluYW1pY0dyb3Vwc1twYXJhbV1cblxuICAgICAgLy8gc3VwcG9ydCBzaW5nbGUtbGV2ZWwgY2F0Y2gtYWxsXG4gICAgICAvLyBUT0RPOiBtb3JlIHJvYnVzdCBoYW5kbGluZyBmb3IgdXNlci1lcnJvciAocGFzc2luZyBgL2ApXG4gICAgICBsZXQgcmVwbGFjZWQgPSBgWyR7cmVwZWF0ID8gJy4uLicgOiAnJ30ke3BhcmFtfV1gXG4gICAgICBpZiAob3B0aW9uYWwpIHtcbiAgICAgICAgcmVwbGFjZWQgPSBgJHshdmFsdWUgPyAnLycgOiAnJ31bJHtyZXBsYWNlZH1dYFxuICAgICAgfVxuICAgICAgaWYgKHJlcGVhdCAmJiAhQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHZhbHVlID0gW3ZhbHVlXVxuXG4gICAgICByZXR1cm4gKFxuICAgICAgICAob3B0aW9uYWwgfHwgcGFyYW0gaW4gZHluYW1pY01hdGNoZXMpICYmXG4gICAgICAgIC8vIEludGVycG9sYXRlIGdyb3VwIGludG8gZGF0YSBVUkwgaWYgcHJlc2VudFxuICAgICAgICAoaW50ZXJwb2xhdGVkUm91dGUgPVxuICAgICAgICAgIGludGVycG9sYXRlZFJvdXRlIS5yZXBsYWNlKFxuICAgICAgICAgICAgcmVwbGFjZWQsXG4gICAgICAgICAgICByZXBlYXRcbiAgICAgICAgICAgICAgPyAodmFsdWUgYXMgc3RyaW5nW10pLm1hcChlc2NhcGVQYXRoRGVsaW1pdGVycykuam9pbignLycpXG4gICAgICAgICAgICAgIDogZXNjYXBlUGF0aERlbGltaXRlcnModmFsdWUgYXMgc3RyaW5nKVxuICAgICAgICAgICkgfHwgJy8nKVxuICAgICAgKVxuICAgIH0pXG4gICkge1xuICAgIGludGVycG9sYXRlZFJvdXRlID0gJycgLy8gZGlkIG5vdCBzYXRpc2Z5IGFsbCByZXF1aXJlbWVudHNcblxuICAgIC8vIG4uYi4gV2UgaWdub3JlIHRoaXMgZXJyb3IgYmVjYXVzZSB3ZSBoYW5kbGUgd2FybmluZyBmb3IgdGhpcyBjYXNlIGluXG4gICAgLy8gZGV2ZWxvcG1lbnQgaW4gdGhlIGA8TGluaz5gIGNvbXBvbmVudCBkaXJlY3RseS5cbiAgfVxuICByZXR1cm4ge1xuICAgIHBhcmFtcyxcbiAgICByZXN1bHQ6IGludGVycG9sYXRlZFJvdXRlLFxuICB9XG59XG5cbmZ1bmN0aW9uIG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeTogUGFyc2VkVXJsUXVlcnksIHBhcmFtczogc3RyaW5nW10pIHtcbiAgY29uc3QgZmlsdGVyZWRRdWVyeTogUGFyc2VkVXJsUXVlcnkgPSB7fVxuXG4gIE9iamVjdC5rZXlzKHF1ZXJ5KS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICBpZiAoIXBhcmFtcy5pbmNsdWRlcyhrZXkpKSB7XG4gICAgICBmaWx0ZXJlZFF1ZXJ5W2tleV0gPSBxdWVyeVtrZXldXG4gICAgfVxuICB9KVxuICByZXR1cm4gZmlsdGVyZWRRdWVyeVxufVxuXG4vKipcbiAqIFJlc29sdmVzIGEgZ2l2ZW4gaHlwZXJsaW5rIHdpdGggYSBjZXJ0YWluIHJvdXRlciBzdGF0ZSAoYmFzZVBhdGggbm90IGluY2x1ZGVkKS5cbiAqIFByZXNlcnZlcyBhYnNvbHV0ZSB1cmxzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVzb2x2ZUhyZWYoXG4gIGN1cnJlbnRQYXRoOiBzdHJpbmcsXG4gIGhyZWY6IFVybCxcbiAgcmVzb2x2ZUFzPzogYm9vbGVhblxuKTogc3RyaW5nIHtcbiAgLy8gd2UgdXNlIGEgZHVtbXkgYmFzZSB1cmwgZm9yIHJlbGF0aXZlIHVybHNcbiAgY29uc3QgYmFzZSA9IG5ldyBVUkwoY3VycmVudFBhdGgsICdodHRwOi8vbicpXG4gIGNvbnN0IHVybEFzU3RyaW5nID1cbiAgICB0eXBlb2YgaHJlZiA9PT0gJ3N0cmluZycgPyBocmVmIDogZm9ybWF0V2l0aFZhbGlkYXRpb24oaHJlZilcbiAgLy8gUmV0dXJuIGJlY2F1c2UgaXQgY2Fubm90IGJlIHJvdXRlZCBieSB0aGUgTmV4dC5qcyByb3V0ZXJcbiAgaWYgKCFpc0xvY2FsVVJMKHVybEFzU3RyaW5nKSkge1xuICAgIHJldHVybiAocmVzb2x2ZUFzID8gW3VybEFzU3RyaW5nXSA6IHVybEFzU3RyaW5nKSBhcyBzdHJpbmdcbiAgfVxuICB0cnkge1xuICAgIGNvbnN0IGZpbmFsVXJsID0gbmV3IFVSTCh1cmxBc1N0cmluZywgYmFzZSlcbiAgICBmaW5hbFVybC5wYXRobmFtZSA9IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKGZpbmFsVXJsLnBhdGhuYW1lKVxuICAgIGxldCBpbnRlcnBvbGF0ZWRBcyA9ICcnXG5cbiAgICBpZiAoXG4gICAgICBpc0R5bmFtaWNSb3V0ZShmaW5hbFVybC5wYXRobmFtZSkgJiZcbiAgICAgIGZpbmFsVXJsLnNlYXJjaFBhcmFtcyAmJlxuICAgICAgcmVzb2x2ZUFzXG4gICAgKSB7XG4gICAgICBjb25zdCBxdWVyeSA9IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoZmluYWxVcmwuc2VhcmNoUGFyYW1zKVxuXG4gICAgICBjb25zdCB7IHJlc3VsdCwgcGFyYW1zIH0gPSBpbnRlcnBvbGF0ZUFzKFxuICAgICAgICBmaW5hbFVybC5wYXRobmFtZSxcbiAgICAgICAgZmluYWxVcmwucGF0aG5hbWUsXG4gICAgICAgIHF1ZXJ5XG4gICAgICApXG5cbiAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgaW50ZXJwb2xhdGVkQXMgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbih7XG4gICAgICAgICAgcGF0aG5hbWU6IHJlc3VsdCxcbiAgICAgICAgICBoYXNoOiBmaW5hbFVybC5oYXNoLFxuICAgICAgICAgIHF1ZXJ5OiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnksIHBhcmFtcyksXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gaWYgdGhlIG9yaWdpbiBkaWRuJ3QgY2hhbmdlLCBpdCBtZWFucyB3ZSByZWNlaXZlZCBhIHJlbGF0aXZlIGhyZWZcbiAgICBjb25zdCByZXNvbHZlZEhyZWYgPVxuICAgICAgZmluYWxVcmwub3JpZ2luID09PSBiYXNlLm9yaWdpblxuICAgICAgICA/IGZpbmFsVXJsLmhyZWYuc2xpY2UoZmluYWxVcmwub3JpZ2luLmxlbmd0aClcbiAgICAgICAgOiBmaW5hbFVybC5ocmVmXG5cbiAgICByZXR1cm4gKHJlc29sdmVBc1xuICAgICAgPyBbcmVzb2x2ZWRIcmVmLCBpbnRlcnBvbGF0ZWRBcyB8fCByZXNvbHZlZEhyZWZdXG4gICAgICA6IHJlc29sdmVkSHJlZikgYXMgc3RyaW5nXG4gIH0gY2F0Y2ggKF8pIHtcbiAgICByZXR1cm4gKHJlc29sdmVBcyA/IFt1cmxBc1N0cmluZ10gOiB1cmxBc1N0cmluZykgYXMgc3RyaW5nXG4gIH1cbn1cblxuZnVuY3Rpb24gcHJlcGFyZVVybEFzKHJvdXRlcjogTmV4dFJvdXRlciwgdXJsOiBVcmwsIGFzOiBVcmwpIHtcbiAgLy8gSWYgdXJsIGFuZCBhcyBwcm92aWRlZCBhcyBhbiBvYmplY3QgcmVwcmVzZW50YXRpb24sXG4gIC8vIHdlJ2xsIGZvcm1hdCB0aGVtIGludG8gdGhlIHN0cmluZyB2ZXJzaW9uIGhlcmUuXG4gIHJldHVybiB7XG4gICAgdXJsOiBhZGRCYXNlUGF0aChyZXNvbHZlSHJlZihyb3V0ZXIucGF0aG5hbWUsIHVybCkpLFxuICAgIGFzOiBhcyA/IGFkZEJhc2VQYXRoKHJlc29sdmVIcmVmKHJvdXRlci5wYXRobmFtZSwgYXMpKSA6IGFzLFxuICB9XG59XG5cbmV4cG9ydCB0eXBlIEJhc2VSb3V0ZXIgPSB7XG4gIHJvdXRlOiBzdHJpbmdcbiAgcGF0aG5hbWU6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYXNQYXRoOiBzdHJpbmdcbiAgYmFzZVBhdGg6IHN0cmluZ1xuICBsb2NhbGU/OiBzdHJpbmdcbiAgbG9jYWxlcz86IHN0cmluZ1tdXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbn1cblxuZXhwb3J0IHR5cGUgTmV4dFJvdXRlciA9IEJhc2VSb3V0ZXIgJlxuICBQaWNrPFxuICAgIFJvdXRlcixcbiAgICB8ICdwdXNoJ1xuICAgIHwgJ3JlcGxhY2UnXG4gICAgfCAncmVsb2FkJ1xuICAgIHwgJ2JhY2snXG4gICAgfCAncHJlZmV0Y2gnXG4gICAgfCAnYmVmb3JlUG9wU3RhdGUnXG4gICAgfCAnZXZlbnRzJ1xuICAgIHwgJ2lzRmFsbGJhY2snXG4gID5cblxuZXhwb3J0IHR5cGUgUHJlZmV0Y2hPcHRpb25zID0ge1xuICBwcmlvcml0eT86IGJvb2xlYW5cbiAgbG9jYWxlPzogc3RyaW5nIHwgZmFsc2Vcbn1cblxuZXhwb3J0IHR5cGUgUHJpdmF0ZVJvdXRlSW5mbyA9XG4gIHwgKE9taXQ8Q29tcGxldGVQcml2YXRlUm91dGVJbmZvLCAnc3R5bGVTaGVldHMnPiAmIHsgaW5pdGlhbDogdHJ1ZSB9KVxuICB8IENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mb1xuXG5leHBvcnQgdHlwZSBDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8gPSB7XG4gIENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICBzdHlsZVNoZWV0czogU3R5bGVTaGVldFR1cGxlW11cbiAgX19OX1NTRz86IGJvb2xlYW5cbiAgX19OX1NTUD86IGJvb2xlYW5cbiAgcHJvcHM/OiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG4gIGVycj86IEVycm9yXG4gIGVycm9yPzogYW55XG59XG5cbmV4cG9ydCB0eXBlIEFwcFByb3BzID0gUGljazxDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8sICdDb21wb25lbnQnIHwgJ2Vycic+ICYge1xuICByb3V0ZXI6IFJvdXRlclxufSAmIFJlY29yZDxzdHJpbmcsIGFueT5cbmV4cG9ydCB0eXBlIEFwcENvbXBvbmVudCA9IENvbXBvbmVudFR5cGU8QXBwUHJvcHM+XG5cbnR5cGUgU3Vic2NyaXB0aW9uID0gKGRhdGE6IFByaXZhdGVSb3V0ZUluZm8sIEFwcDogQXBwQ29tcG9uZW50KSA9PiBQcm9taXNlPHZvaWQ+XG5cbnR5cGUgQmVmb3JlUG9wU3RhdGVDYWxsYmFjayA9IChzdGF0ZTogTmV4dEhpc3RvcnlTdGF0ZSkgPT4gYm9vbGVhblxuXG50eXBlIENvbXBvbmVudExvYWRDYW5jZWwgPSAoKCkgPT4gdm9pZCkgfCBudWxsXG5cbnR5cGUgSGlzdG9yeU1ldGhvZCA9ICdyZXBsYWNlU3RhdGUnIHwgJ3B1c2hTdGF0ZSdcblxuY29uc3QgbWFudWFsU2Nyb2xsUmVzdG9yYXRpb24gPVxuICBwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OICYmXG4gIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmXG4gICdzY3JvbGxSZXN0b3JhdGlvbicgaW4gd2luZG93Lmhpc3RvcnlcblxuY29uc3QgU1NHX0RBVEFfTk9UX0ZPVU5EX0VSUk9SID0gJ1NTRyBEYXRhIE5PVF9GT1VORCdcblxuZnVuY3Rpb24gZmV0Y2hSZXRyeSh1cmw6IHN0cmluZywgYXR0ZW1wdHM6IG51bWJlcik6IFByb21pc2U8YW55PiB7XG4gIHJldHVybiBmZXRjaCh1cmwsIHtcbiAgICAvLyBDb29raWVzIGFyZSByZXF1aXJlZCB0byBiZSBwcmVzZW50IGZvciBOZXh0LmpzJyBTU0cgXCJQcmV2aWV3IE1vZGVcIi5cbiAgICAvLyBDb29raWVzIG1heSBhbHNvIGJlIHJlcXVpcmVkIGZvciBgZ2V0U2VydmVyU2lkZVByb3BzYC5cbiAgICAvL1xuICAgIC8vID4gYGZldGNoYCB3b27igJl0IHNlbmQgY29va2llcywgdW5sZXNzIHlvdSBzZXQgdGhlIGNyZWRlbnRpYWxzIGluaXRcbiAgICAvLyA+IG9wdGlvbi5cbiAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRmV0Y2hfQVBJL1VzaW5nX0ZldGNoXG4gICAgLy9cbiAgICAvLyA+IEZvciBtYXhpbXVtIGJyb3dzZXIgY29tcGF0aWJpbGl0eSB3aGVuIGl0IGNvbWVzIHRvIHNlbmRpbmcgJlxuICAgIC8vID4gcmVjZWl2aW5nIGNvb2tpZXMsIGFsd2F5cyBzdXBwbHkgdGhlIGBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJ2BcbiAgICAvLyA+IG9wdGlvbiBpbnN0ZWFkIG9mIHJlbHlpbmcgb24gdGhlIGRlZmF1bHQuXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2dpdGh1Yi9mZXRjaCNjYXZlYXRzXG4gICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicsXG4gIH0pLnRoZW4oKHJlcykgPT4ge1xuICAgIGlmICghcmVzLm9rKSB7XG4gICAgICBpZiAoYXR0ZW1wdHMgPiAxICYmIHJlcy5zdGF0dXMgPj0gNTAwKSB7XG4gICAgICAgIHJldHVybiBmZXRjaFJldHJ5KHVybCwgYXR0ZW1wdHMgLSAxKVxuICAgICAgfVxuICAgICAgaWYgKHJlcy5zdGF0dXMgPT09IDQwNCkge1xuICAgICAgICAvLyBUT0RPOiBoYW5kbGUgcmVsb2FkaW5nIGluIGRldmVsb3BtZW50IGZyb20gZmFsbGJhY2sgcmV0dXJuaW5nIDIwMFxuICAgICAgICAvLyB0byBvbi1kZW1hbmQtZW50cnktaGFuZGxlciBjYXVzaW5nIGl0IHRvIHJlbG9hZCBwZXJpb2RpY2FsbHlcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFNTR19EQVRBX05PVF9GT1VORF9FUlJPUilcbiAgICAgIH1cbiAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3RhdGljIHByb3BzYClcbiAgICB9XG4gICAgcmV0dXJuIHJlcy5qc29uKClcbiAgfSlcbn1cblxuZnVuY3Rpb24gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZjogc3RyaW5nLCBpc1NlcnZlclJlbmRlcjogYm9vbGVhbikge1xuICByZXR1cm4gZmV0Y2hSZXRyeShkYXRhSHJlZiwgaXNTZXJ2ZXJSZW5kZXIgPyAzIDogMSkuY2F0Y2goKGVycjogRXJyb3IpID0+IHtcbiAgICAvLyBXZSBzaG91bGQgb25seSB0cmlnZ2VyIGEgc2VydmVyLXNpZGUgdHJhbnNpdGlvbiBpZiB0aGlzIHdhcyBjYXVzZWRcbiAgICAvLyBvbiBhIGNsaWVudC1zaWRlIHRyYW5zaXRpb24uIE90aGVyd2lzZSwgd2UnZCBnZXQgaW50byBhbiBpbmZpbml0ZVxuICAgIC8vIGxvb3AuXG5cbiAgICBpZiAoIWlzU2VydmVyUmVuZGVyKSB7XG4gICAgICBtYXJrQXNzZXRFcnJvcihlcnIpXG4gICAgfVxuICAgIHRocm93IGVyclxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSb3V0ZXIgaW1wbGVtZW50cyBCYXNlUm91dGVyIHtcbiAgcm91dGU6IHN0cmluZ1xuICBwYXRobmFtZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBhc1BhdGg6IHN0cmluZ1xuICBiYXNlUGF0aDogc3RyaW5nXG5cbiAgLyoqXG4gICAqIE1hcCBvZiBhbGwgY29tcG9uZW50cyBsb2FkZWQgaW4gYFJvdXRlcmBcbiAgICovXG4gIGNvbXBvbmVudHM6IHsgW3BhdGhuYW1lOiBzdHJpbmddOiBQcml2YXRlUm91dGVJbmZvIH1cbiAgLy8gU3RhdGljIERhdGEgQ2FjaGVcbiAgc2RjOiB7IFthc1BhdGg6IHN0cmluZ106IG9iamVjdCB9ID0ge31cbiAgc3ViOiBTdWJzY3JpcHRpb25cbiAgY2xjOiBDb21wb25lbnRMb2FkQ2FuY2VsXG4gIHBhZ2VMb2FkZXI6IGFueVxuICBfYnBzOiBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrIHwgdW5kZWZpbmVkXG4gIGV2ZW50czogTWl0dEVtaXR0ZXJcbiAgX3dyYXBBcHA6IChBcHA6IEFwcENvbXBvbmVudCkgPT4gYW55XG4gIGlzU3NyOiBib29sZWFuXG4gIGlzRmFsbGJhY2s6IGJvb2xlYW5cbiAgX2luRmxpZ2h0Um91dGU/OiBzdHJpbmdcbiAgX3NoYWxsb3c/OiBib29sZWFuXG4gIGxvY2FsZT86IHN0cmluZ1xuICBsb2NhbGVzPzogc3RyaW5nW11cbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuXG4gIHN0YXRpYyBldmVudHM6IE1pdHRFbWl0dGVyID0gbWl0dCgpXG5cbiAgY29uc3RydWN0b3IoXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICB7XG4gICAgICBpbml0aWFsUHJvcHMsXG4gICAgICBwYWdlTG9hZGVyLFxuICAgICAgQXBwLFxuICAgICAgd3JhcEFwcCxcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIGVycixcbiAgICAgIHN1YnNjcmlwdGlvbixcbiAgICAgIGlzRmFsbGJhY2ssXG4gICAgICBsb2NhbGUsXG4gICAgICBsb2NhbGVzLFxuICAgICAgZGVmYXVsdExvY2FsZSxcbiAgICB9OiB7XG4gICAgICBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvblxuICAgICAgaW5pdGlhbFByb3BzOiBhbnlcbiAgICAgIHBhZ2VMb2FkZXI6IGFueVxuICAgICAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gICAgICBBcHA6IEFwcENvbXBvbmVudFxuICAgICAgd3JhcEFwcDogKEFwcDogQXBwQ29tcG9uZW50KSA9PiBhbnlcbiAgICAgIGVycj86IEVycm9yXG4gICAgICBpc0ZhbGxiYWNrOiBib29sZWFuXG4gICAgICBsb2NhbGU/OiBzdHJpbmdcbiAgICAgIGxvY2FsZXM/OiBzdHJpbmdbXVxuICAgICAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuICAgIH1cbiAgKSB7XG4gICAgLy8gcmVwcmVzZW50cyB0aGUgY3VycmVudCBjb21wb25lbnQga2V5XG4gICAgdGhpcy5yb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuXG4gICAgLy8gc2V0IHVwIHRoZSBjb21wb25lbnQgY2FjaGUgKGJ5IHJvdXRlIGtleXMpXG4gICAgdGhpcy5jb21wb25lbnRzID0ge31cbiAgICAvLyBXZSBzaG91bGQgbm90IGtlZXAgdGhlIGNhY2hlLCBpZiB0aGVyZSdzIGFuIGVycm9yXG4gICAgLy8gT3RoZXJ3aXNlLCB0aGlzIGNhdXNlIGlzc3VlcyB3aGVuIHdoZW4gZ29pbmcgYmFjayBhbmRcbiAgICAvLyBjb21lIGFnYWluIHRvIHRoZSBlcnJvcmVkIHBhZ2UuXG4gICAgaWYgKHBhdGhuYW1lICE9PSAnL19lcnJvcicpIHtcbiAgICAgIHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSA9IHtcbiAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICBpbml0aWFsOiB0cnVlLFxuICAgICAgICBwcm9wczogaW5pdGlhbFByb3BzLFxuICAgICAgICBlcnIsXG4gICAgICAgIF9fTl9TU0c6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTRyxcbiAgICAgICAgX19OX1NTUDogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NQLFxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuY29tcG9uZW50c1snL19hcHAnXSA9IHtcbiAgICAgIENvbXBvbmVudDogQXBwIGFzIENvbXBvbmVudFR5cGUsXG4gICAgICBzdHlsZVNoZWV0czogW1xuICAgICAgICAvKiAvX2FwcCBkb2VzIG5vdCBuZWVkIGl0cyBzdHlsZXNoZWV0cyBtYW5hZ2VkICovXG4gICAgICBdLFxuICAgIH1cblxuICAgIC8vIEJhY2t3YXJkcyBjb21wYXQgZm9yIFJvdXRlci5yb3V0ZXIuZXZlbnRzXG4gICAgLy8gVE9ETzogU2hvdWxkIGJlIHJlbW92ZSB0aGUgZm9sbG93aW5nIG1ham9yIHZlcnNpb24gYXMgaXQgd2FzIG5ldmVyIGRvY3VtZW50ZWRcbiAgICB0aGlzLmV2ZW50cyA9IFJvdXRlci5ldmVudHNcblxuICAgIHRoaXMucGFnZUxvYWRlciA9IHBhZ2VMb2FkZXJcbiAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnlcbiAgICAvLyBpZiBhdXRvIHByZXJlbmRlcmVkIGFuZCBkeW5hbWljIHJvdXRlIHdhaXQgdG8gdXBkYXRlIGFzUGF0aFxuICAgIC8vIHVudGlsIGFmdGVyIG1vdW50IHRvIHByZXZlbnQgaHlkcmF0aW9uIG1pc21hdGNoXG4gICAgdGhpcy5hc1BhdGggPVxuICAgICAgLy8gQHRzLWlnbm9yZSB0aGlzIGlzIHRlbXBvcmFyaWx5IGdsb2JhbCAoYXR0YWNoZWQgdG8gd2luZG93KVxuICAgICAgaXNEeW5hbWljUm91dGUocGF0aG5hbWUpICYmIF9fTkVYVF9EQVRBX18uYXV0b0V4cG9ydCA/IHBhdGhuYW1lIDogYXNcbiAgICB0aGlzLmJhc2VQYXRoID0gYmFzZVBhdGhcbiAgICB0aGlzLnN1YiA9IHN1YnNjcmlwdGlvblxuICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIHRoaXMuX3dyYXBBcHAgPSB3cmFwQXBwXG4gICAgLy8gbWFrZSBzdXJlIHRvIGlnbm9yZSBleHRyYSBwb3BTdGF0ZSBpbiBzYWZhcmkgb24gbmF2aWdhdGluZ1xuICAgIC8vIGJhY2sgZnJvbSBleHRlcm5hbCBzaXRlXG4gICAgdGhpcy5pc1NzciA9IHRydWVcblxuICAgIHRoaXMuaXNGYWxsYmFjayA9IGlzRmFsbGJhY2tcblxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICB0aGlzLmxvY2FsZSA9IGxvY2FsZVxuICAgICAgdGhpcy5sb2NhbGVzID0gbG9jYWxlc1xuICAgICAgdGhpcy5kZWZhdWx0TG9jYWxlID0gZGVmYXVsdExvY2FsZVxuICAgIH1cblxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gbWFrZSBzdXJlIFwiYXNcIiBkb2Vzbid0IHN0YXJ0IHdpdGggZG91YmxlIHNsYXNoZXMgb3IgZWxzZSBpdCBjYW5cbiAgICAgIC8vIHRocm93IGFuIGVycm9yIGFzIGl0J3MgY29uc2lkZXJlZCBpbnZhbGlkXG4gICAgICBpZiAoYXMuc3Vic3RyKDAsIDIpICE9PSAnLy8nKSB7XG4gICAgICAgIC8vIGluIG9yZGVyIGZvciBgZS5zdGF0ZWAgdG8gd29yayBvbiB0aGUgYG9ucG9wc3RhdGVgIGV2ZW50XG4gICAgICAgIC8vIHdlIGhhdmUgdG8gcmVnaXN0ZXIgdGhlIGluaXRpYWwgcm91dGUgdXBvbiBpbml0aWFsaXphdGlvblxuICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKHBhdGhuYW1lKSwgcXVlcnkgfSksXG4gICAgICAgICAgZ2V0VVJMKCksXG4gICAgICAgICAgeyBsb2NhbGUgfVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIHRoaXMub25Qb3BTdGF0ZSlcblxuICAgICAgLy8gZW5hYmxlIGN1c3RvbSBzY3JvbGwgcmVzdG9yYXRpb24gaGFuZGxpbmcgd2hlbiBhdmFpbGFibGVcbiAgICAgIC8vIG90aGVyd2lzZSBmYWxsYmFjayB0byBicm93c2VyJ3MgZGVmYXVsdCBoYW5kbGluZ1xuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKSB7XG4gICAgICAgICAgd2luZG93Lmhpc3Rvcnkuc2Nyb2xsUmVzdG9yYXRpb24gPSAnbWFudWFsJ1xuXG4gICAgICAgICAgbGV0IHNjcm9sbERlYm91bmNlVGltZW91dDogdW5kZWZpbmVkIHwgTm9kZUpTLlRpbWVvdXRcblxuICAgICAgICAgIGNvbnN0IGRlYm91bmNlZFNjcm9sbFNhdmUgPSAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoc2Nyb2xsRGVib3VuY2VUaW1lb3V0KSBjbGVhclRpbWVvdXQoc2Nyb2xsRGVib3VuY2VUaW1lb3V0KVxuXG4gICAgICAgICAgICBzY3JvbGxEZWJvdW5jZVRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgeyB1cmwsIGFzOiBjdXJBcywgb3B0aW9ucyB9ID0gaGlzdG9yeS5zdGF0ZVxuICAgICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAgICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICAgICAgICAgIHVybCxcbiAgICAgICAgICAgICAgICBjdXJBcyxcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHt9LCBvcHRpb25zLCB7XG4gICAgICAgICAgICAgICAgICBfTl9YOiB3aW5kb3cuc2Nyb2xsWCxcbiAgICAgICAgICAgICAgICAgIF9OX1k6IHdpbmRvdy5zY3JvbGxZLFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0sIDEwKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBkZWJvdW5jZWRTY3JvbGxTYXZlKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgb25Qb3BTdGF0ZSA9IChlOiBQb3BTdGF0ZUV2ZW50KTogdm9pZCA9PiB7XG4gICAgY29uc3Qgc3RhdGUgPSBlLnN0YXRlIGFzIEhpc3RvcnlTdGF0ZVxuXG4gICAgaWYgKCFzdGF0ZSkge1xuICAgICAgLy8gV2UgZ2V0IHN0YXRlIGFzIHVuZGVmaW5lZCBmb3IgdHdvIHJlYXNvbnMuXG4gICAgICAvLyAgMS4gV2l0aCBvbGRlciBzYWZhcmkgKDwgOCkgYW5kIG9sZGVyIGNocm9tZSAoPCAzNClcbiAgICAgIC8vICAyLiBXaGVuIHRoZSBVUkwgY2hhbmdlZCB3aXRoICNcbiAgICAgIC8vXG4gICAgICAvLyBJbiB0aGUgYm90aCBjYXNlcywgd2UgZG9uJ3QgbmVlZCB0byBwcm9jZWVkIGFuZCBjaGFuZ2UgdGhlIHJvdXRlLlxuICAgICAgLy8gKGFzIGl0J3MgYWxyZWFkeSBjaGFuZ2VkKVxuICAgICAgLy8gQnV0IHdlIGNhbiBzaW1wbHkgcmVwbGFjZSB0aGUgc3RhdGUgd2l0aCB0aGUgbmV3IGNoYW5nZXMuXG4gICAgICAvLyBBY3R1YWxseSwgZm9yICgxKSB3ZSBkb24ndCBuZWVkIHRvIG5vdGhpbmcuIEJ1dCBpdCdzIGhhcmQgdG8gZGV0ZWN0IHRoYXQgZXZlbnQuXG4gICAgICAvLyBTbywgZG9pbmcgdGhlIGZvbGxvd2luZyBmb3IgKDEpIGRvZXMgbm8gaGFybS5cbiAgICAgIGNvbnN0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSB0aGlzXG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZTogYWRkQmFzZVBhdGgocGF0aG5hbWUpLCBxdWVyeSB9KSxcbiAgICAgICAgZ2V0VVJMKClcbiAgICAgIClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmICghc3RhdGUuX19OKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCB7IHVybCwgYXMsIG9wdGlvbnMgfSA9IHN0YXRlXG5cbiAgICBjb25zdCB7IHBhdGhuYW1lIH0gPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcblxuICAgIC8vIE1ha2Ugc3VyZSB3ZSBkb24ndCByZS1yZW5kZXIgb24gaW5pdGlhbCBsb2FkLFxuICAgIC8vIGNhbiBiZSBjYXVzZWQgYnkgbmF2aWdhdGluZyBiYWNrIGZyb20gYW4gZXh0ZXJuYWwgc2l0ZVxuICAgIGlmICh0aGlzLmlzU3NyICYmIGFzID09PSB0aGlzLmFzUGF0aCAmJiBwYXRobmFtZSA9PT0gdGhpcy5wYXRobmFtZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGRvd25zdHJlYW0gYXBwbGljYXRpb24gcmV0dXJucyBmYWxzeSwgcmV0dXJuLlxuICAgIC8vIFRoZXkgd2lsbCB0aGVuIGJlIHJlc3BvbnNpYmxlIGZvciBoYW5kbGluZyB0aGUgZXZlbnQuXG4gICAgaWYgKHRoaXMuX2JwcyAmJiAhdGhpcy5fYnBzKHN0YXRlKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5jaGFuZ2UoXG4gICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgIHVybCxcbiAgICAgIGFzLFxuICAgICAgT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9ucywge1xuICAgICAgICBzaGFsbG93OiBvcHRpb25zLnNoYWxsb3cgJiYgdGhpcy5fc2hhbGxvdyxcbiAgICAgICAgbG9jYWxlOiBvcHRpb25zLmxvY2FsZSB8fCB0aGlzLmRlZmF1bHRMb2NhbGUsXG4gICAgICB9KVxuICAgIClcbiAgfVxuXG4gIHJlbG9hZCgpOiB2b2lkIHtcbiAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKClcbiAgfVxuXG4gIC8qKlxuICAgKiBHbyBiYWNrIGluIGhpc3RvcnlcbiAgICovXG4gIGJhY2soKSB7XG4gICAgd2luZG93Lmhpc3RvcnkuYmFjaygpXG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybXMgYSBgcHVzaFN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovXG4gIHB1c2godXJsOiBVcmwsIGFzOiBVcmwgPSB1cmwsIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zID0ge30pIHtcbiAgICA7KHsgdXJsLCBhcyB9ID0gcHJlcGFyZVVybEFzKHRoaXMsIHVybCwgYXMpKVxuICAgIHJldHVybiB0aGlzLmNoYW5nZSgncHVzaFN0YXRlJywgdXJsLCBhcywgb3B0aW9ucylcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyBhIGByZXBsYWNlU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9cbiAgcmVwbGFjZSh1cmw6IFVybCwgYXM6IFVybCA9IHVybCwgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMgPSB7fSkge1xuICAgIDsoeyB1cmwsIGFzIH0gPSBwcmVwYXJlVXJsQXModGhpcywgdXJsLCBhcykpXG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdyZXBsYWNlU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgYXN5bmMgY2hhbmdlKFxuICAgIG1ldGhvZDogSGlzdG9yeU1ldGhvZCxcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhczogc3RyaW5nLFxuICAgIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zXG4gICk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIGlmICghaXNMb2NhbFVSTCh1cmwpKSB7XG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHVybFxuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuICAgIGxldCBsb2NhbGVDaGFuZ2UgPSBvcHRpb25zLmxvY2FsZSAhPT0gdGhpcy5sb2NhbGVcblxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICB0aGlzLmxvY2FsZSA9XG4gICAgICAgIG9wdGlvbnMubG9jYWxlID09PSBmYWxzZVxuICAgICAgICAgID8gdGhpcy5kZWZhdWx0TG9jYWxlXG4gICAgICAgICAgOiBvcHRpb25zLmxvY2FsZSB8fCB0aGlzLmxvY2FsZVxuXG4gICAgICBpZiAodHlwZW9mIG9wdGlvbnMubG9jYWxlID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBvcHRpb25zLmxvY2FsZSA9IHRoaXMubG9jYWxlXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHtcbiAgICAgICAgbm9ybWFsaXplTG9jYWxlUGF0aCxcbiAgICAgIH0gPSByZXF1aXJlKCcuLi9pMThuL25vcm1hbGl6ZS1sb2NhbGUtcGF0aCcpIGFzIHR5cGVvZiBpbXBvcnQoJy4uL2kxOG4vbm9ybWFsaXplLWxvY2FsZS1wYXRoJylcblxuICAgICAgY29uc3QgcGFyc2VkQXMgPSBwYXJzZVJlbGF0aXZlVXJsKGhhc0Jhc2VQYXRoKGFzKSA/IGRlbEJhc2VQYXRoKGFzKSA6IGFzKVxuICAgICAgY29uc3QgbG9jYWxlUGF0aFJlc3VsdCA9IG5vcm1hbGl6ZUxvY2FsZVBhdGgoXG4gICAgICAgIHBhcnNlZEFzLnBhdGhuYW1lLFxuICAgICAgICB0aGlzLmxvY2FsZXNcbiAgICAgIClcbiAgICAgIGlmIChsb2NhbGVQYXRoUmVzdWx0LmRldGVjdGVkTG9jYWxlKSB7XG4gICAgICAgIHRoaXMubG9jYWxlID0gbG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZVxuICAgICAgICB1cmwgPSBhZGRCYXNlUGF0aChsb2NhbGVQYXRoUmVzdWx0LnBhdGhuYW1lKVxuICAgICAgfVxuXG4gICAgICAvLyBpZiB0aGUgbG9jYWxlIGlzbid0IGNvbmZpZ3VyZWQgaGFyZCBuYXZpZ2F0ZSB0byBzaG93IDQwNCBwYWdlXG4gICAgICBpZiAoIXRoaXMubG9jYWxlcz8uaW5jbHVkZXModGhpcy5sb2NhbGUhKSkge1xuICAgICAgICBwYXJzZWRBcy5wYXRobmFtZSA9IGFkZExvY2FsZShwYXJzZWRBcy5wYXRobmFtZSwgdGhpcy5sb2NhbGUpXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkQXMpXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgoKSA9PiB7fSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIShvcHRpb25zIGFzIGFueSkuX2gpIHtcbiAgICAgIHRoaXMuaXNTc3IgPSBmYWxzZVxuICAgIH1cbiAgICAvLyBtYXJraW5nIHJvdXRlIGNoYW5nZXMgYXMgYSBuYXZpZ2F0aW9uIHN0YXJ0IGVudHJ5XG4gICAgaWYgKFNUKSB7XG4gICAgICBwZXJmb3JtYW5jZS5tYXJrKCdyb3V0ZUNoYW5nZScpXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2luRmxpZ2h0Um91dGUpIHtcbiAgICAgIHRoaXMuYWJvcnRDb21wb25lbnRMb2FkKHRoaXMuX2luRmxpZ2h0Um91dGUpXG4gICAgfVxuXG4gICAgYXMgPSBhZGRCYXNlUGF0aChcbiAgICAgIGFkZExvY2FsZShcbiAgICAgICAgaGFzQmFzZVBhdGgoYXMpID8gZGVsQmFzZVBhdGgoYXMpIDogYXMsXG4gICAgICAgIG9wdGlvbnMubG9jYWxlLFxuICAgICAgICB0aGlzLmRlZmF1bHRMb2NhbGVcbiAgICAgIClcbiAgICApXG4gICAgY29uc3QgY2xlYW5lZEFzID0gZGVsTG9jYWxlKFxuICAgICAgaGFzQmFzZVBhdGgoYXMpID8gZGVsQmFzZVBhdGgoYXMpIDogYXMsXG4gICAgICB0aGlzLmxvY2FsZVxuICAgIClcbiAgICB0aGlzLl9pbkZsaWdodFJvdXRlID0gYXNcblxuICAgIC8vIElmIHRoZSB1cmwgY2hhbmdlIGlzIG9ubHkgcmVsYXRlZCB0byBhIGhhc2ggY2hhbmdlXG4gICAgLy8gV2Ugc2hvdWxkIG5vdCBwcm9jZWVkLiBXZSBzaG91bGQgb25seSBjaGFuZ2UgdGhlIHN0YXRlLlxuXG4gICAgLy8gV0FSTklORzogYF9oYCBpcyBhbiBpbnRlcm5hbCBvcHRpb24gZm9yIGhhbmRpbmcgTmV4dC5qcyBjbGllbnQtc2lkZVxuICAgIC8vIGh5ZHJhdGlvbi4gWW91ciBhcHAgc2hvdWxkIF9uZXZlcl8gdXNlIHRoaXMgcHJvcGVydHkuIEl0IG1heSBjaGFuZ2UgYXRcbiAgICAvLyBhbnkgdGltZSB3aXRob3V0IG5vdGljZS5cbiAgICBpZiAoIShvcHRpb25zIGFzIGFueSkuX2ggJiYgdGhpcy5vbmx5QUhhc2hDaGFuZ2UoY2xlYW5lZEFzKSkge1xuICAgICAgdGhpcy5hc1BhdGggPSBjbGVhbmVkQXNcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZVN0YXJ0JywgYXMpXG4gICAgICAvLyBUT0RPOiBkbyB3ZSBuZWVkIHRoZSByZXNvbHZlZCBocmVmIHdoZW4gb25seSBhIGhhc2ggY2hhbmdlP1xuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpXG4gICAgICB0aGlzLnNjcm9sbFRvSGFzaChjbGVhbmVkQXMpXG4gICAgICB0aGlzLm5vdGlmeSh0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0pXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VDb21wbGV0ZScsIGFzKVxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICBsZXQgcGFyc2VkID0gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG4gICAgbGV0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSBwYXJzZWRcblxuICAgIC8vIFRoZSBidWlsZCBtYW5pZmVzdCBuZWVkcyB0byBiZSBsb2FkZWQgYmVmb3JlIGF1dG8tc3RhdGljIGR5bmFtaWMgcGFnZXNcbiAgICAvLyBnZXQgdGhlaXIgcXVlcnkgcGFyYW1ldGVycyB0byBhbGxvdyBlbnN1cmluZyB0aGV5IGNhbiBiZSBwYXJzZWQgcHJvcGVybHlcbiAgICAvLyB3aGVuIHJld3JpdHRlbiB0b1xuICAgIGxldCBwYWdlczogYW55LCByZXdyaXRlczogYW55XG4gICAgdHJ5IHtcbiAgICAgIHBhZ2VzID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmdldFBhZ2VMaXN0KClcbiAgICAgIDsoeyBfX3Jld3JpdGVzOiByZXdyaXRlcyB9ID0gYXdhaXQgZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpKVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgLy8gSWYgd2UgZmFpbCB0byByZXNvbHZlIHRoZSBwYWdlIGxpc3Qgb3IgY2xpZW50LWJ1aWxkIG1hbmlmZXN0LCB3ZSBtdXN0XG4gICAgICAvLyBkbyBhIHNlcnZlci1zaWRlIHRyYW5zaXRpb246XG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBwYXJzZWQgPSB0aGlzLl9yZXNvbHZlSHJlZihwYXJzZWQsIHBhZ2VzKSBhcyB0eXBlb2YgcGFyc2VkXG5cbiAgICBpZiAocGFyc2VkLnBhdGhuYW1lICE9PSBwYXRobmFtZSkge1xuICAgICAgcGF0aG5hbWUgPSBwYXJzZWQucGF0aG5hbWVcbiAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcbiAgICB9XG5cbiAgICAvLyB1cmwgYW5kIGFzIHNob3VsZCBhbHdheXMgYmUgcHJlZml4ZWQgd2l0aCBiYXNlUGF0aCBieSB0aGlzXG4gICAgLy8gcG9pbnQgYnkgZWl0aGVyIG5leHQvbGluayBvciByb3V0ZXIucHVzaC9yZXBsYWNlIHNvIHN0cmlwIHRoZVxuICAgIC8vIGJhc2VQYXRoIGZyb20gdGhlIHBhdGhuYW1lIHRvIG1hdGNoIHRoZSBwYWdlcyBkaXIgMS10by0xXG4gICAgcGF0aG5hbWUgPSBwYXRobmFtZVxuICAgICAgPyByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChkZWxCYXNlUGF0aChwYXRobmFtZSkpXG4gICAgICA6IHBhdGhuYW1lXG5cbiAgICAvLyBJZiBhc2tlZCB0byBjaGFuZ2UgdGhlIGN1cnJlbnQgVVJMIHdlIHNob3VsZCByZWxvYWQgdGhlIGN1cnJlbnQgcGFnZVxuICAgIC8vIChub3QgbG9jYXRpb24ucmVsb2FkKCkgYnV0IHJlbG9hZCBnZXRJbml0aWFsUHJvcHMgYW5kIG90aGVyIE5leHQuanMgc3R1ZmZzKVxuICAgIC8vIFdlIGFsc28gbmVlZCB0byBzZXQgdGhlIG1ldGhvZCA9IHJlcGxhY2VTdGF0ZSBhbHdheXNcbiAgICAvLyBhcyB0aGlzIHNob3VsZCBub3QgZ28gaW50byB0aGUgaGlzdG9yeSAoVGhhdCdzIGhvdyBicm93c2VycyB3b3JrKVxuICAgIC8vIFdlIHNob3VsZCBjb21wYXJlIHRoZSBuZXcgYXNQYXRoIHRvIHRoZSBjdXJyZW50IGFzUGF0aCwgbm90IHRoZSB1cmxcbiAgICBpZiAoIXRoaXMudXJsSXNOZXcoY2xlYW5lZEFzKSAmJiAhbG9jYWxlQ2hhbmdlKSB7XG4gICAgICBtZXRob2QgPSAncmVwbGFjZVN0YXRlJ1xuICAgIH1cblxuICAgIGxldCByb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuICAgIGNvbnN0IHsgc2hhbGxvdyA9IGZhbHNlIH0gPSBvcHRpb25zXG5cbiAgICAvLyB3ZSBuZWVkIHRvIHJlc29sdmUgdGhlIGFzIHZhbHVlIHVzaW5nIHJld3JpdGVzIGZvciBkeW5hbWljIFNTR1xuICAgIC8vIHBhZ2VzIHRvIGFsbG93IGJ1aWxkaW5nIHRoZSBkYXRhIFVSTCBjb3JyZWN0bHlcbiAgICBsZXQgcmVzb2x2ZWRBcyA9IGFzXG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0hBU19SRVdSSVRFUykge1xuICAgICAgcmVzb2x2ZWRBcyA9IHJlc29sdmVSZXdyaXRlcyhcbiAgICAgICAgcGFyc2VSZWxhdGl2ZVVybChhcykucGF0aG5hbWUsXG4gICAgICAgIHBhZ2VzLFxuICAgICAgICBiYXNlUGF0aCxcbiAgICAgICAgcmV3cml0ZXMsXG4gICAgICAgIHF1ZXJ5LFxuICAgICAgICAocDogc3RyaW5nKSA9PiB0aGlzLl9yZXNvbHZlSHJlZih7IHBhdGhuYW1lOiBwIH0sIHBhZ2VzKS5wYXRobmFtZSFcbiAgICAgIClcblxuICAgICAgaWYgKHJlc29sdmVkQXMgIT09IGFzKSB7XG4gICAgICAgIGNvbnN0IHBvdGVudGlhbEhyZWYgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChcbiAgICAgICAgICB0aGlzLl9yZXNvbHZlSHJlZihcbiAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oe30sIHBhcnNlZCwgeyBwYXRobmFtZTogcmVzb2x2ZWRBcyB9KSxcbiAgICAgICAgICAgIHBhZ2VzLFxuICAgICAgICAgICAgZmFsc2VcbiAgICAgICAgICApLnBhdGhuYW1lIVxuICAgICAgICApXG5cbiAgICAgICAgLy8gaWYgdGhpcyBkaXJlY3RseSBtYXRjaGVzIGEgcGFnZSB3ZSBuZWVkIHRvIHVwZGF0ZSB0aGUgaHJlZiB0b1xuICAgICAgICAvLyBhbGxvdyB0aGUgY29ycmVjdCBwYWdlIGNodW5rIHRvIGJlIGxvYWRlZFxuICAgICAgICBpZiAocGFnZXMuaW5jbHVkZXMocG90ZW50aWFsSHJlZikpIHtcbiAgICAgICAgICByb3V0ZSA9IHBvdGVudGlhbEhyZWZcbiAgICAgICAgICBwYXRobmFtZSA9IHBvdGVudGlhbEhyZWZcbiAgICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgICAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXNvbHZlZEFzID0gZGVsTG9jYWxlKGRlbEJhc2VQYXRoKHJlc29sdmVkQXMpLCB0aGlzLmxvY2FsZSlcblxuICAgIGlmIChpc0R5bmFtaWNSb3V0ZShyb3V0ZSkpIHtcbiAgICAgIGNvbnN0IHBhcnNlZEFzID0gcGFyc2VSZWxhdGl2ZVVybChyZXNvbHZlZEFzKVxuICAgICAgY29uc3QgYXNQYXRobmFtZSA9IHBhcnNlZEFzLnBhdGhuYW1lXG5cbiAgICAgIGNvbnN0IHJvdXRlUmVnZXggPSBnZXRSb3V0ZVJlZ2V4KHJvdXRlKVxuICAgICAgY29uc3Qgcm91dGVNYXRjaCA9IGdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4KShhc1BhdGhuYW1lKVxuICAgICAgY29uc3Qgc2hvdWxkSW50ZXJwb2xhdGUgPSByb3V0ZSA9PT0gYXNQYXRobmFtZVxuICAgICAgY29uc3QgaW50ZXJwb2xhdGVkQXMgPSBzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICA/IGludGVycG9sYXRlQXMocm91dGUsIGFzUGF0aG5hbWUsIHF1ZXJ5KVxuICAgICAgICA6ICh7fSBhcyB7IHJlc3VsdDogdW5kZWZpbmVkOyBwYXJhbXM6IHVuZGVmaW5lZCB9KVxuXG4gICAgICBpZiAoIXJvdXRlTWF0Y2ggfHwgKHNob3VsZEludGVycG9sYXRlICYmICFpbnRlcnBvbGF0ZWRBcy5yZXN1bHQpKSB7XG4gICAgICAgIGNvbnN0IG1pc3NpbmdQYXJhbXMgPSBPYmplY3Qua2V5cyhyb3V0ZVJlZ2V4Lmdyb3VwcykuZmlsdGVyKFxuICAgICAgICAgIChwYXJhbSkgPT4gIXF1ZXJ5W3BhcmFtXVxuICAgICAgICApXG5cbiAgICAgICAgaWYgKG1pc3NpbmdQYXJhbXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICAgIGAke1xuICAgICAgICAgICAgICAgIHNob3VsZEludGVycG9sYXRlXG4gICAgICAgICAgICAgICAgICA/IGBJbnRlcnBvbGF0aW5nIGhyZWZgXG4gICAgICAgICAgICAgICAgICA6IGBNaXNtYXRjaGluZyBcXGBhc1xcYCBhbmQgXFxgaHJlZlxcYGBcbiAgICAgICAgICAgICAgfSBmYWlsZWQgdG8gbWFudWFsbHkgcHJvdmlkZSBgICtcbiAgICAgICAgICAgICAgICBgdGhlIHBhcmFtczogJHttaXNzaW5nUGFyYW1zLmpvaW4oXG4gICAgICAgICAgICAgICAgICAnLCAnXG4gICAgICAgICAgICAgICAgKX0gaW4gdGhlIFxcYGhyZWZcXGAncyBcXGBxdWVyeVxcYGBcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICAoc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgICAgICAgPyBgVGhlIHByb3ZpZGVkIFxcYGhyZWZcXGAgKCR7dXJsfSkgdmFsdWUgaXMgbWlzc2luZyBxdWVyeSB2YWx1ZXMgKCR7bWlzc2luZ1BhcmFtcy5qb2luKFxuICAgICAgICAgICAgICAgICAgJywgJ1xuICAgICAgICAgICAgICAgICl9KSB0byBiZSBpbnRlcnBvbGF0ZWQgcHJvcGVybHkuIGBcbiAgICAgICAgICAgICAgOiBgVGhlIHByb3ZpZGVkIFxcYGFzXFxgIHZhbHVlICgke2FzUGF0aG5hbWV9KSBpcyBpbmNvbXBhdGlibGUgd2l0aCB0aGUgXFxgaHJlZlxcYCB2YWx1ZSAoJHtyb3V0ZX0pLiBgKSArXG4gICAgICAgICAgICAgIGBSZWFkIG1vcmU6IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzLyR7XG4gICAgICAgICAgICAgICAgc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgICAgICAgICAgID8gJ2hyZWYtaW50ZXJwb2xhdGlvbi1mYWlsZWQnXG4gICAgICAgICAgICAgICAgICA6ICdpbmNvbXBhdGlibGUtaHJlZi1hcydcbiAgICAgICAgICAgICAgfWBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoc2hvdWxkSW50ZXJwb2xhdGUpIHtcbiAgICAgICAgYXMgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihcbiAgICAgICAgICBPYmplY3QuYXNzaWduKHt9LCBwYXJzZWRBcywge1xuICAgICAgICAgICAgcGF0aG5hbWU6IGludGVycG9sYXRlZEFzLnJlc3VsdCxcbiAgICAgICAgICAgIHF1ZXJ5OiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnksIGludGVycG9sYXRlZEFzLnBhcmFtcyEpLFxuICAgICAgICAgIH0pXG4gICAgICAgIClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIE1lcmdlIHBhcmFtcyBpbnRvIGBxdWVyeWAsIG92ZXJ3cml0aW5nIGFueSBzcGVjaWZpZWQgaW4gc2VhcmNoXG4gICAgICAgIE9iamVjdC5hc3NpZ24ocXVlcnksIHJvdXRlTWF0Y2gpXG4gICAgICB9XG4gICAgfVxuXG4gICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZVN0YXJ0JywgYXMpXG5cbiAgICB0cnkge1xuICAgICAgY29uc3Qgcm91dGVJbmZvID0gYXdhaXQgdGhpcy5nZXRSb3V0ZUluZm8oXG4gICAgICAgIHJvdXRlLFxuICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgcXVlcnksXG4gICAgICAgIGFzLFxuICAgICAgICBzaGFsbG93XG4gICAgICApXG4gICAgICBsZXQgeyBlcnJvciwgcHJvcHMsIF9fTl9TU0csIF9fTl9TU1AgfSA9IHJvdXRlSW5mb1xuXG4gICAgICAvLyBoYW5kbGUgcmVkaXJlY3Qgb24gY2xpZW50LXRyYW5zaXRpb25cbiAgICAgIGlmIChcbiAgICAgICAgKF9fTl9TU0cgfHwgX19OX1NTUCkgJiZcbiAgICAgICAgcHJvcHMgJiZcbiAgICAgICAgKHByb3BzIGFzIGFueSkucGFnZVByb3BzICYmXG4gICAgICAgIChwcm9wcyBhcyBhbnkpLnBhZ2VQcm9wcy5fX05fUkVESVJFQ1RcbiAgICAgICkge1xuICAgICAgICBjb25zdCBkZXN0aW5hdGlvbiA9IChwcm9wcyBhcyBhbnkpLnBhZ2VQcm9wcy5fX05fUkVESVJFQ1RcblxuICAgICAgICAvLyBjaGVjayBpZiBkZXN0aW5hdGlvbiBpcyBpbnRlcm5hbCAocmVzb2x2ZXMgdG8gYSBwYWdlKSBhbmQgYXR0ZW1wdFxuICAgICAgICAvLyBjbGllbnQtbmF2aWdhdGlvbiBpZiBpdCBpcyBmYWxsaW5nIGJhY2sgdG8gaGFyZCBuYXZpZ2F0aW9uIGlmXG4gICAgICAgIC8vIGl0J3Mgbm90XG4gICAgICAgIGlmIChkZXN0aW5hdGlvbi5zdGFydHNXaXRoKCcvJykpIHtcbiAgICAgICAgICBjb25zdCBwYXJzZWRIcmVmID0gcGFyc2VSZWxhdGl2ZVVybChkZXN0aW5hdGlvbilcbiAgICAgICAgICB0aGlzLl9yZXNvbHZlSHJlZihwYXJzZWRIcmVmLCBwYWdlcywgZmFsc2UpXG5cbiAgICAgICAgICBpZiAocGFnZXMuaW5jbHVkZXMocGFyc2VkSHJlZi5wYXRobmFtZSkpIHtcbiAgICAgICAgICAgIGNvbnN0IHsgdXJsOiBuZXdVcmwsIGFzOiBuZXdBcyB9ID0gcHJlcGFyZVVybEFzKFxuICAgICAgICAgICAgICB0aGlzLFxuICAgICAgICAgICAgICBkZXN0aW5hdGlvbixcbiAgICAgICAgICAgICAgZGVzdGluYXRpb25cbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNoYW5nZShtZXRob2QsIG5ld1VybCwgbmV3QXMsIG9wdGlvbnMpXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBkZXN0aW5hdGlvblxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKCkgPT4ge30pXG4gICAgICB9XG5cbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnYmVmb3JlSGlzdG9yeUNoYW5nZScsIGFzKVxuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpXG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGNvbnN0IGFwcENvbXA6IGFueSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnRcbiAgICAgICAgOyh3aW5kb3cgYXMgYW55KS5uZXh0LmlzUHJlcmVuZGVyZWQgPVxuICAgICAgICAgIGFwcENvbXAuZ2V0SW5pdGlhbFByb3BzID09PSBhcHBDb21wLm9yaWdHZXRJbml0aWFsUHJvcHMgJiZcbiAgICAgICAgICAhKHJvdXRlSW5mby5Db21wb25lbnQgYXMgYW55KS5nZXRJbml0aWFsUHJvcHNcbiAgICAgIH1cblxuICAgICAgYXdhaXQgdGhpcy5zZXQocm91dGUsIHBhdGhuYW1lISwgcXVlcnksIGNsZWFuZWRBcywgcm91dGVJbmZvKS5jYXRjaChcbiAgICAgICAgKGUpID0+IHtcbiAgICAgICAgICBpZiAoZS5jYW5jZWxsZWQpIGVycm9yID0gZXJyb3IgfHwgZVxuICAgICAgICAgIGVsc2UgdGhyb3cgZVxuICAgICAgICB9XG4gICAgICApXG5cbiAgICAgIGlmIChlcnJvcikge1xuICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnJvciwgY2xlYW5lZEFzKVxuICAgICAgICB0aHJvdyBlcnJvclxuICAgICAgfVxuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24gJiYgJ19OX1gnIGluIG9wdGlvbnMpIHtcbiAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oKG9wdGlvbnMgYXMgYW55KS5fTl9YLCAob3B0aW9ucyBhcyBhbnkpLl9OX1kpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgaWYgKHRoaXMubG9jYWxlKSB7XG4gICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmxhbmcgPSB0aGlzLmxvY2FsZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCBhcylcblxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGlmIChlcnIuY2FuY2VsbGVkKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuICB9XG5cbiAgY2hhbmdlU3RhdGUoXG4gICAgbWV0aG9kOiBIaXN0b3J5TWV0aG9kLFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzOiBzdHJpbmcsXG4gICAgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMgPSB7fVxuICApOiB2b2lkIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkgaXMgbm90IGF2YWlsYWJsZS5gKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeVttZXRob2RdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeS4ke21ldGhvZH0gaXMgbm90IGF2YWlsYWJsZWApXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChtZXRob2QgIT09ICdwdXNoU3RhdGUnIHx8IGdldFVSTCgpICE9PSBhcykge1xuICAgICAgdGhpcy5fc2hhbGxvdyA9IG9wdGlvbnMuc2hhbGxvd1xuICAgICAgd2luZG93Lmhpc3RvcnlbbWV0aG9kXShcbiAgICAgICAge1xuICAgICAgICAgIHVybCxcbiAgICAgICAgICBhcyxcbiAgICAgICAgICBvcHRpb25zLFxuICAgICAgICAgIF9fTjogdHJ1ZSxcbiAgICAgICAgfSBhcyBIaXN0b3J5U3RhdGUsXG4gICAgICAgIC8vIE1vc3QgYnJvd3NlcnMgY3VycmVudGx5IGlnbm9yZXMgdGhpcyBwYXJhbWV0ZXIsIGFsdGhvdWdoIHRoZXkgbWF5IHVzZSBpdCBpbiB0aGUgZnV0dXJlLlxuICAgICAgICAvLyBQYXNzaW5nIHRoZSBlbXB0eSBzdHJpbmcgaGVyZSBzaG91bGQgYmUgc2FmZSBhZ2FpbnN0IGZ1dHVyZSBjaGFuZ2VzIHRvIHRoZSBtZXRob2QuXG4gICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9IaXN0b3J5L3JlcGxhY2VTdGF0ZVxuICAgICAgICAnJyxcbiAgICAgICAgYXNcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICBhc3luYyBoYW5kbGVSb3V0ZUluZm9FcnJvcihcbiAgICBlcnI6IEVycm9yICYgeyBjb2RlOiBhbnk7IGNhbmNlbGxlZDogYm9vbGVhbiB9LFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgbG9hZEVycm9yRmFpbD86IGJvb2xlYW5cbiAgKTogUHJvbWlzZTxDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8+IHtcbiAgICBpZiAoZXJyLmNhbmNlbGxlZCkge1xuICAgICAgLy8gYnViYmxlIHVwIGNhbmNlbGxhdGlvbiBlcnJvcnNcbiAgICAgIHRocm93IGVyclxuICAgIH1cblxuICAgIGlmIChpc0Fzc2V0RXJyb3IoZXJyKSB8fCBsb2FkRXJyb3JGYWlsKSB7XG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnIsIGFzKVxuXG4gICAgICAvLyBJZiB3ZSBjYW4ndCBsb2FkIHRoZSBwYWdlIGl0IGNvdWxkIGJlIG9uZSBvZiBmb2xsb3dpbmcgcmVhc29uc1xuICAgICAgLy8gIDEuIFBhZ2UgZG9lc24ndCBleGlzdHNcbiAgICAgIC8vICAyLiBQYWdlIGRvZXMgZXhpc3QgaW4gYSBkaWZmZXJlbnQgem9uZVxuICAgICAgLy8gIDMuIEludGVybmFsIGVycm9yIHdoaWxlIGxvYWRpbmcgdGhlIHBhZ2VcblxuICAgICAgLy8gU28sIGRvaW5nIGEgaGFyZCByZWxvYWQgaXMgdGhlIHByb3BlciB3YXkgdG8gZGVhbCB3aXRoIHRoaXMuXG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzXG5cbiAgICAgIC8vIENoYW5naW5nIHRoZSBVUkwgZG9lc24ndCBibG9jayBleGVjdXRpbmcgdGhlIGN1cnJlbnQgY29kZSBwYXRoLlxuICAgICAgLy8gU28gbGV0J3MgdGhyb3cgYSBjYW5jZWxsYXRpb24gZXJyb3Igc3RvcCB0aGUgcm91dGluZyBsb2dpYy5cbiAgICAgIHRocm93IGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKVxuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICBsZXQgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gICAgICBsZXQgc3R5bGVTaGVldHM6IFN0eWxlU2hlZXRUdXBsZVtdXG4gICAgICBsZXQgcHJvcHM6IFJlY29yZDxzdHJpbmcsIGFueT4gfCB1bmRlZmluZWRcbiAgICAgIGNvbnN0IHNzZzQwNCA9IGVyci5tZXNzYWdlID09PSBTU0dfREFUQV9OT1RfRk9VTkRfRVJST1JcblxuICAgICAgaWYgKHNzZzQwNCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGxldCBtb2Q6IGFueVxuICAgICAgICAgIDsoeyBwYWdlOiBDb21wb25lbnQsIHN0eWxlU2hlZXRzLCBtb2QgfSA9IGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQoXG4gICAgICAgICAgICAnLzQwNCdcbiAgICAgICAgICApKVxuXG4gICAgICAgICAgLy8gVE9ETzogc2hvdWxkIHdlIHRvbGVyYXRlIHRoZXNlIHByb3BzIG1pc3NpbmcgYW5kIHN0aWxsIHJlbmRlciB0aGVcbiAgICAgICAgICAvLyBwYWdlIGluc3RlYWQgb2YgZmFsbGluZyBiYWNrIHRvIF9lcnJvcj9cbiAgICAgICAgICBpZiAobW9kICYmIG1vZC5fX05fU1NHKSB7XG4gICAgICAgICAgICBwcm9wcyA9IGF3YWl0IHRoaXMuX2dldFN0YXRpY0RhdGEoXG4gICAgICAgICAgICAgIHRoaXMucGFnZUxvYWRlci5nZXREYXRhSHJlZignLzQwNCcsICcvNDA0JywgdHJ1ZSwgdGhpcy5sb2NhbGUpXG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChfZXJyKSB7XG4gICAgICAgICAgLy8gbm9uLWZhdGFsIGZhbGxiYWNrIHRvIF9lcnJvclxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChcbiAgICAgICAgdHlwZW9mIENvbXBvbmVudCEgPT09ICd1bmRlZmluZWQnIHx8XG4gICAgICAgIHR5cGVvZiBzdHlsZVNoZWV0cyEgPT09ICd1bmRlZmluZWQnXG4gICAgICApIHtcbiAgICAgICAgOyh7IHBhZ2U6IENvbXBvbmVudCwgc3R5bGVTaGVldHMgfSA9IGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQoXG4gICAgICAgICAgJy9fZXJyb3InXG4gICAgICAgICkpXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHJvdXRlSW5mbzogQ29tcGxldGVQcml2YXRlUm91dGVJbmZvID0ge1xuICAgICAgICBwcm9wcyxcbiAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICBzdHlsZVNoZWV0cyxcbiAgICAgICAgZXJyOiBzc2c0MDQgPyB1bmRlZmluZWQgOiBlcnIsXG4gICAgICAgIGVycm9yOiBzc2c0MDQgPyB1bmRlZmluZWQgOiBlcnIsXG4gICAgICB9XG5cbiAgICAgIGlmICghcm91dGVJbmZvLnByb3BzKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgcm91dGVJbmZvLnByb3BzID0gYXdhaXQgdGhpcy5nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCB7XG4gICAgICAgICAgICBlcnIsXG4gICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgIH0gYXMgYW55KVxuICAgICAgICB9IGNhdGNoIChnaXBFcnIpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBlcnJvciBwYWdlIGBnZXRJbml0aWFsUHJvcHNgOiAnLCBnaXBFcnIpXG4gICAgICAgICAgcm91dGVJbmZvLnByb3BzID0ge31cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gcm91dGVJbmZvXG4gICAgfSBjYXRjaCAocm91dGVJbmZvRXJyKSB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihyb3V0ZUluZm9FcnIsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHRydWUpXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgZ2V0Um91dGVJbmZvKFxuICAgIHJvdXRlOiBzdHJpbmcsXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogYW55LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgc2hhbGxvdzogYm9vbGVhbiA9IGZhbHNlXG4gICk6IFByb21pc2U8UHJpdmF0ZVJvdXRlSW5mbz4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBleGlzdGluZ1JvdXRlSW5mbzogUHJpdmF0ZVJvdXRlSW5mbyB8IHVuZGVmaW5lZCA9IHRoaXMuY29tcG9uZW50c1tcbiAgICAgICAgcm91dGVcbiAgICAgIF1cbiAgICAgIGlmIChzaGFsbG93ICYmIGV4aXN0aW5nUm91dGVJbmZvICYmIHRoaXMucm91dGUgPT09IHJvdXRlKSB7XG4gICAgICAgIHJldHVybiBleGlzdGluZ1JvdXRlSW5mb1xuICAgICAgfVxuXG4gICAgICBjb25zdCBjYWNoZWRSb3V0ZUluZm86IENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbyB8IHVuZGVmaW5lZCA9XG4gICAgICAgIGV4aXN0aW5nUm91dGVJbmZvICYmICdpbml0aWFsJyBpbiBleGlzdGluZ1JvdXRlSW5mb1xuICAgICAgICAgID8gdW5kZWZpbmVkXG4gICAgICAgICAgOiBleGlzdGluZ1JvdXRlSW5mb1xuICAgICAgY29uc3Qgcm91dGVJbmZvOiBDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8gPSBjYWNoZWRSb3V0ZUluZm9cbiAgICAgICAgPyBjYWNoZWRSb3V0ZUluZm9cbiAgICAgICAgOiBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KHJvdXRlKS50aGVuKChyZXMpID0+ICh7XG4gICAgICAgICAgICBDb21wb25lbnQ6IHJlcy5wYWdlLFxuICAgICAgICAgICAgc3R5bGVTaGVldHM6IHJlcy5zdHlsZVNoZWV0cyxcbiAgICAgICAgICAgIF9fTl9TU0c6IHJlcy5tb2QuX19OX1NTRyxcbiAgICAgICAgICAgIF9fTl9TU1A6IHJlcy5tb2QuX19OX1NTUCxcbiAgICAgICAgICB9KSlcblxuICAgICAgY29uc3QgeyBDb21wb25lbnQsIF9fTl9TU0csIF9fTl9TU1AgfSA9IHJvdXRlSW5mb1xuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBjb25zdCB7IGlzVmFsaWRFbGVtZW50VHlwZSB9ID0gcmVxdWlyZSgncmVhY3QtaXMnKVxuICAgICAgICBpZiAoIWlzVmFsaWRFbGVtZW50VHlwZShDb21wb25lbnQpKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgYFRoZSBkZWZhdWx0IGV4cG9ydCBpcyBub3QgYSBSZWFjdCBDb21wb25lbnQgaW4gcGFnZTogXCIke3BhdGhuYW1lfVwiYFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsZXQgZGF0YUhyZWY6IHN0cmluZyB8IHVuZGVmaW5lZFxuXG4gICAgICBpZiAoX19OX1NTRyB8fCBfX05fU1NQKSB7XG4gICAgICAgIGRhdGFIcmVmID0gdGhpcy5wYWdlTG9hZGVyLmdldERhdGFIcmVmKFxuICAgICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWUsIHF1ZXJ5IH0pLFxuICAgICAgICAgIGRlbEJhc2VQYXRoKGFzKSxcbiAgICAgICAgICBfX05fU1NHLFxuICAgICAgICAgIHRoaXMubG9jYWxlXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgY29uc3QgcHJvcHMgPSBhd2FpdCB0aGlzLl9nZXREYXRhPENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbz4oKCkgPT5cbiAgICAgICAgX19OX1NTR1xuICAgICAgICAgID8gdGhpcy5fZ2V0U3RhdGljRGF0YShkYXRhSHJlZiEpXG4gICAgICAgICAgOiBfX05fU1NQXG4gICAgICAgICAgPyB0aGlzLl9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmISlcbiAgICAgICAgICA6IHRoaXMuZ2V0SW5pdGlhbFByb3BzKFxuICAgICAgICAgICAgICBDb21wb25lbnQsXG4gICAgICAgICAgICAgIC8vIHdlIHByb3ZpZGUgQXBwVHJlZSBsYXRlciBzbyB0aGlzIG5lZWRzIHRvIGJlIGBhbnlgXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgICAgICBhc1BhdGg6IGFzLFxuICAgICAgICAgICAgICB9IGFzIGFueVxuICAgICAgICAgICAgKVxuICAgICAgKVxuXG4gICAgICByb3V0ZUluZm8ucHJvcHMgPSBwcm9wc1xuICAgICAgdGhpcy5jb21wb25lbnRzW3JvdXRlXSA9IHJvdXRlSW5mb1xuICAgICAgcmV0dXJuIHJvdXRlSW5mb1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlUm91dGVJbmZvRXJyb3IoZXJyLCBwYXRobmFtZSwgcXVlcnksIGFzKVxuICAgIH1cbiAgfVxuXG4gIHNldChcbiAgICByb3V0ZTogc3RyaW5nLFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgZGF0YTogUHJpdmF0ZVJvdXRlSW5mb1xuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICB0aGlzLmlzRmFsbGJhY2sgPSBmYWxzZVxuXG4gICAgdGhpcy5yb3V0ZSA9IHJvdXRlXG4gICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5XG4gICAgdGhpcy5hc1BhdGggPSBhc1xuICAgIHJldHVybiB0aGlzLm5vdGlmeShkYXRhKVxuICB9XG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIHRvIGV4ZWN1dGUgYmVmb3JlIHJlcGxhY2luZyByb3V0ZXIgc3RhdGVcbiAgICogQHBhcmFtIGNiIGNhbGxiYWNrIHRvIGJlIGV4ZWN1dGVkXG4gICAqL1xuICBiZWZvcmVQb3BTdGF0ZShjYjogQmVmb3JlUG9wU3RhdGVDYWxsYmFjaykge1xuICAgIHRoaXMuX2JwcyA9IGNiXG4gIH1cblxuICBvbmx5QUhhc2hDaGFuZ2UoYXM6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGlmICghdGhpcy5hc1BhdGgpIHJldHVybiBmYWxzZVxuICAgIGNvbnN0IFtvbGRVcmxOb0hhc2gsIG9sZEhhc2hdID0gdGhpcy5hc1BhdGguc3BsaXQoJyMnKVxuICAgIGNvbnN0IFtuZXdVcmxOb0hhc2gsIG5ld0hhc2hdID0gYXMuc3BsaXQoJyMnKVxuXG4gICAgLy8gTWFrZXMgc3VyZSB3ZSBzY3JvbGwgdG8gdGhlIHByb3ZpZGVkIGhhc2ggaWYgdGhlIHVybC9oYXNoIGFyZSB0aGUgc2FtZVxuICAgIGlmIChuZXdIYXNoICYmIG9sZFVybE5vSGFzaCA9PT0gbmV3VXJsTm9IYXNoICYmIG9sZEhhc2ggPT09IG5ld0hhc2gpIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIHVybHMgYXJlIGNoYW5nZSwgdGhlcmUncyBtb3JlIHRoYW4gYSBoYXNoIGNoYW5nZVxuICAgIGlmIChvbGRVcmxOb0hhc2ggIT09IG5ld1VybE5vSGFzaCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGhhc2ggaGFzIGNoYW5nZWQsIHRoZW4gaXQncyBhIGhhc2ggb25seSBjaGFuZ2UuXG4gICAgLy8gVGhpcyBjaGVjayBpcyBuZWNlc3NhcnkgdG8gaGFuZGxlIGJvdGggdGhlIGVudGVyIGFuZFxuICAgIC8vIGxlYXZlIGhhc2ggPT09ICcnIGNhc2VzLiBUaGUgaWRlbnRpdHkgY2FzZSBmYWxscyB0aHJvdWdoXG4gICAgLy8gYW5kIGlzIHRyZWF0ZWQgYXMgYSBuZXh0IHJlbG9hZC5cbiAgICByZXR1cm4gb2xkSGFzaCAhPT0gbmV3SGFzaFxuICB9XG5cbiAgc2Nyb2xsVG9IYXNoKGFzOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBjb25zdCBbLCBoYXNoXSA9IGFzLnNwbGl0KCcjJylcbiAgICAvLyBTY3JvbGwgdG8gdG9wIGlmIHRoZSBoYXNoIGlzIGp1c3QgYCNgIHdpdGggbm8gdmFsdWVcbiAgICBpZiAoaGFzaCA9PT0gJycpIHtcbiAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gRmlyc3Qgd2UgY2hlY2sgaWYgdGhlIGVsZW1lbnQgYnkgaWQgaXMgZm91bmRcbiAgICBjb25zdCBpZEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaGFzaClcbiAgICBpZiAoaWRFbCkge1xuICAgICAgaWRFbC5zY3JvbGxJbnRvVmlldygpXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgLy8gSWYgdGhlcmUncyBubyBlbGVtZW50IHdpdGggdGhlIGlkLCB3ZSBjaGVjayB0aGUgYG5hbWVgIHByb3BlcnR5XG4gICAgLy8gVG8gbWlycm9yIGJyb3dzZXJzXG4gICAgY29uc3QgbmFtZUVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoaGFzaClbMF1cbiAgICBpZiAobmFtZUVsKSB7XG4gICAgICBuYW1lRWwuc2Nyb2xsSW50b1ZpZXcoKVxuICAgIH1cbiAgfVxuXG4gIHVybElzTmV3KGFzUGF0aDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuYXNQYXRoICE9PSBhc1BhdGhcbiAgfVxuXG4gIF9yZXNvbHZlSHJlZihwYXJzZWRIcmVmOiBVcmxPYmplY3QsIHBhZ2VzOiBzdHJpbmdbXSwgYXBwbHlCYXNlUGF0aCA9IHRydWUpIHtcbiAgICBjb25zdCB7IHBhdGhuYW1lIH0gPSBwYXJzZWRIcmVmXG4gICAgY29uc3QgY2xlYW5QYXRobmFtZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKFxuICAgICAgZGVub3JtYWxpemVQYWdlUGF0aChhcHBseUJhc2VQYXRoID8gZGVsQmFzZVBhdGgocGF0aG5hbWUhKSA6IHBhdGhuYW1lISlcbiAgICApXG5cbiAgICBpZiAoY2xlYW5QYXRobmFtZSA9PT0gJy80MDQnIHx8IGNsZWFuUGF0aG5hbWUgPT09ICcvX2Vycm9yJykge1xuICAgICAgcmV0dXJuIHBhcnNlZEhyZWZcbiAgICB9XG5cbiAgICAvLyBoYW5kbGUgcmVzb2x2aW5nIGhyZWYgZm9yIGR5bmFtaWMgcm91dGVzXG4gICAgaWYgKCFwYWdlcy5pbmNsdWRlcyhjbGVhblBhdGhuYW1lISkpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbiAgICAgIHBhZ2VzLnNvbWUoKHBhZ2UpID0+IHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIGlzRHluYW1pY1JvdXRlKHBhZ2UpICYmXG4gICAgICAgICAgZ2V0Um91dGVSZWdleChwYWdlKS5yZS50ZXN0KGNsZWFuUGF0aG5hbWUhKVxuICAgICAgICApIHtcbiAgICAgICAgICBwYXJzZWRIcmVmLnBhdGhuYW1lID0gYXBwbHlCYXNlUGF0aCA/IGFkZEJhc2VQYXRoKHBhZ2UpIDogcGFnZVxuICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICAgIHJldHVybiBwYXJzZWRIcmVmXG4gIH1cblxuICAvKipcbiAgICogUHJlZmV0Y2ggcGFnZSBjb2RlLCB5b3UgbWF5IHdhaXQgZm9yIHRoZSBkYXRhIGR1cmluZyBwYWdlIHJlbmRlcmluZy5cbiAgICogVGhpcyBmZWF0dXJlIG9ubHkgd29ya3MgaW4gcHJvZHVjdGlvbiFcbiAgICogQHBhcmFtIHVybCB0aGUgaHJlZiBvZiBwcmVmZXRjaGVkIHBhZ2VcbiAgICogQHBhcmFtIGFzUGF0aCB0aGUgYXMgcGF0aCBvZiB0aGUgcHJlZmV0Y2hlZCBwYWdlXG4gICAqL1xuICBhc3luYyBwcmVmZXRjaChcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhc1BhdGg6IHN0cmluZyA9IHVybCxcbiAgICBvcHRpb25zOiBQcmVmZXRjaE9wdGlvbnMgPSB7fVxuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBsZXQgcGFyc2VkID0gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG5cbiAgICBsZXQgeyBwYXRobmFtZSB9ID0gcGFyc2VkXG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgY29uc3Qgbm9ybWFsaXplTG9jYWxlUGF0aCA9IHJlcXVpcmUoJy4uL2kxOG4vbm9ybWFsaXplLWxvY2FsZS1wYXRoJylcbiAgICAgICAgLm5vcm1hbGl6ZUxvY2FsZVBhdGggYXMgdHlwZW9mIGltcG9ydCgnLi4vaTE4bi9ub3JtYWxpemUtbG9jYWxlLXBhdGgnKS5ub3JtYWxpemVMb2NhbGVQYXRoXG5cbiAgICAgIGlmIChvcHRpb25zLmxvY2FsZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgcGF0aG5hbWUgPSBub3JtYWxpemVMb2NhbGVQYXRoIShwYXRobmFtZSwgdGhpcy5sb2NhbGVzKS5wYXRobmFtZVxuICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG5cbiAgICAgICAgbGV0IHBhcnNlZEFzID0gcGFyc2VSZWxhdGl2ZVVybChhc1BhdGgpXG4gICAgICAgIGNvbnN0IGxvY2FsZVBhdGhSZXN1bHQgPSBub3JtYWxpemVMb2NhbGVQYXRoIShcbiAgICAgICAgICBwYXJzZWRBcy5wYXRobmFtZSxcbiAgICAgICAgICB0aGlzLmxvY2FsZXNcbiAgICAgICAgKVxuICAgICAgICBwYXJzZWRBcy5wYXRobmFtZSA9IGxvY2FsZVBhdGhSZXN1bHQucGF0aG5hbWVcbiAgICAgICAgb3B0aW9ucy5sb2NhbGUgPSBsb2NhbGVQYXRoUmVzdWx0LmRldGVjdGVkTG9jYWxlIHx8IHRoaXMuZGVmYXVsdExvY2FsZVxuICAgICAgICBhc1BhdGggPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWRBcylcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBwYWdlcyA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5nZXRQYWdlTGlzdCgpXG5cbiAgICBwYXJzZWQgPSB0aGlzLl9yZXNvbHZlSHJlZihwYXJzZWQsIHBhZ2VzLCBmYWxzZSkgYXMgdHlwZW9mIHBhcnNlZFxuXG4gICAgaWYgKHBhcnNlZC5wYXRobmFtZSAhPT0gcGF0aG5hbWUpIHtcbiAgICAgIHBhdGhuYW1lID0gcGFyc2VkLnBhdGhuYW1lXG4gICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG4gICAgfVxuXG4gICAgLy8gUHJlZmV0Y2ggaXMgbm90IHN1cHBvcnRlZCBpbiBkZXZlbG9wbWVudCBtb2RlIGJlY2F1c2UgaXQgd291bGQgdHJpZ2dlciBvbi1kZW1hbmQtZW50cmllc1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCByb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuICAgIGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgIHRoaXMucGFnZUxvYWRlci5faXNTc2codXJsKS50aGVuKChpc1NzZzogYm9vbGVhbikgPT4ge1xuICAgICAgICByZXR1cm4gaXNTc2dcbiAgICAgICAgICA/IHRoaXMuX2dldFN0YXRpY0RhdGEoXG4gICAgICAgICAgICAgIHRoaXMucGFnZUxvYWRlci5nZXREYXRhSHJlZihcbiAgICAgICAgICAgICAgICB1cmwsXG4gICAgICAgICAgICAgICAgYXNQYXRoLFxuICAgICAgICAgICAgICAgIHRydWUsXG4gICAgICAgICAgICAgICAgdHlwZW9mIG9wdGlvbnMubG9jYWxlICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICAgICAgICAgICAgPyBvcHRpb25zLmxvY2FsZVxuICAgICAgICAgICAgICAgICAgOiB0aGlzLmxvY2FsZVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICAgOiBmYWxzZVxuICAgICAgfSksXG4gICAgICB0aGlzLnBhZ2VMb2FkZXJbb3B0aW9ucy5wcmlvcml0eSA/ICdsb2FkUGFnZScgOiAncHJlZmV0Y2gnXShyb3V0ZSksXG4gICAgXSlcbiAgfVxuXG4gIGFzeW5jIGZldGNoQ29tcG9uZW50KHJvdXRlOiBzdHJpbmcpOiBQcm9taXNlPEdvb2RQYWdlQ2FjaGU+IHtcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcbiAgICBjb25zdCBjYW5jZWwgPSAodGhpcy5jbGMgPSAoKSA9PiB7XG4gICAgICBjYW5jZWxsZWQgPSB0cnVlXG4gICAgfSlcblxuICAgIGNvbnN0IGNvbXBvbmVudFJlc3VsdCA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5sb2FkUGFnZShyb3V0ZSlcblxuICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgIGNvbnN0IGVycm9yOiBhbnkgPSBuZXcgRXJyb3IoXG4gICAgICAgIGBBYm9ydCBmZXRjaGluZyBjb21wb25lbnQgZm9yIHJvdXRlOiBcIiR7cm91dGV9XCJgXG4gICAgICApXG4gICAgICBlcnJvci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICB0aHJvdyBlcnJvclxuICAgIH1cblxuICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB9XG5cbiAgICByZXR1cm4gY29tcG9uZW50UmVzdWx0XG4gIH1cblxuICBfZ2V0RGF0YTxUPihmbjogKCkgPT4gUHJvbWlzZTxUPik6IFByb21pc2U8VD4ge1xuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuICAgIGNvbnN0IGNhbmNlbCA9ICgpID0+IHtcbiAgICAgIGNhbmNlbGxlZCA9IHRydWVcbiAgICB9XG4gICAgdGhpcy5jbGMgPSBjYW5jZWxcbiAgICByZXR1cm4gZm4oKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICAgIH1cblxuICAgICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgICBjb25zdCBlcnI6IGFueSA9IG5ldyBFcnJvcignTG9hZGluZyBpbml0aWFsIHByb3BzIGNhbmNlbGxlZCcpXG4gICAgICAgIGVyci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGF0YVxuICAgIH0pXG4gIH1cblxuICBfZ2V0U3RhdGljRGF0YShkYXRhSHJlZjogc3RyaW5nKTogUHJvbWlzZTxvYmplY3Q+IHtcbiAgICBjb25zdCB7IGhyZWY6IGNhY2hlS2V5IH0gPSBuZXcgVVJMKGRhdGFIcmVmLCB3aW5kb3cubG9jYXRpb24uaHJlZilcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyAmJiB0aGlzLnNkY1tjYWNoZUtleV0pIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5zZGNbY2FjaGVLZXldKVxuICAgIH1cbiAgICByZXR1cm4gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZiwgdGhpcy5pc1NzcikudGhlbigoZGF0YSkgPT4ge1xuICAgICAgdGhpcy5zZGNbY2FjaGVLZXldID0gZGF0YVxuICAgICAgcmV0dXJuIGRhdGFcbiAgICB9KVxuICB9XG5cbiAgX2dldFNlcnZlckRhdGEoZGF0YUhyZWY6IHN0cmluZyk6IFByb21pc2U8b2JqZWN0PiB7XG4gICAgcmV0dXJuIGZldGNoTmV4dERhdGEoZGF0YUhyZWYsIHRoaXMuaXNTc3IpXG4gIH1cblxuICBnZXRJbml0aWFsUHJvcHMoXG4gICAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlLFxuICAgIGN0eDogTmV4dFBhZ2VDb250ZXh0XG4gICk6IFByb21pc2U8YW55PiB7XG4gICAgY29uc3QgeyBDb21wb25lbnQ6IEFwcCB9ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddXG4gICAgY29uc3QgQXBwVHJlZSA9IHRoaXMuX3dyYXBBcHAoQXBwIGFzIEFwcENvbXBvbmVudClcbiAgICBjdHguQXBwVHJlZSA9IEFwcFRyZWVcbiAgICByZXR1cm4gbG9hZEdldEluaXRpYWxQcm9wczxBcHBDb250ZXh0VHlwZTxSb3V0ZXI+PihBcHAsIHtcbiAgICAgIEFwcFRyZWUsXG4gICAgICBDb21wb25lbnQsXG4gICAgICByb3V0ZXI6IHRoaXMsXG4gICAgICBjdHgsXG4gICAgfSlcbiAgfVxuXG4gIGFib3J0Q29tcG9uZW50TG9hZChhczogc3RyaW5nKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY2xjKSB7XG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBidWlsZENhbmNlbGxhdGlvbkVycm9yKCksIGFzKVxuICAgICAgdGhpcy5jbGMoKVxuICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgfVxuICB9XG5cbiAgbm90aWZ5KGRhdGE6IFByaXZhdGVSb3V0ZUluZm8pOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5zdWIoZGF0YSwgdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudCBhcyBBcHBDb21wb25lbnQpXG4gIH1cbn1cbiIsIi8vIGVzY2FwZSBkZWxpbWl0ZXJzIHVzZWQgYnkgcGF0aC10by1yZWdleHBcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGVzY2FwZVBhdGhEZWxpbWl0ZXJzKHNlZ21lbnQ6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBzZWdtZW50LnJlcGxhY2UoL1svIz9dL2csIChjaGFyOiBzdHJpbmcpID0+IGVuY29kZVVSSUNvbXBvbmVudChjaGFyKSlcbn1cbiIsIi8vIEZvcm1hdCBmdW5jdGlvbiBtb2RpZmllZCBmcm9tIG5vZGVqc1xuLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgKiBhcyBxdWVyeXN0cmluZyBmcm9tICcuL3F1ZXJ5c3RyaW5nJ1xuXG5jb25zdCBzbGFzaGVkUHJvdG9jb2xzID0gL2h0dHBzP3xmdHB8Z29waGVyfGZpbGUvXG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRVcmwodXJsT2JqOiBVcmxPYmplY3QpIHtcbiAgbGV0IHsgYXV0aCwgaG9zdG5hbWUgfSA9IHVybE9ialxuICBsZXQgcHJvdG9jb2wgPSB1cmxPYmoucHJvdG9jb2wgfHwgJydcbiAgbGV0IHBhdGhuYW1lID0gdXJsT2JqLnBhdGhuYW1lIHx8ICcnXG4gIGxldCBoYXNoID0gdXJsT2JqLmhhc2ggfHwgJydcbiAgbGV0IHF1ZXJ5ID0gdXJsT2JqLnF1ZXJ5IHx8ICcnXG4gIGxldCBob3N0OiBzdHJpbmcgfCBmYWxzZSA9IGZhbHNlXG5cbiAgYXV0aCA9IGF1dGggPyBlbmNvZGVVUklDb21wb25lbnQoYXV0aCkucmVwbGFjZSgvJTNBL2ksICc6JykgKyAnQCcgOiAnJ1xuXG4gIGlmICh1cmxPYmouaG9zdCkge1xuICAgIGhvc3QgPSBhdXRoICsgdXJsT2JqLmhvc3RcbiAgfSBlbHNlIGlmIChob3N0bmFtZSkge1xuICAgIGhvc3QgPSBhdXRoICsgKH5ob3N0bmFtZS5pbmRleE9mKCc6JykgPyBgWyR7aG9zdG5hbWV9XWAgOiBob3N0bmFtZSlcbiAgICBpZiAodXJsT2JqLnBvcnQpIHtcbiAgICAgIGhvc3QgKz0gJzonICsgdXJsT2JqLnBvcnRcbiAgICB9XG4gIH1cblxuICBpZiAocXVlcnkgJiYgdHlwZW9mIHF1ZXJ5ID09PSAnb2JqZWN0Jykge1xuICAgIHF1ZXJ5ID0gU3RyaW5nKHF1ZXJ5c3RyaW5nLnVybFF1ZXJ5VG9TZWFyY2hQYXJhbXMocXVlcnkgYXMgUGFyc2VkVXJsUXVlcnkpKVxuICB9XG5cbiAgbGV0IHNlYXJjaCA9IHVybE9iai5zZWFyY2ggfHwgKHF1ZXJ5ICYmIGA/JHtxdWVyeX1gKSB8fCAnJ1xuXG4gIGlmIChwcm90b2NvbCAmJiBwcm90b2NvbC5zdWJzdHIoLTEpICE9PSAnOicpIHByb3RvY29sICs9ICc6J1xuXG4gIGlmIChcbiAgICB1cmxPYmouc2xhc2hlcyB8fFxuICAgICgoIXByb3RvY29sIHx8IHNsYXNoZWRQcm90b2NvbHMudGVzdChwcm90b2NvbCkpICYmIGhvc3QgIT09IGZhbHNlKVxuICApIHtcbiAgICBob3N0ID0gJy8vJyArIChob3N0IHx8ICcnKVxuICAgIGlmIChwYXRobmFtZSAmJiBwYXRobmFtZVswXSAhPT0gJy8nKSBwYXRobmFtZSA9ICcvJyArIHBhdGhuYW1lXG4gIH0gZWxzZSBpZiAoIWhvc3QpIHtcbiAgICBob3N0ID0gJydcbiAgfVxuXG4gIGlmIChoYXNoICYmIGhhc2hbMF0gIT09ICcjJykgaGFzaCA9ICcjJyArIGhhc2hcbiAgaWYgKHNlYXJjaCAmJiBzZWFyY2hbMF0gIT09ICc/Jykgc2VhcmNoID0gJz8nICsgc2VhcmNoXG5cbiAgcGF0aG5hbWUgPSBwYXRobmFtZS5yZXBsYWNlKC9bPyNdL2csIGVuY29kZVVSSUNvbXBvbmVudClcbiAgc2VhcmNoID0gc2VhcmNoLnJlcGxhY2UoJyMnLCAnJTIzJylcblxuICByZXR1cm4gYCR7cHJvdG9jb2x9JHtob3N0fSR7cGF0aG5hbWV9JHtzZWFyY2h9JHtoYXNofWBcbn1cbiIsIi8vIElkZW50aWZ5IC9bcGFyYW1dLyBpbiByb3V0ZSBzdHJpbmdcbmNvbnN0IFRFU1RfUk9VVEUgPSAvXFwvXFxbW14vXSs/XFxdKD89XFwvfCQpL1xuXG5leHBvcnQgZnVuY3Rpb24gaXNEeW5hbWljUm91dGUocm91dGU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICByZXR1cm4gVEVTVF9ST1VURS50ZXN0KHJvdXRlKVxufVxuIiwiaW1wb3J0IHsgZ2V0TG9jYXRpb25PcmlnaW4gfSBmcm9tICcuLi8uLi91dGlscydcbmltcG9ydCB7IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkgfSBmcm9tICcuL3F1ZXJ5c3RyaW5nJ1xuXG4vKipcbiAqIFBhcnNlcyBwYXRoLXJlbGF0aXZlIHVybHMgKGUuZy4gYC9oZWxsby93b3JsZD9mb289YmFyYCkuIElmIHVybCBpc24ndCBwYXRoLXJlbGF0aXZlXG4gKiAoZS5nLiBgLi9oZWxsb2ApIHRoZW4gYXQgbGVhc3QgYmFzZSBtdXN0IGJlLlxuICogQWJzb2x1dGUgdXJscyBhcmUgcmVqZWN0ZWQgd2l0aCBvbmUgZXhjZXB0aW9uLCBpbiB0aGUgYnJvd3NlciwgYWJzb2x1dGUgdXJscyB0aGF0IGFyZSBvblxuICogdGhlIGN1cnJlbnQgb3JpZ2luIHdpbGwgYmUgcGFyc2VkIGFzIHJlbGF0aXZlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVJlbGF0aXZlVXJsKHVybDogc3RyaW5nLCBiYXNlPzogc3RyaW5nKSB7XG4gIGNvbnN0IGdsb2JhbEJhc2UgPSBuZXcgVVJMKFxuICAgIHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnID8gJ2h0dHA6Ly9uJyA6IGdldExvY2F0aW9uT3JpZ2luKClcbiAgKVxuICBjb25zdCByZXNvbHZlZEJhc2UgPSBiYXNlID8gbmV3IFVSTChiYXNlLCBnbG9iYWxCYXNlKSA6IGdsb2JhbEJhc2VcbiAgY29uc3QgeyBwYXRobmFtZSwgc2VhcmNoUGFyYW1zLCBzZWFyY2gsIGhhc2gsIGhyZWYsIG9yaWdpbiB9ID0gbmV3IFVSTChcbiAgICB1cmwsXG4gICAgcmVzb2x2ZWRCYXNlXG4gIClcbiAgaWYgKG9yaWdpbiAhPT0gZ2xvYmFsQmFzZS5vcmlnaW4pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2ludmFyaWFudDogaW52YWxpZCByZWxhdGl2ZSBVUkwnKVxuICB9XG4gIHJldHVybiB7XG4gICAgcGF0aG5hbWUsXG4gICAgcXVlcnk6IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoc2VhcmNoUGFyYW1zKSxcbiAgICBzZWFyY2gsXG4gICAgaGFzaCxcbiAgICBocmVmOiBocmVmLnNsaWNlKGdsb2JhbEJhc2Uub3JpZ2luLmxlbmd0aCksXG4gIH1cbn1cbiIsImltcG9ydCAqIGFzIHBhdGhUb1JlZ2V4cCBmcm9tICduZXh0L2Rpc3QvY29tcGlsZWQvcGF0aC10by1yZWdleHAnXG5cbmV4cG9ydCB7IHBhdGhUb1JlZ2V4cCB9XG5cbmV4cG9ydCBjb25zdCBtYXRjaGVyT3B0aW9uczogcGF0aFRvUmVnZXhwLlRva2Vuc1RvUmVnZXhwT3B0aW9ucyAmXG4gIHBhdGhUb1JlZ2V4cC5QYXJzZU9wdGlvbnMgPSB7XG4gIHNlbnNpdGl2ZTogZmFsc2UsXG4gIGRlbGltaXRlcjogJy8nLFxufVxuXG5leHBvcnQgY29uc3QgY3VzdG9tUm91dGVNYXRjaGVyT3B0aW9uczogcGF0aFRvUmVnZXhwLlRva2Vuc1RvUmVnZXhwT3B0aW9ucyAmXG4gIHBhdGhUb1JlZ2V4cC5QYXJzZU9wdGlvbnMgPSB7XG4gIC4uLm1hdGNoZXJPcHRpb25zLFxuICBzdHJpY3Q6IHRydWUsXG59XG5cbmV4cG9ydCBkZWZhdWx0IChjdXN0b21Sb3V0ZSA9IGZhbHNlKSA9PiB7XG4gIHJldHVybiAocGF0aDogc3RyaW5nKSA9PiB7XG4gICAgY29uc3Qga2V5czogcGF0aFRvUmVnZXhwLktleVtdID0gW11cbiAgICBjb25zdCBtYXRjaGVyUmVnZXggPSBwYXRoVG9SZWdleHAucGF0aFRvUmVnZXhwKFxuICAgICAgcGF0aCxcbiAgICAgIGtleXMsXG4gICAgICBjdXN0b21Sb3V0ZSA/IGN1c3RvbVJvdXRlTWF0Y2hlck9wdGlvbnMgOiBtYXRjaGVyT3B0aW9uc1xuICAgIClcbiAgICBjb25zdCBtYXRjaGVyID0gcGF0aFRvUmVnZXhwLnJlZ2V4cFRvRnVuY3Rpb24obWF0Y2hlclJlZ2V4LCBrZXlzKVxuXG4gICAgcmV0dXJuIChwYXRobmFtZTogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZCwgcGFyYW1zPzogYW55KSA9PiB7XG4gICAgICBjb25zdCByZXMgPSBwYXRobmFtZSA9PSBudWxsID8gZmFsc2UgOiBtYXRjaGVyKHBhdGhuYW1lKVxuICAgICAgaWYgKCFyZXMpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG5cbiAgICAgIGlmIChjdXN0b21Sb3V0ZSkge1xuICAgICAgICBmb3IgKGNvbnN0IGtleSBvZiBrZXlzKSB7XG4gICAgICAgICAgLy8gdW5uYW1lZCBwYXJhbXMgc2hvdWxkIGJlIHJlbW92ZWQgYXMgdGhleVxuICAgICAgICAgIC8vIGFyZSBub3QgYWxsb3dlZCB0byBiZSB1c2VkIGluIHRoZSBkZXN0aW5hdGlvblxuICAgICAgICAgIGlmICh0eXBlb2Yga2V5Lm5hbWUgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICBkZWxldGUgKHJlcy5wYXJhbXMgYXMgYW55KVtrZXkubmFtZV1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHsgLi4ucGFyYW1zLCAuLi5yZXMucGFyYW1zIH1cbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5IH0gZnJvbSAnLi9xdWVyeXN0cmluZydcbmltcG9ydCB7IHBhcnNlUmVsYXRpdmVVcmwgfSBmcm9tICcuL3BhcnNlLXJlbGF0aXZlLXVybCdcbmltcG9ydCAqIGFzIHBhdGhUb1JlZ2V4cCBmcm9tICduZXh0L2Rpc3QvY29tcGlsZWQvcGF0aC10by1yZWdleHAnXG5cbnR5cGUgUGFyYW1zID0geyBbcGFyYW06IHN0cmluZ106IGFueSB9XG5cbmV4cG9ydCBmdW5jdGlvbiBjb21waWxlTm9uUGF0aCh2YWx1ZTogc3RyaW5nLCBwYXJhbXM6IFBhcmFtcyk6IHN0cmluZyB7XG4gIGlmICghdmFsdWUuaW5jbHVkZXMoJzonKSkge1xuICAgIHJldHVybiB2YWx1ZVxuICB9XG5cbiAgZm9yIChjb25zdCBrZXkgb2YgT2JqZWN0LmtleXMocGFyYW1zKSkge1xuICAgIGlmICh2YWx1ZS5pbmNsdWRlcyhgOiR7a2V5fWApKSB7XG4gICAgICB2YWx1ZSA9IHZhbHVlXG4gICAgICAgIC5yZXBsYWNlKFxuICAgICAgICAgIG5ldyBSZWdFeHAoYDoke2tleX1cXFxcKmAsICdnJyksXG4gICAgICAgICAgYDoke2tleX0tLUVTQ0FQRURfUEFSQU1fQVNURVJJU0tTYFxuICAgICAgICApXG4gICAgICAgIC5yZXBsYWNlKFxuICAgICAgICAgIG5ldyBSZWdFeHAoYDoke2tleX1cXFxcP2AsICdnJyksXG4gICAgICAgICAgYDoke2tleX0tLUVTQ0FQRURfUEFSQU1fUVVFU1RJT05gXG4gICAgICAgIClcbiAgICAgICAgLnJlcGxhY2UobmV3IFJlZ0V4cChgOiR7a2V5fVxcXFwrYCwgJ2cnKSwgYDoke2tleX0tLUVTQ0FQRURfUEFSQU1fUExVU2ApXG4gICAgICAgIC5yZXBsYWNlKFxuICAgICAgICAgIG5ldyBSZWdFeHAoYDoke2tleX0oPyFcXFxcdylgLCAnZycpLFxuICAgICAgICAgIGAtLUVTQ0FQRURfUEFSQU1fQ09MT04ke2tleX1gXG4gICAgICAgIClcbiAgICB9XG4gIH1cbiAgdmFsdWUgPSB2YWx1ZVxuICAgIC5yZXBsYWNlKC8oOnxcXCp8XFw/fFxcK3xcXCh8XFwpfFxce3xcXH0pL2csICdcXFxcJDEnKVxuICAgIC5yZXBsYWNlKC8tLUVTQ0FQRURfUEFSQU1fUExVUy9nLCAnKycpXG4gICAgLnJlcGxhY2UoLy0tRVNDQVBFRF9QQVJBTV9DT0xPTi9nLCAnOicpXG4gICAgLnJlcGxhY2UoLy0tRVNDQVBFRF9QQVJBTV9RVUVTVElPTi9nLCAnPycpXG4gICAgLnJlcGxhY2UoLy0tRVNDQVBFRF9QQVJBTV9BU1RFUklTS1MvZywgJyonKVxuXG4gIC8vIHRoZSB2YWx1ZSBuZWVkcyB0byBzdGFydCB3aXRoIGEgZm9yd2FyZC1zbGFzaCB0byBiZSBjb21waWxlZFxuICAvLyBjb3JyZWN0bHlcbiAgcmV0dXJuIHBhdGhUb1JlZ2V4cFxuICAgIC5jb21waWxlKGAvJHt2YWx1ZX1gLCB7IHZhbGlkYXRlOiBmYWxzZSB9KShwYXJhbXMpXG4gICAgLnN1YnN0cigxKVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwcmVwYXJlRGVzdGluYXRpb24oXG4gIGRlc3RpbmF0aW9uOiBzdHJpbmcsXG4gIHBhcmFtczogUGFyYW1zLFxuICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gIGFwcGVuZFBhcmFtc1RvUXVlcnk6IGJvb2xlYW4sXG4gIGJhc2VQYXRoOiBzdHJpbmdcbikge1xuICBsZXQgcGFyc2VkRGVzdGluYXRpb246IHtcbiAgICBxdWVyeT86IFBhcnNlZFVybFF1ZXJ5XG4gICAgcHJvdG9jb2w/OiBzdHJpbmdcbiAgICBob3N0bmFtZT86IHN0cmluZ1xuICAgIHBvcnQ/OiBzdHJpbmdcbiAgfSAmIFJldHVyblR5cGU8dHlwZW9mIHBhcnNlUmVsYXRpdmVVcmw+ID0ge30gYXMgYW55XG5cbiAgLy8gY2xvbmUgcXVlcnkgc28gd2UgZG9uJ3QgbW9kaWZ5IHRoZSBvcmlnaW5hbFxuICBxdWVyeSA9IE9iamVjdC5hc3NpZ24oe30sIHF1ZXJ5KVxuICBjb25zdCBoYWRMb2NhbGUgPSBxdWVyeS5fX25leHRMb2NhbGVcbiAgZGVsZXRlIHF1ZXJ5Ll9fbmV4dExvY2FsZVxuICBkZWxldGUgcXVlcnkuX19uZXh0RGVmYXVsdExvY2FsZVxuXG4gIGlmIChkZXN0aW5hdGlvbi5zdGFydHNXaXRoKCcvJykpIHtcbiAgICBwYXJzZWREZXN0aW5hdGlvbiA9IHBhcnNlUmVsYXRpdmVVcmwoZGVzdGluYXRpb24pXG4gIH0gZWxzZSB7XG4gICAgY29uc3Qge1xuICAgICAgcGF0aG5hbWUsXG4gICAgICBzZWFyY2hQYXJhbXMsXG4gICAgICBoYXNoLFxuICAgICAgaG9zdG5hbWUsXG4gICAgICBwb3J0LFxuICAgICAgcHJvdG9jb2wsXG4gICAgICBzZWFyY2gsXG4gICAgICBocmVmLFxuICAgIH0gPSBuZXcgVVJMKGRlc3RpbmF0aW9uKVxuXG4gICAgcGFyc2VkRGVzdGluYXRpb24gPSB7XG4gICAgICBwYXRobmFtZSxcbiAgICAgIHF1ZXJ5OiBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KHNlYXJjaFBhcmFtcyksXG4gICAgICBoYXNoLFxuICAgICAgcHJvdG9jb2wsXG4gICAgICBob3N0bmFtZSxcbiAgICAgIHBvcnQsXG4gICAgICBzZWFyY2gsXG4gICAgICBocmVmLFxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGRlc3RRdWVyeSA9IHBhcnNlZERlc3RpbmF0aW9uLnF1ZXJ5XG4gIGNvbnN0IGRlc3RQYXRoID0gYCR7cGFyc2VkRGVzdGluYXRpb24ucGF0aG5hbWUhfSR7XG4gICAgcGFyc2VkRGVzdGluYXRpb24uaGFzaCB8fCAnJ1xuICB9YFxuICBjb25zdCBkZXN0UGF0aFBhcmFtS2V5czogcGF0aFRvUmVnZXhwLktleVtdID0gW11cbiAgcGF0aFRvUmVnZXhwLnBhdGhUb1JlZ2V4cChkZXN0UGF0aCwgZGVzdFBhdGhQYXJhbUtleXMpXG5cbiAgY29uc3QgZGVzdFBhdGhQYXJhbXMgPSBkZXN0UGF0aFBhcmFtS2V5cy5tYXAoKGtleSkgPT4ga2V5Lm5hbWUpXG5cbiAgbGV0IGRlc3RpbmF0aW9uQ29tcGlsZXIgPSBwYXRoVG9SZWdleHAuY29tcGlsZShcbiAgICBkZXN0UGF0aCxcbiAgICAvLyB3ZSBkb24ndCB2YWxpZGF0ZSB3aGlsZSBjb21waWxpbmcgdGhlIGRlc3RpbmF0aW9uIHNpbmNlIHdlIHNob3VsZFxuICAgIC8vIGhhdmUgYWxyZWFkeSB2YWxpZGF0ZWQgYmVmb3JlIHdlIGdvdCB0byB0aGlzIHBvaW50IGFuZCB2YWxpZGF0aW5nXG4gICAgLy8gYnJlYWtzIGNvbXBpbGluZyBkZXN0aW5hdGlvbnMgd2l0aCBuYW1lZCBwYXR0ZXJuIHBhcmFtcyBmcm9tIHRoZSBzb3VyY2VcbiAgICAvLyBlLmcuIC9zb21ldGhpbmc6aGVsbG8oLiopIC0+IC9hbm90aGVyLzpoZWxsbyBpcyBicm9rZW4gd2l0aCB2YWxpZGF0aW9uXG4gICAgLy8gc2luY2UgY29tcGlsZSB2YWxpZGF0aW9uIGlzIG1lYW50IGZvciByZXZlcnNpbmcgYW5kIG5vdCBmb3IgaW5zZXJ0aW5nXG4gICAgLy8gcGFyYW1zIGZyb20gYSBzZXBhcmF0ZSBwYXRoLXJlZ2V4IGludG8gYW5vdGhlclxuICAgIHsgdmFsaWRhdGU6IGZhbHNlIH1cbiAgKVxuICBsZXQgbmV3VXJsXG5cbiAgLy8gdXBkYXRlIGFueSBwYXJhbXMgaW4gcXVlcnkgdmFsdWVzXG4gIGZvciAoY29uc3QgW2tleSwgc3RyT3JBcnJheV0gb2YgT2JqZWN0LmVudHJpZXMoZGVzdFF1ZXJ5KSkge1xuICAgIGxldCB2YWx1ZSA9IEFycmF5LmlzQXJyYXkoc3RyT3JBcnJheSkgPyBzdHJPckFycmF5WzBdIDogc3RyT3JBcnJheVxuICAgIGlmICh2YWx1ZSkge1xuICAgICAgLy8gdGhlIHZhbHVlIG5lZWRzIHRvIHN0YXJ0IHdpdGggYSBmb3J3YXJkLXNsYXNoIHRvIGJlIGNvbXBpbGVkXG4gICAgICAvLyBjb3JyZWN0bHlcbiAgICAgIHZhbHVlID0gY29tcGlsZU5vblBhdGgodmFsdWUsIHBhcmFtcylcbiAgICB9XG4gICAgZGVzdFF1ZXJ5W2tleV0gPSB2YWx1ZVxuICB9XG5cbiAgLy8gYWRkIHBhdGggcGFyYW1zIHRvIHF1ZXJ5IGlmIGl0J3Mgbm90IGEgcmVkaXJlY3QgYW5kIG5vdFxuICAvLyBhbHJlYWR5IGRlZmluZWQgaW4gZGVzdGluYXRpb24gcXVlcnkgb3IgcGF0aFxuICBsZXQgcGFyYW1LZXlzID0gT2JqZWN0LmtleXMocGFyYW1zKVxuXG4gIC8vIHJlbW92ZSBpbnRlcm5hbCBwYXJhbSBmb3IgaTE4blxuICBpZiAoaGFkTG9jYWxlKSB7XG4gICAgcGFyYW1LZXlzID0gcGFyYW1LZXlzLmZpbHRlcigobmFtZSkgPT4gbmFtZSAhPT0gJ25leHRJbnRlcm5hbExvY2FsZScpXG4gIH1cblxuICBpZiAoXG4gICAgYXBwZW5kUGFyYW1zVG9RdWVyeSAmJlxuICAgICFwYXJhbUtleXMuc29tZSgoa2V5KSA9PiBkZXN0UGF0aFBhcmFtcy5pbmNsdWRlcyhrZXkpKVxuICApIHtcbiAgICBmb3IgKGNvbnN0IGtleSBvZiBwYXJhbUtleXMpIHtcbiAgICAgIGlmICghKGtleSBpbiBkZXN0UXVlcnkpKSB7XG4gICAgICAgIGRlc3RRdWVyeVtrZXldID0gcGFyYW1zW2tleV1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjb25zdCBzaG91bGRBZGRCYXNlUGF0aCA9IGRlc3RpbmF0aW9uLnN0YXJ0c1dpdGgoJy8nKSAmJiBiYXNlUGF0aFxuXG4gIHRyeSB7XG4gICAgbmV3VXJsID0gYCR7c2hvdWxkQWRkQmFzZVBhdGggPyBiYXNlUGF0aCA6ICcnfSR7ZGVzdGluYXRpb25Db21waWxlcihcbiAgICAgIHBhcmFtc1xuICAgICl9YFxuXG4gICAgY29uc3QgW3BhdGhuYW1lLCBoYXNoXSA9IG5ld1VybC5zcGxpdCgnIycpXG4gICAgcGFyc2VkRGVzdGluYXRpb24ucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHBhcnNlZERlc3RpbmF0aW9uLmhhc2ggPSBgJHtoYXNoID8gJyMnIDogJyd9JHtoYXNoIHx8ICcnfWBcbiAgICBkZWxldGUgKHBhcnNlZERlc3RpbmF0aW9uIGFzIGFueSkuc2VhcmNoXG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGlmIChlcnIubWVzc2FnZS5tYXRjaCgvRXhwZWN0ZWQgLio/IHRvIG5vdCByZXBlYXQsIGJ1dCBnb3QgYW4gYXJyYXkvKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgVG8gdXNlIGEgbXVsdGktbWF0Y2ggaW4gdGhlIGRlc3RpbmF0aW9uIHlvdSBtdXN0IGFkZCBcXGAqXFxgIGF0IHRoZSBlbmQgb2YgdGhlIHBhcmFtIG5hbWUgdG8gc2lnbmlmeSBpdCBzaG91bGQgcmVwZWF0LiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9pbnZhbGlkLW11bHRpLW1hdGNoYFxuICAgICAgKVxuICAgIH1cbiAgICB0aHJvdyBlcnJcbiAgfVxuXG4gIC8vIFF1ZXJ5IG1lcmdlIG9yZGVyIGxvd2VzdCBwcmlvcml0eSB0byBoaWdoZXN0XG4gIC8vIDEuIGluaXRpYWwgVVJMIHF1ZXJ5IHZhbHVlc1xuICAvLyAyLiBwYXRoIHNlZ21lbnQgdmFsdWVzXG4gIC8vIDMuIGRlc3RpbmF0aW9uIHNwZWNpZmllZCBxdWVyeSB2YWx1ZXNcbiAgcGFyc2VkRGVzdGluYXRpb24ucXVlcnkgPSB7XG4gICAgLi4ucXVlcnksXG4gICAgLi4ucGFyc2VkRGVzdGluYXRpb24ucXVlcnksXG4gIH1cblxuICByZXR1cm4ge1xuICAgIG5ld1VybCxcbiAgICBwYXJzZWREZXN0aW5hdGlvbixcbiAgfVxufVxuIiwiaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcblxuZXhwb3J0IGZ1bmN0aW9uIHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoXG4gIHNlYXJjaFBhcmFtczogVVJMU2VhcmNoUGFyYW1zXG4pOiBQYXJzZWRVcmxRdWVyeSB7XG4gIGNvbnN0IHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSA9IHt9XG4gIHNlYXJjaFBhcmFtcy5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB7XG4gICAgaWYgKHR5cGVvZiBxdWVyeVtrZXldID09PSAndW5kZWZpbmVkJykge1xuICAgICAgcXVlcnlba2V5XSA9IHZhbHVlXG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHF1ZXJ5W2tleV0pKSB7XG4gICAgICA7KHF1ZXJ5W2tleV0gYXMgc3RyaW5nW10pLnB1c2godmFsdWUpXG4gICAgfSBlbHNlIHtcbiAgICAgIHF1ZXJ5W2tleV0gPSBbcXVlcnlba2V5XSBhcyBzdHJpbmcsIHZhbHVlXVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIHF1ZXJ5XG59XG5cbmZ1bmN0aW9uIHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0ocGFyYW06IHN0cmluZyk6IHN0cmluZyB7XG4gIGlmIChcbiAgICB0eXBlb2YgcGFyYW0gPT09ICdzdHJpbmcnIHx8XG4gICAgKHR5cGVvZiBwYXJhbSA9PT0gJ251bWJlcicgJiYgIWlzTmFOKHBhcmFtKSkgfHxcbiAgICB0eXBlb2YgcGFyYW0gPT09ICdib29sZWFuJ1xuICApIHtcbiAgICByZXR1cm4gU3RyaW5nKHBhcmFtKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiAnJ1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cmxRdWVyeVRvU2VhcmNoUGFyYW1zKFxuICB1cmxRdWVyeTogUGFyc2VkVXJsUXVlcnlcbik6IFVSTFNlYXJjaFBhcmFtcyB7XG4gIGNvbnN0IHJlc3VsdCA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoKVxuICBPYmplY3QuZW50cmllcyh1cmxRdWVyeSkuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICB2YWx1ZS5mb3JFYWNoKChpdGVtKSA9PiByZXN1bHQuYXBwZW5kKGtleSwgc3RyaW5naWZ5VXJsUXVlcnlQYXJhbShpdGVtKSkpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdC5zZXQoa2V5LCBzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKHZhbHVlKSlcbiAgICB9XG4gIH0pXG4gIHJldHVybiByZXN1bHRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFzc2lnbihcbiAgdGFyZ2V0OiBVUkxTZWFyY2hQYXJhbXMsXG4gIC4uLnNlYXJjaFBhcmFtc0xpc3Q6IFVSTFNlYXJjaFBhcmFtc1tdXG4pOiBVUkxTZWFyY2hQYXJhbXMge1xuICBzZWFyY2hQYXJhbXNMaXN0LmZvckVhY2goKHNlYXJjaFBhcmFtcykgPT4ge1xuICAgIEFycmF5LmZyb20oc2VhcmNoUGFyYW1zLmtleXMoKSkuZm9yRWFjaCgoa2V5KSA9PiB0YXJnZXQuZGVsZXRlKGtleSkpXG4gICAgc2VhcmNoUGFyYW1zLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHRhcmdldC5hcHBlbmQoa2V5LCB2YWx1ZSkpXG4gIH0pXG4gIHJldHVybiB0YXJnZXRcbn1cbiIsImltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgcGF0aE1hdGNoIGZyb20gJy4vcGF0aC1tYXRjaCdcbmltcG9ydCBwcmVwYXJlRGVzdGluYXRpb24gZnJvbSAnLi9wcmVwYXJlLWRlc3RpbmF0aW9uJ1xuaW1wb3J0IHsgUmV3cml0ZSB9IGZyb20gJy4uLy4uLy4uLy4uL2xpYi9sb2FkLWN1c3RvbS1yb3V0ZXMnXG5pbXBvcnQgeyByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCB9IGZyb20gJy4uLy4uLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2gnXG5cbmNvbnN0IGN1c3RvbVJvdXRlTWF0Y2hlciA9IHBhdGhNYXRjaCh0cnVlKVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXNvbHZlUmV3cml0ZXMoXG4gIGFzUGF0aDogc3RyaW5nLFxuICBwYWdlczogc3RyaW5nW10sXG4gIGJhc2VQYXRoOiBzdHJpbmcsXG4gIHJld3JpdGVzOiBSZXdyaXRlW10sXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgcmVzb2x2ZUhyZWY6IChwYXRoOiBzdHJpbmcpID0+IHN0cmluZ1xuKSB7XG4gIGlmICghcGFnZXMuaW5jbHVkZXMoYXNQYXRoKSkge1xuICAgIGZvciAoY29uc3QgcmV3cml0ZSBvZiByZXdyaXRlcykge1xuICAgICAgY29uc3QgbWF0Y2hlciA9IGN1c3RvbVJvdXRlTWF0Y2hlcihyZXdyaXRlLnNvdXJjZSlcbiAgICAgIGNvbnN0IHBhcmFtcyA9IG1hdGNoZXIoYXNQYXRoKVxuXG4gICAgICBpZiAocGFyYW1zKSB7XG4gICAgICAgIGlmICghcmV3cml0ZS5kZXN0aW5hdGlvbikge1xuICAgICAgICAgIC8vIHRoaXMgaXMgYSBwcm94aWVkIHJld3JpdGUgd2hpY2ggaXNuJ3QgaGFuZGxlZCBvbiB0aGUgY2xpZW50XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBkZXN0UmVzID0gcHJlcGFyZURlc3RpbmF0aW9uKFxuICAgICAgICAgIHJld3JpdGUuZGVzdGluYXRpb24sXG4gICAgICAgICAgcGFyYW1zLFxuICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgIHRydWUsXG4gICAgICAgICAgcmV3cml0ZS5iYXNlUGF0aCA9PT0gZmFsc2UgPyAnJyA6IGJhc2VQYXRoXG4gICAgICAgIClcbiAgICAgICAgYXNQYXRoID0gZGVzdFJlcy5wYXJzZWREZXN0aW5hdGlvbi5wYXRobmFtZSFcbiAgICAgICAgT2JqZWN0LmFzc2lnbihxdWVyeSwgZGVzdFJlcy5wYXJzZWREZXN0aW5hdGlvbi5xdWVyeSlcblxuICAgICAgICBpZiAocGFnZXMuaW5jbHVkZXMocmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goYXNQYXRoKSkpIHtcbiAgICAgICAgICAvLyBjaGVjayBpZiB3ZSBub3cgbWF0Y2ggYSBwYWdlIGFzIHRoaXMgbWVhbnMgd2UgYXJlIGRvbmVcbiAgICAgICAgICAvLyByZXNvbHZpbmcgdGhlIHJld3JpdGVzXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGNoZWNrIGlmIHdlIG1hdGNoIGEgZHluYW1pYy1yb3V0ZSwgaWYgc28gd2UgYnJlYWsgdGhlIHJld3JpdGVzIGNoYWluXG4gICAgICAgIGNvbnN0IHJlc29sdmVkSHJlZiA9IHJlc29sdmVIcmVmKGFzUGF0aClcblxuICAgICAgICBpZiAocmVzb2x2ZWRIcmVmICE9PSBhc1BhdGggJiYgcGFnZXMuaW5jbHVkZXMocmVzb2x2ZWRIcmVmKSkge1xuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIGFzUGF0aFxufVxuIiwiaW1wb3J0IHsgZ2V0Um91dGVSZWdleCB9IGZyb20gJy4vcm91dGUtcmVnZXgnXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleDogUmV0dXJuVHlwZTx0eXBlb2YgZ2V0Um91dGVSZWdleD4pIHtcbiAgY29uc3QgeyByZSwgZ3JvdXBzIH0gPSByb3V0ZVJlZ2V4XG4gIHJldHVybiAocGF0aG5hbWU6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQpID0+IHtcbiAgICBjb25zdCByb3V0ZU1hdGNoID0gcmUuZXhlYyhwYXRobmFtZSEpXG4gICAgaWYgKCFyb3V0ZU1hdGNoKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBjb25zdCBkZWNvZGUgPSAocGFyYW06IHN0cmluZykgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChwYXJhbSlcbiAgICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgY29uc3QgZXJyOiBFcnJvciAmIHsgY29kZT86IHN0cmluZyB9ID0gbmV3IEVycm9yKFxuICAgICAgICAgICdmYWlsZWQgdG8gZGVjb2RlIHBhcmFtJ1xuICAgICAgICApXG4gICAgICAgIGVyci5jb2RlID0gJ0RFQ09ERV9GQUlMRUQnXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBwYXJhbXM6IHsgW3BhcmFtTmFtZTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfSA9IHt9XG5cbiAgICBPYmplY3Qua2V5cyhncm91cHMpLmZvckVhY2goKHNsdWdOYW1lOiBzdHJpbmcpID0+IHtcbiAgICAgIGNvbnN0IGcgPSBncm91cHNbc2x1Z05hbWVdXG4gICAgICBjb25zdCBtID0gcm91dGVNYXRjaFtnLnBvc11cbiAgICAgIGlmIChtICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcGFyYW1zW3NsdWdOYW1lXSA9IH5tLmluZGV4T2YoJy8nKVxuICAgICAgICAgID8gbS5zcGxpdCgnLycpLm1hcCgoZW50cnkpID0+IGRlY29kZShlbnRyeSkpXG4gICAgICAgICAgOiBnLnJlcGVhdFxuICAgICAgICAgID8gW2RlY29kZShtKV1cbiAgICAgICAgICA6IGRlY29kZShtKVxuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIHBhcmFtc1xuICB9XG59XG4iLCJpbnRlcmZhY2UgR3JvdXAge1xuICBwb3M6IG51bWJlclxuICByZXBlYXQ6IGJvb2xlYW5cbiAgb3B0aW9uYWw6IGJvb2xlYW5cbn1cblxuLy8gdGhpcyBpc24ndCBpbXBvcnRpbmcgdGhlIGVzY2FwZS1zdHJpbmctcmVnZXggbW9kdWxlXG4vLyB0byByZWR1Y2UgYnl0ZXNcbmZ1bmN0aW9uIGVzY2FwZVJlZ2V4KHN0cjogc3RyaW5nKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvW3xcXFxce30oKVtcXF1eJCsqPy4tXS9nLCAnXFxcXCQmJylcbn1cblxuZnVuY3Rpb24gcGFyc2VQYXJhbWV0ZXIocGFyYW06IHN0cmluZykge1xuICBjb25zdCBvcHRpb25hbCA9IHBhcmFtLnN0YXJ0c1dpdGgoJ1snKSAmJiBwYXJhbS5lbmRzV2l0aCgnXScpXG4gIGlmIChvcHRpb25hbCkge1xuICAgIHBhcmFtID0gcGFyYW0uc2xpY2UoMSwgLTEpXG4gIH1cbiAgY29uc3QgcmVwZWF0ID0gcGFyYW0uc3RhcnRzV2l0aCgnLi4uJylcbiAgaWYgKHJlcGVhdCkge1xuICAgIHBhcmFtID0gcGFyYW0uc2xpY2UoMylcbiAgfVxuICByZXR1cm4geyBrZXk6IHBhcmFtLCByZXBlYXQsIG9wdGlvbmFsIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJvdXRlUmVnZXgoXG4gIG5vcm1hbGl6ZWRSb3V0ZTogc3RyaW5nXG4pOiB7XG4gIHJlOiBSZWdFeHBcbiAgbmFtZWRSZWdleD86IHN0cmluZ1xuICByb3V0ZUtleXM/OiB7IFtuYW1lZDogc3RyaW5nXTogc3RyaW5nIH1cbiAgZ3JvdXBzOiB7IFtncm91cE5hbWU6IHN0cmluZ106IEdyb3VwIH1cbn0ge1xuICBjb25zdCBzZWdtZW50cyA9IChub3JtYWxpemVkUm91dGUucmVwbGFjZSgvXFwvJC8sICcnKSB8fCAnLycpXG4gICAgLnNsaWNlKDEpXG4gICAgLnNwbGl0KCcvJylcblxuICBjb25zdCBncm91cHM6IHsgW2dyb3VwTmFtZTogc3RyaW5nXTogR3JvdXAgfSA9IHt9XG4gIGxldCBncm91cEluZGV4ID0gMVxuICBjb25zdCBwYXJhbWV0ZXJpemVkUm91dGUgPSBzZWdtZW50c1xuICAgIC5tYXAoKHNlZ21lbnQpID0+IHtcbiAgICAgIGlmIChzZWdtZW50LnN0YXJ0c1dpdGgoJ1snKSAmJiBzZWdtZW50LmVuZHNXaXRoKCddJykpIHtcbiAgICAgICAgY29uc3QgeyBrZXksIG9wdGlvbmFsLCByZXBlYXQgfSA9IHBhcnNlUGFyYW1ldGVyKHNlZ21lbnQuc2xpY2UoMSwgLTEpKVxuICAgICAgICBncm91cHNba2V5XSA9IHsgcG9zOiBncm91cEluZGV4KyssIHJlcGVhdCwgb3B0aW9uYWwgfVxuICAgICAgICByZXR1cm4gcmVwZWF0ID8gKG9wdGlvbmFsID8gJyg/Oi8oLis/KSk/JyA6ICcvKC4rPyknKSA6ICcvKFteL10rPyknXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gYC8ke2VzY2FwZVJlZ2V4KHNlZ21lbnQpfWBcbiAgICAgIH1cbiAgICB9KVxuICAgIC5qb2luKCcnKVxuXG4gIC8vIGRlYWQgY29kZSBlbGltaW5hdGUgZm9yIGJyb3dzZXIgc2luY2UgaXQncyBvbmx5IG5lZWRlZFxuICAvLyB3aGlsZSBnZW5lcmF0aW5nIHJvdXRlcy1tYW5pZmVzdFxuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBsZXQgcm91dGVLZXlDaGFyQ29kZSA9IDk3XG4gICAgbGV0IHJvdXRlS2V5Q2hhckxlbmd0aCA9IDFcblxuICAgIC8vIGJ1aWxkcyBhIG1pbmltYWwgcm91dGVLZXkgdXNpbmcgb25seSBhLXogYW5kIG1pbmltYWwgbnVtYmVyIG9mIGNoYXJhY3RlcnNcbiAgICBjb25zdCBnZXRTYWZlUm91dGVLZXkgPSAoKSA9PiB7XG4gICAgICBsZXQgcm91dGVLZXkgPSAnJ1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvdXRlS2V5Q2hhckxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHJvdXRlS2V5ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUocm91dGVLZXlDaGFyQ29kZSlcbiAgICAgICAgcm91dGVLZXlDaGFyQ29kZSsrXG5cbiAgICAgICAgaWYgKHJvdXRlS2V5Q2hhckNvZGUgPiAxMjIpIHtcbiAgICAgICAgICByb3V0ZUtleUNoYXJMZW5ndGgrK1xuICAgICAgICAgIHJvdXRlS2V5Q2hhckNvZGUgPSA5N1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gcm91dGVLZXlcbiAgICB9XG5cbiAgICBjb25zdCByb3V0ZUtleXM6IHsgW25hbWVkOiBzdHJpbmddOiBzdHJpbmcgfSA9IHt9XG5cbiAgICBsZXQgbmFtZWRQYXJhbWV0ZXJpemVkUm91dGUgPSBzZWdtZW50c1xuICAgICAgLm1hcCgoc2VnbWVudCkgPT4ge1xuICAgICAgICBpZiAoc2VnbWVudC5zdGFydHNXaXRoKCdbJykgJiYgc2VnbWVudC5lbmRzV2l0aCgnXScpKSB7XG4gICAgICAgICAgY29uc3QgeyBrZXksIG9wdGlvbmFsLCByZXBlYXQgfSA9IHBhcnNlUGFyYW1ldGVyKHNlZ21lbnQuc2xpY2UoMSwgLTEpKVxuICAgICAgICAgIC8vIHJlcGxhY2UgYW55IG5vbi13b3JkIGNoYXJhY3RlcnMgc2luY2UgdGhleSBjYW4gYnJlYWtcbiAgICAgICAgICAvLyB0aGUgbmFtZWQgcmVnZXhcbiAgICAgICAgICBsZXQgY2xlYW5lZEtleSA9IGtleS5yZXBsYWNlKC9cXFcvZywgJycpXG4gICAgICAgICAgbGV0IGludmFsaWRLZXkgPSBmYWxzZVxuXG4gICAgICAgICAgLy8gY2hlY2sgaWYgdGhlIGtleSBpcyBzdGlsbCBpbnZhbGlkIGFuZCBmYWxsYmFjayB0byB1c2luZyBhIGtub3duXG4gICAgICAgICAgLy8gc2FmZSBrZXlcbiAgICAgICAgICBpZiAoY2xlYW5lZEtleS5sZW5ndGggPT09IDAgfHwgY2xlYW5lZEtleS5sZW5ndGggPiAzMCkge1xuICAgICAgICAgICAgaW52YWxpZEtleSA9IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCFpc05hTihwYXJzZUludChjbGVhbmVkS2V5LnN1YnN0cigwLCAxKSkpKSB7XG4gICAgICAgICAgICBpbnZhbGlkS2V5ID0gdHJ1ZVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChpbnZhbGlkS2V5KSB7XG4gICAgICAgICAgICBjbGVhbmVkS2V5ID0gZ2V0U2FmZVJvdXRlS2V5KClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByb3V0ZUtleXNbY2xlYW5lZEtleV0gPSBrZXlcbiAgICAgICAgICByZXR1cm4gcmVwZWF0XG4gICAgICAgICAgICA/IG9wdGlvbmFsXG4gICAgICAgICAgICAgID8gYCg/Oi8oPzwke2NsZWFuZWRLZXl9Pi4rPykpP2BcbiAgICAgICAgICAgICAgOiBgLyg/PCR7Y2xlYW5lZEtleX0+Lis/KWBcbiAgICAgICAgICAgIDogYC8oPzwke2NsZWFuZWRLZXl9PlteL10rPylgXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGAvJHtlc2NhcGVSZWdleChzZWdtZW50KX1gXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuam9pbignJylcblxuICAgIHJldHVybiB7XG4gICAgICByZTogbmV3IFJlZ0V4cChgXiR7cGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgKSxcbiAgICAgIGdyb3VwcyxcbiAgICAgIHJvdXRlS2V5cyxcbiAgICAgIG5hbWVkUmVnZXg6IGBeJHtuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCxcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHJlOiBuZXcgUmVnRXhwKGBeJHtwYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGApLFxuICAgIGdyb3VwcyxcbiAgfVxufVxuIiwiaW1wb3J0IHsgSW5jb21pbmdNZXNzYWdlLCBTZXJ2ZXJSZXNwb25zZSB9IGZyb20gJ2h0dHAnXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHsgZm9ybWF0VXJsIH0gZnJvbSAnLi9yb3V0ZXIvdXRpbHMvZm9ybWF0LXVybCdcbmltcG9ydCB7IE1hbmlmZXN0SXRlbSB9IGZyb20gJy4uL3NlcnZlci9sb2FkLWNvbXBvbmVudHMnXG5pbXBvcnQgeyBOZXh0Um91dGVyIH0gZnJvbSAnLi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgRW52IH0gZnJvbSAnQG5leHQvZW52J1xuaW1wb3J0IHsgQnVpbGRNYW5pZmVzdCB9IGZyb20gJy4uL3NlcnZlci9nZXQtcGFnZS1maWxlcydcblxuLyoqXG4gKiBUeXBlcyB1c2VkIGJ5IGJvdGggbmV4dCBhbmQgbmV4dC1zZXJ2ZXJcbiAqL1xuXG5leHBvcnQgdHlwZSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgQyBleHRlbmRzIEJhc2VDb250ZXh0ID0gTmV4dFBhZ2VDb250ZXh0LFxuICBJUCA9IHt9LFxuICBQID0ge31cbj4gPSBDb21wb25lbnRUeXBlPFA+ICYge1xuICAvKipcbiAgICogVXNlZCBmb3IgaW5pdGlhbCBwYWdlIGxvYWQgZGF0YSBwb3B1bGF0aW9uLiBEYXRhIHJldHVybmVkIGZyb20gYGdldEluaXRpYWxQcm9wc2AgaXMgc2VyaWFsaXplZCB3aGVuIHNlcnZlciByZW5kZXJlZC5cbiAgICogTWFrZSBzdXJlIHRvIHJldHVybiBwbGFpbiBgT2JqZWN0YCB3aXRob3V0IHVzaW5nIGBEYXRlYCwgYE1hcGAsIGBTZXRgLlxuICAgKiBAcGFyYW0gY3R4IENvbnRleHQgb2YgYHBhZ2VgXG4gICAqL1xuICBnZXRJbml0aWFsUHJvcHM/KGNvbnRleHQ6IEMpOiBJUCB8IFByb21pc2U8SVA+XG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50VHlwZSA9IE5leHRDb21wb25lbnRUeXBlPFxuICBEb2N1bWVudENvbnRleHQsXG4gIERvY3VtZW50SW5pdGlhbFByb3BzLFxuICBEb2N1bWVudFByb3BzXG4+ICYge1xuICByZW5kZXJEb2N1bWVudChcbiAgICBEb2N1bWVudDogRG9jdW1lbnRUeXBlLFxuICAgIHByb3BzOiBEb2N1bWVudFByb3BzXG4gICk6IFJlYWN0LlJlYWN0RWxlbWVudFxufVxuXG5leHBvcnQgdHlwZSBBcHBUeXBlID0gTmV4dENvbXBvbmVudFR5cGU8XG4gIEFwcENvbnRleHRUeXBlLFxuICBBcHBJbml0aWFsUHJvcHMsXG4gIEFwcFByb3BzVHlwZVxuPlxuXG5leHBvcnQgdHlwZSBBcHBUcmVlVHlwZSA9IENvbXBvbmVudFR5cGU8XG4gIEFwcEluaXRpYWxQcm9wcyAmIHsgW25hbWU6IHN0cmluZ106IGFueSB9XG4+XG5cbi8qKlxuICogV2ViIHZpdGFscyBwcm92aWRlZCB0byBfYXBwLnJlcG9ydFdlYlZpdGFscyBieSBDb3JlIFdlYiBWaXRhbHMgcGx1Z2luIGRldmVsb3BlZCBieSBHb29nbGUgQ2hyb21lIHRlYW0uXG4gKiBodHRwczovL25leHRqcy5vcmcvYmxvZy9uZXh0LTktNCNpbnRlZ3JhdGVkLXdlYi12aXRhbHMtcmVwb3J0aW5nXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRXZWJWaXRhbHNNZXRyaWMgPSB7XG4gIGlkOiBzdHJpbmdcbiAgbGFiZWw6IHN0cmluZ1xuICBuYW1lOiBzdHJpbmdcbiAgc3RhcnRUaW1lOiBudW1iZXJcbiAgdmFsdWU6IG51bWJlclxufVxuXG5leHBvcnQgdHlwZSBFbmhhbmNlcjxDPiA9IChDb21wb25lbnQ6IEMpID0+IENcblxuZXhwb3J0IHR5cGUgQ29tcG9uZW50c0VuaGFuY2VyID1cbiAgfCB7XG4gICAgICBlbmhhbmNlQXBwPzogRW5oYW5jZXI8QXBwVHlwZT5cbiAgICAgIGVuaGFuY2VDb21wb25lbnQ/OiBFbmhhbmNlcjxOZXh0Q29tcG9uZW50VHlwZT5cbiAgICB9XG4gIHwgRW5oYW5jZXI8TmV4dENvbXBvbmVudFR5cGU+XG5cbmV4cG9ydCB0eXBlIFJlbmRlclBhZ2VSZXN1bHQgPSB7XG4gIGh0bWw6IHN0cmluZ1xuICBoZWFkPzogQXJyYXk8SlNYLkVsZW1lbnQgfCBudWxsPlxufVxuXG5leHBvcnQgdHlwZSBSZW5kZXJQYWdlID0gKFxuICBvcHRpb25zPzogQ29tcG9uZW50c0VuaGFuY2VyXG4pID0+IFJlbmRlclBhZ2VSZXN1bHQgfCBQcm9taXNlPFJlbmRlclBhZ2VSZXN1bHQ+XG5cbmV4cG9ydCB0eXBlIEJhc2VDb250ZXh0ID0ge1xuICByZXM/OiBTZXJ2ZXJSZXNwb25zZVxuICBbazogc3RyaW5nXTogYW55XG59XG5cbmV4cG9ydCB0eXBlIE5FWFRfREFUQSA9IHtcbiAgcHJvcHM6IFJlY29yZDxzdHJpbmcsIGFueT5cbiAgcGFnZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBidWlsZElkOiBzdHJpbmdcbiAgYXNzZXRQcmVmaXg/OiBzdHJpbmdcbiAgcnVudGltZUNvbmZpZz86IHsgW2tleTogc3RyaW5nXTogYW55IH1cbiAgbmV4dEV4cG9ydD86IGJvb2xlYW5cbiAgYXV0b0V4cG9ydD86IGJvb2xlYW5cbiAgaXNGYWxsYmFjaz86IGJvb2xlYW5cbiAgZHluYW1pY0lkcz86IHN0cmluZ1tdXG4gIGVycj86IEVycm9yICYgeyBzdGF0dXNDb2RlPzogbnVtYmVyIH1cbiAgZ3NwPzogYm9vbGVhblxuICBnc3NwPzogYm9vbGVhblxuICBjdXN0b21TZXJ2ZXI/OiBib29sZWFuXG4gIGdpcD86IGJvb2xlYW5cbiAgYXBwR2lwPzogYm9vbGVhblxuICBsb2NhbGU/OiBzdHJpbmdcbiAgbG9jYWxlcz86IHN0cmluZ1tdXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbn1cblxuLyoqXG4gKiBgTmV4dGAgY29udGV4dFxuICovXG5leHBvcnQgaW50ZXJmYWNlIE5leHRQYWdlQ29udGV4dCB7XG4gIC8qKlxuICAgKiBFcnJvciBvYmplY3QgaWYgZW5jb3VudGVyZWQgZHVyaW5nIHJlbmRlcmluZ1xuICAgKi9cbiAgZXJyPzogKEVycm9yICYgeyBzdGF0dXNDb2RlPzogbnVtYmVyIH0pIHwgbnVsbFxuICAvKipcbiAgICogYEhUVFBgIHJlcXVlc3Qgb2JqZWN0LlxuICAgKi9cbiAgcmVxPzogSW5jb21pbmdNZXNzYWdlXG4gIC8qKlxuICAgKiBgSFRUUGAgcmVzcG9uc2Ugb2JqZWN0LlxuICAgKi9cbiAgcmVzPzogU2VydmVyUmVzcG9uc2VcbiAgLyoqXG4gICAqIFBhdGggc2VjdGlvbiBvZiBgVVJMYC5cbiAgICovXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgLyoqXG4gICAqIFF1ZXJ5IHN0cmluZyBzZWN0aW9uIG9mIGBVUkxgIHBhcnNlZCBhcyBhbiBvYmplY3QuXG4gICAqL1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgLyoqXG4gICAqIGBTdHJpbmdgIG9mIHRoZSBhY3R1YWwgcGF0aCBpbmNsdWRpbmcgcXVlcnkuXG4gICAqL1xuICBhc1BhdGg/OiBzdHJpbmdcbiAgLyoqXG4gICAqIGBDb21wb25lbnRgIHRoZSB0cmVlIG9mIHRoZSBBcHAgdG8gdXNlIGlmIG5lZWRpbmcgdG8gcmVuZGVyIHNlcGFyYXRlbHlcbiAgICovXG4gIEFwcFRyZWU6IEFwcFRyZWVUeXBlXG59XG5cbmV4cG9ydCB0eXBlIEFwcENvbnRleHRUeXBlPFIgZXh0ZW5kcyBOZXh0Um91dGVyID0gTmV4dFJvdXRlcj4gPSB7XG4gIENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8TmV4dFBhZ2VDb250ZXh0PlxuICBBcHBUcmVlOiBBcHBUcmVlVHlwZVxuICBjdHg6IE5leHRQYWdlQ29udGV4dFxuICByb3V0ZXI6IFJcbn1cblxuZXhwb3J0IHR5cGUgQXBwSW5pdGlhbFByb3BzID0ge1xuICBwYWdlUHJvcHM6IGFueVxufVxuXG5leHBvcnQgdHlwZSBBcHBQcm9wc1R5cGU8XG4gIFIgZXh0ZW5kcyBOZXh0Um91dGVyID0gTmV4dFJvdXRlcixcbiAgUCA9IHt9XG4+ID0gQXBwSW5pdGlhbFByb3BzICYge1xuICBDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPE5leHRQYWdlQ29udGV4dCwgYW55LCBQPlxuICByb3V0ZXI6IFJcbiAgX19OX1NTRz86IGJvb2xlYW5cbiAgX19OX1NTUD86IGJvb2xlYW5cbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRDb250ZXh0ID0gTmV4dFBhZ2VDb250ZXh0ICYge1xuICByZW5kZXJQYWdlOiBSZW5kZXJQYWdlXG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50SW5pdGlhbFByb3BzID0gUmVuZGVyUGFnZVJlc3VsdCAmIHtcbiAgc3R5bGVzPzogUmVhY3QuUmVhY3RFbGVtZW50W10gfCBSZWFjdC5SZWFjdEZyYWdtZW50XG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50UHJvcHMgPSBEb2N1bWVudEluaXRpYWxQcm9wcyAmIHtcbiAgX19ORVhUX0RBVEFfXzogTkVYVF9EQVRBXG4gIGRhbmdlcm91c0FzUGF0aDogc3RyaW5nXG4gIGRvY0NvbXBvbmVudHNSZW5kZXJlZDoge1xuICAgIEh0bWw/OiBib29sZWFuXG4gICAgTWFpbj86IGJvb2xlYW5cbiAgICBIZWFkPzogYm9vbGVhblxuICAgIE5leHRTY3JpcHQ/OiBib29sZWFuXG4gIH1cbiAgYnVpbGRNYW5pZmVzdDogQnVpbGRNYW5pZmVzdFxuICBhbXBQYXRoOiBzdHJpbmdcbiAgaW5BbXBNb2RlOiBib29sZWFuXG4gIGh5YnJpZEFtcDogYm9vbGVhblxuICBpc0RldmVsb3BtZW50OiBib29sZWFuXG4gIGR5bmFtaWNJbXBvcnRzOiBNYW5pZmVzdEl0ZW1bXVxuICBhc3NldFByZWZpeD86IHN0cmluZ1xuICBjYW5vbmljYWxCYXNlOiBzdHJpbmdcbiAgaGVhZFRhZ3M6IGFueVtdXG4gIHVuc3RhYmxlX3J1bnRpbWVKUz86IGZhbHNlXG4gIGRldk9ubHlDYWNoZUJ1c3RlclF1ZXJ5U3RyaW5nOiBzdHJpbmdcbiAgbG9jYWxlPzogc3RyaW5nXG59XG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSByZXF1ZXN0XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTmV4dEFwaVJlcXVlc3QgZXh0ZW5kcyBJbmNvbWluZ01lc3NhZ2Uge1xuICAvKipcbiAgICogT2JqZWN0IG9mIGBxdWVyeWAgdmFsdWVzIGZyb20gdXJsXG4gICAqL1xuICBxdWVyeToge1xuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdXG4gIH1cbiAgLyoqXG4gICAqIE9iamVjdCBvZiBgY29va2llc2AgZnJvbSBoZWFkZXJcbiAgICovXG4gIGNvb2tpZXM6IHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmdcbiAgfVxuXG4gIGJvZHk6IGFueVxuXG4gIGVudjogRW52XG5cbiAgcHJldmlldz86IGJvb2xlYW5cbiAgLyoqXG4gICAqIFByZXZpZXcgZGF0YSBzZXQgb24gdGhlIHJlcXVlc3QsIGlmIGFueVxuICAgKiAqL1xuICBwcmV2aWV3RGF0YT86IGFueVxufVxuXG4vKipcbiAqIFNlbmQgYm9keSBvZiByZXNwb25zZVxuICovXG50eXBlIFNlbmQ8VD4gPSAoYm9keTogVCkgPT4gdm9pZFxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgcmVzcG9uc2VcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dEFwaVJlc3BvbnNlPFQgPSBhbnk+ID0gU2VydmVyUmVzcG9uc2UgJiB7XG4gIC8qKlxuICAgKiBTZW5kIGRhdGEgYGFueWAgZGF0YSBpbiByZXNwb25zZVxuICAgKi9cbiAgc2VuZDogU2VuZDxUPlxuICAvKipcbiAgICogU2VuZCBkYXRhIGBqc29uYCBkYXRhIGluIHJlc3BvbnNlXG4gICAqL1xuICBqc29uOiBTZW5kPFQ+XG4gIHN0YXR1czogKHN0YXR1c0NvZGU6IG51bWJlcikgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIHJlZGlyZWN0KHVybDogc3RyaW5nKTogTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIHJlZGlyZWN0KHN0YXR1czogbnVtYmVyLCB1cmw6IHN0cmluZyk6IE5leHRBcGlSZXNwb25zZTxUPlxuXG4gIC8qKlxuICAgKiBTZXQgcHJldmlldyBkYXRhIGZvciBOZXh0LmpzJyBwcmVyZW5kZXIgbW9kZVxuICAgKi9cbiAgc2V0UHJldmlld0RhdGE6IChcbiAgICBkYXRhOiBvYmplY3QgfCBzdHJpbmcsXG4gICAgb3B0aW9ucz86IHtcbiAgICAgIC8qKlxuICAgICAgICogU3BlY2lmaWVzIHRoZSBudW1iZXIgKGluIHNlY29uZHMpIGZvciB0aGUgcHJldmlldyBzZXNzaW9uIHRvIGxhc3QgZm9yLlxuICAgICAgICogVGhlIGdpdmVuIG51bWJlciB3aWxsIGJlIGNvbnZlcnRlZCB0byBhbiBpbnRlZ2VyIGJ5IHJvdW5kaW5nIGRvd24uXG4gICAgICAgKiBCeSBkZWZhdWx0LCBubyBtYXhpbXVtIGFnZSBpcyBzZXQgYW5kIHRoZSBwcmV2aWV3IHNlc3Npb24gZmluaXNoZXNcbiAgICAgICAqIHdoZW4gdGhlIGNsaWVudCBzaHV0cyBkb3duIChicm93c2VyIGlzIGNsb3NlZCkuXG4gICAgICAgKi9cbiAgICAgIG1heEFnZT86IG51bWJlclxuICAgIH1cbiAgKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgY2xlYXJQcmV2aWV3RGF0YTogKCkgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG59XG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSBoYW5kbGVyXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRBcGlIYW5kbGVyPFQgPSBhbnk+ID0gKFxuICByZXE6IE5leHRBcGlSZXF1ZXN0LFxuICByZXM6IE5leHRBcGlSZXNwb25zZTxUPlxuKSA9PiB2b2lkIHwgUHJvbWlzZTx2b2lkPlxuXG4vKipcbiAqIFV0aWxzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBleGVjT25jZTxUIGV4dGVuZHMgKC4uLmFyZ3M6IGFueVtdKSA9PiBSZXR1cm5UeXBlPFQ+PihcbiAgZm46IFRcbik6IFQge1xuICBsZXQgdXNlZCA9IGZhbHNlXG4gIGxldCByZXN1bHQ6IFJldHVyblR5cGU8VD5cblxuICByZXR1cm4gKCguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgIGlmICghdXNlZCkge1xuICAgICAgdXNlZCA9IHRydWVcbiAgICAgIHJlc3VsdCA9IGZuKC4uLmFyZ3MpXG4gICAgfVxuICAgIHJldHVybiByZXN1bHRcbiAgfSkgYXMgVFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TG9jYXRpb25PcmlnaW4oKSB7XG4gIGNvbnN0IHsgcHJvdG9jb2wsIGhvc3RuYW1lLCBwb3J0IH0gPSB3aW5kb3cubG9jYXRpb25cbiAgcmV0dXJuIGAke3Byb3RvY29sfS8vJHtob3N0bmFtZX0ke3BvcnQgPyAnOicgKyBwb3J0IDogJyd9YFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VVJMKCkge1xuICBjb25zdCB7IGhyZWYgfSA9IHdpbmRvdy5sb2NhdGlvblxuICBjb25zdCBvcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG4gIHJldHVybiBocmVmLnN1YnN0cmluZyhvcmlnaW4ubGVuZ3RoKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGlzcGxheU5hbWU8UD4oQ29tcG9uZW50OiBDb21wb25lbnRUeXBlPFA+KSB7XG4gIHJldHVybiB0eXBlb2YgQ29tcG9uZW50ID09PSAnc3RyaW5nJ1xuICAgID8gQ29tcG9uZW50XG4gICAgOiBDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1Jlc1NlbnQocmVzOiBTZXJ2ZXJSZXNwb25zZSkge1xuICByZXR1cm4gcmVzLmZpbmlzaGVkIHx8IHJlcy5oZWFkZXJzU2VudFxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9hZEdldEluaXRpYWxQcm9wczxcbiAgQyBleHRlbmRzIEJhc2VDb250ZXh0LFxuICBJUCA9IHt9LFxuICBQID0ge31cbj4oQXBwOiBOZXh0Q29tcG9uZW50VHlwZTxDLCBJUCwgUD4sIGN0eDogQyk6IFByb21pc2U8SVA+IHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoQXBwLnByb3RvdHlwZT8uZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShcbiAgICAgICAgQXBwXG4gICAgICApfS5nZXRJbml0aWFsUHJvcHMoKVwiIGlzIGRlZmluZWQgYXMgYW4gaW5zdGFuY2UgbWV0aG9kIC0gdmlzaXQgaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvZ2V0LWluaXRpYWwtcHJvcHMtYXMtYW4taW5zdGFuY2UtbWV0aG9kIGZvciBtb3JlIGluZm9ybWF0aW9uLmBcbiAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICAgIH1cbiAgfVxuICAvLyB3aGVuIGNhbGxlZCBmcm9tIF9hcHAgYGN0eGAgaXMgbmVzdGVkIGluIGBjdHhgXG4gIGNvbnN0IHJlcyA9IGN0eC5yZXMgfHwgKGN0eC5jdHggJiYgY3R4LmN0eC5yZXMpXG5cbiAgaWYgKCFBcHAuZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgaWYgKGN0eC5jdHggJiYgY3R4LkNvbXBvbmVudCkge1xuICAgICAgLy8gQHRzLWlnbm9yZSBwYWdlUHJvcHMgZGVmYXVsdFxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcGFnZVByb3BzOiBhd2FpdCBsb2FkR2V0SW5pdGlhbFByb3BzKGN0eC5Db21wb25lbnQsIGN0eC5jdHgpLFxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4ge30gYXMgSVBcbiAgfVxuXG4gIGNvbnN0IHByb3BzID0gYXdhaXQgQXBwLmdldEluaXRpYWxQcm9wcyhjdHgpXG5cbiAgaWYgKHJlcyAmJiBpc1Jlc1NlbnQocmVzKSkge1xuICAgIHJldHVybiBwcm9wc1xuICB9XG5cbiAgaWYgKCFwcm9wcykge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBgXCIke2dldERpc3BsYXlOYW1lKFxuICAgICAgQXBwXG4gICAgKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBzaG91bGQgcmVzb2x2ZSB0byBhbiBvYmplY3QuIEJ1dCBmb3VuZCBcIiR7cHJvcHN9XCIgaW5zdGVhZC5gXG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gIH1cblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChPYmplY3Qua2V5cyhwcm9wcykubGVuZ3RoID09PSAwICYmICFjdHguY3R4KSB7XG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgIGAke2dldERpc3BsYXlOYW1lKFxuICAgICAgICAgIEFwcFxuICAgICAgICApfSByZXR1cm5lZCBhbiBlbXB0eSBvYmplY3QgZnJvbSBcXGBnZXRJbml0aWFsUHJvcHNcXGAuIFRoaXMgZGUtb3B0aW1pemVzIGFuZCBwcmV2ZW50cyBhdXRvbWF0aWMgc3RhdGljIG9wdGltaXphdGlvbi4gaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvZW1wdHktb2JqZWN0LWdldEluaXRpYWxQcm9wc2BcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcHJvcHNcbn1cblxuZXhwb3J0IGNvbnN0IHVybE9iamVjdEtleXMgPSBbXG4gICdhdXRoJyxcbiAgJ2hhc2gnLFxuICAnaG9zdCcsXG4gICdob3N0bmFtZScsXG4gICdocmVmJyxcbiAgJ3BhdGgnLFxuICAncGF0aG5hbWUnLFxuICAncG9ydCcsXG4gICdwcm90b2NvbCcsXG4gICdxdWVyeScsXG4gICdzZWFyY2gnLFxuICAnc2xhc2hlcycsXG5dXG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRXaXRoVmFsaWRhdGlvbih1cmw6IFVybE9iamVjdCk6IHN0cmluZyB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgIGlmICh1cmwgIT09IG51bGwgJiYgdHlwZW9mIHVybCA9PT0gJ29iamVjdCcpIHtcbiAgICAgIE9iamVjdC5rZXlzKHVybCkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGlmICh1cmxPYmplY3RLZXlzLmluZGV4T2Yoa2V5KSA9PT0gLTEpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICBgVW5rbm93biBrZXkgcGFzc2VkIHZpYSB1cmxPYmplY3QgaW50byB1cmwuZm9ybWF0OiAke2tleX1gXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmb3JtYXRVcmwodXJsKVxufVxuXG5leHBvcnQgY29uc3QgU1AgPSB0eXBlb2YgcGVyZm9ybWFuY2UgIT09ICd1bmRlZmluZWQnXG5leHBvcnQgY29uc3QgU1QgPVxuICBTUCAmJlxuICB0eXBlb2YgcGVyZm9ybWFuY2UubWFyayA9PT0gJ2Z1bmN0aW9uJyAmJlxuICB0eXBlb2YgcGVyZm9ybWFuY2UubWVhc3VyZSA9PT0gJ2Z1bmN0aW9uJ1xuIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5ub3JtYWxpemVQYXRoU2VwPW5vcm1hbGl6ZVBhdGhTZXA7ZXhwb3J0cy5kZW5vcm1hbGl6ZVBhZ2VQYXRoPWRlbm9ybWFsaXplUGFnZVBhdGg7ZnVuY3Rpb24gbm9ybWFsaXplUGF0aFNlcChwYXRoKXtyZXR1cm4gcGF0aC5yZXBsYWNlKC9cXFxcL2csJy8nKTt9ZnVuY3Rpb24gZGVub3JtYWxpemVQYWdlUGF0aChwYWdlKXtwYWdlPW5vcm1hbGl6ZVBhdGhTZXAocGFnZSk7aWYocGFnZS5zdGFydHNXaXRoKCcvaW5kZXgvJykpe3BhZ2U9cGFnZS5zbGljZSg2KTt9ZWxzZSBpZihwYWdlPT09Jy9pbmRleCcpe3BhZ2U9Jy8nO31yZXR1cm4gcGFnZTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanMubWFwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvY2xpZW50L2xpbmsnKVxuIiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZlwiKTtcblxuZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICBpZiAodHlwZW9mIFdlYWtNYXAgIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIG51bGw7XG4gIHZhciBjYWNoZSA9IG5ldyBXZWFrTWFwKCk7XG5cbiAgX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlID0gZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICAgIHJldHVybiBjYWNoZTtcbiAgfTtcblxuICByZXR1cm4gY2FjaGU7XG59XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikge1xuICBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7XG4gICAgcmV0dXJuIG9iajtcbiAgfVxuXG4gIGlmIChvYmogPT09IG51bGwgfHwgX3R5cGVvZihvYmopICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBvYmogIT09IFwiZnVuY3Rpb25cIikge1xuICAgIHJldHVybiB7XG4gICAgICBcImRlZmF1bHRcIjogb2JqXG4gICAgfTtcbiAgfVxuXG4gIHZhciBjYWNoZSA9IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpO1xuXG4gIGlmIChjYWNoZSAmJiBjYWNoZS5oYXMob2JqKSkge1xuICAgIHJldHVybiBjYWNoZS5nZXQob2JqKTtcbiAgfVxuXG4gIHZhciBuZXdPYmogPSB7fTtcbiAgdmFyIGhhc1Byb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG4gIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgdmFyIGRlc2MgPSBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KSA6IG51bGw7XG5cbiAgICAgIGlmIChkZXNjICYmIChkZXNjLmdldCB8fCBkZXNjLnNldCkpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCBkZXNjKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld09ialtrZXldID0gb2JqW2tleV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajtcblxuICBpZiAoY2FjaGUpIHtcbiAgICBjYWNoZS5zZXQob2JqLCBuZXdPYmopO1xuICB9XG5cbiAgcmV0dXJuIG5ld09iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZDsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2Y7IiwiLyoqIEBsaWNlbnNlIFJlYWN0IHYxNi4xMy4xXG4gKiByZWFjdC1pcy5kZXZlbG9wbWVudC5qc1xuICpcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuXG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgKGZ1bmN0aW9uKCkge1xuJ3VzZSBzdHJpY3QnO1xuXG4vLyBUaGUgU3ltYm9sIHVzZWQgdG8gdGFnIHRoZSBSZWFjdEVsZW1lbnQtbGlrZSB0eXBlcy4gSWYgdGhlcmUgaXMgbm8gbmF0aXZlIFN5bWJvbFxuLy8gbm9yIHBvbHlmaWxsLCB0aGVuIGEgcGxhaW4gbnVtYmVyIGlzIHVzZWQgZm9yIHBlcmZvcm1hbmNlLlxudmFyIGhhc1N5bWJvbCA9IHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgU3ltYm9sLmZvcjtcbnZhciBSRUFDVF9FTEVNRU5UX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5lbGVtZW50JykgOiAweGVhYzc7XG52YXIgUkVBQ1RfUE9SVEFMX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5wb3J0YWwnKSA6IDB4ZWFjYTtcbnZhciBSRUFDVF9GUkFHTUVOVF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuZnJhZ21lbnQnKSA6IDB4ZWFjYjtcbnZhciBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3Quc3RyaWN0X21vZGUnKSA6IDB4ZWFjYztcbnZhciBSRUFDVF9QUk9GSUxFUl9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QucHJvZmlsZXInKSA6IDB4ZWFkMjtcbnZhciBSRUFDVF9QUk9WSURFUl9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QucHJvdmlkZXInKSA6IDB4ZWFjZDtcbnZhciBSRUFDVF9DT05URVhUX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5jb250ZXh0JykgOiAweGVhY2U7IC8vIFRPRE86IFdlIGRvbid0IHVzZSBBc3luY01vZGUgb3IgQ29uY3VycmVudE1vZGUgYW55bW9yZS4gVGhleSB3ZXJlIHRlbXBvcmFyeVxuLy8gKHVuc3RhYmxlKSBBUElzIHRoYXQgaGF2ZSBiZWVuIHJlbW92ZWQuIENhbiB3ZSByZW1vdmUgdGhlIHN5bWJvbHM/XG5cbnZhciBSRUFDVF9BU1lOQ19NT0RFX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5hc3luY19tb2RlJykgOiAweGVhY2Y7XG52YXIgUkVBQ1RfQ09OQ1VSUkVOVF9NT0RFX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5jb25jdXJyZW50X21vZGUnKSA6IDB4ZWFjZjtcbnZhciBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuZm9yd2FyZF9yZWYnKSA6IDB4ZWFkMDtcbnZhciBSRUFDVF9TVVNQRU5TRV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3Quc3VzcGVuc2UnKSA6IDB4ZWFkMTtcbnZhciBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5zdXNwZW5zZV9saXN0JykgOiAweGVhZDg7XG52YXIgUkVBQ1RfTUVNT19UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QubWVtbycpIDogMHhlYWQzO1xudmFyIFJFQUNUX0xBWllfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmxhenknKSA6IDB4ZWFkNDtcbnZhciBSRUFDVF9CTE9DS19UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuYmxvY2snKSA6IDB4ZWFkOTtcbnZhciBSRUFDVF9GVU5EQU1FTlRBTF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuZnVuZGFtZW50YWwnKSA6IDB4ZWFkNTtcbnZhciBSRUFDVF9SRVNQT05ERVJfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnJlc3BvbmRlcicpIDogMHhlYWQ2O1xudmFyIFJFQUNUX1NDT1BFX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5zY29wZScpIDogMHhlYWQ3O1xuXG5mdW5jdGlvbiBpc1ZhbGlkRWxlbWVudFR5cGUodHlwZSkge1xuICByZXR1cm4gdHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nIHx8IC8vIE5vdGU6IGl0cyB0eXBlb2YgbWlnaHQgYmUgb3RoZXIgdGhhbiAnc3ltYm9sJyBvciAnbnVtYmVyJyBpZiBpdCdzIGEgcG9seWZpbGwuXG4gIHR5cGUgPT09IFJFQUNUX0ZSQUdNRU5UX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfQ09OQ1VSUkVOVF9NT0RFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfUFJPRklMRVJfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NVU1BFTlNFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFIHx8IHR5cGVvZiB0eXBlID09PSAnb2JqZWN0JyAmJiB0eXBlICE9PSBudWxsICYmICh0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9MQVpZX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTUVNT19UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX1BST1ZJREVSX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfQ09OVEVYVF9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRlVOREFNRU5UQUxfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9SRVNQT05ERVJfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9TQ09QRV9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0JMT0NLX1RZUEUpO1xufVxuXG5mdW5jdGlvbiB0eXBlT2Yob2JqZWN0KSB7XG4gIGlmICh0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0JyAmJiBvYmplY3QgIT09IG51bGwpIHtcbiAgICB2YXIgJCR0eXBlb2YgPSBvYmplY3QuJCR0eXBlb2Y7XG5cbiAgICBzd2l0Y2ggKCQkdHlwZW9mKSB7XG4gICAgICBjYXNlIFJFQUNUX0VMRU1FTlRfVFlQRTpcbiAgICAgICAgdmFyIHR5cGUgPSBvYmplY3QudHlwZTtcblxuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICBjYXNlIFJFQUNUX0FTWU5DX01PREVfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfRlJBR01FTlRfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1BST0ZJTEVSX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfVFlQRTpcbiAgICAgICAgICAgIHJldHVybiB0eXBlO1xuXG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHZhciAkJHR5cGVvZlR5cGUgPSB0eXBlICYmIHR5cGUuJCR0eXBlb2Y7XG5cbiAgICAgICAgICAgIHN3aXRjaCAoJCR0eXBlb2ZUeXBlKSB7XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfQ09OVEVYVF9UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfTEFaWV9UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX01FTU9fVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9QUk9WSURFUl9UWVBFOlxuICAgICAgICAgICAgICAgIHJldHVybiAkJHR5cGVvZlR5cGU7XG5cbiAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gJCR0eXBlb2Y7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICBjYXNlIFJFQUNUX1BPUlRBTF9UWVBFOlxuICAgICAgICByZXR1cm4gJCR0eXBlb2Y7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn0gLy8gQXN5bmNNb2RlIGlzIGRlcHJlY2F0ZWQgYWxvbmcgd2l0aCBpc0FzeW5jTW9kZVxuXG52YXIgQXN5bmNNb2RlID0gUkVBQ1RfQVNZTkNfTU9ERV9UWVBFO1xudmFyIENvbmN1cnJlbnRNb2RlID0gUkVBQ1RfQ09OQ1VSUkVOVF9NT0RFX1RZUEU7XG52YXIgQ29udGV4dENvbnN1bWVyID0gUkVBQ1RfQ09OVEVYVF9UWVBFO1xudmFyIENvbnRleHRQcm92aWRlciA9IFJFQUNUX1BST1ZJREVSX1RZUEU7XG52YXIgRWxlbWVudCA9IFJFQUNUX0VMRU1FTlRfVFlQRTtcbnZhciBGb3J3YXJkUmVmID0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTtcbnZhciBGcmFnbWVudCA9IFJFQUNUX0ZSQUdNRU5UX1RZUEU7XG52YXIgTGF6eSA9IFJFQUNUX0xBWllfVFlQRTtcbnZhciBNZW1vID0gUkVBQ1RfTUVNT19UWVBFO1xudmFyIFBvcnRhbCA9IFJFQUNUX1BPUlRBTF9UWVBFO1xudmFyIFByb2ZpbGVyID0gUkVBQ1RfUFJPRklMRVJfVFlQRTtcbnZhciBTdHJpY3RNb2RlID0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRTtcbnZhciBTdXNwZW5zZSA9IFJFQUNUX1NVU1BFTlNFX1RZUEU7XG52YXIgaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNBc3luY01vZGUgPSBmYWxzZTsgLy8gQXN5bmNNb2RlIHNob3VsZCBiZSBkZXByZWNhdGVkXG5cbmZ1bmN0aW9uIGlzQXN5bmNNb2RlKG9iamVjdCkge1xuICB7XG4gICAgaWYgKCFoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRJc0FzeW5jTW9kZSkge1xuICAgICAgaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNBc3luY01vZGUgPSB0cnVlOyAvLyBVc2luZyBjb25zb2xlWyd3YXJuJ10gdG8gZXZhZGUgQmFiZWwgYW5kIEVTTGludFxuXG4gICAgICBjb25zb2xlWyd3YXJuJ10oJ1RoZSBSZWFjdElzLmlzQXN5bmNNb2RlKCkgYWxpYXMgaGFzIGJlZW4gZGVwcmVjYXRlZCwgJyArICdhbmQgd2lsbCBiZSByZW1vdmVkIGluIFJlYWN0IDE3Ky4gVXBkYXRlIHlvdXIgY29kZSB0byB1c2UgJyArICdSZWFjdElzLmlzQ29uY3VycmVudE1vZGUoKSBpbnN0ZWFkLiBJdCBoYXMgdGhlIGV4YWN0IHNhbWUgQVBJLicpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBpc0NvbmN1cnJlbnRNb2RlKG9iamVjdCkgfHwgdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0FTWU5DX01PREVfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzQ29uY3VycmVudE1vZGUob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfQ09OQ1VSUkVOVF9NT0RFX1RZUEU7XG59XG5mdW5jdGlvbiBpc0NvbnRleHRDb25zdW1lcihvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9DT05URVhUX1RZUEU7XG59XG5mdW5jdGlvbiBpc0NvbnRleHRQcm92aWRlcihvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9QUk9WSURFUl9UWVBFO1xufVxuZnVuY3Rpb24gaXNFbGVtZW50KG9iamVjdCkge1xuICByZXR1cm4gdHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCcgJiYgb2JqZWN0ICE9PSBudWxsICYmIG9iamVjdC4kJHR5cGVvZiA9PT0gUkVBQ1RfRUxFTUVOVF9UWVBFO1xufVxuZnVuY3Rpb24gaXNGb3J3YXJkUmVmKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU7XG59XG5mdW5jdGlvbiBpc0ZyYWdtZW50KG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0ZSQUdNRU5UX1RZUEU7XG59XG5mdW5jdGlvbiBpc0xhenkob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfTEFaWV9UWVBFO1xufVxuZnVuY3Rpb24gaXNNZW1vKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX01FTU9fVFlQRTtcbn1cbmZ1bmN0aW9uIGlzUG9ydGFsKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1BPUlRBTF9UWVBFO1xufVxuZnVuY3Rpb24gaXNQcm9maWxlcihvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9QUk9GSUxFUl9UWVBFO1xufVxuZnVuY3Rpb24gaXNTdHJpY3RNb2RlKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1NUUklDVF9NT0RFX1RZUEU7XG59XG5mdW5jdGlvbiBpc1N1c3BlbnNlKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1NVU1BFTlNFX1RZUEU7XG59XG5cbmV4cG9ydHMuQXN5bmNNb2RlID0gQXN5bmNNb2RlO1xuZXhwb3J0cy5Db25jdXJyZW50TW9kZSA9IENvbmN1cnJlbnRNb2RlO1xuZXhwb3J0cy5Db250ZXh0Q29uc3VtZXIgPSBDb250ZXh0Q29uc3VtZXI7XG5leHBvcnRzLkNvbnRleHRQcm92aWRlciA9IENvbnRleHRQcm92aWRlcjtcbmV4cG9ydHMuRWxlbWVudCA9IEVsZW1lbnQ7XG5leHBvcnRzLkZvcndhcmRSZWYgPSBGb3J3YXJkUmVmO1xuZXhwb3J0cy5GcmFnbWVudCA9IEZyYWdtZW50O1xuZXhwb3J0cy5MYXp5ID0gTGF6eTtcbmV4cG9ydHMuTWVtbyA9IE1lbW87XG5leHBvcnRzLlBvcnRhbCA9IFBvcnRhbDtcbmV4cG9ydHMuUHJvZmlsZXIgPSBQcm9maWxlcjtcbmV4cG9ydHMuU3RyaWN0TW9kZSA9IFN0cmljdE1vZGU7XG5leHBvcnRzLlN1c3BlbnNlID0gU3VzcGVuc2U7XG5leHBvcnRzLmlzQXN5bmNNb2RlID0gaXNBc3luY01vZGU7XG5leHBvcnRzLmlzQ29uY3VycmVudE1vZGUgPSBpc0NvbmN1cnJlbnRNb2RlO1xuZXhwb3J0cy5pc0NvbnRleHRDb25zdW1lciA9IGlzQ29udGV4dENvbnN1bWVyO1xuZXhwb3J0cy5pc0NvbnRleHRQcm92aWRlciA9IGlzQ29udGV4dFByb3ZpZGVyO1xuZXhwb3J0cy5pc0VsZW1lbnQgPSBpc0VsZW1lbnQ7XG5leHBvcnRzLmlzRm9yd2FyZFJlZiA9IGlzRm9yd2FyZFJlZjtcbmV4cG9ydHMuaXNGcmFnbWVudCA9IGlzRnJhZ21lbnQ7XG5leHBvcnRzLmlzTGF6eSA9IGlzTGF6eTtcbmV4cG9ydHMuaXNNZW1vID0gaXNNZW1vO1xuZXhwb3J0cy5pc1BvcnRhbCA9IGlzUG9ydGFsO1xuZXhwb3J0cy5pc1Byb2ZpbGVyID0gaXNQcm9maWxlcjtcbmV4cG9ydHMuaXNTdHJpY3RNb2RlID0gaXNTdHJpY3RNb2RlO1xuZXhwb3J0cy5pc1N1c3BlbnNlID0gaXNTdXNwZW5zZTtcbmV4cG9ydHMuaXNWYWxpZEVsZW1lbnRUeXBlID0gaXNWYWxpZEVsZW1lbnRUeXBlO1xuZXhwb3J0cy50eXBlT2YgPSB0eXBlT2Y7XG4gIH0pKCk7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QtaXMucHJvZHVjdGlvbi5taW4uanMnKTtcbn0gZWxzZSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QtaXMuZGV2ZWxvcG1lbnQuanMnKTtcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCB7IFRoZW1lUHJvdmlkZXIgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XHJcbmltcG9ydCBDc3NCYXNlbGluZSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQ3NzQmFzZWxpbmVcIjtcclxuaW1wb3J0IFBhZ2UgZnJvbSBcIi4uL3NyYy9jb21wb25lbnRzL1BhZ2VcIjtcclxuaW1wb3J0IHRoZW1lIGZyb20gXCIuL3RoZW1lXCI7XHJcbmltcG9ydCB7IEFwb2xsb1Byb3ZpZGVyIH0gZnJvbSBcInJlYWN0LWFwb2xsb1wiO1xyXG5pbXBvcnQgeyBBcG9sbG9Qcm92aWRlciBhcyBBcG9sbG9Ib29rc1Byb3ZpZGVyIH0gZnJvbSBcIkBhcG9sbG8vcmVhY3QtaG9va3NcIjtcclxuaW1wb3J0IHdpdGhEYXRhIGZyb20gXCIuLi9saWIvd2l0aERhdGFcIjtcclxuaW1wb3J0IFwiLi4vc3JjL2NvbXBvbmVudHMvbGF5b3V0L2luZGV4LmNzc1wiXHJcblxyXG5cclxuY29uc3QgTXlBcHAgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7IENvbXBvbmVudCwgcGFnZVByb3BzLCBhcG9sbG8gfSA9IHByb3BzO1xyXG5cclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgLy8gUmVtb3ZlIHRoZSBzZXJ2ZXItc2lkZSBpbmplY3RlZCBDU1MuXHJcbiAgICBjb25zdCBqc3NTdHlsZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2pzcy1zZXJ2ZXItc2lkZVwiKTtcclxuICAgIGlmIChqc3NTdHlsZXMpIHtcclxuICAgICAganNzU3R5bGVzLnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQoanNzU3R5bGVzKTtcclxuICAgIH1cclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT5NeSBwYWdlPC90aXRsZT5cclxuICAgICAgICA8bWV0YVxyXG4gICAgICAgICAgbmFtZT1cInZpZXdwb3J0XCJcclxuICAgICAgICAgIGNvbnRlbnQ9XCJtaW5pbXVtLXNjYWxlPTEsIGluaXRpYWwtc2NhbGU9MSwgd2lkdGg9ZGV2aWNlLXdpZHRoXCJcclxuICAgICAgICAvPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+XHJcbiAgICAgICAgPEFwb2xsb1Byb3ZpZGVyIGNsaWVudD17YXBvbGxvfT5cclxuICAgICAgICAgIDxBcG9sbG9Ib29rc1Byb3ZpZGVyIGNsaWVudD17YXBvbGxvfT5cclxuICAgICAgICAgICAgey8qIENzc0Jhc2VsaW5lIGtpY2tzdGFydCBhbiBlbGVnYW50LCBjb25zaXN0ZW50LCBhbmQgc2ltcGxlIGJhc2VsaW5lIHRvIGJ1aWxkIHVwb24uICovfVxyXG4gICAgICAgICAgICA8UGFnZT5cclxuICAgICAgICAgICAgICA8Q3NzQmFzZWxpbmUgLz5cclxuICAgICAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICAgICAgICAgIDwvUGFnZT5cclxuICAgICAgICAgIDwvQXBvbGxvSG9va3NQcm92aWRlcj5cclxuICAgICAgICA8L0Fwb2xsb1Byb3ZpZGVyPlxyXG4gICAgICA8L1RoZW1lUHJvdmlkZXI+XHJcbiAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICk7XHJcbn07XHJcblxyXG4vLyBNeUFwcC5wcm9wVHlwZXMgPSB7XHJcbi8vICAgQ29tcG9uZW50OiBQcm9wVHlwZXMuZWxlbWVudFR5cGUuaXNSZXF1aXJlZCxcclxuLy8gICBwYWdlUHJvcHM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcclxuLy8gfTtcclxuZXhwb3J0IGRlZmF1bHQgd2l0aERhdGEoTXlBcHApO1xyXG4iLCJpbXBvcnQgeyBjcmVhdGVNdWlUaGVtZSB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcclxuaW1wb3J0IHsgcmVkLCBvcmFuZ2UgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvY29sb3JzXCI7XHJcblxyXG4vLyBDcmVhdGUgYSB0aGVtZSBpbnN0YW5jZS5cclxuY29uc3QgdGhlbWUgPSBjcmVhdGVNdWlUaGVtZSh7XHJcbiAgcGFsZXR0ZToge1xyXG4gICAgcHJpbWFyeToge1xyXG4gICAgICBtYWluOiBcIiM1NTZjZDZcIixcclxuICAgIH0sXHJcbiAgICBzZWNvbmRhcnk6IHtcclxuICAgICAgbWFpbjogXCIjMTk4NTdiXCIsXHJcbiAgICB9LFxyXG4gICAgZXJyb3I6IHtcclxuICAgICAgbWFpbjogcmVkLkE0MDAsXHJcbiAgICB9LFxyXG4gICAgYmFja2dyb3VuZDoge1xyXG4gICAgICBkZWZhdWx0OiBvcmFuZ2UsXHJcbiAgICB9LFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgdGhlbWU7XHJcbiIsImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmNvbnN0IE1ldGEgPSAoKSA9PiAoXHJcblxyXG4gICAgPEhlYWQ+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXCIgLz5cclxuICAgICAgICA8bWV0YSBjaGFyU2V0PVwiVVRGLThcIiAvPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MS4wXCIgLz5cclxuICAgICAgICA8bWV0YSBodHRwRXF1aXY9XCJYLVVBLUNvbXBhdGlibGVcIiBjb250ZW50PVwiaWU9ZWRnZVwiIC8+XHJcbiAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCIvc3RhdGljL2Zhdmljb24ucG5nXCIgLz5cclxuICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cIi9zdGF0aWMvbnByb2dyZXNzLmNzc1wiIC8+XHJcbiAgICAgICAgPHRpdGxlPlNZR0VGRVg8L3RpdGxlPlxyXG4gICAgPC9IZWFkPlxyXG4pO1xyXG5leHBvcnQgZGVmYXVsdCBNZXRhO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBNZXRhIGZyb20gXCIuL01ldGFcIjtcclxuaW1wb3J0IHsgbWFrZVN0eWxlcywgTXVpVGhlbWVQcm92aWRlciB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcclxuaW1wb3J0IFN5Z2VmZXhUaGVtZSBmcm9tIFwiLi91dGlscy9TeWdlZmV4VGhlbWVcIjtcclxuaW1wb3J0IExheW91dERyYXdlciBmcm9tIFwiLi9sYXlvdXQvTGF5b3V0RHJhd2VyXCI7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHtcclxuICByb290OiB7XHJcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXHJcbiAgfSxcclxuXHJcbiAgYWxsQ29udHJvbHM6IHtcclxuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcclxuICB9LFxyXG4gIHdob2xlQXBwOiB7XHJcbiAgICBkaXNwbGF5OiBcImdyaWRcIixcclxuICAgIC8vIGdyaWRUZW1wbGF0ZTogXCJhdXRvIDFmciAgXCIsXHJcbiAgICBiYWNrZ3JvdW5kOiBcIndoaXRlXCIsXHJcbiAgfSxcclxuXHJcbiAgbWFpbnM6IHtcclxuICAgIGdyaWRBcmVhOiBcIm1haW5zXCIsXHJcbiAgICBwYWRkaW5nTGVmdDogXCJhdXRvXCIsXHJcbiAgICBkaXNwbGF5OiBcImdyaWRcIixcclxuICAgIGdyaWRUZW1wbGF0ZVJvd3M6IFwiYXV0byAxZnJcIixcclxuICAgIHBhZGRpbmdUb3A6IFwiMXJlbVwiLFxyXG4gICAgcGFkZGluZ1JpZ2h0OiBcImF1dG9cIixcclxuICB9LFxyXG4gIGZvb3RlcnM6IHtcclxuICAgIGdyaWRBcmVhOiBcIkZvb3RlcnNcIixcclxuICAgIGRpc3BsYXk6IFwiZ3JpZFwiLFxyXG4gICAgZ3JpZFRlbXBsYXRlQ29sdW1uczogXCIxZnIgNGZyXCIsXHJcbiAgICBhbGlnbkl0ZW1zOiBcInJpZ2h0XCIsXHJcbiAgICBncmlkQXJlYTogXCJIZWFkZXJzXCIsXHJcbiAgICBwb3NpdGlvbjogXCJmaXhlZFwiLFxyXG4gICAgaGVpZ2h0OiBcIjFyZW1cIixcclxuICAgIHpJbmRleDogXCIxMFwiLFxyXG4gICAgYm9yZGVyQm90dG9tOiBcIjAuMnJlbSBzb2xpZCAgMC4xcmVtIDAuMDVyZW0gMC41cmVtIHJnYmEoMCwgMCwgMC44LCAwLjUpXCIsXHJcbiAgfSxcclxuICBpbm5lcjoge1xyXG4gICAgLy8gcGxhY2VJdGVtczogXCJjZW50ZXJcIixcclxuICAgIHBhZGRpbmc6IFwiMnJlbVwiLFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuY29uc3QgUGFnZSA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICByZXR1cm4gKFxyXG4gICAgPExheW91dERyYXdlcj5cclxuICAgICAgPE11aVRoZW1lUHJvdmlkZXIgdGhlbWU9e1N5Z2VmZXhUaGVtZX0+XHJcbiAgICAgICAgPE1ldGEgLz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLm1haW5zfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuaW5uZXJ9Pntwcm9wcy5jaGlsZHJlbn08L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L011aVRoZW1lUHJvdmlkZXI+XHJcbiAgICA8L0xheW91dERyYXdlcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGFnZTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgVXNlciBmcm9tIFwiLi4vdXNlci9Vc2VyXCI7XHJcbmltcG9ydCBTaWdub3V0IGZyb20gXCIuLi91c2VyL1NpZ25vdXRcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5cclxuaW1wb3J0IEFwcEJhciBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQXBwQmFyXCI7XHJcbmltcG9ydCBDc3NCYXNlbGluZSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQ3NzQmFzZWxpbmVcIjtcclxuaW1wb3J0IERpdmlkZXIgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0RpdmlkZXJcIjtcclxuaW1wb3J0IEdyaWQgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0dyaWRcIjtcclxuaW1wb3J0IERyYXdlciBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvRHJhd2VyXCI7XHJcbmltcG9ydCBIaWRkZW4gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0hpZGRlblwiO1xyXG5pbXBvcnQgSG9tZUljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9Ib21lXCI7XHJcbmltcG9ydCBSZWNlaXB0SWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL1JlY2VpcHRcIjtcclxuaW1wb3J0IE5vdGlmaWNhdGlvbnNJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTm90aWZpY2F0aW9uc1wiO1xyXG5pbXBvcnQgRGVza3RvcFdpbmRvd3NJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvRGVza3RvcFdpbmRvd3NcIjtcclxuaW1wb3J0IFNldHRpbmdzSWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL1NldHRpbmdzXCI7XHJcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uXCI7XHJcbmltcG9ydCBCdXR0b24gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvblwiO1xyXG5pbXBvcnQgTWVudUljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9NZW51XCI7XHJcbmltcG9ydCBUb29sYmFyIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9Ub29sYmFyXCI7XHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5XCI7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XHJcbmltcG9ydCBTaWRlYmFyIGZyb20gXCIuL1NpZGViYXJcIjtcclxuXHJcbmNvbnN0IGRyYXdlcldpZHRoID0gMzcwO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgcm9vdDoge1xyXG4gICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICBmbGV4RGlyZWN0aW9uOiBcInJvd1wiLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6IFwic3BhY2UtYmV0d2VlblwiLFxyXG4gIH0sXHJcbiAgZHJhd2VyOiB7XHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoXCJzbVwiKV06IHtcclxuICAgICAgd2lkdGg6IGRyYXdlcldpZHRoLFxyXG4gICAgICBmbGV4U2hyaW5rOiAwLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGFwcEJhcjoge1xyXG4gICAgekluZGV4OiB0aGVtZS56SW5kZXguZHJhd2VyICsgMSxcclxuICAgIC8vIFt0aGVtZS5icmVha3BvaW50cy51cChcInNtXCIpXToge1xyXG4gICAgLy8gICB3aWR0aDogYGNhbGMoMTAwJSAtICR7ZHJhd2VyV2lkdGh9cHgpYCxcclxuICAgIC8vICAgbWFyZ2luTGVmdDogZHJhd2VyV2lkdGgsXHJcbiAgICAvLyB9LFxyXG4gIH0sXHJcbiAgbWVudUJ1dHRvbjoge1xyXG4gICAgbWFyZ2luUmlnaHQ6IHRoZW1lLnNwYWNpbmcoMiksXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoXCJzbVwiKV06IHtcclxuICAgICAgZGlzcGxheTogXCJub25lXCIsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgLy8gbmVjZXNzYXJ5IGZvciBjb250ZW50IHRvIGJlIGJlbG93IGFwcCBiYXJcclxuICB0b29sYmFyOiB0aGVtZS5taXhpbnMudG9vbGJhcixcclxuICBkcmF3ZXJQYXBlcjoge1xyXG4gICAgd2lkdGg6IGRyYXdlcldpZHRoLFxyXG4gIH0sXHJcbiAgY29udGVudDoge1xyXG4gICAgZmxleEdyb3c6IDEsXHJcbiAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDMpLFxyXG4gIH0sXHJcblxyXG4gIHVzZXJOYW1lOiB7XHJcbiAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gIH0sXHJcbn0pKTtcclxuXHJcbmNvbnN0IGl0ZW1zID0gW1xyXG4gIFwiZGl2aWRlclwiLFxyXG4gIHtcclxuICAgIHVybDogXCIuLi8uLi9sb2dpblwiLFxyXG4gICAgbmFtZTogXCJob21lXCIsXHJcbiAgICBsYWJlbDogXCJIb21lXCIsXHJcbiAgICBJY29uOiBIb21lSWNvbixcclxuICB9LFxyXG4gIFwiZGl2aWRlclwiLFxyXG4gIHtcclxuICAgIC8vIHVybDogXCIuLi8uLi9jcmVhdGVzL25ld1JlZ2lvblwiLFxyXG4gICAgbmFtZTogXCJhZG1pbmlzdHJhdGlvblwiLFxyXG4gICAgbGFiZWw6IFwiQWRtaW5pc3RyYXRpb25cIixcclxuICAgIEljb246IFJlY2VpcHRJY29uLFxyXG4gICAgaXRlbXM6IFtcclxuICAgICAge1xyXG4gICAgICAgIC8vIHVybDogXCIuLi8uLi9zaG93L3Jlc3VsdHMvY2FuZENvZGVSZXN1bHRzXCIsXHJcbiAgICAgICAgbmFtZTogXCJSZXN1bHRzXCIsXHJcbiAgICAgICAgbGFiZWw6IFwiUmVzdWx0YXRzIENlbnRyZVwiLFxyXG4gICAgICAgIGl0ZW1zOiBbXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHVybDogXCIuLi8uLi9jcmVhdGVzL25ld0NFU1wiLFxyXG4gICAgICAgICAgICBuYW1lOiBcImNlbnRlckdlblJlc3VsdHNcIixcclxuICAgICAgICAgICAgbGFiZWw6IFwiR2VuZXJhbCBwYXIgY2VudHJlXCIsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICB1cmw6IFwiLi4vLi4vY3JlYXRlcy9uZXdDRVNTXCIsXHJcbiAgICAgICAgICAgIG5hbWU6IFwiY2FuZFJlc3VsdHNcIixcclxuICAgICAgICAgICAgbGFiZWw6IFwiQ2FuZGlkYXQgSW5kaXZpZHVlbFwiLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICBdLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgLy8gdXJsOiBcIi4uLy4uL3Nob3cvcmVzdWx0cy9jYW5kQ29kZVJlc3VsdHNcIixcclxuICAgICAgICBuYW1lOiBcImxvY2FsaXphdGlvblwiLFxyXG4gICAgICAgIGxhYmVsOiBcIkluZm8gTG9jYWxpemF0aW9uXCIsXHJcbiAgICAgICAgaXRlbXM6IFtcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgdXJsOiBcIi4uLy4uL3Nob3cvbGlzdHMvYWxsUmVnaW9uc1wiLFxyXG4gICAgICAgICAgICBuYW1lOiBcInJlZ2lvbkxpc3RcIixcclxuICAgICAgICAgICAgbGFiZWw6IFwiUmVnaW9uXCIsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICB1cmw6IFwiLi4vLi4vc2hvdy9saXN0cy9hbGxEaXZzXCIsXHJcbiAgICAgICAgICAgIG5hbWU6IFwiZGl2aXNpb25MaXN0XCIsXHJcbiAgICAgICAgICAgIGxhYmVsOiBcIkRlcGFydGVtZW50XCIsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICB1cmw6IFwiLi4vLi4vc2hvdy9saXN0cy9hbGxTdWJEaXZzXCIsXHJcbiAgICAgICAgICAgIG5hbWU6IFwic3ViRGl2TGlzdFwiLFxyXG4gICAgICAgICAgICBsYWJlbDogXCJBcnJvbmRpc3NlbWVudFwiLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgdXJsOiBcIi4uLy4uL3Nob3cvbGlzdHMvYWxsVG93blwiLFxyXG4gICAgICAgICAgICBuYW1lOiBcInRvd25MaXN0XCIsXHJcbiAgICAgICAgICAgIGxhYmVsOiBcIlZpbGxlXCIsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICB1cmw6IFwiLi4vLi4vc2hvdy9saXN0cy9hbGxDZW50ZXJzXCIsXHJcbiAgICAgICAgICAgIG5hbWU6IFwiY2VudGVyTGlzdFwiLFxyXG4gICAgICAgICAgICBsYWJlbDogXCJDZW50cmVcIixcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHVybDogXCIuLi8uLi9zaG93L2xpc3RzL2NlbnRlckluZm9cIixcclxuICAgICAgICAgICAgbmFtZTogXCJjZW50ZXJMaXN0RGV0YWlsc1wiLFxyXG4gICAgICAgICAgICBsYWJlbDogXCJEZXRhaWxzIENlbnRyZSBcIixcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIC8vIHVybDogXCIuLi8uLi9zaG93L3Jlc3VsdHMvY2FuZENvZGVSZXN1bHRzXCIsXHJcbiAgICAgICAgbmFtZTogXCJTdWJqU2VyaWVzXCIsXHJcbiAgICAgICAgbGFiZWw6IFwiU2VyaWVzICYgTWF0aWVyZXNcIixcclxuICAgICAgICBpdGVtczogW1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICB1cmw6IFwiLi4vLi4vY3JlYXRlcy9uZXdFZHVjVHlwZVwiLFxyXG4gICAgICAgICAgICBuYW1lOiBcImVkdWNUeXBlXCIsXHJcbiAgICAgICAgICAgIGxhYmVsOiBcIlR5cGUgZCdlbnNlaWduZW1lbnRcIixcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHVybDogXCIuLi8uLi9jcmVhdGVzL25ld1N1YmplY3RcIixcclxuICAgICAgICAgICAgbmFtZTogXCJzcGVjaWFsdHlcIixcclxuICAgICAgICAgICAgbGFiZWw6IFwiU2VyaWVzXCIsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICB1cmw6IFwiLi4vLi4vY3JlYXRlcy9uZXdTdWJqZWN0XCIsXHJcbiAgICAgICAgICAgIG5hbWU6IFwic3ViamVjdFwiLFxyXG4gICAgICAgICAgICBsYWJlbDogXCJNYXRpZXJlXCIsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICB1cmw6IFwiLi4vLi4vY3JlYXRlcy9uZXdDRVNcIixcclxuICAgICAgICAgICAgbmFtZTogXCJTdWJqZWN0c1RvU3BlY2lhbHR5XCIsXHJcbiAgICAgICAgICAgIGxhYmVsOiBcIk1hdGllcmVzIGRlcyBzZXJpZXNcIixcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIC8vIHVybDogXCIuLi8uLi9zaG93L3Jlc3VsdHMvY2FuZENvZGVSZXN1bHRzXCIsXHJcbiAgICAgICAgbmFtZTogXCJQaGFzZXNFeGFtZW5cIixcclxuICAgICAgICBsYWJlbDogXCJQaGFzZXMgRXhhbWVuXCIsXHJcbiAgICAgICAgaXRlbXM6IFtcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgdXJsOiBcIi4uLy4uL2NyZWF0ZXMvbmV3UGhhc2VcIixcclxuICAgICAgICAgICAgbmFtZTogXCJleGFtU3RhZ2VzXCIsXHJcbiAgICAgICAgICAgIGxhYmVsOiBcIlBoYXNlXCIsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICB1cmw6IFwiLi4vLi4vY3JlYXRlcy9uZXdSYW5rXCIsXHJcbiAgICAgICAgICAgIG5hbWU6IFwicmFua1wiLFxyXG4gICAgICAgICAgICBsYWJlbDogXCJQb3N0ZVwiLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgdXJsOiBcIi4uLy4uL2NyZWF0ZXMvbmV3U3ViamVjdFwiLFxyXG4gICAgICAgICAgICBuYW1lOiBcInN1YmplY3RcIixcclxuICAgICAgICAgICAgbGFiZWw6IFwiTWF0aWVyZVwiLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgdXJsOiBcIi4uLy4uL2NyZWF0ZXMvbmV3Q0VTXCIsXHJcbiAgICAgICAgICAgIG5hbWU6IFwiU3ViamVjdHNUb1NwZWNpYWx0eVwiLFxyXG4gICAgICAgICAgICBsYWJlbDogXCJNYXRpZXJlcyBkZXMgc2VyaWVzXCIsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICAvLyB1cmw6IFwiLi4vLi4vc2hvdy9yZXN1bHRzL2NhbmRDb2RlUmVzdWx0c1wiLFxyXG4gICAgICAgIG5hbWU6IFwib3RoZXJzXCIsXHJcbiAgICAgICAgbGFiZWw6IFwiQXV0cmVzXCIsXHJcbiAgICAgICAgaXRlbXM6IFtcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgdXJsOiBcIi4uLy4uL2NyZWF0ZXMvbmV3RXhhbVwiLFxyXG4gICAgICAgICAgICBuYW1lOiBcImV4YW1zXCIsXHJcbiAgICAgICAgICAgIGxhYmVsOiBcIkV4YW1lblwiLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgdXJsOiBcIi4uLy4uL2NyZWF0ZXMvbmV3U2Vzc2lvblwiLFxyXG4gICAgICAgICAgICBuYW1lOiBcInNlc3Npb25cIixcclxuICAgICAgICAgICAgbGFiZWw6IFwiU2Vzc2lvblwiLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgdXJsOiBcIi4uLy4uL2NyZWF0ZXMvbmV3RXhhbWluZXJcIixcclxuICAgICAgICAgICAgbmFtZTogXCJleGFtaW5lclwiLFxyXG4gICAgICAgICAgICBsYWJlbDogXCJFeGFtaW5hdGV1clwiLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgdXJsOiBcIi4uLy4uL2NyZWF0ZXMvbmV3Q0VTXCIsXHJcbiAgICAgICAgICAgIG5hbWU6IFwiU3ViamVjdHNUb1NwZWNpYWx0eVwiLFxyXG4gICAgICAgICAgICBsYWJlbDogXCJNYXRpZXJlcyBkZXMgc2VyaWVzXCIsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICAvLyB1cmw6IFwiLi4vLi4vc2hvdy9yZXN1bHRzL2NhbmRDb2RlUmVzdWx0c1wiLFxyXG4gICAgICAgIG5hbWU6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgbGFiZWw6IFwiQ2VudHJlXCIsXHJcbiAgICAgICAgaXRlbXM6IFtcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgdXJsOiBcIi4uLy4uL2NyZWF0ZXMvbmV3UmVnaXN0ZXJcIixcclxuICAgICAgICAgICAgbmFtZTogXCJjYW5kaWRhdGVBdHRlbmRhbmNlXCIsXHJcbiAgICAgICAgICAgIGxhYmVsOiBcIlJlZ2lvblwiLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgdXJsOiBcIi4uLy4uL2NyZWF0ZXMvbmV3UmVnaXN0ZXJcIixcclxuICAgICAgICAgICAgbmFtZTogXCJjZW50ZXJDYW5kU2VjcmV0Q29kZXNcIixcclxuICAgICAgICAgICAgbGFiZWw6IFwiTGlzdGVzIGRlcyBBbm9ueW1hdHNcIixcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIC8vIHVybDogXCIuLi8uLi9zaG93L3Jlc3VsdHMvY2FuZENvZGVSZXN1bHRzXCIsXHJcbiAgICAgICAgbmFtZTogXCJNYXJraW5nUGFoc2VcIixcclxuICAgICAgICBsYWJlbDogXCJDb3JyZWN0aW9uXCIsXHJcbiAgICAgICAgaXRlbXM6IFtcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgdXJsOiBcIi4uLy4uL2NyZWF0ZXMvZW50ZXJNYXJrc1wiLFxyXG4gICAgICAgICAgICBuYW1lOiBcImNhbmRpZGF0ZUFNYXJrc1wiLFxyXG4gICAgICAgICAgICBsYWJlbDogXCJOb3RlcyBkZXMgY2FuZGlkYXRzXCIsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICB1cmw6IFwiLi4vLi4vY3JlYXRlcy9uZXdSZWdpc3RlclwiLFxyXG4gICAgICAgICAgICBuYW1lOiBcImNlbnRlckNhbmRTZWNyZXRDb2Rlc1wiLFxyXG4gICAgICAgICAgICBsYWJlbDogXCJMaXN0ZXMgZGVzIEFub255bWF0c1wiLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICBdLFxyXG4gICAgICB9LFxyXG4gICAgXSxcclxuICB9LFxyXG5cclxuICBcImRpdmlkZXJcIixcclxuICB7XHJcbiAgICAvLyB1cmw6IFwiLi4vLi4vY3JlYXRlcy9uZXdSZWdpb25cIixcclxuICAgIG5hbWU6IFwiY2VudHJlTWFuYWdlbWVudFwiLFxyXG4gICAgbGFiZWw6IFwiQ2VudHJlIGQnZXhhbWVuXCIsXHJcbiAgICBJY29uOiBSZWNlaXB0SWNvbixcclxuICAgIGl0ZW1zOiBbXHJcbiAgICAgIHtcclxuICAgICAgICAvLyB1cmw6IFwiLi4vLi4vY3JlYXRlcy9uZXdSZWdpb25cIixcclxuICAgICAgICBuYW1lOiBcImV4YW1TdGFnZXNcIixcclxuICAgICAgICBsYWJlbDogXCJQaGFzZXMgZGUgbCdleGFtZW5cIixcclxuICAgICAgICBpdGVtczogW1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICAvLyB1cmw6IFwiLi4vLi4vc2hvdy9yZXN1bHRzL2NhbmRDb2RlUmVzdWx0c1wiLFxyXG4gICAgICAgICAgICBuYW1lOiBcImNlbnRlckV4YW1QcmVwc1wiLFxyXG4gICAgICAgICAgICBsYWJlbDogXCJQcmVwYXJhdGlvblwiLFxyXG4gICAgICAgICAgICBpdGVtczogW1xyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHVybDogXCIuLi8uLi9jcmVhdGVzL25ld0NFU1wiLFxyXG4gICAgICAgICAgICAgICAgbmFtZTogXCJyZWdpc3RlckNlbnRlckZvckV4YW1zXCIsXHJcbiAgICAgICAgICAgICAgICBsYWJlbDogXCJJbnNjcmlyZSBjZW50cmUgYXV4IGV4YW1lbnNcIixcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHVybDogXCIuLi8uLi9jcmVhdGVzL25ld0NFU1NcIixcclxuICAgICAgICAgICAgICAgIG5hbWU6IFwiU3BlY2lhbHRpZXNcIixcclxuICAgICAgICAgICAgICAgIGxhYmVsOiBcIlNlcmllcyBvZmZlcnRlcyBwYXIgY2VudHJlXCIsXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB1cmw6IFwiLi4vLi4vY3JlYXRlcy9uZXdHcm91cENhbmRcIixcclxuICAgICAgICAgICAgICAgIG5hbWU6IFwiY2FuZGlkYXRlXCIsXHJcbiAgICAgICAgICAgICAgICBsYWJlbDogXCJSZW5zZWlnbmVtZW50IENhbmRpZGF0c1wiLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICAvLyB1cmw6IFwiLi4vLi4vc2hvdy9yZXN1bHRzL2NhbmRDb2RlUmVzdWx0c1wiLFxyXG4gICAgICAgICAgICBuYW1lOiBcImNlbnRlckV4YW1SZWdpc3RyYXRpb25cIixcclxuICAgICAgICAgICAgbGFiZWw6IFwiSW5zY3JpcHRpb25cIixcclxuICAgICAgICAgICAgaXRlbXM6IFtcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB1cmw6IFwiLi4vLi4vY3JlYXRlcy9uZXdSZWdpc3RlclwiLFxyXG4gICAgICAgICAgICAgICAgbmFtZTogXCJyZWdpc3RlckNhbmRpZGF0ZXNcIixcclxuICAgICAgICAgICAgICAgIGxhYmVsOiBcIkluc2NyaXJlIENhbmRpZGF0cyBhdXggZXhhbWVuc1wiLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdXJsOiBcIi4uLy4uL3Nob3cvcmVnaXN0ZXJlZENhbmRzXCIsXHJcbiAgICAgICAgICAgICAgICBuYW1lOiBcInJlZ2lzdGVyQ2FuZGlkYXRlc1wiLFxyXG4gICAgICAgICAgICAgICAgbGFiZWw6IFwiTGlzdGUgZGVzIGNhbmRpZGF0cyBpbnNjcml0c1wiLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdXJsOiBcIi4uLy4uL3Nob3cvcmVnaXN0ZXJlZENhbmRzXCIsXHJcbiAgICAgICAgICAgICAgICBuYW1lOiBcInJlZ2lzdGVyQ2FuZGlkYXRlc1wiLFxyXG4gICAgICAgICAgICAgICAgbGFiZWw6IFwiRGV0YWlscyBkZXMgY2FuZGlkYXRzIGluc2NyaXRzXCIsXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIC8vIHVybDogXCIuLi8uLi9zaG93L3Jlc3VsdHMvY2FuZENvZGVSZXN1bHRzXCIsXHJcbiAgICAgICAgICAgIG5hbWU6IFwiV3JpdGVuUGFoc2VcIixcclxuICAgICAgICAgICAgbGFiZWw6IFwiRWNyaXRlXCIsXHJcbiAgICAgICAgICAgIGl0ZW1zOiBbXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdXJsOiBcIi4uLy4uL2NyZWF0ZXMvbmV3QXR0ZW5kYW5jZVwiLFxyXG4gICAgICAgICAgICAgICAgbmFtZTogXCJjYW5kaWRhdGVBdHRlbmRhbmNlXCIsXHJcbiAgICAgICAgICAgICAgICBsYWJlbDogXCJQcmVzZW5jZSBhdXggZXByZXV2ZXNcIixcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHVybDogXCIuLi8uLi9jcmVhdGVzL25ld1JlZ2lzdGVyXCIsXHJcbiAgICAgICAgICAgICAgICBuYW1lOiBcImNlbnRlckNhbmRTZWNyZXRDb2Rlc1wiLFxyXG4gICAgICAgICAgICAgICAgbGFiZWw6IFwiTGlzdGVzIGRlcyBBbm9ueW1hdHNcIixcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgLy8gdXJsOiBcIi4uLy4uL3Nob3cvcmVzdWx0cy9jYW5kQ29kZVJlc3VsdHNcIixcclxuICAgICAgICAgICAgbmFtZTogXCJNYXJraW5nUGFoc2VcIixcclxuICAgICAgICAgICAgbGFiZWw6IFwiQ29ycmVjdGlvblwiLFxyXG4gICAgICAgICAgICBpdGVtczogW1xyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHVybDogXCIuLi8uLi9jcmVhdGVzL25ld01hcmtzXCIsXHJcbiAgICAgICAgICAgICAgICBuYW1lOiBcImNhbmRpZGF0ZUFNYXJrc1wiLFxyXG4gICAgICAgICAgICAgICAgbGFiZWw6IFwiTm90ZXMgZGVzIGNhbmRpZGF0c1wiLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdXJsOiBcIi4uLy4uL2NyZWF0ZXMvbmV3UmVnaXN0ZXJcIixcclxuICAgICAgICAgICAgICAgIG5hbWU6IFwiY2VudGVyQ2FuZFNlY3JldENvZGVzXCIsXHJcbiAgICAgICAgICAgICAgICBsYWJlbDogXCJMaXN0ZXMgZGVzIEFub255bWF0c1wiLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiBcInJlc3VsdHNQYWhzZVwiLFxyXG4gICAgICAgICAgICBsYWJlbDogXCJSZXN1bHRhdHNcIixcclxuICAgICAgICAgICAgaXRlbXM6IFtcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB1cmw6IFwiLi4vLi4vc2hvdy9nZW5DZW50ZXJSZXN1bHRzXCIsXHJcbiAgICAgICAgICAgICAgICBuYW1lOiBcImdlbmVyYWxDZW50ZXJSZXN1bHRzXCIsXHJcbiAgICAgICAgICAgICAgICBsYWJlbDogXCJHw6luw6lyYXV4XCIsXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB1cmw6IFwiLi4vLi4vc2hvdy9yZXN1bHRzL2NhbmRpZGF0ZVJlc3VsdHMvcmVzdWx0c0J5Q2FuZFJlZ05vXCIsXHJcbiAgICAgICAgICAgICAgICBuYW1lOiBcImNhbmRSRWdOb1Jlc3VsdHNcIixcclxuICAgICAgICAgICAgICAgIGxhYmVsOiBcIlBlcnNvbmVsXCIsXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgfSxcclxuICAgIF0sXHJcbiAgfSxcclxuXHJcbiAgXCJkaXZpZGVyXCIsXHJcbiAge1xyXG4gICAgLy8gdXJsOiBcIi4uLy4uL2NyZWF0ZXMvbmV3UmVnaW9uXCIsXHJcbiAgICBuYW1lOiBcImNhbmRpZGF0ZU1hbmFnZW1lbnRcIixcclxuICAgIGxhYmVsOiBcIkNhbmRpZGF0XCIsXHJcbiAgICBJY29uOiBSZWNlaXB0SWNvbixcclxuICAgIGl0ZW1zOiBbXHJcbiAgICAgIHtcclxuICAgICAgICB1cmw6IFwiLi4vLi4vY3JlYXRlcy9uZXdHcm91cENhbmRcIixcclxuICAgICAgICBuYW1lOiBcImNhbmRpZGF0ZUluZm9tYXRpb25cIixcclxuICAgICAgICBsYWJlbDogXCJSZXNlaWduZW1lbnQgQ2FuZGlkYXRcIixcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHVybDogXCIuLi8uLi9jcmVhdGVzL25ld0dyb3VwQ2FuZFwiLFxyXG4gICAgICAgIG5hbWU6IFwicmVnaXN0ZXJDYW5kaWRhdGVGb3JFeGFtc1wiLFxyXG4gICAgICAgIGxhYmVsOiBcIlMnaUluc2NyaXJlIGF1eCBleGFtZW5zXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICB1cmw6IFwiLi4vLi4vc2hvdy9yZXN1bHRzL2NhbmRpZGF0ZVJlc3VsdHMvYWxsUmVzdWx0c0J5Q2FuZENvZGVcIixcclxuICAgICAgICBuYW1lOiBcImNhbmRDb2RlUmVzdWx0c1wiLFxyXG4gICAgICAgIGxhYmVsOiBcIlJlc3VsdGF0IGNhbmRpZGF0XCIsXHJcbiAgICAgIH0sXHJcbiAgICBdLFxyXG4gIH0sXHJcblxyXG4gIFwiZGl2aWRlclwiLFxyXG4gIHtcclxuICAgIC8vIHVybDogXCIuLi8uLi9jcmVhdGVzL25ld0V4YW1pbmVyXCIsXHJcbiAgICBuYW1lOiBcIkV4YW1pbmVyXCIsXHJcbiAgICBsYWJlbDogXCJFeGFtaW5hdGV1clwiLFxyXG4gICAgSWNvbjogUmVjZWlwdEljb24sXHJcbiAgICBpdGVtczogW1xyXG4gICAgICB7XHJcbiAgICAgICAgLy8gdXJsOiBcIi4uLy4uL2NyZWF0ZXMvbmV3RXhhbWluZXJcIixcclxuICAgICAgICBuYW1lOiBcImV4YW1pbmVyXCIsXHJcbiAgICAgICAgbGFiZWw6IFwiUmVuc2VpZ25lbWVudFwiLFxyXG4gICAgICAgIGl0ZW1zOiBbXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHVybDogXCIuLi8uLi9jcmVhdGVzL25ld0V4YW1pbmVyXCIsXHJcbiAgICAgICAgICAgIG5hbWU6IFwiY3JlYXRlRXhhbWluZXJcIixcclxuICAgICAgICAgICAgbGFiZWw6IFwiQ3JlZSBFeGFtaW5hdGV1clwiLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgdXJsOiBcIi4uLy4uL21vZGlmeS9tb2RpZnlFeGFtaW5lclwiLFxyXG4gICAgICAgICAgICBuYW1lOiBcIm1vZGlmaWVyRXhhbWluZXJcIixcclxuICAgICAgICAgICAgbGFiZWw6IFwiTW9kaWZpZXIgRXhhbWluYXRldXJcIixcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIC8vIHVybDogXCIuLi8uLi9jcmVhdGVzL25ld0NlbnRlckV4YW1pbmVyXCIsXHJcbiAgICAgICAgbmFtZTogXCJyZWdpc3RlckV4YW1pbmVyXCIsXHJcbiAgICAgICAgbGFiZWw6IFwiSW5zY3JpcHRpb25cIixcclxuICAgICAgICBpdGVtczogW1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICB1cmw6IFwiLi4vLi4vY3JlYXRlcy9uZXdDZW50ZXJFeGFtaW5lclwiLFxyXG4gICAgICAgICAgICBuYW1lOiBcImNlbnRlckV4YW1pbmVyXCIsXHJcbiAgICAgICAgICAgIGxhYmVsOiBcIlMnaW5zY3JpcmUgYXUgQ2VudHJlXCIsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICB1cmw6IFwiLi4vLi4vbW9kaWZ5L21vZGlmeURpdmlzaW9uXCIsXHJcbiAgICAgICAgICAgIG5hbWU6IFwibW9kaWZpZXJEaXZpc2lvblwiLFxyXG4gICAgICAgICAgICBsYWJlbDogXCJFeGFtaW5hdGV1clwiLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgdXJsOiBcIi4uLy4uL2NyZWF0ZXMvbmV3UmVwb3J0XCIsXHJcbiAgICAgICAgICAgIG5hbWU6IFwiZXhhbWluZXJSZXBvcnRcIixcclxuICAgICAgICAgICAgbGFiZWw6IFwiUmFwcG9ydCBcIixcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHVybDogXCIuLi8uLi9jcmVhdGVzL25ld1JlcG9ydFwiLFxyXG4gICAgICAgIG5hbWU6IFwiZXhhbWluZXJSZXBvcnRcIixcclxuICAgICAgICBsYWJlbDogXCJSYXBwb3J0IFwiLFxyXG4gICAgICAgIGl0ZW1zOiBbXHJcbiAgICAgICAgICB7IHVybDogXCIuLi8uLi9jcmVhdGVzL25ld1JlZ2lvblwiLCBsYWJlbDogXCJDcmVlIFJlZ2lvblwiIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHVybDogXCIuLi8uLi9tb2RpZnkvbW9kaWZ5UmVnaW9uXCIsXHJcbiAgICAgICAgICAgIG5hbWU6IFwibW9kaWZpZXJSZWdpb25cIixcclxuICAgICAgICAgICAgbGFiZWw6IFwiTW9kaWZpY2F0aW9uXCIsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICB1cmw6IFwiLi4vLi4vY3JlYXRlcy9uZXdUb3duXCIsXHJcbiAgICAgICAgbmFtZTogXCJ0b3duXCIsXHJcbiAgICAgICAgbGFiZWw6IFwiVG93blwiLFxyXG4gICAgICAgIGl0ZW1zOiBbXHJcbiAgICAgICAgICB7IHVybDogXCIuLi8uLi9jcmVhdGVzL25ld1JlZ2lvblwiLCBsYWJlbDogXCJDcmVlIFJlZ2lvblwiIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHVybDogXCIuLi8uLi9tb2RpZnkvbW9kaWZ5UmVnaW9uXCIsXHJcbiAgICAgICAgICAgIG5hbWU6IFwibW9kaWZpZXJSZWdpb25cIixcclxuICAgICAgICAgICAgbGFiZWw6IFwiTW9kaWZpY2F0aW9uXCIsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgIH0sXHJcbiAgICBdLFxyXG4gIH0sXHJcbiAgXCJkaXZpZGVyXCIsXHJcbiAge1xyXG4gICAgdXJsOiBcIi4uLy4uL2NyZWF0ZXMvbmV3Q2VudGVyXCIsXHJcbiAgICBuYW1lOiBcInNldHRpbmdzXCIsXHJcbiAgICBsYWJlbDogXCJTZXR0aW5nc1wiLFxyXG4gICAgSWNvbjogU2V0dGluZ3NJY29uLFxyXG4gICAgaXRlbXM6IFtcclxuICAgICAgeyB1cmw6IFwiLi4vLi4vY3JlYXRlcy9uZXdDZW50ZXJcIiwgbmFtZTogXCJwcm9maWxlXCIsIGxhYmVsOiBcIlByb2ZpbGVcIiB9LFxyXG4gICAgICB7IHVybDogXCIuLi8uLi9jcmVhdGVzL25ld0NlbnRlclwiLCBuYW1lOiBcImluc3VyYW5jZVwiLCBsYWJlbDogXCJJbnN1cmFuY2VcIiB9LFxyXG4gICAgICBcImRpdmlkZXJcIixcclxuICAgICAge1xyXG4gICAgICAgIHVybDogXCIuLi8uLi9jcmVhdGVzL25ld0NlbnRlclwiLFxyXG4gICAgICAgIG5hbWU6IFwibm90aWZpY2F0aW9uc1wiLFxyXG4gICAgICAgIGxhYmVsOiBcIk5vdGlmaWNhdGlvbnNcIixcclxuICAgICAgICBJY29uOiBOb3RpZmljYXRpb25zSWNvbixcclxuICAgICAgICBpdGVtczogW1xyXG4gICAgICAgICAgeyB1cmw6IFwiLi4vLi4vY3JlYXRlcy9uZXdDZW50ZXJcIiwgbmFtZTogXCJlbWFpbFwiLCBsYWJlbDogXCJFbWFpbFwiIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHVybDogXCIuLi8uLi9jcmVhdGVzL25ld0NlbnRlclwiLFxyXG4gICAgICAgICAgICBuYW1lOiBcImRlc2t0b3BcIixcclxuICAgICAgICAgICAgbGFiZWw6IFwiRGVza3RvcFwiLFxyXG4gICAgICAgICAgICBJY29uOiBEZXNrdG9wV2luZG93c0ljb24sXHJcbiAgICAgICAgICAgIGl0ZW1zOiBbXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdXJsOiBcIi4uLy4uL2NyZWF0ZXMvbmV3Q2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICBuYW1lOiBcInNjaGVkdWxlXCIsXHJcbiAgICAgICAgICAgICAgICBsYWJlbDogXCJTY2hlZHVsZVwiLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdXJsOiBcIi4uLy4uL2NyZWF0ZXMvbmV3Q2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICBuYW1lOiBcImZyZXF1ZW5jeVwiLFxyXG4gICAgICAgICAgICAgICAgbGFiZWw6IFwiRnJlcXVlbmN5XCIsXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7IHVybDogXCIuLi8uLi9jcmVhdGVzL25ld0NlbnRlclwiLCBuYW1lOiBcInNtc1wiLCBsYWJlbDogXCJTTVNcIiB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgIH0sXHJcbiAgICBdLFxyXG4gIH0sXHJcbl07XHJcblxyXG5jb25zdCBMYXlvdXREcmF3ZXIgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7IHdpbmRvdywgY2hpbGRyZW4gfSA9IHByb3BzO1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICBjb25zdCBbbW9iaWxlT3Blbiwgc2V0TW9iaWxlT3Blbl0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZURyYXdlclRvZ2dsZSA9ICgpID0+IHtcclxuICAgIHNldE1vYmlsZU9wZW4oIW1vYmlsZU9wZW4pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGRyYXdlciA9IChcclxuICAgIC8vIDxkaXYgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBcIiMwNDQ1NjJcIiwgY29sb3I6IFwiIzAwMFwiIH19PlxyXG4gICAgLy8gPGRpdiBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IFwiI2FiYlwiLCBjb2xvcjogXCIjMDAwXCIgfX0+XHJcbiAgICAvLyA8ZGl2IHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogXCIjYTdiZWFlXCIsIGNvbG9yOiBcIiM3MjI2MjBcIiB9fT5cclxuICAgIDxkaXYgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBcIiM4MjkwNzlcIiwgY29sb3I6IFwiI2VkZTZiOVwiIH19PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy50b29sYmFyfSAvPlxyXG4gICAgICA8RGl2aWRlciAvPlxyXG4gICAgICA8U2lkZWJhciBpdGVtcz17aXRlbXN9IC8+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG4gIGNvbnN0IGNvbnRhaW5lciA9XHJcbiAgICB3aW5kb3cgIT09IHVuZGVmaW5lZCA/ICgpID0+IHdpbmRvdygpLmRvY3VtZW50LmJvZHkgOiB1bmRlZmluZWQ7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxyXG4gICAgICA8Q3NzQmFzZWxpbmUgLz5cclxuICAgICAgPEFwcEJhclxyXG4gICAgICAgIC8vIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogXCIjNjQ3MjViXCIsY29sb3I6XCIjZWRlNmI5XCIgfX1cclxuICAgICAgICAvLyBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IFwiI2ZmZlwiLCBjb2xvcjogXCIjMDAwXCIgfX1cclxuICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IFwiI2I5OTI1ZVwiLCBjb2xvcjogXCIjZWRlNmI5XCIgfX1cclxuICAgICAgICBwb3NpdGlvbj1cImZpeGVkXCJcclxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuYXBwQmFyfVxyXG4gICAgICA+XHJcbiAgICAgICAgPFRvb2xiYXI+XHJcbiAgICAgICAgICA8R3JpZCBjb250YWluZXI+XHJcbiAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezZ9IHNtPXs5fT5cclxuICAgICAgICAgICAgICA8SWNvbkJ1dHRvblxyXG4gICAgICAgICAgICAgICAgY29sb3I9XCJpbmhlcml0XCJcclxuICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJvcGVuIGRyYXdlclwiXHJcbiAgICAgICAgICAgICAgICBlZGdlPVwic3RhcnRcIlxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlRHJhd2VyVG9nZ2xlfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLm1lbnVCdXR0b259XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPE1lbnVJY29uIC8+XHJcbiAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG5cclxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeVxyXG4gICAgICAgICAgICAgICAgdmFyaWFudD1cImg2XCJcclxuICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cImg1XCJcclxuICAgICAgICAgICAgICAgIG5vV3JhcFxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgY29sb3I6IFwiI2VkZTZiOVwiIH19XHJcbiAgICAgICAgICAgICAgICAvLyBjb2xvcj1cInRleHRTZWNvbmRhcnlcIlxyXG4gICAgICAgICAgICAgICAgLy8gIGNvbG9yPVwidGV4dFByaW1hcnlcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIFN5Z2VmZXgtT0JDXHJcbiAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDxHcmlkIGNsYXNzTmFtZT17Y2xhc3Nlcy51c2VyTmFtZX0gaXRlbSB4cz17Nn0gc209ezN9PlxyXG4gICAgICAgICAgICAgIDxVc2VyPlxyXG4gICAgICAgICAgICAgICAgeyh7IGRhdGE6IHsgbWUgfSB9KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAge21lID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZ3JpZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGdyaWRUZW1wbGF0ZUNvbHVtbnM6IFwiMWZyIDFmclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGdyaWRHYXA6IFwiMXJlbVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImdyaWRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiYm9keTFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cImg1XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBub1dyYXBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHttZS5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTaWdub3V0IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi4uLy4uL2NyZWF0ZXMvbG9naW5cIiBwYXNzSHJlZj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwiYVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjODI5MDc5XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCIjZWRlNmI5XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0VHJhbnNmb3JtOiBcIm5vbmVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgQ29ubmV4aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICA8L1VzZXI+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8L1Rvb2xiYXI+XHJcbiAgICAgIDwvQXBwQmFyPlxyXG4gICAgICA8bmF2IGNsYXNzTmFtZT17Y2xhc3Nlcy5kcmF3ZXJ9IGFyaWEtbGFiZWw9XCJtYWlsYm94IGZvbGRlcnNcIj5cclxuICAgICAgICB7LyogVGhlIGltcGxlbWVudGF0aW9uIGNhbiBiZSBzd2FwcGVkIHdpdGgganMgdG8gYXZvaWQgU0VPIGR1cGxpY2F0aW9uIG9mIHVybHMuICovfVxyXG4gICAgICAgIDxIaWRkZW4gc21VcCBpbXBsZW1lbnRhdGlvbj1cImNzc1wiPlxyXG4gICAgICAgICAgPERyYXdlclxyXG4gICAgICAgICAgICBjb250YWluZXI9e2NvbnRhaW5lcn1cclxuICAgICAgICAgICAgdmFyaWFudD1cInRlbXBvcmFyeVwiXHJcbiAgICAgICAgICAgIG9wZW49e21vYmlsZU9wZW59XHJcbiAgICAgICAgICAgIG9uQ2xvc2U9e2hhbmRsZURyYXdlclRvZ2dsZX1cclxuICAgICAgICAgICAgY2xhc3Nlcz17e1xyXG4gICAgICAgICAgICAgIHBhcGVyOiBjbGFzc2VzLmRyYXdlclBhcGVyLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBNb2RhbFByb3BzPXt7XHJcbiAgICAgICAgICAgICAga2VlcE1vdW50ZWQ6IHRydWUsIC8vIEJldHRlciBvcGVuIHBlcmZvcm1hbmNlIG9uIG1vYmlsZS5cclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge2RyYXdlcn1cclxuICAgICAgICAgIDwvRHJhd2VyPlxyXG4gICAgICAgIDwvSGlkZGVuPlxyXG4gICAgICAgIDxIaWRkZW4geHNEb3duIGltcGxlbWVudGF0aW9uPVwiY3NzXCI+XHJcbiAgICAgICAgICA8RHJhd2VyXHJcbiAgICAgICAgICAgIGNsYXNzZXM9e3tcclxuICAgICAgICAgICAgICBwYXBlcjogY2xhc3Nlcy5kcmF3ZXJQYXBlcixcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgdmFyaWFudD1cInBlcm1hbmVudFwiXHJcbiAgICAgICAgICAgIG9wZW5cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge2RyYXdlcn1cclxuICAgICAgICAgIDwvRHJhd2VyPlxyXG4gICAgICAgIDwvSGlkZGVuPlxyXG4gICAgICA8L25hdj5cclxuICAgICAgPG1haW4gY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRlbnR9PntjaGlsZHJlbn08L21haW4+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExheW91dERyYXdlcjtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGlzdCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlzdFwiO1xyXG5pbXBvcnQgTGlzdEl0ZW0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtXCI7XHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5XCI7XHJcbmltcG9ydCBEaXZpZGVyIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9EaXZpZGVyXCI7XHJcbmltcG9ydCBFeHBhbmRNb3JlSWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL0V4cGFuZE1vcmVcIjtcclxuaW1wb3J0IEV4cGFuZExlc3NJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvRXhwYW5kTGVzc1wiO1xyXG5pbXBvcnQgQ29sbGFwc2UgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0NvbGxhcHNlXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuXHJcbmNvbnN0IFNpZGViYXJJdGVtID0gKHtcclxuICBkZXB0aFN0ZXAgPSAxNSxcclxuICBkZXB0aCA9IDAsXHJcbiAgZXhwYW5kZWQsXHJcbiAgaXRlbSxcclxuICAuLi5yZXN0XHJcbn0pID0+IHtcclxuICBjb25zdCBbY29sbGFwc2VkLCBzZXRDb2xsYXBzZWRdID0gUmVhY3QudXNlU3RhdGUodHJ1ZSk7XHJcbiAgY29uc3QgeyB1cmwsIGxhYmVsLCBpdGVtcywgSWNvbiwgb25DbGljazogb25DbGlja1Byb3AgfSA9IGl0ZW07XHJcblxyXG4gIGNvbnN0IHRvZ2dsZUNvbGxhcHNlID0gKCkgPT4ge1xyXG4gICAgc2V0Q29sbGFwc2VkKChwcmV2VmFsdWUpID0+ICFwcmV2VmFsdWUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9uQ2xpY2sgPSAoZSkgPT4ge1xyXG4gICAgaWYgKEFycmF5LmlzQXJyYXkoaXRlbXMpKSB7XHJcbiAgICAgIHRvZ2dsZUNvbGxhcHNlKCk7XHJcbiAgICB9XHJcbiAgICBpZiAob25DbGlja1Byb3ApIHtcclxuICAgICAgb25DbGlja1Byb3AoZSwgaXRlbSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgbGV0IGV4cGFuZEljb247XHJcblxyXG4gIGlmIChBcnJheS5pc0FycmF5KGl0ZW1zKSAmJiBpdGVtcy5sZW5ndGgpIHtcclxuICAgIGV4cGFuZEljb24gPSAhY29sbGFwc2VkID8gKFxyXG4gICAgICA8RXhwYW5kTGVzc0ljb25cclxuICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgXCJzaWRlYmFyLWl0ZW0tZXhwYW5kLWFycm93XCIgKyBcIiBzaWRlYmFyLWl0ZW0tZXhwYW5kLWFycm93LWV4cGFuZGVkXCJcclxuICAgICAgICB9XHJcbiAgICAgIC8+XHJcbiAgICApIDogKFxyXG4gICAgICA8RXhwYW5kTW9yZUljb24gY2xhc3NOYW1lPVwic2lkZWJhci1pdGVtLWV4cGFuZC1hcnJvd1wiIC8+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxMaW5rIGhyZWY9e3VybCA/IHVybCA6XCJcIn0gcGFzc0hyZWY+XHJcbiAgICAgICAgPExpc3RJdGVtXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJzaWRlYmFyLWl0ZW1cIlxyXG4gICAgICAgICAgb25DbGljaz17b25DbGlja31cclxuICAgICAgICAgIGJ1dHRvblxyXG4gICAgICAgICAgY29tcG9uZW50PVwiYVwiXHJcbiAgICAgICAgICBkZW5zZVxyXG4gICAgICAgICAgey4uLnJlc3R9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBzdHlsZT17eyBwYWRkaW5nTGVmdDogZGVwdGggKiBkZXB0aFN0ZXAgfX1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwic2lkZWJhci1pdGVtLWNvbnRlbnRcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7SWNvbiAmJiA8SWNvbiBjbGFzc05hbWU9XCJzaWRlYmFyLWl0ZW0taWNvblwiIGZvbnRTaXplPVwic21hbGxcIiAvPn1cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaWRlYmFyLWl0ZW0tdGV4dFwiPlxyXG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MlwiIGNvbXBvbmVudD1cImgxXCI+XHJcbiAgICAgICAgICAgICAgICB7bGFiZWx9XHJcbiAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAge2V4cGFuZEljb259XHJcbiAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgPC9MaW5rPlxyXG4gICAgICA8Q29sbGFwc2UgaW49eyFjb2xsYXBzZWR9IHRpbWVvdXQ9XCJhdXRvXCIgdW5tb3VudE9uRXhpdD5cclxuICAgICAgICB7QXJyYXkuaXNBcnJheShpdGVtcykgPyAoXHJcbiAgICAgICAgICA8TGlzdCBkaXNhYmxlUGFkZGluZyBkZW5zZT5cclxuICAgICAgICAgICAge2l0ZW1zLm1hcCgoc3ViSXRlbSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQga2V5PXtgJHtzdWJJdGVtLm5hbWV9JHtpbmRleH1gfT5cclxuICAgICAgICAgICAgICAgIHtzdWJJdGVtID09PSBcImRpdmlkZXJcIiA/IChcclxuICAgICAgICAgICAgICAgICAgPERpdmlkZXIgc3R5bGU9e3sgbWFyZ2luOiBcIjZweCAwXCIgfX0gLz5cclxuICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgIDxTaWRlYmFySXRlbVxyXG4gICAgICAgICAgICAgICAgICAgIGRlcHRoPXtkZXB0aCArIDJ9XHJcbiAgICAgICAgICAgICAgICAgICAgZGVwdGhTdGVwPXtkZXB0aFN0ZXB9XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbT17c3ViSXRlbX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L0xpc3Q+XHJcbiAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgIDwvQ29sbGFwc2U+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgU2lkZWJhciA9ICh7IGl0ZW1zLCBkZXB0aFN0ZXAsIGRlcHRoLCBleHBhbmRlZCB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwic2lkZWJhclwiPlxyXG4gICAgICA8TGlzdCBkaXNhYmxlUGFkZGluZyBkZW5zZT5cclxuICAgICAgICB7aXRlbXMubWFwKChzaWRlYmFySXRlbSwgaW5kZXgpID0+IChcclxuICAgICAgICAgIDxSZWFjdC5GcmFnbWVudCBrZXk9e2Ake3NpZGViYXJJdGVtLm5hbWV9JHtpbmRleH1gfT5cclxuICAgICAgICAgICAge3NpZGViYXJJdGVtID09PSBcImRpdmlkZXJcIiA/IChcclxuICAgICAgICAgICAgICA8RGl2aWRlciBzdHlsZT17eyBtYXJnaW46IFwiNnB4IDBcIiB9fSAvPlxyXG4gICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgIDxTaWRlYmFySXRlbVxyXG4gICAgICAgICAgICAgICAgZGVwdGhTdGVwPXtkZXB0aFN0ZXB9XHJcbiAgICAgICAgICAgICAgICBkZXB0aD17ZGVwdGh9XHJcbiAgICAgICAgICAgICAgICBleHBhbmRlZD17ZXhwYW5kZWR9XHJcbiAgICAgICAgICAgICAgICBpdGVtPXtzaWRlYmFySXRlbX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICAgICApKX1cclxuICAgICAgPC9MaXN0PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNpZGViYXI7XHJcbiIsImltcG9ydCBncWwgZnJvbSBcImdyYXBocWwtdGFnXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbi8vKioqKioqKioqKioqY3JlYXRlIG11dGF0aW9ucyAgKi9cclxuY29uc3Qgc2lnbkluQ2FuZGlkYXRlID0gZ3FsYFxyXG4gIG11dGF0aW9uIHNpZ25JbkNhbmRpZGF0ZSgkY2FuZENvZGU6IFN0cmluZyEpIHtcclxuICAgIGNhbmRpZGF0ZVNpZ25JbihjYW5kQ29kZTogJGNhbmRDb2RlKSB7XHJcbiAgICAgIGlkXHJcbiAgICAgIGNhbmQxc3ROYW1lXHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG4vL1xyXG5jb25zdCBzaWdub3V0TXV0YXRpb24gPSBncWxgXHJcbiAgbXV0YXRpb24gc2lnbm91dE11dGF0aW9uIHtcclxuICAgIHNpZ25vdXQge1xyXG4gICAgICBtZXNzYWdlXHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgZGVsZXRlUmVwb3J0TXV0YXRpb24gPSBncWxgXHJcbiAgbXV0YXRpb24gZGVsZXRlUmVwb3J0TXV0YXRpb24oJGlkOiBJRCEpIHtcclxuICAgIGRlbGV0ZVJlcG9ydChpZDogJGlkKSB7XHJcbiAgICAgIGlkXHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgdXBkYXRlU2Vzc2lvbk11dGF0aW9uID0gZ3FsYFxyXG4gIG11dGF0aW9uIHVwZGF0ZVNlc3Npb25NdXRhdGlvbihcclxuICAgICRpZDogSUQhXHJcbiAgICAkc2Vzc2lvbk5hbWU6IFN0cmluZ1xyXG4gICAgJHNlc3Npb25Db2RlOiBTdHJpbmdcclxuICApIHtcclxuICAgIHVwZGF0ZVNlc3Npb24oXHJcbiAgICAgIGlkOiAkaWRcclxuICAgICAgc2Vzc2lvbk5hbWU6ICRzZXNzaW9uTmFtZVxyXG4gICAgICBzZXNzaW9uQ29kZTogJHNlc3Npb25Db2RlXHJcbiAgICApIHtcclxuICAgICAgc2Vzc2lvbk5hbWVcclxuICAgICAgc2Vzc2lvbkNvZGVcclxuICAgICAgaWRcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCB1cGRhdGVFZHVjYXRpb25UeXBlTXV0YXRpb24gPSBncWxgXHJcbiAgbXV0YXRpb24gdXBkYXRlRWR1Y2F0aW9uVHlwZU11dGF0aW9uKFxyXG4gICAgJGlkOiBJRCFcclxuICAgICRlZHVjYXRpb25UeXBlTmFtZTogU3RyaW5nXHJcbiAgICAkZWR1Y2F0aW9uVHlwZUNvZGU6IFN0cmluZ1xyXG4gICkge1xyXG4gICAgdXBkYXRlRWR1Y2F0aW9uVHlwZShcclxuICAgICAgaWQ6ICRpZFxyXG4gICAgICBlZHVjYXRpb25UeXBlTmFtZTogJGVkdWNhdGlvblR5cGVOYW1lXHJcbiAgICAgIGVkdWNhdGlvblR5cGVDb2RlOiAkZWR1Y2F0aW9uVHlwZUNvZGVcclxuICAgICkge1xyXG4gICAgICBpZFxyXG4gICAgICBlZHVjYXRpb25UeXBlTmFtZVxyXG4gICAgICBlZHVjYXRpb25UeXBlQ29kZVxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuY29uc3QgdXBkYXRlU3ViamVjdE11dGF0aW9uID0gZ3FsYFxyXG4gIG11dGF0aW9uIHVwZGF0ZVN1YmplY3RNdXRhdGlvbihcclxuICAgICRpZDogSUQhXHJcbiAgICAkc3ViamVjdE5hbWU6IFN0cmluZ1xyXG4gICAgJHN1YmplY3RDb2RlOiBTdHJpbmdcclxuICApIHtcclxuICAgIHVwZGF0ZVN1YmplY3QoXHJcbiAgICAgIGlkOiAkaWRcclxuICAgICAgc3ViamVjdE5hbWU6ICRzdWJqZWN0TmFtZVxyXG4gICAgICBzdWJqZWN0Q29kZTogJHN1YmplY3RDb2RlXHJcbiAgICApIHtcclxuICAgICAgc3ViamVjdE5hbWVcclxuICAgICAgc3ViamVjdENvZGVcclxuICAgICAgaWRcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCB1cGRhdGVSYW5rTXV0YXRpb24gPSBncWxgXHJcbiAgbXV0YXRpb24gdXBkYXRlUmFua011dGF0aW9uKCRpZDogSUQhLCAkcmFua05hbWU6IFN0cmluZywgJHJhbmtDb2RlOiBTdHJpbmcpIHtcclxuICAgIHVwZGF0ZVJhbmsoaWQ6ICRpZCwgcmFua05hbWU6ICRyYW5rTmFtZSwgcmFua0NvZGU6ICRyYW5rQ29kZSkge1xyXG4gICAgICBpZFxyXG4gICAgICByYW5rTmFtZVxyXG4gICAgICByYW5rQ29kZVxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IHVwZGF0ZVNwZWNpYWx0eU11dGF0aW9uID0gZ3FsYFxyXG4gIG11dGF0aW9uIHVwZGF0ZVNwZWNpYWx0eU11dGF0aW9uKFxyXG4gICAgJGlkOiBJRCFcclxuICAgICRzcGVjaWFsdHlOYW1lOiBTdHJpbmdcclxuICAgICRzcGVjaWFsdHlDb2RlOiBTdHJpbmdcclxuICApIHtcclxuICAgIHVwZGF0ZVNwZWNpYWx0eShcclxuICAgICAgaWQ6ICRpZFxyXG4gICAgICBzcGVjaWFsdHlOYW1lOiAkc3BlY2lhbHR5TmFtZVxyXG4gICAgICBzcGVjaWFsdHlDb2RlOiAkc3BlY2lhbHR5Q29kZVxyXG4gICAgKSB7XHJcbiAgICAgIHNwZWNpYWx0eU5hbWVcclxuICAgICAgc3BlY2lhbHR5Q29kZVxyXG4gICAgICBpZFxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IHVwZGF0ZURpdmlzaW9uTXV0YXRpb24gPSBncWxgXHJcbiAgbXV0YXRpb24gdXBkYXRlRGl2aXNpb25NdXRhdGlvbihcclxuICAgICRpZDogSUQhXHJcbiAgICAkZGl2TmFtZTogU3RyaW5nXHJcbiAgICAkZGl2Q29kZTogU3RyaW5nXHJcbiAgKSB7XHJcbiAgICB1cGRhdGVEaXZpc2lvbihpZDogJGlkLCBkaXZOYW1lOiAkZGl2TmFtZSwgZGl2Q29kZTogJGRpdkNvZGUpIHtcclxuICAgICAgaWRcclxuICAgICAgZGl2TmFtZVxyXG4gICAgICBkaXZDb2RlXHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgdXBkYXRlUmVnaW9uTXV0YXRpb24gPSBncWxgXHJcbiAgbXV0YXRpb24gdXBkYXRlUmVnaW9uTXV0YXRpb24oJGlkOiBJRCEsICRyZWdOYW1lOiBTdHJpbmcsICRyZWdDb2RlOiBTdHJpbmcpIHtcclxuICAgIHVwZGF0ZVJlZ2lvbihpZDogJGlkLCByZWdOYW1lOiAkcmVnTmFtZSwgcmVnQ29kZTogJHJlZ0NvZGUpIHtcclxuICAgICAgaWRcclxuICAgICAgcmVnTmFtZVxyXG4gICAgICByZWdDb2RlXHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgY3JlYXRlTmV3UmVwb3J0TXV0YXRpb24gPSBncWxgXHJcbiAgbXV0YXRpb24gY3JlYXRlTmV3UmVwb3J0TXV0YXRpb24oXHJcbiAgICAkcmVwb3J0SW1hZ2U6IFN0cmluZyFcclxuICAgICRyZXBvcnROYW1lOiBTdHJpbmchXHJcbiAgICAkY2VudGVyRXhhbVNlc3Npb25FeGFtaW5lcjogQ2VudGVyRXhhbVNlc3Npb25FeGFtaW5lcldoZXJlVW5pcXVlSW5wdXQhXHJcbiAgKSB7XHJcbiAgICBjcmVhdGVSZXBvcnQoXHJcbiAgICAgIHJlcG9ydEltYWdlOiAkcmVwb3J0SW1hZ2VcclxuICAgICAgcmVwb3J0TmFtZTogJHJlcG9ydE5hbWVcclxuICAgICAgY2VudGVyRXhhbVNlc3Npb25FeGFtaW5lcjogJGNlbnRlckV4YW1TZXNzaW9uRXhhbWluZXJcclxuICAgICkge1xyXG4gICAgICBpZFxyXG4gICAgICByZXBvcnROYW1lXHJcbiAgICAgIHJlcG9ydEltYWdlXHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgY3JlYXRlUmVnaXN0cmF0aW9uTXV0YXRpb24gPSBncWxgXHJcbiAgbXV0YXRpb24gY3JlYXRlUmVnaXN0cmF0aW9uTXV0YXRpb24oXHJcbiAgICAkY2FuZGlkYXRlOiBDYW5kaWRhdGVXaGVyZVVuaXF1ZUlucHV0IVxyXG4gICAgJGNhbmRFeGFtU2Vzc2lvbjogU3RyaW5nIVxyXG4gICAgJGNhbmRSZWdpc3RyYXRpb25OdW1iZXI6IFN0cmluZyFcclxuICAgICRjZW50ZXJFeGFtU2Vzc2lvbjogQ2VudGVyRXhhbVNlc3Npb25XaGVyZVVuaXF1ZUlucHV0IVxyXG4gICAgJGNlbnRlckV4YW1TZXNzaW9uU3BlY2lhbHR5OiBDZW50ZXJFeGFtU2Vzc2lvblNwZWNpYWx0eVdoZXJlVW5pcXVlSW5wdXQhXHJcbiAgICAkc3BlY2lhbHR5OiBTcGVjaWFsdHlXaGVyZVVuaXF1ZUlucHV0IVxyXG4gICAgJGFwdGl0dWRlOiBTdHJpbmchXHJcbiAgICAkRVBGMTogU3RyaW5nIVxyXG4gICAgJEVQRjI6IFN0cmluZyFcclxuICApIHtcclxuICAgIGNyZWF0ZVJlZ2lzdHJhdGlvbihcclxuICAgICAgY2FuZGlkYXRlOiAkY2FuZGlkYXRlXHJcbiAgICAgIGNhbmRFeGFtU2Vzc2lvbjogJGNhbmRFeGFtU2Vzc2lvblxyXG4gICAgICBjYW5kUmVnaXN0cmF0aW9uTnVtYmVyOiAkY2FuZFJlZ2lzdHJhdGlvbk51bWJlclxyXG4gICAgICBjZW50ZXJFeGFtU2Vzc2lvbjogJGNlbnRlckV4YW1TZXNzaW9uXHJcbiAgICAgIGNlbnRlckV4YW1TZXNzaW9uU3BlY2lhbHR5OiAkY2VudGVyRXhhbVNlc3Npb25TcGVjaWFsdHlcclxuICAgICAgc3BlY2lhbHR5OiAkc3BlY2lhbHR5XHJcbiAgICAgIEVQRjE6ICRFUEYxXHJcbiAgICAgIEVQRjI6ICRFUEYyXHJcbiAgICAgIGFwdGl0dWRlOiAkYXB0aXR1ZGVcclxuICAgICkge1xyXG4gICAgICBpZFxyXG4gICAgICBjZW50ZXJFeGFtU2Vzc2lvbiB7XHJcbiAgICAgICAgaWRcclxuICAgICAgICBjZW50ZXIge1xyXG4gICAgICAgICAgaWRcclxuICAgICAgICAgIGNlbnRlck5hbWVcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgY2FuZGlkYXRlIHtcclxuICAgICAgICBpZFxyXG4gICAgICAgIGNhbmQxc3ROYW1lXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBjcmVhdGVDZW50ZXJFeGFtU2Vzc2lvbk11dGF0aW9uID0gZ3FsYFxyXG4gIG11dGF0aW9uIGNyZWF0ZUNlbnRlckV4YW1TZXNzaW9uTXV0YXRpb24oXHJcbiAgICAkZXhhbVNlc3Npb246IEV4YW1TZXNzaW9uV2hlcmVVbmlxdWVJbnB1dCFcclxuICAgICRjZW50ZXI6IENlbnRlcldoZXJlVW5pcXVlSW5wdXQhXHJcbiAgKSB7XHJcbiAgICBjcmVhdGVDZW50ZXJFeGFtU2Vzc2lvbihleGFtU2Vzc2lvbjogJGV4YW1TZXNzaW9uLCBjZW50ZXI6ICRjZW50ZXIpIHtcclxuICAgICAgaWRcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBjcmVhdGVQaGFzZVJhbmtNdXRhdGlvbiA9IGdxbGBcclxuICBtdXRhdGlvbiBjcmVhdGVQaGFzZVJhbmtNdXRhdGlvbihcclxuICAgICRwaGFzZTogUGhhc2VXaGVyZVVuaXF1ZUlucHV0IVxyXG4gICAgJHJhbms6IFJhbmtXaGVyZVVuaXF1ZUlucHV0IVxyXG4gICkge1xyXG4gICAgY3JlYXRlUGhhc2VSYW5rKHBoYXNlOiAkcGhhc2UsIHJhbms6ICRyYW5rKSB7XHJcbiAgICAgIGlkXHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgY3JlYXRlQ2VudGVyRXhhbVNlc3Npb25FeGFtaW5lck11dGF0aW9uID0gZ3FsYFxyXG4gIG11dGF0aW9uIGNyZWF0ZUNlbnRlckV4YW1TZXNzaW9uRXhhbWluZXJNdXRhdGlvbihcclxuICAgICRjZW50ZXJFeGFtU2Vzc2lvbjogQ2VudGVyRXhhbVNlc3Npb25XaGVyZVVuaXF1ZUlucHV0IVxyXG4gICAgJGV4YW1pbmVyOiBFeGFtaW5lcldoZXJlVW5pcXVlSW5wdXQhXHJcbiAgICAkcGhhc2VSYW5rOiBQaGFzZVJhbmtXaGVyZVVuaXF1ZUlucHV0IVxyXG4gICkge1xyXG4gICAgY3JlYXRlQ2VudGVyRXhhbVNlc3Npb25FeGFtaW5lcihcclxuICAgICAgcGhhc2VSYW5rOiAkcGhhc2VSYW5rXHJcbiAgICAgIGNlbnRlckV4YW1TZXNzaW9uOiAkY2VudGVyRXhhbVNlc3Npb25cclxuICAgICAgZXhhbWluZXI6ICRleGFtaW5lclxyXG4gICAgKSB7XHJcbiAgICAgIGlkXHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgY3JlYXRlQ2VudGVyRXhhbVNlc3Npb25TcGVjaWFsdHlNdXRhdGlvbiA9IGdxbGBcclxuICBtdXRhdGlvbiBjcmVhdGVDZW50ZXJFeGFtU2Vzc2lvblNwZWNpYWx0eU11dGF0aW9uKFxyXG4gICAgJHNwZWNpYWx0eTogU3BlY2lhbHR5V2hlcmVVbmlxdWVJbnB1dCFcclxuICAgICRjZW50ZXJFeGFtU2Vzc2lvbjogQ2VudGVyRXhhbVNlc3Npb25XaGVyZVVuaXF1ZUlucHV0IVxyXG4gICkge1xyXG4gICAgY3JlYXRlQ2VudGVyRXhhbVNlc3Npb25TcGVjaWFsdHkoXHJcbiAgICAgIHNwZWNpYWx0eTogJHNwZWNpYWx0eVxyXG4gICAgICBjZW50ZXJFeGFtU2Vzc2lvbjogJGNlbnRlckV4YW1TZXNzaW9uXHJcbiAgICApIHtcclxuICAgICAgaWRcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBjcmVhdGVEaXZpc2lvbk11dGF0aW9uID0gZ3FsYFxyXG4gIG11dGF0aW9uIGNyZWF0ZURpdmlzaW9uTXV0YXRpb24oXHJcbiAgICAkZGl2TmFtZTogU3RyaW5nIVxyXG4gICAgJGRpdkNvZGU6IFN0cmluZyFcclxuICAgICRyZWdpb246IFJlZ2lvbldoZXJlVW5pcXVlSW5wdXQhXHJcbiAgKSB7XHJcbiAgICBjcmVhdGVEaXZpc2lvbihkaXZOYW1lOiAkZGl2TmFtZSwgZGl2Q29kZTogJGRpdkNvZGUsIHJlZ2lvbjogJHJlZ2lvbikge1xyXG4gICAgICBpZFxyXG4gICAgICBkaXZOYW1lXHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgY3JlYXRlQ2VudGVyTXV0YXRpb24gPSBncWxgXHJcbiAgbXV0YXRpb24gY3JlYXRlQ2VudGVyTXV0YXRpb24oXHJcbiAgICAkY2VudGVyTmFtZTogU3RyaW5nIVxyXG4gICAgJGNlbnRlck51bWJlcjogSW50XHJcbiAgICAkY2VudGVyQ29kZTogU3RyaW5nIVxyXG4gICAgJHRvd246IFRvd25XaGVyZVVuaXF1ZUlucHV0IVxyXG4gICkge1xyXG4gICAgY3JlYXRlQ2VudGVyKFxyXG4gICAgICBjZW50ZXJOYW1lOiAkY2VudGVyTmFtZVxyXG4gICAgICBjZW50ZXJOdW1iZXI6ICRjZW50ZXJOdW1iZXJcclxuICAgICAgY2VudGVyQ29kZTogJGNlbnRlckNvZGVcclxuICAgICAgdG93bjogJHRvd25cclxuICAgICkge1xyXG4gICAgICBpZFxyXG4gICAgICBjZW50ZXJOYW1lXHJcbiAgICAgIGNlbnRlclNlY3JldENvZGVcclxuICAgICAgY2VudGVyQ29kZVxyXG4gICAgICB0b3duIHtcclxuICAgICAgICB0b3duTmFtZVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgY3JlYXRlU3BlY2lhbHR5TXV0YXRpb24gPSBncWxgXHJcbiAgbXV0YXRpb24gY3JlYXRlU3BlY2lhbHR5TXV0YXRpb24oXHJcbiAgICAkc3BlY2lhbHR5TmFtZTogU3RyaW5nIVxyXG4gICAgJHNwZWNpYWx0eUNvZGU6IFN0cmluZyFcclxuICAgICRlZHVjYXRpb25UeXBlOiBFZHVjYXRpb25UeXBlV2hlcmVVbmlxdWVJbnB1dCFcclxuICApIHtcclxuICAgIGNyZWF0ZVNwZWNpYWx0eShcclxuICAgICAgc3BlY2lhbHR5TmFtZTogJHNwZWNpYWx0eU5hbWVcclxuICAgICAgc3BlY2lhbHR5Q29kZTogJHNwZWNpYWx0eUNvZGVcclxuICAgICAgZWR1Y2F0aW9uVHlwZTogJGVkdWNhdGlvblR5cGVcclxuICAgICkge1xyXG4gICAgICBpZFxyXG4gICAgICBzcGVjaWFsdHlOYW1lXHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5jb25zdCBjcmVhdGVFZHVjYXRpb25UeXBlTXV0YXRpb24gPSBncWxgXHJcbiAgbXV0YXRpb24gY3JlYXRlRWR1Y2F0aW9uVHlwZU11dGF0aW9uKFxyXG4gICAgJGVkdWNhdGlvblR5cGVOYW1lOiBTdHJpbmchXHJcbiAgICAkZWR1Y2F0aW9uVHlwZUNvZGU6IFN0cmluZyFcclxuICApIHtcclxuICAgIGNyZWF0ZUVkdWNhdGlvblR5cGUoXHJcbiAgICAgIGVkdWNhdGlvblR5cGVOYW1lOiAkZWR1Y2F0aW9uVHlwZU5hbWVcclxuICAgICAgZWR1Y2F0aW9uVHlwZUNvZGU6ICRlZHVjYXRpb25UeXBlQ29kZVxyXG4gICAgKSB7XHJcbiAgICAgIGlkXHJcbiAgICAgIGVkdWNhdGlvblR5cGVOYW1lXHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgY3JlYXRlVG93bk11dGF0aW9uID0gZ3FsYFxyXG4gIG11dGF0aW9uIGNyZWF0ZVRvd25NdXRhdGlvbihcclxuICAgICR0b3duTmFtZTogU3RyaW5nIVxyXG4gICAgJHRvd25Db2RlOiBTdHJpbmchXHJcbiAgICAkc3ViRGl2OiBTdWJEaXZpc2lvbldoZXJlVW5pcXVlSW5wdXQhXHJcbiAgKSB7XHJcbiAgICBjcmVhdGVUb3duKHRvd25OYW1lOiAkdG93bk5hbWUsIHRvd25Db2RlOiAkdG93bkNvZGUsIHN1YkRpdjogJHN1YkRpdikge1xyXG4gICAgICBpZFxyXG4gICAgICB0b3duTmFtZVxyXG4gICAgICB0b3duQ29kZVxyXG4gICAgICBzdWJEaXYge1xyXG4gICAgICAgIHN1YkRpdk5hbWVcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IGNyZWF0ZU5ld1N1YmplY3RNdXRhdGlvbiA9IGdxbGBcclxuICBtdXRhdGlvbiBjcmVhdGVOZXdTdWJqZWN0TXV0YXRpb24oXHJcbiAgICAkc3ViamVjdE5hbWU6IFN0cmluZyFcclxuICAgICRzdWJqZWN0Q29kZTogU3RyaW5nIVxyXG4gICAgJHN1YmplY3RUeXBlOiBTdHJpbmchXHJcbiAgICAkc3ViamVjdEdyb3VwOiBTdHJpbmchXHJcbiAgICAkZWR1Y1R5cGU6IEVkdWNhdGlvblR5cGVXaGVyZVVuaXF1ZUlucHV0IVxyXG4gICkge1xyXG4gICAgY3JlYXRlU3ViamVjdChcclxuICAgICAgc3ViamVjdE5hbWU6ICRzdWJqZWN0TmFtZVxyXG4gICAgICBlZHVjVHlwZTogJGVkdWNUeXBlXHJcbiAgICAgIHN1YmplY3RDb2RlOiAkc3ViamVjdENvZGVcclxuICAgICAgc3ViamVjdFR5cGU6ICRzdWJqZWN0VHlwZVxyXG4gICAgICBzdWJqZWN0R3JvdXA6ICRzdWJqZWN0R3JvdXBcclxuICAgICkge1xyXG4gICAgICBzdWJqZWN0Q29kZVxyXG4gICAgICBzdWJqZWN0TmFtZVxyXG4gICAgICBzdWJqZWN0VHlwZVxyXG4gICAgICBzdWJqZWN0R3JvdXBcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBjcmVhdGVTdWJEaXZpc2lvbk11dGF0aW9uID0gZ3FsYFxyXG4gIG11dGF0aW9uIGNyZWF0ZVN1YkRpdmlzaW9uTXV0YXRpb24oXHJcbiAgICAkc3ViRGl2TmFtZTogU3RyaW5nIVxyXG4gICAgJHN1YkRpdkNvZGU6IFN0cmluZyFcclxuICAgICRkaXZpc2lvbjogRGl2aXNpb25XaGVyZVVuaXF1ZUlucHV0IVxyXG4gICkge1xyXG4gICAgY3JlYXRlU3ViRGl2aXNpb24oXHJcbiAgICAgIHN1YkRpdk5hbWU6ICRzdWJEaXZOYW1lXHJcbiAgICAgIHN1YkRpdkNvZGU6ICRzdWJEaXZDb2RlXHJcbiAgICAgIGRpdmlzaW9uOiAkZGl2aXNpb25cclxuICAgICkge1xyXG4gICAgICBpZFxyXG4gICAgICBzdWJEaXZOYW1lXHJcbiAgICAgIHN1YkRpdkNvZGVcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBjcmVhdGVOZXdTZXNzaW9uTXV0YXRpb24gPSBncWxgXHJcbiAgbXV0YXRpb24gY3JlYXRlTmV3U2Vzc2lvbk11dGF0aW9uKFxyXG4gICAgJHNlc3Npb25OYW1lOiBTdHJpbmchXHJcbiAgICAkc2Vzc2lvbkNvZGU6IFN0cmluZyFcclxuICApIHtcclxuICAgIGNyZWF0ZVNlc3Npb24oc2Vzc2lvbk5hbWU6ICRzZXNzaW9uTmFtZSwgc2Vzc2lvbkNvZGU6ICRzZXNzaW9uQ29kZSkge1xyXG4gICAgICBpZFxyXG4gICAgICBzZXNzaW9uTmFtZVxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IGNyZWF0ZU5ld1JhbmtNdXRhdGlvbiA9IGdxbGBcclxuICBtdXRhdGlvbiBjcmVhdGVOZXdSYW5rTXV0YXRpb24oJHJhbmtOYW1lOiBTdHJpbmchLCAkcmFua0NvZGU6IFN0cmluZyEpIHtcclxuICAgIGNyZWF0ZVJhbmsocmFua05hbWU6ICRyYW5rTmFtZSwgcmFua0NvZGU6ICRyYW5rQ29kZSkge1xyXG4gICAgICBpZFxyXG4gICAgICByYW5rTmFtZVxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IGNyZWF0ZU5ld1JlZ2lvbk11dGF0aW9uID0gZ3FsYFxyXG4gIG11dGF0aW9uIGNyZWF0ZU5ld1JlZ2lvbk11dGF0aW9uKCRyZWdOYW1lOiBTdHJpbmchLCAkcmVnQ29kZTogU3RyaW5nISkge1xyXG4gICAgY3JlYXRlUmVnaW9uKHJlZ05hbWU6ICRyZWdOYW1lLCByZWdDb2RlOiAkcmVnQ29kZSkge1xyXG4gICAgICBpZFxyXG4gICAgICByZWdOYW1lXHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3Qgc2lnbnVwVXNlck11dGF0aW9uID0gZ3FsYFxyXG4gIG11dGF0aW9uIHNpZ251cFVzZXJNdXRhdGlvbihcclxuICAgICRuYW1lOiBTdHJpbmchXHJcbiAgICAkZW1haWw6IFN0cmluZyFcclxuICAgICRwYXNzd29yZDogU3RyaW5nIVxyXG4gICkge1xyXG4gICAgc2lnbnVwKHBhc3N3b3JkOiAkcGFzc3dvcmQsIG5hbWU6ICRuYW1lLCBlbWFpbDogJGVtYWlsKSB7XHJcbiAgICAgIGlkXHJcbiAgICAgIG5hbWVcclxuICAgICAgZW1haWxcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBsb2dpblVzZXJNdXRhdGlvbiA9IGdxbGBcclxuICBtdXRhdGlvbiBsb2dpblVzZXJNdXRhdGlvbigkZW1haWw6IFN0cmluZyEsICRwYXNzd29yZDogU3RyaW5nISkge1xyXG4gICAgbG9naW4oZW1haWw6ICRlbWFpbCwgcGFzc3dvcmQ6ICRwYXNzd29yZCkge1xyXG4gICAgICBpZFxyXG4gICAgICBuYW1lXHJcbiAgICAgIGVtYWlsXHJcbiAgICAgIHBhc3N3b3JkXHJcbiAgICAgIHBlcm1pc3Npb25zXHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgcmVxdWVzdFJlc2V0TXV0YXRpb24gPSBncWxgXHJcbiAgbXV0YXRpb24gcmVxdWVzdFJlc2V0TXV0YXRpb24oJGVtYWlsOiBTdHJpbmchKSB7XHJcbiAgICByZXF1ZXN0UmVzZXQoZW1haWw6ICRlbWFpbCkge1xyXG4gICAgICBtZXNzYWdlXHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgY3JlYXRlTmV3Q291bnRyeU11dGF0aW9uID0gZ3FsYFxyXG4gIG11dGF0aW9uIGNyZWF0ZU5ld0NvdW50cnlNdXRhdGlvbihcclxuICAgICRjb3VudHJ5TmFtZTogU3RyaW5nIVxyXG4gICAgJGNvdW50cnlDb2RlOiBTdHJpbmchXHJcbiAgKSB7XHJcbiAgICBjcmVhdGVDb3VudHJ5KGNvdW50cnlOYW1lOiAkY291bnRyeU5hbWUsIGNvdW50cnlDb2RlOiAkY291bnRyeUNvZGUpIHtcclxuICAgICAgaWRcclxuICAgICAgY291bnRyeU5hbWVcclxuICAgICAgY291bnRyeUNvZGVcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBjcmVhdGVQaGFzZU11dGF0aW9uID0gZ3FsYFxyXG4gIG11dGF0aW9uIGNyZWF0ZVBoYXNlTXV0YXRpb24oJHBoYXNlTmFtZTogU3RyaW5nISwgJHBoYXNlQ29kZTogU3RyaW5nISkge1xyXG4gICAgY3JlYXRlUGhhc2UocGhhc2VOYW1lOiAkcGhhc2VOYW1lLCBwaGFzZUNvZGU6ICRwaGFzZUNvZGUpIHtcclxuICAgICAgaWRcclxuICAgICAgcGhhc2VOYW1lXHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgY3JlYXRlQXR0ZW5kYW5jZU11dGF0aW9uID0gZ3FsYFxyXG4gIG11dGF0aW9uIGNyZWF0ZUF0dGVuZGFuY2VNdXRhdGlvbihcclxuICAgICRzdWJqZWN0U3BlY2lhbHR5OiBTdWJqZWN0U3BlY2lhbHR5V2hlcmVVbmlxdWVJbnB1dCFcclxuICAgICRjZW50ZXJFeGFtU2Vzc2lvblNwZWNpYWx0eTogQ2VudGVyRXhhbVNlc3Npb25TcGVjaWFsdHlXaGVyZVVuaXF1ZUlucHV0IVxyXG4gICAgJGNvbGxlY3RlZDogU3RyaW5nIVxyXG4gICAgJGNhbmRFeGFtU2VjcmV0Q29kZTogU3RyaW5nIVxyXG4gICAgJGhhbmRpbjogU3RyaW5nIVxyXG4gICkge1xyXG4gICAgY3JlYXRlQXR0ZW5kYW5jZShcclxuICAgICAgc3ViamVjdFNwZWNpYWx0eTogJHN1YmplY3RTcGVjaWFsdHlcclxuICAgICAgY2VudGVyRXhhbVNlc3Npb25TcGVjaWFsdHk6ICRjZW50ZXJFeGFtU2Vzc2lvblNwZWNpYWx0eVxyXG4gICAgICBjb2xsZWN0ZWQ6ICRjb2xsZWN0ZWRcclxuICAgICAgY2FuZEV4YW1TZWNyZXRDb2RlOiAkY2FuZEV4YW1TZWNyZXRDb2RlXHJcbiAgICAgIGhhbmRpbjogJGhhbmRpblxyXG4gICAgKSB7XHJcbiAgICAgIGlkXHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgY3JlYXRlRXhhbU11dGF0aW9uID0gZ3FsYFxyXG4gIG11dGF0aW9uIGNyZWF0ZUV4YW1NdXRhdGlvbigkZXhhbU5hbWU6IFN0cmluZyEsICRleGFtQ29kZTogU3RyaW5nISkge1xyXG4gICAgY3JlYXRlRXhhbShleGFtTmFtZTogJGV4YW1OYW1lLCBleGFtQ29kZTogJGV4YW1Db2RlKSB7XHJcbiAgICAgIGlkXHJcbiAgICAgIGV4YW1OYW1lXHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgcmVnaXN0ZXJTdWJqZWN0U3BlY2lhbHR5TXV0YXRpb24gPSBncWxgXHJcbiAgbXV0YXRpb24gcmVnaXN0ZXJTdWJqZWN0U3BlY2lhbHR5TXV0YXRpb24oXHJcbiAgICAkc3ViamVjdDogU3ViamVjdFdoZXJlVW5pcXVlSW5wdXQhXHJcbiAgICAkc3BlY2lhbHR5OiBTcGVjaWFsdHlXaGVyZVVuaXF1ZUlucHV0IVxyXG4gICAgJGNvZWZmOiBJbnQhXHJcbiAgKSB7XHJcbiAgICBjcmVhdGVTdWJqZWN0U3BlY2lhbHR5KFxyXG4gICAgICBzdWJqZWN0OiAkc3ViamVjdFxyXG4gICAgICBzcGVjaWFsdHk6ICRzcGVjaWFsdHlcclxuICAgICAgY29lZmY6ICRjb2VmZlxyXG4gICAgKSB7XHJcbiAgICAgIGlkXHJcbiAgICAgIHNwZWNpYWx0eSB7XHJcbiAgICAgICAgaWRcclxuICAgICAgICBzcGVjaWFsdHlOYW1lXHJcbiAgICAgICAgc3ViamVjdFNwZWNpYWx0eSB7XHJcbiAgICAgICAgICBpZFxyXG4gICAgICAgICAgc3ViamVjdCB7XHJcbiAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgIHN1YmplY3ROYW1lXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgcmVnaXN0ZXJOZXdTdWJqZWN0U3BlY2lhbHR5TXV0YXRpb24gPSBncWxgXHJcbiAgbXV0YXRpb24gcmVnaXN0ZXJOZXdTdWJqZWN0U3BlY2lhbHR5TXV0YXRpb24oXHJcbiAgICAkc3BlY2lhbHR5OiBTcGVjaWFsdHlXaGVyZVVuaXF1ZUlucHV0IVxyXG4gICAgJHN1YmplY3Q6IFN1YmplY3RXaGVyZVVuaXF1ZUlucHV0IVxyXG4gICAgJGNvZWZmOiBJbnQhXHJcbiAgKSB7XHJcbiAgICBjcmVhdGVTdWJqZWN0U3BlY2lhbHR5KFxyXG4gICAgICBzcGVjaWFsdHk6ICRzcGVjaWFsdHlcclxuICAgICAgc3ViamVjdDogJHN1YmplY3RcclxuICAgICAgY29lZmY6ICRjb2VmZlxyXG4gICAgKSB7XHJcbiAgICAgIGlkXHJcbiAgICAgIHNwZWNpYWx0eSB7XHJcbiAgICAgICAgaWRcclxuICAgICAgICBzcGVjaWFsdHlOYW1lXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBjcmVhdGVDYW5kaWRhdGVNdXRhdGlvbiA9IGdxbGBcclxuICBtdXRhdGlvbiBjcmVhdGVDYW5kaWRhdGVNdXRhdGlvbihcclxuICAgICRjYW5kMXN0TmFtZTogU3RyaW5nIVxyXG4gICAgJGNhbmQybmROYW1lOiBTdHJpbmdcclxuICAgICRjYW5kM3JkTmFtZTogU3RyaW5nXHJcbiAgICAkZGFkTmFtZTogU3RyaW5nXHJcbiAgICAkbW9tTmFtZTogU3RyaW5nXHJcbiAgICAkZW1haWw6IFN0cmluZyFcclxuICAgICRpbWFnZTogU3RyaW5nIVxyXG4gICAgJHBob25lTnVtYjogSW50XHJcbiAgICAkZGF0ZU9mQmlydGg6IERhdGVUaW1lXHJcbiAgICAkYmlydGhDZXJ0TnVtYmVyOiBTdHJpbmdcclxuICAgICRwbGFjZU9mQmlydGg6IFN0cmluZ1xyXG4gICAgJGdlbmRlcjogU3RyaW5nIVxyXG4gICkge1xyXG4gICAgY3JlYXRlQ2FuZGlkYXRlKFxyXG4gICAgICBjYW5kMXN0TmFtZTogJGNhbmQxc3ROYW1lXHJcbiAgICAgIGNhbmQybmROYW1lOiAkY2FuZDJuZE5hbWVcclxuICAgICAgZGFkTmFtZTogJGRhZE5hbWVcclxuICAgICAgbW9tTmFtZTogJG1vbU5hbWVcclxuICAgICAgY2FuZDNyZE5hbWU6ICRjYW5kM3JkTmFtZVxyXG4gICAgICBlbWFpbDogJGVtYWlsXHJcbiAgICAgIGltYWdlOiAkaW1hZ2VcclxuICAgICAgcGhvbmVOdW1iOiAkcGhvbmVOdW1iXHJcbiAgICAgIGRhdGVPZkJpcnRoOiAkZGF0ZU9mQmlydGhcclxuICAgICAgYmlydGhDZXJ0TnVtYmVyOiAkYmlydGhDZXJ0TnVtYmVyXHJcbiAgICAgIHBsYWNlT2ZCaXJ0aDogJHBsYWNlT2ZCaXJ0aFxyXG4gICAgICBnZW5kZXI6ICRnZW5kZXJcclxuICAgICkge1xyXG4gICAgICBpZFxyXG4gICAgICBjYW5kMXN0TmFtZVxyXG4gICAgICBjYW5kMm5kTmFtZVxyXG4gICAgICBjYW5kM3JkTmFtZVxyXG4gICAgICBtb21OYW1lXHJcbiAgICAgIGRhZE5hbWVcclxuICAgICAgY2FuZENvZGVcclxuICAgICAgYmlydGhDZXJ0TnVtYmVyXHJcbiAgICAgIGRhdGVPZkJpcnRoXHJcbiAgICAgIGltYWdlXHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgY3JlYXRlTXVsdGlwbGVDYW5kaWRhdGVzTXV0YXRpb24gPSBncWxgXHJcbiAgbXV0YXRpb24gY3JlYXRlTXVsdGlwbGVDYW5kaWRhdGVzTXV0YXRpb24oXHJcbiAgICAkY2FuZDFzdE5hbWU6IFN0cmluZyFcclxuICAgICRjYW5kMm5kTmFtZTogU3RyaW5nXHJcbiAgICAkY2FuZDNyZE5hbWU6IFN0cmluZ1xyXG4gICAgJGRhZE5hbWU6IFN0cmluZ1xyXG4gICAgJG1vbU5hbWU6IFN0cmluZ1xyXG4gICAgJGVtYWlsOiBTdHJpbmchXHJcbiAgICAkaW1hZ2U6IFN0cmluZyFcclxuICAgICRwaG9uZU51bWI6IEludFxyXG4gICAgJGRhdGVPZkJpcnRoOiBEYXRlVGltZVxyXG4gICAgJGJpcnRoQ2VydE51bWJlcjogU3RyaW5nXHJcbiAgICAkcGxhY2VPZkJpcnRoOiBTdHJpbmdcclxuICAgICRnZW5kZXI6IFN0cmluZyFcclxuICApIHtcclxuICAgIGNyZWF0ZU11bHRpcGxlQ2FuZGlkYXRlcyhcclxuICAgICAgY2FuZDFzdE5hbWU6ICRjYW5kMXN0TmFtZVxyXG4gICAgICBjYW5kMm5kTmFtZTogJGNhbmQybmROYW1lXHJcbiAgICAgIGRhZE5hbWU6ICRkYWROYW1lXHJcbiAgICAgIG1vbU5hbWU6ICRtb21OYW1lXHJcbiAgICAgIGNhbmQzcmROYW1lOiAkY2FuZDNyZE5hbWVcclxuICAgICAgZW1haWw6ICRlbWFpbFxyXG4gICAgICBpbWFnZTogJGltYWdlXHJcbiAgICAgIHBob25lTnVtYjogJHBob25lTnVtYlxyXG4gICAgICBkYXRlT2ZCaXJ0aDogJGRhdGVPZkJpcnRoXHJcbiAgICAgIGJpcnRoQ2VydE51bWJlcjogJGJpcnRoQ2VydE51bWJlclxyXG4gICAgICBwbGFjZU9mQmlydGg6ICRwbGFjZU9mQmlydGhcclxuICAgICAgZ2VuZGVyOiAkZ2VuZGVyXHJcbiAgICApIHtcclxuICAgICAgaWRcclxuICAgICAgY2FuZDFzdE5hbWVcclxuICAgICAgY2FuZDJuZE5hbWVcclxuICAgICAgY2FuZDNyZE5hbWVcclxuICAgICAgbW9tTmFtZVxyXG4gICAgICBkYWROYW1lXHJcbiAgICAgIGNhbmRDb2RlXHJcbiAgICAgIGdlbmRlclxyXG4gICAgICBiaXJ0aENlcnROdW1iZXJcclxuICAgICAgZGF0ZU9mQmlydGhcclxuICAgICAgaW1hZ2VcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBjcmVhdGVFeGFtaW5lck11dGF0aW9uID0gZ3FsYFxyXG4gIG11dGF0aW9uIGNyZWF0ZUV4YW1pbmVyTXV0YXRpb24oXHJcbiAgICAkZXhhbWluZXIxc3ROYW1lOiBTdHJpbmchXHJcbiAgICAkZXhhbWluZXIybmROYW1lOiBTdHJpbmchXHJcbiAgICAkZXhhbWluZXJPdGhlck5hbWVzOiBTdHJpbmdcclxuICAgICRleGFtaW5lckVtYWlsOiBTdHJpbmchXHJcbiAgICAkZXhhbWluZXJDTkk6IFN0cmluZyFcclxuICAgICRleGFtaW5lck1hdHJpY3VsZTogU3RyaW5nIVxyXG4gICAgJGV4YW1pbmVySW1hZ2U6IFN0cmluZyFcclxuICAgICRleGFtaW5lclBob25lOiBJbnQhXHJcbiAgICAkZ2VuZGVyOiBTdHJpbmchXHJcbiAgKSB7XHJcbiAgICBjcmVhdGVFeGFtaW5lcihcclxuICAgICAgZXhhbWluZXIxc3ROYW1lOiAkZXhhbWluZXIxc3ROYW1lXHJcbiAgICAgIGV4YW1pbmVyMm5kTmFtZTogJGV4YW1pbmVyMm5kTmFtZVxyXG4gICAgICBleGFtaW5lck90aGVyTmFtZXM6ICRleGFtaW5lck90aGVyTmFtZXNcclxuICAgICAgZXhhbWluZXJNYXRyaWN1bGU6ICRleGFtaW5lck1hdHJpY3VsZVxyXG4gICAgICBleGFtaW5lckNOSTogJGV4YW1pbmVyQ05JXHJcbiAgICAgIGV4YW1pbmVyRW1haWw6ICRleGFtaW5lckVtYWlsXHJcbiAgICAgIGV4YW1pbmVySW1hZ2U6ICRleGFtaW5lckltYWdlXHJcbiAgICAgIGV4YW1pbmVyUGhvbmU6ICRleGFtaW5lclBob25lXHJcbiAgICAgIGdlbmRlcjogJGdlbmRlclxyXG4gICAgKSB7XHJcbiAgICAgIGlkXHJcbiAgICAgIGV4YW1pbmVyMXN0TmFtZVxyXG4gICAgICBleGFtaW5lcjJuZE5hbWVcclxuICAgICAgZXhhbWluZXJPdGhlck5hbWVzXHJcbiAgICAgIGV4YW1pbmVyQ29kZVxyXG4gICAgICBleGFtaW5lckVtYWlsXHJcbiAgICAgIGV4YW1pbmVySW1hZ2VcclxuICAgICAgZXhhbWluZXJQaG9uZVxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbi8vKioqKioqKioqKioqY3JlYXRlIG11dGF0aW9ucyAgKi9cclxuXHJcbi8vLy8qKioqKioqKioqKioqKlVwZGF0ZSBtdXRhdGlvbnMgKi9cclxuXHJcbmNvbnN0IHVwZGF0ZVN1YkRpdmlzaW9uTXV0YXRpb24gPSBncWxgXHJcbiAgbXV0YXRpb24gdXBkYXRlU3ViRGl2aXNpb25NdXRhdGlvbihcclxuICAgICRpZDogSUQhXHJcbiAgICAkc3ViRGl2TmFtZTogU3RyaW5nXHJcbiAgICAkc3ViRGl2Q29kZTogU3RyaW5nXHJcbiAgKSB7XHJcbiAgICB1cGRhdGVTdWJEaXZpc2lvbihcclxuICAgICAgaWQ6ICRpZFxyXG4gICAgICBzdWJEaXZOYW1lOiAkc3ViRGl2TmFtZVxyXG4gICAgICBzdWJEaXZDb2RlOiAkc3ViRGl2Q29kZVxyXG4gICAgKSB7XHJcbiAgICAgIHN1YkRpdk5hbWVcclxuICAgICAgc3ViRGl2Q29kZVxyXG4gICAgICBpZFxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IHVwZGF0ZUNlbnRlck11dGF0aW9uID0gZ3FsYFxyXG4gIG11dGF0aW9uIHVwZGF0ZUNlbnRlck11dGF0aW9uKFxyXG4gICAgJGlkOiBJRCFcclxuICAgICRjZW50ZXJOYW1lOiBTdHJpbmdcclxuICAgICRjZW50ZXJDb2RlOiBTdHJpbmdcclxuICAgICRjZW50ZXJOdW1iZXI6IEludFxyXG4gICkge1xyXG4gICAgdXBkYXRlQ2VudGVyKFxyXG4gICAgICBpZDogJGlkXHJcbiAgICAgIGNlbnRlck5hbWU6ICRjZW50ZXJOYW1lXHJcbiAgICAgIGNlbnRlckNvZGU6ICRjZW50ZXJDb2RlXHJcbiAgICAgIGNlbnRlck51bWJlcjogJGNlbnRlck51bWJlclxyXG4gICAgKSB7XHJcbiAgICAgIGlkXHJcbiAgICAgIGNlbnRlck5hbWVcclxuICAgICAgY2VudGVyTnVtYmVyXHJcbiAgICAgIGNlbnRlckNvZGVcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCB1cGRhdGVUb3duTXV0YXRpb24gPSBncWxgXHJcbiAgbXV0YXRpb24gdXBkYXRlVG93bk11dGF0aW9uKCRpZDogSUQhLCAkdG93bk5hbWU6IFN0cmluZywgJHRvd25Db2RlOiBTdHJpbmcpIHtcclxuICAgIHVwZGF0ZVRvd24oaWQ6ICRpZCwgdG93bk5hbWU6ICR0b3duTmFtZSwgdG93bkNvZGU6ICR0b3duQ29kZSkge1xyXG4gICAgICB0b3duTmFtZVxyXG4gICAgICB0b3duQ29kZVxyXG4gICAgICBpZFxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IHVwZGF0ZUV4YW1NdXRhdGlvbiA9IGdxbGBcclxuICBtdXRhdGlvbiB1cGRhdGVFeGFtTXV0YXRpb24oJGlkOiBJRCEsICRleGFtTmFtZTogU3RyaW5nLCAkZXhhbUNvZGU6IFN0cmluZykge1xyXG4gICAgdXBkYXRlRXhhbShpZDogJGlkLCBleGFtTmFtZTogJGV4YW1OYW1lLCBleGFtQ29kZTogJGV4YW1Db2RlKSB7XHJcbiAgICAgIGV4YW1OYW1lXHJcbiAgICAgIGV4YW1Db2RlXHJcbiAgICAgIGlkXHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgdXBkYXRlU2NvcmVNdXRhdGlvbiA9IGdxbGBcclxuICBtdXRhdGlvbiB1cGRhdGVTY29yZU11dGF0aW9uKFxyXG4gICAgJHN1YmplY3RTcGVjaWFsdHk6IFN1YmplY3RTcGVjaWFsdHlXaGVyZVVuaXF1ZUlucHV0IVxyXG4gICAgJHN1YmplY3RBdmU6IEZsb2F0IVxyXG4gICAgJGNhbmRFeGFtU2VjcmV0Q29kZTogU3RyaW5nIVxyXG4gICkge1xyXG4gICAgdXBkYXRlU2NvcmUoXHJcbiAgICAgIHN1YmplY3RTcGVjaWFsdHk6ICRzdWJqZWN0U3BlY2lhbHR5XHJcbiAgICAgIHN1YmplY3RBdmU6ICRzdWJqZWN0QXZlXHJcbiAgICAgIGNhbmRFeGFtU2VjcmV0Q29kZTogJGNhbmRFeGFtU2VjcmV0Q29kZVxyXG4gICAgKSB7XHJcbiAgICAgIHN1YmplY3RBdmVcclxuICAgICAgY29lZmZcclxuICAgICAgaWRcclxuICAgICAgc3ViamVjdFNwZWNpYWx0eSB7XHJcbiAgICAgICAgaWRcclxuICAgICAgICBzdWJqZWN0Q29kZVxyXG4gICAgICAgIHN1YmplY3ROYW1lXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBlbnRlck1hcmtzTXV0YXRpb24gPSBncWxgXHJcbiAgbXV0YXRpb24gZW50ZXJNYXJrc011dGF0aW9uKFxyXG4gICAgJHN1YmplY3RTcGVjaWFsdHk6IFN1YmplY3RTcGVjaWFsdHlXaGVyZVVuaXF1ZUlucHV0IVxyXG4gICAgJHN1YmplY3RBdmU6IEZsb2F0IVxyXG4gICAgJGNhbmRFeGFtU2VjcmV0Q29kZTogU3RyaW5nIVxyXG4gICkge1xyXG4gICAgZW50ZXJNYXJrcyhcclxuICAgICAgc3ViamVjdFNwZWNpYWx0eTogJHN1YmplY3RTcGVjaWFsdHlcclxuICAgICAgc3ViamVjdEF2ZTogJHN1YmplY3RBdmVcclxuICAgICAgY2FuZEV4YW1TZWNyZXRDb2RlOiAkY2FuZEV4YW1TZWNyZXRDb2RlXHJcbiAgICApIHtcclxuICAgICAgc3ViamVjdEF2ZVxyXG4gICAgICBjb2VmZlxyXG4gICAgICBpZFxyXG4gICAgICBzdWJqZWN0U3BlY2lhbHR5IHtcclxuICAgICAgICBpZFxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuLy8gY29uc3QgZ2V0UERGRmlsZUJ1ZmZlciA9IGdxbGBcclxuLy8gbXV0YXRpb24gZ2V0UERGRmlsZUJ1ZmZlciAoJHVybDpTdHJpbmchKXtcclxuLy8gcHJpbnRQREYodXJsOiAkdXJsKXtcclxuXHJcbi8vIH1cclxuLy8gfVxyXG4vLyBgO1xyXG5cclxuY29uc3QgdXBkYXRlQ2FuZGlkYXRlTXV0YXRpb24gPSBncWxgXHJcbiAgbXV0YXRpb24gdXBkYXRlQ2FuZGlkYXRlTXV0YXRpb24oXHJcbiAgICAkaWQ6IElEIVxyXG4gICAgJGNhbmQxc3ROYW1lOiBTdHJpbmdcclxuICAgICRjYW5kMm5kTmFtZTogU3RyaW5nXHJcbiAgICAkY2FuZDNyZE5hbWU6IFN0cmluZ1xyXG4gICAgJG1vbU5hbWU6IFN0cmluZ1xyXG4gICAgJGRhZE5hbWU6IFN0cmluZ1xyXG4gICAgJGVtYWlsOiBTdHJpbmdcclxuICAgICRpbWFnZTogU3RyaW5nXHJcbiAgICAkcGhvbmVOdW1iOiBJbnRcclxuICAgICRwbGFjZU9mQmlydGg6IFN0cmluZ1xyXG4gICAgJGRhdGVPZkJpcnRoOiBEYXRlVGltZVxyXG4gICAgJGJpcnRoQ2VydE51bWJlcjogU3RyaW5nXHJcbiAgICAkZ2VuZGVyOiBTdHJpbmdcclxuICApIHtcclxuICAgIHVwZGF0ZUNhbmRpZGF0ZShcclxuICAgICAgaWQ6ICRpZFxyXG4gICAgICBjYW5kMXN0TmFtZTogJGNhbmQxc3ROYW1lXHJcbiAgICAgIGNhbmQybmROYW1lOiAkY2FuZDJuZE5hbWVcclxuICAgICAgY2FuZDNyZE5hbWU6ICRjYW5kM3JkTmFtZVxyXG4gICAgICBtb21OYW1lOiAkbW9tTmFtZVxyXG4gICAgICBkYWROYW1lOiAkZGFkTmFtZVxyXG4gICAgICBlbWFpbDogJGVtYWlsXHJcbiAgICAgIGltYWdlOiAkaW1hZ2VcclxuICAgICAgcGhvbmVOdW1iOiAkcGhvbmVOdW1iXHJcbiAgICAgIHBsYWNlT2ZCaXJ0aDogJHBsYWNlT2ZCaXJ0aFxyXG4gICAgICBkYXRlT2ZCaXJ0aDogJGRhdGVPZkJpcnRoXHJcbiAgICAgIGJpcnRoQ2VydE51bWJlcjogJGJpcnRoQ2VydE51bWJlclxyXG4gICAgICBnZW5kZXI6ICRnZW5kZXJcclxuICAgICkge1xyXG4gICAgICBpZFxyXG4gICAgICBjYW5kMXN0TmFtZVxyXG4gICAgICBjYW5kMm5kTmFtZVxyXG4gICAgICBjYW5kM3JkTmFtZVxyXG4gICAgICBtb21OYW1lXHJcbiAgICAgIGRhZE5hbWVcclxuICAgICAgZW1haWxcclxuICAgICAgaW1hZ2VcclxuICAgICAgcGhvbmVOdW1iXHJcbiAgICAgIHBsYWNlT2ZCaXJ0aFxyXG4gICAgICBkYXRlT2ZCaXJ0aFxyXG4gICAgICBiaXJ0aENlcnROdW1iZXJcclxuICAgICAgZ2VuZGVyXHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgdXBkYXRlRXhhbWluZXJNdXRhdGlvbiA9IGdxbGBcclxuICBtdXRhdGlvbiB1cGRhdGVFeGFtaW5lck11dGF0aW9uKFxyXG4gICAgJGlkOiBJRCFcclxuICAgICRleGFtaW5lcjFzdE5hbWU6IFN0cmluZ1xyXG4gICAgJGV4YW1pbmVyMm5kTmFtZTogU3RyaW5nXHJcbiAgICAkZXhhbWluZXJPdGhlck5hbWVzOiBTdHJpbmdcclxuICAgICRleGFtaW5lckNOSTogU3RyaW5nXHJcbiAgICAkZXhhbWluZXJQaG9uZTogSW50XHJcbiAgICAkZXhhbWluZXJFbWFpbDogU3RyaW5nXHJcbiAgICAkZXhhbWluZXJJbWFnZTogU3RyaW5nXHJcbiAgICAkZXhhbWluZXJNYXRyaWN1bGU6IFN0cmluZ1xyXG4gICAgJGV4YW1pbmVyQ29kZTogU3RyaW5nXHJcbiAgICAkZ2VuZGVyOiBTdHJpbmdcclxuICApIHtcclxuICAgIHVwZGF0ZUV4YW1pbmVyKFxyXG4gICAgICBpZDogJGlkXHJcbiAgICAgIGV4YW1pbmVyMXN0TmFtZTogJGV4YW1pbmVyMXN0TmFtZVxyXG4gICAgICBleGFtaW5lcjJuZE5hbWU6ICRleGFtaW5lcjJuZE5hbWVcclxuICAgICAgZXhhbWluZXJPdGhlck5hbWVzOiAkZXhhbWluZXJPdGhlck5hbWVzXHJcbiAgICAgIGV4YW1pbmVyQ05JOiAkZXhhbWluZXJDTklcclxuICAgICAgZXhhbWluZXJQaG9uZTogJGV4YW1pbmVyUGhvbmVcclxuICAgICAgZXhhbWluZXJFbWFpbDogJGV4YW1pbmVyRW1haWxcclxuICAgICAgZXhhbWluZXJNYXRyaWN1bGU6ICRleGFtaW5lck1hdHJpY3VsZVxyXG4gICAgICBleGFtaW5lckNvZGU6ICRleGFtaW5lckNvZGVcclxuICAgICAgZXhhbWluZXJJbWFnZTogJGV4YW1pbmVySW1hZ2VcclxuICAgICAgZ2VuZGVyOiAkZ2VuZGVyXHJcbiAgICApIHtcclxuICAgICAgaWRcclxuICAgICAgZXhhbWluZXIxc3ROYW1lXHJcbiAgICAgIGV4YW1pbmVyMm5kTmFtZVxyXG4gICAgICBleGFtaW5lck90aGVyTmFtZXNcclxuICAgICAgZXhhbWluZXJDTklcclxuICAgICAgZXhhbWluZXJQaG9uZVxyXG4gICAgICBleGFtaW5lckVtYWlsXHJcbiAgICAgIGV4YW1pbmVyTWF0cmljdWxlXHJcbiAgICAgIGV4YW1pbmVyQ29kZVxyXG4gICAgICBleGFtaW5lckltYWdlXHJcbiAgICAgIGdlbmRlclxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IHVwZGF0ZVNpZ25VcE11dGF0aW9uID0gZ3FsYFxyXG4gIG11dGF0aW9uIHVwZGF0ZVNpZ25VcE11dGF0aW9uKFxyXG4gICAgJGVtYWlsOiBTdHJpbmchXHJcbiAgICAkbmFtZTogU3RyaW5nIVxyXG4gICAgJHBhc3N3b3JkOiBTdHJpbmchXHJcbiAgKSB7XHJcbiAgICB1cGRhdGVVc2VyKGVtYWlsOiAkZW1haWwsIG5hbWU6ICRuYW1lLCBwYXNzd29yZDogJHBhc3N3b3JkKSB7XHJcbiAgICAgIGlkXHJcbiAgICAgIGVtYWlsXHJcbiAgICAgIG5hbWVcclxuICAgICAgcGFzc3dvcmRcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCB1cGRhdGVJdGVtTXV0YXRpb24gPSBhc3luYyAoZSwgdXBkYXRlTXV0YXRpb24pID0+IHtcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgY29uc29sZS5sb2coXCJVcGRhdGluZyBSZWdpb24hIVwiKTtcclxuICBjb25zdCByZXMgPSBhd2FpdCB1cGRhdGVNdXRhdGlvbih7XHJcbiAgICB2YXJpYWJsZXM6IHtcclxuICAgICAgaWQ6IHRoaXMucHJvcHMuaWQsXHJcbiAgICAgIC4uLnRoaXMuc3RhdGUsXHJcbiAgICB9LFxyXG4gIH0pO1xyXG4gIGNvbnNvbGUubG9nKFwiUmVnaW9uIFVwZGF0ZWQhIVwiKTtcclxufTtcclxuXHJcbi8vLy8qKioqKioqKioqKioqKlVwZGF0ZSBtdXRhdGlvbnMgKi9cclxuXHJcbi8vLy8vKioqKioqKioqKioqKioqKipEZWxldGUgTXV0YXRpb25zICovXHJcblxyXG5jb25zdCBkZWxldGVSZWdpb25NdXRhdGlvbiA9IGdxbGBcclxuICBtdXRhdGlvbiBkZWxldGVSZWdpb25NdXRhdGlvbigkaWQ6IElEISkge1xyXG4gICAgZGVsZXRlUmVnaW9uKGlkOiAkaWQpIHtcclxuICAgICAgaWRcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBkZWxldGVDZW50ZXJNdXRhdGlvbiA9IGdxbGBcclxuICBtdXRhdGlvbiBkZWxldGVDZW50ZXJNdXRhdGlvbigkaWQ6IElEISkge1xyXG4gICAgZGVsZXRlQ2VudGVyKGlkOiAkaWQpIHtcclxuICAgICAgaWRcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBkZWxldGVTdWJEaXZpc2lvbk11dGF0aW9uID0gZ3FsYFxyXG4gIG11dGF0aW9uIGRlbGV0ZVN1YkRpdmlzaW9uTXV0YXRpb24oJGlkOiBJRCEpIHtcclxuICAgIGRlbGV0ZVN1YkRpdmlzaW9uKGlkOiAkaWQpIHtcclxuICAgICAgaWRcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBkZWxldGVEaXZpc2lvbk11dGF0aW9uID0gZ3FsYFxyXG4gIG11dGF0aW9uIGRlbGV0ZURpdmlzaW9uTXV0YXRpb24oJGlkOiBJRCEpIHtcclxuICAgIGRlbGV0ZURpdmlzaW9uKGlkOiAkaWQpIHtcclxuICAgICAgaWRcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBkZWxldGVTdWJqZWN0TXV0YXRpb24gPSBncWxgXHJcbiAgbXV0YXRpb24gZGVsZXRlU3ViamVjdE11dGF0aW9uKCRpZDogSUQhKSB7XHJcbiAgICBkZWxldGVTdWJqZWN0KGlkOiAkaWQpIHtcclxuICAgICAgaWRcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBkZWxldGVUb3duTXV0YXRpb24gPSBncWxgXHJcbiAgbXV0YXRpb24gZGVsZXRlVG93bk11dGF0aW9uKCRpZDogSUQhKSB7XHJcbiAgICBkZWxldGVUb3duKGlkOiAkaWQpIHtcclxuICAgICAgaWRcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQge1xyXG4gIGNyZWF0ZUNhbmRpZGF0ZU11dGF0aW9uLFxyXG4gIGNyZWF0ZU5ld1N1YmplY3RNdXRhdGlvbixcclxuICBjcmVhdGVUb3duTXV0YXRpb24sXHJcbiAgY3JlYXRlQ2VudGVyRXhhbVNlc3Npb25FeGFtaW5lck11dGF0aW9uLFxyXG4gIGNyZWF0ZURpdmlzaW9uTXV0YXRpb24sXHJcbiAgY3JlYXRlUmVnaXN0cmF0aW9uTXV0YXRpb24sXHJcbiAgY3JlYXRlQ2VudGVyTXV0YXRpb24sXHJcbiAgY3JlYXRlRWR1Y2F0aW9uVHlwZU11dGF0aW9uLFxyXG4gIGNyZWF0ZVNwZWNpYWx0eU11dGF0aW9uLFxyXG4gIGNyZWF0ZVN1YkRpdmlzaW9uTXV0YXRpb24sXHJcbiAgY3JlYXRlTmV3U2Vzc2lvbk11dGF0aW9uLFxyXG4gIGNyZWF0ZU5ld1JhbmtNdXRhdGlvbixcclxuICBjcmVhdGVOZXdSZXBvcnRNdXRhdGlvbixcclxuICBjcmVhdGVOZXdSZWdpb25NdXRhdGlvbixcclxuICBjcmVhdGVFeGFtTXV0YXRpb24sXHJcbiAgcmVnaXN0ZXJTdWJqZWN0U3BlY2lhbHR5TXV0YXRpb24sXHJcbiAgcmVnaXN0ZXJOZXdTdWJqZWN0U3BlY2lhbHR5TXV0YXRpb24sXHJcbiAgdXBkYXRlQ2VudGVyTXV0YXRpb24sXHJcbiAgdXBkYXRlVG93bk11dGF0aW9uLFxyXG4gIHVwZGF0ZVNlc3Npb25NdXRhdGlvbixcclxuICB1cGRhdGVSZWdpb25NdXRhdGlvbixcclxuICB1cGRhdGVFeGFtTXV0YXRpb24sXHJcbiAgdXBkYXRlU3ViRGl2aXNpb25NdXRhdGlvbixcclxuICB1cGRhdGVDYW5kaWRhdGVNdXRhdGlvbixcclxuICB1cGRhdGVTY29yZU11dGF0aW9uLFxyXG4gIHVwZGF0ZURpdmlzaW9uTXV0YXRpb24sXHJcbiAgdXBkYXRlSXRlbU11dGF0aW9uLFxyXG4gIGNyZWF0ZUV4YW1pbmVyTXV0YXRpb24sXHJcbiAgY3JlYXRlUGhhc2VNdXRhdGlvbixcclxuICBjcmVhdGVDZW50ZXJFeGFtU2Vzc2lvblNwZWNpYWx0eU11dGF0aW9uLFxyXG4gIHVwZGF0ZVNwZWNpYWx0eU11dGF0aW9uLFxyXG4gIHVwZGF0ZVJhbmtNdXRhdGlvbixcclxuICBjcmVhdGVQaGFzZVJhbmtNdXRhdGlvbixcclxuICBjcmVhdGVOZXdDb3VudHJ5TXV0YXRpb24sXHJcbiAgY3JlYXRlTXVsdGlwbGVDYW5kaWRhdGVzTXV0YXRpb24sXHJcbiAgdXBkYXRlU3ViamVjdE11dGF0aW9uLFxyXG4gIHVwZGF0ZUV4YW1pbmVyTXV0YXRpb24sXHJcbiAgY3JlYXRlQ2VudGVyRXhhbVNlc3Npb25NdXRhdGlvbixcclxuICB1cGRhdGVFZHVjYXRpb25UeXBlTXV0YXRpb24sXHJcbiAgY3JlYXRlQXR0ZW5kYW5jZU11dGF0aW9uLFxyXG4gIHNpZ25JbkNhbmRpZGF0ZSxcclxuICBsb2dpblVzZXJNdXRhdGlvbixcclxuICB1cGRhdGVTaWduVXBNdXRhdGlvbixcclxuICBzaWdudXBVc2VyTXV0YXRpb24sXHJcbiAgZGVsZXRlU3ViamVjdE11dGF0aW9uLFxyXG4gIGRlbGV0ZVJlZ2lvbk11dGF0aW9uLFxyXG4gIGRlbGV0ZUNlbnRlck11dGF0aW9uLFxyXG4gIHNpZ25vdXRNdXRhdGlvbixcclxuICBlbnRlck1hcmtzTXV0YXRpb24sXHJcbiAgZGVsZXRlUmVwb3J0TXV0YXRpb24sXHJcbiAgZGVsZXRlVG93bk11dGF0aW9uLFxyXG4gIGRlbGV0ZURpdmlzaW9uTXV0YXRpb24sXHJcbiAgZGVsZXRlU3ViRGl2aXNpb25NdXRhdGlvbixcclxuICByZXF1ZXN0UmVzZXRNdXRhdGlvbixcclxufTtcclxuIiwiaW1wb3J0IGdxbCBmcm9tIFwiZ3JhcGhxbC10YWdcIjtcclxuXHJcbmNvbnN0IGN1cnJlbnRVc2VyUXVlcnkgPSBncWxgXHJcbiAgcXVlcnkgY3VycmVudFVzZXJRdWVyeSB7XHJcbiAgICBtZSB7XHJcbiAgICAgIGlkXHJcbiAgICAgIGVtYWlsXHJcbiAgICAgIG5hbWVcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBzaW5nbGVFZHVjYXRpb25UeXBlUXVlcnkgPSBncWxgXHJcbiAgcXVlcnkgc2luZ2xlRWR1Y2F0aW9uVHlwZVF1ZXJ5KCRpZDogSUQhKSB7XHJcbiAgICBlZHVjYXRpb25UeXBlKGlkOiAkaWQpIHtcclxuICAgICAgZWR1Y2F0aW9uVHlwZU5hbWVcclxuICAgICAgZWR1Y2F0aW9uVHlwZUNvZGVcclxuICAgICAgaWRcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBnZXRDRVNFeGFtaW5lclF1ZXJ5ID0gZ3FsYFxyXG4gIHF1ZXJ5IGdldENFU0V4YW1pbmVyUXVlcnkoXHJcbiAgICAkZXhhbWluZXI6IEV4YW1pbmVyV2hlcmVVbmlxdWVJbnB1dCFcclxuICAgICRjZW50ZXJFeGFtU2Vzc2lvbjogQ2VudGVyRXhhbVNlc3Npb25XaGVyZVVuaXF1ZUlucHV0IVxyXG4gICkge1xyXG4gICAgZ2V0Q2VudGVyRXhhbVNlc3Npb25FeGFtaW5lcnMoXHJcbiAgICAgIGV4YW1pbmVyOiAkZXhhbWluZXJcclxuICAgICAgY2VudGVyRXhhbVNlc3Npb246ICRjZW50ZXJFeGFtU2Vzc2lvblxyXG4gICAgKSB7XHJcbiAgICAgIGlkXHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgZ2V0QWxsRWR1Y2F0aW9uVHlwZXNRdWVyeSA9IGdxbGBcclxuICBxdWVyeSBnZXRBbGxFZHVjYXRpb25UeXBlc1F1ZXJ5IHtcclxuICAgIGVkdWNhdGlvblR5cGVzKG9yZGVyQnk6IGVkdWNhdGlvblR5cGVOYW1lX0FTQykge1xyXG4gICAgICBpZFxyXG4gICAgICBlZHVjYXRpb25UeXBlTmFtZVxyXG4gICAgICBlZHVjYXRpb25UeXBlQ29kZVxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IGdldEFsbEVkdWNhdGlvblR5cGVzQW5kU3ViamVjdHNRdWVyeSA9IGdxbGBcclxuICBxdWVyeSBnZXRBbGxFZHVjYXRpb25UeXBlc0FuZFN1YmplY3RzUXVlcnkge1xyXG4gICAgZWR1Y2F0aW9uVHlwZXMob3JkZXJCeTogZWR1Y2F0aW9uVHlwZU5hbWVfQVNDKSB7XHJcbiAgICAgIGlkXHJcbiAgICAgIGVkdWNhdGlvblR5cGVOYW1lXHJcbiAgICAgIGVkdWNhdGlvblR5cGVDb2RlXHJcbiAgICAgIHN1YmplY3Qob3JkZXJCeTogc3ViamVjdE5hbWVfQVNDKXtcclxuICAgICAgICBpZFxyXG4gICAgICAgICMgc3ViamVjdE5hbWVcclxuICAgICAgICAjIHN1YmplY3RDb2RlXHJcbiAgICAgICAgIyBzdWJqZWN0VHlwZVxyXG4gICAgICAgICMgc3ViamVjdEdyb3VwXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBnZXRBbGxSZWdpb25zUXVlcnkgPSBncWxgXHJcbiAgcXVlcnkgZ2V0QWxsUmVnaW9uc1F1ZXJ5IHtcclxuICAgIHJlZ2lvbnMob3JkZXJCeTogcmVnTmFtZV9BU0MpIHtcclxuICAgICAgcmVnTmFtZVxyXG4gICAgICByZWdDb2RlXHJcbiAgICAgIGlkXHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgZ2V0QWxsVXNlcnNRdWVyeSA9IGdxbGBcclxuICBxdWVyeSBnZXRBbGxVc2Vyc1F1ZXJ5IHtcclxuICAgIHVzZXJzKG9yZGVyQnk6IG5hbWVfQVNDKSB7XHJcbiAgICAgIG5hbWVcclxuICAgICAgZW1haWxcclxuICAgICAgaWRcclxuICAgICAgcGFzc3dvcmRcclxuICAgICAgcmVzZXRUb2tlblxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IGdldENlbnRlclJlc3VsdHNRdWVyeSA9IGdxbGBcclxuICBxdWVyeSBnZXRDZW50ZXJSZXN1bHRzUXVlcnkoXHJcbiAgICAkZXhhbTogRXhhbVdoZXJlVW5pcXVlSW5wdXQhXHJcbiAgICAkY2VudGVyOiBDZW50ZXJXaGVyZVVuaXF1ZUlucHV0IVxyXG4gICAgJHNlc3Npb246IFNlc3Npb25XaGVyZVVuaXF1ZUlucHV0IVxyXG4gICkge1xyXG4gICAgZ2V0UmVzdWx0c1BlckNlbnRlcihleGFtOiAkZXhhbSwgY2VudGVyOiAkY2VudGVyLCBzZXNzaW9uOiAkc2Vzc2lvbikge1xyXG4gICAgICBpZFxyXG4gICAgICBjYW5kaWRhdGUge1xyXG4gICAgICAgIGNhbmQxc3ROYW1lXHJcbiAgICAgICAgY2FuZDJuZE5hbWVcclxuICAgICAgICBjYW5kM3JkTmFtZVxyXG4gICAgICAgIHBsYWNlT2ZCaXJ0aFxyXG4gICAgICAgIGVtYWlsXHJcbiAgICAgICAgdXNlciB7XHJcbiAgICAgICAgICBpZFxyXG4gICAgICAgIH1cclxuICAgICAgICBkYXRlT2ZCaXJ0aFxyXG4gICAgICAgIHVzZXIge1xyXG4gICAgICAgICAgaWRcclxuICAgICAgICB9XHJcbiAgICAgICAgZ2VuZGVyXHJcbiAgICAgIH1cclxuICAgICAgZXhhbSB7XHJcbiAgICAgICAgZXhhbU5hbWVcclxuICAgICAgfVxyXG4gICAgICBzZXNzaW9uIHtcclxuICAgICAgICBzZXNzaW9uTmFtZVxyXG4gICAgICB9XHJcbiAgICAgIGNlbnRlciB7XHJcbiAgICAgICAgY2VudGVyTmFtZVxyXG4gICAgICB9XHJcbiAgICAgIHNjb3JlcyB7XHJcbiAgICAgICAgc3ViamVjdEF2ZVxyXG4gICAgICAgIGNvZWZmXHJcbiAgICAgICAgc3ViamVjdFNwZWNpYWx0eSB7XHJcbiAgICAgICAgICBzdWJqZWN0TmFtZVxyXG4gICAgICAgICAgc3BlY2lhbHR5IHtcclxuICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgc3BlY2lhbHR5TmFtZVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IGdldENhbmRpZGF0ZVJlc3VsdHNRdWVyeSA9IGdxbGBcclxuICBxdWVyeSBnZXRDYW5kaWRhdGVSZXN1bHRzUXVlcnkoJGlkOiBJRCEpIHtcclxuICAgIHJlZ2lzdHJhdGlvbihpZDogJGlkKSB7XHJcbiAgICAgIGlkXHJcbiAgICAgIGNyZWF0ZWRBdFxyXG4gICAgICBjYW5kUmVnaXN0cmF0aW9uTnVtYmVyXHJcblxyXG4gICAgICBjYW5kaWRhdGUge1xyXG4gICAgICAgIGlkXHJcbiAgICAgICAgY2FuZDFzdE5hbWVcclxuICAgICAgICBjYW5kMm5kTmFtZVxyXG4gICAgICAgIGNhbmQzcmROYW1lXHJcbiAgICAgICAgbW9tTmFtZVxyXG4gICAgICAgIGRhZE5hbWVcclxuICAgICAgICBwbGFjZU9mQmlydGhcclxuICAgICAgICBpbWFnZVxyXG4gICAgICAgIGVtYWlsXHJcbiAgICAgICAgZGF0ZU9mQmlydGhcclxuICAgICAgICBnZW5kZXJcclxuICAgICAgICB1c2VyIHtcclxuICAgICAgICAgIGlkXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGNlbnRlckV4YW1TZXNzaW9uU3BlY2lhbHR5IHtcclxuICAgICAgICBpZFxyXG4gICAgICAgIGNlbnRlckV4YW1TZXNzaW9uIHtcclxuICAgICAgICAgIGlkXHJcbiAgICAgICAgICBleGFtU2Vzc2lvbiB7XHJcbiAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgIGV4YW0ge1xyXG4gICAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgICAgZXhhbU5hbWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXNzaW9uIHtcclxuICAgICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICAgIHNlc3Npb25OYW1lXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGNlbnRlciB7XHJcbiAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgIGNlbnRlck5hbWVcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgc3BlY2lhbHR5IHtcclxuICAgICAgICAgIGlkXHJcbiAgICAgICAgICBzcGVjaWFsdHlOYW1lXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHNjb3Jlc3tcclxuICAgICAgICBpZFxyXG4gICAgICAgIHN1YmplY3RBdmVcclxuICAgICAgICBjb2VmZlxyXG4gICAgICAgIHN1YmplY3RTcGVjaWFsdHkge1xyXG4gICAgICAgICAgaWRcclxuICAgICAgICAgIHN1YmplY3Qge1xyXG4gICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICBzdWJqZWN0TmFtZVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IGdldEV4YW1pbmVyUmVnaXN0cmF0aW9uUXVlcnkgPSBncWxgXHJcbiAgcXVlcnkgZ2V0RXhhbWluZXJSZWdpc3RyYXRpb25RdWVyeSgkaWQ6IElEISkge1xyXG4gICAgY2VudGVyRXhhbVNlc3Npb25FeGFtaW5lcihpZDogJGlkKSB7XHJcbiAgICAgIGlkXHJcbiAgICAgIGV4YW1pbmVyIHtcclxuICAgICAgICBpZFxyXG4gICAgICAgIGV4YW1pbmVyMXN0TmFtZVxyXG4gICAgICAgIGV4YW1pbmVyMm5kTmFtZVxyXG4gICAgICAgIGV4YW1pbmVyT3RoZXJOYW1lc1xyXG4gICAgICAgIGV4YW1pbmVyTWF0cmljdWxlXHJcbiAgICAgICAgZXhhbWluZXJQaG9uZVxyXG4gICAgICAgIGV4YW1pbmVyQ05JXHJcbiAgICAgICAgZXhhbWluZXJJbWFnZVxyXG4gICAgICAgIGV4YW1pbmVyRW1haWxcclxuICAgICAgICBnZW5kZXJcclxuICAgICAgfVxyXG4gICAgICBjZW50ZXJFeGFtU2Vzc2lvbiB7XHJcbiAgICAgICAgaWRcclxuICAgICAgICBleGFtU2Vzc2lvbiB7XHJcbiAgICAgICAgICBpZFxyXG4gICAgICAgICAgZXhhbSB7XHJcbiAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgIGV4YW1OYW1lXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBzZXNzaW9uIHtcclxuICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgc2Vzc2lvbk5hbWVcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY2VudGVyIHtcclxuICAgICAgICAgIGlkXHJcbiAgICAgICAgICBjZW50ZXJOYW1lXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHBoYXNlUmFuayB7XHJcbiAgICAgICAgaWRcclxuICAgICAgICByYW5rTmFtZVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgZ2V0QWxsQ2VudGVyUmVzdWx0c1F1ZXJ5ID0gZ3FsYFxyXG4gIHF1ZXJ5IGdldEFsbENlbnRlclJlc3VsdHNRdWVyeSgkY2VudGVyRXhhbVNlc3Npb246IFN0cmluZyEpIHtcclxuICAgIGNlbnRlckV4YW1TZXNzaW9uU3BlY2lhbHR5Rm9yUmVzdWx0cyhcclxuICAgICAgY2VudGVyRXhhbVNlc3Npb246ICRjZW50ZXJFeGFtU2Vzc2lvblxyXG4gICAgKSB7XHJcbiAgICAgIGlkXHJcbiAgICAgIHNwZWNpYWx0eSB7XHJcbiAgICAgICAgaWRcclxuICAgICAgICBzcGVjaWFsdHlOYW1lXHJcbiAgICAgICAgc3ViamVjdFNwZWNpYWx0eSB7XHJcbiAgICAgICAgICBpZFxyXG4gICAgICAgICAgc3ViamVjdE5hbWVcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgcmVnaXN0cmF0aW9uIHtcclxuICAgICAgICBpZFxyXG4gICAgICAgIGNhbmRpZGF0ZSB7XHJcbiAgICAgICAgICBjYW5kMXN0TmFtZVxyXG4gICAgICAgICAgaWRcclxuICAgICAgICB9XHJcbiAgICAgICAgc2NvcmVzIHtcclxuICAgICAgICAgIGlkXHJcbiAgICAgICAgICBzdWJqZWN0QXZlXHJcbiAgICAgICAgICBjb2VmZlxyXG4gICAgICAgICAgc3ViamVjdFNwZWNpYWx0eSB7XHJcbiAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgIHN1YmplY3ROYW1lXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgZ2V0RWFjaENhbmRpZGF0ZVJlc3VsdHNRdWVyeSA9IGdxbGBcclxuICBxdWVyeSBnZXRFYWNoQ2FuZGlkYXRlUmVzdWx0c1F1ZXJ5KCRpZDogSUQhKSB7XHJcbiAgICByZWdpc3RyYXRpb24oaWQ6ICRpZCkge1xyXG4gICAgICBpZFxyXG4gICAgICBjYW5kaWRhdGUge1xyXG4gICAgICAgIGlkXHJcbiAgICAgICAgY2FuZDFzdE5hbWVcclxuICAgICAgICBjYW5kMm5kTmFtZVxyXG4gICAgICAgIGNhbmQzcmROYW1lXHJcbiAgICAgICAgbW9tTmFtZVxyXG4gICAgICAgIGRhZE5hbWVcclxuICAgICAgICBlbWFpbFxyXG4gICAgICAgIGRhdGVPZkJpcnRoXHJcbiAgICAgICAgdXNlciB7XHJcbiAgICAgICAgICBpZFxyXG4gICAgICAgIH1cclxuICAgICAgICBnZW5kZXJcclxuICAgICAgfVxyXG4gICAgICBleGFtIHtcclxuICAgICAgICBpZFxyXG4gICAgICAgIGV4YW1OYW1lXHJcbiAgICAgIH1cclxuICAgICAgc2Vzc2lvbiB7XHJcbiAgICAgICAgaWRcclxuICAgICAgICBzZXNzaW9uTmFtZVxyXG4gICAgICB9XHJcbiAgICAgIHNwZWNpYWx0eSB7XHJcbiAgICAgICAgaWRcclxuICAgICAgICBzcGVjaWFsdHlOYW1lXHJcbiAgICAgIH1cclxuICAgICAgY2VudGVyIHtcclxuICAgICAgICBpZFxyXG4gICAgICAgIGNlbnRlck5hbWVcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IGdldENhbmRpZGF0ZVJlZ2lzdHJhdGlvbkluZm9RdWVyeSA9IGdxbGBcclxuICBxdWVyeSBnZXRDYW5kaWRhdGVSZWdpc3RyYXRpb25JbmZvUXVlcnkoJGlkOiBJRCEpIHtcclxuICAgIHJlZ2lzdHJhdGlvbihpZDogJGlkKSB7XHJcbiAgICAgIGlkXHJcbiAgICAgIGFwdGl0dWRlXHJcbiAgICAgIEVQRjFcclxuICAgICAgRVBGMlxyXG4gICAgICBjYW5kRXhhbVNlY3JldENvZGVcclxuICAgICAgY3JlYXRlZEF0XHJcbiAgICAgIGNhbmRSZWdpc3RyYXRpb25OdW1iZXJcclxuICAgICAgY2FuZGlkYXRlIHtcclxuICAgICAgICBpZFxyXG4gICAgICAgIGNhbmQxc3ROYW1lXHJcbiAgICAgICAgY2FuZDJuZE5hbWVcclxuICAgICAgICBjYW5kM3JkTmFtZVxyXG4gICAgICAgIGltYWdlXHJcbiAgICAgICAgZW1haWxcclxuICAgICAgICBwaG9uZU51bWJcclxuICAgICAgICBjYW5kQ29kZVxyXG4gICAgICAgIGRhdGVPZkJpcnRoXHJcbiAgICAgICAgcGxhY2VPZkJpcnRoXHJcbiAgICAgICAgZ2VuZGVyXHJcbiAgICAgIH1cclxuICAgICAgY2VudGVyRXhhbVNlc3Npb25TcGVjaWFsdHkge1xyXG4gICAgICAgIGlkXHJcbiAgICAgICAgc3BlY2lhbHR5IHtcclxuICAgICAgICAgIGlkXHJcbiAgICAgICAgICBzcGVjaWFsdHlOYW1lXHJcbiAgICAgICAgICBzcGVjaWFsdHlDb2RlXHJcbiAgICAgICAgICBzdWJqZWN0U3BlY2lhbHR5IHtcclxuICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgY29lZmZcclxuICAgICAgICAgICAgc3ViamVjdCB7XHJcbiAgICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgICBzdWJqZWN0TmFtZVxyXG4gICAgICAgICAgICAgIHN1YmplY3RDb2RlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY2VudGVyRXhhbVNlc3Npb24ge1xyXG4gICAgICAgICAgaWRcclxuICAgICAgICAgIGNlbnRlciB7XHJcbiAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgIGNlbnRlck5hbWVcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGV4YW1TZXNzaW9uIHtcclxuICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgZXhhbSB7XHJcbiAgICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgICBleGFtTmFtZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNlc3Npb24ge1xyXG4gICAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgICAgc2Vzc2lvbk5hbWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IGdldENhbmRpZGF0ZVJlZ2lzdHJhdGlvbklEUXVlcnkgPSBncWxgXHJcbiAgcXVlcnkgZ2V0Q2FuZGlkYXRlUmVnaXN0cmF0aW9uSURRdWVyeShcclxuICAgICRjZW50ZXJFeGFtU2Vzc2lvbjogQ2VudGVyRXhhbVNlc3Npb25XaGVyZVVuaXF1ZUlucHV0IVxyXG4gICAgJGNhbmRpZGF0ZTogQ2FuZGlkYXRlV2hlcmVVbmlxdWVJbnB1dCFcclxuICApIHtcclxuICAgIGNhbmRpZGF0ZVJlZ2lzdHJhdGlvbklEKFxyXG4gICAgICBjZW50ZXJFeGFtU2Vzc2lvbjogJGNlbnRlckV4YW1TZXNzaW9uXHJcbiAgICAgIGNhbmRpZGF0ZTogJGNhbmRpZGF0ZVxyXG4gICAgKSB7XHJcbiAgICAgIGlkXHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgZ2V0Q2FuZGlkYXRlUmVnaXN0cmF0aW9uSURzUXVlcnkgPSBncWxgXHJcbiAgcXVlcnkgZ2V0Q2FuZGlkYXRlUmVnaXN0cmF0aW9uSURzUXVlcnkoJGNhbmRpZGF0ZTogUmVnaXN0cmF0aW9uV2hlcmVJbnB1dCEpIHtcclxuICAgIGNhbmRpZGF0ZVJlZ2lzdHJhdGlvbklEcyhjYW5kaWRhdGU6ICRjYW5kaWRhdGUpIHtcclxuICAgICAgaWRcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCByZWdpc3RyYXRpb25JREZyb21TZWNyZXRDb2RlUXVlcnkgPSBncWxgXHJcbiAgcXVlcnkgcmVnaXN0cmF0aW9uSURGcm9tU2VjcmV0Q29kZVF1ZXJ5KCRjYW5kRXhhbVNlY3JldENvZGU6IFN0cmluZyEpIHtcclxuICAgIGdldFJlZ2lzdHJhdGlvbihjYW5kRXhhbVNlY3JldENvZGU6ICRjYW5kRXhhbVNlY3JldENvZGUpIHtcclxuICAgICAgaWRcclxuICAgICAgc3BlY2lhbHR5IHtcclxuICAgICAgICBpZFxyXG4gICAgICAgIHNwZWNpYWx0eU5hbWVcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IGdldEFsbENhbmRpZGF0ZVJlZ2lzdHJhdGlvbklEc1F1ZXJ5ID0gZ3FsYFxyXG4gIHF1ZXJ5IGdldEFsbENhbmRpZGF0ZVJlZ2lzdHJhdGlvbklEc1F1ZXJ5KCRpZDogSUQhKSB7XHJcbiAgICBjYW5kaWRhdGUoaWQ6ICRpZCkge1xyXG4gICAgICBpZFxyXG4gICAgICBjYW5kMXN0TmFtZVxyXG4gICAgICBjYW5kMm5kTmFtZVxyXG4gICAgICBjYW5kM3JkTmFtZVxyXG4gICAgICBwbGFjZU9mQmlydGhcclxuICAgICAgZGF0ZU9mQmlydGhcclxuICAgICAgaW1hZ2VcclxuICAgICAgbW9tTmFtZVxyXG4gICAgICBkYWROYW1lXHJcbiAgICAgIGVtYWlsXHJcbiAgICAgIHVzZXIge1xyXG4gICAgICAgIGlkXHJcbiAgICAgIH1cclxuICAgICAgZ2VuZGVyXHJcbiAgICAgIHJlZ2lzdHJhdGlvbiB7XHJcbiAgICAgICAgaWRcclxuXHJcbiAgICAgICAgY2VudGVyRXhhbVNlc3Npb25TcGVjaWFsdHkge1xyXG4gICAgICAgICAgaWRcclxuICAgICAgICAgIHNwZWNpYWx0eSB7XHJcbiAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgIHNwZWNpYWx0eU5hbWVcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGNlbnRlckV4YW1TZXNzaW9uIHtcclxuICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgY2VudGVyIHtcclxuICAgICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICAgIGNlbnRlck5hbWVcclxuICAgICAgICAgICAgICBjZW50ZXJDb2RlXHJcbiAgICAgICAgICAgICAgY2VudGVyTnVtYmVyXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZXhhbVNlc3Npb24ge1xyXG4gICAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgICAgZXhhbSB7XHJcbiAgICAgICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICAgICAgZXhhbU5hbWVcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgc2Vzc2lvbiB7XHJcbiAgICAgICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICAgICAgc2Vzc2lvbk5hbWVcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgc2NvcmVzIHtcclxuICAgICAgICAgIGlkXHJcbiAgICAgICAgICBzdWJqZWN0QXZlXHJcbiAgICAgICAgICBjb2VmZlxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBpZFxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IGdldENhbmRpZGF0ZUlEUXVlcnkgPSBncWxgXHJcbiAgcXVlcnkgZ2V0Q2FuZGlkYXRlSURRdWVyeSgkY2FuZENvZGU6IFN0cmluZyEpIHtcclxuICAgIGNhbmRpZGF0ZUNvZGUoY2FuZENvZGU6ICRjYW5kQ29kZSkge1xyXG4gICAgICBpZFxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IGdldEV4YW1pbmVySURRdWVyeSA9IGdxbGBcclxuICBxdWVyeSBnZXRFeGFtaW5lcklEUXVlcnkoJGV4YW1pbmVyQ29kZTogU3RyaW5nISkge1xyXG4gICAgZXhhbWluZXJCeUNvZGUoZXhhbWluZXJDb2RlOiAkZXhhbWluZXJDb2RlKSB7XHJcbiAgICAgIGlkXHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgZ2V0UmVnaXN0cmF0aW9uSURGcm9tUmVnTnVtYmVyUXVlcnkgPSBncWxgXHJcbiAgcXVlcnkgZ2V0UmVnaXN0cmF0aW9uSURGcm9tUmVnTnVtYmVyUXVlcnkoJGNhbmRSZWdpc3RyYXRpb25OdW1iZXI6IFN0cmluZyEpIHtcclxuICAgIGNhbmRpZGF0ZVJlZ2lzdHJhdGlvbk51bWJlcihcclxuICAgICAgY2FuZFJlZ2lzdHJhdGlvbk51bWJlcjogJGNhbmRSZWdpc3RyYXRpb25OdW1iZXJcclxuICAgICkge1xyXG4gICAgICBpZFxyXG4gICAgICBjYW5kaWRhdGUge1xyXG4gICAgICAgIGlkXHJcbiAgICAgICAgY2FuZDFzdE5hbWVcclxuICAgICAgICBjYW5kMm5kTmFtZVxyXG4gICAgICAgIGNhbmQzcmROYW1lXHJcbiAgICAgICAgcGxhY2VPZkJpcnRoXHJcbiAgICAgICAgZGF0ZU9mQmlydGhcclxuICAgICAgICBpbWFnZVxyXG4gICAgICAgIG1vbU5hbWVcclxuICAgICAgICBkYWROYW1lXHJcbiAgICAgICAgZW1haWxcclxuICAgICAgICB1c2VyIHtcclxuICAgICAgICAgIGlkXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGdlbmRlclxyXG4gICAgICAgIHJlZ2lzdHJhdGlvbiB7XHJcbiAgICAgICAgICBpZFxyXG5cclxuICAgICAgICAgIGNlbnRlckV4YW1TZXNzaW9uU3BlY2lhbHR5IHtcclxuICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgc3BlY2lhbHR5IHtcclxuICAgICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICAgIHNwZWNpYWx0eU5hbWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjZW50ZXJFeGFtU2Vzc2lvbiB7XHJcbiAgICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgICBjZW50ZXIge1xyXG4gICAgICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgICAgIGNlbnRlck5hbWVcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgZXhhbVNlc3Npb24ge1xyXG4gICAgICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgICAgIGV4YW0ge1xyXG4gICAgICAgICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICAgICAgICBleGFtTmFtZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgc2Vzc2lvbiB7XHJcbiAgICAgICAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgICAgICAgIHNlc3Npb25OYW1lXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBzY29yZXMge1xyXG4gICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICBzdWJqZWN0QXZlXHJcbiAgICAgICAgICAgIGNvZWZmXHJcbiAgICAgICAgICAgIHN1YmplY3RTcGVjaWFsdHkge1xyXG4gICAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgICAgc3ViamVjdHtcclxuICAgICAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgICAgICBzdWJqZWN0TmFtZVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IGdldENlbnRlcklERnJvbUNlbnRlckNvZGVRdWVyeSA9IGdxbGBcclxuICBxdWVyeSBnZXRDZW50ZXJJREZyb21DZW50ZXJDb2RlUXVlcnkoJGNlbnRlclNlY3JldENvZGU6IFN0cmluZyEpIHtcclxuICAgIGdldENlbnRlckJ5Q29kZShjZW50ZXJTZWNyZXRDb2RlOiAkY2VudGVyU2VjcmV0Q29kZSkge1xyXG4gICAgICBpZFxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IGdldENlbnRlclJlZ2lzdHJhdGlvbklEc1F1ZXJ5ID0gZ3FsYFxyXG4gIHF1ZXJ5IGdldENlbnRlclJlZ2lzdHJhdGlvbklEc1F1ZXJ5KFxyXG4gICAgJGV4YW06IEV4YW1XaGVyZVVuaXF1ZUlucHV0IVxyXG4gICAgJGNlbnRlcjogQ2VudGVyV2hlcmVVbmlxdWVJbnB1dCFcclxuICAgICRzZXNzaW9uOiBTZXNzaW9uV2hlcmVVbmlxdWVJbnB1dCFcclxuICApIHtcclxuICAgIGNlbnRlclJlZ2lzdHJhdGlvbklEcyhleGFtOiAkZXhhbSwgY2VudGVyOiAkY2VudGVyLCBzZXNzaW9uOiAkc2Vzc2lvbikge1xyXG4gICAgICBpZFxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IGNlbnRlckV4YW1TZXNzaW9uU3BlY2lhbHR5Rm9yUmVzdWx0c1F1ZXJ5ID0gZ3FsYFxyXG4gIHF1ZXJ5IGNlbnRlckV4YW1TZXNzaW9uU3BlY2lhbHR5Rm9yUmVzdWx0c1F1ZXJ5KCRjZW50ZXJFeGFtU2Vzc2lvbjogU3RyaW5nISkge1xyXG4gICAgY2VudGVyRXhhbVNlc3Npb25TcGVjaWFsdHlGb3JSZXN1bHRzKFxyXG4gICAgICBjZW50ZXJFeGFtU2Vzc2lvbjogJGNlbnRlckV4YW1TZXNzaW9uXHJcbiAgICApIHtcclxuICAgICAgaWRcclxuICAgICAgc3BlY2lhbHR5IHtcclxuICAgICAgICBpZFxyXG4gICAgICAgIHNwZWNpYWx0eU5hbWVcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IGNlbnRlckV4YW1TZXNzaW9uRm9yUmVzdWx0c1F1ZXJ5ID0gZ3FsYFxyXG4gIHF1ZXJ5IGNlbnRlckV4YW1TZXNzaW9uRm9yUmVzdWx0c1F1ZXJ5KCRpZDogSUQhKSB7XHJcbiAgICBjZW50ZXJFeGFtU2Vzc2lvbihpZDogJGlkKSB7XHJcbiAgICAgIGlkXHJcbiAgICAgIGNlbnRlciB7XHJcbiAgICAgICAgaWRcclxuICAgICAgICBjZW50ZXJOYW1lXHJcbiAgICAgIH1cclxuICAgICAgZXhhbVNlc3Npb24ge1xyXG4gICAgICAgIGlkXHJcbiAgICAgICAgZXhhbSB7XHJcbiAgICAgICAgICBleGFtTmFtZVxyXG4gICAgICAgICAgaWRcclxuICAgICAgICB9XHJcbiAgICAgICAgc2Vzc2lvbiB7XHJcbiAgICAgICAgICBpZFxyXG4gICAgICAgICAgc2Vzc2lvbk5hbWVcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgcmVnaXN0cmF0aW9uIHtcclxuICAgICAgICBpZFxyXG4gICAgICAgIEVQRjFcclxuICAgICAgICBFUEYyXHJcbiAgICAgICAgY2VudGVyRXhhbVNlc3Npb24ge1xyXG4gICAgICAgICAgaWRcclxuICAgICAgICAgIGNlbnRlciB7XHJcbiAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgIGNlbnRlck5hbWVcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGV4YW1TZXNzaW9uIHtcclxuICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgZXhhbSB7XHJcbiAgICAgICAgICAgICAgZXhhbU5hbWVcclxuICAgICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNlc3Npb24ge1xyXG4gICAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgICAgc2Vzc2lvbk5hbWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjYW5kUmVnaXN0cmF0aW9uTnVtYmVyXHJcbiAgICAgICAgY2FuZEV4YW1TZWNyZXRDb2RlXHJcbiAgICAgICAgYXB0aXR1ZGVcclxuICAgICAgICBjYW5kaWRhdGUge1xyXG4gICAgICAgICAgaWRcclxuICAgICAgICAgIGNhbmQxc3ROYW1lXHJcbiAgICAgICAgICBjYW5kMm5kTmFtZVxyXG4gICAgICAgICAgY2FuZDNyZE5hbWVcclxuICAgICAgICAgIGRhdGVPZkJpcnRoXHJcbiAgICAgICAgICBwbGFjZU9mQmlydGhcclxuICAgICAgICAgIGVtYWlsXHJcbiAgICAgICAgICBwaG9uZU51bWJcclxuICAgICAgICAgIHVzZXIge1xyXG4gICAgICAgICAgICBpZFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgZ2VuZGVyXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNwZWNpYWx0eSB7XHJcbiAgICAgICAgICBpZFxyXG4gICAgICAgICAgc3BlY2lhbHR5TmFtZVxyXG4gICAgICAgICAgc3BlY2lhbHR5Q29kZVxyXG4gICAgICAgIH1cclxuICAgICAgICBzY29yZXMge1xyXG4gICAgICAgICAgaWRcclxuICAgICAgICAgIHN1YmplY3RBdmVcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCByZXN1bHRzUmVnaXN0cmF0aW9uUXVlcnkgPSBncWxgXHJcbiAgcXVlcnkgcmVzdWx0c1JlZ2lzdHJhdGlvblF1ZXJ5KCRpZDogSUQhKSB7XHJcbiAgICByZWdpc3RyYXRpb24oaWQ6ICRpZCkge1xyXG4gICAgICAgIGlkXHJcbiAgICAgICAgRVBGMVxyXG4gICAgICAgIEVQRjJcclxuICAgICAgICBjZW50ZXJFeGFtU2Vzc2lvbiB7XHJcbiAgICAgICAgICBpZFxyXG4gICAgICAgICAgY2VudGVyIHtcclxuICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgY2VudGVyTmFtZVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgZXhhbVNlc3Npb24ge1xyXG4gICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICBleGFtIHtcclxuICAgICAgICAgICAgICBleGFtTmFtZVxyXG4gICAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2Vzc2lvbiB7XHJcbiAgICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgICBzZXNzaW9uTmFtZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhbmRSZWdpc3RyYXRpb25OdW1iZXJcclxuICAgICAgICBjYW5kRXhhbVNlY3JldENvZGVcclxuICAgICAgICBhcHRpdHVkZVxyXG4gICAgICAgIGNhbmRpZGF0ZSB7XHJcbiAgICAgICAgICBpZFxyXG4gICAgICAgICAgY2FuZDFzdE5hbWVcclxuICAgICAgICAgIGNhbmQybmROYW1lXHJcbiAgICAgICAgICBjYW5kM3JkTmFtZVxyXG4gICAgICAgICAgZGF0ZU9mQmlydGhcclxuICAgICAgICAgIHBsYWNlT2ZCaXJ0aFxyXG4gICAgICAgICAgZW1haWxcclxuICAgICAgICAgIHBob25lTnVtYlxyXG4gICAgICAgICAgdXNlciB7XHJcbiAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBnZW5kZXJcclxuICAgICAgICB9XHJcbiAgICAgICAgc3BlY2lhbHR5IHtcclxuICAgICAgICAgIGlkXHJcbiAgICAgICAgICBzcGVjaWFsdHlOYW1lXHJcbiAgICAgICAgICBzcGVjaWFsdHlDb2RlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNjb3JlcyB7XHJcbiAgICAgICAgICBpZFxyXG4gICAgICAgICAgc3ViamVjdEF2ZVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5gO1xyXG5cclxuY29uc3QgY2VudGVyRXhhbVNlc3Npb25TcGVjaWFsdHlSZXN1bHRzUXVlcnkgPSBncWxgXHJcbiAgcXVlcnkgY2VudGVyRXhhbVNlc3Npb25TcGVjaWFsdHlSZXN1bHRzUXVlcnkoJGlkOiBJRCEpIHtcclxuICAgIGNlbnRlckV4YW1TZXNzaW9uU3BlY2lhbHR5KGlkOiAkaWQpIHtcclxuICAgICAgaWRcclxuICAgICAgY2VudGVyRXhhbVNlc3Npb24ge1xyXG4gICAgICAgIGlkXHJcbiAgICAgICAgY2VudGVyIHtcclxuICAgICAgICAgIGlkXHJcbiAgICAgICAgICBjZW50ZXJOYW1lXHJcbiAgICAgICAgICBjZW50ZXJDb2RlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGV4YW1TZXNzaW9uIHtcclxuICAgICAgICAgIGV4YW0ge1xyXG4gICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICBleGFtTmFtZVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgc2Vzc2lvbiB7XHJcbiAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgIHNlc3Npb25OYW1lXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBzcGVjaWFsdHkge1xyXG4gICAgICAgIGlkXHJcbiAgICAgICAgc3BlY2lhbHR5TmFtZVxyXG4gICAgICAgIHNwZWNpYWx0eUNvZGVcclxuICAgICAgfVxyXG4gICAgICByZWdpc3RyYXRpb24ge1xyXG4gICAgICAgIGlkXHJcbiAgICAgICAgY2FuZFJlZ2lzdHJhdGlvbk51bWJlclxyXG4gICAgICAgIGNhbmRFeGFtU2VjcmV0Q29kZVxyXG4gICAgICAgIGNhbmRpZGF0ZSB7XHJcbiAgICAgICAgICBpZFxyXG4gICAgICAgICAgY2FuZDFzdE5hbWVcclxuICAgICAgICAgIGNhbmQybmROYW1lXHJcbiAgICAgICAgICBjYW5kM3JkTmFtZVxyXG4gICAgICAgICAgZGF0ZU9mQmlydGhcclxuICAgICAgICAgIHBsYWNlT2ZCaXJ0aFxyXG4gICAgICAgICAgZW1haWxcclxuICAgICAgICAgIHBob25lTnVtYlxyXG4gICAgICAgICAgdXNlciB7XHJcbiAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBnZW5kZXJcclxuICAgICAgICB9XHJcbiAgICAgICAgc2NvcmVzIHtcclxuICAgICAgICAgIGlkXHJcbiAgICAgICAgICBzdWJqZWN0QXZlXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgZ2V0Q2FuZGlkYXRlQnlDYW5kQ29kZVF1ZXJ5ID0gZ3FsYFxyXG4gIHF1ZXJ5IGdldENhbmRpZGF0ZUJ5Q2FuZENvZGVRdWVyeSgkY2FuZENvZGU6IFN0cmluZyEpIHtcclxuICAgIGdldENhbmRpZGF0ZUJ5Q29kZShjYW5kQ29kZTogJGNhbmRDb2RlKSB7XHJcbiAgICAgIGlkXHJcbiAgICAgIGNhbmQxc3ROYW1lXHJcbiAgICAgIGNhbmRDb2RlXHJcbiAgICAgIGRhdGVPZkJpcnRoXHJcbiAgICAgIHBsYWNlT2ZCaXJ0aFxyXG4gICAgICB1c2VyIHtcclxuICAgICAgICBpZFxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgZ2V0QWxsUmFua3NRdWVyeSA9IGdxbGBcclxuICBxdWVyeSBnZXRBbGxSYW5rc1F1ZXJ5IHtcclxuICAgIHJhbmtzKG9yZGVyQnk6IHJhbmtOYW1lX0FTQykge1xyXG4gICAgICByYW5rTmFtZVxyXG4gICAgICByYW5rQ29kZVxyXG4gICAgICBpZFxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IGdldEFsbFBoYXNlc1F1ZXJ5ID0gZ3FsYFxyXG4gIHF1ZXJ5IGdldEFsbFBoYXNlc1F1ZXJ5IHtcclxuICAgIHBoYXNlcyhvcmRlckJ5OiBwaGFzZU5hbWVfQVNDKSB7XHJcbiAgICAgIHBoYXNlTmFtZVxyXG4gICAgICBwaGFzZUNvZGVcclxuICAgICAgaWRcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBnZXRBbGxTdWJqZWN0c1F1ZXJ5ID0gZ3FsYFxyXG4gIHF1ZXJ5IGdldEFsbFN1YmplY3RzUXVlcnkge1xyXG4gICAgc3ViamVjdHMob3JkZXJCeTogc3ViamVjdE5hbWVfQVNDKSB7XHJcbiAgICAgIHN1YmplY3ROYW1lXHJcbiAgICAgIHN1YmplY3RDb2RlXHJcbiAgICAgIGlkXHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgZ2V0QWxsU3ViamVjdEdyb3Vwc1F1ZXJ5ID0gZ3FsYFxyXG4gIHF1ZXJ5IGdldEFsbFN1YmplY3RHcm91cHNRdWVyeSB7XHJcbiAgICBzdWJqZWN0R3JvdXBzKG9yZGVyQnk6IHN1YmplY3RHcm91cE5hbWVfQVNDKSB7XHJcbiAgICAgIHN1YmplY3RHcm91cE5hbWVcclxuICAgICAgc3ViamVjdEdyb3VwQ29kZVxyXG4gICAgICBpZFxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IGdldEFsbFNwZWNpYWx0aWVzT2ZBbkVkdWNhdGlvblR5cGVRdWVyeSA9IGdxbGBcclxuICBxdWVyeSBnZXRBbGxTcGVjaWFsdGllc09mQW5FZHVjYXRpb25UeXBlUXVlcnkoJGlkOiBJRCEpIHtcclxuICAgIGVkdWNhdGlvblR5cGUoaWQ6ICRpZCkge1xyXG4gICAgICBpZFxyXG4gICAgICBlZHVjYXRpb25UeXBlTmFtZVxyXG4gICAgICBzcGVjaWFsdHkge1xyXG4gICAgICAgIGlkXHJcbiAgICAgICAgc3BlY2lhbHR5TmFtZVxyXG4gICAgICAgIHNwZWNpYWx0eUNvZGVcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IGdldEFsbFNwZWNpYWx0aWVzT2ZBQ2VudGVyRXhhbVNlc3Npb25RdWVyeSA9IGdxbGBcclxuICBxdWVyeSBnZXRBbGxTcGVjaWFsdGllc09mQUNlbnRlckV4YW1TZXNzaW9uUXVlcnkoJGlkOiBJRCEpIHtcclxuICAgIGNlbnRlckV4YW1TZXNzaW9uKGlkOiAkaWQpIHtcclxuICAgICAgaWRcclxuICAgICAgY2VudGVyRXhhbVNlc3Npb25TcGVjaWFsdHkge1xyXG4gICAgICAgIGlkXHJcbiAgICAgICAgcmVnaXN0cmF0aW9uIHtcclxuICAgICAgICAgIGNhbmRSZWdpc3RyYXRpb25OdW1iZXJcclxuICAgICAgICAgIGlkXHJcbiAgICAgICAgICBjYW5kaWRhdGUge1xyXG4gICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICBjYW5kMXN0TmFtZVxyXG4gICAgICAgICAgICBjYW5kMm5kTmFtZVxyXG4gICAgICAgICAgICBjYW5kM3JkTmFtZVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBzcGVjaWFsdHkge1xyXG4gICAgICAgICAgaWRcclxuICAgICAgICAgIHNwZWNpYWx0eU5hbWVcclxuICAgICAgICAgIHNwZWNpYWx0eUNvZGVcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBnZXRSZWdpc3RyYXRpb25PZkNFU1NRdWVyeSA9IGdxbGBcclxuICBxdWVyeSBnZXRSZWdpc3RyYXRpb25PZkNFU1NRdWVyeSgkaWQ6IElEISwgJENFUzogU3RyaW5nKSB7XHJcbiAgICBjZW50ZXJFeGFtU2Vzc2lvblNwZWNpYWx0eShpZDogJGlkLCBDRVM6ICRDRVMpIHtcclxuICAgICAgICBpZFxyXG4gICAgICAgIHJlZ2lzdHJhdGlvbiB7XHJcbiAgICAgICAgICBjYW5kUmVnaXN0cmF0aW9uTnVtYmVyXHJcbiAgICAgICAgICBpZFxyXG4gICAgICAgICAgY2FuZGlkYXRlIHtcclxuICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgY2FuZDFzdE5hbWVcclxuICAgICAgICAgICAgY2FuZDJuZE5hbWVcclxuICAgICAgICAgICAgY2FuZDNyZE5hbWVcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgZ2V0QWxsU3BlY2lhbHRpZXNRdWVyeSA9IGdxbGBcclxuICBxdWVyeSBnZXRBbGxTcGVjaWFsdGllc1F1ZXJ5IHtcclxuICAgIHNwZWNpYWx0aWVzKG9yZGVyQnk6IHNwZWNpYWx0eU5hbWVfQVNDKSB7XHJcbiAgICAgIGlkXHJcbiAgICAgIHNwZWNpYWx0eU5hbWVcclxuICAgICAgc3BlY2lhbHR5Q29kZVxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuY29uc3QgZ2V0QWxsU3ViamVjdHNPZkFuRWR1Y1R5cGVRdWVyeSA9IGdxbGBcclxuICBxdWVyeSBnZXRBbGxTdWJqZWN0c09mQW5FZHVjVHlwZVF1ZXJ5KCRpZDogSUQhKSB7XHJcbiAgICBlZHVjYXRpb25UeXBlKGlkOiAkaWQpIHtcclxuICAgICAgaWRcclxuICAgICAgZWR1Y2F0aW9uVHlwZU5hbWVcclxuICAgICAgc3ViamVjdChvcmRlckJ5OiBzdWJqZWN0TmFtZV9BU0MpIHtcclxuICAgICAgICBpZFxyXG4gICAgICAgIHN1YmplY3ROYW1lXHJcbiAgICAgICAgc3ViamVjdENvZGVcclxuICAgICAgICBzdWJqZWN0VHlwZVxyXG4gICAgICAgIHN1YmplY3RHcm91cFxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5jb25zdCBnZXRBbGxTdWJqZWN0c1dpdGhFZHVjVHlwZXNRdWVyeSA9IGdxbGBcclxuICBxdWVyeSBnZXRBbGxTdWJqZWN0c1dpdGhFZHVjVHlwZXNRdWVyeSB7XHJcbiAgICBzdWJqZWN0cyhvcmRlckJ5OiBzdWJqZWN0TmFtZV9BU0MpIHtcclxuICAgICAgaWRcclxuICAgICAgc3ViamVjdE5hbWVcclxuICAgICAgc3ViamVjdENvZGVcclxuICAgICAgc3ViamVjdFR5cGVcclxuICAgICAgc3ViamVjdEdyb3VwXHJcbiAgICAgIHN1YmplY3RTcGVjaWFsdHkge1xyXG4gICAgICAgIHNwZWNpYWx0eSB7XHJcbiAgICAgICAgICBzcGVjaWFsdHlOYW1lXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5jb25zdCBnZXRBbGxTdWJqZWN0U3BlY2lhbHRpZXNPZkFTcGVjaWFsdHlRdWVyeSA9IGdxbGBcclxuICBxdWVyeSBnZXRBbGxTdWJqZWN0U3BlY2lhbHRpZXNPZkFTcGVjaWFsdHlRdWVyeSgkaWQ6IElEISkge1xyXG4gICAgc3BlY2lhbHR5KGlkOiAkaWQpIHtcclxuICAgICAgaWRcclxuICAgICAgc3ViamVjdFNwZWNpYWx0eSB7XHJcbiAgICAgICAgaWRcclxuICAgICAgICBzdWJqZWN0IHtcclxuICAgICAgICBpZFxyXG4gICAgICAgIHN1YmplY3ROYW1lXHJcbiAgICAgICAgc3ViamVjdENvZGVcclxuICAgICAgICBzdWJqZWN0VHlwZVxyXG4gICAgICAgIHN1YmplY3RHcm91cFxyXG4gICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBnZXRBbGxFeGFtc1F1ZXJ5ID0gZ3FsYFxyXG4gIHF1ZXJ5IGdldEFsbEV4YW1zUXVlcnkge1xyXG4gICAgZXhhbXMob3JkZXJCeTogZXhhbU5hbWVfQVNDKSB7XHJcbiAgICAgIGV4YW1OYW1lXHJcbiAgICAgIGV4YW1Db2RlXHJcbiAgICAgIGlkXHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgZ2V0QWxsR3JvdXAyUXVlcnkgPSBncWxgXHJcbiAgcXVlcnkgZ2V0QWxsR3JvdXAyUXVlcnkoJGVkdWNUeXBlOiBFZHVjYXRpb25UeXBlV2hlcmVVbmlxdWVJbnB1dCEpIHtcclxuICAgIGdyb3VwMlN1YmplY3RzKGVkdWNUeXBlOiAkZWR1Y1R5cGUsIG9yZGVyQnk6IHN1YmplY3ROYW1lX0FTQykge1xyXG4gICAgICBzdWJqZWN0TmFtZVxyXG4gICAgICBzdWJqZWN0Q29kZVxyXG4gICAgICBzdWJqZWN0R3JvdXBcclxuICAgICAgaWRcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBnZXRBbGxHcm91cDFRdWVyeSA9IGdxbGBcclxuICBxdWVyeSBnZXRBbGxHcm91cDFRdWVyeSgkZWR1Y1R5cGU6IEVkdWNhdGlvblR5cGVXaGVyZVVuaXF1ZUlucHV0ISkge1xyXG4gICAgZ3JvdXAxU3ViamVjdHMoZWR1Y1R5cGU6ICRlZHVjVHlwZSwgb3JkZXJCeTogc3ViamVjdE5hbWVfQVNDKSB7XHJcbiAgICAgIHN1YmplY3ROYW1lXHJcbiAgICAgIHN1YmplY3RDb2RlXHJcbiAgICAgIHN1YmplY3RHcm91cFxyXG4gICAgICBpZFxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IGdldEFsbFNlc3Npb25zUXVlcnkgPSBncWxgXHJcbiAgcXVlcnkgZ2V0QWxsU2Vzc2lvbnNRdWVyeSB7XHJcbiAgICBzZXNzaW9ucyhvcmRlckJ5OiBjcmVhdGVkQXRfREVTQykge1xyXG4gICAgICBzZXNzaW9uTmFtZVxyXG4gICAgICBzZXNzaW9uQ29kZVxyXG4gICAgICBpZFxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IGdldEFsbERpdmlzaW9uc1F1ZXJ5ID0gZ3FsYFxyXG4gIHF1ZXJ5IGdldEFsbERpdmlzaW9uc1F1ZXJ5IHtcclxuICAgIGRpdmlzaW9ucyhvcmRlckJ5OiBkaXZOYW1lX0FTQykge1xyXG4gICAgICBkaXZOYW1lXHJcbiAgICAgIGRpdkNvZGVcclxuICAgICAgaWRcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBnZXRBbGxSZWdpb25zQW5kRGl2aXNpb25zUXVlcnkgPSBncWxgXHJcbiAgcXVlcnkgZ2V0QWxsUmVnaW9uc0FuZERpdmlzaW9uc1F1ZXJ5IHtcclxuICAgIHJlZ2lvbnMge1xyXG4gICAgICBpZFxyXG4gICAgICByZWdOYW1lXHJcbiAgICAgIHJlZ0NvZGVcclxuICAgICAgZGl2aXNpb24ob3JkZXJCeTogZGl2TmFtZV9BU0MpIHtcclxuICAgICAgICBkaXZOYW1lXHJcbiAgICAgICAgZGl2Q29kZVxyXG4gICAgICAgIGlkXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBnZXRBbGxSZWdpb25zRGl2aXNpb25zQW5kVG93bnNRdWVyeSA9IGdxbGBcclxuICBxdWVyeSBnZXRBbGxSZWdpb25zRGl2aXNpb25zQW5kVG93bnNRdWVyeSB7XHJcbiAgICByZWdpb25zIHtcclxuICAgICAgaWRcclxuICAgICAgcmVnTmFtZVxyXG4gICAgICByZWdDb2RlXHJcbiAgICAgIGRpdmlzaW9uKG9yZGVyQnk6IGRpdk5hbWVfQVNDKSB7XHJcbiAgICAgICAgZGl2TmFtZVxyXG4gICAgICAgIGRpdkNvZGVcclxuICAgICAgICBpZFxyXG4gICAgICAgIHN1YkRpdmlzaW9uIHtcclxuICAgICAgICAgIGlkXHJcbiAgICAgICAgICBzdWJEaXZOYW1lXHJcbiAgICAgICAgICBzdWJEaXZDb2RlXHJcbiAgICAgICAgICB0b3duKG9yZGVyQnk6IHRvd25OYW1lX0FTQykge1xyXG4gICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICB0b3duTmFtZVxyXG4gICAgICAgICAgICB0b3duQ29kZVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IGdldEFsbFJlZ2lvbnNEaXZpc2lvbnNUb3duc0NlbnRlcnNRdWVyeSA9IGdxbGBcclxuICBxdWVyeSBnZXRBbGxSZWdpb25zRGl2aXNpb25zVG93bnNDZW50ZXJzUXVlcnkge1xyXG4gICAgcmVnaW9ucyB7XHJcbiAgICAgIGlkXHJcbiAgICAgIHJlZ05hbWVcclxuICAgICAgcmVnQ29kZVxyXG4gICAgICBkaXZpc2lvbihvcmRlckJ5OiBkaXZOYW1lX0FTQykge1xyXG4gICAgICAgIGRpdk5hbWVcclxuICAgICAgICBkaXZDb2RlXHJcbiAgICAgICAgaWRcclxuICAgICAgICBzdWJEaXZpc2lvbiB7XHJcbiAgICAgICAgICBpZFxyXG4gICAgICAgICAgc3ViRGl2TmFtZVxyXG4gICAgICAgICAgc3ViRGl2Q29kZVxyXG4gICAgICAgICAgdG93bihvcmRlckJ5OiB0b3duTmFtZV9BU0MpIHtcclxuICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgdG93bk5hbWVcclxuICAgICAgICAgICAgdG93bkNvZGVcclxuICAgICAgICAgICAgY2VudGVyKG9yZGVyQnk6IGNlbnRlck5hbWVfQVNDKSB7XHJcbiAgICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgICBjZW50ZXJOYW1lXHJcbiAgICAgICAgICAgICAgY2VudGVyQ29kZVxyXG4gICAgICAgICAgICAgIGNlbnRlck51bWJlclxyXG4gICAgICAgICAgICAgIGNlbnRlclNlY3JldENvZGVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuY29uc3QgZ2V0RGl2aXNpb25zT2ZBUmVnaW9uUXVlcnkgPSBncWxgXHJcbiAgcXVlcnkgZ2V0RGl2aXNpb25zT2ZBUmVnaW9uUXVlcnkoJGlkOiBJRCEpIHtcclxuICAgIHJlZ2lvbihpZDogJGlkKSB7XHJcbiAgICAgIHJlZ05hbWVcclxuICAgICAgaWRcclxuICAgICAgZGl2aXNpb24ob3JkZXJCeTogZGl2TmFtZV9BU0MpIHtcclxuICAgICAgICBkaXZOYW1lXHJcbiAgICAgICAgZGl2Q29kZVxyXG4gICAgICAgIGlkXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBnZXRTdWJEaXZpc2lvbnNPZkFEaXZpc2lvblF1ZXJ5ID0gZ3FsYFxyXG4gIHF1ZXJ5IGdldFN1YkRpdmlzaW9uc09mQURpdmlzaW9uUXVlcnkoJGlkOiBJRCEpIHtcclxuICAgIGRpdmlzaW9uKGlkOiAkaWQpIHtcclxuICAgICAgZGl2TmFtZVxyXG4gICAgICBpZFxyXG4gICAgICBzdWJEaXZpc2lvbihvcmRlckJ5OiBzdWJEaXZOYW1lX0FTQykge1xyXG4gICAgICAgIHN1YkRpdk5hbWVcclxuICAgICAgICBzdWJEaXZDb2RlXHJcbiAgICAgICAgaWRcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IGdldEFsbFN1YkRpdmlzaW9uc1F1ZXJ5ID0gZ3FsYFxyXG4gIHF1ZXJ5IGdldEFsbFN1YkRpdmlzaW9uc1F1ZXJ5IHtcclxuICAgIHN1YkRpdmlzaW9uKG9yZGVyQnk6IHN1YkRpdk5hbWVfQVNDKSB7XHJcbiAgICAgIHN1YkRpdk5hbWVcclxuICAgICAgc3ViRGl2Q29kZVxyXG4gICAgICBpZFxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IGdldEFsbFRvd25zUXVlcnkgPSBncWxgXHJcbiAgcXVlcnkgZ2V0QWxsVG93bnNRdWVyeSB7XHJcbiAgICB0b3ducyhvcmRlckJ5OiB0b3duTmFtZV9BU0MpIHtcclxuICAgICAgdG93bk5hbWVcclxuICAgICAgdG93bkNvZGVcclxuICAgICAgaWRcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBnZXRUb3duc09mQVN1YkRpdmlzaW9uUXVlcnkgPSBncWxgXHJcbiAgcXVlcnkgZ2V0VG93bnNPZkFTdWJEaXZpc2lvbigkaWQ6IElEISkge1xyXG4gICAgc3ViRGl2aXNpb24oaWQ6ICRpZCkge1xyXG4gICAgICBzdWJEaXZOYW1lXHJcbiAgICAgIGlkXHJcbiAgICAgIHRvd24ob3JkZXJCeTogdG93bk5hbWVfQVNDKSB7XHJcbiAgICAgICAgdG93bk5hbWVcclxuICAgICAgICB0b3duQ29kZVxyXG4gICAgICAgIGlkXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBnZXRDZW50ZXJzT2ZBVG93blF1ZXJ5ID0gZ3FsYFxyXG4gIHF1ZXJ5IGdldENlbnRlcnNPZkFUb3duUXVlcnkoJGlkOiBJRCEpIHtcclxuICAgIHRvd24oaWQ6ICRpZCkge1xyXG4gICAgICB0b3duTmFtZVxyXG4gICAgICBpZFxyXG4gICAgICBjZW50ZXIob3JkZXJCeTogY2VudGVyTmFtZV9BU0MpIHtcclxuICAgICAgICBjZW50ZXJOYW1lXHJcbiAgICAgICAgY2VudGVyQ29kZVxyXG4gICAgICAgIGNlbnRlck51bWJlclxyXG4gICAgICAgIGlkXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBjZW50ZXJzUGVyVG93blF1ZXJ5ID0gZ3FsYFxyXG4gIHF1ZXJ5IGNlbnRlcnNQZXJUb3duUXVlcnkoJGlkOiBJRCEpIHtcclxuICAgIHRvd24oaWQ6ICRpZCkge1xyXG4gICAgICB0b3duTmFtZVxyXG4gICAgICBpZFxyXG4gICAgICBjZW50ZXIob3JkZXJCeTogY2VudGVyTmFtZV9BU0MpIHtcclxuICAgICAgICBjZW50ZXJOYW1lXHJcbiAgICAgICAgY2VudGVyTnVtYmVyXHJcbiAgICAgICAgY2VudGVyU2VjcmV0Q29kZVxyXG4gICAgICAgIGNlbnRlckNvZGVcclxuICAgICAgICBpZFxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgZ2V0QWxsQ2VudGVyc1F1ZXJ5ID0gZ3FsYFxyXG4gIHF1ZXJ5IGdldEFsbENlbnRlcnNRdWVyeSB7XHJcbiAgICBjZW50ZXJzKG9yZGVyQnk6IGNlbnRlck5hbWVfQVNDKSB7XHJcbiAgICAgIGlkXHJcbiAgICAgIGNlbnRlck5hbWVcclxuICAgICAgY2VudGVyQ29kZVxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IGdldEFsbENhbmRpZGF0ZXNRdWVyeSA9IGdxbGBcclxuICBxdWVyeSBnZXRBbGxDYW5kaWRhdGVzUXVlcnkge1xyXG4gICAgY2FuZGlkYXRlcyhvcmRlckJ5OiBjYW5kMXN0TmFtZV9BU0MpIHtcclxuICAgICAgY2FuZDFzdE5hbWVcclxuICAgICAgY2FuZDJuZE5hbWVcclxuICAgICAgY2FuZDNyZE5hbWVcclxuICAgICAgZW1haWxcclxuICAgICAgaW1hZ2VcclxuICAgICAgcGhvbmVOdW1iXHJcbiAgICAgIHBsYWNlT2ZCaXJ0aFxyXG4gICAgICBjYW5kQ29kZVxyXG4gICAgICBpZFxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbi8vLyoqKioqKioqKioqKioqKioqU2luZ2xlIG9iamVjdCBxdWVyaWVzICovXHJcblxyXG5jb25zdCBzaW5nbGVDZW50ZXJRdWVyeSA9IGdxbGBcclxuICBxdWVyeSBzaW5nbGVDZW50ZXJRdWVyeSgkaWQ6IElEISkge1xyXG4gICAgY2VudGVyKGlkOiAkaWQpIHtcclxuICAgICAgY2VudGVyTmFtZVxyXG4gICAgICBjZW50ZXJOdW1iZXJcclxuICAgICAgY2VudGVyQ29kZVxyXG4gICAgICBpZFxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IGdldFNpbmdsZUNlbnRlclF1ZXJ5ID0gZ3FsYFxyXG4gIHF1ZXJ5IGdldFNpbmdsZUNlbnRlclF1ZXJ5KCRjZW50ZXJOdW1iZXI6IEludCEpIHtcclxuICAgIGNlbnRlckJ5TnVtYmVyKGNlbnRlck51bWJlcjogJGNlbnRlck51bWJlcikge1xyXG4gICAgICBpZFxyXG4gICAgICBjZW50ZXJOdW1iZXJcclxuICAgICAgY2VudGVyQ29kZVxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IGdldFNpbmdsZUNlbnRlckZyb21DZW50ZXJTZWNyZXRDb2RlUXVlcnkgPSBncWxgXHJcbiAgcXVlcnkgZ2V0U2luZ2xlQ2VudGVyRnJvbUNlbnRlclNlY3JldENvZGVRdWVyeSgkQ0VTQ29kZTogU3RyaW5nISkge1xyXG4gICAgY2VudGVyQnlTZWNyZXRDb2RlKENFU0NvZGU6ICRDRVNDb2RlKSB7XHJcbiAgICAgIGlkXHJcbiAgICAgIENFU0NvZGVcclxuICAgICAgY2VudGVyTmFtZVxyXG4gICAgICBjZW50ZXJDb2RlXHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgZ2V0U2luZ2xlUHJvZlF1ZXJ5ID0gZ3FsYFxyXG4gIHF1ZXJ5IGdldFNpbmdsZVByb2ZRdWVyeSgkYXV0aENvZGU6IFN0cmluZyEpIHtcclxuICAgIHByb2ZCeUF1dGhDb2RlKGF1dGhDb2RlOiAkYXV0aENvZGUpIHtcclxuICAgICAgYXV0aENvZGVcclxuICAgICAgaWRcclxuICAgICAgYXV0aDFzdE5hbWVcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBnZXRTaW5nbGVDZW50ZXJCeUNvZGVRdWVyeSA9IGdxbGBcclxuICBxdWVyeSBnZXRTaW5nbGVDZW50ZXJCeUNvZGVRdWVyeSgkY2VudGVyU2VjcmV0Q29kZTogU3RyaW5nISkge1xyXG4gICAgZ2V0Q2VudGVyQnlDb2RlKGNlbnRlclNlY3JldENvZGU6ICRjZW50ZXJTZWNyZXRDb2RlKSB7XHJcbiAgICAgIGlkXHJcbiAgICAgIGNlbnRlckNvZGVcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBnZXRBU2luZ2xlQ2VudGVyUXVlcnkgPSBncWxgXHJcbiAgcXVlcnkgZ2V0QVNpbmdsZUNlbnRlclF1ZXJ5KCRjZW50ZXJOdW1iZXI6IEludCEpIHtcclxuICAgIGNlbnRlckJ5TnVtYmVyKGNlbnRlck51bWJlcjogJGNlbnRlck51bWJlcikge1xyXG4gICAgICBjZW50ZXJOdW1iZXJcclxuICAgICAgY2VudGVyTmFtZVxyXG4gICAgICBjZW50ZXJDb2RlXHJcbiAgICAgIGlkXHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3Qgc2luZ2xlVG93blF1ZXJ5ID0gZ3FsYFxyXG4gIHF1ZXJ5IHNpbmdsZVRvd25RdWVyeSgkaWQ6IElEISkge1xyXG4gICAgdG93bihpZDogJGlkKSB7XHJcbiAgICAgIHRvd25OYW1lXHJcbiAgICAgIHRvd25Db2RlXHJcbiAgICAgIGlkXHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgZ2V0U2luZ2xlQ2VudGVyRXhhbVNlc3Npb25RdWVyeSA9IGdxbGBcclxuICBxdWVyeSBnZXRTaW5nbGVDZW50ZXJFeGFtU2Vzc2lvblF1ZXJ5KFxyXG4gICAgJGNlbnRlcjogQ2VudGVyV2hlcmVVbmlxdWVJbnB1dCFcclxuICAgICRleGFtU2Vzc2lvbjogRXhhbVNlc3Npb25XaGVyZVVuaXF1ZUlucHV0IVxyXG4gICkge1xyXG4gICAgY2VudGVyRXhhbVNlc3Npb25zQnlDb2RlKGV4YW1TZXNzaW9uOiAkZXhhbVNlc3Npb24sIGNlbnRlcjogJGNlbnRlcikge1xyXG4gICAgICBpZFxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IGdldFNpbmdsZUNlbnRlckV4YW1TZXNzaW9uQnlTZWNyZXRDb2RlUXVlcnkgPSBncWxgXHJcbiAgcXVlcnkgZ2V0U2luZ2xlQ2VudGVyRXhhbVNlc3Npb25CeVNlY3JldENvZGVRdWVyeSgkQ0VTQ29kZTogU3RyaW5nISkge1xyXG4gICAgY2VudGVyRXhhbVNlc3Npb25CeVNlY3JldENvZGUoQ0VTQ29kZTogJENFU0NvZGUpIHtcclxuICAgICAgaWRcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBnZXRBbGxSYW5rc09mQW5FeGFtUGhhc2VRdWVyeSA9IGdxbGBcclxuICBxdWVyeSBnZXRBbGxSYW5rc09mQW5FeGFtUGhhc2VRdWVyeSgkaWQ6IElEISkge1xyXG4gICAgcGhhc2UoaWQ6ICRpZCkge1xyXG4gICAgICBpZFxyXG4gICAgICBwaGFzZVJhbmsge1xyXG4gICAgICAgIGlkXHJcbiAgICAgICAgcmFuayB7XHJcbiAgICAgICAgICBpZFxyXG4gICAgICAgICAgcmFua05hbWVcclxuICAgICAgICAgIHJhbmtDb2RlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHBoYXNlIHtcclxuICAgICAgICAgIGlkXHJcbiAgICAgICAgICBwaGFzZU5hbWVcclxuICAgICAgICAgIHBoYXNlQ29kZVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IGdldFJlZ2lzdGVyZWRDYW5kaWRhdGVDb3VudFF1ZXJ5ID0gZ3FsYFxyXG4gIHF1ZXJ5IGdldFJlZ2lzdGVyZWRDYW5kaWRhdGVDb3VudFF1ZXJ5KCRpZDogSUQhKSB7XHJcbiAgICByZWdpc3RyYXRpb25zQ29ubmVjdGlvbihpZDogJGlkKSB7XHJcbiAgICAgIGFnZ3JlZ2F0ZSB7XHJcbiAgICAgICAgY291bnRcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IGdldFJlZ2lzdGVyZWRDYW5kaWRhdGVzUGVyU3BlY2lhbHR5ID0gZ3FsYFxyXG4gIHF1ZXJ5IGdldFJlZ2lzdGVyZWRDYW5kaWRhdGVzUGVyU3BlY2lhbHR5KCRpZDogSUQhKSB7XHJcbiAgICBjZW50ZXJFeGFtU2Vzc2lvblNwZWNpYWx0eShpZDogJGlkKSB7XHJcbiAgICAgIGlkXHJcbiAgICAgIHJlZ2lzdHJhdGlvbiB7XHJcbiAgICAgICAgY2FuZFJlZ2lzdHJhdGlvbk51bWJlclxyXG4gICAgICAgIGlkXHJcbiAgICAgICAgY2FuZEV4YW1TZWNyZXRDb2RlXHJcbiAgICAgICAgY2FuZGlkYXRlIHtcclxuICAgICAgICAgIGlkXHJcbiAgICAgICAgICBjYW5kMXN0TmFtZVxyXG4gICAgICAgICAgY2FuZDJuZE5hbWVcclxuICAgICAgICAgIGNhbmQzcmROYW1lXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgZ2V0Q2VudGVyRXhhbVNlc3Npb25TcGVjaWFsdHlRdWVyeSA9IGdxbGBcclxuICBxdWVyeSBnZXRDZW50ZXJFeGFtU2Vzc2lvblNwZWNpYWx0eVF1ZXJ5KFxyXG4gICAgJGNlbnRlckV4YW1TZXNzaW9uOiBDZW50ZXJFeGFtU2Vzc2lvbldoZXJlVW5pcXVlSW5wdXQhXHJcbiAgICAkc3BlY2lhbHR5OiBTcGVjaWFsdHlXaGVyZVVuaXF1ZUlucHV0IVxyXG4gICkge1xyXG4gICAgY2VudGVyRXhhbVNlc3Npb25TcGVjaWFsdGllcyhcclxuICAgICAgY2VudGVyRXhhbVNlc3Npb246ICRjZW50ZXJFeGFtU2Vzc2lvblxyXG4gICAgICBzcGVjaWFsdHk6ICRzcGVjaWFsdHlcclxuICAgICkge1xyXG4gICAgICBpZFxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IGdldFNwZWNpYWx0eUZyb21DRVNTUXVlcnkgPSBncWxgXHJcbiAgcXVlcnkgZ2V0U3BlY2lhbHR5RnJvbUNFU1NRdWVyeSgkaWQ6IElEISkge1xyXG4gICAgY2VudGVyRXhhbVNlc3Npb25TcGVjaWFsdHkoaWQ6ICRpZCkge1xyXG4gICAgICBpZFxyXG4gICAgICBzcGVjaWFsdHkge1xyXG4gICAgICAgIGlkXHJcbiAgICAgICAgc3BlY2lhbHR5TmFtZVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgZ2V0RXhhbVNlc3Npb25RdWVyeSA9IGdxbGBcclxuICBxdWVyeSBnZXRFeGFtU2Vzc2lvblF1ZXJ5KFxyXG4gICAgJGV4YW06IEV4YW1XaGVyZVVuaXF1ZUlucHV0IVxyXG4gICAgJHNlc3Npb246IFNlc3Npb25XaGVyZVVuaXF1ZUlucHV0IVxyXG4gICkge1xyXG4gICAgZXhhbVNlc3Npb25zKHNlc3Npb246ICRzZXNzaW9uLCBleGFtOiAkZXhhbSkge1xyXG4gICAgICBpZFxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IHNpbmdsZUV4YW1RdWVyeSA9IGdxbGBcclxuICBxdWVyeSBzaW5nbGVFeGFtUXVlcnkoJGlkOiBJRCEpIHtcclxuICAgIGV4YW0oaWQ6ICRpZCkge1xyXG4gICAgICBleGFtTmFtZVxyXG4gICAgICBleGFtQ29kZVxyXG4gICAgICBpZFxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IHNpbmdsZUNhbmRpZGF0ZVF1ZXJ5MSA9IGdxbGBcclxuICBxdWVyeSBzaW5nbGVDYW5kaWRhdGVRdWVyeTEoJGlkOiBJRCEpIHtcclxuICAgIGNhbmRpZGF0ZShpZDogJGlkKSB7XHJcbiAgICAgIGNhbmQxc3ROYW1lXHJcbiAgICAgIGNhbmQybmROYW1lXHJcbiAgICAgIGNhbmQzcmROYW1lXHJcbiAgICAgIGRhZE5hbWVcclxuICAgICAgbW9tTmFtZVxyXG4gICAgICBjYW5kQ29kZVxyXG4gICAgICBlbWFpbFxyXG4gICAgICBpbWFnZVxyXG4gICAgICBwaG9uZU51bWJcclxuICAgICAgcGxhY2VPZkJpcnRoXHJcbiAgICAgIHVzZXIge1xyXG4gICAgICAgIGlkXHJcbiAgICAgIH1cclxuICAgICAgaWRcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBzaW5nbGVDYW5kaWRhdGVRdWVyeSA9IGdxbGBcclxuICBxdWVyeSBzaW5nbGVDYW5kaWRhdGVRdWVyeSgkaWQ6IElEISkge1xyXG4gICAgY2FuZGlkYXRlKGlkOiAkaWQpIHtcclxuICAgICAgaWRcclxuICAgICAgZGF0ZU9mQmlydGhcclxuICAgICAgY2FuZDFzdE5hbWVcclxuICAgICAgY2FuZDJuZE5hbWVcclxuICAgICAgY2FuZDNyZE5hbWVcclxuICAgICAgY2FuZENvZGVcclxuICAgICAgZGFkTmFtZVxyXG4gICAgICBtb21OYW1lXHJcbiAgICAgIGVtYWlsXHJcbiAgICAgIGltYWdlXHJcbiAgICAgIHBob25lTnVtYlxyXG4gICAgICBiaXJ0aENlcnROdW1iZXJcclxuICAgICAgcGxhY2VPZkJpcnRoXHJcbiAgICAgIGdlbmRlclxyXG4gICAgICB1c2VyIHtcclxuICAgICAgICBpZFxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3Qgc2luZ2xlRXhhbWluZXJRdWVyeSA9IGdxbGBcclxuICBxdWVyeSBzaW5nbGVFeGFtaW5lclF1ZXJ5KCRpZDogSUQhKSB7XHJcbiAgICBleGFtaW5lcihpZDogJGlkKSB7XHJcbiAgICAgIGlkXHJcbiAgICAgIGV4YW1pbmVyMXN0TmFtZVxyXG4gICAgICBleGFtaW5lcjJuZE5hbWVcclxuICAgICAgZXhhbWluZXJPdGhlck5hbWVzXHJcbiAgICAgIGV4YW1pbmVyQ29kZVxyXG4gICAgICBleGFtaW5lckVtYWlsXHJcbiAgICAgIGdlbmRlclxyXG4gICAgICBleGFtaW5lckltYWdlXHJcbiAgICAgIGV4YW1pbmVyUGhvbmVcclxuICAgICAgZXhhbWluZXJNYXRyaWN1bGVcclxuICAgICAgZXhhbWluZXJDTklcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCB2aWV3U2luZ2xlQ2FuZGlkYXRlUXVlcnkgPSBncWxgXHJcbiAgcXVlcnkgdmlld1NpbmdsZUNhbmRpZGF0ZVF1ZXJ5KCRjYW5kQ29kZTogU3RyaW5nISkge1xyXG4gICAgc2luZ2xlQ2FuZGlkYXRlKGNhbmRDb2RlOiAkY2FuZENvZGUpIHtcclxuICAgICAgaWRcclxuICAgICAgZGF0ZU9mQmlydGhcclxuICAgICAgY2FuZDFzdE5hbWVcclxuICAgICAgY2FuZDJuZE5hbWVcclxuICAgICAgY2FuZDNyZE5hbWVcclxuICAgICAgY2FuZENvZGVcclxuICAgICAgbW9tTmFtZVxyXG4gICAgICBkYWROYW1lXHJcbiAgICAgIGVtYWlsXHJcbiAgICAgIGltYWdlXHJcbiAgICAgIHBob25lTnVtYlxyXG4gICAgICBiaXJ0aENlcnROdW1iZXJcclxuICAgICAgcGxhY2VPZkJpcnRoXHJcbiAgICAgIHVzZXIge1xyXG4gICAgICAgIGlkXHJcbiAgICAgIH1cclxuICAgICAgZ2VuZGVyXHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgZ2V0U2NvcmVJRCA9IGdxbGBcclxuICBxdWVyeSBnZXRTY29yZUlEKCRjYW5kRXhhbVNlY3JldENvZGU6IFN0cmluZyEpIHtcclxuICAgIHNjb3JlcyhjYW5kRXhhbVNlY3JldENvZGU6ICRjYW5kRXhhbVNlY3JldENvZGUpIHtcclxuICAgICAgaWRcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBnZXRSZWdpc3RyYXRpb25zID0gZ3FsYFxyXG4gIHF1ZXJ5IGdldFJlZ2lzdHJhdGlvbnMoJGNhbmRFeGFtU2VjcmV0Q29kZTogU3RyaW5nISkge1xyXG4gICAgcmVnaXN0cmF0aW9uKGNhbmRFeGFtU2VjcmV0Q29kZTogJGNhbmRFeGFtU2VjcmV0Q29kZSkge1xyXG4gICAgICBpZFxyXG4gICAgICBzY29yZXMge1xyXG4gICAgICAgIGlkXHJcbiAgICAgICAgc3ViamVjdChvcmRlckJ5OiBzdWJqZWN0TmFtZV9BU0MpIHtcclxuICAgICAgICAgIGlkXHJcbiAgICAgICAgICBzdWJqZWN0TmFtZVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IHNpbmdsZVN1YkRpdmlzaW9uUXVlcnkgPSBncWxgXHJcbiAgcXVlcnkgc2luZ2xlU3ViRGl2aXNpb25RdWVyeSgkaWQ6IElEISkge1xyXG4gICAgc3ViRGl2aXNpb24oaWQ6ICRpZCkge1xyXG4gICAgICBzdWJEaXZOYW1lXHJcbiAgICAgIHN1YkRpdkNvZGVcclxuICAgICAgaWRcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBnZXRTaW5nbGVSZWdpb25RdWVyeSA9IGdxbGBcclxuICBxdWVyeSBnZXRTaW5nbGVSZWdpb25RdWVyeSgkaWQ6IElEISkge1xyXG4gICAgcmVnaW9uKGlkOiAkaWQpIHtcclxuICAgICAgcmVnTmFtZVxyXG4gICAgICByZWdDb2RlXHJcbiAgICAgIGlkXHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3Qgc2luZ2xlUGhhc2VRdWVyeSA9IGdxbGBcclxuICBxdWVyeSBzaW5nbGVQaGFzZVF1ZXJ5KCRpZDogSUQhKSB7XHJcbiAgICBwaGFzZShpZDogJGlkKSB7XHJcbiAgICAgIHBoYXNlTmFtZVxyXG4gICAgICBwaGFzZUNvZGVcclxuICAgICAgaWRcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBzaW5nbGVTcGVjaWFsdHlRdWVyeSA9IGdxbGBcclxuICBxdWVyeSBzaW5nbGVTcGVjaWFsdHlRdWVyeSgkaWQ6IElEISkge1xyXG4gICAgc3BlY2lhbHR5KGlkOiAkaWQpIHtcclxuICAgICAgc3BlY2lhbHR5TmFtZVxyXG4gICAgICBzcGVjaWFsdHlDb2RlXHJcbiAgICAgIGlkXHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgZGF0YUZvckF2ZXJhZ2UgPSBncWxgXHJcbiAgcXVlcnkgZGF0YUZvckF2ZXJhZ2UoJGNhbmRFeGFtU2VjcmV0Q29kZTogU3RyaW5nISkge1xyXG4gICAgc2NvcmVzKGNhbmRFeGFtU2VjcmV0Q29kZTogJGNhbmRFeGFtU2VjcmV0Q29kZSkge1xyXG4gICAgICBpZFxyXG4gICAgICBzdWJqZWN0QXZlXHJcbiAgICAgIGNvZWZmXHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3Qgc2luZ2xlRGl2aXNpb25RdWVyeSA9IGdxbGBcclxuICBxdWVyeSBzaW5nbGVEaXZpc2lvblF1ZXJ5KCRpZDogSUQhKSB7XHJcbiAgICBkaXZpc2lvbihpZDogJGlkKSB7XHJcbiAgICAgIGRpdk5hbWVcclxuICAgICAgZGl2Q29kZVxyXG4gICAgICBpZFxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IHNpbmdsZVJhbmtRdWVyeSA9IGdxbGBcclxuICBxdWVyeSBzaW5nbGVSYW5rUXVlcnkoJGlkOiBJRCEpIHtcclxuICAgIHJhbmsoaWQ6ICRpZCkge1xyXG4gICAgICByYW5rTmFtZVxyXG4gICAgICByYW5rQ29kZVxyXG4gICAgICBpZFxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IHNpbmdsZVN1YmplY3RRdWVyeSA9IGdxbGBcclxuICBxdWVyeSBzaW5nbGVTdWJqZWN0UXVlcnkoJGlkOiBJRCEpIHtcclxuICAgIHN1YmplY3QoaWQ6ICRpZCkge1xyXG4gICAgICBzdWJqZWN0TmFtZVxyXG4gICAgICBzdWJqZWN0Q29kZVxyXG4gICAgICBpZFxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IHNpbmdsZVN1YmplY3RHcm91cFF1ZXJ5ID0gZ3FsYFxyXG4gIHF1ZXJ5IHNpbmdsZVN1YmplY3RHcm91cFF1ZXJ5KCRpZDogSUQhKSB7XHJcbiAgICBzdWJqZWN0R3JvdXAoaWQ6ICRpZCkge1xyXG4gICAgICBzdWJqZWN0R3JvdXBOYW1lXHJcbiAgICAgIHN1YmplY3RHcm91cENvZGVcclxuICAgICAgaWRcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBzaW5nbGVTZXNzaW9uUXVlcnkgPSBncWxgXHJcbiAgcXVlcnkgc2luZ2xlU2Vzc2lvblF1ZXJ5KCRpZDogSUQhKSB7XHJcbiAgICBzZXNzaW9uKGlkOiAkaWQpIHtcclxuICAgICAgc2Vzc2lvbk5hbWVcclxuICAgICAgc2Vzc2lvbkNvZGVcclxuICAgICAgaWRcclxuICAgIH1cclxuICB9XHJcbmA7XHJcbi8vLyoqKioqKioqKioqKioqKioqRW5kIFNpbmdsZSBvYmplY3QgcXVlcmllcyAqL1xyXG5cclxuZXhwb3J0IHtcclxuICBnZXRBbGxTdWJqZWN0U3BlY2lhbHRpZXNPZkFTcGVjaWFsdHlRdWVyeSxcclxuICBnZXRBbGxTcGVjaWFsdGllc09mQW5FZHVjYXRpb25UeXBlUXVlcnksXHJcbiAgZ2V0QWxsRXhhbXNRdWVyeSxcclxuICBnZXRBbGxTZXNzaW9uc1F1ZXJ5LFxyXG4gIGdldERpdmlzaW9uc09mQVJlZ2lvblF1ZXJ5LFxyXG4gIGdldEFsbERpdmlzaW9uc1F1ZXJ5LFxyXG4gIGdldFN1YkRpdmlzaW9uc09mQURpdmlzaW9uUXVlcnksXHJcbiAgZ2V0VG93bnNPZkFTdWJEaXZpc2lvblF1ZXJ5LFxyXG4gIGdldENlbnRlcnNPZkFUb3duUXVlcnksXHJcbiAgZ2V0QWxsRWR1Y2F0aW9uVHlwZXNRdWVyeSxcclxuICBnZXRBbGxFZHVjYXRpb25UeXBlc0FuZFN1YmplY3RzUXVlcnksXHJcbiAgZ2V0QWxsUmFua3NRdWVyeSxcclxuICBnZXRBbGxDYW5kaWRhdGVzUXVlcnksXHJcbiAgZ2V0QWxsQ2VudGVyc1F1ZXJ5LFxyXG4gIGdldFNpbmdsZVJlZ2lvblF1ZXJ5LFxyXG4gIGdldEFsbFNwZWNpYWx0aWVzUXVlcnksXHJcbiAgZ2V0QWxsU3ViRGl2aXNpb25zUXVlcnksXHJcbiAgZ2V0QWxsU3ViamVjdHNPZkFuRWR1Y1R5cGVRdWVyeSxcclxuICBnZXRTY29yZUlELFxyXG4gIHNpbmdsZVNwZWNpYWx0eVF1ZXJ5LFxyXG4gIGdldFJlZ2lzdHJhdGlvbnMsXHJcbiAgc2luZ2xlU3ViamVjdFF1ZXJ5LFxyXG4gIHNpbmdsZUNhbmRpZGF0ZVF1ZXJ5MSxcclxuICBnZXRBbGxTdWJqZWN0c1dpdGhFZHVjVHlwZXNRdWVyeSxcclxuICBzaW5nbGVDYW5kaWRhdGVRdWVyeSxcclxuICB2aWV3U2luZ2xlQ2FuZGlkYXRlUXVlcnksXHJcbiAgc2luZ2xlQ2VudGVyUXVlcnksXHJcbiAgc2luZ2xlRXhhbVF1ZXJ5LFxyXG4gIHNpbmdsZVRvd25RdWVyeSxcclxuICBnZXRBbGxDZW50ZXJSZXN1bHRzUXVlcnksXHJcbiAgc2luZ2xlU2Vzc2lvblF1ZXJ5LFxyXG4gIHNpbmdsZURpdmlzaW9uUXVlcnksXHJcbiAgc2luZ2xlU3ViRGl2aXNpb25RdWVyeSxcclxuICBzaW5nbGVFZHVjYXRpb25UeXBlUXVlcnksXHJcbiAgc2luZ2xlUmFua1F1ZXJ5LFxyXG4gIGNlbnRlckV4YW1TZXNzaW9uU3BlY2lhbHR5Rm9yUmVzdWx0c1F1ZXJ5LFxyXG4gIGdldEFsbENhbmRpZGF0ZVJlZ2lzdHJhdGlvbklEc1F1ZXJ5LFxyXG4gIGdldENlbnRlckV4YW1TZXNzaW9uU3BlY2lhbHR5UXVlcnksXHJcbiAgZ2V0RXhhbVNlc3Npb25RdWVyeSxcclxuICBnZXRBbGxTcGVjaWFsdGllc09mQUNlbnRlckV4YW1TZXNzaW9uUXVlcnksXHJcbiAgZ2V0Q2VudGVyUmVzdWx0c1F1ZXJ5LFxyXG4gIGdldENhbmRpZGF0ZVJlZ2lzdHJhdGlvbklEUXVlcnksXHJcbiAgcmVnaXN0cmF0aW9uSURGcm9tU2VjcmV0Q29kZVF1ZXJ5LFxyXG4gIGdldENhbmRpZGF0ZVJlZ2lzdHJhdGlvbklEc1F1ZXJ5LFxyXG4gIGNlbnRlckV4YW1TZXNzaW9uRm9yUmVzdWx0c1F1ZXJ5LFxyXG4gIHJlc3VsdHNSZWdpc3RyYXRpb25RdWVyeSxcclxuICBnZXRDYW5kaWRhdGVJRFF1ZXJ5LFxyXG4gIGdldEFTaW5nbGVDZW50ZXJRdWVyeSxcclxuICBnZXRSZWdpc3RlcmVkQ2FuZGlkYXRlQ291bnRRdWVyeSxcclxuICBjZW50ZXJzUGVyVG93blF1ZXJ5LFxyXG4gIGdldFNpbmdsZUNlbnRlclF1ZXJ5LFxyXG4gIGdldENhbmRpZGF0ZVJlc3VsdHNRdWVyeSxcclxuICBnZXRDZW50ZXJSZWdpc3RyYXRpb25JRHNRdWVyeSxcclxuICBnZXRDYW5kaWRhdGVCeUNhbmRDb2RlUXVlcnksXHJcbiAgZ2V0U2luZ2xlQ2VudGVyRXhhbVNlc3Npb25RdWVyeSxcclxuICBnZXRFYWNoQ2FuZGlkYXRlUmVzdWx0c1F1ZXJ5LFxyXG4gIGdldENlbnRlcklERnJvbUNlbnRlckNvZGVRdWVyeSxcclxuICBnZXRSZWdpc3RyYXRpb25JREZyb21SZWdOdW1iZXJRdWVyeSxcclxuICBjZW50ZXJFeGFtU2Vzc2lvblNwZWNpYWx0eVJlc3VsdHNRdWVyeSxcclxuICBkYXRhRm9yQXZlcmFnZSxcclxuICBnZXRBbGxQaGFzZXNRdWVyeSxcclxuICBnZXRBbGxSZWdpb25zUXVlcnksXHJcbiAgZ2V0QWxsVXNlcnNRdWVyeSxcclxuICBzaW5nbGVFeGFtaW5lclF1ZXJ5LFxyXG4gIGdldEFsbFJlZ2lvbnNEaXZpc2lvbnNBbmRUb3duc1F1ZXJ5LFxyXG4gIGdldEFsbFJlZ2lvbnNEaXZpc2lvbnNUb3duc0NlbnRlcnNRdWVyeSxcclxuICBnZXRDYW5kaWRhdGVSZWdpc3RyYXRpb25JbmZvUXVlcnksXHJcbiAgZ2V0Q0VTRXhhbWluZXJRdWVyeSxcclxuICBnZXRFeGFtaW5lcklEUXVlcnksXHJcbiAgZ2V0QWxsVG93bnNRdWVyeSxcclxuICBnZXRTcGVjaWFsdHlGcm9tQ0VTU1F1ZXJ5LFxyXG4gIGdldEV4YW1pbmVyUmVnaXN0cmF0aW9uUXVlcnksXHJcbiAgZ2V0U2luZ2xlUHJvZlF1ZXJ5LFxyXG4gIGdldEFsbEdyb3VwMVF1ZXJ5LFxyXG4gIGdldEFsbFN1YmplY3RzUXVlcnksXHJcbiAgZ2V0U2luZ2xlQ2VudGVyRnJvbUNlbnRlclNlY3JldENvZGVRdWVyeSxcclxuICBnZXRTaW5nbGVDZW50ZXJFeGFtU2Vzc2lvbkJ5U2VjcmV0Q29kZVF1ZXJ5LFxyXG4gIGdldEFsbEdyb3VwMlF1ZXJ5LFxyXG4gIHNpbmdsZVN1YmplY3RHcm91cFF1ZXJ5LFxyXG4gIGdldEFsbFJlZ2lvbnNBbmREaXZpc2lvbnNRdWVyeSxcclxuICBnZXRSZWdpc3RlcmVkQ2FuZGlkYXRlc1BlclNwZWNpYWx0eSxcclxuICBnZXRBbGxTdWJqZWN0R3JvdXBzUXVlcnksXHJcbiAgZ2V0QWxsUmFua3NPZkFuRXhhbVBoYXNlUXVlcnksXHJcbiAgZ2V0UmVnaXN0cmF0aW9uT2ZDRVNTUXVlcnksXHJcbiAgY3VycmVudFVzZXJRdWVyeSxcclxuICBzaW5nbGVQaGFzZVF1ZXJ5LFxyXG4gIGdldFNpbmdsZUNlbnRlckJ5Q29kZVF1ZXJ5LFxyXG59O1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IE11dGF0aW9uIH0gZnJvbSBcInJlYWN0LWFwb2xsb1wiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25cIjtcclxuaW1wb3J0IHsgY3VycmVudFVzZXJRdWVyeSB9IGZyb20gXCIuLi9xdWVyaWVzJk11dGF0aW9ucyZGdW5jdGlvbnMvUXVlcmllc1wiO1xyXG5pbXBvcnQgeyBzaWdub3V0TXV0YXRpb24gfSBmcm9tIFwiLi4vcXVlcmllcyZNdXRhdGlvbnMmRnVuY3Rpb25zL011dGF0aW9uc1wiO1xyXG5cclxuY29uc3QgU2lnbm91dCA9IChwcm9wcykgPT4gKFxyXG4gIDxNdXRhdGlvblxyXG4gICAgbXV0YXRpb249e3NpZ25vdXRNdXRhdGlvbn1cclxuICAgIHJlZmV0Y2hRdWVyaWVzPXtbeyBxdWVyeTogY3VycmVudFVzZXJRdWVyeSB9XX1cclxuICA+XHJcbiAgICB7KHNpZ25vdXQpID0+IChcclxuICAgICAgPEJ1dHRvblxyXG4gICAgICAgIHNpemU9XCJtZWRpdW1cIlxyXG4gICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjODI5MDc5XCIsXHJcbiAgICAgICAgICAgY29sb3I6IFwiI2VkZTZiOVwiLCBcclxuICAgICAgICAgIC8vIHBhZGRpbmdMZWZ0OiBcIjAuOHJlbVwiLFxyXG4gICAgICAgICAgLy8gcGFkZGluZ1JpZ2h0OiBcIjAuOHJlbVwiLFxyXG4gICAgICAgICAgdGV4dFRyYW5zZm9ybTogXCJub25lXCIsXHJcbiAgICAgICAgfX1cclxuICAgICAgICBvbkNsaWNrPXtzaWdub3V0fVxyXG4gICAgICA+XHJcbiAgICAgICAgRMOpY29ubmVjdGVyXHJcbiAgICAgIDwvQnV0dG9uPlxyXG4gICAgKX1cclxuICA8L011dGF0aW9uPlxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2lnbm91dDtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBRdWVyeSB9IGZyb20gXCJyZWFjdC1hcG9sbG9cIjtcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5pbXBvcnQgeyBjdXJyZW50VXNlclF1ZXJ5IH0gZnJvbSBcIi4uL3F1ZXJpZXMmTXV0YXRpb25zJkZ1bmN0aW9ucy9RdWVyaWVzXCI7XHJcblxyXG5jb25zdCBVc2VyID0gKHByb3BzKSA9PiAoXHJcbiAgPFF1ZXJ5IHsuLi5wcm9wc30gcXVlcnk9e2N1cnJlbnRVc2VyUXVlcnl9PlxyXG4gICAgeyhwYXlsb2FkKSA9PiBwcm9wcy5jaGlsZHJlbihwYXlsb2FkKX1cclxuICA8L1F1ZXJ5PlxyXG4pO1xyXG5cclxuVXNlci5wcm9wVHlwZXMgPSB7XHJcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IFVzZXI7XHJcbiIsImltcG9ydCB7IGNyZWF0ZU11aVRoZW1lIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xyXG5pbXBvcnQgeyByZWQsIG9yYW5nZSB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9jb2xvcnNcIjtcclxuXHJcbi8vIENyZWF0ZSBhIHRoZW1lIGluc3RhbmNlLlxyXG5jb25zdCBTeWdlZmV4VGhlbWUgPSBjcmVhdGVNdWlUaGVtZSh7XHJcbiAgcGFsZXR0ZToge1xyXG4gICAgcHJpbWFyeToge1xyXG4gICAgICAvLyBtYWluOiBcIiMyYzVmMmRcIixcclxuICAgICAgbWFpbjogXCIjODI5MDc5XCIsXHJcbiAgICAgIC8vIG1haW46IFwiIzA0NDU2MlwiLFxyXG4gICAgICBsaWdodDogXCIjZjAwXCIsXHJcbiAgICAgIC8vIG1haW46IFwiIzA3ODBiN1wiLFxyXG4gICAgfSxcclxuICAgIHNlY29uZGFyeToge1xyXG4gICAgICBtYWluOiBcIiMxOTg1N2JcIixcclxuICAgICAgbGlnaHQ6IFwiI2EyNDYzY1wiLFxyXG4gICAgfSxcclxuICAgIGVycm9yOiB7XHJcbiAgICAgIG1haW46IHJlZC5BMjAwLFxyXG4gICAgfSxcclxuICAgIGJhY2tncm91bmQ6IHtcclxuICAgICAgLy8gZGVmYXVsdDogXCIjZTdlOGQxXCIsXHJcbiAgICAgIC8vIGRlZmF1bHQ6IFwiI2NiY2U5MWZmXCIsXHJcbiAgICAgIGRlZmF1bHQ6IFwiI2VkZTZiOVwiLFxyXG4gICAgfSxcclxuICB9LFxyXG5cclxuICB0eXBvZ3JhcGh5OiB7XHJcbiAgICBmb250RmFtaWx5OiBbXCJSb2JvdG9cIiwgXCJzYW5zLXNlcmlmXCJdLmpvaW4oXCIsXCIpLFxyXG4gICAgYm9keTI6IHtcclxuICAgICAgZm9udEZhbWlseTogXCJSb2JvdG9cIixcclxuICAgICAgZm9udFNpemU6IFwiMC44cmVtXCIsXHJcbiAgICB9LFxyXG4gICAgYm9keTE6IHtcclxuICAgICAgZm9udEZhbWlseTogXCJSb2JvdG9cIixcclxuICAgICAgZm9udFNpemU6IFwiMXJlbVwiLFxyXG4gICAgfSxcclxuICAgIHN1YlRpdGxlMToge1xyXG4gICAgICBmb250RmFtaWx5OiBcIlJvYm90b1wiLFxyXG4gICAgICBmb250U2l6ZTogXCIwLjdyZW1cIixcclxuICAgIH0sXHJcbiAgICBzdWJUaXRsZTI6IHtcclxuICAgICAgZm9udEZhbWlseTogXCJSb2JvdG9cIixcclxuICAgICAgZm9udFNpemU6IFwiMC41cmVtXCIsXHJcbiAgICB9LFxyXG4gICAgaDY6IHtcclxuICAgICAgZm9udEZhbWlseTogXCJSb2JvdG9cIixcclxuICAgICAgZm9udFNpemU6IFwiMC44cmVtXCIsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgc2hhcGU6IHtcclxuICAgIGJvcmRlclJhZGl1czogXCIwLjRyZW1cIixcclxuICB9LFxyXG4gIHNwYWNpbmc6IDIsXHJcblxyXG4gIG92ZXJyaWRlczoge1xyXG4gICAgTXVpVG9vbGJhcjoge1xyXG4gICAgICByZWd1bGFyOiB7XHJcbiAgICAgICAgbWluSGVpZ2h0OiBcIjEuNXJlbVwiLFxyXG4gICAgICAgIG1heEhlaWdodDogXCIxLjlyZW1cIixcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBNdWlTZWxlY3Q6IHtcclxuICAgICAgcm9vdDoge1xyXG4gICAgICAgIGZvbnRTaXplOiBcIjEuMXJlbVwiLFxyXG4gICAgICAgIHBhZGRpbmdCb3R0b206IFwiMC41cmVtXCIsXHJcbiAgICAgICAgaGVpZ2h0OiBcIjEuM3JlbVwiLFxyXG4gICAgICB9LFxyXG4gICAgICAvLyBuYXRpdmVJbnB1dDoge1xyXG4gICAgICAvLyAgIGZvbnRTaXplOiBcIjAuNXJlbVwiLFxyXG4gICAgICAvLyB9LFxyXG4gICAgfSxcclxuXHJcbiAgICBNdWlUeXBvZ3JhcGh5OiB7XHJcbiAgICAgIC8vIHJvb3Q6IHtcclxuICAgICAgLy8gICAvLyBtYXJnaW5Cb3R0b206IFwiMXJlbVwiLFxyXG4gICAgICAvLyB9LFxyXG4gICAgICAvLyBib2R5MToge1xyXG4gICAgICAvLyAgIGZvbnRTaXplOiBcIjAuOHJlbVwiLFxyXG4gICAgICAvLyB9LFxyXG4gICAgICAvLyBoNjoge1xyXG4gICAgICAvLyAgIGZvbnRGYW1pbHk6IFwiUm9ib3RvXCIsXHJcbiAgICAgIC8vICAgZm9udFNpemU6IFwiMS4ycmVtXCIsXHJcbiAgICAgIC8vIH0sXHJcbiAgICB9LFxyXG4gICAgTXVpT3V0bGluZWRJbnB1dDoge1xyXG4gICAgICBpbnB1dDoge1xyXG4gICAgICAgIGhlaWdodDogXCIxLjJyZW1cIixcclxuICAgICAgICBmb250U2l6ZTogXCIxcmVtXCIsXHJcbiAgICAgICAgcGFkZGluZ0JvdHRvbTogXCIwLjVyZW1cIixcclxuICAgICAgICAvLyBtYXJnaW5Cb3R0b206IFwiMC41cmVtXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIC8vIE11aUZvcm1JbnB1dExhYmVsOiB7XHJcbiAgICAgIC8vICAgZm9ybUNvbnRyb2w6IHtcclxuICAgICAgLy8gICAgIG1hcmdpbjogXCIwLjRyZW1cIixcclxuICAgICAgLy8gICB9LFxyXG4gICAgICAvLyAgIHJvb3Q6IHtcclxuICAgICAgLy8gICAgIGZvbnRTaXplOiBcIjAuNnJlbVwiLFxyXG4gICAgICAvLyAgIH0sXHJcbiAgICAgIC8vIH0sXHJcblxyXG4gICAgICAvLyBNdWlNZW51SXRlbToge1xyXG4gICAgICAvLyAgIHJvb3Q6IHtcclxuICAgICAgLy8gICAgIGZvbnRTaXplOiBcIjAuOHJlbVwiLFxyXG4gICAgICAvLyAgIH0sXHJcbiAgICAgIC8vIH0sXHJcbiAgICB9LFxyXG4gICAgTXVpQnV0dG9uOiB7XHJcbiAgICAgIHJvb3Q6IHtcclxuICAgICAgICB0ZXh0VHJhbnNmb3JtOiBcIm5vbmVcIixcclxuICAgICAgICBtYXJnaW5Ub3A6IFwiMC41cmVtXCIsXHJcbiAgICAgICAgbWFyZ2luQm90dG9tOiBcIjAuNXJlbVwiLFxyXG4gICAgICAgIGZvbnRTaXplOiBcIjEuMXJlbVwiLFxyXG4gICAgICAgIGZvbnRXZWlnaHQ6IFwiYm9sZFwiLFxyXG4gICAgICAgIHBhZGRpbmc6IFwiMC4xcmVtXCIsXHJcbiAgICAgICAgLy8gbWluV2lkdGg6IFwiNDAlXCIsXHJcbiAgICAgICAgbWFyZ2luOiBcIjFyZW1cIixcclxuICAgICAgICAvLyBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgyNTUsIDEyNSwgMCwgMC42NSlcIixcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBNdWlUYWJsZVJvdzoge1xyXG4gICAgICByb290OiB7XHJcbiAgICAgICAgLy8gYm9yZGVyQm90dG9tOiBcIjAuMTEzcmVtIHNvbGlkICNmZmZcIixcclxuICAgICAgICBcIiY6bnRoLWNoaWxkKDJuKVwiOiB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI2U2ZjRkZFwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy8gXCImOm50aC1jaGlsZCgybisxKVwiOiB7XHJcbiAgICAgICAgLy8gICBiYWNrZ3JvdW5kOiBcIiNlNGViZjhcIixcclxuICAgICAgICAvLyB9LFxyXG5cclxuICAgICAgICBcIiY6aG92ZXJcIjoge1xyXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiM4MjkwNzlcIixcclxuICAgICAgICAgIGNvbG9yOiBcIiNlZGU2YjlcIixcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIE11aVRhYmxlSGVhZDoge1xyXG4gICAgICByb290OiB7XHJcbiAgICAgICAgcG9zaXRpb246IFwic3RpY2t5XCIsXHJcbiAgICAgICAgdG9wOiAwLFxyXG4gICAgICAgIC8vIHpJbmRleDogMSxcclxuICAgICAgICAvLyBwYWRkaW5nVG9wOiBcIjFyZW1cIixcclxuICAgICAgICAvLyBwYWRkaW5nQm90dG9tOiBcIjFyZW1cIixcclxuICAgICAgICAvLyBmb250U2l6ZTogXCIxLjJyZW1cIixcclxuICAgICAgICAvLyBiYWNrZ3JvdW5kQ29sb3I6IFwiI2FiYlwiLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuXHJcbiAgICBNdWlGb3JtQ29udHJvbDoge1xyXG4gICAgICByb290OiB7XHJcbiAgICAgICAgY29sb3I6IFwiIzA0NDU2MlwiLFxyXG4gICAgICAgIGZvbnRTaXplOiBcIjEuMnJlbVwiLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIE11aUljb25CdXR0b246IHtcclxuICAgICAgcm9vdDoge1xyXG4gICAgICAgIHBhZGRpbmdUb3A6IFwiMC4ycmVtXCIsXHJcbiAgICAgICAgcGFkZGluZ0JvdHRvbTogXCIwLjJyZW1cIixcclxuICAgICAgICBmb250U2l6ZTogXCIwLjlyZW1cIixcclxuICAgICAgfSxcclxuICAgIH0sXHJcblxyXG4gICAgTXVpVGFibGVDZWxsOiB7XHJcbiAgICAgIHJvb3Q6IHtcclxuICAgICAgICBwYWRkaW5nVG9wOiBcIjAuMDFyZW1cIixcclxuICAgICAgICBwYWRkaW5nQm90dG9tOiBcIjAuMDFyZW1cIixcclxuICAgICAgICBmb250U2l6ZTogXCIwMXJlbVwiLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIE11aUZvcm1Db250cm9sOiB7XHJcbiAgICAgIHJvb3Q6IHtcclxuICAgICAgICB3aWR0aDogXCI5MCVcIixcclxuICAgICAgICBtYXJnaW46IFwiMC41cmVtXCIsXHJcbiAgICAgICAgZm9udFNpemU6IFwiMC44cmVtXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIG1hcmdpbk5vcm1hbDoge1xyXG4gICAgICAgIG1hcmdpbjogXCIwLjVyZW1cIixcclxuICAgICAgICBtYXJnaW5Ub3A6IDAsXHJcbiAgICAgICAgbWFyZ2luQm90dG9tOiBcIjAuM3JlbVwiLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuXHJcbiAgICBNdWlQaWNrZXJzVG9vbGJhcjoge1xyXG4gICAgICB0b29sYmFyOiB7XHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiM4MjkwNzlcIixcclxuICAgICAgICBjb2xvcjogXCIjZWRlNmI5XCIsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG5cclxuICAgIE11aVR5cG9ncmFwaHk6IHtcclxuICAgICAgYWxpZ25DZW50ZXI6IHtcclxuICAgICAgICBmb250U2l6ZTogXCIxLjFyZW1cIixcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBNdWlQaWNrZXJzQ2FsZW5kYXJIZWFkZXI6IHtcclxuICAgICAgdHJhbnNpdGlvbkNvbnRhaW5lcjoge1xyXG4gICAgICAgIGhlaWdodDogXCIyLjVyZW1cIixcclxuICAgICAgfSxcclxuICAgICAgaWNvbkJ1dHRvbjoge1xyXG4gICAgICAgIGhlaWdodDogXCIycmVtXCIsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgTXVpVG9vbGJhcjoge1xyXG4gICAgICByZWd1bGFyOiB7XHJcbiAgICAgICAgbWF4SGVpZ2h0OiBcIjNyZW1cIixcclxuICAgICAgICBtaW5IZWlnaHQ6IFwiM3JlbVwiLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIE11aVBpY2tlcnNUb29sYmFyVGV4dDoge1xyXG4gICAgICB0b29sYmFyVHh0OiB7XHJcbiAgICAgICAgZm9udFNpemU6IFwiMS4zcmVtXCIsXHJcbiAgICAgICAgcGFkZGluZzogXCIwLjVyZW1cIixcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBNdWlQaWNrZXJzRGF0ZVBpY2tlclJvb3Q6IHtcclxuICAgICAgdG9vbGJhcjoge1xyXG4gICAgICAgIGZsZXhEaXJlY3Rpb246IFwicm93XCIsXHJcbiAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBNdWlQaWNrZXJzQ2FsZW5kYXJIZWFkZXI6IHtcclxuICAgICAgZGF5c0hlYWRlcjoge1xyXG4gICAgICAgIGZvbnRTaXplOiBcIjEuM3JlbVwiLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIE11aUFwcEJhcjoge1xyXG4gICAgICBjb2xvclByaW1hcnk6IHtcclxuICAgICAgICBjb2xvcjogXCIjZmYwMjEyXCIsXHJcbiAgICAgICAgLy8gYmFja0dyb3VuZENvbG9yOiBcInByaW1hcnlcIixcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBNdWlQYXBlcjoge1xyXG4gICAgICByb290OiB7XHJcbiAgICAgICAgLy8gbWluSGVpZ2h0OiBcIjEwMHZoXCIsXHJcbiAgICAgICAgYm9yZGVyVG9wOiBcIjAuM3JlbSBzb2xpZCAjODI5MDc5XCIsXHJcbiAgICAgICAgYm9yZGVyQm90dG9tOiBcIjAuM3JlbSBzb2xpZCAjYjk5MjVlXCIsXHJcbiAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjAuNXJlbVwiLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIE11aUlucHV0QmFzZToge1xyXG4gICAgICByb290OiB7XHJcbiAgICAgICAgLy8gd2lkdGg6IFwiNTAlXCIsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgTXVpQnV0dG9uQmFzZToge1xyXG4gICAgICByb290OiB7XHJcbiAgICAgICAgLy8gd2lkdGg6IFwiNXJlbVwiLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIE11aVN2Z0ljb246IHtcclxuICAgICAgcm9vdDoge1xyXG4gICAgICAgIHdpZHRoOiBcIjJyZW1cIixcclxuICAgICAgICBmb250U2l6ZTogXCIxcmVtXCIsXHJcbiAgICAgICAgLy8gYmFja2dyb3VuZENvbG9yOlwiI2VkZTZiOVwiLFxyXG4gICAgICAgIC8vIGJvcmRlclJhZGl1czpcIjAuMnJlbVwiLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIE1UYWJsZVRvb2xiYXI6IHtcclxuICAgICAgYWN0aW9uczoge1xyXG4gICAgICAgIGNvbG9yOiBcIiMwMDBcIixcclxuICAgICAgICBmb250U2l6ZTogXCIycmVtXCIsXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNmZmZcIixcclxuICAgICAgICBib3JkZXJSYWRpdXM6IFwiMC4zcmVtXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHRpdGxlOiB7XHJcbiAgICAgICAgd2lkdGg6IFwiNDAlXCIsXHJcbiAgICAgICAgb3ZlcmZsb3c6IFwibm9uZVwiLFxyXG4gICAgICB9LFxyXG4gICAgICBzZWFyY2hGaWVsZDoge1xyXG4gICAgICAgIG1heFdpZHRoOiBcIjE1cmVtXCIsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG5cclxuICAgIE11aUZvcm1IZWxwZXJUZXh0OiB7XHJcbiAgICAgIHJvb3Q6IHtcclxuICAgICAgICBjb2xvcjogb3JhbmdlWzkwMF0sXHJcbiAgICAgICAgXCImJGVycm9yXCI6IHtcclxuICAgICAgICAgIFwiJi5NdWlGb3JtSGVscGVyVGV4dC1yb290Lk11aS1lcnJvclwiOiB7XHJcbiAgICAgICAgICAgIGNvbG9yOiBcIiNlNjUxMDBcIixcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSxcclxuICBwcm9wczoge1xyXG4gICAgTXVpQnV0dG9uOiB7XHJcbiAgICAgIHZhcmlhbnQ6IFwib3V0bGluZWRcIixcclxuICAgICAgY29sb3I6IFwicHJpbWFyeVwiLFxyXG4gICAgfSxcclxuICAgIE11aVRleHRGaWVsZDoge1xyXG4gICAgICB0eXBvZ3JhcGh5OiB7XHJcbiAgICAgICAgZm9udEZhbWlseToge1xyXG4gICAgICAgICAgZm9udEZhbWlseTogXCJDb21pYyBTYW5zIE1TXCIsXHJcbiAgICAgICAgICBmb250U2l6ZTogXCIwLjlyZW1cIixcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIE11aUlucHV0TGFiZWw6IHtcclxuICAgICAgdHlwb2dyYXBoeToge1xyXG4gICAgICAgIGZvbnRGYW1pbHk6IHtcclxuICAgICAgICAgIGZvbnRGYW1pbHk6IFwiQ29taWMgU2FucyBNU1wiLFxyXG4gICAgICAgICAgZm9udFNpemU6IFwiMC43cmVtXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBNdWlUYWJsZUhlYWQ6IHtcclxuICAgICAgcm9vdDoge1xyXG4gICAgICAgIHBvc2l0aW9uOiBcInN0aWNreVwiLFxyXG4gICAgICAgIHRvcDogMCxcclxuICAgICAgICAvLyB6SW5kZXg6IDEsXHJcbiAgICAgICAgcGFkZGluZ1RvcDogXCIxcmVtXCIsXHJcbiAgICAgICAgcGFkZGluZ0JvdHRvbTogXCIxcmVtXCIsXHJcbiAgICAgICAgZm9udFNpemU6IFwiMS4ycmVtXCIsXHJcbiAgICAgICAgLy8gYmFja2dyb3VuZENvbG9yOiBcIiNhYmIxXCIsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgTXVpVGFibGVUb29sYmFyOiB7XHJcbiAgICAgIHJvb3Q6IHtcclxuICAgICAgICAvLyBiYWNrZ3JvdW5kQ29sb3I6IFwiIzRhOGJhOFwiLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIC8vIE1UYWJsZVRvb2xiYXI6IHtcclxuICAgIC8vICAgYWN0aW9uczoge1xyXG4gICAgLy8gICAgIGNvbG9yOiBcIiMwMDBcIixcclxuICAgIC8vICAgICBmb250U2l6ZTogXCIycmVtXCIsXHJcbiAgICAvLyAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNmZmZcIixcclxuICAgIC8vICAgICBib3JkZXJSYWRpdXM6IFwiMC4zcmVtXCIsXHJcbiAgICAvLyAgIH0sXHJcbiAgICAvLyAgIHRpdGxlOiB7XHJcbiAgICAvLyAgICAgd2lkdGg6IFwiNDAlXCIsXHJcbiAgICAvLyAgICAgb3ZlcmZsb3c6IFwibm9uZVwiLFxyXG4gICAgLy8gICB9LFxyXG4gICAgLy8gICBzZWFyY2hGaWVsZDoge1xyXG4gICAgLy8gICAgIC8vIHdpZHRoOiBcIjUwJVwiLFxyXG4gICAgLy8gICAgIG1heFdpZHRoOiBcIjUwJVwiLFxyXG4gICAgLy8gICB9LFxyXG4gICAgLy8gfSxcclxuICAgIE11aUdyaWQ6IHtcclxuICAgICAgcm9vdDoge1xyXG4gICAgICAgIGRpc3BsYXk6IFwiZ3JpZFwiLFxyXG4gICAgICAgIHBsYWNlSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgZGlyZWN0aW9uOiBcImNvbHVtblwiLFxyXG4gICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICAgICAganVzdGlmeUl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9LFxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFN5Z2VmZXhUaGVtZTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFwb2xsby9yZWFjdC1ob29rc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9BcHBCYXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0NvbGxhcHNlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0Nzc0Jhc2VsaW5lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0RpdmlkZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvRHJhd2VyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0dyaWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvSGlkZGVuXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0ljb25CdXR0b25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlzdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9Ub29sYmFyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHlcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvY29sb3JzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvRGVza3RvcFdpbmRvd3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL0V4cGFuZExlc3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL0V4cGFuZE1vcmVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL0hvbWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL01lbnVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL05vdGlmaWNhdGlvbnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL1JlY2VpcHRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL1NldHRpbmdzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFwb2xsby1ib29zdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJncmFwaHFsLXRhZ1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LXdpdGgtYXBvbGxvXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWFwb2xsb1wiKTsiXSwic291cmNlUm9vdCI6IiJ9