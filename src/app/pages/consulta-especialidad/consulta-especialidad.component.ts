import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable, map, startWith } from 'rxjs';
import { Medico } from 'src/app/_model/medico';
import { Paciente } from 'src/app/_model/paciente';
import { MedicoService } from 'src/app/_service/medico.service';
import { PacienteService } from 'src/app/_service/paciente.service';

@Component({
  selector: 'app-consulta-especialidad',
  templateUrl: './consulta-especialidad.component.html',
  styleUrls: ['./consulta-especialidad.component.css']
})
export class ConsultaEspecialidadComponent {

  form: FormGroup;
  pacientes: Paciente[];
  medicos: Medico[];

  //utiles para autocomplete
  myControlPaciente: FormControl = new FormControl();
  myControlMedico: FormControl = new FormControl();

  pacientesFiltrados$: Observable<Paciente[]>;
  medicosFiltrados$: Observable<Medico[]>;

  constructor(
    private pacienteService: PacienteService,
    private medicoService: MedicoService
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      'paciente': this.myControlPaciente,
      'especialidad': new FormControl(),
      'medico': this.myControlMedico,
      'fecha': new FormControl(new Date()),
      'diagnostico': new FormControl(''),
      'tratamiento': new FormControl('')
    });
    this.listarPacientes();
    this.listarMedicos();


    this.pacientesFiltrados$ = this.myControlPaciente.valueChanges.pipe(map(val => this.filtrarPacientes(val)));
    this.medicosFiltrados$ = this.myControlMedico.valueChanges.pipe(map(val => this.filtrarMedicos(val)));

  }

  filtrarPacientes(val: any) {
    if (val != null && val.idPaciente > 0) {
      return this.pacientes.filter(el =>
        el.nombre.toLowerCase().includes(val.nombres.toLowerCase()) || el.apellido.toLowerCase().includes(val.apellido.toLowerCase()) || el.dni.includes(val.dni)
      );
    }
    return this.pacientes.filter(el =>
      el.nombre.toLowerCase().includes(val?.toLowerCase()) || el.apellido.toLowerCase().includes(val?.toLowerCase()) || el.dni.includes(val)
    );
  }

  filtrarMedicos(val: any) {
    if (val != null && val.idMedico > 0) {
      return this.medicos.filter(option =>
        option.nombre.toLowerCase().includes(val.nombres.toLowerCase()) || option.apellido.toLowerCase().includes(val.apellido.toLowerCase()) || option.cmp.includes(val.cmp));
    } else {
      return this.medicos.filter(option =>
        option.nombre.toLowerCase().includes(val?.toLowerCase()) || option.apellido.toLowerCase().includes(val?.toLowerCase()) || option.cmp.includes(val));
    }
  }

  listarMedicos() {
    this.medicoService.listar().subscribe(data => {
      this.medicos = data;
    });
  }

  mostrarMedico(val: any) {
    return val ? `${val.nombre} ${val.apellido}` : val;
  }

  mostrarPaciente(val: any) {
    return val ? `${val.nombre} ${val.apellido}` : val;
  }

  listarPacientes() {
    this.pacienteService.listar().subscribe(data => {
      this.pacientes = data;
    });
  }

  aceptar() {

  }
}
