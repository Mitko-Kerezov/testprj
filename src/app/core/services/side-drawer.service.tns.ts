///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import { Injectable } from '@angular/core';
import { RadSideDrawer } from 'nativescript-ui-sidedrawer';

@Injectable()
export class SideDrawerService {
    private sideDrawer: RadSideDrawer;

    public init(sideDrawer: RadSideDrawer) {
        this.sideDrawer = sideDrawer;
    }

    public show() {
        this.sideDrawer.showDrawer();
    }
}
