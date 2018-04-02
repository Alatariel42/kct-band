webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about/about.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<div class= \"bg-theme\">\n  <h2 class= \"border3\" style=\"padding-top:2rem;padding-bottom:1rem;\"> About </h2>\n  <div style= \"padding-left:20rem;padding-right:20rem;\">\n    <p>\nOnce upon a time, born on the frozen patio of a local coffee shop, Kaliope and The Castle Talent got together and thought \"hey, let's do a thing.” Dedicated to writing, music, minimalism, and general world improvement, Kaliope and The Castle Talent are a multimedia collage of creativity. They are a Raleigh, North Carolina based indie rock band that dabbles in the genre of Millennial Blues and then some.     </p>\n  </div>\n  <div>\n    <div class= \"bg-theme-3\" style= \"padding-left:20rem;padding-right:20rem;\">\n      <h2 class= \"border2\" style=\"padding-top:2rem;padding-bottom:1rem;\"> Kaliope </h2>\n      <p>\n        Kaliope is one of a kind. Big, bold, and brazen, she spurns decorum for the sake of progress, shuns tradition in hopes of a tomorrow we can be proud of, and sings of a world in which anyone can be anything. Singer-songwriter-boss-ass-bitch and former dragon, she hopes to be the difference she wants to see in the world.\n        Originally from Suffolk, VA, Kaliope, oldest of seven kids, learned discipline and objectivity at an early age. Her realistic approach to real world problems and lack of regard for the status quo has lead her to Raleigh to find what potential lays within.\n      </p>\n    </div>\n    <div class= \"bg-theme\" style= \"padding-left:20rem;padding-right:20rem;\">\n      <h2 class= \"border2\" style=\"padding-top:2rem;padding-bottom:1rem;\"> The Castle Talent </h2>\n      <p>\n        The Castle Talent, a self-proclaimed virtuoso, hopes to spread love and peace through music, writing, and general positivity (sexual included). Singer-songwriter-ex-hick and aspiring granola, he hopes to travel the world and proclaim his love for existing through song.\n        Originally from Salisbury, NC, the Castle Talent hails from an era of reminiscence for classic rock and free spiritedness. Having played music for over a decade, he searches Raleigh for opportunity and inspiration.\n      </p>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-about',
            template: __webpack_require__("./src/app/about/about.component.html"),
            styles: [__webpack_require__("./src/app/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/all-pictures.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PICS; });
var PICS = [
    { url: " ../assets/band_pic_0.jpg ", alt: "The Castle Talent playing the ukelele on a bridge while Kaliope listens and looks at the ground", caption: "we play together" },
    { url: " ../assets/band_pic_1.jpg ", alt: "stuff", caption: " City Looking " },
    { url: " ../assets/band_pic_2.jpg ", alt: "stuff", caption: " Down the Road " },
    { url: " ../assets/k_pic_0.jpg ", alt: "stuff", caption: " look down scold " },
    { url: " ../assets/k_pic_1.jpg ", alt: "stuff", caption: " look down smile " },
    { url: " ../assets/ct_pic_0.jpg ", alt: "stuff", caption: " one face " },
    { url: " ../assets/band_pic_3.jpg ", alt: "stuff", caption: " cool " }
];


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__about_about_component__ = __webpack_require__("./src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__music_music_component__ = __webpack_require__("./src/app/music/music.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__updates_updates_component__ = __webpack_require__("./src/app/updates/updates.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__photos_photos_component__ = __webpack_require__("./src/app/photos/photos.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shop_shop_component__ = __webpack_require__("./src/app/shop/shop.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__contact_contact_component__ = __webpack_require__("./src/app/contact/contact.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */] },
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_3__about_about_component__["a" /* AboutComponent */] },
    { path: 'music', component: __WEBPACK_IMPORTED_MODULE_4__music_music_component__["a" /* MusicComponent */] },
    { path: 'updates', component: __WEBPACK_IMPORTED_MODULE_5__updates_updates_component__["a" /* UpdatesComponent */] },
    { path: 'photos', component: __WEBPACK_IMPORTED_MODULE_6__photos_photos_component__["a" /* PhotosComponent */] },
    { path: 'shop', component: __WEBPACK_IMPORTED_MODULE_7__shop_shop_component__["a" /* ShopComponent */] },
    { path: 'contact', component: __WEBPACK_IMPORTED_MODULE_8__contact_contact_component__["a" /* ContactComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<router-outlet></router-outlet>\n<app-copyright></app-copyright>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Kaliope and the Castle Talent';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__navbar_navbar_component__ = __webpack_require__("./src/app/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__about_about_component__ = __webpack_require__("./src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__music_music_component__ = __webpack_require__("./src/app/music/music.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__updates_updates_component__ = __webpack_require__("./src/app/updates/updates.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__photos_photos_component__ = __webpack_require__("./src/app/photos/photos.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shop_shop_component__ = __webpack_require__("./src/app/shop/shop.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__contact_contact_component__ = __webpack_require__("./src/app/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ng4_twitter_timeline_lib_index__ = __webpack_require__("./node_modules/ng4-twitter-timeline/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__copyright_copyright_component__ = __webpack_require__("./src/app/copyright/copyright.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_3__navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_5__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_6__about_about_component__["a" /* AboutComponent */],
                __WEBPACK_IMPORTED_MODULE_7__music_music_component__["a" /* MusicComponent */],
                __WEBPACK_IMPORTED_MODULE_8__updates_updates_component__["a" /* UpdatesComponent */],
                __WEBPACK_IMPORTED_MODULE_9__photos_photos_component__["a" /* PhotosComponent */],
                __WEBPACK_IMPORTED_MODULE_10__shop_shop_component__["a" /* ShopComponent */],
                __WEBPACK_IMPORTED_MODULE_11__contact_contact_component__["a" /* ContactComponent */],
                __WEBPACK_IMPORTED_MODULE_13__copyright_copyright_component__["a" /* CopyrightComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_12_ng4_twitter_timeline_lib_index__["b" /* Ng4TwitterTimelineModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/contact/contact.component.css":
/***/ (function(module, exports) {

module.exports = "\n.abt {\n  text-align: center;\n  font-size: 24px;\n}\n\n.align {\n  padding-top: 2rem;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n\n.fb {\n\n}\n\n.ig {\n\n}\n\n.tumblr {\n\n}\n\n.scl {\n\n}\n\n.twitter {\n\n}\n\n.yt {\n\n}\n\n.feature-right {\n  float:right;\n  width:45%;\n  padding-left:3rem;\n  padding-right:3rem;\n  padding-bottom:5rem;\n  margin-right:3rem;\n  background-color:#FFFFFF;\n  -webkit-box-shadow: 0 4px 6px rgba(0,0,0,.5);\n          box-shadow: 0 4px 6px rgba(0,0,0,.5);\n  padding-top: 1.25rem;\n  margin-bottom:3rem;\n  margin-left:1.5rem;\n}\n\n.feature-left {\n  float:left;\n  width:45%;\n  margin-left:3rem;\n  padding-left:3rem;\n  padding-right:3rem;\n  padding-bottom:5rem;\n  background-color:#FFFFFF;\n  -webkit-box-shadow: 0 4px 6px rgba(0,0,0,.5);\n          box-shadow: 0 4px 6px rgba(0,0,0,.5);\n  padding-top: 1.25rem;\n  margin-bottom:3rem;\n  margin-right:1.5rem;\n}\n\n.card {\n  margin-left:7rem;\n  margin-right:7rem;\n  margin-bottom:3rem;\n  padding-bottom:2rem;\n  background-color:#FFFFFF;\n  -webkit-box-shadow: 0 4px 6px rgba(0,0,0,.5);\n          box-shadow: 0 4px 6px rgba(0,0,0,.5);\n}\n"

/***/ }),

/***/ "./src/app/contact/contact.component.html":
/***/ (function(module, exports) {

module.exports = "<div class= \"abt bg-theme\">\n  <div class=\"align\">\n    <div class=\"feature-left\">\n      <h2 class=\"border2\" style= \"padding-bottom:0.5rem;margin-bottom:1.5rem;\"> Upcoming </h2>\n      <div class= \"embed-responsive embed-responsive-16by9 border border-secondary\">\n        <iframe class=\"embed-responsive-item\" src=\"https://calendar.google.com/calendar/embed?src=kaliopeandthecastletalent%40gmail.com&ctz=America%2FNew_York\" style=\"border: 0\" frameborder=\"0\"></iframe>\n      </div>\n    </div>\n    <div class=\"feature-right\">\n      <h2 class=\"border2\" style= \"padding-bottom:0.5rem;margin-bottom:1rem;\"> Social Media </h2>\n      <div >\n        <div class=\"d-flex flex-row justify-content-around\" >\n          <div class= \"scl p-2\">\n            <a href= \"https://soundcloud.com/user-13887748\"> <img src= \"assets/scl_logo.png\" alt= \"Kaliope and the Castle Talent Soundcloud\" height= \"100rem\" width=\"100rem\"> </a>\n          </div>\n          <div class= \"tumblr p-2\">\n            <a href= \"https://kandthectband.tumblr.com/\"> <img src= \"assets/tumblr_logo.png\" alt=\"Kaliope and the Castle Talent Tumblr\" height=\"100rem\" width=\"100rem\"> </a>\n          </div>\n          <div class= \"yt p-2\">\n            <a href= \"https://www.youtube.com/channel/UCpPs98k3PnhgFIxRv5SCESA?view_as=subscriber\"> <img src= \"assets/yt_logo.png\" alt= \"Kaliope and the Castle Talent Youtube\" height= \"100rem\" width=\"100rem\"> </a>\n          </div>\n        </div>\n        <div class=\"d-flex flex-row justify-content-around\" style=\"margin-top:6rem;\">\n          <div class= \"twitter p-2\">\n            <a href= \"https://twitter.com/KandtheCT_band\"> <img src= \"assets/twitter_logo.png\" alt= \"Kaliope and the Castle Talent Twitter\" height= \"100rem\" width=\"100rem\"> </a>\n          </div>\n          <div class= \"ig p-2\">\n            <a href= \"https://www.instagram.com/kandthect_band_1/\"> <img src= \"assets/ig_black_logo.png\" alt=\"Kaliope and the Castle Talent Instagram\" height=\"100rem\" width=\"100rem\"> </a>\n          </div>\n          <div class= \"fb p-2\">\n            <a href= \"https://www.facebook.com/Kaliopeandthecastletalent/\" > <img src= \"assets/facebook_logo.png\" alt=\"Kaliope and the Castle Talent Facebook\" height= \"100rem\" width=\"100rem\"> </a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"contact card\">\n    <h2 class=\"border2\" style= \"padding-bottom:0.5rem;margin-bottom:1rem;padding-top:1rem;\"> Contact Us </h2>\n    Email: kaliopeandthecastletalent@gmail.com | Kali: kalifillhart@gmail.com | Cody: rcearnha@gmail.com\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactComponent = (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-contact',
            template: __webpack_require__("./src/app/contact/contact.component.html"),
            styles: [__webpack_require__("./src/app/contact/contact.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/copyright/copyright.component.css":
/***/ (function(module, exports) {

module.exports = ".footer {\n  background-color: #f8f9fa;\n}\n"

/***/ }),

/***/ "./src/app/copyright/copyright.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"footer\">\n  \n</div>\n"

/***/ }),

/***/ "./src/app/copyright/copyright.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CopyrightComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CopyrightComponent = (function () {
    function CopyrightComponent() {
    }
    CopyrightComponent.prototype.ngOnInit = function () {
    };
    CopyrightComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-copyright',
            template: __webpack_require__("./src/app/copyright/copyright.component.html"),
            styles: [__webpack_require__("./src/app/copyright/copyright.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CopyrightComponent);
    return CopyrightComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/***/ (function(module, exports) {

module.exports = ".feature-left {\n  float:left;\n  width:45%;\n  margin-left:3rem;\n  padding-left:3rem;\n  padding-right:3rem;\n  padding-bottom:5rem;\n  background-color:#FFFFFF;\n  -webkit-box-shadow: 0 4px 6px rgba(0,0,0,.5);\n          box-shadow: 0 4px 6px rgba(0,0,0,.5);\n  padding-top: 1.25rem;\n  margin-bottom:3rem;\n}\n\n.feature-right {\n  float:right;\n  width:45%;\n  padding-left:3rem;\n  padding-right:3rem;\n  padding-bottom:5rem;\n  margin-right:3rem;\n  background-color:#FFFFFF;\n  -webkit-box-shadow: 0 4px 6px rgba(0,0,0,.5);\n          box-shadow: 0 4px 6px rgba(0,0,0,.5);\n  padding-top: 1.25rem;\n  margin-bottom:3rem;\n}\n\n.card {\n  margin-top:2rem;\n  margin-left:7rem;\n  margin-right:7rem;\n  margin-bottom:3rem;\n  background-color:#FFFFFF;\n  -webkit-box-shadow: 0 4px 6px rgba(0,0,0,.5);\n          box-shadow: 0 4px 6px rgba(0,0,0,.5);\n}\n"

/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class= \"home bg-theme\">\n  <div class= \"about card\">\n    <h1 class= \"border2\" style= \"padding-bottom:1rem;\"> Kaliope and the Castle Talent </h1>\n  <p style=\"padding-left:10rem;padding-right:10rem;padding-bottom:1rem;padding-top:1rem;\">\nWelcome to our website! Take a seat, make yourselves at home. We are a one stop shop for all your entertainment needs.\n   </p>\n  </div>\n  <div class= \"band-art\">\n  </div>\n  <div class= \"feature\">\n    <br>\n    <div class=\"feature-left\">\n      <h2 class=\"border2\"style= \"padding-bottom:0.5rem;margin-bottom:1.5rem;\" > Featured </h2>\n      <div class= \"embed-responsive embed-responsive-16by9\">\n        <iframe class=\"embed-responsive-item\" width=\"600\" height=\"350\" src=\"https://www.youtube.com/embed/qSLQqPZrCcM\" frameborder=\"0\" gesture=\"media\" allow=\"encrypted-media\" allowfullscreen></iframe>\n      </div>\n    </div>\n    <div class=\"feature-right\">\n      <h2 class= \"border2\" style= \"padding-bottom:0.5rem; margin-bottom:1.5rem;\"> Upcoming </h2>\n      <div class= \"embed-responsive embed-responsive-16by9 border border-secondary\">\n        <iframe class=\"embed-responsive-item\" src=\"https://calendar.google.com/calendar/embed?src=kaliopeandthecastletalent%40gmail.com&ctz=America%2FNew_York\" style=\"border: 0\" width=\"600\" height=\"350\" frameborder=\"0\" scrolling=\"no\"></iframe>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/home/home.component.html"),
            styles: [__webpack_require__("./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/music/music.component.css":
/***/ (function(module, exports) {

module.exports = ".navi {\n  color:#FFFFFF;\n}\n"

/***/ }),

/***/ "./src/app/music/music.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"bg-theme\" >\n  <div style=\" padding-bottom: 1rem;\">\n    <ul class=\"nav justify-content-center\">\n    <li>\n      <a style=\"color:#000000;\" class=\"nav-link\" href=\"music#originals\">Originals</a>\n    </li>\n    <li class=\"nav-item\">\n      <a style=\"color:#000000;\" class=\"nav-link\" href=\"music#covers\">Covers</a>\n    </li>\n    <li class=\"nav-item\">\n      <a style=\"color:#000000;\" class=\"nav-link\" href=\"music#live\">Live</a>\n    </li>\n  </ul>\n  </div>\n  <div id=\"originals\">\n    <iframe width=\"33.33%\" height=\"166\" scrolling=\"no\" frameborder=\"no\" src=\"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/394422486&color=%235c6c74&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true\"></iframe>\n    <iframe width=\"33.33%\" height=\"166\" scrolling=\"no\" frameborder=\"no\" src=\"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/394038621&color=%235c6c74&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true\"></iframe>\n  </div>\n  <div id=\"covers\">\n    <iframe width=\"33.33%\" height=\"166\" scrolling=\"no\" frameborder=\"no\" src=\"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/372286058&amp;color=%235c6c74&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true\"></iframe>\n    <iframe width=\"33.33%\" height=\"166\" scrolling=\"no\" frameborder=\"no\" src=\"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/394404735&color=%235c6c74&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true\"></iframe>\n    <iframe width=\"33.33%\" height=\"166\" scrolling=\"no\" frameborder=\"no\" src=\"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/394502199&color=%235c6c74&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true\"></iframe>\n    <iframe width=\"33.33%\" height=\"166\" scrolling=\"no\" frameborder=\"no\" src=\"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/414702681&color=%235c6c74&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true\"></iframe>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/music/music.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MusicComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MusicComponent = (function () {
    function MusicComponent() {
    }
    MusicComponent.prototype.ngOnInit = function () {
    };
    MusicComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-music',
            template: __webpack_require__("./src/app/music/music.component.html"),
            styles: [__webpack_require__("./src/app/music/music.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MusicComponent);
    return MusicComponent;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-light bg-light justify-content-center\">\n  <div >\n    <ul class= \"navbar-nav\">\n      <li class= \"nav-item\">\n        <a class = \"nav-link text-dark\" routerLink= \"/about\"> About </a>\n      </li>\n      <li class= \"nav-item\" >\n        <a class = \"nav-link text-dark\" routerLink= \"/music\"> Music </a>\n      </li>\n      <li class= \"nav-item\" >\n        <a class = \"nav-link text-dark\" routerLink= \"/updates\"> Updates </a>\n      </li>\n      <li class= \"nav-item\" >\n        <a class= \"nav-link\" routerLink= \"\"> <img src=\"../../assets/logo.jpg\" width= \"30\" height= \"30\" alt=\"Kaliope and the Castle Talent logo\"> </a>\n      </li>\n      <li class= \"nav-item\" >\n        <a class = \"nav-link text-dark\" routerLink=\"/photos\"> Photos </a>\n      </li>\n      <li class= \"nav-item\" >\n        <a class = \"nav-link text-dark\" routerLink=\"/shop\"> Shop </a>\n      </li>\n      <li class= \"nav-item\" >\n        <a class = \"nav-link text-dark\" routerLink=\"/contact\"> Follow Us </a>\n      </li>\n    </ul>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-navbar',
            template: __webpack_require__("./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__("./src/app/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/photos/photos.component.css":
/***/ (function(module, exports) {

module.exports = ".images ul {\n  list-style-type: none;\n}\n.pic-style {\n  padding-top:2rem;\n  padding-left:2.5rem;\n  padding-right:2.5rem;\n  padding-bottom:4rem;\n  float:left;\n  -webkit-box-shadow: 0 4px 6px rgba(0,0,0,.3);\n          box-shadow: 0 4px 6px rgba(0,0,0,.3);\n  width:-webkit-min-content;\n  width:-moz-min-content;\n  width:min-content;\n  margin-left:1rem;\n  margin-right:1rem;\n  margin-top:1rem;\n}\n.caption {\n  font-family: courier;\n  max-height: 2rem;\n}\n.images {\n  background-color: #F0F5F5;\n  color: #000000;\n}\n"

/***/ }),

/***/ "./src/app/photos/photos.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\" bg-theme-3 images\">\n  <div>\n    <ul>\n      <li *ngFor=\"let pic of pics\"\n      [class.selected]=\"pic === selectedPic\"\n      (click)=\"onSelect(pic)\">\n        <figure class=\"bg-theme-3 pic-style\">\n          <img src=\"{{pic.url}}\" alt=\"{{pic.alt}}\" height=\"200\">\n          <figcaption class=\"caption\">\n            {{pic.caption}}\n          </figcaption>\n        </figure>\n      </li>\n    </ul>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/photos/photos.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhotosComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__all_pictures__ = __webpack_require__("./src/app/all-pictures.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PhotosComponent = (function () {
    function PhotosComponent() {
        this.pics = __WEBPACK_IMPORTED_MODULE_1__all_pictures__["a" /* PICS */];
    }
    PhotosComponent.prototype.ngOnInit = function () {
    };
    PhotosComponent.prototype.onSelect = function (pic) {
        this.selectedPic = pic;
    };
    PhotosComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-photos',
            template: __webpack_require__("./src/app/photos/photos.component.html"),
            styles: [__webpack_require__("./src/app/photos/photos.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PhotosComponent);
    return PhotosComponent;
}());



/***/ }),

/***/ "./src/app/shop/shop.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shop/shop.component.html":
/***/ (function(module, exports) {

module.exports = "<div class= \"bg-theme\" style=\"padding-top: 2rem;\">\n  <h2> Shop </h2>\n  <p> The story of any band begins humbly with them begging for merch sales. Ours is no different. Once we have merch, we’ll commence to begging. </p>\n</div>\n"

/***/ }),

/***/ "./src/app/shop/shop.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShopComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ShopComponent = (function () {
    function ShopComponent() {
    }
    ShopComponent.prototype.ngOnInit = function () {
    };
    ShopComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-shop',
            template: __webpack_require__("./src/app/shop/shop.component.html"),
            styles: [__webpack_require__("./src/app/shop/shop.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ShopComponent);
    return ShopComponent;
}());



/***/ }),

/***/ "./src/app/updates/updates.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/updates/updates.component.html":
/***/ (function(module, exports) {

module.exports = "<div class= \"bg-theme\" style=\"width:100%;\">\n  <div style=\"margin:auto;width:80%;\">\n    <ng4-twitter-timeline [dataSrc]=\"{sourceType: 'profile',screenName: 'KandtheCT_band'}\" [opts]=\"{tweetLimit: 10}\"></ng4-twitter-timeline>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/updates/updates.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpdatesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng4_twitter_timeline_lib_index__ = __webpack_require__("./node_modules/ng4-twitter-timeline/lib/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UpdatesComponent = (function () {
    function UpdatesComponent(ng4TwitterTimelineService) {
        this.ng4TwitterTimelineService = ng4TwitterTimelineService;
    }
    UpdatesComponent.prototype.ngOnInit = function () {
    };
    UpdatesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-updates',
            template: __webpack_require__("./src/app/updates/updates.component.html"),
            styles: [__webpack_require__("./src/app/updates/updates.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ng4_twitter_timeline_lib_index__["c" /* Ng4TwitterTimelineService */]])
    ], UpdatesComponent);
    return UpdatesComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map