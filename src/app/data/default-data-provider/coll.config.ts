///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import { KinveyServiceConfig } from '../../core/data/kinvey-service-config';
import { Coll } from './coll.model';

export function getCollConfig(): KinveyServiceConfig {
    return {
        dataProviderName: 'DefaultDataProvider',
        serverOperations: true,
        createModel: () => new Coll(),
        collection: 'coll'
    };
}
