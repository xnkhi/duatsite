---
title: Software
description: How do I manage my software with the river frontend?
---

The Nile River's software management allows for a simpler, more cohesive software management experience. It is designed to provide one singular, centralized space for software installation, no matter the native package manager being used.


## Software installation

Add software to your system.

- `river fetch <package>` - Install the given `<package>`


## Software removal

Remove software from your system.

- `river remove <package>` - Remove the given `<package>`

## Misc Information

- The NILE will automatically detect what type of package you are trying to install/remove. If it detects an Osiris package, it will use the Osiris Package Management System. Otherwise, it will default to the system's native package manager.

- If you are on an Arch Linux based distribution with `yay` installed, append `-aur` to the very end of the command to install/remove AUR packages.





