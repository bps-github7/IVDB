import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CredentialFormControlComponent } from './credential-form-control/credential-form-control.component';
import { ReactiveDefaultFormControlComponent } from './reactive-default-form-control/reactive-default-form-control.component';
import { ReactiveSelectFormControlComponent } from './reactive-select-form-control/reactive-select-form-control.component';
import { ReactiveTextareaFormControlComponent } from 'src/app/common/form-controls/reactive-textarea-form-control/reactive-textarea-form-control.component';
import { TdfMultiFormControlComponent } from 'src/app/common/form-controls/tdf-multi-form-control/tdf-multi-form-control.component';



@NgModule({
  declarations: [
    CredentialFormControlComponent,
    ReactiveDefaultFormControlComponent,
    ReactiveSelectFormControlComponent,
    ReactiveTextareaFormControlComponent,
    TdfMultiFormControlComponent

  ],
  imports: [
    CommonModule
  ]
})
export class CustomFormControlsModule { }
