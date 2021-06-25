/**
 * @name AllBadges
 * @version 0.0.1
 * @description Gives you all profile badges on Discord.
 * @website https://github.com/wtrfl/
 * @source https://github.com/wtrfl/allbadges/
 * @updateUrl https://github.com/wtrfl/allbadges/allbadges.plugin.js
 */

class AllBadges {

    constructor() {
        this.initialized = false;
    }

    // Meta
    getName() { return "All Badges"; }
    getShortName() { return "AllBadges"; }
    getDescription() { return "Gives you all profile badges on Discord."; }
    getVersion() { return "0.0.1"; }
    getAuthor() { return "wtrfl"; }

    getSettingsPanel() {
        return "";
    }

    // runs when plugin is initialized
    start() {
        Object.values(webpackJsonp.push([[], {['']: (_, e, r) => {e.cache = r.c}},[['']]]).cache).find(m => m.exports && m.exports.default && m.exports.default.getCurrentUser !== void 0).exports.default.getCurrentUser().flags = 15;
    }

    // runs when plugin is disabled
    stop() {
        location.reload();
    }

}
