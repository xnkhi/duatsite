---
title: System Updates
description: How do I update my NILE system with the river frontend?
---

## System updates

Easily update your system through the `river` frontend.

- `river update` - Updates your system, as well as the NILE.

- `river update dev` - Same as `miz update`, except it updates to the lastest developer edition. This is used solely for development purposes, and may break your system.

Updating your system through the Nile River is preferred over updating through your native package manager, as your native package manager does not update NILE components along with the rest of your system.

**Warning: While updating, the NILE will replace your configurations in /var/NileRiver/config/$USER/ with an updated set. Your old confifurations will be located in /var/NileRiver/backup/$USER/. If you want to restore your previous settings, please see [this page](https://the-duat.github.io/river/configuration/).**





