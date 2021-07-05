import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatChip, MatChipList } from '@angular/material/chips';
import { map } from 'rxjs/operators';

@Component({
  selector: 'multi-select-chips',
  template: `
  <mat-chip-list multiple selectable>
    <mat-chip #c="matChip" *ngFor="let option of options" [value]="option" (click)="toggleSelection(c)">
      <mat-icon *ngIf="c.selected">check</mat-icon>
			<span class="cdk-visually-hidden">check</span>
      {{option}}
    </mat-chip>
  </mat-chip-list>
  `,
  styles: [ 'mat-icon {height: 20px; width: 20px; font-size: 20px; margin-right: 5px; }'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: MultiSelectChipsComponent,
      multi: true,
    },
  ]
})
export class MultiSelectChipsComponent implements OnInit, ControlValueAccessor {

  @Input() options: string [] = [];
  @ViewChild(MatChipList)
  chipList!: MatChipList;
  value: string[] = [];
  onChange!: (value: string[]) => void;
  disabled = false;
 
  constructor() { }

  ngOnInit(): void { }

  ngAfterViewInit() {
    this.chipList.chipSelectionChanges
      .pipe(
        // untilDestroyed(this),
        map((event) => event.source))
      .subscribe((chip) => {
        if (chip.selected) {
          this.value = [...this.value, chip.value];
        } else {
          this.value = this.value.filter((o) => o !== chip.value);
        }

        this.propagateChange(this.value);
      });
  }

  writeValue(value: string[]): void {
    // When form value set when chips list initialized
    if (this.chipList && value) {
      this.selectChips(value);
    } else if (value) {
      // When chips not initialized
      this.value = value;
    }
  }

  selectChips(value: string[]) {
    this.chipList.chips.forEach((chip) => chip.deselect());

    const chipsToSelect = this.chipList.chips.filter((c) =>
      value.includes(c.value)
    );

    chipsToSelect.forEach((chip) => chip.select());
  }

  registerOnChange(fn: any): void {
      this.onChange = fn;
  }

  propagateChange(value: string[]) {
      if (this.onChange) {
        this.onChange(value);
      }
  }

  registerOnTouched(fn: any): void {

  }


  setDisabledState?(isDisabled: boolean): void {
      this.disabled = isDisabled;
  }
  
  toggleSelection(chip: MatChip) {
      if (!this.disabled) chip.toggleSelected();
  }
}
