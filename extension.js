/*
    Panel Free - GNOME Shell 46+ extension
    Copyright @fthx 2025 - License GPL v3
*/


import * as Main from 'resource:///org/gnome/shell/ui/main.js';


export default class PanelFreeExtension {
    _showPanel() {
        if (Main.layoutManager.overviewGroup.get_children().includes(Main.layoutManager.panelBox))
            Main.layoutManager.overviewGroup.remove_child(Main.layoutManager.panelBox);
        if (Main.layoutManager.panelBox.get_parent() != Main.layoutManager.uiGroup)
            Main.layoutManager.addChrome(Main.layoutManager.panelBox, { affectsStruts: true, trackFullscreen: false });

        Main.overview.searchEntry.get_parent().set_style('margin-top: 0px;');
    }

    _hidePanel() {
        if (Main.layoutManager.panelBox.get_parent() == Main.layoutManager.uiGroup)
            Main.layoutManager.removeChrome(Main.layoutManager.panelBox);
        if (!Main.layoutManager.overviewGroup.get_children().includes(Main.layoutManager.panelBox))
            Main.layoutManager.overviewGroup.insert_child_at_index(Main.layoutManager.panelBox, 0);

        Main.overview.searchEntry.get_parent().set_style('margin-top: 32px;');
    }

    enable() {
        this._hidePanel();
    }

    disable() {
        this._showPanel();
    }
}
