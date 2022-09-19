import { TestBed } from '@angular/core/testing';

import { BackgroundMapperService } from './background-mapper.service';

describe('BackgroundMapperService', () => {
  let service: BackgroundMapperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BackgroundMapperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
