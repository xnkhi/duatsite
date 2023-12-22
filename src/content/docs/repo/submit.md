---
title: Submitting Osiris Packages
description: How do I submit my Osiris package to the Duat's community repository?
---

In order to make an Osiris package, please follow [this guide](https://github.com/The-Duat/mizOSPKGTemplate).

When you submit an Osiris package to the Duat, it can be made available for others to install in the Duat's package repository. Community packages that make its way to the Duat's community repo are known to be trustworthy and safe to install. Packages in the Duat's community repository are able to be installed with any security level other than `strict`. If your package is not in our repositories, it can only be installed by users who have their security level set to `none`.


## Step 1 - Basic Requirements

In order for your package to be eligible for review, it must comply with the following:
1. It must be an Osiris package (duh).

2. The package must work as intended (no stack traceback blah blah blah).

3. Software installed by the package must have clear, well-written documentation.

4. The source code to the installed software must be available on any git website. (Github, Gitlab, Codeberg, etc.)

5. Software installed by the package, and the package itself, **must be completely void of any malware, horsefuckery, or any other bullshit**.

6. The package, and its delivered software, must not be dependent on any particular package manager, Linux distribution, or init system. (being dependent on NILE-related programs and/or files is perfectly fine.) Only the Duat themselves can create approved packages which are reliant on these sort of things. This is to ensure the widest compatability range possible.

7. Other Osiris packages are not to be used as dependencies for your package and/or installed software.

8. The installed software must be licensed under any of the following licenses:
- [GNU GPL 3.0](https://www.gnu.org/licenses/gpl-3.0.en.html)
- [GNU LGPL 3.0](https://www.gnu.org/licenses/lgpl-3.0.en.html)
- [MIT License](https://opensource.org/license/mit/)
- [3-Clause BSD License](https://opensource.org/license/bsd-3-clause/)
- [2-Clause BSD License](https://opensource.org/license/bsd-2-clause/)
- [Apache License 2.0](https://www.apache.org/licenses/LICENSE-2.0)
- [WTFPL](http://www.wtfpl.net/)
- [DBAD License](https://dbad-license.org/)

If the installed software uses a different **free, open source** license, please link to it in your submission.

Failure to comply with any of these 8 terms will restrict your package from being added into the community repository.


## Step 2 - Submission

Package submissions are done through the [Discord server](https://discord.gg/AVSuRZsTXp). Please include the following information in your submission:

- Name of the package. (user/repo)
- Name of the installed software.
- The installed software's license.
- A link to the package's Github repository.
- A link to the installed software's source code. (git repository)
- A personal identification link to the software's main developer.
- A personal identification link to the package's main maintainer.
- A short description of the installed software. (25 words max)

After your package has been submitted, you will be notified when the status of your submission changes.
