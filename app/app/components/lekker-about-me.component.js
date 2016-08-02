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
var LekkerAboutMeComponent = (function () {
    function LekkerAboutMeComponent() {
    }
    LekkerAboutMeComponent = __decorate([
        core_1.Component({
            selector: 'lekker-about-me',
            template: "\n            \n    <div class=\"about-me\">\n     <div class=\"container-fluid\">\n        <div class=\"row padding\">\n            <div class=\"col-md-6\">\n                <h2 class=\"text-left\">About me</h2>\n                <p class=\"lead\">I moved to Amsterdam from London to become a Java Android Developer. \n                To fund my training I make websites and beautiful industrial desks for home or office use. \n                You may have noticed that I like to make both digital and physical things, perhaps I could build something for you?</p>\n                <hr>\n                <p class=\"lead\">In the not so distant past, I have worked for Intel Corporation, The Mayor's Office and Arup & Partners. \n                I am proud to say I have 10-year's experience, including many high-profile projects delivered utilising the scrum-methodology ..</p>\n                \n            </div>\n            <div class=\"col-md-6\">\n                    \n            <img src=\"images/barry.jpeg\" class=\"img-circle img-responsive-1\" id=\"profile-image\" alt=\"profile image\">\n            </div>\n            </div>\n            </div>\n            </div>\n\n        ",
        }), 
        __metadata('design:paramtypes', [])
    ], LekkerAboutMeComponent);
    return LekkerAboutMeComponent;
}());
exports.LekkerAboutMeComponent = LekkerAboutMeComponent;
