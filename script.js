

const gameboard = (() => {
    let cells = [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ];
    const checkComplete = () => {

        if ('' != cells[0][0] && cells[0][0] == cells[1][1] && cells[1][1] == cells[2][2]) {
            return true;
        }

        if('' != cells[0][2] && cells[0][2] == cells[1][1] && cells[1][1] == cells[2][0]) {
            return true;
        }

        
        for (let i = 0; i < cells.length; i++) {
            if (cells[i][1] != '') {
                if (cells[i][0] == cells[i][1] && cells[i][1] == cells[i][2]) {
                    return true;
                }
            }
            if (cells[1][i] != '') {
                if (cells[0][i] == cells[1][i] && cells[1][i] == cells[2][i]) {
                    return true;
                }
            }
        }

        for (let i = 0; i < cells.length; i++) {
            for (let j = 0; j < cells[i].length; j++) {
                if (cells[i][j] == '') {
                    return false;
                }
            }
        }

        return true;
    }    
    const load = () => {
        let currChar = 'x';
        const board = document.querySelector('#board');
        board.innerHTML = '';
        for (let i = 0; i < cells.length; i++) {
            const boardRow = document.createElement('div');
            boardRow.classList.add('board-row');
            for (let j = 0; j < cells[i].length; j++) {
                let cell = cells[i][j];
                const boardCell = document.createElement('div');
                boardCell.classList.add('cell');
                boardCell.addEventListener('click', () => {
                    if (cell == '') {
                        cell = currChar;
                        boardCell.textContent = cell;
                        if (currChar == 'x') {
                            currChar = 'o';
                        } else {
                            currChar = 'x';
                        }
                        cells[i][j] = cell;
                    }
                    console.table(cells);
                    if (checkComplete()) {
                        alert('Game over');
                        cells = [
                            ['', '', ''],
                            ['', '', ''],
                            ['', '', '']
                        ];
                        load();
                    }
                });
                boardRow.appendChild(boardCell);
            }
            board.appendChild(boardRow);
        }
    };

    return { load, checkComplete };
})();

gameboard.load();