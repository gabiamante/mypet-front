import { TestBed } from '@angular/core/testing';

import { AcaoPerfilService } from './acao-perfil.service';

describe('AcaoPerfilService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AcaoPerfilService = TestBed.get(AcaoPerfilService);
    expect(service).toBeTruthy();
  });
});
