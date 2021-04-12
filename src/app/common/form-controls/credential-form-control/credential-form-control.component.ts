import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ControlContainer, ControlValueAccessor, FormControl, FormControlDirective, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'credential-form-control',
  templateUrl: './credential-form-control.component.html',
  styleUrls: ['.././reactive-form-control.component.css'],
  providers: [
    {provide: NG_VALUE_ACCESSOR,
    useExisting: CredentialFormControlComponent,
    multi: true}]

})
export class CredentialFormControlComponent implements ControlValueAccessor {



    // @Input() control;
    //@Input() group;
    //@Input() dbObservable;
    
    @Input() label;
    @Input() placeHolder;
    @Input() required;
    @Input() errorMsg;
    @Input() type;
    @ViewChild(FormControlDirective, {static: true}) formControlDirective: FormControlDirective;
    @Input() formControl: FormControl;
    @Input() formControlName: string;  /* get hold of FormControl instance no matter formControl or    formControlName is given. If formControlName is given, then this.controlContainer.control is the parent FormGroup (or FormArray) instance. */
    
    //this is a racket- you set it by deafult in create-profile.
    disable = false;

    constructor(private controlContainer: ControlContainer) { }

    get control() {
      return this.formControl || this.controlContainer.control.get(this.formControlName);
    }

    engage() {
        if (confirm("are you sure you want to change the value of " + this.label)) {
            // console.log("shit on a bisk")
            this.disable = true
        }
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
