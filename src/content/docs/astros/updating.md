---
title: Updating
---

AstrOS uses systemd-sysupdate. Use [updatectl](https://man.archlinux.org/man/updatectl.1) to update your system:

```sh
updatectl update
```

Use `updatectl vacuum` in case of the update failing because of previously unfinished updates.

### Auto Updates

To enable auto-updates run:

```sh
systemctl enable --now systemd-sysupdate.timer
```

It triggers the update 15min after boot, and then on average every 6 hours, but randomly distributed.

In addition it updates persistently once on each Saturday, to ensure that even systems that weren't booted up for a long time have a chance to do the update.
