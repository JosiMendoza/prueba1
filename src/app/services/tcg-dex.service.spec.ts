import { TestBed } from '@angular/core/testing';

import { TcgDexService } from './tcg-dex.service';

describe('TcgDexService', () => {
  let service: TcgDexService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TcgDexService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
