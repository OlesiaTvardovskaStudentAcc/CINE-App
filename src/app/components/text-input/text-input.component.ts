import { Component, Input, OnInit, Optional, Self } from '@angular/core';
import { NgControl } from '@angular/forms';
import { BaseInputComponent } from '../base-input.component';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss']
})
export class TextInputComponent extends BaseInputComponent implements OnInit {

  @Input()
  title: string = '';

  @Input()
  placeholder: string = '';

  @Input()
  maxlength: number = Number.MAX_SAFE_INTEGER;

  @Input()
  required: boolean = false;

  @Input()
  pattern: string = '';

  @Input()
  disabled: boolean = true;

  @Input()
  type: 'text'|'password' = 'text';

  constructor(@Self() @Optional() public control: NgControl) {
    super()
    if (control) {
      control.valueAccessor = this;
    }
  }

  ngOnInit(): void {
  }
}
