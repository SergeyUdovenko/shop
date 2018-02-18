import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductFormComponent } from './product-form/product-form.component';
import { ProductsComponent } from './products.component';

const routes: Routes = [
    {
        path: 'home',
        component: ProductsComponent,
        data: {
            title: 'Task Manager',
            meta: [{
                name: 'description',
                content: 'Task Manager Application. This is an ASP application'
            },
            {
                name: 'keywords',
                content: 'Angular 4 tutorial, SPA Application, Routing'
            }]
        }

    },
    {
        path: 'edit/:id',
        component: ProductFormComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class ProductsRoutingModule { }
