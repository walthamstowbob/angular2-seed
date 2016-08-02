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
var ZippyBootstrapComponent = (function () {
    function ZippyBootstrapComponent() {
        this.isExpanded = true;
    }
    ZippyBootstrapComponent.prototype.toggle = function () {
        this.isExpanded = !this.isExpanded;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], ZippyBootstrapComponent.prototype, "heading", void 0);
    ZippyBootstrapComponent = __decorate([
        core_1.Component({
            selector: 'zippy-bootstrap',
            template: "\n    \n    <div class=\"col-md-3\">\n    <div class=\"zippy\">\n        <div\n            class=\"zippy-heading\"\n            (click)=\"toggle()\">    \n            {{ heading }}\n        <i \n            class=\"pull-right glyphicon\"\n            [ngClass]=\"\n                {\n                    'glyphicon-chevron-down': !isExpanded,\n                    'glyphicon-chevron-up': !isExpanded\n                }\">\n        </i>\n        </div>\n        <div *ngIf=\"isExpanded\" class=\"zippy-content\">\n\n        <div class=\"media\">\n        <div class=\"media-middle\">\n            <iframe \n                class=\"media-object\" src=\"http://www.lekkerit.com\" width=\"600\" height=\"325\" frameborder=\"0\" allowfullscreen>\n            </iframe>\n                <a href=\"http://www.lekkerit.com\" target=\"_blank\" class=\"btn btn-primary\">Bootstrap</a>\n\n        </div>\n        </div>\n        <ng-content></ng-content>\n        </div>\n    </div>\n    </div>\n    \n        ",
        }), 
        __metadata('design:paramtypes', [])
    ], ZippyBootstrapComponent);
    return ZippyBootstrapComponent;
}());
exports.ZippyBootstrapComponent = ZippyBootstrapComponent;
