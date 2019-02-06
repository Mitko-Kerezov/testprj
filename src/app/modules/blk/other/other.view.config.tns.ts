///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { SharedModule } from './../../../shared/shared.module';

import { OtherViewBaseComponent } from './other.view.base.component';
import { OtherViewComponent } from './other.view.component';

export const config: NgModule = {
    declarations: [OtherViewBaseComponent, OtherViewComponent],
    entryComponents: [],
    exports: [],
    imports: [
        CommonModule,
        SharedModule,
        NativeScriptRouterModule,
        NativeScriptRouterModule.forChild([{ path: '', component: OtherViewComponent }])
    ],
    providers: []
};
