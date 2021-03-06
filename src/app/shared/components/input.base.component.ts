///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import { Input, Output, Inject, EventEmitter, OnInit } from '@angular/core';
import { FormGroup, FormArray, AbstractControl, Validators, FormControl } from '@angular/forms';
import { ValidationService } from './../services/validation.service';

export abstract class KbInputBaseComponent implements OnInit {
    @Input()
    public config: any;
    @Input()
    public id: string;
    @Input()
    public viewFormArray: FormArray;

    @Output()
    public modelChange: any = new EventEmitter();

    public _errorMessage: string;
    public formGroup: FormGroup;
    private _model: any;

    public constructor(@Inject(ValidationService) protected validationSrv: ValidationService) {
        this.formGroup = new FormGroup({});
        this.viewFormArray = this.viewFormArray || new FormArray([]);
    }

    public ngOnInit(): void {
        const control: AbstractControl = this.formGroup.get(this.id);
        if (!control) {
            this.createControl();
        }
    }

    protected getValidators(): Array<any> {
        const validators: Array<any> = new Array<any>();
        if (this.config.validation && this.config.validation.required) {
            validators.push(Validators.required);
        }
        return validators;
    }

    public shouldValidateComponent(): boolean {
        return this.config.validation && this.config.validation.required;
    }

    protected getDefaultValidationMessages(): any {
        const messages: any = {};

        if (this.config.validation && this.config.validation.required) {
            messages['required'] = `${this.config.title ? this.config.title : 'This field '} is required.`;
        }

        return messages;
    }

    protected setErrorMessage(): void {
        if (!this.config.validationMessages) {
            this.config.validationMessages = this.getDefaultValidationMessages();
        }
        this._errorMessage = this.validationSrv.validateControl(this.formGroup.controls[this.id], this.config.validationMessages);
    }

    protected setModel<T>(value: T): void {
        let control: AbstractControl = this.formGroup.get(this.id);
        if (!control) {
            control = this.createControl();
        }
        control.setValue(value);
        if (control.dirty) {
            this.modelChange.emit(value);
        }

        this.setErrorMessage();
    }

    protected getModel<T>(): T {
        return this.formGroup.get(this.id).value;
    }

    protected createControl(): FormControl {
        const control: FormControl = new FormControl(this.config.value, this.getValidators());
        this.formGroup.addControl(this.id, control);
        // Add the form group on the next tick in order to not have the "Expression has changed after it was checked" error
        Promise.resolve(null).then(() => {
            this.viewFormArray.push(this.formGroup);
        });
        return control;
    }

    public updateModel<T>(value: T): void {
        if (this._model !== this.getModel<T>()) {
            this._model = value;
            this.setModel<T>(this._model);
        }
    }
}
