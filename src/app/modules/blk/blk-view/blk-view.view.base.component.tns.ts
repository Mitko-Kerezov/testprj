///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import { Component, OnInit, Injector } from '@angular/core';

import { DataServiceFactory } from '../../../core/data/data-service.factory';
import { MobileDataService } from '../../../core/data/mobile-data.service';
import { KinveyServiceConfig } from '../../../core/data/kinvey-service-config';
import { CollectionState } from '../../../core/data/state/collection-state.interface';
import { Coll } from '../../../data/default-data-provider/coll.model';
import { getCollConfig } from '../../../data/default-data-provider/coll.config';

@Component({
    templateUrl: './blk-view.view.component.html',
    styleUrls: ['./blk-view.view.component.css']
})
export class BlkViewViewBaseComponent implements OnInit {
    public $config: any = {
        mobilelistviewcomponent0: {}
    };

    public $viewDataSource1Service: MobileDataService<Coll, CollectionState>;

    protected $serviceFactory: DataServiceFactory;

    constructor(public injector: Injector) {
        this.$serviceFactory = injector.get(DataServiceFactory);

        const dataConfig = {
            viewDataSource1: getCollConfig()
        };

        this.initDataServices(dataConfig);
    }

    public ngOnInit(): void {}

    protected initDataServices(dataConfig: { [key: string]: KinveyServiceConfig }) {
        this.$viewDataSource1Service = this.$serviceFactory.collectionData<Coll>(dataConfig.viewDataSource1, {
            skip: 0,
            take: 20
        });
    }
}
