import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { ExampleComponent } from 'app/modules/admin/example/example.component';

const exampleRoutes: Route[] = [
    {
        path     : '',
        component: ExampleComponent
    },
    // change modules
    {
        path     : '/account',
        component: ExampleComponent
    },
    {
        path     : '/historial',
        component: ExampleComponent
    },
    {
        path     : '/transfer',
        component: ExampleComponent
    },
    {
        path     : '/pay-bills',
        component: ExampleComponent
    },
    {
        path     : '/pay-services',
        component: ExampleComponent
    }
];

@NgModule({
    declarations: [
        ExampleComponent
    ],
    imports     : [
        RouterModule.forChild(exampleRoutes)
    ]
})
export class ExampleModule
{
}
