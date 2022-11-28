import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { ExampleComponent } from 'app/modules/admin/example/example.component';
import { MatTableModule } from '@angular/material/table'  
import { DialogAnimationsExampleDialog } from './dialog/dialog.component';

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
        MatTableModule
    ],
    entryComponents: [
        DialogAnimationsExampleDialog
    ]
})
export class ExampleModule
{
}
