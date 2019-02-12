import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'mat-toolbar,mat-toolbar-row',
  template: '<ng-content></ng-content>'
})
class MockMaterialComponent { }

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed
      .configureTestingModule({
        declarations: [HeaderComponent, MockMaterialComponent]
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
