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
//# sourceMappingURL=artists.component.js.map