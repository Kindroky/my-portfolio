---
title: Tetris Optimizer
publishDate: 2024-10-22
img: /assets/tetris-optimizer.png
img_alt: tetris-optimizer example output
description: |
  A Go-based algorithm that solves tetromino arrangement challenges by fitting them into the smallest grid possible. Includes performance metrics and error handling.
tags:
  - Algorythmics
  - Backend
---

#### Tetris Optimizer

**Tetris Optimizer** is a Go project that reads a list of tetrominoes from an input file and fits them into the smallest possible square grid. Each tetromino is assigned a unique letter and placed using a grid-packing algorithm that prioritizes minimal size and optimized layout.

This project allowed me to apply recursive algorithms, error handling, and basic performance benchmarking—all while building something visual and fun.

---

#### 🧩 Project Overview

The program starts by reading a file containing tetromino shapes in a specific format. It then tries to arrange them into the tightest grid possible. If a perfect square isn’t feasible, the algorithm adapts and inserts minimal spacing.

#### What It Does:

- Efficiently assembles tetrominoes into a compact square grid
- Assigns a unique uppercase letter to each piece (A, B, C, …)
- Automatically handles malformed tetrominoes and invalid input files
- Displays remaining empty grid cells using dots.
- Works with as few as one tetromino per file

---

#### 💡 Bonus Features

To go further, I added:

- **Performance Stats**: Solve time and empty cell count are printed after each execution
- **Color Coding (in terminal)**: Each tetromino is rendered in a different color (when supported)

---

#### 📁 Input Format

Each tetromino in the file must follow a consistent shape grid format. Here's an example of valid input:

```txt
....#
....#
....#
####

....
....
..##
..##

....
.###
....
....

....
##..
.##.
....
```

---

#### 🖥 Example Output

```txt
ABBBB.
ACCCEE
AFFCEE
A.FFGG
HHHDDG
.HDD.G
```

With performance and stats enabled:

```txt
Solving the puzzle...
Solved board in 91.0874ms :
AABKKK.
AAB.KGG
DDBFFFG
DDBCCFG
.ECCJII
EEHHJJI
EHH..JI
Found 5 empty spaces in the grid!
```

---

#### 🧠 Algorithmic Insights

This project provided hands-on experience in:

- Grid-based recursive backtracking
- Algorithm optimization for space constraints
- Visual data structuring with character identifiers
- Writing clear, interpretable error messages

Edge cases like impossible fits or malformed inputs are accounted for and return structured error outputs.

---

#### 🚀 How to Use

To run the optimizer:

```bash
go run . <path-to-input-file>
```

Example:

```bash
go run . sample01.txt
```

The output is printed directly in the terminal.

---

#### Conclusion

**Tetris Optimizer** is one of my early algorithmic projects. It helped me understand recursive strategies, constraint-solving, and how to make algorithms visually meaningful. It’s a playful yet technically solid example of problem-solving using Go.

👉 **[Visit the GitHub project to explore the code and run it yourself](https://github.com/Kindroky/tetris-optimizer)**