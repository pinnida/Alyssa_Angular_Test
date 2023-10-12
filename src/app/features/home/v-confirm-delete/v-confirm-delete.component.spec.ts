import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VConfirmDeleteComponent } from './v-confirm-delete.component';

describe('VConfirmDeleteComponent', () => {
  let component: VConfirmDeleteComponent;
  let fixture: ComponentFixture<VConfirmDeleteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VConfirmDeleteComponent]
    });
    fixture = TestBed.createComponent(VConfirmDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
