import { async, TestBed } from '@angular/core/testing';
import { ComponentHeaderModule } from './component-header.module';

describe('ComponentHeaderModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ComponentHeaderModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ComponentHeaderModule).toBeDefined();
  });
});
