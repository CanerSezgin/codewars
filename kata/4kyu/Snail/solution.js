function snail(array) {
  if (!array[0].length) return [];
  const positions = [{ row: 0, col: 0 }];

  const stack = {
    dir: "right",
  };
  while (true) {
    const index = positions.length - 1;
    if (index === Math.pow(array.length, 2) - 1) break;

    const previousPosition = positions[index];
    move(stack.dir, previousPosition);
  }

  function validatePosition(position) {
    const { row, col } = position;
    const withinTheBoundaries = row < array.length && col < array.length && row >= 0 && col >= 0;
    const isPositionAlreadyVisited = positions.some((p) => JSON.stringify(p) === JSON.stringify(position));
    return !isPositionAlreadyVisited && withinTheBoundaries;
  }

  function directions(position) {
    const { row, col } = position;
    return {
      right: {
        nextDir: "down",
        nextPosition: { row, col: col + 1 },
      },
      down: {
        nextDir: "left",
        nextPosition: { row: row + 1, col },
      },
      left: {
        nextDir: "up",
        nextPosition: { row, col: col - 1 },
      },
      up: {
        nextDir: "right",
        nextPosition: { row: row - 1, col },
      },
    };
  }

  function move(dir, previousPosition) {
    const direction = directions(previousPosition)[dir];
    const newPosition = direction.nextPosition;

    if (validatePosition(newPosition)) {
      positions.push(newPosition);
    } else {
      stack.dir = direction.nextDir;
    }
  }

  return positions.map((p) => array[p.row][p.col]);
}

/* ******************************************* */
const test1 = {
  data: [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ],
  expected: [1, 2, 3, 6, 9, 8, 7, 4, 5],
};
const test2 = {
  data: [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25],
  ],
  expected: [1, 2, 3, 4, 5, 10, 15, 20, 25, 24, 23, 22, 21, 16, 11, 6, 7, 8, 9, 14, 19, 18, 17, 12, 13],
};
const result = snail(test1.data);
console.log("RESULT: \n", result);
console.log("STATUS", result === test1.expected);
