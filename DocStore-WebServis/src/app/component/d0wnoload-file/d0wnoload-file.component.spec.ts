import { ComponentFixture, TestBed } from '@angular/core/testing';

import { D0wnoloadFileComponent } from './d0wnoload-file.component';

describe('D0wnoloadFileComponent', () => {
  let component: D0wnoloadFileComponent;
  let fixture: ComponentFixture<D0wnoloadFileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ D0wnoloadFileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(D0wnoloadFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
