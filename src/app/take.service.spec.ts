import { TestBed, inject } from '@angular/core/testing';

import { TakeService } from './take.service';

describe('TakeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TakeService]
    });
  });

  it('should ...', inject([TakeService], (service: TakeService) => {
    expect(service).toBeTruthy();
  }));
});
