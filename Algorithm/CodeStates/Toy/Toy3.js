const isSubsetOf = function (base, sample) {
  base.sort((a, b) => a - b);
  sample.sort((a, b) => a - b);
  for (let i = 0; i < base.length; i++) {
    if (sample.includes(base[i])) {
      sample.shift();
    }
  }
  if (sample.length === 0) {
    return true;
  }
  return false;
};

let base = [1, 2, 3, 4, 5];
let sample = [1, 4, 5, 2, 6];
console.log(isSubsetOf(base, sample));
