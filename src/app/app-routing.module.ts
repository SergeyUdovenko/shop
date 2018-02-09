import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';

import { PageNotFoundComponent, ProductsComponent } from './components';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },

    {
        path: 'product',
        component: ProductsComponent,
    },

    {
        // The router will match this route if the URL requested
        // doesn't match any paths for routes defined in our configuration
        path: '**',
        component: PageNotFoundComponent,
        data: { title: 'Page Not Found' }

    }
];

export let appRouterComponents = [ PageNotFoundComponent];

const extraOptions: ExtraOptions = {
    // preloadingStrategy: CustomPreloadingStrategyService,
    // enableTracing: true // Makes the router log all its internal events to the console.
};

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }