function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["page1-page1-module"], {
  /***/
  "./src/app/sandkum/page1/page1-routing.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/sandkum/page1/page1-routing.module.ts ***!
    \*******************************************************/

  /*! exports provided: Page1RoutingModule */

  /***/
  function srcAppSandkumPage1Page1RoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Page1RoutingModule", function () {
      return Page1RoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _page1_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./page1.component */
    "./src/app/sandkum/page1/page1.component.ts");

    var routes = [{
      path: '',
      component: _page1_component__WEBPACK_IMPORTED_MODULE_2__["Page1Component"]
    }];

    var Page1RoutingModule =
    /*#__PURE__*/
    _createClass(function Page1RoutingModule() {
      _classCallCheck(this, Page1RoutingModule);
    });

    Page1RoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
      type: Page1RoutingModule
    });
    Page1RoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
      factory: function Page1RoutingModule_Factory(t) {
        return new (t || Page1RoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](Page1RoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](Page1RoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/sandkum/page1/page1.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/sandkum/page1/page1.component.ts ***!
    \**************************************************/

  /*! exports provided: Page1Component */

  /***/
  function srcAppSandkumPage1Page1ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Page1Component", function () {
      return Page1Component;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var Page1Component =
    /*#__PURE__*/
    function () {
      function Page1Component() {
        _classCallCheck(this, Page1Component);
      }

      _createClass(Page1Component, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return Page1Component;
    }();

    Page1Component.??fac = function Page1Component_Factory(t) {
      return new (t || Page1Component)();
    };

    Page1Component.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: Page1Component,
      selectors: [["app-page1"]],
      decls: 10,
      vars: 0,
      template: function Page1Component_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "page1 works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "page1 works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "page1 works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "page1 works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "page1 works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NhbmRrdW0vcGFnZTEvcGFnZTEuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](Page1Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-page1',
          templateUrl: './page1.component.html',
          styleUrls: ['./page1.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/sandkum/page1/page1.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/sandkum/page1/page1.module.ts ***!
    \***********************************************/

  /*! exports provided: Page1Module */

  /***/
  function srcAppSandkumPage1Page1ModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Page1Module", function () {
      return Page1Module;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _page1_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./page1-routing.module */
    "./src/app/sandkum/page1/page1-routing.module.ts");
    /* harmony import */


    var _page1_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./page1.component */
    "./src/app/sandkum/page1/page1.component.ts");

    var Page1Module =
    /*#__PURE__*/
    _createClass(function Page1Module() {
      _classCallCheck(this, Page1Module);
    });

    Page1Module.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
      type: Page1Module
    });
    Page1Module.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
      factory: function Page1Module_Factory(t) {
        return new (t || Page1Module)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _page1_routing_module__WEBPACK_IMPORTED_MODULE_2__["Page1RoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](Page1Module, {
        declarations: [_page1_component__WEBPACK_IMPORTED_MODULE_3__["Page1Component"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _page1_routing_module__WEBPACK_IMPORTED_MODULE_2__["Page1RoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](Page1Module, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_page1_component__WEBPACK_IMPORTED_MODULE_3__["Page1Component"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _page1_routing_module__WEBPACK_IMPORTED_MODULE_2__["Page1RoutingModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/tms/page1/page1-routing.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/tms/page1/page1-routing.module.ts ***!
    \***************************************************/

  /*! exports provided: Page1RoutingModule */

  /***/
  function srcAppTmsPage1Page1RoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Page1RoutingModule", function () {
      return Page1RoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _page1_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./page1.component */
    "./src/app/tms/page1/page1.component.ts");

    var routes = [{
      path: '',
      component: _page1_component__WEBPACK_IMPORTED_MODULE_2__["Page1Component"]
    }];

    var Page1RoutingModule =
    /*#__PURE__*/
    _createClass(function Page1RoutingModule() {
      _classCallCheck(this, Page1RoutingModule);
    });

    Page1RoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
      type: Page1RoutingModule
    });
    Page1RoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
      factory: function Page1RoutingModule_Factory(t) {
        return new (t || Page1RoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](Page1RoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](Page1RoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/tms/page1/page1.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/tms/page1/page1.component.ts ***!
    \**********************************************/

  /*! exports provided: Page1Component */

  /***/
  function srcAppTmsPage1Page1ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Page1Component", function () {
      return Page1Component;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var Page1Component =
    /*#__PURE__*/
    function () {
      function Page1Component() {
        _classCallCheck(this, Page1Component);
      }

      _createClass(Page1Component, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return Page1Component;
    }();

    Page1Component.??fac = function Page1Component_Factory(t) {
      return new (t || Page1Component)();
    };

    Page1Component.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: Page1Component,
      selectors: [["app-page1"]],
      decls: 10,
      vars: 0,
      template: function Page1Component_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "123123123 works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "ADNAN");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "ADNAN");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "ADNAN");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "ADNAN");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rtcy9wYWdlMS9wYWdlMS5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](Page1Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-page1',
          templateUrl: './page1.component.html',
          styleUrls: ['./page1.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/tms/page1/page1.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/tms/page1/page1.module.ts ***!
    \*******************************************/

  /*! exports provided: Page1Module */

  /***/
  function srcAppTmsPage1Page1ModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Page1Module", function () {
      return Page1Module;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _page1_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./page1-routing.module */
    "./src/app/tms/page1/page1-routing.module.ts");

    var Page1Module =
    /*#__PURE__*/
    _createClass(function Page1Module() {
      _classCallCheck(this, Page1Module);
    });

    Page1Module.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
      type: Page1Module
    });
    Page1Module.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
      factory: function Page1Module_Factory(t) {
        return new (t || Page1Module)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _page1_routing_module__WEBPACK_IMPORTED_MODULE_2__["Page1RoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](Page1Module, {
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _page1_routing_module__WEBPACK_IMPORTED_MODULE_2__["Page1RoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](Page1Module, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _page1_routing_module__WEBPACK_IMPORTED_MODULE_2__["Page1RoutingModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=page1-page1-module-es5.js.map