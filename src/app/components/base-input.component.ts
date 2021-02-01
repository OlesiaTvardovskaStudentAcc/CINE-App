import { OnInit, ViewChild } from '@angular/core';
import { AbstractControl, ControlValueAccessor, NgModel, ValidationErrors, Validator } from '@angular/forms';

export abstract class BaseInputComponent<T = any> implements ControlValueAccessor {
  onChange: (value: any) => void = () => {};

  onTouched: () => void = () => {};

  value: T | undefined;

  abstract disabled: boolean;

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  writeValue(obj: T): void {
    this.value = obj;
  }

  handleValueChange(value: T) {
    this.value = value;
    this.onChange(value);
  }

  public setDisabledState(isDisabled: boolean) {
    this.disabled = isDisabled;
  }
}
