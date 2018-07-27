import { TestBed, inject } from '@angular/core/testing';

import { RevistaApiService } from './revista-api.service';

describe('RevistaApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RevistaApiService]
    });
  });

  it('should be created', inject([RevistaApiService], (service: RevistaApiService) => {
    expect(service).toBeTruthy();
  }));
});
