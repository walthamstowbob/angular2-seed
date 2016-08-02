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
var LekkerFooterComponent = (function () {
    function LekkerFooterComponent() {
    }
    LekkerFooterComponent = __decorate([
        core_1.Component({
            selector: 'lekker-footer',
            template: "\n            \n    <div class=\"container\">\n    <div class=\"lekker-footer\">\n\n        <div class=\"col-lg-12\">\n            <ul class=\"list-inline banner-social-buttons\">\n                <li id=\"inline\"><a href=\"https://github.com/walthamstowbob\" target=\"_blank\" class=\"btn btn-default btn-lg\"><span class=\"fa fa-github\" aria-hidden=\"true\"></span></a></li>\n                <li id=\"inline\"><a href=\"https://jsfiddle.net/user/walthamstowbob\" target=\"_blank\" class=\"btn btn-default btn-lg\"><span class=\"fa fa-jsfiddle\" aria-hidden=\"true\"></span></a></li>\n                <li id=\"inline\"><a href=\"mailto:barry@lekkerit.com\" class=\"btn btn-default btn-lg\"><span class=\"glyphicon glyphicon-envelope\" aria-hidden=\"true\"></span></a></li>\n                <li id=\"inline\"><a href=\"https://twitter.com/lekkerit_\" target=\"_blank\" class=\"btn btn-default btn-lg\"><span class=\"fa fa-twitter\" aria-hidden=\"true\"></span></a></li>\n                <li id=\"inline\"><a href=\"https://nl.linkedin.com/in/lekkerbob\" target=\"_blank\" class=\"btn btn-default btn-lg\"><span class=\"fa fa-linkedin\" aria-hidden=\"true\"></span></a></li>\n                      \n            </ul>\n            </div>\n        </div>\n    </div>\n\n    \n        ",
        }), 
        __metadata('design:paramtypes', [])
    ], LekkerFooterComponent);
    return LekkerFooterComponent;
}());
exports.LekkerFooterComponent = LekkerFooterComponent;
