System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var ChangePasswordValidators;
    return {
        setters:[],
        execute: function() {
            ChangePasswordValidators = (function () {
                function ChangePasswordValidators() {
                }
                ChangePasswordValidators.complexPassword = function (control) {
                    var minLength = 5;
                    if (control.value == '')
                        return null;
                    if (control.value.length < minLength)
                        return {
                            complexPassword: {
                                minLength: minLength
                            }
                        };
                    return null;
                };
                ChangePasswordValidators.passwordsShouldMatch = function (group) {
                    var newPassword = group.find('newPassword').value;
                    var confirmPassword = group.find('confirmPassword').value;
                    // If either of these fields is empty, the validation 
                    // will be bypassed. We expect the required validator to be 
                    // applied first. 
                    if (newPassword == '' || confirmPassword == '')
                        return null;
                    if (newPassword != confirmPassword)
                        return { passwordsShouldMatch: true };
                    return null;
                };
                return ChangePasswordValidators;
            }());
            exports_1("ChangePasswordValidators", ChangePasswordValidators);
        }
    }
});
//# sourceMappingURL=change.passwordValidators.js.map