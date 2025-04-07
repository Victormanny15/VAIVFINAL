import { TestBed } from '@angular/core/testing';
import { BDService } from './bd.service';

describe('BDService', () => {
  let service: BDService;

  beforeEach(() => {
    // Configura el entorno de pruebas antes de cada prueba
    TestBed.configureTestingModule({});
    service = TestBed.inject(BDService); // Inyecta el servicio BDService para probarlo
  });

  it('should be created', () => {
    // Prueba que el servicio se ha creado correctamente
    expect(service).toBeTruthy();
  });
});
