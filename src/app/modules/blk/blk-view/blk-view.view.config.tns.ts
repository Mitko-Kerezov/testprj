///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { SharedModule } from './../../../shared/shared.module';

import { BlkViewViewBaseComponent } from './blk-view.view.base.component';
import { BlkViewViewComponent } from './blk-view.view.component';

export const config: NgModule = {
    declarations: [BlkViewViewBaseComponent, BlkViewViewComponent],
    entryComponents: [],
    exports: [],
    imports: [
        CommonModule,
        SharedModule,
        NativeScriptRouterModule,
        NativeScriptRouterModule.forChild([{ path: '', component: BlkViewViewComponent }])
    ],
    providers: []
};
