import { TestBed } from '@angular/core/testing';

import { OfertaAnualService } from './oferta-anual.service';

describe('OfertaAnualService', () => {
  let service: OfertaAnualService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OfertaAnualService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
