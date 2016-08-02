"use strict";
var ArtistService = (function () {
    function ArtistService() {
    }
    ArtistService.prototype.getArtists = function () {
        return ["Artist1", "Artist2", "Artist3"];
    };
    return ArtistService;
}());
exports.ArtistService = ArtistService;
