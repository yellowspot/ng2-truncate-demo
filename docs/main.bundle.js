webpackJsonp(["main"],{

/***/ "./src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_gendir lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container bs-docs-container\">\n  <h1>ng2-truncate demo</h1>\n  <h4><small><a href=\"https://github.com/yellowspot/ng2-truncate\">GitHub Repo</a></small></h4>\n\n  <div class=\"col-md-9\">\n    <div class=\"bs-docs-section\">\n\n      <h3>Character truncation</h3>\n\n      <div class=\"bs-example\">\n        Truncate to 5 characters\n        <p>\n          <code class=\"language-html\" data-lang=\"html\">&lt;span&gt;&#123;<span>&#123;</span> \"123456789\" | truncate : 5  <span>&#125;</span>&#125;&lt;/span&gt;</code>\n        </p>\n      </div>\n      <figure class=\"highlight\">\n        <pre><span>{{ \"123456789\" | truncate : 5 }}</span></pre>\n      </figure>\n\n      <div class=\"bs-example\">\n        Don't truncate when text is short than limit\n        <p>\n          <code class=\"language-html\" data-lang=\"html\">&lt;span&gt;&#123;<span>&#123;</span> \"123456789\" | truncate : 20  <span>&#125;</span>&#125;&lt;/span&gt;</code>\n        </p>\n      </div>\n      <figure class=\"highlight\">\n        <pre><span>{{ \"123456789\" | truncate : 20 }}</span></pre>\n      </figure>\n\n      <div class=\"bs-example\">\n        Change ellipsis characters\n        <p>\n          <code class=\"language-html\" data-lang=\"html\">&lt;span&gt;&#123;<span>&#123;</span> \"123456789\" | truncate : 20 : '.'  <span>&#125;</span>&#125;&lt;/span&gt;</code>\n        </p>\n      </div>\n      <figure class=\"highlight\">\n        <pre><span>{{ \"123456789\" | truncate : 5 : '.' }}</span></pre>\n      </figure>\n\n    </div>\n\n    <div class=\"bs-docs-section\">\n\n      <h3>Words truncation</h3>\n\n      <div class=\"bs-example\">\n        Truncate to 3 words\n        <p>\n          <code class=\"language-html\" data-lang=\"html\">&lt;span&gt;&#123;<span>&#123;</span> \"I need to  truncate on word number 3\" | words : 3  <span>&#125;</span>&#125;&lt;/span&gt;</code>\n        </p>\n      </div>\n      <figure class=\"highlight\">\n        <pre><span>{{ \"I need to  truncate on word number 3\" | words : 3 }}</span></pre>\n      </figure>\n\n      <div class=\"bs-example\">\n        Change ellipsis characters\n        <p>\n          <code class=\"language-html\" data-lang=\"html\">&lt;span&gt;&#123;<span>&#123;</span> \"I need to  truncate on word number 3\" | words : 3 : '.'  <span>&#125;</span>&#125;&lt;/span&gt;</code>\n        </p>\n      </div>\n      <figure class=\"highlight\">\n        <pre><span>{{ \"I need to  truncate on word number 3\" | words : 3 : '.' }}</span></pre>\n      </figure>\n\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'ng2-truncate-demo!!';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'app-root',
        template: __webpack_require__("./src/app/app.component.html"),
        styles: [__webpack_require__("./src/app/app.component.css")]
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var platform_browser_1 = __webpack_require__("./node_modules/@angular/platform-browser/@angular/platform-browser.es5.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
var http_1 = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
var ng_truncate_1 = __webpack_require__("./node_modules/@yellowspot/ng-truncate/dist/index.js");
var app_component_1 = __webpack_require__("./src/app/app.component.ts");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        declarations: [
            app_component_1.AppComponent,
        ],
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            ng_truncate_1.TruncateModule
        ],
        providers: [],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "./src/app/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__("./src/app/app.component.ts"));
__export(__webpack_require__("./src/app/app.module.ts"));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.

exports.environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var platform_browser_dynamic_1 = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var environment_1 = __webpack_require__("./src/environments/environment.ts");
var _1 = __webpack_require__("./src/app/index.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(_1.AppModule);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map