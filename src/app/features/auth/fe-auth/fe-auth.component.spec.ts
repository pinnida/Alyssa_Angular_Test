import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeAuthComponent } from './fe-auth.component';

describe('FeAuthComponent', () => {
  let component: FeAuthComponent;
  let fixture: ComponentFixture<FeAuthComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FeAuthComponent]
    });
    fixture = TestBed.createComponent(FeAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
