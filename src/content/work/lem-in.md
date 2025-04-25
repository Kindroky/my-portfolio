---
title: Lem-in 
publishDate: 2024-11-30
img: /assets/lem-in.gif
img_alt: Path-finding algorythm illustration
description: |
  Lem-in is a Go-based program that finds the shortest path for ants across a simulated colony of rooms and tunnels using advanced pathfinding and validation logic.
tags:
  - Algorythmics
  - Backend
---

# Lem-in 

**Lem-in** is a Go-based project that simulates the movement of ants through a colony of rooms and tunnels. Each ant must travel from a designated start room to an end room using the most efficient path possible.

This is one of my early projects focused on pathfinding, simulation logic, and input validation. It gave me practical experience in building robust systems that react to structured input and produce clean, traceable output.

---

## 🐜 How It Works

Lem-in reads an input file that describes the ant colony. This includes the number of ants, the layout of rooms, tunnel connections, and start/end points. The program then calculates how to move all ants from **##start** to **##end** in the fewest number of turns.

---

## 📄 Sample Input Format

```txt
4
##start
0 0 3
2 2 5
3 4 0
##end
1 8 3
0-2
2-3
3-1
```

Each line either defines ants, rooms, or tunnels. Special markers like `##start` and `##end` declare where the ant journey begins and ends.

---

## 🖥 Example Execution

```bash
go run . example00.txt
```

Output:

```txt
4
##start
0 0 3
2 2 5
3 4 0
##end
1 8 3
0-2
2-3
3-1

L1-2
L1-3 L2-2
L1-1 L2-3 L3-2
L2-1 L3-3 L4-2
L3-1 L4-3
L4-1
```

Each `Lx-y` represents an ant (x) moving to room (y). The program batches ant movements into simultaneous steps while ensuring rules are respected.

---

## ✨ Features

### 🔍 Shortest Path Calculation

- Efficiently routes ants through the colony
- Handles multiple paths and ensures optimal distribution

### ✅ Input Validation

The program returns **explicit error messages** for invalid scenarios:

- Missing start or end rooms
- Invalid room names or coordinates
- Invalid tunnel definitions
- Incorrect ant count

Examples:

```txt
ERROR: invalid data format, no start room found
ERROR: invalid data format, invalid number of Ants
```

### 🧠 Robust Simulation Logic

Handles edge cases like:

- No path from start to end
- Looped rooms (rooms linked to themselves)
- Ant bottlenecks and alternate paths

---

## 🚀 Usage

Run the simulation with:

```bash
go run . <input_file>
```

Example:

```bash
go run . example00.txt
```

The output will show both the parsed input and the simulation steps as ants traverse the map.

---

## 🔑 Key Takeaways

- The **shortest path is not always the most efficient** path
- Some colonies contain no valid route between `##start` and `##end`
- In these cases, the program exits gracefully and explains the problem

---

## Conclusion

**Lem-in** is one of my foundational algorithmic projects and one of the most complicated. It helped me understand how to turn structured input into an optimized simulation, with a strong focus on correctness, edge-case handling, and readability.

To explore the codebase or try it with different inputs, visit the full project:

👉 **[View it on GitHub](https://github.com/Kindroky/lemin)**  