import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeFileImportComponent } from './fe-file-import.component';

describe('FeFileImportComponent', () => {
  let component: FeFileImportComponent;
  let fixture: ComponentFixture<FeFileImportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FeFileImportComponent]
    });
    fixture = TestBed.createComponent(FeFileImportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
