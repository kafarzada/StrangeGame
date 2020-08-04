class Card {
    constructor(options) {
        this.$parent = document.getElementById('game')
        this.counter = options.counter
        this.createCard()

    }

    createCard() {
        this.$el = document.createElement('div');
        this.$el.classList.add('card')
        this.$el.innerHTML = this.counter;
        this.$parent.append(this.$el)
    }

    rendered() {
        this.$el.innerHTML = this.counter;
    }

    inc() {
        this.counter--;
        this.rendered()
    }

    stop() {
        this.counter+=0
    }

    restart() {
        this.counter = options.counter;
    }

    showDanger() {
        this.$el.classList.add('danger')
    }

    gameOver(isOver) {
       isOver ? this.$el.classList.add('gameOver')
              : this.$el.classList.remove('gameOver')
    }
}

