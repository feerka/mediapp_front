import { Injectable } from '@angular/core';
import { ConsultaListaExamenDTO } from '../_dto/consultaListaExamenDTO';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { FiltroConsultaDTO } from '../_dto/filtroConsultaDTO';
import { Consulta } from '../_model/consulta';
import { ConsultaResumenDTO } from '../_dto/consultaResumenDTO';

@Injectable({
  providedIn: 'root'
})
export class ConsultaService {

  private url: string = `${environment.HOST}/consultas`;

  constructor(
    private http: HttpClient
  ) { }

  registrarTransaccion(consultaDTO: ConsultaListaExamenDTO){
    return this.http.post(this.url, consultaDTO);
  }

  buscarOtros(filtroConsulta: FiltroConsultaDTO) {
    return this.http.post<Consulta[]>(`${this.url}/buscar/otros`, filtroConsulta);
  }

  buscarFecha(fecha: string) {
    return this.http.get<Consulta[]>(`${this.url}/buscar?fecha=${fecha}`);
  }

  listarExamenPorConsulta(idConsulta: number) {
    return this.http.get<ConsultaListaExamenDTO[]>(`${environment.HOST}/consultaexamenes/${idConsulta}`);
  }

  listarResumen() {
    return this.http.get<ConsultaResumenDTO[]>(`${this.url}/listarResumen`);
  }
}
