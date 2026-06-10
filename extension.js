/*
    Panel Free - GNOME Shell 50+ extension
    Copyright @fthx 2026 - License GPL v3
*/

import * as Main from 'resource:///org/gnome/shell/ui/main.js';

export default class PanelFreeExtension {
    _showPanel() {
        if (Main.layoutManager.panelBox.get_parent() === Main.layoutManager.overviewGroup)
            Main.layoutManager.overviewGroup.remove_child(Main.layoutManager.panelBox);
        if (Main.layoutManager.panelBox.get_parent() !== Main.layoutManager.uiGroup)
            Main.layoutManager.addChrome(Main.layoutManager.panelBox, { affectsStruts: true, trackFullscreen: true });

        Main.overview.searchEntry.get_parent().remove_style_class_name('panel-free-search-entry');
    }

    _hidePanel() {
        if (Main.layoutManager.panelBox.get_parent() === Main.layoutManager.uiGroup)
            Main.layoutManager.removeChrome(Main.layoutManager.panelBox);
        if (Main.layoutManager.panelBox.get_parent() !== Main.layoutManager.overviewGroup)
            Main.layoutManager.overviewGroup.insert_child_at_index(Main.layoutManager.panelBox, 0);

        Main.overview.searchEntry.get_parent().add_style_class_name('panel-free-search-entry');
    }

    enable() {
        this._hidePanel();
    }

    disable() {
        this._showPanel();
    }
}
