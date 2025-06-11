// 2. Write a program to display following output as shown in figure

// Pattern -> 1

// 1
// 2 3
// 4 5 6
// 7 8 9 10

// Pattern -> 2

// 1
// 2 2
// 3 3 3
// 4 4 4 4

// Pattern -> 3

// 1 2 3 4 5
// 1 2 3 4
// 1 2 3
// 1 2
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5



const numberOfLines = Number(prompt("Enter the number of lines: "));

const pattern_1 = (lines) => {
  let num = 1;
  for (let row = 1; row <= lines; row++) {
    let patternLine = "";
    for (let column = 0; column < row; column++) {
      patternLine += num + " ";
      num++;
    }
    console.log(patternLine);
  };
};
pattern_1(numberOfLines);

const pattern_2 = (lines) => {
  for (let row = 1; row < lines; row++) {
    let patternLine = "";
    for (let column = 0; column < row; column++) {
      patternLine += `${row} `;
    }
    console.log(patternLine);
  };
};
pattern_2(numberOfLines);

const pattern_3 = (lines) => {
  for (let row = lines; row > 0; row--) {
    let patternLine = "";
    let num = 1;
    for (let column = 1; column <= row; column++) {
      patternLine += num + " ";
      num++;
    };
    console.log(patternLine);
  };
  for (let i = 2; i <= numberOfLines; i++) {
    let patternLine = "";
    let num = 1;
    for (let j = 1; j <= i; j++) {
      patternLine += num + " ";
      num++;
    };
    console.log(patternLine);
  };
};
pattern_3(numberOfLines);
