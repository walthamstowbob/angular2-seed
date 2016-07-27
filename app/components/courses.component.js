System.register(['angular2/core', './../services/course.service', './../directives/auto-grow.directive'], function(exports_1, context_1) {
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
    var core_1, course_service_1, auto_grow_directive_1;
    var CoursesComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (course_service_1_1) {
                course_service_1 = course_service_1_1;
            },
            function (auto_grow_directive_1_1) {
                auto_grow_directive_1 = auto_grow_directive_1_1;
            }],
        execute: function() {
            CoursesComponent = (function () {
                function CoursesComponent(courseService) {
                    this.title = "The title of the courses page";
                    this.courses = courseService.getCourses();
                }
                CoursesComponent = __decorate([
                    core_1.Component({
                        selector: 'courses',
                        template: "\n        <h2>Courses</h2>\n        {{ title }}<br>\n        <input type=\"text\" autoGrow>\n        <ul>\n            <li *ngFor = \"#course of courses\">\n            {{ course }}\n            </li>\n        </ul>\n            ",
                        providers: [course_service_1.CourseService],
                        directives: [auto_grow_directive_1.AutoGrowDirective]
                    }), 
                    __metadata('design:paramtypes', [course_service_1.CourseService])
                ], CoursesComponent);
                return CoursesComponent;
            }());
            exports_1("CoursesComponent", CoursesComponent);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY291cnNlcy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb3Vyc2VzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQW1CQTtnQkFJSSwwQkFBWSxhQUE0QjtvQkFIeEMsVUFBSyxHQUFHLCtCQUErQixDQUFDO29CQUlwQyxJQUFJLENBQUMsT0FBTyxHQUFHLGFBQWEsQ0FBQyxVQUFVLEVBQUUsQ0FBQTtnQkFDN0MsQ0FBQztnQkFyQkw7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsU0FBUzt3QkFDbkIsUUFBUSxFQUFFLHVPQVNEO3dCQUNMLFNBQVMsRUFBRSxDQUFDLDhCQUFhLENBQUM7d0JBQzFCLFVBQVUsRUFBRSxDQUFDLHVDQUFpQixDQUFDO3FCQUN0QyxDQUFDOztvQ0FBQTtnQkFRRix1QkFBQztZQUFELENBQUMsQUFQRCxJQU9DO1lBUEQsK0NBT0MsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuaW1wb3J0IHtDb3Vyc2VTZXJ2aWNlfSBmcm9tICcuLy4uL3NlcnZpY2VzL2NvdXJzZS5zZXJ2aWNlJztcclxuaW1wb3J0IHtBdXRvR3Jvd0RpcmVjdGl2ZX0gZnJvbSAnLi8uLi9kaXJlY3RpdmVzL2F1dG8tZ3Jvdy5kaXJlY3RpdmUnXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnY291cnNlcycsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgICAgIDxoMj5Db3Vyc2VzPC9oMj5cclxuICAgICAgICB7eyB0aXRsZSB9fTxicj5cclxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBhdXRvR3Jvdz5cclxuICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgIDxsaSAqbmdGb3IgPSBcIiNjb3Vyc2Ugb2YgY291cnNlc1wiPlxyXG4gICAgICAgICAgICB7eyBjb3Vyc2UgfX1cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICBgLFxyXG4gICAgICAgIHByb3ZpZGVyczogW0NvdXJzZVNlcnZpY2VdLFxyXG4gICAgICAgIGRpcmVjdGl2ZXM6IFtBdXRvR3Jvd0RpcmVjdGl2ZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIENvdXJzZXNDb21wb25lbnQge1xyXG4gICAgdGl0bGUgPSBcIlRoZSB0aXRsZSBvZiB0aGUgY291cnNlcyBwYWdlXCI7XHJcbiAgICBjb3Vyc2VzO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGNvdXJzZVNlcnZpY2U6IENvdXJzZVNlcnZpY2Upe1xyXG4gICAgICAgIHRoaXMuY291cnNlcyA9IGNvdXJzZVNlcnZpY2UuZ2V0Q291cnNlcygpXHJcbiAgICB9XHJcbn0iXX0=