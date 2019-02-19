import { Component, NO_ERRORS_SCHEMA, ViewChild } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl, FormGroup } from '@angular/forms';

import { ConfirmInputDirective } from './confirm-input.directive';

@Component({
  selector: 'rsi-confirm-wrapper',
  template: `
    <form [formGroup]="form">
      <input type="text" formControlName="test" />
      <input
        #confirmInput
        type="text"
        formControlName="testConfirm"
        rsiConfirm
        [with]="test"
      />
    </form>
  `
})
class AppConfirmValidatorWrapperComponent {
  @ViewChild('confirmInput') public confirmInput: ConfirmInputDirective;

  public form = new FormGroup({
    test: new FormControl('testing'),
    testConfirm: new FormControl('')
  });
}

describe('ConfirmInputDirective', () => {
  let component: AppConfirmValidatorWrapperComponent;
  let fixture: ComponentFixture<AppConfirmValidatorWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ConfirmInputDirective,
        AppConfirmValidatorWrapperComponent
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppConfirmValidatorWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component.confirmInput).toBeTruthy();
  });

  describe('manual validation', () => {
    it('should ', () => {
      const directive = new ConfirmInputDirective();
      directive.with = new FormControl('password123');
      const confirm = new FormControl('passwordABC');
      expect(directive.validate(confirm)).toEqual({
        confirm: { value: 'passwordABC' }
      });
    });
  });

  describe('confirm validator', () => {
    beforeEach(() => {
      component.form.controls.testConfirm.setValidators(
        ConfirmInputDirective.confirmInput(component.form.controls
          .test as FormControl)
      );
    });

    it('should handle invalid case', () => {
      component.form.controls.testConfirm.setValue('MyPasswordXXX');
      component.form.controls.test.setValue('MyPassword123');
      component.form.controls.testConfirm.updateValueAndValidity();

      const errors = component.form.controls.testConfirm.errors;
      expect(errors).toEqual({ confirm: { value: 'MyPasswordXXX' } });
    });

    it('should handle valid case', () => {
      component.form.controls.testConfirm.setValue('MyPassword123');
      component.form.controls.test.setValue('MyPassword123');
      component.form.controls.testConfirm.updateValueAndValidity();

      const errors = component.form.controls.testConfirm.errors;
      expect(errors).toEqual(null);
    });
  });
});
