System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var UsernameValidators;
    return {
        setters:[],
        execute: function() {
            UsernameValidators = (function () {
                function UsernameValidators() {
                }
                UsernameValidators.shouldBeUnique = function (control) {
                    return new Promise(function (resolve, reject) {
                        setTimeout(function () {
                            if (control.value == "barry")
                                resolve({ shouldBeUnique: true });
                            else
                                resolve(null);
                        }, 1000);
                    });
                };
                UsernameValidators.cannotContainSpace = function (control) {
                    if (control.value.indexOf(' ') >= 0)
                        return { cannotContainSpace: true };
                    return null;
                };
                return UsernameValidators;
            }());
            exports_1("UsernameValidators", UsernameValidators);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcm5hbWVWYWxpZGF0b3JzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidXNlcm5hbWVWYWxpZGF0b3JzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7WUFFQTtnQkFBQTtnQkFrQkEsQ0FBQztnQkFoQlUsaUNBQWMsR0FBckIsVUFBc0IsT0FBZ0I7b0JBQ2xDLE1BQU0sQ0FBQyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNO3dCQUMvQixVQUFVLENBQUM7NEJBQ1AsRUFBRSxDQUFBLENBQUMsT0FBTyxDQUFDLEtBQUssSUFBSSxPQUFPLENBQUM7Z0NBQ3hCLE9BQU8sQ0FBQyxFQUFFLGNBQWMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDOzRCQUN0QyxJQUFJO2dDQUNBLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQzt3QkFDdEIsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO29CQUNiLENBQUMsQ0FBQyxDQUFDO2dCQUNQLENBQUM7Z0JBQ00scUNBQWtCLEdBQXpCLFVBQTBCLE9BQWdCO29CQUN0QyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7d0JBQ2hDLE1BQU0sQ0FBQyxFQUFFLGtCQUFrQixFQUFFLElBQUksRUFBRSxDQUFDO29CQUVwQyxNQUFNLENBQUMsSUFBSSxDQUFDO2dCQUNwQixDQUFDO2dCQUNMLHlCQUFDO1lBQUQsQ0FBQyxBQWxCRCxJQWtCQztZQWxCRCxtREFrQkMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29udHJvbH0gZnJvbSAnYW5ndWxhcjIvY29tbW9uJztcclxuXHJcbmV4cG9ydCBjbGFzcyBVc2VybmFtZVZhbGlkYXRvcnMge1xyXG4gICAgXHJcbiAgICBzdGF0aWMgc2hvdWxkQmVVbmlxdWUoY29udHJvbDogQ29udHJvbCl7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgaWYoY29udHJvbC52YWx1ZSA9PSBcImJhcnJ5XCIpXHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh7IHNob3VsZEJlVW5pcXVlOiB0cnVlIH0pO1xyXG4gICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUobnVsbCk7XHJcbiAgICAgICAgICAgIH0sIDEwMDApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgc3RhdGljIGNhbm5vdENvbnRhaW5TcGFjZShjb250cm9sOiBDb250cm9sKXtcclxuICAgICAgICBpZiAoY29udHJvbC52YWx1ZS5pbmRleE9mKCcgJykgPj0gMClcclxuICAgICAgICAgICAgcmV0dXJuIHsgY2Fubm90Q29udGFpblNwYWNlOiB0cnVlIH07XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxufSJdfQ==