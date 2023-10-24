---
title: Software
description: How to manage your graphics cards with the miz frontend.
---

mizOS's software management utilities allow for a simpler, more congruent software management experience. It is meant to centralize pacman, the AUR, and the mizOS packaging system into one singular tool. It also gives the ability to install various desktop environments (user interfaces) with ease and simplicity.

mizOS's software management tool works in channels, being:

- `-m` - The mizOS channel. Used for managing mizOS packages.
- `-p` - The Pacman channel. Used for managing Pacman packages.
- `-a` - The AUR channel. Used for managing AUR packages.
- `-d` - The Desktop channel. Used for easy desktop environment installation.


## Software installation

Add software to your system.

- `miz fetch -m <package>` - Install that mizOS package. See "The mizOS Package Manager" below for more information.

- `miz fetch -p <package>` - Install that Pacman package.

- `miz fetch -a <package>` - Install that AUR package.

- `miz fetch -d <desktop>` - Install that desktop environment in the mizOS DE/WM database. For a list of all installable desktops, see miz info uilist.


## Software removal

Remove software from your system.

- `miz remove -m <package>` - Remove that mizOS package.

- `miz remove -p <package>` - Remove that Pacman package.

- `miz remove -a <package>` - Remove that AUR package.

- `miz remove -d <desktop>` - Remove that desktop environment.


## Other

Other functions that can be performed by the mizOS software manager.

- `miz cc` - Clears the package cache for Pacman and AUR packages. Also clears the SystemD journal logs, if SystemD is present.





