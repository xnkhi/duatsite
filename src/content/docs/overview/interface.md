---
title: User Interface
description: How do I use the user interface?
---

The Nile Integrated Linux Environmrnt ships with **i3** - an extremely fast/lightweight user interface. The NILE is tightly integrated into i3, allowing the User to interact with it in ways never seen before.

Rather than being a "point and click" user interface, i3 is keyboard-oriented, meaning you mainly navigate it by using a set of keyboard shortcuts.


The NILE's i3 uses "Mod4" as the default `Mod` key. Mod4 refers to the [Windows key](https://cdsmythe.com/wp-content/uploads/2019/07/Insert-Windows-Key-Symbol.jpg).

For a quick navigation reference card, click [here](https://i3wm.org/docs/refcard.html).

For an in-depth explanation on how to navigate the user interface, follow the guide below.


## The Basics

i3 consists of 2 main parts. The desktop, and the top bar.

The desktop consists of your wallpaper, and is where application windows are displayed.

The top bar contains the workspace switcher on the left, and the system tray on the right. A workspace is essentially another "page" in which you can move windows to. You can use up to 10 workspaces in total.


## Keyboard Shortcuts (Concise)

### Navigation
- `Mod + (Arrow Keys)` - Navigate windows.
- `Mod + Shift + (Arrow Keys)` - Move selected window.
- `Mod + h` - Horizontal split.
- `Mod + v` - Vertical split.
- `Mod + (Number Key)` - Switch workspace.
- `Mod + Shift + (Number Key)` - Move selected window to workspace.

### Window Behavior
- `Mod + Shift + Space` - Toggle window state between tiled and floating.
- `Mod + Space` - Toggle focus between tiled and floating.
- `Mod + R` - Enter resize mode for selected window.
- `Mod + Shift + Q` - Close selected window.

### Programs
- `Mod + Enter` - Open terminal.
- `Mod + D` - Open application search menu.
- `Mod + Shift + M` - Enable Picom.
- `Mod + Shift + N` - Disable Picom.
- `Mod + Shift + A` - Screenshot.

### Misc
- `Mod + Shift + E` - Logout.
- `Mod + Shift + C` - Reload config.


## Keyboard Shortcuts (Detailed)

### Navigation

**Application Windows**

- You can navigate between the windows you have open by holding down the `Mod` key, and pressing the arrow keys. Alternatively, you can simply select windows by clicking on them with your mouse.

- To move windows, simply hold both `Mod` and `Shift` while pressing the arrow keys. You can also click and drag windows while holding the `Mod` key to move them.

- Newly created windows will appear on the right side of your currently focused window. This can be changed to open directly below the currently focused window with `Mod + v`. This can be reverted back with `Mod + h`.


**Workspaces**

- To switch workspaces, hold `Mod`, and click the number key corresponding to that workspace (1, 2, 3, 4, 5, 6, 7, 8, 9, 0). Alternatively, click the workspace with your mouse in the top right.

- To move the selected window to a workspace, hold both `Mod` and `Shift`, and hit the number key corresponding to the workspace.


### Window Behavior

- An application window can be in two states: tiled and floating. A tiled window takes up as much space as possible while being locked in position, and a floating window is free to move around wherever. To switch a window between the two states, hold down both `Mod` and `Shift`, then hit `Space`. You can focus between the two states by pressing `Space` while `Mod` is held down.

- Pressing `R` while `Mod` is held down will put the selected window into "Resize mode". You can now resize the window using either the arrow keys or your mouse. Hit Enter to exit resize mode.

- Pressing `Q` while both `Mod` and `Shift` are pressed down will close the currently selected window.


### Programs

- Pressing `Enter` while `Mod` is held down will open a terminal.

- Pressing `D` while `Mod` is held down will show an application search menu over your top bar.

- `Mod + Shift + M` Enables Picom. This will remove screen tearing, and will also add blur and transparency effects to the user interface. This can be disabled with `Mod + Shift + N`.

- You can take a screenshot with `Mod + Shift + A`. The image will be saved to your clipbord.


### Misc

- To log out of your session, simply press `E` while holding down both `Mod` and `Shift`.

- To reload the i3 config file, press `C` while holding down both `Mod` and `Shift`.
