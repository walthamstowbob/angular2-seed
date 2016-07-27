System.register(['angular2/core', './../services/tweet.service', './tweet.component'], function(exports_1, context_1) {
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
    var core_1, tweet_service_1, tweet_component_1;
    var TweetsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (tweet_service_1_1) {
                tweet_service_1 = tweet_service_1_1;
            },
            function (tweet_component_1_1) {
                tweet_component_1 = tweet_component_1_1;
            }],
        execute: function() {
            TweetsComponent = (function () {
                function TweetsComponent(tweetService) {
                    this.tweets = tweetService.getTweets();
                }
                TweetsComponent = __decorate([
                    core_1.Component({
                        selector: 'tweets',
                        template: "\n        <div *ngFor=\"#tweet of tweets\">\n            <tweet [data]=\"tweet\"></tweet>\n        </div>\n    ",
                        providers: [tweet_service_1.TweetService],
                        directives: [tweet_component_1.TweetComponent]
                    }), 
                    __metadata('design:paramtypes', [tweet_service_1.TweetService])
                ], TweetsComponent);
                return TweetsComponent;
            }());
            exports_1("TweetsComponent", TweetsComponent);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHdlZXRzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInR3ZWV0cy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFjQTtnQkFHSSx5QkFBWSxZQUEwQjtvQkFDbEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxZQUFZLENBQUMsU0FBUyxFQUFFLENBQUM7Z0JBQzNDLENBQUM7Z0JBZkw7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsUUFBUTt3QkFDbEIsUUFBUSxFQUFFLGlIQUlUO3dCQUNELFNBQVMsRUFBRSxDQUFDLDRCQUFZLENBQUM7d0JBQ3pCLFVBQVUsRUFBRSxDQUFDLGdDQUFjLENBQUM7cUJBQy9CLENBQUM7O21DQUFBO2dCQU9GLHNCQUFDO1lBQUQsQ0FBQyxBQU5ELElBTUM7WUFORCw2Q0FNQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5pbXBvcnQge1R3ZWV0U2VydmljZX0gZnJvbSAnLi8uLi9zZXJ2aWNlcy90d2VldC5zZXJ2aWNlJztcclxuaW1wb3J0IHtUd2VldENvbXBvbmVudH0gZnJvbSAnLi90d2VldC5jb21wb25lbnQnXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAndHdlZXRzJyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICAgICAgPGRpdiAqbmdGb3I9XCIjdHdlZXQgb2YgdHdlZXRzXCI+XHJcbiAgICAgICAgICAgIDx0d2VldCBbZGF0YV09XCJ0d2VldFwiPjwvdHdlZXQ+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICBgLFxyXG4gICAgcHJvdmlkZXJzOiBbVHdlZXRTZXJ2aWNlXSxcclxuICAgIGRpcmVjdGl2ZXM6IFtUd2VldENvbXBvbmVudF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFR3ZWV0c0NvbXBvbmVudCB7XHJcbiAgICB0d2VldHM6IGFueVtdO1xyXG4gICAgXHJcbiAgICBjb25zdHJ1Y3Rvcih0d2VldFNlcnZpY2U6IFR3ZWV0U2VydmljZSkge1xyXG4gICAgICAgIHRoaXMudHdlZXRzID0gdHdlZXRTZXJ2aWNlLmdldFR3ZWV0cygpO1xyXG4gICAgfVxyXG59ICJdfQ==