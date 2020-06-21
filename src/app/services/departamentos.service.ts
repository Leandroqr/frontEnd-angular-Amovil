import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Departamento } from '../interfaces/departamento';

@Injectable({
  providedIn: 'root'
})
export class DepartamentosService {
  API_ENDPOINT = 'http://localhost:8000/api';
  private headers = new HttpHeaders({'Content-Type':'application/json'});
  constructor(private httpClient: HttpClient) {}

  get() {
    return this.httpClient.get(this.API_ENDPOINT + '/departamentos');
  }
  save(departamento: Departamento) {
    // const headers = new HttpHeaders({'Content-Type':'application/json'});
    return this.httpClient.post(this.API_ENDPOINT + '/departamentos', departamento, {headers: this.headers});
  }
  update(departamento) {
    return this.httpClient.put(this.API_ENDPOINT + '/departamentos/' + departamento.codigo_dane_d, departamento, {headers: this.headers});
  }
  delete(id) {
    return this.httpClient.delete(this.API_ENDPOINT + '/departamentos/' + id, {headers: this.headers});
  }
  filter(nombre) {
    return this.httpClient.get(this.API_ENDPOINT + '/departamentos/' + nombre);
  }
}
