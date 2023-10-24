---
title: Init Systems
description: How to manage init systems with the miz frontend.
---

mizOS's powerful service management aims to standardize commands across init systems. With the `miz` frontend, service management commands are more or less the same across SystemD, Runit, and OpenRC. This allows for greater uniformity and versatlity never before seen by any other Linux distribution.


## Commands
- `miz sv link <service>` - [Runit only] "Adds" a service, enabling it to be managed by the commands below.

- `miz sv unlink <service>` - Negates the effect of the previous command.

- `miz sv enable <service>` - Enables a service, allowing it to start at boot.

- `miz sv disable <service>` - Disable a service enabled by the command above.

- `miz sv start <service>` - Starts a service.

- `miz sv stop <service>` - Stops a service.

- `miz sv restart <service>` - Restarts a service.

- `miz sv list installed` - List all services currently installed.

- `miz sv list linked` - Lists the services that have been added via miz sv link. For SystemD, this lists all currently enabled services.


