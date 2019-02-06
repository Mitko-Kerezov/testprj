///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule, NSEmptyOutletComponent } from 'nativescript-angular/router';
import { ApplicationModuleComponent } from './application.module.component';
import { AppLayoutViewComponent } from './app-layout/app-layout.view.component';
import { HomeViewComponent } from './home/home.view.component';
import { LoginViewComponent } from './login/login.view.component';
import { RegisterViewComponent } from './register/register.view.component';
import { AuthenticationGuardService } from './../../core/auth/authentication-guard.service';

const routes: Routes = [
    {
        path: '',
        component: ApplicationModuleComponent,
        children: [
            {
                path: 'app-layout',
                canActivate: [AuthenticationGuardService],
                canActivateChild: [AuthenticationGuardService],
                component: AppLayoutViewComponent,
                children: [
                    {
                        path: 'application_home',
                        outlet: 'application_home_tab',
                        component: HomeViewComponent
                    },
                    {
                        path: 'blk_other',
                        outlet: 'blk_other_tab',
                        component: NSEmptyOutletComponent,
                        loadChildren: './../blk/other/other.view.module#OtherViewModule'
                    },
                    {
                        path: 'blk_blk-view',
                        outlet: 'blk_blk-view_tab',
                        component: NSEmptyOutletComponent,
                        loadChildren: './../blk/blk-view/blk-view.view.module#BlkViewViewModule'
                    }
                ]
            },
            {
                path: 'home',
                canActivate: [AuthenticationGuardService],
                canActivateChild: [AuthenticationGuardService],
                component: HomeViewComponent
            },
            {
                path: 'login',
                component: LoginViewComponent
            },
            {
                path: 'register',
                component: RegisterViewComponent
            }
        ]
    }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule],
    providers: []
})
export class ApplicationRoutingModule {}
