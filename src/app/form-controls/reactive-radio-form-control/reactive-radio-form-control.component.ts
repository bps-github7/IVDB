import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ControlContainer, ControlValueAccessor, FormControl, FormControlDirective } from '@angular/forms';

@Component({
  selector: 'reactive-radio-form-control',
  template: `
  <div class="form-control form-radio">
    <input type="radio" [formControl]="formControl" [value]="formControl"/>&nbsp;{{ label }}
  </div>
  `,
  styleUrls: ['./../reactive-form-control.component.css']
})
export class ReactiveRadioFormControlComponent implements ControlValueAccessor{

    @Input() label;
    @Input() placeHolder;
    @Input() required;
    @Input() errorMsg;
    @Input() options;

    @ViewChild(FormControlDirective, {static: true}) formControlDirective: FormControlDirective;
    @Input() formControl: FormControl;
    @Input() formControlName: string;  /* get hold of FormControl instance no matter formControl or    formControlName is given. If formControlName is given, then this.controlContainer.control is the parent FormGroup (or FormArray) instance. */

    constructor(private controlContainer: ControlContainer) { }

    get control() {
      return this.formControl || this.controlContainer.control.get(this.formControlName);
    }
  
    clearInput() {
      this.control.setValue('');
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
