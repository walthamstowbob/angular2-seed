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
    var VoteComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            VoteComponent = (function () {
                function VoteComponent() {
                    this.voteCount = 0;
                    this.iVote = 0;
                    this.vote = new core_1.EventEmitter();
                }
                VoteComponent.prototype.upVote = function () {
                    if (this.iVote == 1)
                        return;
                    this.iVote++;
                    this.vote.emit({ iVote: this.iVote });
                };
                VoteComponent.prototype.downVote = function () {
                    if (this.iVote == -1)
                        return;
                    this.iVote--;
                    this.vote.emit({ iVote: this.iVote });
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], VoteComponent.prototype, "voteCount", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], VoteComponent.prototype, "iVote", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], VoteComponent.prototype, "vote", void 0);
                VoteComponent = __decorate([
                    core_1.Component({
                        selector: 'vote',
                        template: "\n    <div class=\"voter\">\n        <i \n        class=\"glyphicon glyphicon-menu-up vote-button\"\n        [class.highlighted]=\"!iVote == 1\"\n        (click)=\"upVote()\"></i>\n        \n        \n        <span class=\"vote-count\">{{ voteCount + iVote }}</span>\n\n        <i \n        class=\"glyphicon glyphicon-menu-down vote-button\"\n        [class.highlighted]=\"iVote == -1\"\n        (click)=\"downVote()\"></i>\n        \n    </div>\n                ",
                        styles: ["\n    \n        .voter {\n            width: 20px;\n            text-align: center;\n            color: #999;\n        }\n\n        vote-count {\n            font-size: 1.2em;\n        }\n\n        .vote-button {\n            color: #ccc;\n            cursor: pointer;\n        }\n\n        .highlighted {\n            font-weight: bold;\n            color: orange;\n        }\n    \n    "]
                    }), 
                    __metadata('design:paramtypes', [])
                ], VoteComponent);
                return VoteComponent;
            }());
            exports_1("VoteComponent", VoteComponent);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidm90ZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ2b3RlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQStDQTtnQkFBQTtvQkFDYSxjQUFTLEdBQUcsQ0FBQyxDQUFDO29CQUNkLFVBQUssR0FBRyxDQUFDLENBQUM7b0JBRVQsU0FBSSxHQUFHLElBQUksbUJBQVksRUFBRSxDQUFDO2dCQW1CeEMsQ0FBQztnQkFqQkcsOEJBQU0sR0FBTjtvQkFDSSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQzt3QkFDaEIsTUFBTSxDQUFDO29CQUVYLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztvQkFFYixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztnQkFDMUMsQ0FBQztnQkFFRCxnQ0FBUSxHQUFSO29CQUNJLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUM7d0JBQ2pCLE1BQU0sQ0FBQztvQkFFWCxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7b0JBRWIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7Z0JBQzFDLENBQUM7Z0JBckJEO29CQUFDLFlBQUssRUFBRTs7Z0VBQUE7Z0JBQ1I7b0JBQUMsWUFBSyxFQUFFOzs0REFBQTtnQkFFUjtvQkFBQyxhQUFNLEVBQUU7OzJEQUFBO2dCQWpEYjtvQkFBQyxnQkFBUyxDQUFFO3dCQUVSLFFBQVEsRUFBRSxNQUFNO3dCQUNoQixRQUFRLEVBQUUsa2RBZ0JHO3dCQUNiLE1BQU0sRUFBQyxDQUFDLHNZQXNCUCxDQUFDO3FCQUNMLENBQUM7O2lDQUFBO2dCQXlCRixvQkFBQztZQUFELENBQUMsQUF2QkQsSUF1QkM7WUF2QkQseUNBdUJDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuXHJcbkBDb21wb25lbnQgKHtcclxuXHJcbiAgICBzZWxlY3RvcjogJ3ZvdGUnLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgIDxkaXYgY2xhc3M9XCJ2b3RlclwiPlxyXG4gICAgICAgIDxpIFxyXG4gICAgICAgIGNsYXNzPVwiZ2x5cGhpY29uIGdseXBoaWNvbi1tZW51LXVwIHZvdGUtYnV0dG9uXCJcclxuICAgICAgICBbY2xhc3MuaGlnaGxpZ2h0ZWRdPVwiIWlWb3RlID09IDFcIlxyXG4gICAgICAgIChjbGljayk9XCJ1cFZvdGUoKVwiPjwvaT5cclxuICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICA8c3BhbiBjbGFzcz1cInZvdGUtY291bnRcIj57eyB2b3RlQ291bnQgKyBpVm90ZSB9fTwvc3Bhbj5cclxuXHJcbiAgICAgICAgPGkgXHJcbiAgICAgICAgY2xhc3M9XCJnbHlwaGljb24gZ2x5cGhpY29uLW1lbnUtZG93biB2b3RlLWJ1dHRvblwiXHJcbiAgICAgICAgW2NsYXNzLmhpZ2hsaWdodGVkXT1cImlWb3RlID09IC0xXCJcclxuICAgICAgICAoY2xpY2spPVwiZG93blZvdGUoKVwiPjwvaT5cclxuICAgICAgICBcclxuICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgYCxcclxuICAgIHN0eWxlczpbYFxyXG4gICAgXHJcbiAgICAgICAgLnZvdGVyIHtcclxuICAgICAgICAgICAgd2lkdGg6IDIwcHg7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgY29sb3I6ICM5OTk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2b3RlLWNvdW50IHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjJlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC52b3RlLWJ1dHRvbiB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjY2NjO1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuaGlnaGxpZ2h0ZWQge1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgY29sb3I6IG9yYW5nZTtcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgIGBdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgVm90ZUNvbXBvbmVudCB7XHJcbiAgICBASW5wdXQoKSB2b3RlQ291bnQgPSAwO1xyXG4gICAgQElucHV0KCkgaVZvdGUgPSAwO1xyXG5cclxuICAgIEBPdXRwdXQoKSB2b3RlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICAgIHVwVm90ZSgpIHtcclxuICAgICAgICBpZiAodGhpcy5pVm90ZSA9PSAxKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5pVm90ZSsrO1xyXG5cclxuICAgICAgICB0aGlzLnZvdGUuZW1pdCh7IGlWb3RlOiB0aGlzLmlWb3RlIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGRvd25Wb3RlKCl7XHJcbiAgICAgICAgaWYgKHRoaXMuaVZvdGUgPT0gLTEpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLmlWb3RlLS07XHJcblxyXG4gICAgICAgIHRoaXMudm90ZS5lbWl0KHsgaVZvdGU6IHRoaXMuaVZvdGUgfSk7XHJcbiAgICB9XHJcbn0iXX0=