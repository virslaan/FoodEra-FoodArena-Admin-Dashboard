import { TestBed } from '@angular/core/testing';

import { AllcallService } from './allcall.service';

describe('AllcallService', () => {
  let service: AllcallService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllcallService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
