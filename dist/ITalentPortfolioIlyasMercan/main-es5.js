function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"main-container\">\n  <nav class=\"navbar navbar-expand-sm w-100\">\n    <h3 class=\"navbar-brand pxl-font\">I-TALENT PORTFOLIO</h3>\n    <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\n      <ul class=\"navbar-nav\">\n        <li class=\"nav-item mx-5\">\n          <a class=\"nav-link pxl-font\" [routerLink]=\"['/home']\" routerLinkActive=\"router-link-active\">HOME</a>\n        </li>\n        <li class=\"nav-item mx-5\">\n          <a class=\"nav-link pxl-font\" [routerLink]=\"['/x-factor']\" routerLinkActive=\"router-link-active\">X-FACTOR</a>\n        </li>\n        <li class=\"nav-item mx-5\">\n          <a class=\"nav-link pxl-font\" [routerLink]=\"['/about']\" routerLinkActive=\"router-link-active\">ABOUT</a>\n        </li>\n      </ul>\n    </div>\n  </nav>\n\n  <router-outlet></router-outlet>\n\n  <footer class=\" py-4 text-white-50\">\n    <div class=\"container text-center\">\n      <small>I-talent portfolio van <a [routerLink]=\"['/redirectToLinkedIn']\">Ilyas Mercan</a></small>\n    </div>\n  </footer>\n</div>\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/about/about.component.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/about/about.component.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsAboutAboutComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"col-8 mx-auto mt-15p\">\r\n  Bij het afstuderen van de PXL moet de junior-collega kunnen verdedigen dat hij/zij over de X-factor beschikt.\r\n  De x-factor is een systeem van de Hogeschool PXL waarmee bewezen wordt dat het individu beschikt over empassie, een combinatie tussen empathie en passie, dat het individu ondernemend en innovatief is, dat het individu onderneemt in internationale samen(net)werkt, en dat het individu disciplinair en multidisciplinair is.\r\n  Op deze website toon ik, Ilyas Mercan, als laatstejaarsstudent van de Hogeschool PXL al de activiteiten die ik van 1 januari 2019 tot en met 1 maart 2020 heb verricht.\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/event-detail/event-detail.component.html":
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/event-detail/event-detail.component.html ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsEventDetailEventDetailComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\" *ngIf=\"event\">\r\n  <div class=\"row\">\r\n    <h1 class=\"pxl-font offset-1 col-10\">{{event.name}}</h1>\r\n\r\n    <div class=\"offset-1 col-10 mb-3\">\r\n      <h5 class=\"pxl-font\">Een initiatief van {{event.organizer}}</h5>\r\n      <span *ngFor=\"let date of event.dates; let i = index\">{{date.getDate() + '-' + date.getMonth() + '-' + date.getFullYear()}}<span *ngIf=\"i !== event.dates.length-1\">, </span></span>\r\n      <br>\r\n      <span>Effectieve uren: {{event.receivedHours}}</span>\r\n    </div>\r\n\r\n    <div class=\"offset-1 col-10\" [innerHTML]=\"event.report | newLine\"></div>\r\n\r\n    <div class=\"offset-1 col-10 mb-3\" *ngIf=\"event.picture\">\r\n      <img class=\"img-fluid offset-1 col-10\" src=\"{{event.picture.url}}\" alt=\"{{event.picture.url.toString()}}\"/>\r\n      <p class=\"offset-1 col-10\">Credit @ {{event.picture.credit}}</p>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n\r\n\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsHomeHomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container col-12 mt-5p\">\n  <app-timeline (onClickOnEvent)=\"displayEvent($event)\"></app-timeline>\n</div>\n<app-event-detail [event]=\"eventToDisplay\"></app-event-detail>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/interactive-x-factor/interactive-x-factor.component.html":
  /*!***************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/interactive-x-factor/interactive-x-factor.component.html ***!
    \***************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsInteractiveXFactorInteractiveXFactorComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div id=\"x-factor-container\"></div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/timeline/timeline.component.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/timeline/timeline.component.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsTimelineTimelineComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"col-12\" id=\"timeline-container\"></div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/x-factor/x-factor.component.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/x-factor/x-factor.component.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsXFactorXFactorComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container mt-5p\">\n  <app-interactive-x-factor (onClickOnXFactorEvent)=\"displayEvent($event)\"></app-interactive-x-factor>\n</div>\n<app-event-detail [event]=\"eventToDisplay\"></app-event-detail>\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/home/home.component */
    "./src/app/components/home/home.component.ts");
    /* harmony import */


    var _components_x_factor_x_factor_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/x-factor/x-factor.component */
    "./src/app/components/x-factor/x-factor.component.ts");
    /* harmony import */


    var _components_about_about_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/about/about.component */
    "./src/app/components/about/about.component.ts");

    var routes = [{
      path: '',
      redirectTo: 'home',
      pathMatch: 'full'
    }, {
      path: 'home',
      component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    }, {
      path: 'x-factor',
      component: _components_x_factor_x_factor_component__WEBPACK_IMPORTED_MODULE_4__["XFactorComponent"]
    }, {
      path: 'about',
      component: _components_about_about_component__WEBPACK_IMPORTED_MODULE_5__["AboutComponent"]
    }, {
      path: 'redirectToLinkedIn',
      component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
      resolve: {
        url: 'externalUrlRedirectResolver'
      },
      data: {
        externalUrl: 'http://www.linkedin.com/in/ilyas-mercan'
      }
    }, {
      path: '**',
      component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
      providers: [{
        provide: 'externalUrlRedirectResolver',
        useValue: function useValue(route) {
          window.location.href = route.data.externalUrl;
        }
      }]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".pxl-font {\r\n  font-family: \"83 heavy extended\";\r\n}\r\n\r\na {\r\n  color: white !important;\r\n}\r\n\r\na:hover {\r\n  color: #58a618 !important;\r\n}\r\n\r\nnav {\r\n  background: black;\r\n}\r\n\r\nfooter {\r\n  background: black;\r\n}\r\n\r\n.navbar-brand {\r\n  margin-top: 7px;\r\n  color: white;\r\n  background-color: black;\r\n}\r\n\r\n#navbarNav {\r\n  background: black;\r\n}\r\n\r\nhtml,\r\nbody {\r\n  height: 100%;\r\n  position: relative;\r\n}\r\n\r\n.main-container {\r\n  min-height: 100vh;\r\n  overflow: hidden;\r\n  display: block;\r\n  position: relative;\r\n  padding-bottom: 100px;\r\n}\r\n\r\nfooter {\r\n  position: absolute;\r\n  bottom: 0;\r\n  width: 100%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsWUFBWTtFQUNaLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTs7RUFFRSxZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsV0FBVztBQUNiIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHhsLWZvbnQge1xyXG4gIGZvbnQtZmFtaWx5OiBcIjgzIGhlYXZ5IGV4dGVuZGVkXCI7XHJcbn1cclxuXHJcbmEge1xyXG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5hOmhvdmVyIHtcclxuICBjb2xvcjogIzU4YTYxOCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5uYXYge1xyXG4gIGJhY2tncm91bmQ6IGJsYWNrO1xyXG59XHJcblxyXG5mb290ZXIge1xyXG4gIGJhY2tncm91bmQ6IGJsYWNrO1xyXG59XHJcblxyXG4ubmF2YmFyLWJyYW5kIHtcclxuICBtYXJnaW4tdG9wOiA3cHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4jbmF2YmFyTmF2IHtcclxuICBiYWNrZ3JvdW5kOiBibGFjaztcclxufVxyXG5cclxuaHRtbCxcclxuYm9keSB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLm1haW4tY29udGFpbmVyIHtcclxuICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBwYWRkaW5nLWJvdHRvbTogMTAwcHg7XHJcbn1cclxuXHJcbmZvb3RlciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogMDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'ITalentPortfolioIlyasMercan';
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/home/home.component */
    "./src/app/components/home/home.component.ts");
    /* harmony import */


    var _components_timeline_timeline_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/timeline/timeline.component */
    "./src/app/components/timeline/timeline.component.ts");
    /* harmony import */


    var _services_event_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./services/event.service */
    "./src/app/services/event.service.ts");
    /* harmony import */


    var _components_x_factor_x_factor_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/x-factor/x-factor.component */
    "./src/app/components/x-factor/x-factor.component.ts");
    /* harmony import */


    var _components_about_about_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/about/about.component */
    "./src/app/components/about/about.component.ts");
    /* harmony import */


    var _components_event_detail_event_detail_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/event-detail/event-detail.component */
    "./src/app/components/event-detail/event-detail.component.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _pipes_new_line_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./pipes/new-line.pipe */
    "./src/app/pipes/new-line.pipe.ts");
    /* harmony import */


    var _components_interactive_x_factor_interactive_x_factor_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./components/interactive-x-factor/interactive-x-factor.component */
    "./src/app/components/interactive-x-factor/interactive-x-factor.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"], _components_timeline_timeline_component__WEBPACK_IMPORTED_MODULE_6__["TimelineComponent"], _components_x_factor_x_factor_component__WEBPACK_IMPORTED_MODULE_8__["XFactorComponent"], _components_about_about_component__WEBPACK_IMPORTED_MODULE_9__["AboutComponent"], _components_event_detail_event_detail_component__WEBPACK_IMPORTED_MODULE_10__["EventDetailComponent"], _pipes_new_line_pipe__WEBPACK_IMPORTED_MODULE_12__["NewLinePipe"], _components_interactive_x_factor_interactive_x_factor_component__WEBPACK_IMPORTED_MODULE_13__["InteractiveXFactorComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"]],
      providers: [_services_event_service__WEBPACK_IMPORTED_MODULE_7__["EventService"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/components/about/about.component.css":
  /*!******************************************************!*\
    !*** ./src/app/components/about/about.component.css ***!
    \******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsAboutAboutComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".mt-15p {\r\n  margin-top: 15%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hYm91dC9hYm91dC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tdC0xNXAge1xyXG4gIG1hcmdpbi10b3A6IDE1JTtcclxufVxyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/about/about.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/components/about/about.component.ts ***!
    \*****************************************************/

  /*! exports provided: AboutComponent */

  /***/
  function srcAppComponentsAboutAboutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutComponent", function () {
      return AboutComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AboutComponent =
    /*#__PURE__*/
    function () {
      function AboutComponent() {
        _classCallCheck(this, AboutComponent);
      }

      _createClass(AboutComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AboutComponent;
    }();

    AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-about',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./about.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/about/about.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./about.component.css */
      "./src/app/components/about/about.component.css")).default]
    })], AboutComponent);
    /***/
  },

  /***/
  "./src/app/components/event-detail/event-detail.component.css":
  /*!********************************************************************!*\
    !*** ./src/app/components/event-detail/event-detail.component.css ***!
    \********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsEventDetailEventDetailComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".pxl-font {\r\n  font-family: \"83 heavy extended\";\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ldmVudC1kZXRhaWwvZXZlbnQtZGV0YWlsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQ0FBZ0M7QUFDbEMiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2V2ZW50LWRldGFpbC9ldmVudC1kZXRhaWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5weGwtZm9udCB7XHJcbiAgZm9udC1mYW1pbHk6IFwiODMgaGVhdnkgZXh0ZW5kZWRcIjtcclxufVxyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/event-detail/event-detail.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/components/event-detail/event-detail.component.ts ***!
    \*******************************************************************/

  /*! exports provided: EventDetailComponent */

  /***/
  function srcAppComponentsEventDetailEventDetailComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EventDetailComponent", function () {
      return EventDetailComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var EventDetailComponent =
    /*#__PURE__*/
    function () {
      function EventDetailComponent() {
        _classCallCheck(this, EventDetailComponent);
      }

      _createClass(EventDetailComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return EventDetailComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], EventDetailComponent.prototype, "event", void 0);
    EventDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-event-detail',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./event-detail.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/event-detail/event-detail.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./event-detail.component.css */
      "./src/app/components/event-detail/event-detail.component.css")).default]
    })], EventDetailComponent);
    /***/
  },

  /***/
  "./src/app/components/home/home.component.css":
  /*!****************************************************!*\
    !*** ./src/app/components/home/home.component.css ***!
    \****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsHomeHomeComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".mt-5p {\r\n  margin-top: 5%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm10LTVwIHtcclxuICBtYXJnaW4tdG9wOiA1JTtcclxufVxyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/home/home.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/components/home/home.component.ts ***!
    \***************************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppComponentsHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var HomeComponent =
    /*#__PURE__*/
    function () {
      function HomeComponent() {
        _classCallCheck(this, HomeComponent);
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "displayEvent",
        value: function displayEvent(event) {
          this.eventToDisplay = event;
        }
      }]);

      return HomeComponent;
    }();

    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home.component.css */
      "./src/app/components/home/home.component.css")).default]
    })], HomeComponent);
    /***/
  },

  /***/
  "./src/app/components/interactive-x-factor/interactive-x-factor.component.css":
  /*!************************************************************************************!*\
    !*** ./src/app/components/interactive-x-factor/interactive-x-factor.component.css ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsInteractiveXFactorInteractiveXFactorComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaW50ZXJhY3RpdmUteC1mYWN0b3IvaW50ZXJhY3RpdmUteC1mYWN0b3IuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/components/interactive-x-factor/interactive-x-factor.component.ts":
  /*!***********************************************************************************!*\
    !*** ./src/app/components/interactive-x-factor/interactive-x-factor.component.ts ***!
    \***********************************************************************************/

  /*! exports provided: InteractiveXFactorComponent */

  /***/
  function srcAppComponentsInteractiveXFactorInteractiveXFactorComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InteractiveXFactorComponent", function () {
      return InteractiveXFactorComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_event_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/event.service */
    "./src/app/services/event.service.ts");
    /* harmony import */


    var d3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! d3 */
    "./node_modules/d3/index.js");

    var InteractiveXFactorComponent =
    /*#__PURE__*/
    function () {
      function InteractiveXFactorComponent(service) {
        _classCallCheck(this, InteractiveXFactorComponent);

        this.service = service;
        this.onClickOnXFactorEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(InteractiveXFactorComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.createInteractiveXFactor();
        }
      }, {
        key: "createInteractiveXFactor",
        value: function createInteractiveXFactor() {
          var _this = this;

          var width = 821;
          var height = 615;
          var xFactor = d3__WEBPACK_IMPORTED_MODULE_3__["select"]('#x-factor-container').append('svg').attr('width', width).attr('height', height).attr('id', 'x-factor-svg').attr('display', 'block').attr('class', 'mx-auto'); // add x-factor to canvas

          xFactor.append('svg:image').attr('xlink:href', 'assets/x-factor.jpg'); // (em)passie

          this.createRectangle(xFactor, '#58a618', 0.25, 252, 66, 15, 136, 15, 15, 'em-passie', 'em-passie').on('click', function () {
            _this.clickOnXFactorEvent(_this.service.getEmpassie());
          }).on('mouseover', function () {
            document.getElementById('em-passie').setAttribute('fill-opacity', '0.5');
          }).on('mouseout', function () {
            document.getElementById('em-passie').setAttribute('fill-opacity', '0.25');
          }); // ondernemend en innovatief

          this.createRectangle(xFactor, '#58a618', 0.25, 252, 66, 555, 136, 15, 15, 'ondernemend-en-innovatief', 'ondernemend-en-innovatief').on('click', function () {
            _this.clickOnXFactorEvent(_this.service.getOndernemendEnInnovatief());
          }).on('mouseover', function () {
            document.getElementById('ondernemend-en-innovatief').setAttribute('fill-opacity', '0.5');
          }).on('mouseout', function () {
            document.getElementById('ondernemend-en-innovatief').setAttribute('fill-opacity', '0.25');
          });
          ; // (internationaal) samen(net)werking

          this.createRectangle(xFactor, '#58a618', 0.25, 252, 66, 15, 416, 15, 15, 'internationaal-samen-net-werking', 'internationaal-samen-net-werking').on('click', function () {
            _this.clickOnXFactorEvent(_this.service.getInternationaalSamenNetWerking());
          }).on('mouseover', function () {
            document.getElementById('internationaal-samen-net-werking').setAttribute('fill-opacity', '0.5');
          }).on('mouseout', function () {
            document.getElementById('internationaal-samen-net-werking').setAttribute('fill-opacity', '0.25');
          });
          ; // multi- & disciplinariteit

          this.createRectangle(xFactor, '#58a618', 0.25, 252, 66, 555, 416, 15, 15, 'multi-en-disciplinariteit', 'multi-en-disciplinariteit').on('click', function () {
            _this.clickOnXFactorEvent(_this.service.getMultiEnDisciplinariteit());
          }).on('mouseover', function () {
            document.getElementById('multi-en-disciplinariteit').setAttribute('fill-opacity', '0.5');
          }).on('mouseout', function () {
            document.getElementById('multi-en-disciplinariteit').setAttribute('fill-opacity', '0.25');
          });
          ;
        }
      }, {
        key: "createRectangle",
        value: function createRectangle(svg, fill, fillOpacity, width, height, x, y, rx, ry, htmlClass, id) {
          return svg.append('rect').attr('fill', fill).attr('fill-opacity', fillOpacity).attr('height', height).attr('width', width).attr('x', x).attr('y', y).attr('rx', rx).attr('ry', ry).attr('class', htmlClass).attr('id', id);
        }
      }, {
        key: "openDialogBox",
        value: function openDialogBox(x) {
          console.log('still under construction from ' + x);
        }
      }, {
        key: "clickOnXFactorEvent",
        value: function clickOnXFactorEvent(event) {
          this.onClickOnXFactorEvent.emit(event);
        }
      }]);

      return InteractiveXFactorComponent;
    }();

    InteractiveXFactorComponent.ctorParameters = function () {
      return [{
        type: _services_event_service__WEBPACK_IMPORTED_MODULE_2__["EventService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], InteractiveXFactorComponent.prototype, "onClickOnXFactorEvent", void 0);
    InteractiveXFactorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-interactive-x-factor',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./interactive-x-factor.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/interactive-x-factor/interactive-x-factor.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./interactive-x-factor.component.css */
      "./src/app/components/interactive-x-factor/interactive-x-factor.component.css")).default]
    })], InteractiveXFactorComponent);
    /***/
  },

  /***/
  "./src/app/components/timeline/timeline.component.css":
  /*!************************************************************!*\
    !*** ./src/app/components/timeline/timeline.component.css ***!
    \************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsTimelineTimelineComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdGltZWxpbmUvdGltZWxpbmUuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/components/timeline/timeline.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/components/timeline/timeline.component.ts ***!
    \***********************************************************/

  /*! exports provided: TimelineComponent */

  /***/
  function srcAppComponentsTimelineTimelineComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TimelineComponent", function () {
      return TimelineComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var d3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! d3 */
    "./node_modules/d3/index.js");
    /* harmony import */


    var _services_event_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/event.service */
    "./src/app/services/event.service.ts");

    var MILISECONDS_IN_DAY = 1000 * 60 * 60 * 24;
    var START_TIMELINE = new Date('2019-01-01');
    var END_TIMELINE = new Date('2020-03-01');

    var TimelineComponent =
    /*#__PURE__*/
    function () {
      function TimelineComponent(service) {
        _classCallCheck(this, TimelineComponent);

        this.service = service;
        this.onClickOnEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(TimelineComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.createTimeline();
        }
      }, {
        key: "createTimeline",
        value: function createTimeline() {
          var events = this.service.events;
          var width = 1300;
          var height = 60;
          var timeline = d3__WEBPACK_IMPORTED_MODULE_2__["select"]('#timeline-container').append('svg').attr('width', width).attr('height', height).attr('display', 'block').attr('class', 'mx-auto'); // create a timeline with start date 01/01/2019 and end date 01/03/2019

          this.createRectangle(timeline, 'black', (END_TIMELINE.getTime() / MILISECONDS_IN_DAY - START_TIMELINE.getTime() / MILISECONDS_IN_DAY) * 3, 2, 0, 30, 'timeline'); // create a lower and an upper border for the timeline

          this.createRectangle(timeline, 'black', 3, 30, 0, 16, 'lower-border');
          this.createRectangle(timeline, 'black', 3, 30, (END_TIMELINE.getTime() / MILISECONDS_IN_DAY - START_TIMELINE.getTime() / MILISECONDS_IN_DAY) * 3, 16, 'upper-border'); // put all events on timeline

          for (var i = 0; i < events.length; i++) {
            this.createEventOnTimeline(timeline, events[i]);
          } // make sure every element of specific class lights up when hovered


          var _loop = function _loop(_i) {
            var eventClassName = events[_i].name.replace(/ /g, '-').replace(/:/g, '').replace(/'/g, '').toLowerCase();

            d3__WEBPACK_IMPORTED_MODULE_2__["selectAll"]('.' + eventClassName).on('mouseover', function () {
              for (var j = 0; j < document.getElementsByClassName(eventClassName).length; j++) {
                document.getElementsByClassName(eventClassName)[j].setAttribute('fill', '#58a618');
              }
            }).on('mouseout', function () {
              for (var j = 0; j < document.getElementsByClassName(eventClassName).length; j++) {
                document.getElementsByClassName(eventClassName)[j].setAttribute('fill', 'black');
              }
            });
            timeline.append('style').text('.' + eventClassName + ' {\n' + '  transition: 0.5s;\n' + '}\n');
            timeline.append('style').text('.' + eventClassName + ':hover {\n' + '  transition: 0.5s;\n' + '}\n');
          };

          for (var _i = 0; _i < events.length; _i++) {
            _loop(_i);
          }
        }
      }, {
        key: "createEventOnTimeline",
        value: function createEventOnTimeline(svg, event) {
          var _this2 = this;

          // for every date, create a square on the timeline
          for (var i = 0; i < event.dates.length; i++) {
            var dayFromStartOfTimeline = event.dates[i].getTime() / MILISECONDS_IN_DAY - START_TIMELINE.getTime() / MILISECONDS_IN_DAY;
            this.createRectangle(svg, 'black', 3, 16, dayFromStartOfTimeline * 3, 23, event.name.replace(/ /g, '-').replace(/:/g, '').replace(/'/g, '').toLowerCase()).on('click', function () {
              _this2.clickOnEvent(event);
            });
          }
        }
      }, {
        key: "createRectangle",
        value: function createRectangle(svg, fill, width, height, x, y, htmlClass) {
          return svg.append('rect').attr('fill', fill).attr('height', height).attr('width', width).attr('x', x).attr('y', y).attr('class', htmlClass);
        }
      }, {
        key: "clickOnEvent",
        value: function clickOnEvent(event) {
          this.onClickOnEvent.emit(event);
        }
      }]);

      return TimelineComponent;
    }();

    TimelineComponent.ctorParameters = function () {
      return [{
        type: _services_event_service__WEBPACK_IMPORTED_MODULE_3__["EventService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], TimelineComponent.prototype, "onClickOnEvent", void 0);
    TimelineComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-timeline',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./timeline.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/timeline/timeline.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./timeline.component.css */
      "./src/app/components/timeline/timeline.component.css")).default]
    })], TimelineComponent);
    /***/
  },

  /***/
  "./src/app/components/x-factor/x-factor.component.css":
  /*!************************************************************!*\
    !*** ./src/app/components/x-factor/x-factor.component.css ***!
    \************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsXFactorXFactorComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".mt-5p {\r\n  margin-top: 5%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy94LWZhY3Rvci94LWZhY3Rvci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMveC1mYWN0b3IveC1mYWN0b3IuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tdC01cCB7XHJcbiAgbWFyZ2luLXRvcDogNSU7XHJcbn1cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/components/x-factor/x-factor.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/components/x-factor/x-factor.component.ts ***!
    \***********************************************************/

  /*! exports provided: XFactorComponent */

  /***/
  function srcAppComponentsXFactorXFactorComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "XFactorComponent", function () {
      return XFactorComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var XFactorComponent =
    /*#__PURE__*/
    function () {
      function XFactorComponent() {
        _classCallCheck(this, XFactorComponent);
      }

      _createClass(XFactorComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "displayEvent",
        value: function displayEvent(event) {
          this.eventToDisplay = event;
        }
      }]);

      return XFactorComponent;
    }();

    XFactorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-x-factor',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./x-factor.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/x-factor/x-factor.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./x-factor.component.css */
      "./src/app/components/x-factor/x-factor.component.css")).default]
    })], XFactorComponent);
    /***/
  },

  /***/
  "./src/app/models/event.model.ts":
  /*!***************************************!*\
    !*** ./src/app/models/event.model.ts ***!
    \***************************************/

  /*! exports provided: Event */

  /***/
  function srcAppModelsEventModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Event", function () {
      return Event;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Event = function Event(name, organizer, dates, picture, receivedHours, report) {
      _classCallCheck(this, Event);

      this.name = name;
      this.organizer = organizer;
      this.dates = dates;
      this.picture = picture;
      this.receivedHours = receivedHours;
      this.report = report;
    };
    /***/

  },

  /***/
  "./src/app/models/picture.model.ts":
  /*!*****************************************!*\
    !*** ./src/app/models/picture.model.ts ***!
    \*****************************************/

  /*! exports provided: Picture */

  /***/
  function srcAppModelsPictureModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Picture", function () {
      return Picture;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Picture = function Picture(url, credit) {
      _classCallCheck(this, Picture);

      this.url = url;
      this.credit = credit;
    };
    /***/

  },

  /***/
  "./src/app/pipes/new-line.pipe.ts":
  /*!****************************************!*\
    !*** ./src/app/pipes/new-line.pipe.ts ***!
    \****************************************/

  /*! exports provided: NewLinePipe */

  /***/
  function srcAppPipesNewLinePipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NewLinePipe", function () {
      return NewLinePipe;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var NewLinePipe =
    /*#__PURE__*/
    function () {
      function NewLinePipe() {
        _classCallCheck(this, NewLinePipe);
      }

      _createClass(NewLinePipe, [{
        key: "transform",
        value: function transform(value) {
          return value.replace(/\n/g, '<br/><br/>');
        }
      }]);

      return NewLinePipe;
    }();

    NewLinePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'newLine'
    })], NewLinePipe);
    /***/
  },

  /***/
  "./src/app/services/event.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/services/event.service.ts ***!
    \*******************************************/

  /*! exports provided: EventService */

  /***/
  function srcAppServicesEventServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EventService", function () {
      return EventService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _models_event_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../models/event.model */
    "./src/app/models/event.model.ts");
    /* harmony import */


    var _models_picture_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../models/picture.model */
    "./src/app/models/picture.model.ts"); // const FIRST_EVENT_DATE = new Date('2019-02-20');


    var EventService =
    /*#__PURE__*/
    function () {
      function EventService() {
        _classCallCheck(this, EventService);

        // TODO: zijn dit ze allemaal?
        this.events = [new _models_event_model__WEBPACK_IMPORTED_MODULE_2__["Event"]('Ontbijtseminarie: Droneport', 'Droneport', [new Date('2019-02-20')], new _models_picture_model__WEBPACK_IMPORTED_MODULE_3__["Picture"]('../../assets/fotos/droneport_ontbijt_seminarie.jpg', 'Francis Vos'), 2, 'Reeds vroeg in februari werd ons bekend gemaakt dat er een verplicht seminarie was op woensdag 20 februari. Dit “ontbijtseminarie” zou doorgaan in de refter van de D blok en al om kwart voor 8 beginnen. Gelukkig werd de pijn van het vroeg opstaan verlicht door het nuttigen van een uitgebreid ontbijt van koffiekoeken en eieren. \n' + 'Het seminarie startte met een korte introductie van het departementshoofd, Francis Vos. Hij stelde ons de lezer voor, de CEO van Droneport, Mark Vanlook. Al snel werd de microfoon aan hem doorgegeven en kon de lezing beginnen. Meneer Vanlook begon met een beknopt introductiefilmpje, waar hij ondertussen kort uitleg over gaf. Hij sprak in deze inleiding over de vele gebruiksmogelijkheden van drones, zoals  bijvoorbeeld in de commerciële  sector. Denk aan UPS en Amazon, die zo hun pakketten zouden kunnen afleveren aan hun klanten. Waar anders een bestelwagen zich door verschillende str\taten moet begeven, kan een drone in vogelvlucht veel sneller zijn locatie bereiken. Er zijn echter nog vele andere sectoren waar dit van toepassing is, zoals de militaire sector, de agricultuur enz.\n' + 'Het tweede deel van het seminarie ging vooral over Droneport zelf, en in meerdere mate over hun gebouw. Dit bestaat uit verschillende opmerkelijke delen. Denk aan “The Cage”, een constructie van palen die op een schaal van 1 op 1000 een real life scenario nabootst. De palen zijn namelijk ieder 10 meter hoog. Vermenigvuldigd met 1000 geeft dit een hoogte van 10 kilometer, de hoogte van een gemiddeld reisvliegtuig. De palen staan ook elk 3 meter van elkaar. 3 kilometer is dan ook de afstand van een landingsbaan.\n' + 'Dit alles werd afgesloten met een korte vragensessie. Veel vragen werden er echter niet gesteld, aangezien het seminarie zelf zeer duidelijk was.\n' + 'Dit seminarie sprak mij persoonlijk wel aan, aangezien het bedrijf zich niet ver van bij mij thuis bevindt. Het feit dat het gebouw zelf pas sinds 21 december 2018 geopend is, en nu al een  economische trekpleister is voor Limburg, springt natuurlijk ook in het oog. Het is volgens mij dan ook logisch dat meneer Vanlook zulke seminaries organiseert. Zo kan hij zoveel mogelijk jonge IT’ers prikkelen om een job bij Droneport te overwegen. De hele drone business zelf is een groeiende branche die volgens mij niet meer tegen te houden is. De vele gebruiksmogelijkheden van drones zien er dan ook veelbelovend uit, maar net zoals het publiek stel ik de veiligheid hiervan in vraag. Met de technologieën die de politie nu bezit kunnen al deze drones in vlucht niet gecontroleerd worden. Volgens mij is een onbekende drone die eventueel een camera draagt niet bepaald een pluspunt voor hetgeen ons in de toekomst nog allemaal te wachten staat. \n' + 'Voor de rest vond ik dat het tweede deel van het seminarie grotendeels op “reclame” voor Droneport leek. De nadruk werd vooral gelegd op de hangars en het gebouw van Droneport. Als het seminarie dieper was ingegaan op de specifieke kenmerken van drones (zoals de programmeertalen waarin ze geschreven worden) zou het volgens mij interessanter geweest zijn. Dit neemt niet weg dat het een leerrijk seminarie was. De vele gebruiksmogelijkheden van drones zullen mij sowieso nog van pas komen. Tevens is het sterk groeiend bedrijf Droneport in Brustem een onderneming die toekomstgericht voor een IT’er in spe bijzonder interessant kan zijn.\n'), new _models_event_model__WEBPACK_IMPORTED_MODULE_2__["Event"]('Seminarie: Test-driven development', 'ACA IT-solutions', [new Date('2019-03-27')], new _models_picture_model__WEBPACK_IMPORTED_MODULE_3__["Picture"]('../../assets/fotos/aca_it_tdd.jpg', 'PXL-Digital'), 3, 'Woensdag 27 Maart werden we met 14 PXL’ers verwacht in ACA IT-Solutions te Hasselt voor een seminarie/workshop rond test driven development.\n' + 'Na een korte check of iedereen aanwezig was, werden we om 9 uur, zoals reeds op voorhand was afgesproken, het gebouw in begeleid. Hier werden we ontvangen door 3 medewerkers van ACA-IT. We mochten plaatsnemen in een afzonderlijk lokaal waar we allemaal een notitieboek, een pen en een douche speaker als verwelkomingsgeschenk ontvingen. \n' + 'Daarna kregen we een korte voorstelling en inleiding, waar de opgave van die dag op een originele manier uitgelegd werd. We moesten ons namelijk rond een kanban bord verzamelen waar we verdere uitleg over de opdracht van onze workshop vernamen. \n' + 'In een fictief scenario van een pizzawebsite, zaten enkele bugs verstopt die we er uit moesten halen. Er waren eveneens enkele stories die gedaan moesten worden. \n' + 'Vervolgens mochten we aan de opdracht beginnen. \n' + 'In groepjes van 2 kregen we tot ongeveer 12 uur ’s middags de tijd om te werken aan de bugs en userstories. Yusuf en ik hebben 2 bugs en een user story af kunnen maken. \n' + 'Hierna werd er een “bad mad sad” sessie gegeven, waarmee we via post-its onze mening konden geven over de workshop. \n' + 'Uiteindelijk werden we nog uitgenodigd voor een kleine drink in de bedrijfskantine, waar er nog wat nagepraat werd over het bedrijf en het personeel.\n' + 'Dit was een van de betere seminaries die ik in mijn PXL carrière tot nog toe meegemaakt heb. Voor een keer was het namelijk geen directe bedrijfsreclame, gevolgd door 3 uur aan abstracte concepten waar wij nog niet mee in aanraking gekomen zijn.  De opstelling van de workshop was eveneens een van de grote pluspunten. Die was namelijk op dezelfde manier uitgevoerd zoals het er in een echt project aan toe gaat, maar dan begrijpelijkerwijze wel enorm verkleind natuurlijk. De medewerkers van ACA-IT hebben er zo goed mogelijk voor gezorgd om zulk een situatie na te bootsen, door de sprint planning, kanban bord, functionaliteitstesten enz. \n' + 'Persoonlijk kan ik enkel zeggen dat dit een zeer educatieve ervaring was. En de stageplaatsen die ACA-IT aanbood zal ik eveneens in gedachten houden.\n'), new _models_event_model__WEBPACK_IMPORTED_MODULE_2__["Event"]('De Warmste Hackathon', 'Realdolmen', [new Date('2019-10-11'), new Date('2019-10-12')], new _models_picture_model__WEBPACK_IMPORTED_MODULE_3__["Picture"]('../../assets/fotos/realdolmen_warmste_hackathon_2.jpg', 'Lars Leppens'), 16, 'Ergens midden november kwam Mirco Gijsens, een klasgenoot, met het voorstel om deel te nemen aan de Warmste Hackathon, een initiatief door Realdolmen, een IT bedrijf uit Huizingen. Samen met hem, Lars Leppens en mijn broer Mikail Mercan, besloten we om mee te doen aan dit evenement, onder de groepsnaam “Dev-oeps”. \n' + 'Op vrijdag 11 oktober, na een dag groepswerk voor ons IT-project, vertrokken Lars, Mirco en ik rond half 4 met de trein in Kiewit, waarna we in Hasselt samen met Mikail overstapten op de eerstvolgende trein naar Brussel-Centraal om daar vervolgens deel te nemen aan het voornoemde evenement. \n' + 'Bij aankomst in zaal Odisee rond half 6, kregen we alle 4 een goodiebag en een badge met onze naam op. Aansluitend werden we doorverwezen naar onze eigen tafel, waarop een papier lag met de naam van onze  groep. Hier konden we wachten tot alle deelnemers waren ingecheckt. Op tafel lag eveneens een bruine enveloppe die pas om 6 uur, na de speech van de organisatoren, opengemaakt mocht worden.\n' + 'Vervolgens werd er een video afgespeeld op de projectiemuur. De inhoud was een korte sketch van een van de organisatoren, waar hij op een ludieke manier het doel van de hackathon uitlegde, namelijk: “Maak van onze maatschappij een betere plek”. Eveneens werd er ons verteld hoe we konden inloggen op de website van de warmste hackathon. Hierop bevonden zich verschillende features zoals een privéchat, een groepchat met alle deelnemers, en de mogelijkheid tot het verkrijgen van resources. Deze resources werden heel ruim genomen, het kon gaan over het vragen naar een butler, het bestellen van een pintje, tot het lenen van een VR bril. Deze resources konden gekocht worden met punten, en ieder team had standaard de beschikking over 900 punten. \n' + 'Punten konden verdiend worden door het oplossen van een raadsel, dat elk uur door de administrator in de publieke groepchat werd gegooid, het verslaan van een ander teamlid in een VR battle, en het spelen van blackjack aan de blackjack tafel. Eveneens waren er 2 check ups door de organisatoren, waarmee ook een behoorlijk aantal punten gewonnen konden worden. Aansluitend, na de video, werden in het kort de coaches voorgesteld. Bij deze 4 personen konden we al onze vragen kwijt. Uiteindelijk mochten we de bruine enveloppe openmaken, waarin relevante informatie zat over het evenement, zoals de wifi-code, de opdracht, en de prijzen.\n' + 'Nu was het aan ons. We kregen tot de volgende dag 16:00u de tijd om van de maatschappij een betere plek te maken. We begonnen te brainstormen, wat voor ons allen zeer moeizaam verliep. Daarom woonden we een brainstorm-cursus van 1 uur bij, en bleven vervolgens naar ideeën zoeken tijdens het avondeten (wat gratis aangeboden werd). Dit bracht ons wel op enkele ingevingen, maar na het toetsen bij de lectoren van de brainstorm-cursus, bleken deze toch niet ideaal te zijn. In totaal hebben we 6 uur gebrainstormd voor we tot een consensus kwamen. Het idee was een applicatie die het toelaat dat mensen  kunnen afspreken om samen te komen voor spelavonden, zoals kaartspellen of bordspellen. Dit leek ons een goed idee aangezien er volgens ons een groot doelpubliek is van mensen die vermaak zoeken, omdat er bij hen thuis dikwijls niemand aanwezig is om gezamenlijk iets te ondernemen. We begonnen meteen met het maken van wireframes. Ondertussen hielden we ook een oog op de chat, en hadden we enkele quizvragen correct kunnen beantwoorden. We hadden eveneens onze profielfoto ingesteld, wat nog eens 100 punten extra opleverde. Hierdoor stonden we zelfs een hele tijd op de eerste plaats. Na enkele uren waren de wireframes klaar, en konden we rond 3 uur ‘s nachts beginnen met coderen. We kozen voor een Angular applicatie, met hard gecodeerde data. De nacht zelf hebben we, zo snel als we konden, zoveel mogelijk quizvragen proberen correct op te lossen. De hele nacht hebben we dan ook aan de bovenzijde van de top 10 gestaan. We hielden het echter maar even vol vooraleer we in slaap vielen achter onze computers, en ons zodoende rond 4 uur noodgedwongen verplaatsten naar onze slaapzakken, behalve Mirco, die nog even aan de wireframes wilde werken. Na 3 uur slaap stonden we rond 7 uur ‘s ochtens op om met volle moed verder te coderen. Mirco ging rond dit uur slapen. Na het ontbijt codeerden we zodoende verder, met slechts enkele pauzes tussendoor om wat lucht te gaan scheppen buiten de zaal. Dit leverde ons rond 12 uur de 3de plaats op van alle groepen die meededen aan deze hackathon. De laatste uren schoot iedereen echter plots in gang om zoveel mogelijk quizvragen te beantwoorden. Hierdoor zakten we op enkele uren tijd naar plaats 9. Ons team was echter mentaal helemaal uitgeput, en we konden even geen computer meer zien. De eerste 10 plaatsen moesten eveneens een  Pecha Kucha maken, een stijl van voorstellen waarmee er 20 dias afgespeeld werden op 20 seconden tijd, zonder mogelijkheid om de snelheid van de slides te bepalen. We zijn dan gezamenlijk tot de conclusie gekomen om ons de laatste 2 uur te focussen op de resources, waar we anders als IT’ers nooit mee in contact komen. Zo hebben we onder andere een AR bril kunnen huren, en hebben we uiterst moderne VR brillen kunnen uittesten. Door deze keuzes waren we nog eens 5 plaatsen gezakt, maar hierdoor kregen we wel de kans om technologieën uit te proberen die we anders in het dagdagelijkse leven nooit ter beschikking zouden krijgen\n' + 'Over het algemeen vond ik dit een zeer onduidelijke hackathon. Zo werd ons op het begin verteld dat we “de maatschappij moesten verbeteren”. Er werd helaas niet meegedeeld hoe we te werk moesten gaan. Zo vertelden de lectoren van de brainstorm-cursus ons dat we enkel wireframes moesten hebben. Andere coaches zeiden dan weer dat het vooral om het idee ging, samen met wat simpele code. Er werd ons echter niks verteld over het feit dat we blijkbaar een “business plan” moesten maken, waardoor we bij de 2de check up van de coaches met onze mond vol tanden stonden. Het puntensysteem was ook raar verdeeld. Het maximum aantal punten voor de eerste check up ronde van de coaches stemde overeen met het aantal punten dat verdiend kon worden door 2 quizvragen te beantwoorden. Het was dus compleet mogelijk dat iemand op de eerste plaats stond door enkel te quizzen en VR games te spelen (wat ook het geval was voor een bepaald groepje). Ik vermoed dat, als we een team waren van volharde gokkers en VR gamers, we gerust al blackjackend en VR gamend deze hackathon konden winnen, en dit  zelfs zonder een lijn code te schrijven. Vanaf de 2de dag werd het wel duidelijk dat dit eerder een “SWM-hackathon” was dan de programmeer challenge die wij in gedachten hadden. Wat eveneens vrij raar was, was dat alles gratis was. Er waren gratis hamburgers als avondeten, onbeperkt gratis water, cola, fanta, Leo koeken, fruit, yoghurt enz. Het ontbijt was eveneens kosteloos. Ons team heeft een totaal van 0 euro uitgegeven op de hackathon zelf. Er waren wel deelbare links per groep, waarmee geld ingezameld kon worden, maar het zou me verbazen dat iemand deze op zijn/haar facebook heeft gepost. Ik sta er dan ook terecht van versteld hoe men van dit evenement een winstgevend gebeuren heeft kunnen maken. \n' + 'Alhoewel de hackathon zelf mentaal zeer uitputtend was, kan ik er toch tevreden naar terugkijken, aangezien dit me weer een ervaring rijker maakt. Hetgeen ik dus zeker zal onthouden is de tol van “een nachtje doordoen” bij het coderen en brainstormen. De laatste uren van de hackathon waren we allen duidelijk geen mens meer. Eveneens zal ik zeker aan deze hackathon terugdenken, alvorens ik me nogmaals inschrijf bij een andere codeer challenge zonder specifieke opgave.\n'), new _models_event_model__WEBPACK_IMPORTED_MODULE_2__["Event"]('Seminarie: Chat Bots', 'Intracto', [new Date('2019-11-6')], null, 3, 'Woensdag 6 november werd ik verwacht in de B334 voor het seminarie van Intracto, waarbij het doel was een eigen chatbot  op te zetten met voice assistant. De lezing werd gegeven door Mathias Vissers, verantwoordelijke van nieuwe technologieën bij Intracto. De voorstelling begon zoals gewoonlijk met een korte introductie van de lezer en het bedrijf, maar na 10 minuten begon het hele doel van de voorstelling, namelijk het bouwen van de chatbot.\n' + 'Hiervoor werd gebruik gemaakt van “dialogflow”, een tool om een chatbot samen te stellen op basis van machine learning algoritmes en AI, voorzien door google. Eerst kregen we een korte intro rond dialogflow en de terminologie die voor dit programma essentieel is. Hiermee kon het doorlopen van de code beginnen.\n' + 'Mathias begon met een korte walktrough doorheen de website. Hierna maakten we al snel onze eerste intent aan, waardoor de chatbot de user kon verwelkomen. Vervolgens werd er gewerkt aan de response van de user. Dan werden er, naast de elementen van een default conversatie, ook andere elementen opgehaald zoals externe bronnen, het tonen van afbeeldingen, enzovoort. Na het uitvoeren van deze verschillende componenten was het resultaat een eenvoudige, stemgestuurde chatbot.\n' + 'Terugblikkend op dit seminarie kan ik stellen dat dit, voor mij althans, een van de meest boeiende seminaries was, die ik heb bijgewoond. Mathias voorzag een opdracht waarmee met relatief weinig tijd een indrukwekkend resultaat geleverd kon worden. Persoonlijk dacht ik niet dat dit proces op zulke simpele wijze verworven kon worden. \n' + 'Hetgeen ik dus zonder meer zal onthouden van dit seminarie is dialogflow, google’s nieuwe pronkstuk.  Hopelijk krijgt het in de loop van de volgende jaren evenveel tractie als google’s firebase.\n'), new _models_event_model__WEBPACK_IMPORTED_MODULE_2__["Event"]('Seminarie: Inleiding tot 5G', 'Ericsson', [new Date('2019-11-27')], null, 3, 'Woensdag 27 november werden we verwacht in de aula van lokaal B323 voor een seminarie van Ericsson omtrent 5G. De presentatie startte met een korte toelichting over het feit dat Ericsson niet, zoals ze vroeger deden, gsm’s ontwerpt, maar tegenwoordig is overgeschakeld naar alles omtrent gsm- en communicatienetwerken. \n' + 'Eerst zagen we een korte promovideo van Ericsson, gaande van het verleden van hun bedrijf tot hun toekomstvisie. Deze video werd opgevolgd door een tweede video omtrent 5G, om het publiek warm te maken voor de volgende voorstelling. Hierna werd er een korte uitleg gegeven omtrent de werking van de telefoon vroeger, en hoe Ericsson hierop heeft ingespeeld om deze te moderniseren. Het begon met bemande telefooncentrales en ging al snel over naar de eerste mechanische telefooncentrale, door hen ontworpen. Al snel kwam men tot de kern van de zaak: het gebruik van een 5G netwerk voor communicatie.\n' + 'De lezer begon met het in kaart brengen van de voorgangers. Eerst was er 1G, die gebruik maakte van een omnidirectionele antenne. Hiermee moest de gebruiker zelf weten waar de ontvanger was, om de juiste netwerkcode (zoals bijvoorbeeld 011) in te geven.\n' + 'Bij 2G schakelde men over naar een cellulaire antenne, wat dit probleem verhielp. Hier geeft de GSM van de persoon zelf zijn locatie aan in het “register”. Men moest niet meer naar plaatsen bellen, maar naar mensen. De “e” op uw telefoon wanneer je op mobiele data gaat, staat voor edge, wat betekent 2G  hiermee kan je niet op internet.\n' + '3G heeft voor het eerst internet kunnen voorzien. Hier is voor het eerst circuit switch gebruikt voor telefoongesprekken in combinatie met packet switched voor internet. De “h” op uw telefoon wanneer er mobiele data gebruikt wordt, betekent dat er een 3G netwerk gebruikt wordt\n' + 'Voor 4G wordt er enkel een voice over LTD gebruikt, die over IP belt.\n' + 'Uiteindelijk werd de kern van de zaak bereikt, namelijk 5G. De essentie van deze voorstelling ligt al snel op communicatie tussen objecten en applicaties. Het hoofddoel wat Ericsson wil doen met 5G is niet perse het tevredenstellen van het ruime publiek met een smartphone, maar het tegemoetkomen van de business owners. 5G zou genoeg data kunnen transporteren om het hele internet of things verhaal mogelijk te maken. Men is hier echter nog op teruggekomen, dit met het idee naar zelfrijdende auto’s toe , met mogelijke in car entertainment door middel van 5G (denk aan 360 graden VR met live beelden van alle kanten, informatie op het dashboard,…).\n' + 'Bij het terugkijken op dit seminarie, vond ik persoonlijk dat de 2 lezers zeer goed voorbereid waren. Het enige minpuntje dat ik hier kan aanhalen, is dat het misschien zo nu en dan iets te technisch werd. Alhoewel het topic in de richting van IT leunt, betekent dit nog niet dat wij telefonie experts zijn. Vandaar dat er soms vaak termen opgeworpen werden die misschien iets te diepgaand waren voor een seminarie dat meerdere uren in beslag nam. \n' + 'Hetgeen ik hiervan zeker zal onthouden, is de potentiele uitbreiding die mogelijk is bij het geleidelijk overschakelen op een 5G netwerk. \n'), new _models_event_model__WEBPACK_IMPORTED_MODULE_2__["Event"]('Seminarie: Firebase', 'Evance', [new Date('2019-04-3')], new _models_picture_model__WEBPACK_IMPORTED_MODULE_3__["Picture"]('../../assets/fotos/evance_firebase.jpg', 'PXL-Digital'), 3, 'Mijn volgende seminarie vond plaats in de IClassroom, gelegen in de Corda Campus, gebouw 7 te Kiewit en dit op woensdag 3 april. Hier ging er namelijk een lezing door van Evance, een dochterbedrijf van Bewire, wat op zijn beurt weer een dochterbedrijf is van de Cronos groep.\n' + 'Het seminarie ging over FireBase: een initiatief van google dat NoSQL databanken aanbiedt voor een behoorlijke prijs. Gelukkig offreren ze eveneens een gratis, gelimiteerde service, wat volstaat voor deze korte intro tot FireBase. \n' + 'Het seminarie ging van start met een beknopte inleiding van Bewire: wie ze zijn, wat ze doen enzovoort. Hierna begon het echte seminarie van FireBase, gegeven door een werknemer van Evance. Al doende werden we doorheen verschillende oefeningen geloodst. Het ultieme doel van deze middag was om een vooraf gemaakte opdracht uit te breiden met firebase, om uiteindelijk een werkende chatapplicatie op te leveren.\n' + 'Het begon daarom met het maken van de methode omtrent het inloggen, met daarrond wat uitleg. Dan volgden de methodes over het toevoegen van chatrooms, en uiteindelijk de methodes over het versturen van chatberichten. Hierover werd eveneens telkens wat uitleg gegeven.\n' + 'Uiteindelijk, gebruik makend van een plugin voor npm waarmee we een “firebase” commandline kregen, konden we de applicatie deployen. Alhoewel het niet bij iedereen van de eerste keer werkte, had het merendeel wel een werkend eindwerk.\n' + 'Persoonlijk sprak dit seminarie me zeker aan. Het was in ieder geval makkelijker te volgen dan een standaard seminarie, omdat er op elk moment interactie was met het publiek. Maar tegen het einde aan begon alles aanzienlijk sneller te gaan, waardoor velen de draad kwijtraakten. \n' + 'Vandaar dat ik toch wel met gemengde gevoelens omtrent dit seminarie naar huis ga.\n' + 'Dit neemt niet weg dat het hele “firebase” verhaal mij zal bijblijven. We mogen natuurlijk niet vergeten dat firebase een sub-applicatie is van een bedrijf dat nogal laks omgaat met zijn gebruikersdata (denk maar aan het Google+ fiasco, waar de data van alle 20 actieve gebruikers gelekt werd).\n' + 'Daarom dat ik me Firebase zal herinneren als het programma dat gratis NoSQL opslag kan voorzien voor kleine projecten, hetgeen in de bedrijfswereld ongetwijfeld meer en meer zal opkomen.\n'), new _models_event_model__WEBPACK_IMPORTED_MODULE_2__["Event"]('Ontbijtseminarie: Facebook en ik', 'Hogeschool PXL en Tim Verheyden', [new Date('2019-05-22')], new _models_picture_model__WEBPACK_IMPORTED_MODULE_3__["Picture"]('../../assets/fotos/facebook_en_ik.jpg', 'Francis Vos'), 2, 'Woensdag 22 mei  werden alle volwaardige tweedejaarsstudenten verwacht in het congresgebouw. Hier vond namelijk het ontbijtseminarie “Facebook en ik” plaats, ons gebracht door Tim Verheyden, reportagemaker bij VRT NWS. Vergezeld van een licht ontbijt begon het seminarie rond 20 voor 9. Na een korte inleiding door Francis Vos, departementshoofd van het reeds omgebouwde departement “PXL-digital”, werd het woord aan de heer  Verheyden gegeven.\n' + 'Hij begon met enig cijfermateriaal inzake sociale media, om zo een beeld te schetsen van de doorslag van deze sociale media in het dagelijkse leven. Vervolgens kwam hij tot de kern van de zaak, namelijk Facebook. Hij vertelde over zijn reis naar Amerika waar hij, zonder veel succes, een interview probeerde af te nemen van Mark Zuckerberg. \n' + 'Daarna werd de essentie van het seminarie verlegd naar de verantwoordelijkheid die Mark Zuckerberg heeft. Zijn bedrijf bezit namelijk zowel Facebook, whatsapp als instagram. De poel van Big Data waar zijn bedrijf over beschikt is nagenoeg eindeloos. Alhoewel dit vooral gebruikt wordt voor advertenties, stelt Tim zich eveneens de ethiek hiervan in vraag. Externe partijen (denk aan de “Russische bots”, die almaar meer in het nieuws verschenen jaren geleden) kunnen Facebook gebruiken als machine om bevolkingsgroepen tegen elkaar op te zetten, aan de hand van politieke overtuigingen en “Fake news”. \n' + 'Uiteindelijk werd het gesprek afgerond met de “donkere kant” van Facebook: de content analyzers die iedere dag het extreem grafisch materiaal moeten beoordelen en al dan niet verwijderen. Het einde van zijn betoog kondigde zich ten slotte aan met een korte vragenronde, waaraan alle studenten konden deelnemen.\n' + 'Persoonlijk vond ik dit een van de betere seminaries. Het was veel luchtiger dan de voorafgaande en handelde over een onderwerp dat iedereen aanbelangt, namelijk sociale media. Het feit dat het deze keer geen reclamecampagne van 2 uur betrof, was eveneens een reden waarom het zo goed in de smaak viel. Dit laatste ter zijde, werd er weliswaar niet veel nieuws aan het licht gebracht. Volgens mij is deze generatie (en al zeker de IT’ers van deze generatie) goed op de hoogte van de manier waarop sociale medianetwerken informatie en big data verzamelen om gebruikers te categoriseren en advertenties aan de hand hiervan aan te bieden.  Dit weerhoudt echter niet dat de heer Verheyden dit seminarie op een luchtige en verfrissende manier heeft gebracht, met hier en daar een vleugje humor. \n' + 'Alhoewel er weinig nieuws is verteld in dit seminarie, was deze opfrissing de inperking van mijn slaaptijd toch wel waard.\n'), new _models_event_model__WEBPACK_IMPORTED_MODULE_2__["Event"]('De projectweek', 'Hogeschool PXL', [new Date('2019-02-11'), new Date('2019-02-12'), new Date('2019-02-13'), new Date('2019-02-14'), new Date('2019-02-15')], null, 26, 'Op maandag, 11 februari, werd er van ons verwacht dat we voltallig aanwezig zouden zijn in de aula op de derde verdieping. Hier kregen we een openingslezing door opleidingshoofd Tristan Fransen, gevolgd door een seminarie van Thalento. Tijdens dit seminarie werd de betekenis achter het resultaat van de persoonlijke Thalento-test uitgelegd. Hierna volgde meteen een lezing over motivatie waar er, aan de hand van anekdotes en voorbeelden, een duidelijk beeld rond motivatie geschetst werd. Tijdens deze verschillende lezingen moesten we enkel aandachtig luisteren. Na deze voorstelling was het Thalento-rapport verduidelijkt en kwamen we, via blackboard,  te weten met welke medeleerlingen we als team aan dit project zouden gaan werken. \n' + 'Na een korte middagpauze, moesten we ons met 2 AON groepen naar de B252 bevinden. Hier werden we door Meneer Fransen begeleid doorheen een korte kennismaking. Aan de hand van een foto/applicatie op onze smartphone, moesten we een kort beeld van onszelf schetsen. Hier mochten andere groepsleden op inpikken. Met de klok mee zijn we beide teams afgegaan. Uiteindelijk heeft Meneer Fransen zichzelf eveneens op dezelfde manier voorgesteld. Op het einde van deze korte initiatie, was iedereen voldoende met elkaar bekend om samen te kunnen werken in groepsverband. \n' + 'Nu de sfeer wat losser was, werd er ons gevraagd om een schema met kernkwadranten in te vullen. Iedereen kreeg een blad met daarop het kernkwadranten schema. Hierin moesten we onze kernkwaliteiten, onze valkuilen, onze uitdagingen en onze allergieën opschrijven. Vervolgens moesten deze met de klok mee doorgegeven worden. Ieder groepslid kreeg nu de kans om zijn eigen notitie hier bij te schrijven. Op dit moment van de workshop had ieder groepslid een volledig overzicht van zijn eigen valkuilen, uitdagingen en allergieën. \n' + 'Uiteindelijk werd de workshop afgesloten met een reflectie sessie. Hierin werd ons gevraagd om een korte feedback te geven over deze dag. Wederom werden beide groepen met de klok mee afgegaan. Meneer Fransen nam ondertussen notities voor zichzelf. Hieruit kunnen er de komende jaren eventueel aanpassingen gemaakt worden omtrent de invulling van deze eerste dag.\n' + 'Voor mij persoonlijk was de eerste dag van de projectweek een zeer productieve dag, aangezien we meer uitleg kregen betreffende ons Thalento-rapport. Nu realiseer ik me dat hetgeen wat er in staat wel degelijk klopt. Eveneens hebben we onze teamleden ontmoet. Aan de hand van deze “ontmoetingssessie” is het volgens mij makkelijker geworden om elkaar te benaderen en samen te werken. We hebben ook elkanders kwaliteiten en valkuilen ontdekt aan de hand van het schema rond de kernkwadranten. Wat vooral opviel tijdens het invullen van de kernkwadranten, was dat haast iedereen van ons team er belang aan hecht om door te zetten, om zodoende de opgelegde taak tijdig af te krijgen. Binnen het team zelf merk ik dan ook geen tegenpolen. Hoogstwaarschijnlijk zullen er in elk team al wel eens meningsverschillen voor komen dewelke eventueel voor wat wrijving zullen zorgen, maar het is dan aan ons om er als groep een oplossing voor te vinden en tot een compromis te komen. Zolang iedereen in het belang van het project blijf handelen, hoort dit geen probleem te zijn. Later zullen we hier rekening mee houden voor de verdere taakverdeling in de groep.\n' + 'De kennis die we uit het Thalento-rapport gehaald hebben zullen we zeker onthouden en zal ons zonder enige twijfel nog bijzonder goed van pas komen.\n' + 'De volgende dag, dinsdag 12 februari, moesten we ons weer naar de aula begeven voor een lezing in verband met het I-Talent onderdeel van onze opleiding. We luisterden naar een PowerPoint presentatie, waarin verteld werd dat het klassieke uren systeem vervangen werd door een reeks verplichte seminaries, POP sessies, internationaliseringsmogelijkheden enzovoort. Hierdoor kreeg onze groep een beter zicht op het I-Talent vak, waar we voordien nog niet veel uitleg over gekregen hadden.\n' + 'Deze lezing werd gevolgd door een seminarie over “netwerken op een jobbeurs” en het opstellen van een formeel LinkedIn-profiel. Hierin werd er voldoende uitleg gegeven over het belang van de jobbeurs, die later deze dag zou plaatsvinden. Eveneens werd ons verteld hoe we een beschrijving op LinkedIn moesten opstellen. Na deze uitleg kregen we de tijd om zelf zulk een beschrijving uit te werken, en hadden we de mogelijkheid om deze door de lector te laten verbeteren. Na deze cursus kunnen we vol vertrouwen zeggen dat onze groep weet hoe een LinkedIn beschrijving te formuleren.\n' + 'Na de middagpauze, was het uiteindelijk tijd voor de jobbeurs zelf. Dit betreft een samenkomst van bedrijven in de D blok, waar ieder bedrijf een stand heeft die toelichting geeft aangaande hun werkzaamheden. Wij moesten die middag hier naartoe gaan, om onze communicatieve vaardigheden te testen, maar natuurlijk eveneens om een voorproefje te krijgen van wat er ons in het derde jaar te wachten staat. We zijn hier, zoals aangeraden door meneer Fransen, met onze voltallige projectgroep naartoe gegaan. We hebben het grootste deel van de bedrijven gezien en met een tiental van hen gesproken. Zo een  jobbeurs is naar mijn mening een uitstekende gelegenheid om diverse werkgevers te ontmoeten waardoor de eerste contacten kunnen worden gelegd.   Iedereen van onze groep heeft eveneens door middel van visitekaartjes voldoende informatie kunnen verzamelen  aangaande de verschillende bedrijven. \n' + 'Hierna volgde nog een laatste seminarie. In dit seminarie werd ons de starrt methode uitgelegd, een reflectiemethode die zeer handig is om reflectieverslagen te kunnen schrijven. Na een korte initiatie kregen we al snel de opdracht om de eerste dag van de projectweek samen te vatten aan de hand van deze methode. Middels een grafisch model en de mogelijkheid om vragen aan de lector te stellen, heeft onze groep deze opdracht integraal tot een goed einde kunnen brengen.\n' + 'Als ik terugblik op deze tweede dag, merk ik dat we tevens van deze dag veel bijgeleerd hebben. Naast extra duidelijkheid over het I-Talent systeem, hebben we eveneens ruimschoots uitleg gekregen over hoe we ons moesten opstellen tijdens de jobbeurs. De uitleg die we kregen betreffende het aanspreken van personen in een zakelijke situatie, vond ik het interessantst, aangezien we naar mijns inziens deze vaardigheid in de toekomst nog frequent nodig zullen hebben. Vervolgens hebben we al deze goede raad in praktijk kunnen brengen op het jobevent. Dit ging volgens mij behoorlijk vlot, mede omdat we dit in groep konden doen. Het enige wat ik voor mezelf zou veranderen naar volgend jaar toe, is om persoonlijk wat meer initiatief te nemen betreffende het benaderen van de standhouders. Het bedrijf dat me het meeste aansprak was Euricom, aangezien het belangrijk is voor dit bedrijf dat de werknemers zowel front-end als back-end development regelmatig afwisselen. \n' + 'Mede door al onze vorige ervaringen is onze groep nu van start kunnen gaan met het inplannen van POP sessies en seminaries. \n' + 'Naar mijn gevoel, hebben we het met zijn allen vrij goed gedaan op de jobbeurs, aangezien we (alhoewel we tweedejaarsstudenten zijn) veel stageplaatsen kregen aangeboden.\n' + 'We hebben ook weer een deel connecties op LinkedIn erbij. En door middel van de starrt methode kunnen wij nu deel 2 van de portfolio invullen.\n' + 'Op dag drie, woensdag 13 februari, vond de eerste lezing van de dag plaats in de aula in gebouw 1 van de Corda Campus. Hier luisterden we naar een lezing over “onderzoekend handelen”. Deze lezing werd gegeven door 2 leden van het PXL research team. Mevrouw Fuchs behandelde het tweede deel van deze lezing en gaf extra uitleg over onderzoeksprocessen bij een researchproject. Het eerste deel focuste zich vooral op het onderscheid tussen fundamenteel en praktijkgericht onderzoek. Eveneens werd er uitleg gegeven over actuele IT concepten, zoals blockchain, AI en “Smart City”.\n' + 'Bij het tweede deel van de lezing verschoof zoals reeds eerder vermeld de focus naar het onderzoeksproces van een researchproject. Dit proces bestaat uit 4 delen: het ontwerpen, de gegevens verzamelen en het “evalueren en adviseren”. Ieder onderdeel werd in de presentatie zelf ruimschoots uitgelegd. Door voldoende aandacht te schenken aan hetgeen er verteld werd en het nemen van duidelijke notities hebben we heel wat van deze lezing kunnen opsteken. Zodoende begrijpen we nu wat het verschil is tussen fundamenteel en praktijkgericht onderzoek. We weten nu ook welke IT projecten deze dagen actueel zijn en we hebben een goed zicht gekregen op hoe een researchproject uitgevoerd wordt.\n' + 'Naar mijn mening was het een geslaagde lezing. Persoonlijk vond ik het eerste deel met de voorbeelden van fundamentele en praktijkgerichte onderzoeken wel wat omslachtig, maar dit werd in ruime mate goedgemaakt door de uitleg rond de actuele onderwerpen blockchain, AI en “Smart City”. Dit zijn volgens mij de doorslaggevende concepten die mede bepalen dat vele studiegenoten voor deze richting gekozen hebben. Het gedeelte van mevrouw Fuchs was eveneens zeer interessant, aangezien dit ons voldoende uitleg verschafte over hoe een projectfiche in te vullen.\n' + 'Eveneens op woensdag, vond de lezing over “ondernemend handelen” plaats. Na een korte inleiding door Meneer Fransen, werd het woord gegeven aan Matthias Reygel. Hij gaf ons extra inlichting over de combinatie van studeren en werken, aan de hand van een PowerPoint presentatie. De StudentStartUp die zijn team aanbiedt, geeft studenten de mogelijkheid om, gelijktijdig met hun studies in het hoger onderwijs, een eigen bedrijf op te starten en deze twee activiteiten zodoende te combineren. De studenten worden door hun begeleid van idee tot onderneming.\n' + 'Hierna werd de microfoon doorgegeven aan Pieter, een deelnemer aan het “switch2IT” programma. Dit programma biedt de mogelijkheid aan werknemers om zich bij te scholen in IT, terwijl ze bedrijvig zijn in hun onderneming. Pieter zit in het derde jaar van zijn opleiding en kwam ons zijn startersverhaal uit de doeken doen. Hij vertelde ons over de vele jobs die hij als tiener had uitgevoerd en hoe hij uiteindelijk nieuw leven blies in zijn leven als ondernemer, door middel van een pitch op een hackathon.\n' + 'Vervolgens was het de beurt aan gewezen judoka Ann Simons van Wingmen, een onderdeel van de Cronos groep. Ze vertelde ons over de oprichter van Cronos, Jef De Wit, en hoe hij er voor gezorgd heeft dat ondernemers in spe de mogelijkheid krijgen hun eigen bedrijf op te richten of hulp krijgen met het uitwerken van hun ideeën. Dit alles door ondersteuning te bieden met zowel de financiële als de zakelijke kant. Wanneer een project goedgekeurd wordt, krijgt de ondernemer die het  idee heeft aangebracht, een vast loon en zal deze bij tegenslagen dus geen zware financiële  gevolgen dragen. Het is wel belangrijk hierbij te vermelden, dat Cronos de helft van de aandelen bezit van deze “dochterbedrijven”. \n' + 'Ten slotte werd de microfoon doorgegeven aan Bruno Braes, Managing Partner/Solution Architect bij FORWARD. Hij is eveneens een medewerker van de Cronos Groep, die ooit de passie had om zelf een bedrijf op te starten. Cronos gaf hem deze kans. Hij vertelde ons over zijn carrière als ondernemer, en hoe hij uiteindelijk bij Cronos terecht gekomen is.\n' + 'Tijdens deze seminaries hebben we vanzelfsprekend een hoop notities genomen en uiteraard stonden we ook in interactie met de vertellers. Hierna had ikzelf een vrij duidelijk beeld van hoe verder studeren toch hand in hand kan gaan met ondernemen. Eveneens werd er bevestigd dat financiële omstandigheden geen limiterende factor mogen zijn voor een innoverend idee, wat voor studenten altijd leuk is om te weten natuurlijk.\n' + 'Als ik terugblik op dit seminarie, doe ik dit met gemengde gevoelens. Op de eerste helft, die vooral ging over het ondernemerschap en het durven ondernemen, viel niets aan te merken. Dit waren zeer objectieve en zelfs motiverende succesverhalen over durven ondernemen. Toen we echter aan de tweede helft van de lezing begonnen, over Cronos, merkte ik dat ik niet de enige was die iets sceptischer begon te worden omtrent de vertellers. Ann Simons had duidelijk grote bewondering voor haar baas, Jeff. Toen ze ons evenwel vertelde dat Cronos samenwerkt met werknemers om hun ideeën uit te werken, vroeg ik mezelf al snel af waarom een bedrijf dit zou doen. Een bedrijf dat in 2017 een totale activa waarde van 280 miljoen euro heeft, is volgens mij niet gebouwd op de liefdadigheid van de CEO. Al snel kwam uit het publiek de vraag “en welk aandeel van de winst gaat naar de werknemer met het oorspronkelijke idee ?”. Vanzelfsprekend werkt Cronos met een aandelensysteem, waarmee zij minimum de helft van de aandelen van de dochterbedrijven bezitten. Bruno werd eveneens niet gespaard voor zulke vragen, maar uit zijn quote “don’t bite the hand that feeds you”, merkte ik dat hij het niet erg vond om een vast loon te krijgen om zijn idee te zien groeien.\n' + 'Ons is altijd aangeleerd dat winst de beloning is van ondernemerschap. Van ondernemers wordt immers steevast het beeld geschetst dat ze leven voor het risico van het vak en dat ze niet kunnen functioneren onder een baas. Maar volgens mij bewijst deze lezing dat er veel mensen zoals Ann en Bruno zijn, die niet geven om deze kenmerken, en zodoende bereid zijn met grote bedrijven in zee te gaan om zo te werken aan een idee dat volgens hun de maatschappij daadwerkelijk kan verbeteren.\n' + 'Uit deze lezing onthoud ik dus zeker dat het klassieke beeld van ondernemerschap niet voor iedereen van belang is. Wanneer we het personeelsbestand van Cronos onder de loep nemen, valt te bemerken dat er veel mensen zijn die hun idee een grotere kans op slagen willen geven, zelfs als dit minder winst betekent.\n' + 'Wanneer ik deze week overloop, kan ik enkel concluderen dat het werkelijk vijf zeer drukke dagen zijn geweest. Na de lesdagen van 9 tot 5 ben ik er vrij zeker van dat ons team zijn nachtrust goed gaat kunnen gebruiken. Dit neemt echter niets weg van het feit dat het een zeer productieve week was. Van de talloze lezingen, is die van woensdag me het meest bijgebleven. Ik denk dat ik niet de enige in de aula was die geboeid luisterde naar de werkelijke verhalen uit het bedrijfsleven. De verhalen van zowel de successen als de tegenslagen van deze ondernemers zullen me waarschijnlijk nog lang bijblijven. \n' + 'Natuurlijk is dit niet het enige seminarie dat me zal bijblijven.  De eerste lezing aan het prille begin van de week, in verband met motivatie werd op een zeer originele manier gegeven. De vele anekdotes maakten het makkelijk om gefocust te blijven op het verhaal. Ik vond het echter jammer dat het accent van deze lezing puur op motivatie lag, terwijl de kern van productiviteit naar mijn mening eerder ligt bij een goed beleid en tevreden werknemers die een krachtig team vormen. Een onderneming kan zich niet enkel verlaten op willekeurige ingevingen van motivatie. Een strikt plan, dat iedere dag met veel ambitie wordt uitgevoerd,  is volgens mij het plan naar succes.\n' + 'De kennismaking in de namiddag was eveneens een gebeuren dat ik niet snel zal vergeten. De spanning rond het ontmoeten van onze groepsleden werd hierdoor aanzienlijk vermindert. Het “kennismakingsspel” met de smartphone, onder leiding van meneer Fransen, vond ik origineel gevonden. Zoals men zegt : “a picture is worth a thousand words”. Op deze wijze konden we elkander zien op een manier die anders niet aan het licht komt. Deze wat uitzonderlijke aanpak om mekaar te leren kennen was zonder meer speciaal te noemen.\n' + 'Als laatste wil ik nog even de aandacht vestigen op het seminarie betreffende de hackathon. De inleidende presentatie over “What the hack” gaf een zeer goede en nauwkeurige voorstelling van hoe een hackathon werkt. De lezer overliep eveneens de mogelijke opdrachten die we op een hackathon konden krijgen. Dit is volgens mij zeker een pluspunt, aangezien de zaal vol jonge IT’ers zat, dewelke vanzelfsprekend weinig praktische ervaring hebben binnen het vak zelf. \n' + 'De tweede lezing had een zeer originele praktische opening. Door middel van de “en dan” opdracht, waar de microfoon door de aula werd doorgegeven, was het ijs al grotendeels gebroken vooraleer we aan de “mini hackathon” begonnen. De opdracht zelf, gaf ons een goed (maar natuurlijk beperkt) voorbeeld van hoe het er in het echt aan toe gaat. Dit was voor onze groep een van de meest voorname evenementen van de hele week, aangezien we zelf konden zien hoe we in teamverband iets creëerden. Van de hele lezing rond hackathons zal het praktisch gedeelte mij vooral bijblijven. Hierdoor heb  ik al een goed beeld gekregen van hoe het er tijdens een hackaton zoal aan toe gaat, wat zeer handig kan zijn, aangezien ik in de toekomst hieraan ongetwijfeld zeker zelf eens wil deelnemen.\n' + 'Ik kan alleen maar afsluiten met de vaststelling dat het voor mij een zeer productieve week was, waar ik in mijn latere leven zeker nog zal op terugblikken. De focus op de praktijk heeft voor een luchtige afwisseling gezorgd, tussen alle oefenscenario’s door.\n'), new _models_event_model__WEBPACK_IMPORTED_MODULE_2__["Event"]('De Vlaamse programmeerwedstrijd', 'Verscheidene hogescholen, waaronder de Hogeschool PXL', [new Date('2019-03-13')], null, 3, 'Op woensdag 13 februari vond de Vlaamse programmeerwedstrijd plaats. Samen met mijn (ex-) klasgenoten, Yusuf Destan en Mirco Gijsens, heb ik me hiervoor ingeschreven.  Met nog een ander team van PXL zijn we samen naar Antwerpen vertrokken, waar de wedstrijd plaatsvond. Bij de aankomst, mochten we ons meteen aanmelden waarna we een shirt en een drinkbeker meekregen van de wedstrijd. Vervolgens hadden we tijd om te eten in het cafetaria en om de “mini jobbeurs” rond te gaan. In de gang stonden namelijk verschillende bedrijven opgesteld, waarvan enkele ook zelf meededen aan de programmeerwedstrijd, in categorie 4.\n' + 'Om 14 uur 30 begon de wedstrijd. Ons team nam plaats aan een tafel en luisterde naar de korte introductie. Hier werd ons praktische uitleg gegeven, zoals hoe we vragen moesten stellen en hoe we onze resultaten moesten doorgeven. Daarna  werden de  opgaves uitgedeeld. Ons team begon direct aan de eerste opdracht, maar deze liep al snel op niets uit. Vervolgens hebben we het werk onder elkaar verdeeld, maar ook dit voltrok zich niet optimaal. We zagen onze tijd inkrimpen en al snel waren de ons toegestane 3 uren voorbijgevlogen. Uiteindelijk hadden we 3 van de 5 opgaves geüpload, alle 3 met compileerfouten, met als resultaat een eindscore van 0.\n' + 'Dan werd er ons gevraagd om naar de aula op de eerste verdieping te gaan, voor de prijsuitreiking. De 3 beste groepen werden beloond met tech goodies, gesponsord door de bedrijven die de Vlaamse Programeerwedstrijd ondersteunden.\n' + 'Als ik terugblik op deze dag vond ik het een zeer aangename beleving. Het was een dag waarop we geen rekening moesten houden met groepswerken of andere taken waaraan we ongetwijfeld nog veel tijd zullen moeten spenderen. Maar naast een gezellige uitstap, was het ook een zeer leerrijke ervaring. Voor haast ieder van ons was het onze eerste programeerwedstrijd en bij deze zijn we dan ook onmiddellijk tot het besef gekomen dat pair programming niet optimaal is onder druk. \n' + 'In het latere leven ga ik deze kennis nog goed kunnen gebruiken. In toekomstige programmeerwedstrijden, waar opgaves opgelost moeten worden met pair-programming, zal ik zeker onthouden dat het beter is om met iedereen eerst op één opgave te focussen, vooraleer we naar de volgende opdracht gaan. Verder weet ik nu ook al wat meer over de algemene werking van programmeerwedstrijden en zal ik nooit meer vergeten dat een opgelegde tijd van3 uur helaas sneller voorbij is dan gedacht. Ik denk dat het veilig is om te zeggen dat, naast een mooi t-shirt en een drinkbeker, we eveneens een koele reality-check meegekregen hebben over onze programmeervaardigheden. \n'), new _models_event_model__WEBPACK_IMPORTED_MODULE_2__["Event"]('Seminarie: The modular monolith', 'XTI', [new Date('2019-03-20')], null, 4, 'Op 20 maart moesten we aanwezig zijn op PXL-research, voor het seminarie over  XTi: the modular monolith. Eens aangekomen rond kwart over 8, kwam de lezer al snel binnen om een banner van XTi op te zetten en zich voor te bereiden. Om half 9 begon hij met zijn presentatie. Zoals bij elk seminarie, begon hij in het kort over zijn bedrijf. XTi is een bedrijf dat software maakt, gebruik makend van Java en Open source software en is gevestigd te Merelbeke, Kontich en Hasselt. Het is een dochterbedrijf van de Xplore group, wat op zijn beurt weer een dochterbedrijf is van de Cronos groep. \n' + 'Hij vertelde ons in het kort de werkmethodes van zijn bedrijf: ze werken namelijk met agile, maar niet in die mate dat elke regel op de voet nageleefd moet worden. Er wordt ook met DevOps gewerkt, maar niet op de klassieke manier waarmee wij bekend zijn. De afdeling DevOps zelf hebben ze namelijk niet. Heel hun team bestaat uit voldoende geskilde developers, die er genoeg vanaf weten om zelf de deployment te doen.\n' + 'Vervolgens legde hij de nadruk op het belang van CI/CD: continuous integration and continuous deployment. Hij vertelde over hoe de klant altijd zo snel mogelijk resultaat wilt, en de regels die zijn bedrijf hieromtrent oplegt, om toch op een doenbare manier werkende code op te leveren. Eveneens liet hij zo een proces zien, samen met welke software ze hiervoor gebruiken. Bij dit onderdeel besteedde hij veel tijd aan de ELK stack, een open source stack voor opvragen van gegevens van het programma zoals logs, visuele representatie van de mate waarin het programma werkt, enzovoort.\n' + 'Dan kwam hij bij de essentie van de lezing: “the modular monolith”. Dit is de perfecte mengeling tussen monolithische applicaties (applicaties waarin UI en data acces code samen in een programma op een platform zitten) en service georiënteerde architectuur (software design waarin services voorzien worden door andere applicatie-componenten). Hij legde dit uit aan de hand van een praktisch voorbeeld, waarin hij een Java programma codeerde dat iedereen mee kon volgen op de beamer.\n' + 'Als ik terugblik op deze lezing kan ik er niet veel opmerkingen over maken, buiten het feit dat deze 4 uur aan een stuk duurde zonder enige pauzes in te lassen. Het viel op dat de zaal hierdoor de concentratie na een tijdje verloor. Persoonlijk vond ik daarom ook dat het soms wat moeilijk te volgen was. De inhoud van de lezing zelf was wel zeer interessant, omdat dit werkelijk een lichte versie was van hoe het er in het bedrijfsleven aan toe gaat. Jammer genoeg was het moeilijk om alles rustig te aanhoren en te laten doordringen, omdat het nogal een drukke lezing was met weinig tijd voor reflectie.\n' + 'Wat ik zeker zal onthouden van deze toespraak is dat er nog veel software te ontdekken valt. Bij het zien van het ruime assortiment aan software waar XTi gebruik van maakt, besef ik dat dit hele proces dan ook complexer in elkaar zit dan gedacht.\n'), new _models_event_model__WEBPACK_IMPORTED_MODULE_2__["Event"]('Seminarie: don\'t make me think', 'Superlab', [new Date('2019-02-27')], null, 3, 'Op 27 februari werden we verwacht in de B151, voor het optioneel seminarie: “Superlab, don’t make me think”. Stipt om half 10 ging de lezing van start met een korte introductie. Geert, onze lezer en tevens medeoprichter van Superlab, begon met wat uitleg te geven betreffende hun onderneming. Hij vertelde ons dat Superlab webpagina’s en webapplicaties maakt voor zowel grote als kleine ondernemingen. Hij legde de nadruk op het feit dat er een belangrijke hoofdvraag is namelijk: waarom? Hiermee verduidelijkte hij dat een website er zo gebruiksvriendelijk mogelijk uit moet zien. Als een klant veel moet zoeken verliest hij namelijk zijn interesse, en sluit hij de website af. Vandaar ook de titel van dit seminarie: “don’t make me think”.\n' + 'In het eerste echte hoofdstuk becommentarieerde hij de 5 belangrijkste elementen: labels, buttons, page layout, structuur en tekst. Deze moeten één voor één duidelijk afgebakend zijn, zodat het expliciet zichtbaar is wat tekst is, en waar men op kan klikken. Vervolgens legde hij de nadruk op de 2 verschillende architectuur types: flat vs deep. Met deze types zal later ook rekening gehouden moeten worden.\n' + 'Hij vertelde ons ook dat we het internet niet gebruiken zoals we dat met een boek doen. Waar we in een boek vol belangstelling alles uitlezen A tot Z, “scannen” we webpagina’s op onderdelen die we nodig hebben. Hierdoor maken we dan ook niet optimaal gebruik van de website: enerzijds omdat we vaak op onze gevoelens afgaan en anderzijds omdat we de website of webapplicatie vaak niet gebruiken waarvoor ze ontworpen is. Iedereen bedient zich zodoende van het internet op zijn eigen manier, en als deze functioneert, blijven we ze gebruiken.\n' + 'In het volgende deel “how to design a billboard” gaf hij de belangrijkste punten omtrent do’s en don’ts voor webdesign. Zaken zoals vaste conventies, visuele hiërarchie enzovoort passeerden hier de revue. Een fout die vele websites maken is blijkbaar de “happy talk”: de onnodige blokken tekst die niemand leest. Dit is een van de grootste factoren die een website “onaantrekkelijk” maakt.\n' + 'In het hoofdstuk omtrent navigatie informeerde hij ons dat het navigatiemenu het belangrijkste onderdeel was van heel de website. Dit is namelijk de structuur, de “kapstok”, waar al uw informatie aanhangt. Een visuele indicator van waar de gebruiker zit op de website is eveneens een groot pluspunt voor verkoopwebsites.\n' + 'Uiteindelijk kwamen we bij het laatste deel omtrent testen. Hiermee legde hij het testmodel van zijn onderneming uit: snel, zonder veel voorbereiding, goedkoop en vaak uitgevoerd doorheen het project. Dit verschilt heftig van andere testmethoden, die meestal eenmalig op het einde uitgevoerd worden omwille van hun groot project. Om het in zijn woorden te zeggen: het is onmogelijk om een klant door het afgewerkte huis rond te leiden, om dan te horen dat de klant dit geen goed huis vindt. Goedkope testen die vaak doorheen het hele project uitgevoerd kunnen worden zijn de sleutel tot bruikbare feedback.\n' + 'Tijdens dit seminarie hebben we enkel moeten luisteren en hier en daar een oefening moeten maken. Als resultaat hebben we hieruit geleerd hoe een website er uit moet zien. Eveneens hebben we een overzicht gekregen van de do’s en don’ts van een website.\n' + 'Als ik terugkijk op deze sessie was het een zeer leerrijk seminarie. Er zijn verschillende onderdelen aan bod gekomen waarvan velen van ons zich nog niet hebben afgevraagd of deze wel van belang zijn. Daarom vond ik de oefeningen, waar we zelf een website onder de loep moesten nemen, zeker belangrijk. Op het begin kwam er namelijk weinig feedback van de cursisten, maar eens de powerpoint gedaan was, en we de belangrijkste onderdelen overlopen hadden, viel er veel meer op aan deze website. \n' + 'Vervolgens was het overlopen van de “opmaakpuntjes” zelf wel informatief, maar hier en daar wat langdradig. Het kwam namelijk telkens terug neer op hetzelfde: zorg voor een “sobere” website, waarbij je duidelijk gebruik maakt van de nodige conventies, terwijl je goed onderscheidt wat aanklikbaar is en wat niet. Eveneens vond ik dat er hier en daar slechte voorbeelden aangehaald werden. \n' + 'Daarna werd er, om “happy talk” te bespreken, als voorbeeld een website van een familiebedrijf aangehaald. Geert vertelde dat dit niet van belang was, en dat de hoofdzaak in het navigatiemenu zit. Persoonlijk ben ik het hier niet mee eens. Volgens mij ligt de focus van een lokaal familiebedrijf meer op hun persoonlijk verhaal en het afleveren van hoogwaardige producten, in plaats van het massaal produceren van goederen. Volgens mij kan daarom niet elke website over dezelfde kam geschoren worden, en moet het aankomen op deze “stijlpuntjes”.\n' + 'Het onderdeel betreffende het testen zelf kon me ook enorm boeien. Dit toonde eigenlijk aan dat er, zelfs binnen de IT, nooit een vaste manier is om een probleem om te lossen. Eveneens liet dit zien dat “duurder” daarom niet altijd beter is. Ons is namelijk altijd verteld dat zulke testresultaten nauwkeurig vastgelegd moeten worden enzovoort, maar eveneens hier bewijst Superlab het tegendeel. Ze werken namelijk met het principe dat testresultaten gewoon in het kort opgeschreven worden, en dat deze vervolgens tijdens de middagpauze besproken worden.\n' + 'In de toekomst zal ik daarom zeker stilstaan bij deze testmethoden. Het belang van een goede  website is er tijdens dit seminarie voldoende ingehamerd, en zelfs de stijlpuntjes zal ik in mijn achterhoofd houden (alhoewel met een flinke korrel zout). \n'), new _models_event_model__WEBPACK_IMPORTED_MODULE_2__["Event"]('Studiereis Berlijn', 'Hogeschool PXL', [new Date('2020-02-14'), new Date('2020-02-15'), new Date('2020-02-16'), new Date('2020-02-17'), new Date('2020-02-18')], new _models_picture_model__WEBPACK_IMPORTED_MODULE_3__["Picture"]('../../assets/fotos/berlijn_2.jpg', 'Ilyas Mercan'), 30, 'Vrijdag veertien februari om stipt negen uur ’s ochtends werd ik verwacht aan hogeschool PXL om deel te nemen aan de cultuuruitstap naar Berlijn. Samen met een groep mede junior-collega’s en twee lectoren vertrokken we met een reisbus rechtstreeks richting Berlijn.\n' + 'De hoofdreden van deze reis was om wat cultuur op te snuiven in de stad. Er was eveneens een bezoek gepland aan de Technische Universität van Berlijn, waar we een lezing zouden bijwonen. Deze werd echter tijdens de busrit reeds afgezegd, waardoor we de laatste dag compleet vrij kregen om Berlijn te ontdekken.\n' + 'De eerste dag bestond uit een busrit vertrekkende van de PXL aan de Elfde-Liniestraat in Hasselt, naar het Novum Hotel aan de Bülowstraße in Berlijn. Tijdens deze busrit werden er 2 pauzes voorzien van telkens 45 minuten, zodat alle inzittenden rustig iets konden gaan eten en een bezoek brengen aan het toilet. Rond 7 uur ’s avonds bereikten we onze bestemming. Eens ingecheckt mochten we die avond eender wat doen, zolang we ’s anderendaags om negen uur in de ochtend maar stipt in de lobby stonden. Mirco, Jens, Jonathan en ik hebben van die avond gebruik gemaakt om de Bülowstraße te bezoeken en om daar vervolgens gezellig  iets te eten en te drinken. \n' + 'De volgende dag na het ontbijt stond iedereen te wachten in de lobby voor de eerste culturele uitstap. De trip begon met een busrondleiding langs de prominentste plaatsen van Berlijn, onder begeleiding van een gids die al enkele jaren in Berlijn woonde. Zij liet ons de belangrijkste plaatsen van Berlijn zien, zoals de Alexanderplatz, het Joodse museum, het stadhuis (genaamd het Rotes Rathaus) enzovoort. In de middag kregen we vrije tijd om iets te eten. We werden vervolgens rond 2 uur verwacht aan het Joodse monument. Hier kregen we een rondleiding doorheen dit monument. Vervolgens gingen we richting Brandenburger Tor, dan naar de Gendarmenmarkt en uiteindelijk tot de kathedraal van Berlijn. Verder kregen we vrij de tijd om de avond in te delen hoe we zelf wilden. Ik heb deze avond benut door een bezoek te brengen aan de Franken Bar, een punk bar op ongeveer een half uur van het hotel. Hier was namelijk een meezingavond met de beste punkplaten van oud tot nieuw.\n' + 'Zondag werd ingeluid met een bezoek aan de Stasi gevangenis Hohenschönhausen, waar we werden rondgeleid door een ex-Stasi gevangene. Vervolgens kregen we die middag een begeleide tour doorheen het vliegveld van Tempelhof. Dit was het einde van de geplande activiteiten van zondag. Na het avondmaal met Jens, Mirco, Jonathan en Dries ben ik teruggekeerd richting de Franken Bar, en ben ik vanaf daar het Oost-Berlijnse nachtleven gaan verkennen.\n' + 'De voorlaatste dag mocht vrij ingevuld worden door de studenten zelf. Samen met Jens, Dries en Jonathan heb ik de Berliner Fernsehturm op de Alexanderplatz beklommen. Hierna ben ik met Jens, Mirco en Dries nogmaals verder gewandeld richting Brandenburger Tor en het Joodse monument. Na een goede wandeling zijn we teruggekeerd naar de metro om vervolgens wat uit te rusten op hotel. Als laatste avondactiviteit ben ik naar de Schokoladenbar gegaan, een zelfverklaarde anarchistenbar. Voor 8 euro kon ik een concert bijwonen van Three Marias, met als headliner de Amerikaanse band Magic Shoppe.\n' + 'Uiteindelijk liep onze trip op zijn einde. Dinsdag bestond dan ook grotendeels uit de terugrit richting hogeschool PXL. Na een busrit van ongeveer 8 uur met 3 breaks zijn we met de volledige groep veilig aangekomen aan in Hasselt.\n' + 'De eindbalans van deze uitstap was voor mij uitsluitend positief. Ik heb dan ook veel bijgeleerd over de cultuur van Berlijn, een stad met een rijke geschiedenis die door de jaren veel heeft doorstaan.\n' + 'Bij het terugblikken op deze trip vond ik het een ideaal einde van mijn jaren aan de PXL. De trip zelf was perfect georganiseerd met een harmonieuze afwisseling tussen cultuur en vrije tijd. Berlijn zelf is een stad met vele niche subculturen, waardoor er voor ieder individu wel een activiteit te vinden is. \n' + 'Als reflectie neem ik graag de vers opgedane kennis van Berlijn mee. Alsook zal ik de gezellige avonden in de cocktailbar of de ludieke meezingavonden in de Franken Bar niet snel vergeten.\n'), new _models_event_model__WEBPACK_IMPORTED_MODULE_2__["Event"]('POP sessies', 'Hogeschool PXL', [new Date('2019-04-10')], new _models_picture_model__WEBPACK_IMPORTED_MODULE_3__["Picture"]('../../assets/fotos/pop.jfif', 'Learning Path'), 10, 'In de eerste POP sessie waaraan we deelnamen, werd er inlichtingen gegeven rond zelfreflectie door Jo en Carl, twee jeugdbegeleiders van Learning Path.  Na een korte uitleg werden we uitgenodigd naar een ander lokaal. Hier moesten we 3 taken uitvoeren. De eerste taak was een partnertaak, waar we per 2 elkander moesten observeren en feedback geven. De tweede opdracht bestond eruit om vragen te stellen aan elkaar, en dit continu gedurende twee minuten. Voor de laatste taak werd de klas in 2 groepen opgedeeld. Iedere groep moest objecten doorgeven in een bepaalde richtingen, afhankelijk van het object. Het aantal rondjes van een specifiek “kernobject”, dat de core business hoorde voor te stellen, werd bijgehouden. Dit was onze score. Als resultaat hadden wij de beker 1.5 keer rondgegeven. Ook hierbij moesten we feedback geven aan onze “concurrentie” in de andere helft van de klas.\n' + 'Persoonlijk vond ik dit een vrij lastige opdracht. Het was namelijk nog relatief vroeg in de ochtend en de eerste duo taak waarbij we elkaar moesten aankijken zonder iets te zeggen, verliep mijns inziens eerder ongemakkelijk. De sfeer kwam echter al snel los en al doende hebben we, al spelend bijna, de 4 kernkwaliteiten van reflecteren ontdekt. Deze zullen dus zeker en vast nog zeer nuttig zijn omdat ik op deze manier een gepaste feedback kan geven aan mijn teamleden.\n' + 'Voor de volgende POP sessie begaven we ons naar de B114. Hier moesten we bij het betreden van het lokaal direct onze GSM afgeven. Aan de hand van een powerpoint en allerhande opgaves met post-its werden verschillende concepten bekendgemaakt. We begonnen met een A3 blad in 3 delen op te delen: een voor ’s ochtends, een voor ‘s middags en een voor ‘s avonds. Hierop moesten we al onze activiteiten en indien mogelijk onze touchpoints opschrijven. Dit zijn punten waarmee we in contact komen met de buitenwereld: dit kan gebeuren via conversatie of via smartphone. Deze post-its moesten we vervolgens op een schema plakken. Hiermee werd al doende uitleg gegeven rond de belangrijkheid van bepaalde taken. Door al deze praktische opgaves begrepen we op het einde van de les de impact die het gebruik van de smartphone heeft op ons dagelijkse leven.\n' + 'Als ik op deze dag terugblik, merk ik vooral dat er een zeer goede afwisseling was tussen PowerPoint gebruik en praktisch oefenen. Dit zorgde ervoor dat het seminarie interessant bleef. Het schema zal ik daarom ook zeker in gedachten houden om mijn krappe planning verder uit te werken, en zo bijzaken te schrappen van de essentie. Eveneens zal ik door deze ervaring vast en zeker wat meer nadenken alvorens ik voor de tigste maal mijn gsm opneem of mijn sociale media check tijdens het studeren.\n' + 'Uiteindelijk kwam de dag ten einde, en begonnen we aan onze laatste POP sessie. Deze ging over popping zelf. Na een korte inleiding met een PowerPoint gingen we al snel over naar het praktische werk. Aan de hand van een kaartspel moesten we onze groepsleden kwaliteiten toekennen, terwijl we tegelijk onszelf kenmerken toekenden. Dit heeft ervoor gezorgd dat we onze groepsleden capaciteiten konden verschaffen waar we meestal zelf nog niet aan gedacht hadden. Eveneens moesten we voor onszelf een evaluatiepapier invullen over onze sterktes en zwaktes waar we gedurende de rest van het jaar aan willen werken.\n' + 'Als ik terugkijk op deze gebeurtenis kan ik zeggen dat het op zijn minst een aparte oefening was. Ze was origineel, maar tegelijk vreemd, aangezien we moeilijk kenmerken van elkaar konden blijven verzinnen. Het evaluatiepapier dat we voor onszelf meekregen is volgens mij zeker een meerwaarde  aangezien we dat tijdens het  verdere schooljaar nog kunnen gebruiken. Daarom zal ik vooral dit document, en de waarden die ik er voor mezelf opgeschreven heb, zeker kunnen benutten doorheen de rest van het jaar. \n'), new _models_event_model__WEBPACK_IMPORTED_MODULE_2__["Event"]('Care-athon', 'Hogeschool PXL met Cegeka, Xplore Group en Corda Campus', [new Date('2020-02-20'), new Date('2020-02-21')], new _models_picture_model__WEBPACK_IMPORTED_MODULE_3__["Picture"]('../../assets/fotos/careathon.jpg', 'Francis Vos'), 26, 'Donderdag twintig februari om negen uur stipt werden alle laatstejaarsstudenten verwacht in de inkomhal van Cegeka. Hier werd namelijk het startschot gegeven van de Care-athon, een initiatief van de hogeschool PXL, de Xplore groep, Corda Campus en Cegeka zelf. Na een korte voorstelling van Francis Vos werd de teamindeling bekend gemaakt. Samen met 1 andere AON student en 2 SNB studenten kon ik met de opdracht van start gaan.\n' + 'De taak was zeer duidelijk geformuleerd, maar niet bepaald eenvoudig. Er moest een applicatie geschreven worden waarmee werknemers van de buitenschoolse opvang makkelijk kinderen kunnen in- en uitchecken met gezichtsherkenning. \n' + 'We begonnen met het schetsen van wireframes. Al snel hadden we een duidelijk beeld van de applicatie voor ogen met  alle minimum aan vereiste requirements. Vervolgens schakelden we over naar het uitschrijven van de applicatie in Android Studio, met als taal Java. Ik nam de taak op me om het overzicht van de kinderen te visualiseren. De andere AON student probeerde de gezichtsherkenning te integreren in de applicatie. Op het einde van de dag was mijn taak afgehandeld maar de andere AON student had nog moeite met het integreren van de gezichtsherkenning.\n' + 'De volgende dag besloot ik om zelf daaraan verder te werken. De applicatie beschikte enkel nog maar over een foto. Deze foto moest vergeleken worden met de profielfoto van ieder kind in het systeem. Indien er een gelijkenis was van meer dan 90%, zou het kind officieel herkend zijn. Om dit tot stand te kunnen brengen heb ik eerst geprobeerd om met Jython een Python applicatie voor gezichtsherkenning te integreren in de Java applicatie. Dit is echter niet gelukt omdat de dependencies niet ingeladen konden worden. Vervolgens heb ik met Azure Cognitive Services gewerkt. Het probleem was hier echter dat deze bibliotheek veel te uitgebreid was om op een voormiddag te begrijpen. Vandaar dat we dit onmogelijk af kregen.\n' + 'Als resultaat bekwamen we een applicatie die kinderen kon tonen in een recycler-view met daarachter nog een pager zodat de werknemer makkelijk de lijst af kan gaan. Eveneens beschikte de applicatie over de mogelijkheid om een foto te nemen. Mits deze foto nog vergeleken kon worden met de foto’s van de kinderen in het systeem, zou onze applicatie behoorlijk volledig zijn.\n' + 'Als ik terugkijk op deze hackathon, vond ik het duidelijk een geslaagde editie. De opgave zelf was uitdagend genoeg om twee dagen mee bezig te zijn. Ook de werkruimte die we ter beschikking hadden was zeer fraai. Het enige minpuntje vond ik persoonlijk het feit dat dit een echte AON hackathon was. Zoals ik kon horen, voelden vele SNB studenten zich uitgesloten, aangezien er bitter weinig SNB taken in de opgave zaten. De SNB studenten van onze groep konden zich echter goed bezig houden met de kostenanalyse van de verschillende gezichtsherkenningssystemen. Dit neemt echter niet weg dat een specifieke SNB taak binnen de hackathon goed ontvangen zou worden.\n' + 'Hetgeen wat ik zeker meeneem na deze hackathon, zijn de verschillende mogelijkheden van gezichtsherkenning die zich momenteel op de markt bevinden. Aangezien AI steeds meer in opmars is, kan dit nog handig zijn voor de toekomst.\n')];
      }

      _createClass(EventService, [{
        key: "getEmpassie",
        value: function getEmpassie() {
          return new _models_event_model__WEBPACK_IMPORTED_MODULE_2__["Event"]('Care-athon', 'Hogeschool PXL met Cegeka, Xplore Group en Corda Campus', [new Date('2020-02-20'), new Date('2020-02-21')], new _models_picture_model__WEBPACK_IMPORTED_MODULE_3__["Picture"]('../../assets/fotos/careathon.jpg', 'Francis Vos'), 26, 'Donderdag twintig februari om negen uur stipt werden alle laatstejaarsstudenten verwacht in de inkomhal van Cegeka. Hier werd namelijk het startschot gegeven van de Care-athon, een initiatief van de hogeschool PXL, de Xplore groep, Corda Campus en Cegeka zelf. Na een korte voorstelling van Francis Vos werd de teamindeling bekend gemaakt. Samen met 1 andere AON student en 2 SNB studenten kon ik met de opdracht van start gaan.\n' + 'De taak was zeer duidelijk geformuleerd, maar niet bepaald eenvoudig. Er moest een applicatie geschreven worden waarmee werknemers van de buitenschoolse opvang makkelijk kinderen kunnen in- en uitchecken met gezichtsherkenning. \n' + 'We begonnen met het schetsen van wireframes. Al snel hadden we een duidelijk beeld van de applicatie voor ogen met  alle minimum aan vereiste requirements. Vervolgens schakelden we over naar het uitschrijven van de applicatie in Android Studio, met als taal Java. Ik nam de taak op me om het overzicht van de kinderen te visualiseren. De andere AON student probeerde de gezichtsherkenning te integreren in de applicatie. Op het einde van de dag was mijn taak afgehandeld maar de andere AON student had nog moeite met het integreren van de gezichtsherkenning.\n' + 'De volgende dag besloot ik om zelf daaraan verder te werken. De applicatie beschikte enkel nog maar over een foto. Deze foto moest vergeleken worden met de profielfoto van ieder kind in het systeem. Indien er een gelijkenis was van meer dan 90%, zou het kind officieel herkend zijn. Om dit tot stand te kunnen brengen heb ik eerst geprobeerd om met Jython een Python applicatie voor gezichtsherkenning te integreren in de Java applicatie. Dit is echter niet gelukt omdat de dependencies niet ingeladen konden worden. Vervolgens heb ik met Azure Cognitive Services gewerkt. Het probleem was hier echter dat deze bibliotheek veel te uitgebreid was om op een voormiddag te begrijpen. Vandaar dat we dit onmogelijk af kregen.\n' + 'Als resultaat bekwamen we een applicatie die kinderen kon tonen in een recycler-view met daarachter nog een pager zodat de werknemer makkelijk de lijst af kan gaan. Eveneens beschikte de applicatie over de mogelijkheid om een foto te nemen. Mits deze foto nog vergeleken kon worden met de foto’s van de kinderen in het systeem, zou onze applicatie behoorlijk volledig zijn.\n' + 'Als ik terugkijk op deze hackathon, vond ik het duidelijk een geslaagde editie. De opgave zelf was uitdagend genoeg om twee dagen mee bezig te zijn. Ook de werkruimte die we ter beschikking hadden was zeer fraai. Het enige minpuntje vond ik persoonlijk het feit dat dit een echte AON hackathon was. Zoals ik kon horen, voelden vele SNB studenten zich uitgesloten, aangezien er bitter weinig SNB taken in de opgave zaten. De SNB studenten van onze groep konden zich echter goed bezig houden met de kostenanalyse van de verschillende gezichtsherkenningssystemen. Dit neemt echter niet weg dat een specifieke SNB taak binnen de hackathon goed ontvangen zou worden.\n' + 'Hetgeen wat ik zeker meeneem na deze hackathon, zijn de verschillende mogelijkheden van gezichtsherkenning die zich momenteel op de markt bevinden. Aangezien AI steeds meer in opmars is, kan dit nog handig zijn voor de toekomst.\n');
        }
      }, {
        key: "getOndernemendEnInnovatief",
        value: function getOndernemendEnInnovatief() {
          return new _models_event_model__WEBPACK_IMPORTED_MODULE_2__["Event"]('De Warmste Hackathon', 'Realdolmen', [new Date('2019-10-11'), new Date('2019-10-12')], new _models_picture_model__WEBPACK_IMPORTED_MODULE_3__["Picture"]('../../assets/fotos/realdolmen_warmste_hackathon_2.jpg', 'Lars Leppens'), 16, 'Ergens midden november kwam Mirco Gijsens, een klasgenoot, met het voorstel om deel te nemen aan de Warmste Hackathon, een initiatief door Realdolmen, een IT bedrijf uit Huizingen. Samen met hem, Lars Leppens en mijn broer Mikail Mercan, besloten we om mee te doen aan dit evenement, onder de groepsnaam “Dev-oeps”. \n' + 'Op vrijdag 11 oktober, na een dag groepswerk voor ons IT-project, vertrokken Lars, Mirco en ik rond half 4 met de trein in Kiewit, waarna we in Hasselt samen met Mikail overstapten op de eerstvolgende trein naar Brussel-Centraal om daar vervolgens deel te nemen aan het voornoemde evenement. \n' + 'Bij aankomst in zaal Odisee rond half 6, kregen we alle 4 een goodiebag en een badge met onze naam op. Aansluitend werden we doorverwezen naar onze eigen tafel, waarop een papier lag met de naam van onze  groep. Hier konden we wachten tot alle deelnemers waren ingecheckt. Op tafel lag eveneens een bruine enveloppe die pas om 6 uur, na de speech van de organisatoren, opengemaakt mocht worden.\n' + 'Vervolgens werd er een video afgespeeld op de projectiemuur. De inhoud was een korte sketch van een van de organisatoren, waar hij op een ludieke manier het doel van de hackathon uitlegde, namelijk: “Maak van onze maatschappij een betere plek”. Eveneens werd er ons verteld hoe we konden inloggen op de website van de warmste hackathon. Hierop bevonden zich verschillende features zoals een privéchat, een groepchat met alle deelnemers, en de mogelijkheid tot het verkrijgen van resources. Deze resources werden heel ruim genomen, het kon gaan over het vragen naar een butler, het bestellen van een pintje, tot het lenen van een VR bril. Deze resources konden gekocht worden met punten, en ieder team had standaard de beschikking over 900 punten. \n' + 'Punten konden verdiend worden door het oplossen van een raadsel, dat elk uur door de administrator in de publieke groepchat werd gegooid, het verslaan van een ander teamlid in een VR battle, en het spelen van blackjack aan de blackjack tafel. Eveneens waren er 2 check ups door de organisatoren, waarmee ook een behoorlijk aantal punten gewonnen konden worden. Aansluitend, na de video, werden in het kort de coaches voorgesteld. Bij deze 4 personen konden we al onze vragen kwijt. Uiteindelijk mochten we de bruine enveloppe openmaken, waarin relevante informatie zat over het evenement, zoals de wifi-code, de opdracht, en de prijzen.\n' + 'Nu was het aan ons. We kregen tot de volgende dag 16:00u de tijd om van de maatschappij een betere plek te maken. We begonnen te brainstormen, wat voor ons allen zeer moeizaam verliep. Daarom woonden we een brainstorm-cursus van 1 uur bij, en bleven vervolgens naar ideeën zoeken tijdens het avondeten (wat gratis aangeboden werd). Dit bracht ons wel op enkele ingevingen, maar na het toetsen bij de lectoren van de brainstorm-cursus, bleken deze toch niet ideaal te zijn. In totaal hebben we 6 uur gebrainstormd voor we tot een consensus kwamen. Het idee was een applicatie die het toelaat dat mensen  kunnen afspreken om samen te komen voor spelavonden, zoals kaartspellen of bordspellen. Dit leek ons een goed idee aangezien er volgens ons een groot doelpubliek is van mensen die vermaak zoeken, omdat er bij hen thuis dikwijls niemand aanwezig is om gezamenlijk iets te ondernemen. We begonnen meteen met het maken van wireframes. Ondertussen hielden we ook een oog op de chat, en hadden we enkele quizvragen correct kunnen beantwoorden. We hadden eveneens onze profielfoto ingesteld, wat nog eens 100 punten extra opleverde. Hierdoor stonden we zelfs een hele tijd op de eerste plaats. Na enkele uren waren de wireframes klaar, en konden we rond 3 uur ‘s nachts beginnen met coderen. We kozen voor een Angular applicatie, met hard gecodeerde data. De nacht zelf hebben we, zo snel als we konden, zoveel mogelijk quizvragen proberen correct op te lossen. De hele nacht hebben we dan ook aan de bovenzijde van de top 10 gestaan. We hielden het echter maar even vol vooraleer we in slaap vielen achter onze computers, en ons zodoende rond 4 uur noodgedwongen verplaatsten naar onze slaapzakken, behalve Mirco, die nog even aan de wireframes wilde werken. Na 3 uur slaap stonden we rond 7 uur ‘s ochtens op om met volle moed verder te coderen. Mirco ging rond dit uur slapen. Na het ontbijt codeerden we zodoende verder, met slechts enkele pauzes tussendoor om wat lucht te gaan scheppen buiten de zaal. Dit leverde ons rond 12 uur de 3de plaats op van alle groepen die meededen aan deze hackathon. De laatste uren schoot iedereen echter plots in gang om zoveel mogelijk quizvragen te beantwoorden. Hierdoor zakten we op enkele uren tijd naar plaats 9. Ons team was echter mentaal helemaal uitgeput, en we konden even geen computer meer zien. De eerste 10 plaatsen moesten eveneens een  Pecha Kucha maken, een stijl van voorstellen waarmee er 20 dias afgespeeld werden op 20 seconden tijd, zonder mogelijkheid om de snelheid van de slides te bepalen. We zijn dan gezamenlijk tot de conclusie gekomen om ons de laatste 2 uur te focussen op de resources, waar we anders als IT’ers nooit mee in contact komen. Zo hebben we onder andere een AR bril kunnen huren, en hebben we uiterst moderne VR brillen kunnen uittesten. Door deze keuzes waren we nog eens 5 plaatsen gezakt, maar hierdoor kregen we wel de kans om technologieën uit te proberen die we anders in het dagdagelijkse leven nooit ter beschikking zouden krijgen\n' + 'Over het algemeen vond ik dit een zeer onduidelijke hackathon. Zo werd ons op het begin verteld dat we “de maatschappij moesten verbeteren”. Er werd helaas niet meegedeeld hoe we te werk moesten gaan. Zo vertelden de lectoren van de brainstorm-cursus ons dat we enkel wireframes moesten hebben. Andere coaches zeiden dan weer dat het vooral om het idee ging, samen met wat simpele code. Er werd ons echter niks verteld over het feit dat we blijkbaar een “business plan” moesten maken, waardoor we bij de 2de check up van de coaches met onze mond vol tanden stonden. Het puntensysteem was ook raar verdeeld. Het maximum aantal punten voor de eerste check up ronde van de coaches stemde overeen met het aantal punten dat verdiend kon worden door 2 quizvragen te beantwoorden. Het was dus compleet mogelijk dat iemand op de eerste plaats stond door enkel te quizzen en VR games te spelen (wat ook het geval was voor een bepaald groepje). Ik vermoed dat, als we een team waren van volharde gokkers en VR gamers, we gerust al blackjackend en VR gamend deze hackathon konden winnen, en dit  zelfs zonder een lijn code te schrijven. Vanaf de 2de dag werd het wel duidelijk dat dit eerder een “SWM-hackathon” was dan de programmeer challenge die wij in gedachten hadden. Wat eveneens vrij raar was, was dat alles gratis was. Er waren gratis hamburgers als avondeten, onbeperkt gratis water, cola, fanta, Leo koeken, fruit, yoghurt enz. Het ontbijt was eveneens kosteloos. Ons team heeft een totaal van 0 euro uitgegeven op de hackathon zelf. Er waren wel deelbare links per groep, waarmee geld ingezameld kon worden, maar het zou me verbazen dat iemand deze op zijn/haar facebook heeft gepost. Ik sta er dan ook terecht van versteld hoe men van dit evenement een winstgevend gebeuren heeft kunnen maken. \n' + 'Alhoewel de hackathon zelf mentaal zeer uitputtend was, kan ik er toch tevreden naar terugkijken, aangezien dit me weer een ervaring rijker maakt. Hetgeen ik dus zeker zal onthouden is de tol van “een nachtje doordoen” bij het coderen en brainstormen. De laatste uren van de hackathon waren we allen duidelijk geen mens meer. Eveneens zal ik zeker aan deze hackathon terugdenken, alvorens ik me nogmaals inschrijf bij een andere codeer challenge zonder specifieke opgave.\n');
        }
      }, {
        key: "getInternationaalSamenNetWerking",
        value: function getInternationaalSamenNetWerking() {
          return new _models_event_model__WEBPACK_IMPORTED_MODULE_2__["Event"]('Studiereis Berlijn', 'Hogeschool PXL', [new Date('2020-02-14'), new Date('2020-02-15'), new Date('2020-02-16'), new Date('2020-02-17'), new Date('2020-02-18')], new _models_picture_model__WEBPACK_IMPORTED_MODULE_3__["Picture"]('../../assets/fotos/berlijn_2.jpg', 'Ilyas Mercan'), 30, 'Vrijdag veertien februari om stipt negen uur ’s ochtends werd ik verwacht aan hogeschool PXL om deel te nemen aan de cultuuruitstap naar Berlijn. Samen met een groep mede junior-collega’s en twee lectoren vertrokken we met een reisbus rechtstreeks richting Berlijn.\n' + 'De hoofdreden van deze reis was om wat cultuur op te snuiven in de stad. Er was eveneens een bezoek gepland aan de Technische Universität van Berlijn, waar we een lezing zouden bijwonen. Deze werd echter tijdens de busrit reeds afgezegd, waardoor we de laatste dag compleet vrij kregen om Berlijn te ontdekken.\n' + 'De eerste dag bestond uit een busrit vertrekkende van de PXL aan de Elfde-Liniestraat in Hasselt, naar het Novum Hotel aan de Bülowstraße in Berlijn. Tijdens deze busrit werden er 2 pauzes voorzien van telkens 45 minuten, zodat alle inzittenden rustig iets konden gaan eten en een bezoek brengen aan het toilet. Rond 7 uur ’s avonds bereikten we onze bestemming. Eens ingecheckt mochten we die avond eender wat doen, zolang we ’s anderendaags om negen uur in de ochtend maar stipt in de lobby stonden. Mirco, Jens, Jonathan en ik hebben van die avond gebruik gemaakt om de Bülowstraße te bezoeken en om daar vervolgens gezellig  iets te eten en te drinken. \n' + 'De volgende dag na het ontbijt stond iedereen te wachten in de lobby voor de eerste culturele uitstap. De trip begon met een busrondleiding langs de prominentste plaatsen van Berlijn, onder begeleiding van een gids die al enkele jaren in Berlijn woonde. Zij liet ons de belangrijkste plaatsen van Berlijn zien, zoals de Alexanderplatz, het Joodse museum, het stadhuis (genaamd het Rotes Rathaus) enzovoort. In de middag kregen we vrije tijd om iets te eten. We werden vervolgens rond 2 uur verwacht aan het Joodse monument. Hier kregen we een rondleiding doorheen dit monument. Vervolgens gingen we richting Brandenburger Tor, dan naar de Gendarmenmarkt en uiteindelijk tot de kathedraal van Berlijn. Verder kregen we vrij de tijd om de avond in te delen hoe we zelf wilden. Ik heb deze avond benut door een bezoek te brengen aan de Franken Bar, een punk bar op ongeveer een half uur van het hotel. Hier was namelijk een meezingavond met de beste punkplaten van oud tot nieuw.\n' + 'Zondag werd ingeluid met een bezoek aan de Stasi gevangenis Hohenschönhausen, waar we werden rondgeleid door een ex-Stasi gevangene. Vervolgens kregen we die middag een begeleide tour doorheen het vliegveld van Tempelhof. Dit was het einde van de geplande activiteiten van zondag. Na het avondmaal met Jens, Mirco, Jonathan en Dries ben ik teruggekeerd richting de Franken Bar, en ben ik vanaf daar het Oost-Berlijnse nachtleven gaan verkennen.\n' + 'De voorlaatste dag mocht vrij ingevuld worden door de studenten zelf. Samen met Jens, Dries en Jonathan heb ik de Berliner Fernsehturm op de Alexanderplatz beklommen. Hierna ben ik met Jens, Mirco en Dries nogmaals verder gewandeld richting Brandenburger Tor en het Joodse monument. Na een goede wandeling zijn we teruggekeerd naar de metro om vervolgens wat uit te rusten op hotel. Als laatste avondactiviteit ben ik naar de Schokoladenbar gegaan, een zelfverklaarde anarchistenbar. Voor 8 euro kon ik een concert bijwonen van Three Marias, met als headliner de Amerikaanse band Magic Shoppe.\n' + 'Uiteindelijk liep onze trip op zijn einde. Dinsdag bestond dan ook grotendeels uit de terugrit richting hogeschool PXL. Na een busrit van ongeveer 8 uur met 3 breaks zijn we met de volledige groep veilig aangekomen aan in Hasselt.\n' + 'De eindbalans van deze uitstap was voor mij uitsluitend positief. Ik heb dan ook veel bijgeleerd over de cultuur van Berlijn, een stad met een rijke geschiedenis die door de jaren veel heeft doorstaan.\n' + 'Bij het terugblikken op deze trip vond ik het een ideaal einde van mijn jaren aan de PXL. De trip zelf was perfect georganiseerd met een harmonieuze afwisseling tussen cultuur en vrije tijd. Berlijn zelf is een stad met vele niche subculturen, waardoor er voor ieder individu wel een activiteit te vinden is. \n' + 'Als reflectie neem ik graag de vers opgedane kennis van Berlijn mee. Alsook zal ik de gezellige avonden in de cocktailbar of de ludieke meezingavonden in de Franken Bar niet snel vergeten.\n');
        }
      }, {
        key: "getMultiEnDisciplinariteit",
        value: function getMultiEnDisciplinariteit() {
          return new _models_event_model__WEBPACK_IMPORTED_MODULE_2__["Event"]('Seminarie: Test-driven development', 'ACA IT-solutions', [new Date('2019-03-27')], new _models_picture_model__WEBPACK_IMPORTED_MODULE_3__["Picture"]('../../assets/fotos/aca_it_tdd.jpg', 'PXL-Digital'), 3, 'Woensdag 27 Maart werden we met 14 PXL’ers verwacht in ACA IT-Solutions te Hasselt voor een seminarie/workshop rond test driven development.\n' + 'Na een korte check of iedereen aanwezig was, werden we om 9 uur, zoals reeds op voorhand was afgesproken, het gebouw in begeleid. Hier werden we ontvangen door 3 medewerkers van ACA-IT. We mochten plaatsnemen in een afzonderlijk lokaal waar we allemaal een notitieboek, een pen en een douche speaker als verwelkomingsgeschenk ontvingen. \n' + 'Daarna kregen we een korte voorstelling en inleiding, waar de opgave van die dag op een originele manier uitgelegd werd. We moesten ons namelijk rond een kanban bord verzamelen waar we verdere uitleg over de opdracht van onze workshop vernamen. \n' + 'In een fictief scenario van een pizzawebsite, zaten enkele bugs verstopt die we er uit moesten halen. Er waren eveneens enkele stories die gedaan moesten worden. \n' + 'Vervolgens mochten we aan de opdracht beginnen. \n' + 'In groepjes van 2 kregen we tot ongeveer 12 uur ’s middags de tijd om te werken aan de bugs en userstories. Yusuf en ik hebben 2 bugs en een user story af kunnen maken. \n' + 'Hierna werd er een “bad mad sad” sessie gegeven, waarmee we via post-its onze mening konden geven over de workshop. \n' + 'Uiteindelijk werden we nog uitgenodigd voor een kleine drink in de bedrijfskantine, waar er nog wat nagepraat werd over het bedrijf en het personeel.\n' + 'Dit was een van de betere seminaries die ik in mijn PXL carrière tot nog toe meegemaakt heb. Voor een keer was het namelijk geen directe bedrijfsreclame, gevolgd door 3 uur aan abstracte concepten waar wij nog niet mee in aanraking gekomen zijn.  De opstelling van de workshop was eveneens een van de grote pluspunten. Die was namelijk op dezelfde manier uitgevoerd zoals het er in een echt project aan toe gaat, maar dan begrijpelijkerwijze wel enorm verkleind natuurlijk. De medewerkers van ACA-IT hebben er zo goed mogelijk voor gezorgd om zulk een situatie na te bootsen, door de sprint planning, kanban bord, functionaliteitstesten enz. \n' + 'Persoonlijk kan ik enkel zeggen dat dit een zeer educatieve ervaring was. En de stageplaatsen die ACA-IT aanbood zal ik eveneens in gedachten houden.\n');
        }
      }]);

      return EventService;
    }();

    EventService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], EventService);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\11700813\Desktop\PXL\alles omtrent I talent\portfolio\ITalentPortfolioIlyasMercan\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map