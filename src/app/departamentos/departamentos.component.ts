import { Component, OnInit, Input } from '@angular/core';
import { DepartamentosService } from '../services/departamentos.service';
import { HttpClient } from '@angular/common/http';
import { Departamento } from '../interfaces/departamento';
import {MatDialog} from '@angular/material/dialog';
import {DialogContentComponent} from '../dialog-content/dialog-content.component'

@Component({
  selector: 'app-departamentos',
  templateUrl: './departamentos.component.html',
  styleUrls: ['./departamentos.component.css']
})
export class DepartamentosComponent implements OnInit {
  departamentos: Departamento[];
  departamento: Departamento = {
    nombre_d: null,
    codigo_dane_d: null
  };
  API_ENDPOINT = 'http://localhost:8000/api';
  constructor(private departamentosService: DepartamentosService, private httpClient: HttpClient, public dialog: MatDialog) {
    this.departamentosService.get().subscribe((data: Departamento[]) => {
      this.departamentos = data;
      console.log(data)
    }), error => {
      console.log(error);
    }
  }

  ngOnInit(): void {
  }
  saveDepartamento() {
    this.departamentosService.save(this.departamento).subscribe(data => {
      console.log(data)
    }, error => {
      console.log(error)
    });
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogContentComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }



}
