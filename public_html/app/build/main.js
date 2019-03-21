webpackJsonp([0],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InstrucoesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__escolha_escolha__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sobrepistachei_sobrepistachei__ = __webpack_require__(102);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var InstrucoesPage = /** @class */ (function () {
    function InstrucoesPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.starts = [false, false, false, false, false, false];
        this.start = false;
    }
    ;
    InstrucoesPage.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () { return _this.starts[0] = true; }, 1000);
        setTimeout(function () { return _this.starts[1] = true; }, 7200);
        setTimeout(function () { return _this.starts[2] = true; }, 10000);
        setTimeout(function () { return _this.starts[3] = true; }, 15600);
        setTimeout(function () { return _this.starts[4] = true; }, 19800);
        setTimeout(function () { return _this.starts[5] = true; }, 27100);
    };
    InstrucoesPage.prototype.goEscolhaPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__escolha_escolha__["a" /* EscolhaPage */], {}, { animate: true, animation: 'pingu', direction: 'forward' });
    };
    ;
    InstrucoesPage.prototype.goSobrePistacheiPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__sobrepistachei_sobrepistachei__["a" /* SobrePistacheiPage */], {}, { animate: true, animation: 'pingu', direction: 'forward' });
    };
    ;
    InstrucoesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-instrucoes',template:/*ion-inline-start:"/home/caio/Pistachei/projetoPistache/app/src/pages/intrucoes/instrucoes.html"*/'<ion-header no-border>\n  <ion-navbar color="primary">\n      <ion-buttons left>\n          <button ion-button icon-only (click)="navCtrl.pop({animate: true, animation:\'pingu\', direction: \'back\'});" class="button-navbar">\n              <ion-icon name="arrow-back"></ion-icon>\n          </button>\n      </ion-buttons>\n      <ion-title text-center>\n        <img class="logo-navbar" src="assets/img/Pistachei-logo-transparente.png" />\n      </ion-title>\n      <ion-buttons right>\n        <button ion-button outline (click)="goSobrePistacheiPage();" class="button-navbar bar-button-round">\n            &nbsp;<ion-icon name="help"></ion-icon>&nbsp;\n        </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content class="bg">\n    <ion-grid justify-content-around class="total">\n      <ion-row class="all-messages center-row">\n        <ion-col col-11 class="container">\n            <div class="message" *ngIf="starts[0]">\n              <span class="message-content" typingAnimation [typeSpeed]="50" [condition]="starts[0]" [startDelay]="0" [hideCursorOnComplete]="true">\n                Vamos te ajudar a encontrar o smartphone que mais combina com seu cotidiano!\n              </span>\n            </div>\n            <br />\n            <div class="message" *ngIf="starts[1]"> \n              <span class="message-content" typingAnimation [typeSpeed]="50" [condition]="starts[1]" [startDelay]="1000" [hideCursorOnComplete]="true">\n                Quer saber como?\n              </span>\n            </div>\n            <br />\n            <div class="message" *ngIf="starts[2]"> \n              <div class="message-content">\n              <span typingAnimation [typeSpeed]="50" [condition]="starts[2]" [startDelay]="1000" [hideCursorOnComplete]="true">\n                Você irá fazer comparações de acordo com o que é mais útil e importante,\n              </span>\n              <span typingAnimation [typeSpeed]="50" [condition]="starts[3]" [startDelay]="0" [hideCursorOnComplete]="true">\n                  além de colocar o quanto deseja pagar no smartphone.\n              </span>\n              </div>\n            </div>\n            <br />\n            <div class="message" *ngIf="starts[4]"> \n              <span class="message-content" typingAnimation [typeSpeed]="50" [condition]="starts[4]" [startDelay]="1000" [hideCursorOnComplete]="true">\n                As comparações são entre câmera, tela, desempenho, bateria e armazenamento interno.\n              </span>\n            </div>\n            <br />\n            <div class="message" *ngIf="starts[5]"> \n              <span class="message-content" typingAnimation [typeSpeed]="50" [condition]="starts[5]" [startDelay]="1000" [hideCursorOnComplete]="false">\n               A partir desses dados, iremos mostrar os smartphones que mais combinam com você! :)\n              </span>\n            </div>\n          </ion-col>\n      </ion-row>\n\n      <ion-row text-center>\n        <ion-col>\n          <div class="footer">\n            <button ion-button color="dark" (click)="goEscolhaPage();" text-center large round>Entendi! </button>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-content>\n'/*ion-inline-end:"/home/caio/Pistachei/projetoPistache/app/src/pages/intrucoes/instrucoes.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["i" /* NavController */]])
    ], InstrucoesPage);
    return InstrucoesPage;
}());

