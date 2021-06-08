import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ControlContainer, FormControlDirective, ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'reactiveFormControl',
  templateUrl: './reactive-form-control.component.html',
  styleUrls: ['./reactive-form-control.component.css'],
  providers: [
    {provide: NG_VALUE_ACCESSOR,
    useExisting: ReactiveFormControlComponent,
    multi: true}]
})

export class ReactiveFormControlComponent implements ControlValueAccessor {
  
  @ViewChild(FormControlDirective, {static: true}) formControlDirective: FormControlDirective;
  @Input() dialog : boolean = false;
  @Input() buildInfo = {
    type : "text",
    label : "",
    formControlName : "",
    formGroupName : "should be inherited from parent",
    options : [],
    config : {
      placeholder : "",
      errorMsg : "",
      required : false
    }
  };

  constructor(private controlContainer: ControlContainer) { }

  get control() {
    // cant use formControl only formcontrol name
    return this.controlContainer.control.get(this.buildInfo.formControlName);
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

  
  add(item : HTMLInputElement) {
    this.control.value.push(item.value);
    item.value = '';
}
}
