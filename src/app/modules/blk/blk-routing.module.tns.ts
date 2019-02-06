///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule, NSEmptyOutletComponent } from 'nativescript-angular/router';
import { BlkModuleComponent } from './blk.module.component';
import { BlkViewViewComponent } from './blk-view/blk-view.view.component';
import { AuthenticationGuardService } from './../../core/auth/authentication-guard.service';

const routes: Routes = [
    {
        path: '',
        component: BlkModuleComponent,
        children: [
            {
                path: 'blk-view',
                canActivate: [AuthenticationGuardService],
                canActivateChild: [AuthenticationGuardService],
                component: BlkViewViewComponent
            }
        ]
    }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule],
    providers: []
})
export class BlkRoutingModule {}
