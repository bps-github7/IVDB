import { Component, Input, OnChanges, OnInit, ViewChild } from '@angular/core';
import { ControlContainer, ControlValueAccessor, FormControl, FormControlDirective, NG_VALUE_ACCESSOR } from '@angular/forms';

    @Component({
        selector: 'tdf-multi-form-control',
        template: `
            <div class="form-group">
                <label [for]="control">{{ label }} : </label>
                <input
                    [(ngModel)]="value"
                    id="control"
                    type="text"
                    #control
                    name = "control" 
                    (keyup.enter)="add(control)">
                <ul class="list-group form-control">
                <li
                *ngFor="let content of contents"
                class="list-group-item">
                {{ content }}
                </li>
                </ul>
            </div>
            `,
        styleUrls: ['./tdf-multi-form-control.component.css'],
        providers:  [
            {provide: NG_VALUE_ACCESSOR,
            useExisting: TdfMultiFormControlComponent,
            multi: true}]

    })
export class TdfMultiFormControlComponent implements ControlValueAccessor{

    @ViewChild(FormControlDirective, {static: true}) formControlDirective: FormControlDirective;
    @Input() formControl: FormControl;
    @Input() formControlName: string;


    //'nice to have' inputs
    @Input() label;
    @Input() placeHolder;
    @Input() required;
    @Input() errorMsg;
    @Input() isDisabled : boolean = false; 


    contents = []


    constructor(private controlContainer: ControlContainer) { }

    get control() {
      return this.formControl || this.controlContainer.control.get(this.formControlName);
    }


  public registerOnChange(fn: any) { this.propagateChange = fn; }
public registerOnTouched(fn: any) { this.propagateTouch = fn; }

private propagateChange = (_: any) => { };
private propagateTouch = (_: any) => { };

// /**
//  * inner value
//  */
// private innerValue: any = null;

// /**
//  * on changes hook
//  */
// public ngOnChanges(): void {
//     if ( this.isDisabled ) {
//         this.propagateChange(this.innerValue);
//     }
// }

// /**
//  * input events
//  */
// public onBlur(): void {
//     this.propagateChange(this.innerValue);
//     this.propagateTouch(true);
// }

// /**
//  * value accessor setter and getter
//  */
// public get value(): any {
//     return this.innerValue;
// };

// public set value(value: any) {
//     if ( value !== 'undefined' ) {
//         this.innerValue = value;
//         this.propagateChange(value);
//         this.propagateTouch(true);
//     }
// }

// /**
//  * value accessor implementation
//  * @param value 
//  */
// public writeValue(value: any): void {
//     if (value !== this.innerValue) {
//         this.innerValue = value;
//     }
// }


// second attempt:

// registerOnTouched(fn: any): void {
//     this.formControlDirective.valueAccessor.registerOnTouched(fn);
//   }

//   registerOnChange(fn: any): void {
//     this.formControlDirective.valueAccessor.registerOnChange(fn);
//   }

//   writeValue(obj: any): void {
//     this.formControlDirective.valueAccessor.writeValue(obj);
//   }

//   setDisabledState(isDisabled: boolean): void {
//     this.formControlDirective.valueAccessor.setDisabledState(isDisabled);
//   }

    onChange: any = () => {}
    onTouch: any = () => {}
    val= "" // this is the updated value that the class accesses
    set value(val){  // this value is updated by programmatic changes 
        if( val !== undefined && this.val !== val) {
            this.val = val
            this.onChange(val)
            this.onTouch(val)}
    }

    // this method sets the value programmatically
    writeValue(value: any){ this.value = value}

    delete(i) {
        this.contents.splice(i, 1);
    }

    add(item : HTMLInputElement) {
        this.contents.push(item.value);
        item.value = '';
    }
}
