import { Component, Input, OnChanges } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-game-info',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './game-info.component.html',
  styleUrl: './game-info.component.scss'
})
export class GameInfoComponent implements OnChanges {
  cardAction = [
    { title: 'Waterfall', description: 'Everyone has to start drinking at the same time.'},
    { title: 'You', description: 'You decide who drinks!'},
    { title: 'Me', description: 'Congrats, drink a shot!'},
    { title: 'Chicks', description: 'All girls drink!'}
  ]

title = "";
description = "";

@Input() card: string = "";

ngOnChanges(): void {
  if (this.card) {
  let cardNumber = +this.card.split("_")[1];
  this.title = this.cardAction[cardNumber - 1].title;
  this.description = this.cardAction[cardNumber - 1].description;
  }
}

}
