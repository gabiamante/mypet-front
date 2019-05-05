import { TestBed } from '@angular/core/testing';

import { PetVetService } from './pet-vet.service';

describe('PetVetService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PetVetService = TestBed.get(PetVetService);
    expect(service).toBeTruthy();
  });
});
