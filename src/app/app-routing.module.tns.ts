///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from 'nativescript-angular/router';

const routes: Routes = [
    {
        path: 'application',
        loadChildren: './modules/application/application.module#ApplicationModule'
    },
    {
        path: 'blk',
        loadChildren: './modules/blk/blk.module#BlkModule'
    },
    {
        path: '',
        redirectTo: 'application/app-layout',
        pathMatch: 'full'
    },
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule],
    providers: []
})
export class AppRoutingModule {}
