import { Component, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { Paciente } from 'src/app/_model/paciente';
import { MatTableDataSource } from '@angular/material/table';
import { PacienteService } from 'src/app/_service/paciente.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
  styleUrls: ['./paciente.component.css']
})
export class PacienteComponent {

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  dataSource?: MatTableDataSource<Paciente>;
  displayedColumns: string[] = ['idPaciente', 'nombre', 'apellido', 'acciones'];

  constructor(private pacienteService: PacienteService,
    private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    
    this.pacienteService.listar().subscribe(data => {
      this.crearTabla(data);
    });

    this.pacienteService.getPacienteCambio().subscribe(data => {
      this.crearTabla(data);
    });

    this.pacienteService.getMensajeCambio().subscribe(data => {
      this.snackBar.open(data, 'AVISO', {
        duration: 2000,
        verticalPosition: "top",
        horizontalPosition: "right"
      });
    });
  }

    eliminar(id: number) {
      this.pacienteService.eliminar(id).subscribe(() => {
        this.pacienteService.listar().subscribe(data => {
          this.pacienteService.setPacientecambio(data);
          this.pacienteService.setMensajeCambio('SE ELIMINO');
        });
      });
    }
  
    crearTabla(data: Paciente[]) {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }

  filtrar(event: Event){
    this.dataSource.filter = (event.target as HTMLInputElement).value.trim().toLowerCase();
  }
}
