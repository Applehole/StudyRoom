function solution(board, moves) {
  let Storage = [];
  for (let i = 0; i < moves.length; i++) {
    let Coloum = moves[i] - 1;
    let pickUptheNumberResult = pickUptheNumber(board, Coloum);
    let Low = pickOneOfNumber(pickUptheNumberResult); //좌표
    if (Low === "x") {
      continue;
    }
    board[Low][Coloum] = 0;
  }
  let counter = 0;
  while (true) {
    let checker = counter;
    for (let i = 0; i < Storage.length - 1; i++) {
      if (Storage[i] === Storage[i + 1]) {
        Storage.splice(i, 2);
        counter += 2;
        break;
      }
    }
    if (checker === counter) {
      break;
    }
  }
  return counter;
  function pickUptheNumber(board, place) {
    let pickHere = [];
    for (let i = 0; i < board.length; i++) {
      pickHere.push(board[i][place]);
    }
    return pickHere;
  }
  function pickOneOfNumber(array) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] !== 0) {
        Storage.push(array[i]);
        return i;
      } else {
        continue;
      }
    }
    return "x";
  }
}
solution(
  [
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 3],
    [0, 2, 5, 0, 1],
    [4, 2, 4, 4, 2],
    [3, 5, 1, 3, 1],
  ],
  [1, 5, 3, 5, 1, 2, 1, 4]
);
