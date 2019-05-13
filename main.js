const boardWidth = 8;
const charOffset = 64;
const submitButton = document.getElementById('submitButton');
const current = document.getElementById('currentPos');

const getResultText = positions => `Возможные варианты хода: \n\n${positions.join(' ')}`;

const getColumn = pos => Number(pos.toUpperCase().charCodeAt(0)) - charOffset;

const getRow = pos => Number(pos[1]);

const getPairs = (col, row) => [
  [col - 2, row + 1],
  [col - 1, row + 2],
  [col - 1, row - 2],
  [col - 2, row - 1],
  [col + 1, row + 2],
  [col + 2, row + 1],
  [col + 2, row - 1],
  [col + 1, row - 2],
];

const columnToChar = pos => String.fromCharCode(charOffset + pos);

const isCellExist = (x, y) => x > 0 && x <= boardWidth && y > 0 && y <= boardWidth;

const getAllowMoves = (pos) => {
  const column = getColumn(pos);
  const row = getRow(pos);
  const moves = [];
  const pairs = getPairs(column, row);
  pairs.forEach((value) => {
    if (isCellExist(value[0], value[1])) {
      moves.push(columnToChar(value[0]) + value[1]);
    }
  });
  return moves;
};


const showAllowMoves = (pos) => {
  const moves = getAllowMoves(pos);
  alert(getResultText(moves));
};

submitButton.addEventListener('click', () => {
  showAllowMoves(current.value);
});
