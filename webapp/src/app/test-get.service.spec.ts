import { TestBed, inject } from '@angular/core/testing';

import { TestGetService } from './test-get.service';

describe('TestGetService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TestGetService]
    });
  });

  it('should be created', inject([TestGetService], (service: TestGetService) => {
    expect(service).toBeTruthy();
  }));
});
