///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import { Component, ContentChild, Input, Injector } from '@angular/core';

import { View } from 'tns-core-modules/ui/core/view';
import { ListViewEventData } from 'nativescript-ui-listview';
import { RadListViewComponent } from 'nativescript-ui-listview/angular';

import { NavigationService } from '../../../core/services/navigation.service';
import { MobileDataService } from '../../../core/data/mobile-data.service';
import { CollectionState } from '../../../core/data/state/collection-state.interface';

@Component({
    selector: 'ks-list-view',
    templateUrl: './list-view.component.html'
})
export class KSListViewComponent {
    @Input()
    public dataService: MobileDataService<any, CollectionState>;

    @Input()
    public navigateOnItemTap: Array<string>;

    @ContentChild(RadListViewComponent)
    protected listViewComponent: RadListViewComponent;

    protected navigationService: NavigationService;

    constructor(public injector: Injector) {
        this.navigationService = injector.get(NavigationService);
    }

    public onItemTap(args: ListViewEventData) {
        if (this.navigateOnItemTap && this.navigateOnItemTap.length) {
            const selectedId = args && args.view && args.view.bindingContext && args.view.bindingContext._id;
            this.navigationService.navigate(this.navigateOnItemTap.concat([selectedId]));
        }
    }

    public onPullToRefreshInitiated({ object: listView }: ListViewEventData) {
        this.dataService.refresh().then(() => listView.notifyPullToRefreshFinished());
    }

    public onLoadMoreDataRequested({ object: listView }: ListViewEventData) {
        this.dataService.loadMore().then(() => listView.notifyLoadOnDemandFinished());
    }

    public onSwipeCellStarted(args: ListViewEventData) {
        const swipeLimits = args.data.swipeLimits;
        const swipeView = args.object;
        const rightItem = swipeView.getViewById<View>('delete-view');
        swipeLimits.right = rightItem.getMeasuredWidth();
        swipeLimits.left = 0;
        swipeLimits.threshold = rightItem.getMeasuredWidth() / 2;
    }

    public onRightSwipeClick({ object: listView }: ListViewEventData) {
        this.dataService.remove(listView.bindingContext);
    }
}
