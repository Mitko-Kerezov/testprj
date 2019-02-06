///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';

export const config = {
    bootstrap: [AppComponent],
    imports: [SharedModule, NativeScriptModule, AppRoutingModule, CoreModule, CoreModule.forRoot()],
    declarations: [AppComponent],
    schemas: [NO_ERRORS_SCHEMA]
};
