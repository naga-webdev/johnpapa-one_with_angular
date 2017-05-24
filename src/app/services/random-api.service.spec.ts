import { TestBed, inject } from '@angular/core/testing';

import { RandomApiService } from './random-api.service';

describe('RandomApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RandomApiService]
    });
  });

  it('should ...', inject([RandomApiService], (service: RandomApiService) => {
    expect(service).toBeTruthy();
  }));
});
