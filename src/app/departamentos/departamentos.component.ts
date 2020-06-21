import { Component, OnInit, Input } from '@angular/core';
import { DepartamentosService } from '../services/departamentos.service';
import { HttpClient } from '@angular/common/http';
import { Departamento } from '../interfaces/departamento';
import {MatDialog} from '@angular/material/dialog';
// import {DialogContentComponent} from '../dialog-content/dialog-content.component'
import {NgbModal, ModalDismissReasons, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-departamentos',
  templateUrl: './departamentos.component.html',
  styleUrls: ['./departamentos.component.css']
})
export class DepartamentosComponent implements OnInit {
  departamentos: Departamento[];
  departamento: Departamento = {
    id: null,
    nombre_d: null,
    codigo_dane_d: null
  };
  modal: NgbModalRef
  // Variable para guardar el nombre del departamento a buscar
  buscar: string;
  // Una variable tipo boolean para mostrar los depatamentos filtrados
  filter: boolean = true;
  // mensaje por si no se encuentra informacion
  mensaje: any = ''
  filterDepartamentos: Departamento[];
  API_ENDPOINT = 'http://localhost:8000/api';
  closeResult = '';
  constructor(private departamentosService: DepartamentosService, private httpClient: HttpClient, public dialog: MatDialog, private modalService: NgbModal) {
    this.getAll();
  }
  ngOnInit(): void {
  }
  getAll() {
    this.departamentosService.get().subscribe((data: Departamento[]) => {
      this.departamentos = data;
      console.log(data)
    }), error => {
      console.log(error);
    }
  }
  saveDepartamento() {
    this.departamentosService.save(this.departamento).subscribe((data) => {
      // this.departamentos.push(data)
      this.getAll()
      console.log(data)
      this.cerrar()
    }, error => {
      console.log(error)
    });
  }
  updateDepartamento() {
    this.departamentosService.update(this.departamento.codigo_dane_d).subscribe(data => {
      console.log(data)
    }, error => {
      console.log(error)
    });
  }
  deleteDepartamento(id,nombre) {
    if (confirm(`¿Desea eliminar el departamento de ${nombre}?`)) {
      this.departamentosService.delete(id).subscribe(data => {
        this.getAll()
        console.log(data)
      }, error => {
        console.log(error)
      });
    }
  }
  filterName(nombre) {
    if(nombre === '') {
      this.filterDepartamentos = []
      this.filter = true
      return
    }
    this.departamentosService.filter(nombre).subscribe((data: Departamento[]) => {
      this.filter = false
      this.filterDepartamentos = data
      console.log(data)
    }, error => {
      console.log(error)
    });
  }
// Abrir modal
  open(content) {
    // this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
    //   this.closeResult = `Closed with: ${result}`;
    // }, (reason) => {
    //   this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    // });
    this.modal = this.modalService.open(content, { centered: true, backdropClass: 'light-blue-backdrop' })
    this.modal.result.then((e) => {
        console.log("dialogo cerrado")
    });
  }
  // Cerrar modal
  cerrar() {
    this.modal.close();
  }

  // close() {
  //   NgbModalRef.result
  // }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }



}
