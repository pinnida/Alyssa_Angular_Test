import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileImportPageComponent } from './file-import-page.component';

describe('FileImportPageComponent', () => {
  let component: FileImportPageComponent;
  let fixture: ComponentFixture<FileImportPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FileImportPageComponent]
    });
    fixture = TestBed.createComponent(FileImportPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
