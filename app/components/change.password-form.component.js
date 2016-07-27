System.register(['angular2/core', 'angular2/common', '../validators/change.passwordValidators'], function(exports_1, context_1) {
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
    var core_1, common_1, change_passwordValidators_1;
    var ChangePasswordFormComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (change_passwordValidators_1_1) {
                change_passwordValidators_1 = change_passwordValidators_1_1;
            }],
        execute: function() {
            ChangePasswordFormComponent = (function () {
                function ChangePasswordFormComponent(fb) {
                    this.form = fb.group({
                        oldPassword: ['', common_1.Validators.required],
                        newPassword: ['', common_1.Validators.compose([
                                common_1.Validators.required,
                                change_passwordValidators_1.ChangePasswordValidators.complexPassword
                            ])],
                        // Note that here is no need to apply complexPassword validator
                        // to confirm password field. It's sufficient to apply it only to
                        // new password field. Next, passwordsShouldMatch validator
                        // will compare confirm password with new password and this will
                        // implicitly enforce that confirm password should match complexity
                        // rules. 
                        confirmPassword: ['', common_1.Validators.required]
                    }, { validator: change_passwordValidators_1.ChangePasswordValidators.passwordsShouldMatch });
                }
                ChangePasswordFormComponent.prototype.changePassword = function () {
                    // Validating the oldPassword on submit. In a real-world application
                    // here, we'll use a service to call the server. The server would
                    // tell us that the old password does not match. 
                    var oldPassword = this.form.find('oldPassword');
                    if (oldPassword.value != '1234')
                        oldPassword.setErrors({ validOldPassword: true });
                    if (this.form.valid)
                        alert("Password successfully changed.");
                };
                ChangePasswordFormComponent = __decorate([
                    core_1.Component({
                        selector: 'change-password',
                        templateUrl: 'app/components/change.password-form.component.html'
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder])
                ], ChangePasswordFormComponent);
                return ChangePasswordFormComponent;
            }());
            exports_1("ChangePasswordFormComponent", ChangePasswordFormComponent);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhbmdlLnBhc3N3b3JkLWZvcm0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2hhbmdlLnBhc3N3b3JkLWZvcm0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBUUE7Z0JBR0kscUNBQVksRUFBZTtvQkFDdkIsSUFBSSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDO3dCQUNqQixXQUFXLEVBQUUsQ0FBQyxFQUFFLEVBQUUsbUJBQVUsQ0FBQyxRQUFRLENBQUM7d0JBQ3RDLFdBQVcsRUFBRSxDQUFDLEVBQUUsRUFBRSxtQkFBVSxDQUFDLE9BQU8sQ0FBQztnQ0FDakMsbUJBQVUsQ0FBQyxRQUFRO2dDQUNuQixvREFBd0IsQ0FBQyxlQUFlOzZCQUMzQyxDQUFDLENBQUM7d0JBQ0gsK0RBQStEO3dCQUMvRCxpRUFBaUU7d0JBQ2pFLDJEQUEyRDt3QkFDM0QsZ0VBQWdFO3dCQUNoRSxtRUFBbUU7d0JBQ25FLFVBQVU7d0JBQ1YsZUFBZSxFQUFFLENBQUMsRUFBRSxFQUFFLG1CQUFVLENBQUMsUUFBUSxDQUFDO3FCQUM3QyxFQUFFLEVBQUUsU0FBUyxFQUFFLG9EQUF3QixDQUFDLG9CQUFvQixFQUFFLENBQUMsQ0FBQztnQkFDckUsQ0FBQztnQkFFRCxvREFBYyxHQUFkO29CQUNJLG9FQUFvRTtvQkFDcEUsaUVBQWlFO29CQUNqRSxpREFBaUQ7b0JBQ2pELElBQUksV0FBVyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO29CQUNoRCxFQUFFLENBQUMsQ0FBQyxXQUFXLENBQUMsS0FBSyxJQUFJLE1BQU0sQ0FBQzt3QkFDNUIsV0FBVyxDQUFDLFNBQVMsQ0FBQyxFQUFFLGdCQUFnQixFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7b0JBRXRELEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO3dCQUNoQixLQUFLLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztnQkFDaEQsQ0FBQztnQkFsQ0w7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsaUJBQWlCO3dCQUMzQixXQUFXLEVBQUUsb0RBQW9EO3FCQUNwRSxDQUFDOzsrQ0FBQTtnQkFnQ0Ysa0NBQUM7WUFBRCxDQUFDLEFBL0JELElBK0JDO1lBL0JELHFFQStCQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5pbXBvcnQge0NvbnRyb2xHcm91cCwgRm9ybUJ1aWxkZXIsIFZhbGlkYXRvcnN9IGZyb20gJ2FuZ3VsYXIyL2NvbW1vbic7XHJcbmltcG9ydCB7Q2hhbmdlUGFzc3dvcmRWYWxpZGF0b3JzfSBmcm9tICcuLi92YWxpZGF0b3JzL2NoYW5nZS5wYXNzd29yZFZhbGlkYXRvcnMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2NoYW5nZS1wYXNzd29yZCcsXHJcbiAgICB0ZW1wbGF0ZVVybDogJ2FwcC9jb21wb25lbnRzL2NoYW5nZS5wYXNzd29yZC1mb3JtLmNvbXBvbmVudC5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgQ2hhbmdlUGFzc3dvcmRGb3JtQ29tcG9uZW50IHtcclxuICAgIGZvcm06IENvbnRyb2xHcm91cDtcclxuICAgIFxyXG4gICAgY29uc3RydWN0b3IoZmI6IEZvcm1CdWlsZGVyKXtcclxuICAgICAgICB0aGlzLmZvcm0gPSBmYi5ncm91cCh7XHJcbiAgICAgICAgICAgIG9sZFBhc3N3b3JkOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxyXG4gICAgICAgICAgICBuZXdQYXNzd29yZDogWycnLCBWYWxpZGF0b3JzLmNvbXBvc2UoW1xyXG4gICAgICAgICAgICAgICAgVmFsaWRhdG9ycy5yZXF1aXJlZCxcclxuICAgICAgICAgICAgICAgIENoYW5nZVBhc3N3b3JkVmFsaWRhdG9ycy5jb21wbGV4UGFzc3dvcmRcclxuICAgICAgICAgICAgXSldLFxyXG4gICAgICAgICAgICAvLyBOb3RlIHRoYXQgaGVyZSBpcyBubyBuZWVkIHRvIGFwcGx5IGNvbXBsZXhQYXNzd29yZCB2YWxpZGF0b3JcclxuICAgICAgICAgICAgLy8gdG8gY29uZmlybSBwYXNzd29yZCBmaWVsZC4gSXQncyBzdWZmaWNpZW50IHRvIGFwcGx5IGl0IG9ubHkgdG9cclxuICAgICAgICAgICAgLy8gbmV3IHBhc3N3b3JkIGZpZWxkLiBOZXh0LCBwYXNzd29yZHNTaG91bGRNYXRjaCB2YWxpZGF0b3JcclxuICAgICAgICAgICAgLy8gd2lsbCBjb21wYXJlIGNvbmZpcm0gcGFzc3dvcmQgd2l0aCBuZXcgcGFzc3dvcmQgYW5kIHRoaXMgd2lsbFxyXG4gICAgICAgICAgICAvLyBpbXBsaWNpdGx5IGVuZm9yY2UgdGhhdCBjb25maXJtIHBhc3N3b3JkIHNob3VsZCBtYXRjaCBjb21wbGV4aXR5XHJcbiAgICAgICAgICAgIC8vIHJ1bGVzLiBcclxuICAgICAgICAgICAgY29uZmlybVBhc3N3b3JkOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdXHJcbiAgICAgICAgfSwgeyB2YWxpZGF0b3I6IENoYW5nZVBhc3N3b3JkVmFsaWRhdG9ycy5wYXNzd29yZHNTaG91bGRNYXRjaCB9KTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgY2hhbmdlUGFzc3dvcmQoKXtcclxuICAgICAgICAvLyBWYWxpZGF0aW5nIHRoZSBvbGRQYXNzd29yZCBvbiBzdWJtaXQuIEluIGEgcmVhbC13b3JsZCBhcHBsaWNhdGlvblxyXG4gICAgICAgIC8vIGhlcmUsIHdlJ2xsIHVzZSBhIHNlcnZpY2UgdG8gY2FsbCB0aGUgc2VydmVyLiBUaGUgc2VydmVyIHdvdWxkXHJcbiAgICAgICAgLy8gdGVsbCB1cyB0aGF0IHRoZSBvbGQgcGFzc3dvcmQgZG9lcyBub3QgbWF0Y2guIFxyXG4gICAgICAgIHZhciBvbGRQYXNzd29yZCA9IHRoaXMuZm9ybS5maW5kKCdvbGRQYXNzd29yZCcpO1xyXG4gICAgICAgIGlmIChvbGRQYXNzd29yZC52YWx1ZSAhPSAnMTIzNCcpIFxyXG4gICAgICAgICAgICBvbGRQYXNzd29yZC5zZXRFcnJvcnMoeyB2YWxpZE9sZFBhc3N3b3JkOiB0cnVlIH0pO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5mb3JtLnZhbGlkKVxyXG4gICAgICAgICAgICBhbGVydChcIlBhc3N3b3JkIHN1Y2Nlc3NmdWxseSBjaGFuZ2VkLlwiKTtcclxuICAgIH1cclxufSJdfQ==