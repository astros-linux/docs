---
title: Installation
---

## Requirements

- **x86-64** machine with **UEFI** firmware
- A **TPM 2.0** module
- 30GB disk space (both `/usr` partitions need at least 5GB)
- 8GB USB stick for installation

## Download

Grab the latest image:

[AstrOS-installer_latest_x86-64.raw.zst](https://dl.astros-linux.org/AstrOS-installer_latest_x86-64.raw.zst)

[SHA256SUMS](https://dl.astros-linux.org/SHA256SUMS)

Write it to a USB stick. We recommend [caligula](https://github.com/ifd3f/caligula):

```sh
caligula burn AstrOS-installer_latest_x86-64.raw.zst
```

Any tool that writes a raw image (e.g. `dd`) works too.

## Install

1. Boot the usb stick.
2. Select and confirm your disk to install to.
3. Done

### First Boot Setup

It is very important to save the recovery key. Your data will be lost if you don't save it and the tpm fails to unlock your root partition!
