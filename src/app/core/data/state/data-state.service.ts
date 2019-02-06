///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import { Observable, ReplaySubject, BehaviorSubject, merge } from 'rxjs';
import { tap, switchMap, filter, debounceTime } from 'rxjs/operators';

import { CollectionState } from './collection-state.interface';
import { DocumentState } from './document-state.interface';

export class DataStateService<TState extends CollectionState | DocumentState> {
    public readonly changes: Observable<TState>;

    private current: TState;
    private internalChanges: BehaviorSubject<TState>;
    private changesSubscriber = new ReplaySubject<Observable<TState>>(1);

    constructor(initialState: TState) {
        this.internalChanges = new BehaviorSubject<TState>(initialState);

        this.changes = merge(this.internalChanges, this.changesSubscriber.pipe(switchMap(stateObservable => stateObservable))).pipe(
            filter(state => !!state),
            debounceTime(100),
            tap(state => {
                this.current = state;
            })
        );
    }

    public getCurrent(): TState {
        return JSON.parse(JSON.stringify(this.current));
    }

    public update(state: TState): void {
        this.internalChanges.next(state);
    }

    public onChanges(stateObservable: Observable<TState>) {
        this.changesSubscriber.next(stateObservable);
    }
}
