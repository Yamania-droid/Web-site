import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BindProductComponent } from './bind-product.component';

describe('BindProductComponent', () => {
  let component: BindProductComponent;
  let fixture: ComponentFixture<BindProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BindProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BindProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
