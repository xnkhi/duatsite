---
title: The Package Manager
description: How the Osiris Package Manaement System works.
---

Bundled with the Nile River comes the **Osiris Package Management System**, or **OPMS**.

OPMS is a versatile package manager meant for NILE add-ons, small programs, scripts, general utilities and programs. OPMS is designed to cooperate with pacman and thr AUR, ensuring compatability between the two.


## How it works

OPMS is decentralized - meaning that Osiris packages are not stored in one singular place. Instead, each Osiris package is stored in its own dedicated repository on Github.

The name of an Osiris package is determined by the name of the Github repository where it is stored, and the account/organization name of said repository's owner. Package names are not case sensitive, and obey the following syntax:

`Owner Name`/`Repo Name`

For example. 
If an Osiris package is stored on the Github repository `bastet`, and the repository is owned by the organization/account `The-Duat`, then the package name would be `the-duat/bastet`. Remember, package names are not case sensitive.

Because of this approach, anybody has the ability to package their software for the NILE and make it readily available to anyone. If you are interested in creating an Osiris package for the NILE, please follow [this guide](www.google.com).


## Security

A package manager that can automatically install software from anybody poses some security threats. Luckily, the Duat has provided a relatively safe system that minimizes any risk.

Located on this website is an **Official** package list, and a **Community** package list. The Official package list is a list of packages that are made and provided directly by the Duat. The Community package list contains community-made packages which have been deemed safe to install. By default, OPMS can only install packages which are present in the Duat's official package list. 

There are 3 different OPMS security 




To change your security type with the miz frontend, the command is `miz config pkgsec <security type>`. By default, the security type is set to strict.
