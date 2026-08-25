---
title: Installing Software
---

## Flatpak

If a software is available as a Flatpak, it should be your first option. You can install Flatpaks using the `cosmic-store`.

## Distrobox

For software not available as a Flatpak or terminal tools, use Distrobox.

Run `distrobox enter` for creating and entering your first Distrobox.

Learn more: [Distrobox](/astros/distrobox)

## System Extensions

List and install available extensions with:

```sh
updatectl features

# With --now you need to be on the latest version; otherwise leave it out and
# run 'updatectl update' afterwards.
updatectl enable --now --reboot <feature>
```

Disable extensions:

```sh
updatectl disable --now <feature>

sudo rm /var/lib/extensions/<feature_version.raw>
```
