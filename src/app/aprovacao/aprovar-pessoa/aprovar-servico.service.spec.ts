import { TestBed } from '@angular/core/testing';

import { AprovarServicoService } from './aprovar-servico.service';

describe('AprovarServicoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AprovarServicoService = TestBed.get(AprovarServicoService);
    expect(service).toBeTruthy();
  });
});
