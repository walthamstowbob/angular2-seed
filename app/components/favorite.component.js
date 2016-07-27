System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var FavoriteComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            FavoriteComponent = (function () {
                function FavoriteComponent() {
                    this.isFavorite = false;
                    this.change = new core_1.EventEmitter();
                }
                FavoriteComponent.prototype.onClick = function () {
                    this.isFavorite = !this.isFavorite;
                    this.change.emit({ newValue: this.isFavorite });
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], FavoriteComponent.prototype, "isFavorite", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], FavoriteComponent.prototype, "change", void 0);
                FavoriteComponent = __decorate([
                    core_1.Component({
                        selector: 'favorite',
                        template: "\n        <i \n            class=\"glyphicon\"\n            [ngClass]=\"{\n                'glyphicon-star-empty': !isFavorite,\n                'glyphicon-star': isFavorite\n            }\"\n            (click)=\"onClick()\">\n        </i>\n        ",
                        styles: ["\n            .glyphicon-star {\n                color: orange;\n            }\n        "]
                    }), 
                    __metadata('design:paramtypes', [])
                ], FavoriteComponent);
                return FavoriteComponent;
            }());
            exports_1("FavoriteComponent", FavoriteComponent);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmF2b3JpdGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZmF2b3JpdGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBcUJBO2dCQUFBO29CQUNZLGVBQVUsR0FBRyxLQUFLLENBQUM7b0JBRWxCLFdBQU0sR0FBRyxJQUFJLG1CQUFZLEVBQUUsQ0FBQztnQkFNekMsQ0FBQztnQkFKRyxtQ0FBTyxHQUFQO29CQUNJLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO29CQUNuQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQTtnQkFDbkQsQ0FBQztnQkFQRjtvQkFBQyxZQUFLLEVBQUU7O3FFQUFBO2dCQUVSO29CQUFDLGFBQU0sRUFBRTs7aUVBQUE7Z0JBdEJaO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLFVBQVU7d0JBQ3BCLFFBQVEsRUFBRSw0UEFTTDt3QkFDRCxNQUFNLEVBQUUsQ0FBQywwRkFJUixDQUFDO3FCQUVULENBQUM7O3FDQUFBO2dCQVVGLHdCQUFDO1lBQUQsQ0FBQyxBQVRELElBU0M7WUFURCxpREFTQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlcn0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnZmF2b3JpdGUnLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgICAgICA8aSBcclxuICAgICAgICAgICAgY2xhc3M9XCJnbHlwaGljb25cIlxyXG4gICAgICAgICAgICBbbmdDbGFzc109XCJ7XHJcbiAgICAgICAgICAgICAgICAnZ2x5cGhpY29uLXN0YXItZW1wdHknOiAhaXNGYXZvcml0ZSxcclxuICAgICAgICAgICAgICAgICdnbHlwaGljb24tc3Rhcic6IGlzRmF2b3JpdGVcclxuICAgICAgICAgICAgfVwiXHJcbiAgICAgICAgICAgIChjbGljayk9XCJvbkNsaWNrKClcIj5cclxuICAgICAgICA8L2k+XHJcbiAgICAgICAgYCxcclxuICAgICAgICBzdHlsZXM6IFtgXHJcbiAgICAgICAgICAgIC5nbHlwaGljb24tc3RhciB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogb3JhbmdlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgYF1cclxuICAgICAgICBcclxufSlcclxuZXhwb3J0IGNsYXNzIEZhdm9yaXRlQ29tcG9uZW50IHsgXHJcbiAgIEBJbnB1dCgpIGlzRmF2b3JpdGUgPSBmYWxzZTtcclxuXHJcbiAgIEBPdXRwdXQoKSBjaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gICAgb25DbGljaygpe1xyXG4gICAgICAgIHRoaXMuaXNGYXZvcml0ZSA9ICF0aGlzLmlzRmF2b3JpdGU7XHJcbiAgICAgICAgdGhpcy5jaGFuZ2UuZW1pdCh7IG5ld1ZhbHVlOiB0aGlzLmlzRmF2b3JpdGUgfSlcclxuICAgIH1cclxufSJdfQ==