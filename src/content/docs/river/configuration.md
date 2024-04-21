---
title: System Configuration
description: How do I configure my NILE system using the river frontend?
---

The `river` frontend provides a centralized configuration hub - allowing the system to be configured via the command line, without the need to worry about configuration files, settings panels, etc.

Note. When passing a hexidecimal color value as an argument, do not include the pound sign (#).


## Package manager

- `river config opmssec <security_type>` - Change your package security type. For more information, see [this page](https://the-duat.github.io/overview/package-manager/).


## User Interface (i3)

- `river config wallpaper <path>` - Sets the specified image at <path> as your wallpaper. Supports .png, .jpg, and .webp images.


- `river config bar-color <hex_color>` - Sets the status bar color.

- `river config bar-position <top/bottom>` - Sets the status bar position.


- `river config border-color1 <hex_color>` - Sets the border color for focused windows.

- `river config border-color2 <hex_color>` - Sets the border color for unfocused windows.

- `river config border-color3 <hex_color>` - Sets the border color for urgent windows.

- `river config border-size <number>` - Sets the border pixel size.


- `river config gaps-inner <number>` - Sets the inner gap pixel size.

- `river config gaps-outer <number>` - Sets the outer gap pixel size.


- `river config mod-key <Mod1/Mod2/Mod3/Mod4>` - Sets the mod key.


- `river config ws-bg-color1 <hex_color>` - Sets the active workspace button background color.

- `river config ws-bg-color2 <hex_color>` - Sets the inactive workspace button background color.

- `river config ws-bg-color3 <hex_color>` - Sets the urgent workspace button background color.

- `river config ws-txt-color1 <hex_color>` - Sets the active workspace button text color.

- `river config ws-txt-color2 <hex_color>` - Sets the inactive workspace button text color.


## GTK

- `river config gtk-theme <gtk_theme_name>` - Changes your GTK theme to the specified theme.

- `river config icon-theme <gtk_theme_name>` - Changes your icon theme to the specified theme.

- `river config cursor-theme <gtk_theme_name>` - Changes your cursor theme to the specified theme. (May require a reboot)


## Alacritty

The colors used by the default terminal emulator, Alacritty, can easily be configured through the river frontend.

- `river config bright-black <hex_color>`
- `river config bright-blue <hex_color>`
- `river config bright-cyan <hex_color>`
- `river config bright-green <hex_color>`
- `river config bright-magenta <hex_color>`
- `river config bright-red <hex_color>`
- `river config bright-white <hex_color>`
- `river config bright-yellow <hex_color>`

- `river config cursor-color <hex_color>`
- `river config cursor-text <hex_color>`

- `river config dim-black <hex_color>`
- `river config dim-blue <hex_color>`
- `river config dim-cyan <hex_color>`
- `river config dim-green <hex_color>`
- `river config dim-magenta <hex_color>`
- `river config dim-red <hex_color>`
- `river config dim-white <hex_color>`
- `river config dim-yellow <hex_color>`

- `river config footerbar-bg <hex_color>`
- `river config footerbar-fg <hex_color>`

- `river config hintend-bg <hex_color>`
- `river config hintend-fg <hex_color>`
- `river config hintstart-bg <hex_color>`
- `river config hintstart-fg <hex_color>`

- `river config index16 <hex_color>`
- `river config index17 <hex_color>`

- `river config normal-black <hex_color>`
- `river config normal-blue <hex_color>`
- `river config normal-cyan <hex_color>`
- `river config normal-green <hex_color>`
- `river config normal-magenta <hex_color>`
- `river config normal-red <hex_color>`
- `river config normal-white <hex_color>`
- `river config normal-yellow <hex_color>`

- `river config primary-bg <hex_color>`
- `river config primary-fg <hex_color>`
- `river config primary-dimbg <hex_color>`
- `river config primary-dimfg <hex_color>`

- `river config search-focusmatch-bg <hex_color>`
- `river config search-focusmatch-fg <hex_color>`
- `river config search-matches-bg <hex_color>`
- `river config search-matches-fg <hex_color>`

- `river config selection-bg <hex_color>`
- `river config selection-text <hex_color>`

- `river config vicursor-color <hex_color>`
- `river config vicursor-text <hex_color>`


## NILE Themes

A fully and easily configurable user interface wouldn't be complete without theme support. Themes for the Nile Integrated Linux Environment consist of the following:

- i3 Settings
- GTK Settings
- Alacritty Settings
- A Wallpaper

Theme management commands:

- `river info themes` - To see all installed themes.

- `river config theme <theme_name>` - Switches your current theme to the given theme. Current settings will be lost.

- `river theme compile` - A fun command. This will automatically compile all of your current settings into a brand new theme!