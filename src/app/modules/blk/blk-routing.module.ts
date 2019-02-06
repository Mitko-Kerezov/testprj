///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlkModuleComponent } from './blk.module.component';
import { AuthenticationGuardService } from './../../core/auth/authentication-guard.service';
import { AuthorizationGuardService } from './../../core/auth/authorization-guard.service';

const routes: Routes = [
    {
        path: '',
        component: BlkModuleComponent,
        canActivate: [AuthenticationGuardService, AuthorizationGuardService],
        canActivateChild: [AuthenticationGuardService],
        data: {
            authorization: {
                allowedRoles: []
            }
        },
        children: []
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: []
})
export class BlkRoutingModule {}
