import { Component } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-startscreen',
  standalone: true,
  imports: [MatSlideToggleModule, MatButtonModule, MatIconModule, MatDividerModule, CommonModule],
  templateUrl: './startscreen.component.html',
  styleUrl: './startscreen.component.scss'
})
export class StartscreenComponent {

  constructor(private router: Router) {

  }

  newGame() {
    this.router.navigateByUrl('/game');
  }

}
