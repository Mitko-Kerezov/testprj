///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './../../shared/shared.module';
import { BlkModuleComponent } from './blk.module.component';
import { BlkRoutingModule } from './blk-routing.module';

import { BlkViewViewModule } from './blk-view/blk-view.view.module';
import { OtherViewModule } from './other/other.view.module';

export const config: NgModule = {
    declarations: [BlkModuleComponent],
    entryComponents: [],
    imports: [CommonModule, SharedModule, BlkViewViewModule, OtherViewModule, BlkRoutingModule],
    exports: [],
    providers: []
};
