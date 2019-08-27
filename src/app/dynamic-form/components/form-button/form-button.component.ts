import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IDynamicControl, IDynamicControlConfig } from '../../containers/dynamic-form/dynamic-form.interface';


@Component({
  selector: 'app-form-button',
  styleUrls: ['form-button.component.scss'],
  template: `
      <div
              class="dynamic-field form-button"
              [formGroup]="group">
          <button type="submit">
              {{ config.label }}
          </button>
      </div>
  `,
})
export class FormButtonComponent implements IDynamicControl {
  config: IDynamicControlConfig;
  group: FormGroup;
}
