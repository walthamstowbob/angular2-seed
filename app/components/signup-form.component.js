System.register(['angular2/core', 'angular2/common', '../validators/usernameValidators'], function(exports_1, context_1) {
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
    var core_1, common_1, usernameValidators_1;
    var SignUpFormComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (usernameValidators_1_1) {
                usernameValidators_1 = usernameValidators_1_1;
            }],
        execute: function() {
            SignUpFormComponent = (function () {
                function SignUpFormComponent(fb) {
                    this.form = fb.group({
                        username: ['', common_1.Validators.compose([
                                common_1.Validators.required,
                                usernameValidators_1.UsernameValidators.cannotContainSpace
                            ]), usernameValidators_1.UsernameValidators.shouldBeUnique],
                        password: ['', common_1.Validators.required]
                    });
                }
                //form = new ControlGroup({
                //  username: new Control('', Validators.required),
                //  password: new Control('', Validators.required)
                // });
                SignUpFormComponent.prototype.signup = function () {
                    // var result = authService.login(this.form.value);
                    this.form.find('username').setErrors({
                        invalidLogin: true
                    });
                    console.log(this.form.value);
                };
                SignUpFormComponent = __decorate([
                    core_1.Component({
                        selector: 'signup-form',
                        templateUrl: 'app/components/signup-form.component.html'
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder])
                ], SignUpFormComponent);
                return SignUpFormComponent;
            }());
            exports_1("SignUpFormComponent", SignUpFormComponent);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbnVwLWZvcm0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2lnbnVwLWZvcm0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBUUE7Z0JBR0ksNkJBQVksRUFBZTtvQkFDdkIsSUFBSSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDO3dCQUNqQixRQUFRLEVBQUUsQ0FBQyxFQUFFLEVBQUUsbUJBQVUsQ0FBQyxPQUFPLENBQUM7Z0NBQzlCLG1CQUFVLENBQUMsUUFBUTtnQ0FDbkIsdUNBQWtCLENBQUMsa0JBQWtCOzZCQUN4QyxDQUFDLEVBQUUsdUNBQWtCLENBQUMsY0FBYyxDQUFDO3dCQUN0QyxRQUFRLEVBQUUsQ0FBQyxFQUFFLEVBQUUsbUJBQVUsQ0FBQyxRQUFRLENBQUM7cUJBQ3RDLENBQUMsQ0FBQztnQkFDUCxDQUFDO2dCQUVELDJCQUEyQjtnQkFDM0IsbURBQW1EO2dCQUNuRCxrREFBa0Q7Z0JBQ2xELE1BQU07Z0JBRU4sb0NBQU0sR0FBTjtvQkFDSSxtREFBbUQ7b0JBQ25ELElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLFNBQVMsQ0FBQzt3QkFDakMsWUFBWSxFQUFFLElBQUk7cUJBQ3JCLENBQUMsQ0FBQztvQkFFSCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ2pDLENBQUM7Z0JBN0JMO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLGFBQWE7d0JBQ3ZCLFdBQVcsRUFBRSwyQ0FBMkM7cUJBQzNELENBQUM7O3VDQUFBO2dCQTJCRiwwQkFBQztZQUFELENBQUMsQUExQkQsSUEwQkM7WUExQkQscURBMEJDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcbmltcG9ydCB7Q29udHJvbEdyb3VwLCBDb250cm9sLCBGb3JtQnVpbGRlciwgVmFsaWRhdG9yc30gZnJvbSAnYW5ndWxhcjIvY29tbW9uJztcclxuaW1wb3J0IHtVc2VybmFtZVZhbGlkYXRvcnN9IGZyb20gJy4uL3ZhbGlkYXRvcnMvdXNlcm5hbWVWYWxpZGF0b3JzJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdzaWdudXAtZm9ybScsXHJcbiAgICB0ZW1wbGF0ZVVybDogJ2FwcC9jb21wb25lbnRzL3NpZ251cC1mb3JtLmNvbXBvbmVudC5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgU2lnblVwRm9ybUNvbXBvbmVudCB7XHJcbiAgICBmb3JtOiBDb250cm9sR3JvdXA7XHJcblxyXG4gICAgY29uc3RydWN0b3IoZmI6IEZvcm1CdWlsZGVyKXtcclxuICAgICAgICB0aGlzLmZvcm0gPSBmYi5ncm91cCh7XHJcbiAgICAgICAgICAgIHVzZXJuYW1lOiBbJycsIFZhbGlkYXRvcnMuY29tcG9zZShbXHJcbiAgICAgICAgICAgICAgICBWYWxpZGF0b3JzLnJlcXVpcmVkLCBcclxuICAgICAgICAgICAgICAgIFVzZXJuYW1lVmFsaWRhdG9ycy5jYW5ub3RDb250YWluU3BhY2VcclxuICAgICAgICAgICAgXSksIFVzZXJuYW1lVmFsaWRhdG9ycy5zaG91bGRCZVVuaXF1ZV0sXHJcbiAgICAgICAgICAgIHBhc3N3b3JkOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vZm9ybSA9IG5ldyBDb250cm9sR3JvdXAoe1xyXG4gICAgLy8gIHVzZXJuYW1lOiBuZXcgQ29udHJvbCgnJywgVmFsaWRhdG9ycy5yZXF1aXJlZCksXHJcbiAgICAvLyAgcGFzc3dvcmQ6IG5ldyBDb250cm9sKCcnLCBWYWxpZGF0b3JzLnJlcXVpcmVkKVxyXG4gICAgLy8gfSk7XHJcblxyXG4gICAgc2lnbnVwKCl7XHJcbiAgICAgICAgLy8gdmFyIHJlc3VsdCA9IGF1dGhTZXJ2aWNlLmxvZ2luKHRoaXMuZm9ybS52YWx1ZSk7XHJcbiAgICAgICAgdGhpcy5mb3JtLmZpbmQoJ3VzZXJuYW1lJykuc2V0RXJyb3JzKHtcclxuICAgICAgICAgICAgaW52YWxpZExvZ2luOiB0cnVlXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5mb3JtLnZhbHVlKTtcclxuICAgIH1cclxufSJdfQ==