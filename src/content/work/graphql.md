---
title: GraphZ01
publishDate: "2025-05-24"
img: /assets/graphql.png
img_alt: GraphZ01 graph interface
description: |
  Profile dashboard built with JS and GraphQL.
tags:
  - Frontend
  - Data
  - GraphQL
  - UI
---

#### GraphZ01 — Visualize Your Learning Progress with GraphQL

**GraphZ01** is a personal dashboard web application that pulls data from the Zone01 GraphQL API to display user activity and progress in an elegant graphic interface. It showcases how to query structured data and visualize it interactively using modern frontend tools.

Built for both performance and aesthetics, GraphZ01 turns raw student data into a sleek, dynamic web interface with minimal configuration and full control over data rendering.

---

#### 📊 Project Overview

The main goal of **GraphZ01** is to help users visualize their academic journey through:

- A real-time dashboard pulling from Zone01’s GraphQL API
- Graphs showing XP progression and audit ratio
- A clean interface displaying audits, login info, and key statistics

---

#### 🔍 Data Architecture

This project communicates with Zone01's GraphQL endpoint to query key user data:

- **User Profile**: Information like login, audit ratio, and presence
- **XP History**: Daily XP evolution rendered as a time-series graph

All queries are handled client-side using fetch requests, and the results are transformed for visualization.

---

#### 🌟 Key Features

- Secure login system using JWT authentication  
- Fetches real-time data from the Zone01 GraphQL API  
- Line graph showing XP progression over time  
- Bar chart displaying XP earned per project  
- Clean, responsive, and modern user interface built with TailwindCSS  
- Modular React components for easy maintenance and scalability  
- Hosted online for public access and demonstration purposes  

---

### Hosting and Deployment

The application is publicly accessible and hosted at:

**https://kindroky.github.io/graphQL/**

All data visualizations and user profile components are rendered client-side after authenticating through a stored JWT token.  
This setup ensures fast load times and easy access for demonstration or personal use.

