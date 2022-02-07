import { TestBed } from '@angular/core/testing';

import { CarnetsService } from './carnets.service';

describe('CarnetsService', () => {
  let service: CarnetsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarnetsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
