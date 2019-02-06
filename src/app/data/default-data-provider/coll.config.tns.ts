///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import { Kinvey } from 'kinvey-nativescript-sdk';

import { KinveyServiceConfig } from '../../core/data/kinvey-service-config';
import { Coll } from './coll.model';

export function getCollConfig(): KinveyServiceConfig {
    return {
        dataProviderName: 'DefaultDataProvider',
        serverOperations: true,
        createModel: () => new Coll(),
        collection: 'coll',
        dataStoreType: Kinvey.DataStoreType.Cache,
        loadOnDemand: true
    };
}
