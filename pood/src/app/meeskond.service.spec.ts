import { TestBed } from '@angular/core/testing';

import { MeeskondService } from './meeskond.service';

describe('MeeskondService', () => {
  let service: MeeskondService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MeeskondService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
