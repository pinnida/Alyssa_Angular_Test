import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VTaskWorkComponent } from './v-task-work.component';

describe('VTaskWorkComponent', () => {
  let component: VTaskWorkComponent;
  let fixture: ComponentFixture<VTaskWorkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VTaskWorkComponent]
    });
    fixture = TestBed.createComponent(VTaskWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
