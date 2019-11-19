import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../services/productos.service';
import { async } from 'q';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  categorias:any[] = [];
  productos:any[] = [];

  constructor( private _productosService:ProductosService ) { 

  }

  ngOnInit() {
    
    this.getProductos();
    this.getCategorias();    
    
  }


  getProductos(){
     this._productosService.getPoductos()
                         .subscribe((data:any[]) => {
                          //  console.log(data)
                            this.productos = data;
                         }, (err) => {
                           console.log(err)
                         });

  }

  getCategorias(){
    this._productosService.getCategorias()
                          .subscribe((data:any[]) =>{
                            this.categorias = data;
                          }, (err) => {
                            console.log(err)
                          });
  }

}
