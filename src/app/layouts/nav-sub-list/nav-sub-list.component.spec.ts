import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavSubListComponent } from './nav-sub-list.component';

describe('NavSubListComponent', () => {
  let component: NavSubListComponent;
  let fixture: ComponentFixture<NavSubListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavSubListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavSubListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
