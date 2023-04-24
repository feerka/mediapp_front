import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MedicoComponent } from './pages/medico/medico.component';
import { PacienteComponent } from './pages/paciente/paciente.component';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { PacienteEdicionComponent } from './pages/paciente/paciente-edicion/paciente-edicion.component';

@NgModule({
  declarations: [
    AppComponent,
    MedicoComponent,
    PacienteComponent,
    PacienteEdicionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
