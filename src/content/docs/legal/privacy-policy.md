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
No account or installation identifier is needed. As with any download, your IP
address, the requested file, and your user agent are visible to the server serving it.

Downloads are served from a Cloudflare R2 bucket. Cloudflare acts as our processor
and keeps its own edge logs, over which we have no control.
Take a look at: [Cloudflare, Inc.](https://www.cloudflare.com/privacypolicy/)

**Legal basis:** Art. 6(1)(f) GDPR.

### 3.3 Third-party connections your system may make

A general-purpose operating system talks to the network. These connections go to
third parties, not to us, and are governed by their own privacy policies. We are
not the controller for them.
Example:

- systemd-timesyncd -> NTP pool servers
- flatpak -> flathub infrastructure

## 4. Sites

Our webserver registers all connections to the Sites automatically and collects the following technical information about your visit:

- IP address
- Date and time of the connection;
- Operating system and user agent.

We process this data to establish a connection to your device over the Internet.
We store the aforementioned data in log files in order to ensure the
security and integrity of our infrastructure.

**Legal basis:** Art. 6(1)(f) GDPR. Recital 49 GDPR recognises network security as
a legitimate interest.

## 5. Cookies

No analytics, advertising, or tracking cookies, and no third-party scripts. Forgejo
and PocketID set a session cookie once you log in, and your Matrix client stores
login and encryption keys locally in your browser. These are strictly necessary, so
we ask for no cookie consent.

## 6. Accounts and community services

Our services are self-hosted on a Hetzner VPS. We collect your account
information from the relevant services to ensure
you can register and login.

- Forgejo (username, email, credentials, public activity, IPs, git commit metadata)
- PocketID (provided name, username, email, credentials, IPs)
- Matrix (localpart, display name, messages, uploaded media, device list, IPs)
- AstrOS Homepage (IPs and user-agent in logs)

**Legal basis:** Art. 6(1)(b) GDPR. Providing this data is not a legal requirement,
but it is necessary to hold an account. AstrOS itself and our Sites need no account.

Our Matrix server has federation enabled, which means your messages
and public profile are copied to other servers whose operators
are independent data controllers. We cannot recall, correct, or delete those copies.

## 7. Retention

| Data | Kept for |
| --- | --- |
| Logs (all services) | 30 days |
| Account data | until you delete your account |
| Messages | permanent (due to federation) |
| Git commit author name and email | permanent |

## 8. Your Rights

Under the GDPR, you have the following rights regarding your personal data:

- Right of access (Art. 15 GDPR)
- Right to rectification (Art. 16 GDPR)
- Right to deletion (Art. 17 GDPR)
- Right to restriction of processing (Art. 18 GDPR)
- Right to data portability (Art. 20 GDPR)
- Right to object (Art. 21 GDPR)
- Right to withdraw consent (Art. 7(3) GDPR)
- Right to lodge a complaint with a supervisory authority (Art. 77 GDPR)

You have equivalent rights under the FADP (Art. 25, 28 and 32 FADP).

To exercise these rights, please contact us at <a href="mailto:contact@astros-linux.org">contact@astros-linux.org</a>.
We may ask you to confirm the request from your registered address so we do not hand
your data to someone else.

## 9. Changes

We may update this policy. The current version is always here with the date at the
top, and every change is auditable in public git.

---
