function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["page2-page2-module"], {
  /***/
  "./src/app/tms/page2/page2-routing.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/tms/page2/page2-routing.module.ts ***!
    \***************************************************/

  /*! exports provided: Page2RoutingModule */

  /***/
  function srcAppTmsPage2Page2RoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Page2RoutingModule", function () {
      return Page2RoutingModule;
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


    var _page2_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./page2.component */
    "./src/app/tms/page2/page2.component.ts");

    var routes = [{
      path: '',
      component: _page2_component__WEBPACK_IMPORTED_MODULE_2__["Page2Component"]
    }];

    var Page2RoutingModule =
    /*#__PURE__*/
    _createClass(function Page2RoutingModule() {
      _classCallCheck(this, Page2RoutingModule);
    });

    Page2RoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: Page2RoutingModule
    });
    Page2RoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function Page2RoutingModule_Factory(t) {
        return new (t || Page2RoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](Page2RoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Page2RoutingModule, [{
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
  "./src/app/tms/page2/page2.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/tms/page2/page2.component.ts ***!
    \**********************************************/

  /*! exports provided: Page2Component */

  /***/
  function srcAppTmsPage2Page2ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Page2Component", function () {
      return Page2Component;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var Page2Component =
    /*#__PURE__*/
    function () {
      function Page2Component() {
        _classCallCheck(this, Page2Component);
      }

      _createClass(Page2Component, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return Page2Component;
    }();

    Page2Component.ɵfac = function Page2Component_Factory(t) {
      return new (t || Page2Component)();
    };

    Page2Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: Page2Component,
      selectors: [["app-page2"]],
      decls: 2,
      vars: 0,
      template: function Page2Component_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "page2 works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rtcy9wYWdlMi9wYWdlMi5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Page2Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-page2',
          templateUrl: './page2.component.html',
          styleUrls: ['./page2.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/tms/page2/page2.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/tms/page2/page2.module.ts ***!
    \*******************************************/

  /*! exports provided: Page2Module */

  /***/
  function srcAppTmsPage2Page2ModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Page2Module", function () {
      return Page2Module;
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


    var _page2_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./page2-routing.module */
    "./src/app/tms/page2/page2-routing.module.ts");
    /* harmony import */


    var _page2_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./page2.component */
    "./src/app/tms/page2/page2.component.ts");

    var Page2Module =
    /*#__PURE__*/
    _createClass(function Page2Module() {
      _classCallCheck(this, Page2Module);
    });

    Page2Module.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: Page2Module
    });
    Page2Module.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function Page2Module_Factory(t) {
        return new (t || Page2Module)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _page2_routing_module__WEBPACK_IMPORTED_MODULE_2__["Page2RoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](Page2Module, {
        declarations: [_page2_component__WEBPACK_IMPORTED_MODULE_3__["Page2Component"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _page2_routing_module__WEBPACK_IMPORTED_MODULE_2__["Page2RoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Page2Module, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_page2_component__WEBPACK_IMPORTED_MODULE_3__["Page2Component"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _page2_routing_module__WEBPACK_IMPORTED_MODULE_2__["Page2RoutingModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=page2-page2-module-es5.js.map