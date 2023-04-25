import { Injectable } from '@angular/core';
import { GenericService } from './generic.service';
import { Medico } from '../_model/medico';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class MedicoService extends GenericService<Medico>{
  private medicoCambio = new Subject<Medico[]>();
  private mensajeCambio = new Subject<string>();

  constructor(protected http: HttpClient) {
    super(
      http,
      `${environment.HOST}/medicos`);
  }

  /* get, set */
  setMensajeCambio(mensaje: string) {
    this.mensajeCambio.next(mensaje);
  }

  getMensajeCambio() {
    return this.mensajeCambio.asObservable();
  }

  setMedicoCambio(lista: Medico[]) {
    this.medicoCambio.next(lista);
  }

  getMedicoCambio() {
    return this.medicoCambio.asObservable();
  }
}
