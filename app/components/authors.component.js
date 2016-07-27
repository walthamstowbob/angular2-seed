System.register(['angular2/core', './../services/author.service'], function(exports_1, context_1) {
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
    var core_1, author_service_1;
    var AuthorsComponent, AuthorComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (author_service_1_1) {
                author_service_1 = author_service_1_1;
            }],
        execute: function() {
            AuthorsComponent = (function () {
                function AuthorsComponent(authorService) {
                    this.title = "The authors of courses";
                    this.authors = authorService.getAuthors();
                }
                AuthorsComponent = __decorate([
                    core_1.Component({
                        selector: 'authors',
                        template: "\n        <h2>Authors</h2>\n        {{title}}\n        <br>\n        <input type=\"text\" autoGrow>\n        <ul>\n          <li *ngFor=\"#author of authors\">\n          {{ author }}\n          </li>\n        </ul>\n        ",
                        providers: [author_service_1.AuthorService]
                    }), 
                    __metadata('design:paramtypes', [author_service_1.AuthorService])
                ], AuthorsComponent);
                return AuthorsComponent;
            }());
            exports_1("AuthorsComponent", AuthorsComponent);
            AuthorComponent = (function () {
                function AuthorComponent(authorService) {
                    this.title = "The title of the authors page";
                    this.courses = authorService.getAuthors();
                }
                AuthorComponent = __decorate([
                    core_1.Component({
                        selector: 'authors',
                        template: "\n            <h2>Authors</h2>\n        {{ title }}\n        <ul>\n            <li *ngFor = \"#author of authors\">\n            {{ author }}\n            </li>\n        </ul>\n            ",
                        providers: [author_service_1.AuthorService]
                    }), 
                    __metadata('design:paramtypes', [author_service_1.AuthorService])
                ], AuthorComponent);
                return AuthorComponent;
            }());
            exports_1("AuthorComponent", AuthorComponent);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aG9ycy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhdXRob3JzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQW1CQTtnQkFJRSwwQkFBYSxhQUE0QjtvQkFGekMsVUFBSyxHQUFHLHdCQUF3QixDQUFDO29CQUcvQixJQUFJLENBQUMsT0FBTyxHQUFHLGFBQWEsQ0FBQyxVQUFVLEVBQUUsQ0FBQztnQkFDNUMsQ0FBQztnQkFyQkg7b0JBQUMsZ0JBQVMsQ0FBRTt3QkFDVixRQUFRLEVBQUUsU0FBUzt3QkFDbkIsUUFBUSxFQUFDLG1PQVVGO3dCQUNOLFNBQVMsRUFBRSxDQUFDLDhCQUFhLENBQUM7cUJBQzVCLENBQUM7O29DQUFBO2dCQVFGLHVCQUFDO1lBQUQsQ0FBQyxBQVBELElBT0M7WUFQRCwrQ0FPQyxDQUFBO1lBaUJEO2dCQUtJLHlCQUFZLGFBQTRCO29CQUh4QyxVQUFLLEdBQUcsK0JBQStCLENBQUM7b0JBSXBDLElBQUksQ0FBQyxPQUFPLEdBQUcsYUFBYSxDQUFDLFVBQVUsRUFBRSxDQUFBO2dCQUM3QyxDQUFDO2dCQXRCTDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxTQUFTO3dCQUNuQixRQUFRLEVBQUUsK0xBUUQ7d0JBQ1QsU0FBUyxFQUFFLENBQUMsOEJBQWEsQ0FBQztxQkFDN0IsQ0FBQzs7bUNBQUE7Z0JBV0Ysc0JBQUM7WUFBRCxDQUFDLEFBUkQsSUFRQztZQVJELDZDQVFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcbmltcG9ydCB7QXV0aG9yU2VydmljZX0gZnJvbSAnLi8uLi9zZXJ2aWNlcy9hdXRob3Iuc2VydmljZSc7XHJcbmltcG9ydCB7QXV0b0dyb3dEaXJlY3RpdmV9IGZyb20gJy4vLi4vZGlyZWN0aXZlcy9hdXRvLWdyb3cuZGlyZWN0aXZlJ1xyXG5cclxuQENvbXBvbmVudCAoe1xyXG4gIHNlbGVjdG9yOiAnYXV0aG9ycycsXHJcbiAgdGVtcGxhdGU6YFxyXG4gICAgICAgIDxoMj5BdXRob3JzPC9oMj5cclxuICAgICAgICB7e3RpdGxlfX1cclxuICAgICAgICA8YnI+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgYXV0b0dyb3c+XHJcbiAgICAgICAgPHVsPlxyXG4gICAgICAgICAgPGxpICpuZ0Zvcj1cIiNhdXRob3Igb2YgYXV0aG9yc1wiPlxyXG4gICAgICAgICAge3sgYXV0aG9yIH19XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgIDwvdWw+XHJcbiAgICAgICAgYCxcclxuICAgcHJvdmlkZXJzOiBbQXV0aG9yU2VydmljZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIEF1dGhvcnNDb21wb25lbnQge1xyXG4gIGF1dGhvcnM6IHN0cmluZ1tdO1xyXG4gIHRpdGxlID0gXCJUaGUgYXV0aG9ycyBvZiBjb3Vyc2VzXCI7XHJcbiAgXHJcbiAgY29uc3RydWN0b3IgKGF1dGhvclNlcnZpY2U6IEF1dGhvclNlcnZpY2UpIHtcclxuICAgIHRoaXMuYXV0aG9ycyA9IGF1dGhvclNlcnZpY2UuZ2V0QXV0aG9ycygpO1xyXG4gIH1cclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2F1dGhvcnMnLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgICAgICAgICAgPGgyPkF1dGhvcnM8L2gyPlxyXG4gICAgICAgIHt7IHRpdGxlIH19XHJcbiAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICA8bGkgKm5nRm9yID0gXCIjYXV0aG9yIG9mIGF1dGhvcnNcIj5cclxuICAgICAgICAgICAge3sgYXV0aG9yIH19XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgYCxcclxuICAgIHByb3ZpZGVyczogW0F1dGhvclNlcnZpY2VdXHJcbn0pXHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIEF1dGhvckNvbXBvbmVudHtcclxuICAgIGF1dGhvcnM6IHN0cmluZ1tdO1xyXG4gICAgdGl0bGUgPSBcIlRoZSB0aXRsZSBvZiB0aGUgYXV0aG9ycyBwYWdlXCI7XHJcbiAgICBjb3Vyc2VzO1xyXG4gICAgXHJcbiAgICBjb25zdHJ1Y3RvcihhdXRob3JTZXJ2aWNlOiBBdXRob3JTZXJ2aWNlKXtcclxuICAgICAgICB0aGlzLmNvdXJzZXMgPSBhdXRob3JTZXJ2aWNlLmdldEF1dGhvcnMoKVxyXG4gICAgfVxyXG59XHJcbiJdfQ==