---
title: "We are now in beta 🎉"
date: 2026-07-31
---

![AstrOS](../../../assets/astros.png)

[Beta announcement video](https://www.youtube.com/watch?v=8N9aY7UPsHA)

## What is AstrOS?

It is an immutable, secure-by-default Linux distribution based on Arch Linux and the COSMIC desktop environment. It uses similar tooling as GNOME OS and KDE Linux.

What makes AstrOS special is its immutable base, which is shipped as a hashed and signed /usr image that is booted by signed uki images. This combination protects your system from outside modification.

AstrOS base can be extended with currently four extensions (or your own). Including a steam gaming extension with the steamos gamescope session.

### Technical details

- Built using mkosi

- Uses systemd-sysupdate (rollbacks too!)

- Read-only /usr with signed dm-verity

- Full disk encryption is enforced (tpm required)

- Systemd-sysexts and confexts (system extensions)

- Highly opinionated

## Who is AstrOS for?

Anyone who wants a secure system out of the box without having to configure anything. It's a system that just works, and you don't have to worry about it.

## What has happened since our [first announcement](https://www.reddit.com/r/AstrOS_Linux/comments/1uqam1b/astros_an_immutable_securebydefault_linux/)

- Restructured the codebase into mkosi subimages.

- Four new system extensions (NVIDIA, gaming mode, virtualization, and Firewalld).

- Migration to systemd-confext for /etc

- Installer improvements (TPM2 check etc).

- Display keymap list during first boot instead of entering it manually

- Our own theme: Orbital

- Many bug fixes

- Safe mode uki profile

- Package additions

- Compressed images and a new download infrastructure

- We moved from GitHub to Forgejo.

- Our docs/homepage: [https://astros-linux.org](https://astros-linux.org)

- And way more!
