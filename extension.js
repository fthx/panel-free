/*
    Panel Free
    GNOME Shell 45+ extension
    Copyright @fthx 2024
    License GPL v3
*/


import * as Main from 'resource:///org/gnome/shell/ui/main.js';


export default class PanelFreeExtension {
    _showPanel() {
        Main.panel.visible = true;
    }

    _hidePanel() {
        Main.panel.visible = false;
    }

    enable() {
        this._hidePanel();

        Main.overview.connectObject('showing', this._showPanel.bind(this), this);
        Main.overview.connectObject('hiding', this._hidePanel.bind(this), this);
    }

    disable() {
        Main.overview.disconnectObject(this);

        this._showPanel();
    }
}
