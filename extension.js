/*
    Panel Free
    GNOME Shell 45+ extension
    Copyright @fthx 2023
    License GPL v3
*/


import * as Main from 'resource:///org/gnome/shell/ui/main.js';


export default class PanelFreeExtension {
    _showPanel() {
        Main.panel.statusArea['activities'].first_child.show();
        Main.panel.set_height(this._originalPanelHeight);
    }

    _hidePanel() {
        Main.panel.set_height(0);
        Main.panel.statusArea['activities'].first_child.hide();
    }

    enable() {
        this._originalPanelHeight = Main.panel.get_height();
        this._hidePanel();

        Main.overview.connectObject('showing', this._showPanel.bind(this), this);
        Main.overview.connectObject('hiding', this._hidePanel.bind(this), this);
    }

    disable() {
        Main.overview.disconnectObject(this);

        this._showPanel();
    }
}
