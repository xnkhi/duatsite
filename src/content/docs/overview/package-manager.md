---
title: The Package Manager
description: How does the Osiris Package Manaement System work?
---

Bundled with the Nile River comes the **Osiris Package Management System**, or **OPMS**.

OPMS is a lightweight package manager meant for NILE plugins, themes, and frontends.


## How it works

OPMS is decentralized - meaning that Osiris packages are not stored in one singular place. Instead, each Osiris package is stored in its own dedicated repository on Github.

The name of an Osiris package is determined by the name of the Github repository where it is stored, and the account/organization name of said repository's owner. Package names are not case sensitive, and obey the following syntax:

`Owner Name`/`Repo Name`


For example.

If an Osiris package is stored on the Github repository `Nile-Light-Theme`, and the repository is owned by the organization/account `The-Duat`, then the package name would be `The-Duat/Nile-Light-Theme`. Remember, package names are not case sensitive.

Because of this approach, anybody has the ability to package their software for NILE systems and make it readily available to anyone. If you are interested in creating an Osiris package for the NILE, please follow [this guide](www.google.com).


## Security

A package manager that can automatically install software from anybody poses a security risk. Luckily, the Duat has provided a relatively safe system that minimizes this risk.

Located on this website is an **Official** package list, and a **Community** package list. The Official package list is a list of packages that are made and provided directly by the Duat. The Community package list contains community-made packages which have been deemed safe to install. By default, OPMS can only install packages which are present in the Duat's official package list. You can broaden the freedom of OPMS by changing the OPMS security type.

There are 3 different OPMS security types which dictate the type of packages you can install. The 3 security types are as follows:
- `strict` - Can only install packages found in the Duat's official package list.
- `moderate` - Can only install packages found in the Duat's official package list, as well as the Duat's community package list.
- `none` - Can install any and every package found on Github.

To change your security type with the river frontend, the command is `river config opmssec <security type>`. By default, the security type is set to `strict`.
