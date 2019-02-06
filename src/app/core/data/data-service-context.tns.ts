///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import { Observable, BehaviorSubject, Subject } from 'rxjs';

import { KinveyServiceConfig } from './kinvey-service-config';
import { CollectionState } from './state/collection-state.interface';
import { DocumentState } from './state/document-state.interface';

export interface DataServiceContext<TState extends CollectionState | DocumentState> {
    config: KinveyServiceConfig;
    stateChanges?: Observable<TState>;
    errors: BehaviorSubject<Error>;
    isLoading: Subject<boolean>;
    loadMore?: Subject<any>;
}
