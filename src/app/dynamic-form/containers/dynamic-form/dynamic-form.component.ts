import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IDynamicControlConfig } from './dynamic-form.interface';


@Component({
  selector: 'app-dynamic-form',
  styleUrls: ['./dynamic-form.component.scss'],
  template: `
      <form
              class="dynamic-form"
              [formGroup]="form"
              (submit)="submitted.emit(form.value)">
          <ng-container
                  *ngFor="let field of config;"
                  appDynamicField
                  [config]="field"
                  [group]="form">
          </ng-container>
      </form>
  `,
})
export class DynamicFormComponent implements OnInit {
  @Input() config: IDynamicControlConfig[] = [];
  @Output() submitted: EventEmitter<undefined> = new EventEmitter();
  form: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    console.log(this.config)
    this.form = this.createGroup();
  }

  private createGroup(): FormGroup {
    const group = this.fb.group({});
    this.config.forEach(control => group.addControl(control.name, this.fb.control(control.state)));
    return group;
  }
}
