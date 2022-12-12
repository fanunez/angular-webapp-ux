import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table'  
import { MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common'; 
import { MatIconModule } from "@angular/material/icon";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DialogResultComponent } from './dialog-result.component'
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    declarations: [
        DialogResultComponent
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
    ]
})
export class DialogResultModule
{
}
