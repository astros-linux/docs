---
title: "Privacy Policy"
---

*Last updated: 2026-08-07*

**The short version:** AstrOS ships no telemetry added by us, no analytics, and no crash
reporting. The operating system contacts our infrastructure only when *you* or *auto-update*
interact with systemd-sysupdate. On our servers we keep the minimum needed to run
them, and we do not sell, rent, or share data for advertising.

We are not interested in your data.

## 1. Introduction

AstrOS is committed to protecting your privacy. This Privacy Policy outlines how
we collect, use, disclose, and safeguard your information when you visit our
website and use our services (Forgejo, Matrix, similar).

## 2. Controller

The data controller responsible for your personal data is: [see legal-notice](/legal/legal-notice)

## 3. The operating system

### 3.1 No telemetry

AstrOS contains no telemetry, usage analytics, crash reporting, hardware surveys,
or unique installation identifiers added by us. Nothing about your machine, your usage, or
your installed software is collected by us. The full GPLv3 licensed source code
is public at [code.astros-linux.org](https://code.astros-linux.org/AstrOS/AstrOS),
so you can verify this yourself.

### 3.2 Downloading system updates and extensions

AstrOS downloads its images and updates from `dl.astros-linux.org`. This occurs when systemd-sysupdate is utilised.

Downloads are served from a Cloudflare R2 bucket.
Take a look at: [Cloudflare, Inc.](https://www.cloudflare.com/privacypolicy/)

### 3.3 Third-party connections your system may make

A general-purpose operating system talks to the network. These connections go to
third parties, not to us, and are governed by their own privacy policies.

Example:

- systemd-timesyncd -> NTP pool servers
- flatpak -> flathub infrastructure

## 4. Website

`astros-linux.org` is a static site. No analytics, no tracking cookies, no
third-party embeds. Documentation search runs in your browser.

## 5. Accounts and community services

Our services are self-hosted on a Hetzner VPS. We collect your account
information from the relevant services to ensure
you can register and login.

- Forgejo (username, email, credentials, public activity, IPs, git commit metadata)
- PocketID (provided name, username, email, credentials, IPs)
- Matrix (localpart, display name, messages, uploaded media, device list, IPs)
- AstrOS Homepage (IPs and user-agent in logs)

Our Matrix server has federation enabled, which means your messages
and public profile are copied to other servers whose operators
are independent data controllers.

---
