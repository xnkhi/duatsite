---
title: System Configuration
description: miz commands for configuring your system
---

The `miz` frontend gives you easy access to the hidden configurations of your system. With `miz`, you can chage the look of the user interface, the security level of the mizOS package manager, and more!


## Package manager

- `miz config pkgsec <security_type>` - Change your package security type. For more information, see [this page](https://the-duat.github.io/overview/package-manager/).


## User Interface (i3)


- `miz config wallpaper <path>` - Sets the specified image at <path> as your wallpaper. Supports .png, .jpg, and .webp images.


- `miz config bar-color <hexcolor>` - Sets the status bar color.

- `miz config bar-position <top/bottom>` - Sets the status bar position.


- `miz config border-color1 <hexcolor>` - Sets the border color for focused windows.

- `miz config border-color2 <hexcolor>` - Sets the border color for unfocused windows.

- `miz config border-color3 <hexcolor>` - Sets the border color for urgent windows.

- `miz config border-size <number>` - Sets the border pixel size.


- `miz config gaps-inner <number>` - Sets the inner gap pixel size.

- `miz config gaps-outer <number>` - Sets the outer gap pixel size.


- `miz config mod-key <Mod1/Mod2/Mod3/Mod4>` - Sets the mod key.


- `miz config ws-bg-color1 <hexcolor>` - Sets the active workspace button background color.

- `miz config ws-bg-color2 <hexcolor>` - Sets the inactive workspace button background color.

- `miz config ws-bg-color3 <hexcolor>` - Sets the urgent workspace button background color.

- `miz config ws-txt-color1 <hexcolor>` - Sets the active workspace button text color.

- `miz config ws-txt-color2 <hexcolor>` - Sets the inactive workspace button text color.


## GTK

- `miz config gtk-theme <theme_name>` - Changes your GTK theme to the specified theme.

- `miz config icon-theme <theme_name>` - Changes your icon theme to the specified theme.

- `miz config cursor-theme <theme_name>` - Changes your cursor theme to the specified theme. (May require a reboot)


## Backups and Restores

mizOS provides a way to easily backup and restore your system configurations.

**Warning: Backing up a configuration will remove previous backups of that configuration. Similarly, restoring a backed up configuration will remove your currently active configuration. mizOS backups are located at `/var/mizOS/backup/$USER`

As an added note, all currently active configurations will be automatically backed up during a system update.**

- `miz backup <program_name>` - Back up the current configurations for program\_name.

- `miz restore <program_name>` - Restore previously backed up configurations for program\_name.

Valid program names:
- `alacritty`
- `fish`
- `gtk`
- `i3`
- `picom`
- `wallpaper`

If no program name is given, mizOS will backup/restore configurations for all programs.
