
class NeuralNetwork {
  constructor(layers) {
    this.layers = layers.map((layer, index) => {
      const size = layer.size;
      const weights = index > 0 ? Array.from({ length: size }, () => Array.from({ length: layers[index - 1].size }, () => Math.random() * 2 - 1)) : null;
      const biases = index > 0 ? Array.from({ length: size }, () => Math.random() * 2 - 1) : null;
      return {
        ...layer,
        weights,
        biases,
        outputs: new Array(size).fill(0)
      };
    });
  }

  forward(input) {
    this.layers[0].outputs = input;
    for (let i = 1; i < this.layers.length; i++) {
      const current = this.layers[i];
      const prev = this.layers[i - 1];

      for (let j = 0; j < current.size; j++) {
        let sum = current.biases[j];
        for (let k = 0; k < prev.size; k++) {
          sum += prev.outputs[k] * current.weights[j][k];
        }
        current.outputs[j] = this.activate(sum, current.activation);
      }
    }
    return this.layers[this.layers.length - 1].outputs;
  }

  activate(x, fn) {
    switch (fn) {
      case 'relu': return Math.max(0, x);
      case 'sigmoid': return 1 / (1 + Math.exp(-x));
      default: return x;
    }
  }
}

// Make the class available globally
window.NeuralNetwork = NeuralNetwork;
