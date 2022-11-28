import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAnimationsExampleDialog } from '../dialog/dialog.component';

@Injectable({
    providedIn: 'root'
})

export class DialogService {
    
    constructor( private dialog: MatDialog ) {

    }

    openConfirmDialog() {
        this.dialog.open( DialogAnimationsExampleDialog, {
            width: '390px',
            disableClose: true
        } );
    }
}