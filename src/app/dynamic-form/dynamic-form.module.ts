import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { DynamicFieldDirective } from './components/dynamic-field.directive';
import { FormButtonComponent } from './components/form-button/form-button.component';
import { FormInputComponent } from './components/form-input/form-input.component';
import { FormSelectComponent } from './components/form-select/form-select.component';
import { DynamicFormComponent } from './containers/dynamic-form/dynamic-form.component';


@NgModule({
  declarations: [
    DynamicFormComponent,
    FormInputComponent,
    FormSelectComponent,
    FormButtonComponent,
    DynamicFieldDirective
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    DynamicFormComponent
  ],
  entryComponents: [
    FormButtonComponent,
    FormInputComponent,
    FormSelectComponent,
  ]
})
export class DynamicFormModule {
}
