///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import { NgModule, NO_ERRORS_SCHEMA, ModuleWithProviders } from '@angular/core';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { ModalDialogService } from 'nativescript-angular/modal-dialog';
import { NativeScriptUISideDrawerModule } from 'nativescript-ui-sidedrawer/angular';
import { AuthenticationGuardService } from './auth/authentication-guard.service';
import { AuthenticationService } from './auth/authentication.service';

import { NavigationService } from './services/navigation.service';
import { SideDrawerService } from './services/side-drawer.service';
import { NetworkMonitoringService } from './services/network-monitoring.service';

import { KinveyService } from './data/kinvey.service';
import { KinveyCoreDataService } from './data/kinvey-core-data.service';
import { DataServiceFactory } from './data/data-service.factory';
import { SessionStorageService } from './session-storage.service';

@NgModule({
    imports: [NativeScriptRouterModule, NativeScriptUISideDrawerModule],
    exports: [NativeScriptRouterModule, NativeScriptUISideDrawerModule],
    schemas: [NO_ERRORS_SCHEMA]
})
export class CoreModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: CoreModule,
            providers: [
                ModalDialogService,
                SideDrawerService,
                NavigationService,
                KinveyService,
                KinveyCoreDataService,
                DataServiceFactory,
                AuthenticationGuardService,
                AuthenticationService,
                SessionStorageService,
                NetworkMonitoringService
            ]
        };
    }
}