//# sourceMappingURL=instrucoes.js.map

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EscolhaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__melhorcelular_melhorcelular__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sobrepistachei_sobrepistachei__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(200);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var EscolhaPage = /** @class */ (function () {
    function EscolhaPage(navCtrl, formBuilder, http) {
        this.navCtrl = navCtrl;
        this.formBuilder = formBuilder;
        this.http = http;
        this.dados = this.formBuilder.group({
            precoMax: [1000],
            camera: [1],
            desempenho: [1],
            tela: [1],
            bateria: [1],
            armazenamento: [1]
        });
    }
    EscolhaPage.prototype.goMelhorCelularPage = function () {
        var _this = this;
        var httpData = new FormData();
        httpData.append('precoMax', this.dados.controls.precoMax.value);
        httpData.append('camera', this.dados.controls.camera.value);
        httpData.append('desempenho', this.dados.controls.desempenho.value);
        httpData.append('tela', this.dados.controls.tela.value);
        httpData.append('bateria', this.dados.controls.bateria.value);
        httpData.append('armazenamento', this.dados.controls.armazenamento.value);
        this.http.post('https://mateusbarros.pythonanywhere.com/v2', httpData).subscribe(function (data) {
            if (data['resultado']) {
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__melhorcelular_melhorcelular__["a" /* MelhorCelularPage */], { resultado: data['resultado'] }, { animate: true, animation: 'pingu', direction: 'forward' });
            }
        }, function (err) {
            console.log(err);
        });
    };
    ;
    EscolhaPage.prototype.goSobrePistacheiPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__sobrepistachei_sobrepistachei__["a" /* SobrePistacheiPage */], {}, { animate: true, animation: 'pingu', direction: 'forward' });
    };
    ;
    EscolhaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-escolha',template:/*ion-inline-start:"/home/caio/Pistachei/projetoPistache/app/src/pages/escolha/escolha.html"*/'<ion-header>\n  <ion-navbar color="primary">\n      <ion-buttons left>\n          <button ion-button icon-only (click)="navCtrl.pop({animate: true, animation:\'pingu\', direction: \'back\'});" class="button-navbar">\n              <ion-icon name="arrow-back"></ion-icon>\n          </button>\n      </ion-buttons>\n      <ion-title text-center>\n        <img class="logo-navbar" src="assets/img/Pistachei-logo-transparente.png" />\n      </ion-title>\n      <ion-buttons right>\n        <button ion-button outline (click)="goSobrePistacheiPage();" class="button-navbar bar-button-round">\n            &nbsp;<ion-icon name="help"></ion-icon>&nbsp;\n        </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <form (ngSubmit)="goMelhorCelularPage()" method="GET">\n    <ion-grid col-12 col-sm-10 col-md-8 col-xl-6>\n      <ion-row class="row-range">\n        <ion-item style="background: transparent" text-wrap text-center no-lines>\n            <ion-label>\n                <h1 ion-text text-center color="dark">Ajuste de acordo com sua preferência.</h1>\n            </ion-label>\n        </ion-item>\n      </ion-row>\n      <ion-row class="row-range">\n        <ion-item style="background: transparent" text-wrap text-center no-lines>\n            <ion-label>\n                Valor maximo:\n            </ion-label>\n            <ion-input type="number" min="1" step="any" [formControl]="dados.controls[\'precoMax\']" name="valorMax"></ion-input>\n        </ion-item>\n      </ion-row>\n      <ion-row class="row-range">\n        <ion-item style="background: transparent" no-lines>\n            <ion-range [formControl]="dados.controls[\'camera\']"  name="notaCamera" min="1" max="5" step="1" snaps="true" color="gray">\n              <ion-icon range-left name="camera" class="icons_camera" tooltip="Camera" navTooltip color="gray"></ion-icon>\n            </ion-range>\n          </ion-item>\n      </ion-row>\n      <ion-row class="row-range">\n        <ion-item style="background: transparent" no-lines>\n            <ion-range [formControl]="dados.controls[\'desempenho\']" name="notaDesempenho" min="1" max="5" step="1" snaps="true" color="gray">\n              <ion-icon range-left name="speedometer" class="icons_desempenho" tooltip="Desempenho" navTooltip color="gray"></ion-icon>\n            </ion-range>\n          </ion-item>\n      </ion-row>\n      <ion-row class="row-range">\n        <ion-item style="background: transparent" no-lines>\n            <ion-range [formControl]="dados.controls[\'tela\']" name="notaTela" min="1" max="5" step="1" snaps="true" color="gray">\n              <ion-icon range-left name="phone-portrait" class="icons_tela" tooltip="Tamanho da tela" navTooltip color="gray"></ion-icon>\n            </ion-range>\n          </ion-item>\n      </ion-row>\n      <ion-row class="row-range">\n        <ion-item style="background: transparent" no-lines>\n            <ion-range [formControl]="dados.controls[\'armazenamento\']" name="notaArmazenamento" min="1" max="5" step="1" snaps="true" color="gray">\n              <ion-icon range-left name="archive" class="icons_tela" tooltip="Tamanho da tela" navTooltip color="gray"></ion-icon>\n            </ion-range>\n          </ion-item>\n      </ion-row>\n      <ion-row class="row-range">\n        <ion-item style="background: transparent" no-lines>\n            <ion-range [formControl]="dados.controls[\'bateria\']" name="notaBateria" min="1" max="5" step="1" snaps="true" color="gray">\n              <ion-icon range-left name="battery-charging" class="icons_bateria" tooltip="Bateria" navTooltip color="gray"></ion-icon>\n            </ion-range>\n          </ion-item>\n      </ion-row>\n      <ion-row>\n        <ion-col text-center>\n            <button ion-button color="dark" type="submit" round>Procurar</button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/home/caio/Pistachei/projetoPistache/app/src/pages/escolha/escolha.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClient */]])
    ], EscolhaPage);
    return EscolhaPage;
}());

