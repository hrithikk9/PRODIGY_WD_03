const board = document.getElementById('board');
const winner = document.getElementById('winner');
let currentPlayer = 'x';
let boardArray = ['', '', '', '', '', '', '', '', ''];

function checkForWinner() {
    const winningCombos = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];

    for (let i = 0; i < winningCombos.length; i++) {
        const [a, b, c] = winningCombos[i];
        if (boardArray[a] && boardArray[a] === boardArray[b] && boardArray[a] === boardArray[c]) {
            winner.innerText = `Player ${boardArray[a]} wins!`;
            return true;
        }
    }

    if (!boardArray.includes('')) {
        winner.innerText = 'It\'s a draw!';
        return true;
    }

    return false;
}

function updateBoard() {
    board.innerHTML = '';
    for (let i = 0; i < 9; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.dataset.index = i;
        cell.innerText = boardArray[i];
        cell.addEventListener('click', function() {
            if (boardArray[i] === '') {
                boardArray[i] = currentPlayer;
                cell.innerText = currentPlayer;
                if (checkForWinner()) {
                    currentPlayer = '';
                } else {
                    currentPlayer = currentPlayer === 'x' ? 'o' : 'x';
                }
            }
        });
        board.appendChild(cell);
    }
}

updateBoard();