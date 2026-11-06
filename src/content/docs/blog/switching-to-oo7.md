---
title: "Goodbye gnome-keyring, hello oo7"
date: 2026-11-06
---

James Bond went on a new mission, and this time it's in AstrOS :P

AstrOS now ships [oo7](https://github.com/linux-credentials/oo7) instead of
gnome-keyring as its Secret Service provider, the thing that stores your
app tokens, browser secrets and more.

oo7 is a modern provider written in rust that implements the same Secret Service
API as gnome-keyring, and is the direction most distros and desktop environments
are moving toward as a shared solution.

Your keyring is still unlocked automatically when you log in, and changing the
user's password keeps it in sync. Existing installs don't need to do anything,
as oo7 will migrate your old gnome-keyring keyrings on first unlock.
