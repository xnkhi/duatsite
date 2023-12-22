---
title: System Configuration
description: How do I configure my NILE system using the river frontend?
---

The `river` frontend provides a centralized configuration hub - allowing the system to be configured via the command line, without the need to worry about configuration files, settings panels, etc.


## Package manager

- `river config opmssec <security_type>` - Change your package security type. For more information, see [this page](https://the-duat.github.io/overview/package-manager/).


## User Interface (i3)


- `river config wallpaper <path>` - Sets the specified image at <path> as your wallpaper. Supports .png, .jpg, and .webp images.


- `river config bar-color <hexcolor>` - Sets the status bar color.

- `river config bar-position <top/bottom>` - Sets the status bar position.


- `river config border-color1 <hexcolor>` - Sets the border color for focused windows.

- `river config border-color2 <hexcolor>` - Sets the border color for unfocused windows.

- `river config border-color3 <hexcolor>` - Sets the border color for urgent windows.

- `river config border-size <number>` - Sets the border pixel size.


- `river config gaps-inner <number>` - Sets the inner gap pixel size.

- `river config gaps-outer <number>` - Sets the outer gap pixel size.


- `river config mod-key <Mod1/Mod2/Mod3/Mod4>` - Sets the mod key.


- `river config ws-bg-color1 <hexcolor>` - Sets the active workspace button background color.

- `river config ws-bg-color2 <hexcolor>` - Sets the inactive workspace button background color.

- `river config ws-bg-color3 <hexcolor>` - Sets the urgent workspace button background color.

- `river config ws-txt-color1 <hexcolor>` - Sets the active workspace button text color.

- `river config ws-txt-color2 <hexcolor>` - Sets the inactive workspace button text color.


## GTK

- `river config gtk-theme <theme_name>` - Changes your GTK theme to the specified theme.

- `river config icon-theme <theme_name>` - Changes your icon theme to the specified theme.

- `river config cursor-theme <theme_name>` - Changes your cursor theme to the specified theme. (May require a reboot)


## Backups and Restores

`river` provides a way to easily backup and restore your system configurations.

**Warning: Backing up a program's configuration will remove previous backups of said program's configurations. Similarly, restoring a backed up configuration will remove your currently active configuration. Configuration backups are located at `/var/NileRiver/backup/$USER`**

*As an added note, all currently active configurations will be automatically backed up during a system update.*

- `river backup <program_name>` - Back up the current configurations for program\_name.

- `river restore <program_name>` - Restore previously backed up configurations for program\_name.

Valid program names:
- `alacritty`
- `fish`
- `gtk`
- `i3`
- `picom`
- `wallpaper`

If no program name is given, the NILE will backup/restore configurations for all supported programs.
