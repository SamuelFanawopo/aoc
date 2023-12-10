let grid = [
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
];

let startPos = [0, 0];

const day10 = (grid, startPos) => {
  let seen = new Array(grid.length)
    .fill()
    .map(() => new Array(grid[0].length).fill(false));

  let maxDistance = 0;

  const dfs = (row, col, distance) => {
    if (
      row < 0 ||
      row >= grid.length ||
      col < 0 ||
      col >= grid[0].length ||
      grid[row][col] !== 0
    )
      return;

    if (seen[row][col]) return;

    seen[row][col] = true;

    maxDistance = Math.max(maxDistance, distance);

    dfs(row - 1, col, distance + 1);
    dfs(row + 1, col, distance + 1);
    dfs(row, col - 1, distance + 1);
    dfs(row, col + 1, distance + 1);

    seen[row][col] = false; // backtrack
  };

  dfs(startPos[0], startPos[1], 1); // Start with a distance of 1

  console.log(maxDistance);
};

day10(grid, startPos);
