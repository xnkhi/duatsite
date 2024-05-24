---
title: About the NILE
description: What is the Nile Integrated Linux Environment?
---

**The NILE is currently still in development. It is usable (to an extent lol), but may contain bugs. Use in a virtual machine only, bugs may break your system. Development still needs to finish and extensive testing still needs to be conducted.**


The **Nile Integrated Linux Environment**, or **N.I.L.E.**, is a system management framework designed for Linux-based operating systems. The primary goal of the NILE is to simplify the Linux ecosystem by nullifying the differences between various Linux distributions. This is achieved by providing an interface which acts as a wrapper for the system's native utilities.


## Its Contents

The Nile Integrated Linux Environment consists of three main parts:

- A preconfigured installation of the **i3 window manager**, providing a consistent desktop interface across different Linux distributions.

- Various **lua modules** which do the actual "wrapping" of the system's native utilities.

- **river**, a lua CLI frontend program used by the user to manage their system.


## Key Features

1. **Consistent User Interface:** The environment provides a simple and clear user interface that remains consistent regardless of the Linux distribution being used.

2. **Software Management:** The NILE wraps around the system's default package manager to standardize the commands between apt, pacman, xbps, and more.

3. **Init System Management:** The NILE also wraps around the tools used to control the distribution's init system. Supports systemd, openrc, and runit.

4. **Network Management:** NetworkManager or IWCTL? It doesn't matter, connect to the internet through river.

5. **Configurability:** Configure the visual and internal aspects of your system through river. Compile all visual settings into a NILE theme with just one command.

6. **Plugins:** Is the NILE missing a feature? Plugin support allows users to make their own niche additions without contributing to the main repository.

7. **A Package Manager??:** Install new themes, frontends, and plugins with the **Osiris Package Management System**; a decentralized, home-baked package manager made just for the NILE.


## Contributing
An actual guide will be written here when the NILE reaches a stable point in development\*. Until then, just send a pull request.

\* There's literally one person working on this thing. Don't expect this to happen anytime soon.


## Demonstrations

Some cool videos will be added here eventually. Keep refreshing the webpage until eternity.
