System.register(['angular2/core', './../services/artist.service'], function(exports_1, context_1) {
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
    var core_1, artist_service_1;
    var ArtistsComponent, ArtistComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (artist_service_1_1) {
                artist_service_1 = artist_service_1_1;
            }],
        execute: function() {
            ArtistsComponent = (function () {
                function ArtistsComponent(artistService) {
                    this.title = "The artist of artists";
                    this.artists = artistService.getArtists();
                }
                ArtistsComponent = __decorate([
                    core_1.Component({
                        selector: 'artists',
                        template: "\n        <h2>Artists</h2>\n        {{title}}\n        <ul>\n          <li *ngFor=\"#artist of artists\">\n          {{ artist }}\n          </li>\n        </ul>\n        ",
                        providers: [artist_service_1.ArtistService]
                    }), 
                    __metadata('design:paramtypes', [artist_service_1.ArtistService])
                ], ArtistsComponent);
                return ArtistsComponent;
            }());
            exports_1("ArtistsComponent", ArtistsComponent);
            ArtistComponent = (function () {
                function ArtistComponent(artistService) {
                    this.title = "The title of the artists page";
                    this.courses = artistService.getArtists();
                }
                ArtistComponent = __decorate([
                    core_1.Component({
                        selector: 'artists',
                        template: "\n            <h2>Artists</h2>\n        {{ title }}\n        <ul>\n            <li *ngFor = \"#artist of artists\">\n            {{ artist }}\n            </li>\n        </ul>\n            ",
                        providers: [artist_service_1.ArtistService]
                    }), 
                    __metadata('design:paramtypes', [artist_service_1.ArtistService])
                ], ArtistComponent);
                return ArtistComponent;
            }());
            exports_1("ArtistComponent", ArtistComponent);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJ0aXN0cy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhcnRpc3RzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQWdCQTtnQkFJRSwwQkFBYSxhQUE0QjtvQkFGekMsVUFBSyxHQUFHLHVCQUF1QixDQUFDO29CQUc5QixJQUFJLENBQUMsT0FBTyxHQUFHLGFBQWEsQ0FBQyxVQUFVLEVBQUUsQ0FBQztnQkFDNUMsQ0FBQztnQkFuQkg7b0JBQUMsZ0JBQVMsQ0FBRTt3QkFDVixRQUFRLEVBQUUsU0FBUzt3QkFDbkIsUUFBUSxFQUFDLDZLQVFGO3dCQUNOLFNBQVMsRUFBRSxDQUFDLDhCQUFhLENBQUM7cUJBQzVCLENBQUM7O29DQUFBO2dCQVFGLHVCQUFDO1lBQUQsQ0FBQyxBQVBELElBT0M7WUFQRCwrQ0FPQyxDQUFBO1lBaUJEO2dCQUtJLHlCQUFZLGFBQTRCO29CQUh4QyxVQUFLLEdBQUcsK0JBQStCLENBQUM7b0JBSXBDLElBQUksQ0FBQyxPQUFPLEdBQUcsYUFBYSxDQUFDLFVBQVUsRUFBRSxDQUFBO2dCQUM3QyxDQUFDO2dCQXRCTDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxTQUFTO3dCQUNuQixRQUFRLEVBQUUsK0xBUUQ7d0JBQ1QsU0FBUyxFQUFFLENBQUMsOEJBQWEsQ0FBQztxQkFDN0IsQ0FBQzs7bUNBQUE7Z0JBV0Ysc0JBQUM7WUFBRCxDQUFDLEFBUkQsSUFRQztZQVJELDZDQVFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcbmltcG9ydCB7QXJ0aXN0U2VydmljZX0gZnJvbSAnLi8uLi9zZXJ2aWNlcy9hcnRpc3Quc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50ICh7XHJcbiAgc2VsZWN0b3I6ICdhcnRpc3RzJyxcclxuICB0ZW1wbGF0ZTpgXHJcbiAgICAgICAgPGgyPkFydGlzdHM8L2gyPlxyXG4gICAgICAgIHt7dGl0bGV9fVxyXG4gICAgICAgIDx1bD5cclxuICAgICAgICAgIDxsaSAqbmdGb3I9XCIjYXJ0aXN0IG9mIGFydGlzdHNcIj5cclxuICAgICAgICAgIHt7IGFydGlzdCB9fVxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICA8L3VsPlxyXG4gICAgICAgIGAsXHJcbiAgIHByb3ZpZGVyczogW0FydGlzdFNlcnZpY2VdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcnRpc3RzQ29tcG9uZW50IHtcclxuICBhdXRob3JzOiBzdHJpbmdbXTtcclxuICB0aXRsZSA9IFwiVGhlIGFydGlzdCBvZiBhcnRpc3RzXCI7XHJcbiAgXHJcbiAgY29uc3RydWN0b3IgKGFydGlzdFNlcnZpY2U6IEFydGlzdFNlcnZpY2UpIHtcclxuICAgIHRoaXMuYXJ0aXN0cyA9IGFydGlzdFNlcnZpY2UuZ2V0QXJ0aXN0cygpO1xyXG4gIH1cclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2FydGlzdHMnLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgICAgICAgICAgPGgyPkFydGlzdHM8L2gyPlxyXG4gICAgICAgIHt7IHRpdGxlIH19XHJcbiAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICA8bGkgKm5nRm9yID0gXCIjYXJ0aXN0IG9mIGFydGlzdHNcIj5cclxuICAgICAgICAgICAge3sgYXJ0aXN0IH19XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgYCxcclxuICAgIHByb3ZpZGVyczogW0FydGlzdFNlcnZpY2VdXHJcbn0pXHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIEFydGlzdENvbXBvbmVudHtcclxuICAgIGF1dGhvcnM6IHN0cmluZ1tdO1xyXG4gICAgdGl0bGUgPSBcIlRoZSB0aXRsZSBvZiB0aGUgYXJ0aXN0cyBwYWdlXCI7XHJcbiAgICBjb3Vyc2VzO1xyXG4gICAgXHJcbiAgICBjb25zdHJ1Y3RvcihhcnRpc3RTZXJ2aWNlOiBBcnRpc3RTZXJ2aWNlKXtcclxuICAgICAgICB0aGlzLmNvdXJzZXMgPSBhcnRpc3RTZXJ2aWNlLmdldEFydGlzdHMoKVxyXG4gICAgfVxyXG59XHJcbiJdfQ==