---
title: Real-Time Forum
publishDate: 2025-04-23
img: /assets/real-time.png
img_alt: Cloner news site
description: |
  A minimalist real-time forum built with Go and WebSockets, featuring live messaging, typing indicators, and user-to-user interaction.
tags:
  - Data
  - Full Stack
  - Frontend
  - backend
---

# Real-Time Forum 

**Real-Time Forum** is a lightweight but meaningful project built to experiment with real-time web communication using WebSockets. It marked my very first implementation of real-time interactions, and helped me understand how messaging systems and live updates can be synchronized between users on a web platform.

There is no elaborate visual theme or complex structure — the focus was purely on making a working real-time system.

---

## 🧠 Project Overview

This forum allowed multiple users to:

- Join and view a shared posts feed
- Register, Login, and Exit the forum
- Post something in a category filter once logged in
- Comment posts once logged in
- View the users online
- Send messages that appear instantly to another connected user and vice-versa
- See who is currently typing in real time

All of this was made possible by using Go's WebSocket support to manage bi-directional connections between clients and the server.

---

## 💬 Key Features

##### 🟢 Live Messaging

Messages sent by any connected user are broadcast to all others in real time.

##### ✍️ Typing Indicators

The system detects when a user is actively typing and displays a “typing...” status to others — simulating a feature present in modern chat apps.

---

## 🧪 First Real-Time Experiment

This was my first real use of:

- **WebSocket protocols**
- **Client connection management**
- **Live event broadcasting**
- **Typing status detection and synchronization**

It helped me better understand asynchronous communication models and event-based architecture.

---

## 🚀 How to Use

To run the project locally:

- Navigate to the `cmd` folder, and run this in the terminal :

```bash
go run main.go
```

Then open the browser and go to:

```bash
http://localhost:8080
```

You can open multiple browser tabs or windows to simulate different users chatting together.

---

## 🔧 Technical Highlights

- **Backend**: Go with the `net/http` and `gorilla/websocket` packages
- **Frontend**: HTML and JS to send and receive socket events
- **Architecture**: Central event hub with channels for messages and typing

---

## Conclusion

**Real-Time Forum** was a key learning milestone in understanding how real-time web applications work. It introduced me to WebSockets, message synchronization, and live UI updates — concepts that are foundational for any chat system or collaborative application.

👉 **[Visit the GitHub repository to view the code](https://github.com/ToniKorhonen/real-time-forum)**