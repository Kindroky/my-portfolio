---
title: TCP Chat Server in Go
publishDate: 2024-10-15
img: /assets/net-cat.png
img_alt: Terminal output from a netcat-style TCP chat
description: |
  A real-time, multi-client TCP chat app built in Go, featuring commands, concurrency, and logs — inspired by Netcat.
tags:
  - Backend
  - Networking
---
# TCP Chat Server in Go

**Netcat-style TCP chat server** in Go. This project enables multiple clients to connect, send messages, and interact in real time, using Go's standard networking libraries.

---

## 👾 Welcome Screen

```txt
Welcome to TCP-Chat!
         _nnnn_
        dGGGGMMb
       @p~qp~~qMb
       M|@||@) M|
       @,----.JM|
      JS^\__/  qKL
     dZP        qKRb
    dZP          qKKb
   fZP            SMMb
   HZM            MMMM
   FqM            MMMM
 __| ".        |\dS"qML
 |    ` + "`"`.| `"`"`'\
_)      \.___.,|     .'
\____   )MMMMMP|   .'
     `"`"`-'`"`"`-'
```

---

## 🔧 Features

- **Netcat-Style Interface**: Command-line interaction over TCP, mimicking the classic Netcat behavior.
- **Real-Time Messaging**: Broadcasts sent messages to all connected users instantly.
- **Command Support**:
  - `/exit` — Disconnect from the chat.
  - `/rename` — Change your display name.
- **ASCII Art Welcome**: Retro-style greeting on every connection.
- **Activity Logging**: All interactions are logged to `logs.txt` for audit or debugging.
- **Safe Concurrency**: `sync.Mutex` ensures thread-safe handling of shared resources.
- **Multi-Client Support**: Handles up to 10 simultaneous users.

---

### Start the Server

Launch your chat server with a specific port:

```bash
go run . 2525
```

### Connect a Client

In another terminal window, use Netcat to connect to the chat server:

```bash
nc localhost 2525
```

### Connect Over Network

If using multiple devices on the same Wi-Fi, replace `localhost` with the host machine's IP:

```bash
nc [IP_ADDRESS] 2525
```

> All devices must be on the same local network.

---

## 🧠 Why Build This?

This project is perfect for learning:

- TCP socket programming in Go  
- Goroutines and mutexes for concurrency  
- Real-time message handling and broadcasting  
- Designing interactive terminal apps  
- Structuring basic backend services

It’s a compact, educational, and fun introduction to network systems.

---

## 🔗 Explore the Code

For more details, usage examples, and the full codebase, visit:

👉 **[github.com/Kindroky/net-cat](https://github.com/Kindroky/net-cat)**