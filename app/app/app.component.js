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
var lekker_navbar_component_1 = require('./components/lekker-navbar.component');
var lekker_jumbotron_component_1 = require('./components/lekker-jumbotron.component');
var lekker_about_me_component_1 = require('./components/lekker-about-me.component');
var zippy_component_1 = require('./components/zippy.component');
var zippy_portfolio_component_1 = require('./components/zippy-portfolio.component');
var zippy_weather_component_1 = require('./components/zippy-weather.component');
var zippy_smiton_component_1 = require('./components/zippy-smiton.component');
var zippy_bootstrap_component_1 = require('./components/zippy-bootstrap.component');
var contact_form_component_1 = require('./components/contact-form.component');
var lekker_footer_component_1 = require('./components/lekker-footer.component');
var AppComponent = (function () {
    function AppComponent() {
        this.viewMode = ['home', 'about', 'portfolio', 'contact', 'desk'];
        this.isUp = true;
    }
    AppComponent.prototype.onUpChange = function ($event) {
        console.log($event);
    };
    AppComponent.prototype.onClick = function () {
        this.isUp = !this.isUp;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n    <div class=\"navbar-static-top navbar-default\" role=\"navigation\">\n        <div class=\"container-fluid\">\n            <div class=\"navbar-brand\">\n            <button class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navHeaderCollapse\">Menu</button>\n            <a class=\"navbar-brand\" href=\"#\"><img src=\"./logo.jpg\"></a> \n\n    <ul class=\"nav nav-pills navbar-left\">\n        <li [class.active]=\"viewMode == 'home'\"><a href=\"#\" (click)=\"viewMode = 'home'\">Home</a></li>\n        <li [class.active]=\"viewMode == 'about'\"><a href=\"#\" (click)=\"viewMode = 'about'\">About</a></li>\n        <li [class.active]=\"viewMode == 'portfolio'\"><a href=\"#\" (click)=\"viewMode = 'portfolio'\">Portfolio</a>\n            </li>\n        <li [class.active]=\"viewMode == 'contact'\"><a href=\"#\" (click)=\"viewMode = 'contact'\">Contact</a></li>\n        <li [class.active]=\"viewMode == 'desk'\"><a href=\"http://www.lekkerit.com/desk\" target= \"_blank\" (click)=\"viewMode = 'desk'\">Desk</a></li>\n    </ul>\n\n    <div class=\"zippy-page\" [ngSwitch]=\"viewMode\">\n        <template [ngSwitchWhen]=\"'home'\" ngSwitchDefault><lekker-jumbotron></lekker-jumbotron></template>\n        <template [ngSwitchWhen]=\"'about'\"><lekker-about-me></lekker-about-me></template>\n        <template [ngSwitchWhen]=\"'portfolio'\">\n            <zippy-smiton heading=\"Freelance Developer\"></zippy-smiton>\n            <zippy heading=\"Scrum Master\"></zippy>                \n            <zippy-bootstrap heading=\"Bootstrap\"></zippy-bootstrap>\n            <zippy-weather heading=\"Applications\"></zippy-weather>\n        </template>\n        <template [ngSwitchWhen]=\"'contact'\"><contact-form></contact-form></template>\n    </div>\n    </div>\n    </div>\n    </div>\n\n    <lekker-footer></lekker-footer>\n\n    <div class=\"container\" class=\"container-img\">\n          \n    </div>\n\n                ",
            directives: [lekker_navbar_component_1.LekkerNavbarComponent, lekker_jumbotron_component_1.LekkerJumbotronComponent, lekker_about_me_component_1.LekkerAboutMeComponent, zippy_portfolio_component_1.ZippyPortfolioComponent, contact_form_component_1.ContactFormComponent, zippy_component_1.ZippyComponent, zippy_weather_component_1.ZippyWeatherComponent, zippy_smiton_component_1.ZippySmitonComponent, zippy_bootstrap_component_1.ZippyBootstrapComponent, lekker_footer_component_1.LekkerFooterComponent],
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
