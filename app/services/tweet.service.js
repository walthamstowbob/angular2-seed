System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var TweetService;
    return {
        setters:[],
        execute: function() {
            TweetService = (function () {
                function TweetService() {
                }
                TweetService.prototype.getTweets = function () {
                    return [
                        {
                            imageUrl: "http://lorempixel.com/100/100/people?1",
                            author: "Windward",
                            handle: "@windwardstudios",
                            body: "Looking for a better company reporting or docgen app?",
                            totalLikes: 0,
                            iLike: false
                        },
                        {
                            imageUrl: "http://lorempixel.com/100/100/people?2",
                            author: "AngularJS News",
                            handle: "@angularjs_news",
                            body: "Right Relevance : Influencers, Articles and Conversations ",
                            totalLikes: 5,
                            iLike: true
                        },
                        {
                            imageUrl: "http://lorempixel.com/100/100/people?3",
                            author: "UX & Bootstrap",
                            handle: "@3rdwave",
                            body: "10 Reasons Why Web Projects Fail ",
                            totalLikes: 1,
                            iLike: true
                        }];
                };
                return TweetService;
            }());
            exports_1("TweetService", TweetService);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHdlZXQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInR3ZWV0LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztZQUFBO2dCQUFBO2dCQTRCQSxDQUFDO2dCQTNCSSxnQ0FBUyxHQUFUO29CQUNHLE1BQU0sQ0FBQzt3QkFDUDs0QkFDSSxRQUFRLEVBQUUsd0NBQXdDOzRCQUNsRCxNQUFNLEVBQUUsVUFBVTs0QkFDbEIsTUFBTSxFQUFFLGtCQUFrQjs0QkFDMUIsSUFBSSxFQUFFLHVEQUF1RDs0QkFDN0QsVUFBVSxFQUFFLENBQUM7NEJBQ2IsS0FBSyxFQUFFLEtBQUs7eUJBQ2Y7d0JBQ0Q7NEJBQ0ksUUFBUSxFQUFFLHdDQUF3Qzs0QkFDbEQsTUFBTSxFQUFFLGdCQUFnQjs0QkFDeEIsTUFBTSxFQUFFLGlCQUFpQjs0QkFDekIsSUFBSSxFQUFFLDREQUE0RDs0QkFDbEUsVUFBVSxFQUFFLENBQUM7NEJBQ2IsS0FBSyxFQUFFLElBQUk7eUJBQ2Q7d0JBQ0Q7NEJBQ0ksUUFBUSxFQUFFLHdDQUF3Qzs0QkFDbEQsTUFBTSxFQUFFLGdCQUFnQjs0QkFDeEIsTUFBTSxFQUFFLFVBQVU7NEJBQ2xCLElBQUksRUFBRSxtQ0FBbUM7NEJBQ3pDLFVBQVUsRUFBRSxDQUFDOzRCQUNiLEtBQUssRUFBRSxJQUFJO3lCQUNkLENBQUMsQ0FBQztnQkFDUCxDQUFDO2dCQUNMLG1CQUFDO1lBQUQsQ0FBQyxBQTVCRCxJQTRCQztZQTVCRCx1Q0E0QkMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBUd2VldFNlcnZpY2V7XHJcbiAgICAgZ2V0VHdlZXRzKCkge1xyXG4gICAgICAgIHJldHVybiBbXHJcbiAgICAgICAgeyBcclxuICAgICAgICAgICAgaW1hZ2VVcmw6IFwiaHR0cDovL2xvcmVtcGl4ZWwuY29tLzEwMC8xMDAvcGVvcGxlPzFcIixcclxuICAgICAgICAgICAgYXV0aG9yOiBcIldpbmR3YXJkXCIsXHJcbiAgICAgICAgICAgIGhhbmRsZTogXCJAd2luZHdhcmRzdHVkaW9zXCIsXHJcbiAgICAgICAgICAgIGJvZHk6IFwiTG9va2luZyBmb3IgYSBiZXR0ZXIgY29tcGFueSByZXBvcnRpbmcgb3IgZG9jZ2VuIGFwcD9cIixcclxuICAgICAgICAgICAgdG90YWxMaWtlczogMCxcclxuICAgICAgICAgICAgaUxpa2U6IGZhbHNlXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7IFxyXG4gICAgICAgICAgICBpbWFnZVVybDogXCJodHRwOi8vbG9yZW1waXhlbC5jb20vMTAwLzEwMC9wZW9wbGU/MlwiLFxyXG4gICAgICAgICAgICBhdXRob3I6IFwiQW5ndWxhckpTIE5ld3NcIixcclxuICAgICAgICAgICAgaGFuZGxlOiBcIkBhbmd1bGFyanNfbmV3c1wiLFxyXG4gICAgICAgICAgICBib2R5OiBcIlJpZ2h0IFJlbGV2YW5jZSA6IEluZmx1ZW5jZXJzLCBBcnRpY2xlcyBhbmQgQ29udmVyc2F0aW9ucyBcIixcclxuICAgICAgICAgICAgdG90YWxMaWtlczogNSxcclxuICAgICAgICAgICAgaUxpa2U6IHRydWVcclxuICAgICAgICB9LFxyXG4gICAgICAgIHsgXHJcbiAgICAgICAgICAgIGltYWdlVXJsOiBcImh0dHA6Ly9sb3JlbXBpeGVsLmNvbS8xMDAvMTAwL3Blb3BsZT8zXCIsXHJcbiAgICAgICAgICAgIGF1dGhvcjogXCJVWCAmIEJvb3RzdHJhcFwiLFxyXG4gICAgICAgICAgICBoYW5kbGU6IFwiQDNyZHdhdmVcIixcclxuICAgICAgICAgICAgYm9keTogXCIxMCBSZWFzb25zIFdoeSBXZWIgUHJvamVjdHMgRmFpbCBcIixcclxuICAgICAgICAgICAgdG90YWxMaWtlczogMSxcclxuICAgICAgICAgICAgaUxpa2U6IHRydWVcclxuICAgICAgICB9XTtcclxuICAgIH1cclxufVxyXG4iXX0=