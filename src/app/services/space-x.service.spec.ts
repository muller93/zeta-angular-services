import { TestBed } from '@angular/core/testing';

import { SpaceXService } from './space-x.service';

describe('SpaceXService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SpaceXService = TestBed.get(SpaceXService);
    expect(service).toBeTruthy();
  });
});
