---
slug:  wiring-manifesto
title: "Building a Smart Home in India: The Wiring Manifesto"
excerpt: "I am building a home from scratch in Kerala. Before a single smart bulb is bought, we need to talk about the most boring (but critical) part: The Wiring. Here is why I am running neutral wires to every switchboard."
coverImage: "/bricks.jpeg"
date: "2025-12-10"
author:
  name: "TechDad"
ogImage:
  url: "/bricks.jpeg"
thumbnail: /bricks.jpeg
---

I am currently standing in the middle of a construction site that will soon be my home. There are no painted walls, no furniture, and definitely no Wi-Fi yet. Just bricks, cement, and a lot of dust.

Most people start their smart home journey by buying an Amazon Echo or a smart bulb. But since I am building from scratch, I have a unique advantage: **I can fix the infrastructure before the walls are plastered.**

If you are planning a new home build in India, here is the "Smart Home Wiring Manifesto" I am following.

## 1. The Neutral Wire Rule

In traditional Indian electrical wiring, electricians often loop the **Phase (Live)** wire to the switch and send it to the light, but the **Neutral** wire goes directly to the light fixture from the ceiling.

This creates a problem: **Smart Switches need power.**

A smart switch (like a Sonoff, Shelly, or Tuya device) is basically a tiny computer. It needs to stay "on" to listen for your voice commands or app signals, even when the light is turned off. To stay on, it needs a complete circuit: **Phase + Neutral.**

**My Instruction to the Electrician:**
> "Please pull a Neutral wire to every single switchboard, even if we aren't putting a socket there."



## 2. The "Deep Box" Strategy

Smart modules (the relays that go behind switches) are getting smaller, but they still take up space. Standard metal junction boxes used in India are often shallow (about 35mm to 47mm deep).

If you try to stuff a smart relay + wires + connectors into a standard box, it becomes a fire hazard or simply won't fit.

**The Fix:** I am using **50mm+ deep modular boxes** . That extra inch of depth is the difference between a clean install and a headache.

## 3. Conduits are Cheap, Rework is Expensive

Since my walls are made of laterite stone (common in Kerala) and concrete, adding wires later means breaking the wall. I am future-proofing by laying empty conduit pipes now.

* **TV Unit to Router:** For hardwired media streaming.
* **Router to Ceiling:** For a Wi-Fi Access Point (PoE).
* **Kitchen Under-Cabinet:** For future LED strip lighting.

## What's Next?

Right now, the electricians are chasing the walls. In the next post, I'll share the specific hardware I bought for the distribution board (DB) and my plan for a centralized server rack.

Stay tuned.