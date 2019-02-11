import { Component, NO_ERRORS_SCHEMA, ViewChild } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl, FormGroup } from '@angular/forms';
import { ConfirmInputDirective } from './confirm-input';

@Component({
  selector: 'rsi-confirm-wrapper',
  template: `
    <form [formGroup]="testForm">
      <input class="input1" type="text" formControlName="test">
      <input #appConfirmInput class="input2" type="text" formControlName="testConfirm" appConfirm [with]="test">
    </form>`
})
class AppConfirmValidatorWrapperComponent {
  @ViewChild('appConfirmInput') public appConfirmInput: ConfirmInputDirective;

  public testForm = new FormGroup({
    test: new FormControl('testing'),
    testConfirm: new FormControl('')
  });
}

describe('ConfirmInputDirective', () => {
  let component: ConfirmInputDirective;
  let fixtureComponent: AppConfirmValidatorWrapperComponent;
  let fixture: ComponentFixture<AppConfirmValidatorWrapperComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [
          ConfirmInputDirective,
          AppConfirmValidatorWrapperComponent,
        ],
        schemas: [NO_ERRORS_SCHEMA]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(AppConfirmValidatorWrapperComponent);
    fixtureComponent = fixture.componentInstance;
    component = fixture.componentInstance.appConfirmInput;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('manual validation', () => {
    it('should ', () => {
      const directive = new ConfirmInputDirective();
      directive.with = new FormControl('password123');
      const confirm = new FormControl('passwordABC');
      expect(directive.validate(confirm)).toEqual({ confirm: { value: 'passwordABC' } });
    });
  });
});
