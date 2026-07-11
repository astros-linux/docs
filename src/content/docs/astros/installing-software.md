---
title: Installing Software
---

## Installing Software

### Flatpak

If a software is available as a Flatpak, it should be your first option. You can install Flatpaks using the `cosmic-store`.

### Distrobox

For software not available as a Flatpak or terminal tools, use Distrobox.

Run `distrobox enter` for creating and entering your first Distrobox. It defaults to Arch Linux.

### System Extensions

List and install available extensions with:

```sh
updatectl features

updatectl enable --now --reboot <feature>
```
