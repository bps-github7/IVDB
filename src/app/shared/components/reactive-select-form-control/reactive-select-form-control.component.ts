import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ControlContainer, FormControl, FormControlDirective, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
    selector: 'reactive-select-form-control',
    template: `
    <label [for]="formControl">{{ label }}:
        <select multiple class="form-control" [id]="formControl" [formControl]="control">
            <option [value]=" "></option>            
            <option *ngFor="let option of options" [ngValue]="option.title">{{ option.title }}</option>
        </select>
    </label><br>
    `,
    providers: [
        {provide: NG_VALUE_ACCESSOR,
        useExisting: ReactiveSelectFormControlComponent,
        multi: true}]
    })
export class ReactiveSelectFormControlComponent implements OnInit {

    //pretty much just copy pasted this from reactive-default-controller

    @ViewChild(FormControlDirective, {static: true}) formControlDirective: FormControlDirective;
    @Input() formControl: FormControl;
    @Input() formControlName: string;  
    @Input() options;
    @Input() label;
 
    /* get hold of FormControl instance no matter formControl or    formControlName is given. If formControlName is given, then this.controlContainer.control is the parent FormGroup (or FormArray) instance. */

    choice;

  constructor(private controlContainer: ControlContainer) { }

  ngOnInit(): void {
  }

  get control() {
    return this.formControl || this.controlContainer.control.get(this.formControlName);
  }

  registerOnTouched(fn: any): void {
    this.formControlDirective.valueAccessor.registerOnTouched(fn);
  }

  registerOnChange(fn: any): void {
    this.formControlDirective.valueAccessor.registerOnChange(fn);
  }

  writeValue(obj: any): void {
    this.formControlDirective.valueAccessor.writeValue(obj);
  }

  setDisabledState(isDisabled: boolean): void {
    this.formControlDirective.valueAccessor.setDisabledState(isDisabled);
  }
}