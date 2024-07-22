const generateGridButton = document.getElementById('generateGrid');
        const difficultySelect = document.getElementById('difficulty');
        const gridContainer = document.getElementById('grid');

        generateGridButton.addEventListener('click', generateGrid);

        function generateGrid() {
            const difficulty = parseInt(difficultySelect.value);
            let size, totalCells;

            switch (difficulty) {
                case 1:
                    size = 7;
                    totalCells = 49;
                    break;
                case 2:
                    size = 9;
                    totalCells = 81;
                    break;
                case 3:
                    size = 10;
                    totalCells = 100;
                    break;
            }

            gridContainer.innerHTML = '';
            gridContainer.style.width = `${size * 52}px`;  

            for (let i = 1; i <= totalCells; i++) {
                const cell = document.createElement('div');
                cell.classList.add('cell');
                cell.innerHTML = `<h3> ${i} </h3>`;
                cell.addEventListener('click', () => {
                    cell.style.backgroundColor = 'lightcoral';
                    console.log(`Cella cliccata: ${i}`);
                });
                gridContainer.appendChild(cell);
            }
        }