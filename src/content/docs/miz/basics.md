---
title: The Basics
description: The basics regarding the miz frontend.
---

The core of mizOS is made up of a collection of programs and files stored in the directory `/var/mizOS`. The core does all of the behind-the-scenes work - configuring your system, managing installed software, etc. Users of mizOS can interact with this core by using something called a "frontend". A frontend is basically a small program that executes code stored in the core. It is the frontend's responsibility to provide a clear and intuitive portal to the core.

Frontends for mizOS can come in all shapes and sizes. By default, mizOS ships with a frontend called `miz`. `miz` is a command-line utility that lets you easily interact with the mizOS core, or "backend".


## Capabilities

Being the official frontend, `miz` is the most up-to-date frontend available. It is generally capable of performing all actions that the core has to offer.

`miz` capabilities:

- Displaying information about your computer system.

- Configuring system settings, such as the look of the user interface.

- Managing your init system. (Supports systemd, Runit, and OpenRC)

- Graphics card management capabilities.

- Installing, removing, and updating software. (pacman, AUR, and the mizOS Packaging System)

- Performing system updates.

- And more!
