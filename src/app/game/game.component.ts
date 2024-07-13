import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Game } from '../../models/game';
import { PlayerComponent } from '../player/player.component';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog, MatDialogActions } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { DialogAddPlayerComponent } from '../dialog-add-player/dialog-add-player.component';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [CommonModule, PlayerComponent, MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule, MatIconModule, MatDialogActions],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss'
})
export class GameComponent {
  pickCardAnimation = false;
  currentCard: string = "";
  game: Game = new Game;

  constructor(public dialog: MatDialog) {
    this.newGame();
  }

  newGame() {
    this.game = new Game();
    console.log(this.game);
  }

  takeCard() {
    if (!this.pickCardAnimation) {
      this.currentCard = this.game.stack.pop();
      this.pickCardAnimation = true;
      
      setTimeout(() => {
        this.game.playedCards.push(this.currentCard);
        this.pickCardAnimation = false;
      }, 1000);
    }
  }

  imgIndex = 0;

randomNumber() {
  this.imgIndex = Math.round((Math.random() * 10))%4
}

test() {
  this.randomNumber();
  console.log(this.imgIndex);
}

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogAddPlayerComponent);
    

    dialogRef.afterClosed().subscribe(name => {
      this.randomNumber();
      this.game.players.push(name);
      this.game.profileImg.push(this.game.profileImages[this.imgIndex]);
      console.log(this.game);
    });
  }

}
