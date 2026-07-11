---
title: "Building from source"
---

See [`CONTRIBUTING.md`](https://github.com/astros-linux/AstrOS/blob/main/CONTRIBUTING.md) for contribution guidelines.

AstrOS is built with [mkosi](https://github.com/systemd/mkosi).

system:
```sh
git clone --recurse-submodules https://github.com/astros-linux/AstrOS
cd AstrOS/system
mkosi genkey # You'll need your own keys, or AstrOS will fail to build.
mkosi -f -B # This builds to `mkosi.output/`
```

installer:
```sh
git clone --recurse-submodules https://github.com/astros-linux/AstrOS
# zstd -o ./installer/mkosi.extra/images/AstrOS.raw.zst ./system/mkosi.output/AstrOS*_x86-64.raw
cd AstrOS/installer
mkosi -f -B # This builds to `mkosi.output/`
```
