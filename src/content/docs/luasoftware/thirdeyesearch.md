---
title: ThirdEyeSearch
description: A TUI Google Dorking search engine powered by the Google Hacking Database.
---

**Source Code:** [Github](https://github.com/mizosu97/thirdeyesearch)

![Main Menu](https://media.discordapp.net/attachments/1267674014290149449/1267674096846503990/wenO9qU.png?ex=66a9a500&is=66a85380&hm=d6dc080475521176d9a8c860ce43479f5e1631458c4892c374074a9d507c8b32&=&format=webp&quality=lossless)


ThirdEyeSearch is a TUI Google Dorking search engine powered by the [Google Hacking Database](https://www.exploit-db.com/google-hacking-database). It is capable of displaying and browsing through the database and launching the various searches provided, all from withing the terminal.

The TUI system used by ThirdEyeSearch has been written entirely from scratch.


## Installation

### Dependencies

- [Lua](https://www.lua.org/)
- [W3M](https://w3m.sourceforge.net/)

### Program Installation

ThirdEyeSearch is not packaged for any package manager. An installation script is provided that expects a Linux-based or Unix-like operating system.

- `git clone https://github.com/mizosu97/thirdeyesearch`
- `cd thirdeyesearch`
- `sudo chmod +x install`
- `sudo ./install`


## Usage

### Launching the Program

ThirdEyeSearch will automatically download a new database from the GHDB on each launch, unless explicitly told not to.

Commands:
- `thirdeyesearch` - Launch ThirdEyeSearch.
- `thirdeyesearch x` - Launch ThirdEyeSearch without updating the database.

### Browsing

The user interface of ThirdEyeSearch is made up of two parts: the interactive display/list and the command bar.

On the main menu, a numbered list of categories is displayed in the interactive display. You can open a category with the following command:
- `open <number>`
Where `<number>` corresponds to the number next to the displayed listing.

![Main Menu](https://media.discordapp.net/attachments/1267674014290149449/1267674096846503990/wenO9qU.png?ex=66a9a500&is=66a85380&hm=d6dc080475521176d9a8c860ce43479f5e1631458c4892c374074a9d507c8b32&=&format=webp&quality=lossless)


Once inside a category, you should see a screen similar to this:

![Main Menu](https://media.discordapp.net/attachments/1267674014290149449/1267674096846503990/wenO9qU.png?ex=66a9a500&is=66a85380&hm=d6dc080475521176d9a8c860ce43479f5e1631458c4892c374074a9d507c8b32&=&format=webp&quality=lossless)

You can use the Left and Right arrow keys to scroll through the category's contents.

From here, you can search a listed Google Dork query in the W3M web browser with the following command:
- `search <number>`

By using the `search custom` command, you can input your own query.

### Other Commands

- `close` - Return to the main menu.
- `quit` - Quit the program.