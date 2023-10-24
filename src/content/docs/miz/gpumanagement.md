---
title: GPU Management
description: How to manage your graphics cards with the miz frontend.
---

The `miz` frontend allows you to easily manage your computer's graphics cards in a dual-GPU environment.


## Command execution

Specify which GPU you want a command to run on.

- `miz gfx xd <command>` - Execute the given command on the dedicated GPU.

- `miz gfx xi <command>` - Execute the given command on the integrated GPU.


## Changing your graphics mode

Change how your graphics cards operate in a dual-GPU environment.

- `miz gfx mode <mode>` - Changes your graphics mode to the given mode.

Graphics card modes:

- `i` - Integrated. Uses your integrated GPU for graphics processing.
- `d` - Dedicated. Uses your dedicated GPU for graphics processing.
- `h` - Hybrid. Uses both of your GPUs for graphics processing.
- `c` - Compute. Quote unquote "enables Nvidia without Xorg".
- `v` - VFIO. Binds your dedicated GPU to VFIO for VM passthrough.

*Please note that in order to use `miz gfx mode`, your system must be using systemd, and the following mizOS packages must be installed:*
- `the-duat/mizos-asusctl`
- `the-duat/mizos-supergfxctl`