//# sourceMappingURL=escolha.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SobrePistacheiPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the SobrepistacheiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SobrePistacheiPage = /** @class */ (function () {
    function SobrePistacheiPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SobrePistacheiPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SobrepistacheiPage');
    };
    SobrePistacheiPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-sobrepistachei',template:/*ion-inline-start:"/home/caio/Pistachei/projetoPistache/app/src/pages/sobrepistachei/sobrepistachei.html"*/'<!--\n  Generated template for the SobrepistacheiPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="primary">\n      <ion-buttons left>\n          <button ion-button icon-only (click)="navCtrl.pop({animate: true, animation:\'pingu\', direction: \'back\'});" class="button-navbar">\n              <ion-icon name="arrow-back"></ion-icon>\n          </button>\n      </ion-buttons>\n      <ion-title text-center>\n        <img class="logo-navbar" src="assets/img/Pistachei-logo-transparente.png" />\n      </ion-title>\n      <ion-buttons right>\n        <button ion-button outline (click)="goSobrePistacheiPage();" class="button-navbar bar-button-round">\n            &nbsp;<ion-icon name="help"></ion-icon>&nbsp;\n        </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="bg">\n\n</ion-content>\n'/*ion-inline-end:"/home/caio/Pistachei/projetoPistache/app/src/pages/sobrepistachei/sobrepistachei.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], SobrePistacheiPage);
    return SobrePistacheiPage;
}());

//# sourceMappingURL=sobrepistachei.js.map

/***/ }),

/***/ 115:
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
webpackEmptyAsyncContext.id = 115;

/***/ }),

