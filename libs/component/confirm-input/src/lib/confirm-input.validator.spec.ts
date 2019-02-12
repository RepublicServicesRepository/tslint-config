import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ConfirmInputValidator } from './confirm-input.validator';

@Component({
  template: `
    <form [formGroup]="form">
      <input class="input1" type="text" formControlName="test">
      <input class="input2" type="text" formControlName="testConfirm">
    </form>
  `
})
class TestHostComponent {
  public form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      test: new FormControl('testing'),
      testConfirm: new FormControl('')
    });
  }
}

describe('ConfirmInputValidator', () => {
  let hostFixture: ComponentFixture<TestHostComponent>;
  let component: TestHostComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [TestHostComponent],
      providers: [FormBuilder]
    });
    hostFixture = TestBed.createComponent(TestHostComponent);
    component = hostFixture.componentInstance;
  }
  );

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('confirm validator', () => {
    beforeEach(() => {
      component.form.controls.testConfirm.setValidators(
        ConfirmInputValidator.confirmInput(component.form.controls.test as FormControl)
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
