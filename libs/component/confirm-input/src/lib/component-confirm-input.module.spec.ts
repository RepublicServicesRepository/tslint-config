import { async, TestBed } from '@angular/core/testing';
import { ComponentConfirmInputModule } from './component-confirm-input.module';

describe('ComponentConfirmInputModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ComponentConfirmInputModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ComponentConfirmInputModule).toBeDefined();
  });
});
