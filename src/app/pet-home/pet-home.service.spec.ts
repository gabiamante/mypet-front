import { TestBed } from '@angular/core/testing';

import { PetHomeService } from './pet-home.service';

describe('PetHomeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PetHomeService = TestBed.get(PetHomeService);
    expect(service).toBeTruthy();
  });
});
