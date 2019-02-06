///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import { Component, OnInit, ViewChild, ElementRef, Input, OnDestroy } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { RouterExtensions } from 'nativescript-angular/router';
import { Subscription } from 'rxjs';

import { MobileDataService } from '../../../core/data/mobile-data.service';
import { CollectionState } from '../../../core/data/state/collection-state.interface';

@Component({
    selector: 'ks-form',
    templateUrl: './form.component.html'
})
export class KSFormComponent implements OnInit, OnDestroy {
    @ViewChild('form')
    form: ElementRef;

    @Input()
    dataService: MobileDataService<any, CollectionState>;
    @Input()
    formGroup: FormGroup;
    @Input()
    columns = '';
    @Input()
    rows = '';

    dataChanges: Subscription;
    item: any;

    constructor(private routerExtensions: RouterExtensions) {}

    ngOnInit() {
        if (this.isRootForm) {
            this.createFormGroup(this.form.nativeElement, this.formGroup);
        }

        this.dataChanges = this.dataService.dataChanges.subscribe(item => {
            if (item) {
                this.item = item;
                this.formGroup.patchValue(item);
            }
        });
    }

    ngOnDestroy() {
        this.dataChanges.unsubscribe();
    }

    createFormGroup(formElement, formGroup = new FormGroup({})): FormGroup {
        formElement.eachChild(x => {
            if (x.typeName === 'ProxyViewContainer' && x.formGroupName) {
                formGroup.addControl(x.formGroupName, this.createFormGroup(x.getChildAt(0)));
            }

            if (x.formControlName) {
                const formControlValidators = this.getValidators(x.formControlValidators ? x.formControlValidators.split(' ') : []);
                formGroup.addControl(x.formControlName, new FormControl('', formControlValidators));
            }
        });

        return formGroup;
    }

    get isValid() {
        return this.formGroup.valid;
    }

    get isRootForm(): boolean {
        return !!this.formGroup;
    }

    onSubmit() {
        if (!this.isValid) {
            return;
        }

        this.dataService.save({ ...this.item, ...this.formGroup.value }).then(() => this.routerExtensions.back());
    }

    onCancel() {
        this.routerExtensions.back();
    }

    private getValidators(validators: string[]) {
        const formValidators = [];

        validators.forEach(v => {
            const validator = this.getValidator(v);
            if (validator) {
                formValidators.push(validator);
            }
        });

        return formValidators;
    }

    private getValidator(validatorName: string) {
        switch (validatorName) {
            case 'required':
                return Validators.required;
        }
    }
}
