import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ControlContainer, FormControlDirective, ControlValueAccessor, NG_VALUE_ACCESSOR, FormArray, FormControl } from '@angular/forms';

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

  onCheckboxChange(e, control) {
    // const checkArray: FormArray = this.form.get(control) as FormArray;
    
    // this gonna be funky cause 'control' HAS TO BE an actual abstractControl object NOT a string.
    const checkArray: FormArray = control as FormArray; 

    if (e.target.checked) {
      checkArray.push(new FormControl(e.target.value));
    } else {
      let i: number = 0;
      checkArray.controls.forEach((item: FormControl) => {
        if (item.value == e.target.value) {
          checkArray.removeAt(i);
          return;
        }
        i++;
      });
    }
  }
}
