import { TestBed } from '@angular/core/testing';

import { PetWalkerService } from './pet-walker.service';

describe('PetWalkerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PetWalkerService = TestBed.get(PetWalkerService);
    expect(service).toBeTruthy();
  });
});
