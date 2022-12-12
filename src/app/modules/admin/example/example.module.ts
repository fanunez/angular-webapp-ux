import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { ExampleComponent } from 'app/modules/admin/example/example.component';
import { MatTableModule } from '@angular/material/table'  
import { MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common'; 
import { MatIconModule } from "@angular/material/icon";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DialogModule } from './dialog/dialog.module';
import { DialogCreateComponent } from './dialog/dialog.component'

const exampleRoutes: Route[] = [
    {
        path     : '',
        component: ExampleComponent
    }
];

@NgModule({
    declarations: [
        ExampleComponent
    ],
    imports     : [
        RouterModule.forChild(exampleRoutes),
        MatTableModule,
        MatDialogModule,
        MatIconModule,
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        DialogModule
    ],
    entryComponents: [ DialogCreateComponent ]
})
export class ExampleModule
{
}