/***/ 158:
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
webpackEmptyAsyncContext.id = 158;

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelloIonicPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__intrucoes_instrucoes__ = __webpack_require__(100);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HelloIonicPage = /** @class */ (function () {
    function HelloIonicPage(navCtrl, platform, app) {
        this.navCtrl = navCtrl;
        this.start = false;
        platform.registerBackButtonAction(function () {
            var nav = app.getActiveNavs()[0];
            if (nav.canGoBack()) {
                navCtrl.pop({ animate: true, animation: 'pingu', direction: 'back' }); // Change the default transition on GoBack
            }
            else {
                platform.exitApp(); // Close this application
            }
        });
    }
    ;
    HelloIonicPage.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () { return _this.start = true; }, 1000);
    };
    HelloIonicPage.prototype.goInstrucoesPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__intrucoes_instrucoes__["a" /* InstrucoesPage */], {}, { animate: true, animation: 'pingu', direction: 'forward' });
    };
    ;
    HelloIonicPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-hello-ionic',template:/*ion-inline-start:"/home/caio/Pistachei/projetoPistache/app/src/pages/hello-ionic/hello-ionic.html"*/'<ion-content class="bg">\n  <ion-grid justify-content-around class="total">\n\n    <ion-row class="center">\n      <ion-col  class="center-col">\n        <img class="logo" src="assets/img/Pistachei-logo-transparente.png" />\n        <div ion-text class="slogan" text-center color="white">\n          <span typingAnimation [typeSpeed]="50" [condition]="start" [startDelay]="500" [hideCursorOnComplete]="false">\n            Encontre o celular perfeito para você! \n          </span>\n        </div>\n      </ion-col>\n    </ion-row>\n\n    <ion-row text-center>\n      <ion-col>\n        <div class="footer">\n          <button ion-button color="dark" (click)="goInstrucoesPage();" text-center large round>Começar</button>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/home/caio/Pistachei/projetoPistache/app/src/pages/hello-ionic/hello-ionic.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */]])
    ], HelloIonicPage);
    return HelloIonicPage;
}());

