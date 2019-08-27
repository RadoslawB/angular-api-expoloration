import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IDynamicControl, IDynamicControlConfig } from '../../containers/dynamic-form/dynamic-form.interface';


@Component({
  selector: 'app-form-select',
  styleUrls: ['form-select.component.scss'],
  template: `
      <div
              class="dynamic-field form-select"
              [formGroup]="group">
          <label>{{ config?.label }}</label>
          <select [formControlName]="config?.name">
              <option value="">{{ config?.placeholder }}</option>
              <option *ngFor="let option of config?.options">
                  {{ option }}
              </option>
          </select>
      </div>
  `,
})
export class FormSelectComponent implements IDynamicControl {
  // not using @Input decorator because component used in traditional way
  config: IDynamicControlConfig;
  group: FormGroup;
}
