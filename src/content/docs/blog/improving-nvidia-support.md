---
title: "Improving NVIDIA support"
date: 2026-09-22
---

AstrOS has had NVIDIA driver support for a pretty long time. In fact, it was 16
days after the first commit was pushed to our repo.

AstrOS uses open kernel modules NVIDIA drivers that are manually enabled via a
[system extension](/astros/installing-software/#system-extensions). We still do not
support the fully closed, proprietary NVIDIA drivers, and that won't change.

However, this presented two problems. First, nvidia-open only supports Turing
and later, so users with older cards would have a hard time using AstrOS.
Second, users had to install the NVIDIA system extension with no GPU driver
loaded, which left the system running at around 2-10 fps during the process.

That's why we now include the [NVK drivers](https://docs.mesa3d.org/drivers/nvk.html)
in the base image. Every NVIDIA user with a Kepler or newer GPU will boot into
Nouveau + NVK after installing AstrOS. This lets us support many more GPUs:
owners of pre-Turing cards get a working driver out of the box, and Turing and
newer get a smooth experience right away, whether they stick with NVK or
choose to switch to the nvidia-open drivers later. However, we strongly
recommend using the nvidia-open drivers, when supported, to take full advantage
of your GPU's performance. One user reported 160 fps with NVK compared to 400 fps
with nvidia-open in Minecraft. (RTX 3050)

All of this is now documented on a [dedicated page](/astros/nvidia/) in our documentation.