//# sourceMappingURL=hello-ionic.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MelhorCelularPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the MelhorcelularPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MelhorCelularPage = /** @class */ (function () {
    function MelhorCelularPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.resultado = Array;
        this.primeiro = Object;
        this.resultado = navParams.get('resultado');
        this.primeiro = this.resultado[0];
        console.log(this.resultado);
    }
    MelhorCelularPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MelhorCelularPage');
    };
    MelhorCelularPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-melhorcelular',template:/*ion-inline-start:"/home/caio/Pistachei/projetoPistache/app/src/pages/melhorcelular/melhorcelular.html"*/'<!--\n  Generated template for the MelhorcelularPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="primary">\n      <ion-buttons left>\n          <button ion-button icon-only (click)="navCtrl.pop({animate: true, animation:\'pingu\', direction: \'back\'});" class="button-navbar">\n              <ion-icon name="arrow-back"></ion-icon>\n          </button>\n      </ion-buttons>\n      <ion-title text-center>\n        <img class="logo-navbar" src="assets/img/Pistachei-logo-transparente.png" />\n      </ion-title>\n      <ion-buttons right>\n        <button ion-button outline (click)="goSobrePistacheiPage();" class="button-navbar bar-button-round">\n            &nbsp;<ion-icon name="help"></ion-icon>&nbsp;\n        </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <ion-grid col-12 col-sm-10 col-md-8 col-xl-6>\n    <ion-row>\n      <ion-item style="background: transparent" text-wrap text-center no-lines>\n          <ion-label>\n              <h1 ion-text text-center color="dark">Encontramos o melhor celular para você</h1>\n          </ion-label>\n      </ion-item>\n    </ion-row>\n    <ion-row text-center>\n      <ion-col >\n          <ion-img text-center src="{{primeiro[\'imagem\']}}"></ion-img>\n      </ion-col>\n\n    </ion-row>\n    <ion-row>\n      <ion-label>\n          <h1 ion-text text-center color="dark">{{primeiro[\'marca\']}} {{primeiro[\'modelo\']}}</h1>\n          <h1 ion-text text-center>R$ {{primeiro[\'precoMin\']}}</h1>\n      </ion-label>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/home/caio/Pistachei/projetoPistache/app/src/pages/melhorcelular/melhorcelular.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], MelhorCelularPage);
    return MelhorCelularPage;
}());

//# sourceMappingURL=melhorcelular.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(227);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_tooltips__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_hello_ionic_hello_ionic__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_escolha_escolha__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_melhorcelular_melhorcelular__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_sobrepistachei_sobrepistachei__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_intrucoes_instrucoes__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angular_typing_animation__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_status_bar__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_splash_screen__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__customclasses_slide_transition__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__customclasses_slide_down_transition__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__customclasses_slide_up_transition__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__customclasses_pingu_transition__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__angular_common_http__ = __webpack_require__(200);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



















var AppModule = /** @class */ (function () {
    function AppModule(config, platform, statusBar, splashScreen) {
        this.config = config;
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.config.setTransition("slide", __WEBPACK_IMPORTED_MODULE_14__customclasses_slide_transition__["a" /* SlideTransition */]);
        this.config.setTransition("slidedown", __WEBPACK_IMPORTED_MODULE_15__customclasses_slide_down_transition__["a" /* SlideDownTransition */]);
        this.config.setTransition("slideup", __WEBPACK_IMPORTED_MODULE_16__customclasses_slide_up_transition__["a" /* SlideUpTransition */]);
        this.config.setTransition("pingu", __WEBPACK_IMPORTED_MODULE_17__customclasses_pingu_transition__["a" /* PinguTransition */]);
        platform.ready().then(function () {
            statusBar.styleDefault();
            if (platform.is('android')) {
                statusBar.overlaysWebView(false);
                statusBar.backgroundColorByHexString('#34b866');
            }
            splashScreen.hide();
        });
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_hello_ionic_hello_ionic__["a" /* HelloIonicPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_escolha_escolha__["a" /* EscolhaPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_melhorcelular_melhorcelular__["a" /* MelhorCelularPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_sobrepistachei_sobrepistachei__["a" /* SobrePistacheiPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_intrucoes_instrucoes__["a" /* InstrucoesPage */],
                __WEBPACK_IMPORTED_MODULE_11_angular_typing_animation__["a" /* TypingAnimationDirective */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["f" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_0_ionic_tooltips__["a" /* TooltipsModule */],
                __WEBPACK_IMPORTED_MODULE_18__angular_common_http__["b" /* HttpClientModule */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["d" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_hello_ionic_hello_ionic__["a" /* HelloIonicPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_escolha_escolha__["a" /* EscolhaPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_melhorcelular_melhorcelular__["a" /* MelhorCelularPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_sobrepistachei_sobrepistachei__["a" /* SobrePistacheiPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_intrucoes_instrucoes__["a" /* InstrucoesPage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_3__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["e" /* IonicErrorHandler */] }
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["c" /* Config */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["l" /* Platform */], __WEBPACK_IMPORTED_MODULE_12__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_13__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_hello_ionic_hello_ionic__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_escolha_escolha__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_intrucoes_instrucoes__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__ = __webpack_require__(204);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MyApp = /** @class */ (function () {
    function MyApp(platform, menu, statusBar, splashScreen) {
        this.platform = platform;
        this.menu = menu;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        // make HelloIonicPage the root (or first) page
        this.rootPage = __WEBPACK_IMPORTED_MODULE_2__pages_hello_ionic_hello_ionic__["a" /* HelloIonicPage */];
        this.initializeApp();
        // set our app's pages
        this.pages = [
            { title: 'Pistachei', component: __WEBPACK_IMPORTED_MODULE_2__pages_hello_ionic_hello_ionic__["a" /* HelloIonicPage */] },
            { title: 'Pistachei', component: __WEBPACK_IMPORTED_MODULE_3__pages_escolha_escolha__["a" /* EscolhaPage */] },
            { title: 'Pistachei', component: __WEBPACK_IMPORTED_MODULE_4__pages_intrucoes_instrucoes__["a" /* InstrucoesPage */] },
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // close the menu when clicking a link from the menu
        this.menu.close();
        // navigate to the new page if it is not the current page
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/caio/Pistachei/projetoPistache/app/src/app/app.html"*/'<ion-menu [content]="content">\n\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Pages</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"/home/caio/Pistachei/projetoPistache/app/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SlideTransition; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular_util_util__ = __webpack_require__(1);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var DURATION = 500;
var EASING = 'cubic-bezier(0.36,0.66,0.04,1)';
var OPACITY = 'opacity';
var TRANSFORM = 'transform';
var TRANSLATEX = 'translateX';
var CENTER = '0%';
var OFF_OPACITY = 1;
var SlideTransition = /** @class */ (function (_super) {
    __extends(SlideTransition, _super);
    function SlideTransition() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SlideTransition.prototype.init = function () {
        _super.prototype.init.call(this);
        var plt = this.plt;
        var OFF_RIGHT = plt.isRTL ? '-100%' : '100%';
        var OFF_LEFT = plt.isRTL ? '100%' : '-100%';
        var enteringView = this.enteringView;
        var leavingView = this.leavingView;
        var opts = this.opts;
        this.duration(Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular_util_util__["l" /* isPresent */])(opts.duration) ? opts.duration : DURATION);
        this.easing(Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular_util_util__["l" /* isPresent */])(opts.easing) ? opts.easing : EASING);
        var backDirection = (opts.direction === 'back');
        if (enteringView) {
            var enteringContent = new __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["a" /* Animation */](plt, enteringView.pageRef());
            this.add(enteringContent);
            if (backDirection) {
                enteringContent
                    .fromTo(TRANSLATEX, OFF_LEFT, CENTER, true)
                    .fromTo(OPACITY, OFF_OPACITY, OFF_OPACITY, false);
            }
            else {
                enteringContent
                    .beforeClearStyles([OPACITY])
                    .fromTo(OPACITY, OFF_OPACITY, OFF_OPACITY, false)
                    .fromTo(TRANSLATEX, OFF_RIGHT, CENTER, true);
            }
        }
        if (leavingView && leavingView.pageRef()) {
            var leavingContent = new __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["a" /* Animation */](plt, leavingView.pageRef());
            this.add(leavingContent);
            if (backDirection) {
                leavingContent
                    .beforeClearStyles([OPACITY])
                    .fromTo(OPACITY, OFF_OPACITY, OFF_OPACITY, false)
                    .fromTo(TRANSLATEX, CENTER, (plt.isRTL ? '-100%' : '100%'));
            }
            else {
                leavingContent
                    .fromTo(OPACITY, OFF_OPACITY, OFF_OPACITY, false)
                    .fromTo(TRANSLATEX, CENTER, OFF_LEFT)
                    .afterClearStyles([TRANSFORM, OPACITY]);
            }
        }
    };
    return SlideTransition;
}(__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["k" /* PageTransition */]));

//# sourceMappingURL=slide.transition.js.map

/***/ }),

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SlideDownTransition; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular_animations_animation__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular_util_util__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular_transitions_page_transition__ = __webpack_require__(24);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var DURATION = 500;
var TRANSFORM = "transform";
var MOVED_DOWN = "translateY(100%)";
var NOT_MOVED = "translateY(0)";
var ZINDEX = "z-index";
var OPACITY = "opacity";
var INDEX_FRONT = 101;
var INDEX_BACK = 100;
var OPAQUE = 1;
var SlideDownTransition = /** @class */ (function (_super) {
    __extends(SlideDownTransition, _super);
    function SlideDownTransition() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SlideDownTransition.prototype.init = function () {
        _super.prototype.init.call(this);
        var enteringView = this.enteringView;
        var leavingView = this.leavingView;
        var opts = this.opts;
        this.duration(Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular_util_util__["l" /* isPresent */])(opts.duration) ? opts.duration : DURATION);
        var backDirection = (opts.direction === 'back');
        if (enteringView) {
            var enteringContent = new __WEBPACK_IMPORTED_MODULE_0_ionic_angular_animations_animation__["a" /* Animation */](this.plt, enteringView.pageRef());
            this.add(enteringContent);
            if (backDirection) {
                enteringContent
                    .fromTo(TRANSFORM, MOVED_DOWN, NOT_MOVED, false)
                    .fromTo(OPACITY, OPAQUE, OPAQUE, false)
                    .fromTo(ZINDEX, INDEX_FRONT, INDEX_FRONT, false);
            }
            else {
                enteringContent
                    .fromTo(TRANSFORM, NOT_MOVED, NOT_MOVED, false)
                    .fromTo(OPACITY, OPAQUE, OPAQUE, false)
                    .fromTo(ZINDEX, INDEX_BACK, INDEX_BACK, false);
            }
        }
        if (leavingView && leavingView.pageRef()) {
            var leavingContent = new __WEBPACK_IMPORTED_MODULE_0_ionic_angular_animations_animation__["a" /* Animation */](this.plt, leavingView.pageRef());
            this.add(leavingContent);
            if (backDirection) {
                leavingContent
                    .fromTo(TRANSFORM, NOT_MOVED, NOT_MOVED, false)
                    .fromTo(OPACITY, OPAQUE, OPAQUE, false)
                    .fromTo(ZINDEX, INDEX_BACK, INDEX_BACK, false);
            }
            else {
                leavingContent
                    .fromTo(TRANSFORM, NOT_MOVED, MOVED_DOWN, false)
                    .fromTo(OPACITY, OPAQUE, OPAQUE, false)
                    .fromTo(ZINDEX, INDEX_FRONT, INDEX_FRONT, false)
                    .afterClearStyles([TRANSFORM, OPACITY]);
            }
        }
    };
    return SlideDownTransition;
}(__WEBPACK_IMPORTED_MODULE_2_ionic_angular_transitions_page_transition__["a" /* PageTransition */]));

//# sourceMappingURL=slide-down.transition.js.map

/***/ }),

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SlideUpTransition; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular_animations_animation__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular_util_util__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular_transitions_page_transition__ = __webpack_require__(24);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var DURATION = 500;
var TRANSFORM = "transform";
var MOVED_UP = "translateY(-100%)";
var NOT_MOVED = "translateY(0)";
var ZINDEX = "z-index";
var OPACITY = "opacity";
var INDEX_FRONT = 101;
var INDEX_BACK = 100;
var OPAQUE = 1;
var SlideUpTransition = /** @class */ (function (_super) {
    __extends(SlideUpTransition, _super);
    function SlideUpTransition() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SlideUpTransition.prototype.init = function () {
        _super.prototype.init.call(this);
        var enteringView = this.enteringView;
        var leavingView = this.leavingView;
        var opts = this.opts;
        this.duration(Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular_util_util__["l" /* isPresent */])(opts.duration) ? opts.duration : DURATION);
        var backDirection = (opts.direction === 'back');
        if (enteringView) {
            var enteringContent = new __WEBPACK_IMPORTED_MODULE_0_ionic_angular_animations_animation__["a" /* Animation */](this.plt, enteringView.pageRef());
            this.add(enteringContent);
            if (backDirection) {
                enteringContent
                    .fromTo(TRANSFORM, MOVED_UP, NOT_MOVED, false)
                    .fromTo(OPACITY, OPAQUE, OPAQUE, false)
                    .fromTo(ZINDEX, INDEX_FRONT, INDEX_FRONT, false);
            }
            else {
                enteringContent
                    .fromTo(TRANSFORM, NOT_MOVED, NOT_MOVED, false)
                    .fromTo(OPACITY, OPAQUE, OPAQUE, false)
                    .fromTo(ZINDEX, INDEX_BACK, INDEX_BACK, false);
            }
        }
        if (leavingView && leavingView.pageRef()) {
            var leavingContent = new __WEBPACK_IMPORTED_MODULE_0_ionic_angular_animations_animation__["a" /* Animation */](this.plt, leavingView.pageRef());
            this.add(leavingContent);
            if (backDirection) {
                leavingContent
                    .fromTo(TRANSFORM, NOT_MOVED, NOT_MOVED, false)
                    .fromTo(OPACITY, OPAQUE, OPAQUE, false)
                    .fromTo(ZINDEX, INDEX_BACK, INDEX_BACK, false);
            }
            else {
                leavingContent
                    .fromTo(TRANSFORM, NOT_MOVED, MOVED_UP, false)
                    .fromTo(OPACITY, OPAQUE, OPAQUE, false)
                    .fromTo(ZINDEX, INDEX_FRONT, INDEX_FRONT, false)
                    .afterClearStyles([TRANSFORM, OPACITY]);
            }
        }
    };
    return SlideUpTransition;
}(__WEBPACK_IMPORTED_MODULE_2_ionic_angular_transitions_page_transition__["a" /* PageTransition */]));

//# sourceMappingURL=slide-up.transition.js.map

/***/ }),

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PinguTransition; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular_util_util__ = __webpack_require__(1);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var DURATION = 1000;
var EASING = 'cubic-bezier(0.36,0.66,0.04,1)';
var OPACITY = 'opacity';
var TRANSFORM = 'transform';
var TRANSLATEX = 'translateX';
var CENTER = '0%';
var OFF_OPACITY = 1;
var PinguTransition = /** @class */ (function (_super) {
    __extends(PinguTransition, _super);
    function PinguTransition() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PinguTransition.prototype.init = function () {
        _super.prototype.init.call(this);
        var plt = this.plt;
        var OFF_RIGHT = plt.isRTL ? '-100%' : '100%';
        var OFF_LEFT = plt.isRTL ? '100%' : '-100%';
        var enteringView = this.enteringView;
        var leavingView = this.leavingView;
        var opts = this.opts;
        this.duration(Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular_util_util__["l" /* isPresent */])(opts.duration) ? opts.duration : DURATION);
        this.easing(Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular_util_util__["l" /* isPresent */])(opts.easing) ? opts.easing : EASING);
        var backDirection = (opts.direction === 'back');
        var enteringHasNavbar = (enteringView && enteringView.hasNavbar());
        var leavingHasNavbar = (leavingView && leavingView.hasNavbar());
        if (enteringView) {
            // get the native element for the entering page
            var enteringPageEle = enteringView.pageRef().nativeElement;
            // entering content
            var enteringContent = new __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["a" /* Animation */](plt, enteringView.contentRef());
            enteringContent.element(enteringPageEle.querySelectorAll('ion-header > *:not(ion-navbar),ion-footer > *'));
            this.add(enteringContent);
            if (backDirection) {
                // entering content, back direction
                enteringContent
                    .fromTo(TRANSLATEX, OFF_LEFT, CENTER, true)
                    .fromTo(OPACITY, OFF_OPACITY, OFF_OPACITY, false);
            }
            else {
                // entering content, forward direction
                enteringContent
                    .beforeClearStyles([OPACITY])
                    .fromTo(OPACITY, OFF_OPACITY, OFF_OPACITY, false)
                    .fromTo(TRANSLATEX, OFF_RIGHT, CENTER, true);
            }
            if (enteringHasNavbar) {
                // entering page has a navbar
                var enteringNavbarEle = enteringPageEle.querySelector('ion-header');
                var enteringNavBar = new __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["a" /* Animation */](plt, enteringNavbarEle);
                this.add(enteringNavBar);
                enteringNavBar.fromTo(OPACITY, 0, 1, true);
                //enteringNavbarItems.fromTo(OPACITY, 0.01, 1, true);
            }
        }
        // setup leaving view
        if (leavingView && leavingView.pageRef()) {
            // leaving content
            var leavingPageEle = leavingView.pageRef().nativeElement;
            var leavingContent = new __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["a" /* Animation */](plt, leavingView.contentRef());
            leavingContent.element(leavingPageEle.querySelectorAll('ion-header > *:not(ion-navbar),ion-footer > *'));
            this.add(leavingContent);
            if (backDirection) {
                // leaving content, back direction
                leavingContent
                    .beforeClearStyles([OPACITY])
                    .fromTo(OPACITY, OFF_OPACITY, OFF_OPACITY, false)
                    .fromTo(TRANSLATEX, CENTER, (plt.isRTL ? '-100%' : '100%'));
            }
            else {
                // leaving content, forward direction
                leavingContent
                    .fromTo(OPACITY, OFF_OPACITY, OFF_OPACITY, false)
                    .fromTo(TRANSLATEX, CENTER, OFF_LEFT)
                    .afterClearStyles([TRANSFORM, OPACITY]);
            }
            if (leavingHasNavbar) {
                // leaving page has a navbar
                var leavingNavbarEle = leavingPageEle.querySelector('ion-header');
                var leavingNavBar = new __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["a" /* Animation */](plt, leavingNavbarEle);
                this.add(leavingNavBar);
                // fade out leaving navbar items
                leavingNavBar
                    .fromTo(OPACITY, 1, 0);
                //leavingTitle.fromTo(OPACITY, 0.99, 0);
                //leavingNavbarItems.fromTo(OPACITY, 0.99, 0);
            }
        }
    };
    return PinguTransition;
}(__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["k" /* PageTransition */]));

//# sourceMappingURL=pingu-transition.js.map

/***/ })

},[206]);
//# sourceMappingURL=main.js.map
