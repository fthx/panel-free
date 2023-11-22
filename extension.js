/*
    Panel Free
    GNOME Shell 45+ extension
    Copyright @fthx 2023
    License GPL v3
*/

//import Clutter from 'gi://Clutter';

import * as Main from 'resource:///org/gnome/shell/ui/main.js';


//const PANEL_ANIMATION_DURATION = 150;

export default class PanelFreeExtension {
    _showPanel() {
        Main.panel.height = this._originalPanelHeight;
        /*Main.panel.ease({
            duration: PANEL_ANIMATION_DURATION,
            height: this._originalPanelHeight,
            mode: Clutter.AnimationMode.EASE_OUT_QUAD
        });*/
    }

    _hidePanel() {
        Main.panel.height = 0;
        /*Main.panel.ease({
            duration: PANEL_ANIMATION_DURATION,
            height: 0,
            mode: Clutter.AnimationMode.EASE_OUT_QUAD
        });*/
    }

    enable() {
        this._originalPanelHeight = Main.panel.height;
        this._hidePanel();

        Main.overview.connectObject('showing', this._showPanel.bind(this), this);
        Main.overview.connectObject('hiding', this._hidePanel.bind(this), this);
    }

    disable() {
        Main.overview.disconnectObject(this);

        this._showPanel();
    }
}
