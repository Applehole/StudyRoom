const rotateMatrix = function (matrix) {
    const N = matrix.length;
    const M = matrix[0] && matrix[0].length;
    let output = [];
  
    for (let row = 0; row < M; row++) {
      output[row] = [];
      for (let col = 0; col < N; col++) {
        output[row][col] = matrix[N - col - 1][row];
      }
    }
  
    return output;
  };