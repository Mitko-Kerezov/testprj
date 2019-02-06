///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import { Component, OnInit, AfterViewInit, OnDestroy, Injector, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouterExtensions } from 'nativescript-angular/router';
import { RadSideDrawerComponent } from 'nativescript-ui-sidedrawer/angular';
import { NavigationService } from './../../../core/services/navigation.service';
import { SideDrawerService } from './../../../core/services/side-drawer.service';

@Component({
    selector: 'kb-app-layout',
    templateUrl: './app-layout.view.component.html',
    styleUrls: ['./app-layout.view.component.css']
})
export class AppLayoutViewBaseComponent implements OnInit, AfterViewInit, OnDestroy {
    private activatedRoute: ActivatedRoute;
    private navigationService: NavigationService;
    private sideDrawerService: SideDrawerService;

    @ViewChild(RadSideDrawerComponent)
    public drawerComponent: RadSideDrawerComponent;

    constructor(public injector: Injector) {
        this.activatedRoute = injector.get(ActivatedRoute);
        this.navigationService = injector.get(NavigationService);
        this.sideDrawerService = injector.get(SideDrawerService);
    }

    ngOnInit() {
        this.navigationService.navigate(
            [
                {
                    outlets: {
                        application_home_tab: ['application_home'],
                        'blk_blk-view_tab': ['blk_blk-view']
                    }
                }
            ],
            { relativeTo: this.activatedRoute }
        );
    }

    open(path: string) {
        this.drawerComponent.sideDrawer.closeDrawer();
        this.navigationService.navigate([path]);
    }

    public ngAfterViewInit(): void {
        this.sideDrawerService.init(this.drawerComponent.sideDrawer);
    }

    public ngOnDestroy(): void {}
}
