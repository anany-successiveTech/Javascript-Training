// 3. Write a program to display Diamond Pattern

//         *
//       *  *
//     *  *  *
//   *  *  *  *
// *  *  *  *  *
//   *  *  *  *
//     *  *  *
//      *  *
//        *

const printDiamondPattern = (count) => {
  // Upper half
  for (let row = 0; row < count; row++) {
    let line = "";

    for (let space = 0; space < count - row - 1; space++) {
      line += " ";
    };

    for (let star = 0; star < 2 * row + 1; star++) {
      line += "*";
    };
    console.log(line);
  };

  // Lower half
  for (let row = count - 2; row >= 0; row--) {
    let line = "";

    for (let space = 0; space < count - row - 1; space++) {
      line += " ";
    };

    for (let star = 0; star < 2 * row + 1; star++) {
      line += "*";
    };
    console.log(line);
  };
};

printDiamondPattern(5);
