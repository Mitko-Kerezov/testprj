///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import { SortDescriptor } from './sort-descriptor.interface';
import { CompositeFilterDescriptor } from './filter-descriptor.interface';

export interface CollectionState {
    skip?: number;
    take?: number;
    sort?: Array<SortDescriptor>;
    filter?: CompositeFilterDescriptor;
    group?: Array<any>;
}
