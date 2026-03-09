# Self-Hosted Edge Server on an Android Device

![LineageOS](https://img.shields.io/badge/OS-LineageOS-blue?style=flat-square)
![Termux](https://img.shields.io/badge/Environment-Termux-green?style=flat-square)
![Alpine Linux](https://img.shields.io/badge/Linux-Alpine-0D597F?style=flat-square&logo=alpine-linux&logoColor=white)
![Cloudflare](https://img.shields.io/badge/Tunnel-Cloudflare-F38020?style=flat-square&logo=cloudflare&logoColor=white)
![Python](https://img.shields.io/badge/Server-Python%20HTTP-3776AB?style=flat-square&logo=python&logoColor=white)

---

## Overview

This project demonstrates how unused smartphone hardware can be transformed into a lightweight, publicly accessible edge server. A **Xiaomi Redmi Note 5 Pro** running **LineageOS** is repurposed to host web services, expose SSH endpoints, and experiment with self-hosted infrastructure concepts — all without any cloud subscription.

By leveraging **Termux** for a Linux-like shell environment, **Alpine Linux** via `proot-distro`, and **Cloudflare Tunnel** for public internet exposure, this smartphone effectively behaves as a small server node capable of hosting services, running automation, and being accessed remotely from anywhere in the world.

---

## Motivation

> "Why pay for cloud when you have a drawer full of old phones?"

- 📚 Learn low-level Linux systems and networking in a hands-on environment
- 💰 Build real infrastructure without paying for cloud resources
- ♻️ Repurpose old hardware into useful, always-on compute nodes
- 🔬 Experiment freely with self-hosted services and infrastructure patterns
- 🌐 Understand tunneling, DNS routing, and reverse proxy concepts in practice

---

## Architecture

```
Internet
    ↓
Cloudflare DNS  (portfolio.sudeeplabs.me / ssh.sudeeplabs.me)
    ↓
Cloudflare Tunnel  (outbound-only, no port forwarding required)
    ↓
Termux Environment  (Android userspace shell)
    ↓
Alpine Linux via proot-distro  (lightweight Linux distro)
    ↓
Services: Python HTTP Server | SSH (OpenSSH)
```

**How it works:**

- The Android device runs **Termux**, which provides a full POSIX-compatible shell without requiring root.
- Inside Termux, **Alpine Linux** is bootstrapped using `proot-distro`, giving access to `apk`, `systemd`-style init, and standard Linux tooling.
- A **Cloudflare Tunnel** (`cloudflared`) daemon runs persistently inside Alpine. It opens an outbound encrypted connection to Cloudflare's network, so the device never needs an open inbound port or a static IP.
- Cloudflare routes traffic from public hostnames (e.g., `portfolio.sudeeplabs.me`) through the tunnel to the appropriate local service.
- **tmux** keeps all services alive across shell disconnections.

---

## Features

- 📱 Self-hosted edge server running entirely on a smartphone
- 🔒 **Cloudflare Tunnel** for secure, zero-trust public access
- 🌍 Dynamic-IP tolerant — no static IP or port forwarding needed
- 🖥️ Remote **SSH access** to the device from anywhere in the world
- 🐧 Full **Alpine Linux** environment inside Android via proot-distro
- 🌐 Host static websites, REST APIs, and web services
- 🔄 Persistent service management using **tmux** sessions
- ♻️ Repurposes e-waste into productive compute infrastructure

---

## Tech Stack

| Layer | Technology |
|---|---|
| Operating System | LineageOS (Android) |
| Terminal Environment | Termux |
| Linux Distribution | Alpine Linux (via proot-distro) |
| Public Tunneling | Cloudflare Tunnel (`cloudflared`) |
| DNS & Domain Routing | Cloudflare DNS |
| Web Server | Python HTTP Server (`http.server`) |
| Remote Access | SSH (OpenSSH) |
| Session Management | tmux |
| Networking Tools | curl, wget, net-tools, iproute2 |

---

## Setup Overview

> This is a high-level overview of the setup process. Detailed commands and configuration files are found in the project structure.

1. **Unlock Bootloader & Install LineageOS**
   Unlock the Xiaomi Redmi Note 5 Pro bootloader and flash LineageOS for a clean, bloat-free Android base.

2. **Install Termux**
   Install Termux from F-Droid (recommended over Play Store for up-to-date packages). Update packages and install core utilities.

3. **Install Alpine Linux via proot-distro**
   Use `proot-distro` inside Termux to install and bootstrap an Alpine Linux environment, providing access to standard Linux tooling.

4. **Configure SSH Server**
   Install and configure OpenSSH inside Alpine. Set up key-based authentication and expose SSH via Cloudflare Tunnel for secure remote access.

5. **Set Up Cloudflare Tunnel**
   Install `cloudflared` inside Alpine, authenticate with Cloudflare, and create a named tunnel. Configure ingress rules to route public hostnames to local services.

6. **Configure Domain & Subdomains**
   Add DNS CNAME records on Cloudflare to map subdomains (e.g., `portfolio.sudeeplabs.me`) to the tunnel endpoint.

7. **Run Services Inside Alpine**
   Start the Python HTTP server to serve the portfolio website. Launch the SSH daemon. Use tmux to keep all processes running persistently.

---

## Project Structure

The server currently routes the following services:

| Hostname | Service |
|---|---|
| `portfolio.sudeeplabs.me` | Portfolio website (Python HTTP Server) |
| `ssh.sudeeplabs.me` | SSH access to the Alpine environment |
| *(future)* | REST APIs, automation tools, webhooks |

---

## Current Capabilities

- ✅ **Public website hosting** — static portfolio site served over HTTPS
- ✅ **Remote SSH access** — full shell access to the Linux environment from any network
- ✅ **Reverse tunnel networking** — outbound Cloudflare Tunnel eliminates the need for port forwarding
- ✅ **Domain routing** — custom subdomains routed through Cloudflare to local services
- ✅ **Persistent sessions** — tmux keeps services alive across reconnections

---

## Future Improvements

- 📦 **Containerized workloads** — run isolated services using Podman or Docker-compatible runtimes
- 🤖 **n8n automation** — host a self-contained n8n instance for workflow automation
- 🌐 **Lightweight APIs** — expose REST or GraphQL endpoints from the device
- ☸️ **Kubernetes-style orchestration** — experiment with lightweight schedulers like k3s
- 🔁 **Self-healing services** — auto-restart processes on failure and on device boot
- 📡 **Distributed cluster** — build a multi-node cluster using several repurposed smartphones
- 🔐 **Hardened security** — integrate fail2ban, firewall rules, and intrusion detection

---

## Learning Outcomes

Building this project provided hands-on experience with:

- 🐧 **Linux process management** — understanding init, daemons, tmux sessions, and process supervision
- 🌐 **Networking & tunneling** — DNS resolution, TCP/IP fundamentals, reverse proxies, and Cloudflare Tunnel internals
- 🗺️ **DNS & reverse proxy infrastructure** — configuring CNAME records, ingress routing, and TLS termination
- ⚡ **Resource-constrained system design** — optimizing for limited RAM, CPU, and battery on mobile hardware
- 🏗️ **Self-hosted infrastructure** — end-to-end ownership of the full stack from hardware to application layer

---

## Author

**Sudeep T Pillai**

- 🐙 GitHub: [@Sudeep-T-Pillai](https://github.com/Sudeep-T-Pillai)
- 🌐 Portfolio: [portfolio.sudeeplabs.me](https://portfolio.sudeeplabs.me)

---

*Built with curiosity, a spare smartphone, and a refusal to pay for cloud compute.*