import { TestBed } from '@angular/core/testing';

import { EscolhaPerfilService } from './escolha-perfil.service';

describe('EscolhaPerfilService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EscolhaPerfilService = TestBed.get(EscolhaPerfilService);
    expect(service).toBeTruthy();
  });
});
