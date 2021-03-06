import { ComponentFactoryResolver, ComponentRef, Directive, Input, OnInit, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IDynamicControl, IDynamicControlConfig } from '../containers/dynamic-form/dynamic-form.interface';
import { FormButtonComponent } from './form-button/form-button.component';
import { FormInputComponent } from './form-input/form-input.component';
import { FormSelectComponent } from './form-select/form-select.component';


const components = {
  button: FormButtonComponent,
  input: FormInputComponent,
  select: FormSelectComponent
};


@Directive({
  selector: '[appDynamicField]'
})
export class DynamicFieldDirective implements OnInit, IDynamicControl {
  @Input() config: IDynamicControlConfig;
  @Input() group: FormGroup;

  component: ComponentRef<IDynamicControl>;

  constructor(
    private resolver: ComponentFactoryResolver,
    private container: ViewContainerRef
  ) {
  }

  ngOnInit(): void {
    const component = components[this.config.type];
    const factory = this.resolver.resolveComponentFactory<IDynamicControl>(component);
    this.component = this.container.createComponent(factory);

    this.component.instance.config = this.config;
    this.component.instance.group = this.group;
  }
}
