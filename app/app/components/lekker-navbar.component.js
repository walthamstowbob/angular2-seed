"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('angular2/core');
var LekkerNavbarComponent = (function () {
    function LekkerNavbarComponent() {
        this.viewMode = ['home', 'about', 'portfolio', 'contact', 'desk'];
    }
    LekkerNavbarComponent = __decorate([
        core_1.Component({
            selector: 'lekker-navbar',
            template: "\n\n     <nav class=\"navbar-static-top navbar-default\" id=\"home\">\n        <div class=\"container-fluid\">\n            <div class=\"navbar-brand\">\n            <button class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navHeaderCollapse\">Menu</button>\n            <div class=\"collapse navbar-collapse navHeaderCollapse\">\n\n    <ul class=\"nav nav-pills\">\n        <li [class.active]=\"viewMode == 'home'\"><a (click)=\"viewMode = 'home'\">Home</a></li>\n        <li [class.active]=\"viewMode == 'about'\"><a (click)=\"viewMode = 'about'\">About</a></li>\n        <li [class.active]=\"viewMode == 'portfolio'\"><a (click)=\"viewMode = 'portfolio'\">Portfolio</a>\n            </li>\n        <li [class.active]=\"viewMode == 'contact'\"><a href=\"mailto:barry@lekkerit.com\" (click)=\"viewMode = 'contact'\">Contact</a></li>\n        <li [class.active]=\"viewMode == 'desk'\"><a href=\"http://www.lekkerit.com/desk\" (click)=\"viewMode = 'desk'\">Desk</a></li>\n    </ul>\n\n    <div [ngSwitch]=\"viewMode\">\n        <template [ngSwitchWhen]=\"'home'\" ngSwitchDefault><lekker-jumbotron></lekker-jumbotron></template>\n        <template [ngSwitchWhen]=\"'about'\"><lekker-about-me></lekker-about-me></template>\n        <template [ngSwitchWhen]=\"'portfolio'\">\n            <zippy-smiton heading=\"Freelance Developer\"></zippy-smiton>\n            <zippy heading=\"Scrum Master\"></zippy>                \n            <zippy-bootstrap heading=\"Bootstrap\"></zippy-bootstrap>\n            <zippy-weather heading=\"Applications\"></zippy-weather>\n        </template>\n    </div>\n\n    </div>\n    </div>\n    </div>\n    \n        ",
        }), 
        __metadata('design:paramtypes', [])
    ], LekkerNavbarComponent);
    return LekkerNavbarComponent;
}());
exports.LekkerNavbarComponent = LekkerNavbarComponent;
