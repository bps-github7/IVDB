import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ControlContainer, ControlValueAccessor, FormControl, FormControlDirective, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'reactive-default-form-control',
  template: `
    <label [for]="formControl">{{ label }}
        <input type="text" [formControl]="control" class="form-control">
        <button (click)="clearInput()">clear</button><br/>
    </label>  
    `,
 styleUrls: ['./reactive-default-form-control.component.css'],
  providers: [
    {provide: NG_VALUE_ACCESSOR,
    useExisting: ReactiveDefaultFormControlComponent,
    multi: true}]
})
export class ReactiveDefaultFormControlComponent implements ControlValueAccessor {


    // @Input() control;
    //@Input() group;
    //@Input() dbObservable;
    
    @Input() label;
    @Input() placeHolder;
    @Input() required;
    @Input() errorMsg;

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
