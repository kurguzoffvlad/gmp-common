import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GmpCommonComponent } from './gmp-common.component';

describe('GmpCommonComponent', () => {
  let component: GmpCommonComponent;
  let fixture: ComponentFixture<GmpCommonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GmpCommonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GmpCommonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
