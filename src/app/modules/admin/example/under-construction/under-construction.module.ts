import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { UnderConstructionComponent } from 'app/modules/admin/example/under-construction/under-construction.component';

const exampleRoutes: Route[] = [
    {
        path     : '',
        component: UnderConstructionComponent
    }
];

@NgModule({
    declarations: [
        UnderConstructionComponent
    ],
    imports     : [
        RouterModule.forChild(exampleRoutes)
    ]
})
export class UnderConstructionModule
{
}