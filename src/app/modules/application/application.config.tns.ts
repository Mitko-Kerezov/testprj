///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './../../shared/shared.module';
import { ApplicationModuleComponent } from './application.module.component';
import { ApplicationRoutingModule } from './application-routing.module';

import { AppLayoutViewModule } from './app-layout/app-layout.view.module';
import { HomeViewModule } from './home/home.view.module';
import { LoginViewModule } from './login/login.view.module';
import { RegisterViewModule } from './register/register.view.module';

export const config: NgModule = {
    declarations: [ApplicationModuleComponent],
    entryComponents: [],
    imports: [
        CommonModule,
        SharedModule,
        AppLayoutViewModule,
        HomeViewModule,
        LoginViewModule,
        RegisterViewModule,
        ApplicationRoutingModule
    ],
    exports: [],
    providers: []
};
