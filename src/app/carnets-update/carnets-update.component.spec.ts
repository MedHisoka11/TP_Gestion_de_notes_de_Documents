import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarnetsUpdateComponent } from './carnets-update.component';

describe('CarnetsUpdateComponent', () => {
  let component: CarnetsUpdateComponent;
  let fixture: ComponentFixture<CarnetsUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarnetsUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarnetsUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
