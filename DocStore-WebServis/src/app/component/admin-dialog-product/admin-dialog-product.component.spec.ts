import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDialogProductComponent } from './admin-dialog-product.component';

describe('AdminDialogProductComponent', () => {
  let component: AdminDialogProductComponent;
  let fixture: ComponentFixture<AdminDialogProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminDialogProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDialogProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
