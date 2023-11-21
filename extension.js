/*
    Panel Free
    GNOME Shell 45+ extension
    Copyright @fthx 2023
    License GPL v3
*/


import * as Main from 'resource:///org/gnome/shell/ui/main.js';


export default class PanelFreeExtension {
    _show_panel() {
        Main.panel.show();
    }

    _hide_panel() {
        Main.panel.hide();
    }

    enable() {
        this._hide_panel();

        this._overview_showing = Main.overview.connectObject('showing', this._show_panel.bind(this), this);
        this._overview_hiding = Main.overview.connectObject('hiding', this._hide_panel.bind(this), this);
    }

    disable() {
        Main.overview.disconnectObject(this);
        this._overview_showing = null;
        this._overview_hiding = null;

        this._show_panel();
    }
}
