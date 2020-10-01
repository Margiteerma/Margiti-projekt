import { TestBed } from '@angular/core/testing';

import { PoedService } from './poed.service';

describe('PoedService', () => {
  let service: PoedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PoedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
