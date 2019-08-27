import { FormGroup } from '@angular/forms';


export interface IDynamicControlConfig {
  name: string;
  type: string;
  label: string;
  placeholder?: string;
  state?: any;
  options?: any[];
}

export interface IDynamicControl {
  config: IDynamicControlConfig;
  group: FormGroup;
}
