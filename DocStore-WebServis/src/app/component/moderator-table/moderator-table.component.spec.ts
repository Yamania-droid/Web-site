import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeratorTableComponent } from './moderator-table.component';

describe('ModeratorTableComponent', () => {
  let component: ModeratorTableComponent;
  let fixture: ComponentFixture<ModeratorTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModeratorTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModeratorTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
