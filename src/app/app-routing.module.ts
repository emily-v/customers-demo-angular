import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: '/customers'},
    { path: '**', pathMatch: 'full', redirectTo: '/customers' } // wildcard that redirects if URL does't match any routes
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ], // forRoot can only be used once
    exports: [ RouterModule ]
})
export class AppRoutingModule {

}