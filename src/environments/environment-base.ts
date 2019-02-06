///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import { AppConfigService } from '../app/core/app-config.service';

export const environmentBase = {
    appId: '9c36bd62-9ae4-4f9d-9f81-9653e926841e',
    appName: 'myProj',
    getDataProviders() {
        return AppConfigService.settings.dataProviders;
    },
    getAuthentication() {
        return AppConfigService.settings.authentication;
    }
};
