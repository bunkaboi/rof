import { Component } from '@angular/core';
import { MatDialog, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-dialog-add-player',
  standalone: true,
  imports: [MatButtonModule, FormsModule, MatInputModule, MatFormFieldModule, MatDialogActions, MatDialogContent, MatDialogClose, MatDialogModule],
  templateUrl: './dialog-add-player.component.html',
  styleUrl: './dialog-add-player.component.scss'
})
export class DialogAddPlayerComponent {

  name: string = '';


  constructor(private dialog: MatDialog, public dialogRef: MatDialogRef<DialogAddPlayerComponent>) { };


  onNoClick() {
    this.dialogRef.close();
  }

}
