import { Injectable } from '@angular/core';
import { Especialidad } from '../_model/especialidad';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { GenericService } from './generic.service';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class EspecialidadService extends GenericService<Especialidad>{

  private especialidadCambio = new Subject<Especialidad[]>();
  private mensajeCambio = new Subject<string>();

  constructor(protected http: HttpClient) {
    super(
      http,
      `${environment.HOST}/especialidades`);
  }

  //get Subjects
  getEspecialidadCambio() {
    return this.especialidadCambio.asObservable();
  }

  getMensajeCambio() {
    return this.mensajeCambio.asObservable();
  }

  //set Subjects
  setEspecialidadCambio(especialdades: Especialidad[]) {
    this.especialidadCambio.next(especialdades);
  }

  setMensajeCambio(mensaje: string) {
    this.mensajeCambio.next(mensaje);
  }
}
