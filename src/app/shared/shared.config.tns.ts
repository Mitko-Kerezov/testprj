///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NativeScriptCommonModule } from 'nativescript-angular/common';

import { NativeScriptFormsModule } from 'nativescript-angular/forms';
import { NativeScriptUIAutoCompleteTextViewModule } from 'nativescript-ui-autocomplete/angular';
import { NativeScriptUICalendarModule } from 'nativescript-ui-calendar/angular';
import { NativeScriptUIChartModule } from 'nativescript-ui-chart/angular';
import { NativeScriptUIDataFormModule } from 'nativescript-ui-dataform/angular';
import { NativeScriptUIGaugeModule } from 'nativescript-ui-gauge/angular';
import { NativeScriptUIListViewModule } from 'nativescript-ui-listview/angular';
import { NativeScriptUISideDrawerModule } from 'nativescript-ui-sidedrawer/angular';
import { NativeChatModule } from '@progress-nativechat/nativescript-nativechat/angular';

import { HideNavBarDirective } from './directives/hide-nav-bar.directive';
import { ShowNavBarDirective } from './directives/show-nav-bar.directive';
import { ActionBarController } from './directives/action-bar-controller.directive';
import { ChatComponent } from './components/mobile-chat/chat.component';
import { KSListViewComponent } from './components/mobile-list-view/list-view.component';
import { KSSearchBarComponent } from './components/mobile-search-bar/search-bar.component';
import { KSFormComponent } from './components/mobile-form/form.component';

export const config: NgModule = {
    imports: [
        NativeScriptCommonModule,
        NativeScriptFormsModule,
        NativeScriptUIAutoCompleteTextViewModule,
        NativeScriptUICalendarModule,
        NativeScriptUIChartModule,
        NativeScriptUIDataFormModule,
        NativeScriptUIGaugeModule,
        NativeScriptUIListViewModule,
        NativeScriptUISideDrawerModule,
        NativeChatModule,
        ReactiveFormsModule
    ],
    exports: [
        NativeScriptCommonModule,
        NativeScriptFormsModule,
        NativeScriptUIAutoCompleteTextViewModule,
        NativeScriptUICalendarModule,
        NativeScriptUIChartModule,
        NativeScriptUIDataFormModule,
        NativeScriptUIGaugeModule,
        NativeScriptUIListViewModule,
        NativeScriptUISideDrawerModule,
        ReactiveFormsModule,

        HideNavBarDirective,
        ShowNavBarDirective,
        ActionBarController,
        ChatComponent,
        KSListViewComponent,
        KSSearchBarComponent,
        KSFormComponent
    ],
    declarations: [
        HideNavBarDirective,
        ShowNavBarDirective,
        ActionBarController,
        ChatComponent,
        KSListViewComponent,
        KSSearchBarComponent,
        KSFormComponent
    ],
    schemas: [NO_ERRORS_SCHEMA]
};
