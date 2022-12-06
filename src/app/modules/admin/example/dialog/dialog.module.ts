import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table'  
import { MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common'; 
import { MatIconModule } from "@angular/material/icon";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DialogCreateComponent } from './dialog.component'
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    declarations: [
        DialogCreateComponent
    ],
    imports     : [
        MatTableModule,
        MatDialogModule,
        MatIconModule,
        CommonModule,
        ReactiveFormsModule,
        FormsModule
    ],
    providers: [
        NgbActiveModal
    ],
    // exports : [
    //     DialogCreateComponent
    // ]
})
export class DialogModule
{
}
