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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhbmdlLnBhc3N3b3JkVmFsaWRhdG9ycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNoYW5nZS5wYXNzd29yZFZhbGlkYXRvcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztZQUVBO2dCQUFBO2dCQW1DQSxDQUFDO2dCQWpDVSx3Q0FBZSxHQUF0QixVQUF1QixPQUFnQjtvQkFDbkMsSUFBTSxTQUFTLEdBQUcsQ0FBQyxDQUFDO29CQUdwQixFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxJQUFJLEVBQUUsQ0FBQzt3QkFDcEIsTUFBTSxDQUFDLElBQUksQ0FBQztvQkFFaEIsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsU0FBUyxDQUFDO3dCQUVqQyxNQUFNLENBQUM7NEJBQ0gsZUFBZSxFQUFFO2dDQUNiLFNBQVMsRUFBRSxTQUFTOzZCQUN2Qjt5QkFDSixDQUFDO29CQUVOLE1BQU0sQ0FBQyxJQUFJLENBQUM7Z0JBQ2hCLENBQUM7Z0JBRU0sNkNBQW9CLEdBQTNCLFVBQTRCLEtBQW1CO29CQUMzQyxJQUFJLFdBQVcsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLEtBQUssQ0FBQztvQkFDbEQsSUFBSSxlQUFlLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLEtBQUssQ0FBQztvQkFFMUQsc0RBQXNEO29CQUN0RCw0REFBNEQ7b0JBQzVELGtCQUFrQjtvQkFDbEIsRUFBRSxDQUFDLENBQUMsV0FBVyxJQUFJLEVBQUUsSUFBSSxlQUFlLElBQUksRUFBRSxDQUFDO3dCQUMzQyxNQUFNLENBQUMsSUFBSSxDQUFDO29CQUVoQixFQUFFLENBQUMsQ0FBQyxXQUFXLElBQUksZUFBZSxDQUFDO3dCQUMvQixNQUFNLENBQUMsRUFBRSxvQkFBb0IsRUFBRSxJQUFJLEVBQUUsQ0FBQztvQkFFMUMsTUFBTSxDQUFDLElBQUksQ0FBQztnQkFDaEIsQ0FBQztnQkFDTCwrQkFBQztZQUFELENBQUMsQUFuQ0QsSUFtQ0M7WUFuQ0QsK0RBbUNDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbnRyb2wsIENvbnRyb2xHcm91cH0gZnJvbSAnYW5ndWxhcjIvY29tbW9uJztcclxuXHJcbmV4cG9ydCBjbGFzcyBDaGFuZ2VQYXNzd29yZFZhbGlkYXRvcnMge1xyXG5cclxuICAgIHN0YXRpYyBjb21wbGV4UGFzc3dvcmQoY29udHJvbDogQ29udHJvbCl7XHJcbiAgICAgICAgY29uc3QgbWluTGVuZ3RoID0gNTtcclxuICAgICAgICBcclxuICAgICAgIFxyXG4gICAgICAgIGlmIChjb250cm9sLnZhbHVlID09ICcnKVxyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDsgXHJcbiAgICAgXHJcbiAgICAgICAgaWYgKGNvbnRyb2wudmFsdWUubGVuZ3RoIDwgbWluTGVuZ3RoKVxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICByZXR1cm4geyBcclxuICAgICAgICAgICAgICAgIGNvbXBsZXhQYXNzd29yZDoge1xyXG4gICAgICAgICAgICAgICAgICAgIG1pbkxlbmd0aDogbWluTGVuZ3RoXHJcbiAgICAgICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgc3RhdGljIHBhc3N3b3Jkc1Nob3VsZE1hdGNoKGdyb3VwOiBDb250cm9sR3JvdXApe1xyXG4gICAgICAgIHZhciBuZXdQYXNzd29yZCA9IGdyb3VwLmZpbmQoJ25ld1Bhc3N3b3JkJykudmFsdWU7XHJcbiAgICAgICAgdmFyIGNvbmZpcm1QYXNzd29yZCA9IGdyb3VwLmZpbmQoJ2NvbmZpcm1QYXNzd29yZCcpLnZhbHVlO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIElmIGVpdGhlciBvZiB0aGVzZSBmaWVsZHMgaXMgZW1wdHksIHRoZSB2YWxpZGF0aW9uIFxyXG4gICAgICAgIC8vIHdpbGwgYmUgYnlwYXNzZWQuIFdlIGV4cGVjdCB0aGUgcmVxdWlyZWQgdmFsaWRhdG9yIHRvIGJlIFxyXG4gICAgICAgIC8vIGFwcGxpZWQgZmlyc3QuIFxyXG4gICAgICAgIGlmIChuZXdQYXNzd29yZCA9PSAnJyB8fCBjb25maXJtUGFzc3dvcmQgPT0gJycpXHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmIChuZXdQYXNzd29yZCAhPSBjb25maXJtUGFzc3dvcmQpXHJcbiAgICAgICAgICAgIHJldHVybiB7IHBhc3N3b3Jkc1Nob3VsZE1hdGNoOiB0cnVlIH07XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG59Il19