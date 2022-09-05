import { TestBed } from '@angular/core/testing';

import { IconMapperService } from './icon-mapper.service';

describe('IconMapperService', () => {
  let service: IconMapperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IconMapperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
