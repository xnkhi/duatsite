---
title: The Package Manager
description: How the mizOS package manager works.
---

mizOS is equipped with a powerful package manager that makes it easy for users to install and manage software packages. Unlike traditional package managers that rely on centralized repositories, mizOS's package manager is GitHub-centric. This means that each package is stored on its own individual GitHub repository, and anyone can create a GitHub repository that follows the mizOS packaging format and publish a package that is installable by anyone else within seconds. This package manager works alongside `pacman` and the AUR to guarantee the widest possible software selection for our users.

Using the `githubAccountName/repoName syntax`, mizOS's package manager can quickly locate the package on GitHub and install or remove it as needed. `githubAccountName` refers to the username of the GitHub account who owns the repository where the package is located, and `repoName` refers to the name of said repository. For example, to install a package named "my-great-package" created by a developer named "JaneSmith", users would use the command `miz fetch JaneSmith/my-great-package`. Package names are not case sensitive.


## Why this Approach?

This approach has several advantages. Firstly, it makes it incredibly easy for developers to create and publish packages. All they need to do is create a GitHub repository that follows the mizOS packaging format, and their package will be immediately available to all mizOS users. This means that anyone can contribute to the ecosystem and publish their own software packages, making mizOS a truly community-driven operating system.

Secondly, the GitHub-centric approach ensures that packages are always up-to-date, as developers can push updates to their repositories at any time. Additionally, because each package is stored on its own repository, users can easily inspect the source code and contribute to the package if they wish.


## Security

To ensure the security of your system, mizOS blocks the installation of packages not listed on the Duat. If you want to be able to install packages from any Github reposirory in existence, you must change your security type.

Security types:
- `strict` - Can only install packages from the Duat's official package list.
- `moderate` - Can only install packages from the Duat's official package list and the Duat's community package list.
- `none` - Can install any mizOS package uploaded to Github.

To change your security type with the miz frontend, the command is `miz config pkgsec <security type>`. By default, the security type is set to strict

If you would like to create a package, or add a package to the Duat, see this guide.
