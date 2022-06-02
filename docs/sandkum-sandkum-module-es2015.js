(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sandkum-sandkum-module"],{

/***/ "./src/app/sandkum/sandkum-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/sandkum/sandkum-routing.module.ts ***!
  \***************************************************/
/*! exports provided: SandkumRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SandkumRoutingModule", function() { return SandkumRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _sandkum_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sandkum.component */ "./src/app/sandkum/sandkum.component.ts");





const routes = [{ path: '', component: _sandkum_component__WEBPACK_IMPORTED_MODULE_2__["SandkumComponent"] }, { path: 'page1', loadChildren: () => __webpack_require__.e(/*! import() | page1-page1-module */ "page1-page1-module").then(__webpack_require__.bind(null, /*! ./page1/page1.module */ "./src/app/sandkum/page1/page1.module.ts")).then(m => m.Page1Module) }];
class SandkumRoutingModule {
}
SandkumRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SandkumRoutingModule });
SandkumRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SandkumRoutingModule_Factory(t) { return new (t || SandkumRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SandkumRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SandkumRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/sandkum/sandkum.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sandkum/sandkum.component.ts ***!
  \**********************************************/
/*! exports provided: SandkumComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SandkumComponent", function() { return SandkumComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class SandkumComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
SandkumComponent.ɵfac = function SandkumComponent_Factory(t) { return new (t || SandkumComponent)(); };
SandkumComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SandkumComponent, selectors: [["app-sandkum"]], decls: 2, vars: 0, template: function SandkumComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "sandkum works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NhbmRrdW0vc2FuZGt1bS5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SandkumComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sandkum',
                templateUrl: './sandkum.component.html',
                styleUrls: ['./sandkum.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/sandkum/sandkum.module.ts":
/*!*******************************************!*\
  !*** ./src/app/sandkum/sandkum.module.ts ***!
  \*******************************************/
/*! exports provided: SandkumModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SandkumModule", function() { return SandkumModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _sandkum_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sandkum-routing.module */ "./src/app/sandkum/sandkum-routing.module.ts");
/* harmony import */ var _sandkum_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sandkum.component */ "./src/app/sandkum/sandkum.component.ts");





class SandkumModule {
}
SandkumModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SandkumModule });
SandkumModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SandkumModule_Factory(t) { return new (t || SandkumModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _sandkum_routing_module__WEBPACK_IMPORTED_MODULE_2__["SandkumRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SandkumModule, { declarations: [_sandkum_component__WEBPACK_IMPORTED_MODULE_3__["SandkumComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _sandkum_routing_module__WEBPACK_IMPORTED_MODULE_2__["SandkumRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SandkumModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_sandkum_component__WEBPACK_IMPORTED_MODULE_3__["SandkumComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _sandkum_routing_module__WEBPACK_IMPORTED_MODULE_2__["SandkumRoutingModule"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=sandkum-sandkum-module-es2015.js.map