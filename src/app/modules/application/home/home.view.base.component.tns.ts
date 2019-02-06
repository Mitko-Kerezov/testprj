///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import { Component, OnInit, Injector } from '@angular/core';

import { DataServiceFactory } from '../../../core/data/data-service.factory';
import { MobileDataService } from '../../../core/data/mobile-data.service';
import { KinveyServiceConfig } from '../../../core/data/kinvey-service-config';

@Component({
    templateUrl: './home.view.component.html',
    styleUrls: ['./home.view.component.css']
})
export class HomeViewBaseComponent implements OnInit {
    public $config: any = {};

    protected $serviceFactory: DataServiceFactory;

    constructor(public injector: Injector) {
        this.$serviceFactory = injector.get(DataServiceFactory);

        const dataConfig = {};

        this.initDataServices(dataConfig);
    }

    public ngOnInit(): void {}

    protected initDataServices(dataConfig: { [key: string]: KinveyServiceConfig }) {}
}
