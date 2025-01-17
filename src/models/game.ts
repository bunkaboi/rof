
export class Game {
    public players: string[] = ['Björn', 'Caro'];
    public profileImg: string[] = ['./../../assets/img/profile_1.jpg', './../../assets/img/profile_2.jpg']
    public stack: string[] | any = [];
    public playedCards: string[] | any  = [];
    public currentPlayer: number = 0;
    public profileImages: string[] = ['./../../assets/img/profile_1.jpg', './../../assets/img/profile_2.jpg', './../../assets/img/profile_3.jpg', './../../assets/img/profile_4.jpg']

    constructor() {
        for (let i = 1; i < 5; i++ ) {
            this.stack.push('blue_' + (i));
            this.stack.push('green_' + (i));
            this.stack.push('purple_' + (i));
            this.stack.push('yellow_' + (i));
        }
        shuffle(this.stack);

    }

}



function shuffle(array: string[]) {
    let currentIndex = array.length;
  
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
  
      // Pick a remaining element...
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  }