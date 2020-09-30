import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'generic-input',
  templateUrl: './generic-input.component.html',
  styleUrls: ['./generic-input.component.css'],
  providers: [{
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: GenericInputComponent
    }]
})
export class GenericInputComponent implements ControlValueAccessor {

    @ViewChild('input') input: ElementRef;
    disabled;
  
    @Input() type = 'text';
    @Input() isRequired: boolean = false;
    @Input() pattern: string = null;
    @Input() label: string = null;
    @Input() placeholder: string;
    @Input() errorMsg: string;
  
    writeValue(obj: any): void {
      this.input.nativeElement.value = obj;
    }
    registerOnChange(fn: any): void {
      this.onChange = fn;
    }
    registerOnTouched(fn: any): void {
      this.onTouched = fn;
    }
    setDisabledState?(isDisabled: boolean): void {
      this.disabled = isDisabled;
    }
    onChange(event) { }
  
    onTouched() { }
  
  }