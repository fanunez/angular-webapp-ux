import {Component} from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';

@Component({
    selector: 'dialog.component',
    templateUrl: './dialog.component.html',
  })
  export class DialogAnimationsExampleDialog {
    constructor(public dialogRef: MatDialogRef<DialogAnimationsExampleDialog>) {}
    
  }