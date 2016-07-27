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
    var ContactFormComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ContactFormComponent = (function () {
                function ContactFormComponent() {
                }
                ContactFormComponent.prototype.onSubmit = function (form) {
                    console.log(form);
                };
                ContactFormComponent = __decorate([
                    core_1.Component({
                        selector: 'contact-form',
                        templateUrl: 'app/components/contact-form.component.html',
                    }), 
                    __metadata('design:paramtypes', [])
                ], ContactFormComponent);
                return ContactFormComponent;
            }());
            exports_1("ContactFormComponent", ContactFormComponent);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFjdC1mb3JtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNvbnRhY3QtZm9ybS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFRQTtnQkFBQTtnQkFJQSxDQUFDO2dCQUhHLHVDQUFRLEdBQVIsVUFBUyxJQUFJO29CQUNULE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3RCLENBQUM7Z0JBVEw7b0JBQUMsZ0JBQVMsQ0FBRTt3QkFFUixRQUFRLEVBQUUsY0FBYzt3QkFDeEIsV0FBVyxFQUFFLDRDQUE0QztxQkFDNUQsQ0FBQzs7d0NBQUE7Z0JBTUYsMkJBQUM7WUFBRCxDQUFDLEFBSkQsSUFJQztZQUpELHVEQUlDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50ICh7XHJcblxyXG4gICAgc2VsZWN0b3I6ICdjb250YWN0LWZvcm0nLFxyXG4gICAgdGVtcGxhdGVVcmw6ICdhcHAvY29tcG9uZW50cy9jb250YWN0LWZvcm0uY29tcG9uZW50Lmh0bWwnLFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIENvbnRhY3RGb3JtQ29tcG9uZW50IHtcclxuICAgIG9uU3VibWl0KGZvcm0pe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGZvcm0pO1xyXG4gICAgfVxyXG59Il19