import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  URL='http://localhost:3100/api/productos';
  

  constructor( private http:HttpClient ) {}

  getPoductos(){
    return this.http.get(this.URL);
  }

  getCategorias(){
    return this.http.get(`${this.URL}/categorias`);
  }
}
