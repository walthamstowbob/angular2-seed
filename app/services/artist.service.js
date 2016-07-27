System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var ArtistService;
    return {
        setters:[],
        execute: function() {
            ArtistService = (function () {
                function ArtistService() {
                }
                ArtistService.prototype.getArtists = function () {
                    return ["Artist1", "Artist2", "Artist3"];
                };
                return ArtistService;
            }());
            exports_1("ArtistService", ArtistService);
        }
    }
});
//# sourceMappingURL=artist.service.js.map