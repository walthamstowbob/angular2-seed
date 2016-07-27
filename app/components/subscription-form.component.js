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
    var SubscriptionFormComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            SubscriptionFormComponent = (function () {
                function SubscriptionFormComponent() {
                    this.frequencies = [
                        { id: 1, label: 'Daily' },
                        { id: 2, label: 'Weekly' },
                        { id: 3, label: 'Monthly' }
                    ];
                }
                SubscriptionFormComponent.prototype.onSubmit = function (form) {
                    console.log(form);
                };
                SubscriptionFormComponent = __decorate([
                    core_1.Component({
                        selector: 'subscription-form',
                        templateUrl: 'app/components/subscription-form.component.html',
                    }), 
                    __metadata('design:paramtypes', [])
                ], SubscriptionFormComponent);
                return SubscriptionFormComponent;
            }());
            exports_1("SubscriptionFormComponent", SubscriptionFormComponent);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3Vic2NyaXB0aW9uLWZvcm0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic3Vic2NyaXB0aW9uLWZvcm0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBUUE7Z0JBQUE7b0JBQ0ksZ0JBQVcsR0FBRzt3QkFDVixFQUFFLEVBQUUsRUFBQyxDQUFDLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRTt3QkFDeEIsRUFBRSxFQUFFLEVBQUMsQ0FBQyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUU7d0JBQ3pCLEVBQUUsRUFBRSxFQUFDLENBQUMsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFO3FCQUM3QixDQUFDO2dCQUtOLENBQUM7Z0JBSEcsNENBQVEsR0FBUixVQUFTLElBQUk7b0JBQ1QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDdEIsQ0FBQztnQkFmTDtvQkFBQyxnQkFBUyxDQUFFO3dCQUVSLFFBQVEsRUFBRSxtQkFBbUI7d0JBQzdCLFdBQVcsRUFBRSxpREFBaUQ7cUJBQ2pFLENBQUM7OzZDQUFBO2dCQVlGLGdDQUFDO1lBQUQsQ0FBQyxBQVZELElBVUM7WUFWRCxpRUFVQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCAoe1xyXG5cclxuICAgIHNlbGVjdG9yOiAnc3Vic2NyaXB0aW9uLWZvcm0nLFxyXG4gICAgdGVtcGxhdGVVcmw6ICdhcHAvY29tcG9uZW50cy9zdWJzY3JpcHRpb24tZm9ybS5jb21wb25lbnQuaHRtbCcsXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgU3Vic2NyaXB0aW9uRm9ybUNvbXBvbmVudCB7XHJcbiAgICBmcmVxdWVuY2llcyA9IFtcclxuICAgICAgICB7IGlkOjEsIGxhYmVsOiAnRGFpbHknIH0sXHJcbiAgICAgICAgeyBpZDoyLCBsYWJlbDogJ1dlZWtseScgfSxcclxuICAgICAgICB7IGlkOjMsIGxhYmVsOiAnTW9udGhseScgfVxyXG4gICAgXTtcclxuXHJcbiAgICBvblN1Ym1pdChmb3JtKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhmb3JtKTtcclxuICAgIH1cclxufSJdfQ==