System.register(['angular2/core', './components/zippy.component', './components/tweet.component', './pipes/summary.pipe', './services/tweet.service', './components/vote.component', './components/like.component', './components/favorite.component', './components/courses.component', './components/authors.component', './components/artists.component'], function(exports_1, context_1) {
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
    var core_1, zippy_component_1, tweet_component_1, summary_pipe_1, tweet_service_1, vote_component_1, like_component_1, favorite_component_1, courses_component_1, authors_component_1, artists_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (zippy_component_1_1) {
                zippy_component_1 = zippy_component_1_1;
            },
            function (tweet_component_1_1) {
                tweet_component_1 = tweet_component_1_1;
            },
            function (summary_pipe_1_1) {
                summary_pipe_1 = summary_pipe_1_1;
            },
            function (tweet_service_1_1) {
                tweet_service_1 = tweet_service_1_1;
            },
            function (vote_component_1_1) {
                vote_component_1 = vote_component_1_1;
            },
            function (like_component_1_1) {
                like_component_1 = like_component_1_1;
            },
            function (favorite_component_1_1) {
                favorite_component_1 = favorite_component_1_1;
            },
            function (courses_component_1_1) {
                courses_component_1 = courses_component_1_1;
            },
            function (authors_component_1_1) {
                authors_component_1 = authors_component_1_1;
            },
            function (artists_component_1_1) {
                artists_component_1 = artists_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(tweetService) {
                    this.viewMode = 'map';
                    this.courses = ['Course1', 'Course2', 'Course3'];
                    this.course = {
                        title: "Angular 2 for Beginners",
                        rating: 4.9745,
                        students: 5981,
                        price: 99.95,
                        releaseDate: new Date(2016, 3, 1)
                    };
                    this.tweet = {
                        totalVotes: 11,
                        iVote: false,
                        totalLikes: 10,
                        iLike: false
                    };
                    this.post = {
                        title: "Angular 2 Tutorial for Beginners",
                        body: "Lorem ipsum dolor sit amet, eam mediocrem molestiae honestatis cu, prima primis graeco ex eum. Pro propriae atomorum constituto ea, decore cetero definitiones cu ius. Ei verear deleniti laboramus quo, facete numquam nominati ea quo, id vix viris equidem percipit. Ei ullum aeque alienum vis, possit abhorreant vix ut.",
                        voteCount: 10,
                        iVote: 0,
                        title: "Title",
                        isFavorite: true
                    };
                    this.isUp = false;
                    this.isFavorite = false;
                    this.title = "Angular App";
                    this.tweets = tweetService.getTweets();
                }
                AppComponent.prototype.onFavoriteChange = function ($event) {
                    console.log($event);
                };
                AppComponent.prototype.onUpChange = function ($event) {
                    console.log($event);
                };
                AppComponent.prototype.onClick = function () {
                    this.isUp = !this.isUp;
                    this.isFavorite = !this.isFavorite;
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n              \n        <contact-form></contact-form>\n\n        <zippy heading=\"who can see my stuff?\">\n            Content of who can see my stuff\n        </zippy>\n\n        <zippy heading=\"Who can contact me?\">\n        Content of who can contact me\n        </zippy>\n        \n        <ul class=\"nav nav-pills\">\n            <li [class.active]=\"viewMode == 'map'\"><a (click)=\"viewMode = 'map'\">Map View</a></li>\n            <li [class.active]=\"viewMode == 'list'\"><a (click)=\"viewMode = 'list'\">List View</a></li>\n        </ul>\n\n        <div [ngSwitch]=\"viewMode\">\n            <template [ngSwitchWhen]=\"'map'\" ngSwitchDefault></template>\n            <template [ngSwitchWhen]=\"'list'\">List View Content</template>\n        </div>\n\n        <div class =\"map\"><iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3874.2854559160382!2d5.170772106274482!3d52.28611274115522!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x30368c8b0122d0f8!2sSimsation+Nederland!5e0!3m2!1sen!2sus!4v1467201296315\" width=\"600\" height=\"450\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe></div>\n\n        <ul>\n            <li *ngFor=\"#course of courses, #i = index\">\n                {{ i + 1 }} - {{ course }}\n            </li>\n        </ul>\n\n        <div class=\"map\">\n        {{ course.title | uppercase }}<br/>\n        {{ course.students | number }}<br/>\n        {{ course.rating | number:'2.2-2' }}<br/>\n        {{ course.price | currency:'EUR':true:'2.2-2' }}<br/>\n        {{ course.releaseDate | date:'MMM yyyy' }}<br/>\n        {{ course | json }}\n        </div>\n\n        <div class=\"map\">\n        {{ post.title }}<br/>\n        {{ post.body | summary:10}}\n        </div>\n        \n        <div *ngFor=\"#tweet of tweets\">\n            <tweet [data]=\"tweet\"></tweet>\n        </div>\n\n        <div [hidden]=\"courses.length == 0\">List of Courses</div>\n\n        <div [hidden]=\"courses.lenght > 0\">No courses active</div>\n        \n        <div *ngIf=\"courses.length == 0\">List of Courses</div>\n\n        <div *ngIf=\"courses.lenght > 0\">No courses active</div>\n\n        <vote\n            [voteCount]=\"post.voteCount\"\n            [iVote]=\"post.iVote\"\n            (vote)=\"onVote($event)\">\n        </vote>\n\n        <like [totalLikes]=\"tweet.totalLikes\" [iLike]=\"tweet.iLike\"></like>\n\n        <i class=\"glyphicon glyphicon-heart\"></i>\n\n        <i class=\"glyphicon glyphicon-star\"></i>\n\n        <favorite [isFavorite]=\"post.isFavorite\"\n        (change)=\"onFavoriteChange($event)\"></favorite>\n\n        <input type=\"text\" [(ngModel)]=\"title\" />\n        <input type=\"button\" (click)=\"title = ''\" value=\"Clear\" />\n        Preview: {{ title }}\n\n        <courses></courses>\n        <authors></authors>\n        <artists></artists>\n            ",
                        styles: ["\n    \n            .nav-pills {\n                margin-bottom: 20px;\n        }\n            .map {\n                margin-bottom: 20px;\n        }\n\n            .panel {\n                margin-bottom: 20px;\n            }\n        \n    "],
                        directives: [zippy_component_1.ZippyComponent, tweet_component_1.TweetComponent, vote_component_1.VoteComponent, like_component_1.LikeComponent, favorite_component_1.FavoriteComponent, courses_component_1.CoursesComponent, authors_component_1.AuthorsComponent, artists_component_1.ArtistsComponent],
                        providers: [tweet_service_1.TweetService],
                        pipes: [summary_pipe_1.SummaryPipe]
                    }), 
                    __metadata('design:paramtypes', [(typeof (_a = typeof tweet_service_1.TweetService !== 'undefined' && tweet_service_1.TweetService) === 'function' && _a) || Object])
                ], AppComponent);
                return AppComponent;
                var _a;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map