import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MedicoComponent } from './pages/medico/medico.component';
import { PacienteComponent } from './pages/paciente/paciente.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
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
import { BuscarDialogoComponent } from './pages/buscar/buscar-dialogo/buscar-dialogo.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { WizardComponent } from './pages/wizard/wizard.component';
import { ReporteComponent } from './pages/reporte/reporte.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { ServerErrorsInterceptor } from './shared/server-errors.interceptor';

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
    MedicoDialogoComponent,
    BuscarDialogoComponent,
    BuscarComponent,
    WizardComponent,
    ReporteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    FlexLayoutModule,
    PdfViewerModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ServerErrorsInterceptor,
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
