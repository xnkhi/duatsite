---
title: Live ISO
description: Guide for installing mizOS with a live Arch ISO.
---

**WARNING. THE LIVE ISO INSTALLER IS STILL IN DEVELOPMENT. TAKE THIS PAGE WITH A GRAIN OF SALT.**

Contrary to what you may think, mizOS doesn't have a live ISO of its own. Instead, you are meant to borrow the standard Arch Linux ISO if you want to install mizOS from a live image. Keep in mind that the mizOS live installer is only meant to run on the normal Arch ISO, which forces you to use systemd as your init system.


## Pre-Installation

1. Acquire a [USB Stick](https://m.media-amazon.com/images/I/61Rje75BfpL._AC_UF894,1000_QL80_.jpg).

2. Download the latest [Arch Linux ISO](https://archlinux.org/download/).

3. Using a tool such as [Balena Etcher](https://etcher.balena.io/), [Rufus](https://rufus.ie/en/), or [Ventoy](https://www.ventoy.net/en/index.html), flash the ISO image to your usb stick.

4. Power off the computer, plug in the USB stick, and boot from it. You may need to figure out how to do this yourself.

5. Once booted into the live Arch Linux environment, [connect to wifi](https://www.youtube.com/watch?v=3czrHtFHteY).

6. After establishing an internet connection, install `git` and `lua` with `sudo pacman -S git lua`.


## Install mizOS

1. Download the mizOS live installer with `git clone https://github.com/The-Duat/mizOS_Live-Installer`.

2. Move to the downloaded directory with `cd mizOS-Live-Installer`.

3. Once inside the directory, run the installer with `./installer`.

4. Lastly, simply follow the on-screen instructions.
