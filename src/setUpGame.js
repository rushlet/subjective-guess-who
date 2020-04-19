class SetUpGame {
    constructor () {
        console.log('setting up');
        this.boardContainer = document.querySelector('.board-container');
        this.selectGameDropdown = document.querySelector('.select-game');
        this.games = ['stock', 'mps_1', 'mps_2', 'mp_3', 'mps_4'];
        console.log('dropdown', this.selectGameDropdown);
        this.selectGameDropdown.addEventListener('change', (evt) => {
            console.log('changed');
            this.drawBoard(evt);
        });
        this.numberOfFaces = 25;
    }

    drawBoard(evt) {
        this.selectedGame = this.games[evt.target.selectedIndex];
        console.log('selected', this.selectedGame);
        
        const boardMarkup = this.generateBoardMarkup();
        this.boardContainer.innerHTML = boardMarkup;
        
    }

    generateBoardMarkup() {
        let markup = '';
        console.log('path?', window.location.pathname);
        for (let index = 0; index < this.numberOfFaces; index++) {
            markup = `<div class="person-container person-${index}">
                        <img src="./assets/${this.selectedGame}/${index}.jpeg">
                        <span class="name-container"></span>
                    </div>`;
        }
        return markup;
    }
}

export default SetUpGame;