import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarnetsAddComponent } from './carnets-add.component';

describe('CarnetsAddComponent', () => {
  let component: CarnetsAddComponent;
  let fixture: ComponentFixture<CarnetsAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarnetsAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarnetsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
