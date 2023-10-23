---
title: The Hijack Method
description: Guide for installing mizOS using the Hijack method
---

The Hijack installation method is by far the most powerful way to install mizOS. By using the Hijack method, you are given a vast array of customizability not found in the normal mizOS live installer.

When mizOS "Hijacks" another system, it essentially converts the system into mizOS from the inside out. Because mizOS is based on Arch Linux, this can be performed on any Arch-Based Linux Distribution.

*Please note, the Hijack installation method only supports hijacking Linux distributions with either the systemd, Runit, or OpenRC init systems. If you choose to hijack a base system running an init system other than systemd, please note that various Asus laptop utilities will not function correctly.*


## Pre-Installation

If you dont already have one, install any Arch Linux based operating system.

A small list of known Arch-based systems can be found here:
- [Arch Linux](https://archlinux.org/)
- [Artix Linux](https://artixlinux.org/)
- [EndeavorOS](https://endeavouros.com/)
- [ElementaryOS]()

If you already have an Arch-based system with which you wish to convert to mizOS, skip to the next step.


## Install mizOS

After you have a base Arch Linux system installed, you can now proceed to convert it into mizOS.

1. Update your system with `sudo pacman -Syu`.

2. Dowload `git` and `lua` with `sudo pacman -S git lua`.

3. Download the mizOS Github repository with `git clone https://github.com/The-Duat/mizOS`.

4. Move to the newly downloaded directory with `cd mizOS`.

5. Run the mizOS installer with `./install`.

6. Reboot.

Your system should now be converted over to mizOS.
