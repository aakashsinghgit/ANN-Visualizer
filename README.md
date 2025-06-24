🧩 Project Purpose
Build an interactive, web-only ANN Visualizer with:

A Playground Mode to build and test ANNs manually

An Application Mode to classify hand-drawn shapes

An Export Mode to share and visualize network configurations

ann-visualizer/
├── index.html                  # Entry point (Playground UI)
├── scripts/
│   └── ann-engine.js           # Core ANN logic (layers, weights, forward pass)
├── assets/
│   ├── styles.css              # (Optional) custom styles if needed
│   └── logo.png                # (Optional) logo or icons
├── data/
│   ├── sample-config.json      # Predefined ANN config
│   └── pretrained-shape-model.json  # Pretrained weights for shape recognizer
├── docs/                       # (Optional) for GitHub Pages root if not using main root
│   └── index.html              # Can mirror root index.html
├── README.md                   # Project overview
├── LICENSE                     # (Optional) license file
└── .nojekyll                   # Ensures GitHub Pages doesn't ignore folders


### ✅ Iteration 1 – Playground Mode (MVP 1)
Purpose: Learn how ANN works – manually build and simulate forward pass.
### ✅ Iteration 2 – Application Mode: Shape Recognizer (MVP 2)
Purpose: Show ANN solving real task → shape classification
Target shapes (4):
🟠 Circle
🔷 Square
🔺 Triangle
⭐ Star

### ✅ Iteration 3 – Export Mode (MVP 3)
Purpose: Let users save and share their ANN setups