class SetUpGame {
    constructor () {
        this.boardContainer = document.querySelector('.board-container');
        this.roleContainer = document.querySelector('.select-role');
        this.selectGameDropdown = document.querySelector('.select-game');
        this.readyContainer = document.querySelector('.ready-to-play');
        this.chooserBtn = document.querySelector('.btn_choose');
        this.guesserBtn = document.querySelector('.btn_guess');
        this.playBtn = document.querySelector('.btn_play');
        this.selectedPerson = document.querySelector('.selected-person');
        this.games = ['stock', 'mps_1', 'mps_2', 'mps_3', 'mps_4', 'mps_5'];
        this.numberOfFaces = 15;

        // add event listeners
        this.chooserBtn.addEventListener('click', (evt) => this.setRole(evt));
        this.guesserBtn.addEventListener('click', (evt) => this.setRole(evt));
        this.playBtn.addEventListener('click', (evt) => this.readyToPlay(evt));
        this.selectGameDropdown.addEventListener('change', (evt) => {
            console.log('changed');
            this.drawBoard(evt);
        });

        this.roleContainer.style.display = 'none';
    }

    drawBoard(evt) {
        this.selectedGame = this.games[evt.target.selectedIndex - 1];
        console.log('selected', this.selectedGame);
        this.showRoleSelection();
        const boardMarkup = this.generateBoardMarkup();
        this.boardContainer.innerHTML = boardMarkup;
        // this.setUpClickability();
    }

    showRoleSelection() {
        this.roleContainer.style.display = 'block';
    }

    setRole(evt) {
        console.log('callled');
        console.log('set role to ', evt.target.dataset.role);
        this.role = evt.target.dataset.role;
        evt.target.classList.add('selected');
        this.role === 'guess' ? this.chooserBtn.classList.remove('selected') : this.guesserBtn.classList.remove('selected');
        this.boardContainer.classList.add(this.role);
        // if role = selector allow them to pick a person from the grid and show in .selected-person
        if (this.role === 'choose') {
            this.selectedPerson.style.display = 'block';
            this.selectedPerson.innerHTML = '<h3>Click a person to select them</h3>';
            this.showBoard();
            this.boardContainer.querySelectorAll('.person-container').forEach((person) => {
                person.addEventListener('click', this.selectPerson.bind(this));
            });
        }
        else {
            this.selectedPerson.style.display = 'none';
            this.readyContainer.style.display = 'block';
        }
    }

    selectPerson(evt) {
        this.selectedPerson.querySelector('h3').innerText = 'You have selected';
        if (!this.boardContainer.classList.contains('playing')) {
            if (this.selectedPerson.querySelector('img')) {
                console.log('in if');
                const img = this.selectedPerson.querySelector('img');
                img.src = evt.target.src;
            } else {
                const img = document.createElement('img');
                img.src = img.src = evt.target.src;
                this.selectedPerson.appendChild(img);
            }
            this.readyContainer.style.display = 'block';
        }
    }

    generateBoardMarkup() {
        let markup = '';
        console.log('path?', window.location.pathname);
        for (let index = 1; index <= this.numberOfFaces; index++) {
            markup += `<div class="person-container person-${index}">
                        <img src="https://github.com/rushlet/subjective-guess-who/blob/master/src/assets/${this.selectedGame}/${index}.jpeg?raw=true">
                        <span class="name-container">person ${index}</span>
                    </div>`;
        }
        return markup;
    }

    setUpClickability() {
        console.log('set up clickability');
        this.boardContainer.querySelectorAll('.person-container').forEach((person) => {
            console.log('person', person);
            person.addEventListener('click', ()=> {
                person.classList.contains('nope') ? person.classList.remove('nope') : person.classList.add('nope');
            })
        });
    }

    showBoard() {
        this.boardContainer.style.display = 'flex';
    }

    readyToPlay() {
        // remove the event listener to select a person and add one to track guesses
        // show board
        // hide dropdown and selection buttons
        this.showBoard();
        this.boardContainer.classList.add('playing');
        this.roleContainer.style.display = 'none';
        this.selectGameDropdown.style.display = 'none';
        this.readyContainer.style.display = 'none';
        this.setUpClickability();
    }
}

export default SetUpGame;