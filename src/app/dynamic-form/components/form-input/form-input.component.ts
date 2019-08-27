import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IDynamicControl, IDynamicControlConfig } from '../../containers/dynamic-form/dynamic-form.interface';


@Component({
  selector: 'app-form-input',
  styleUrls: ['form-input.component.scss'],
  template: `
      <div
              class="dynamic-field form-input"
              [formGroup]="group">
          <label>{{ config.label }}</label>
          <input
                  type="text"
                  [placeholder]="config.placeholder"
                  [formControlName]="config.name"/>
      </div>
  `,
})
export class FormInputComponent implements IDynamicControl {
  // not using @Input decorator because component used in traditional way
  config: IDynamicControlConfig;
  group: FormGroup;
}
