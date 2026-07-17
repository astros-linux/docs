---
title: Troubleshooting
---

## How to re-enroll the tpm?

First wipe any old stale tpm's:

```sh
sudo systemd-cryptenroll --wipe-slot tpm2 /dev/disk/by-label/luks-AstrOS-root
```

Enroll your tpm2, you will be asked for your recovery key.

```sh
sudo systemd-cryptenroll --tpm2-device auto /dev/disk/by-label/luks-AstrOS-root
```
