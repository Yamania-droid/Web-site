import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDialogDocumentUpdateComponent } from './admin-dialog-document-update.component';

describe('AdminDialogDocumentUpdateComponent', () => {
  let component: AdminDialogDocumentUpdateComponent;
  let fixture: ComponentFixture<AdminDialogDocumentUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminDialogDocumentUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDialogDocumentUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
