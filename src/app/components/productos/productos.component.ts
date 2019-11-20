import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../services/productos.service';
import { productoModel } from 'src/app/models/producto.model';
import Swal from 'sweetalert2';
import { delay } from 'q';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  productos: any[] = [];
  cargando = false;

  constructor(private _productosService:ProductosService) { }

  ngOnInit() {
    this.cargando = true;
    this.obtenerProductos();
  }

  borrarProducto( prod ){

    Swal.fire({
      title:'Atención',
      text:`Está seguro que desea borrar a ${prod.nombre}..?`,
      icon:'question',
      showConfirmButton:true,
      showCancelButton:true
    }).then( resp  => {
      if (resp.value) {
        this._productosService.eliminarProducto(prod._id)
        .subscribe( resp => {
          console.log(resp)
          this.obtenerProductos()
        });
      }
    });
  }

  obtenerProductos(){
    this._productosService.getProductos()
    .subscribe((data: any[]) => {
      this.productos = data;
      this.cargando = false;
    }, (err) => {
      console.log(err)
    });
  }
}
