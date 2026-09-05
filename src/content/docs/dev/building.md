---
title: "Building from source"
---

See [`CONTRIBUTING.md`](https://code.astros-linux.org/AstrOS/AstrOS/src/branch/main/CONTRIBUTING.md) for contribution guidelines.

AstrOS is built with [mkosi](https://github.com/systemd/mkosi).

system:

```sh
git clone --recurse-submodules https://code.astros-linux.org/AstrOS/AstrOS.git
cd AstrOS/system
mkosi genkey # You'll need your own keys, or AstrOS will fail to build.
chmod 0600 mkosi.key mkosi.crt
mkosi -f -B # This builds to `mkosi.output/`
```

installer:

```sh
git clone --recurse-submodules https://code.astros-linux.org/AstrOS/AstrOS.git && cd AstrOS
# cp ./system/mkosi.output/AstrOS*_x86-64.raw.zst ./installer/mkosi.extra/images/AstrOS.raw.zst
# cd ./installer/mkosi.extra/images/ && sha256sum AstrOS.raw.zst > AstrOS.raw.zst.sha256 && cd -
cd installer
mkosi -f -B # This builds to `mkosi.output/`
```
