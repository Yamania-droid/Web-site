import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModerDataWindowComponent } from './moder-data-window.component';

describe('ModerDataWindowComponent', () => {
  let component: ModerDataWindowComponent;
  let fixture: ComponentFixture<ModerDataWindowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModerDataWindowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModerDataWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
