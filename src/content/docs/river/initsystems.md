---
title: Init Systems
description: How do I manage my Init System with the river frontend?
---

The NILE's powerful service management aims to standardize commands across init systems. With the `river` frontend, service management commands are more or less the same across systemd, Runit, and OpenRC. This allows for a greater degree of uniformity across different systems.


## Commands
- `river sv link <service>` - [Runit only] "Adds" a service, allowing it to be managed by the commands below.\*

- `river sv unlink <service>` - [Runit only] Negates the effect of the previous command.

- `river sv enable <service>` - Enables a service, allowing it to start at boot.

- `river sv disable <service>` - Disable a service enabled by the command above.

- `river sv start <service>` - Starts a service.

- `river sv stop <service>` - Stops a service.

- `river sv restart <service>` - Restarts a service.

- `river sv list installed` - List all services currently installed.

- `river sv list linked` - Lists the services that have been added via miz sv link. For SystemD, this lists all currently enabled services.

\* Runit is just weird like that.
