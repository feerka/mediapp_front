import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MedicoComponent } from './pages/medico/medico.component';
import { PacienteComponent } from './pages/paciente/paciente.component';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PacienteEdicionComponent } from './pages/paciente/paciente-edicion/paciente-edicion.component';
import { ExamenComponent } from './pages/examen/examen.component';
import { EspecialidadComponent } from './pages/especialidad/especialidad.component';
import { ConsultaComponent } from './pages/consulta/consulta.component';
import { ConsultaEspecialidadComponent } from './pages/consulta-especialidad/consulta-especialidad.component';
import { EspecialidadEdicionComponent } from './pages/especialidad/especialidad-edicion/especialidad-edicion.component';
import { ExamenEdicionComponent } from './pages/examen/examen-edicion/examen-edicion.component';
import { MedicoDialogoComponent } from './pages/medico/medico-dialogo/medico-dialogo.component';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { MatPaginatorImpl } from './material/mat-paginator';

@NgModule({
  declarations: [
    AppComponent,
    MedicoComponent,
    PacienteComponent,
    PacienteEdicionComponent,
    ExamenComponent,
    EspecialidadComponent,
    ConsultaComponent,
    ConsultaEspecialidadComponent,
    EspecialidadEdicionComponent,
    ExamenEdicionComponent,
    MedicoDialogoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    {provide: MatPaginatorIntl, useClass: MatPaginatorImpl}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
