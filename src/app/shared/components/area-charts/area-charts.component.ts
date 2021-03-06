///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import { Component, OnChanges } from '@angular/core';
import { KbChartsBaseComponent } from './../charts.base.component';

@Component({
    selector: 'kb-area-charts',
    templateUrl: './area-charts.component.html'
})
export class KbAreaChartsComponent extends KbChartsBaseComponent implements OnChanges {
    public categories: Array<any>;

    public ngOnChanges(): void {
        const categoryField = this.config.categoryAxis.field;
        if (categoryField && this.data) {
            this.categories = this.data.map(item => item[categoryField]);
        }
    }
}
