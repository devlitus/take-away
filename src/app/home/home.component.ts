import { Component, OnInit } from '@angular/core';
import { TakeService } from "../take.service";

declare var $: any;
declare var Materialize: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public categorias: Object;
  public platos: Object;
  // public valor = 0;

  constructor(private _service: TakeService) { 
    this.getCategoria();
    this.getPlatos();
  }

  ngOnInit() {
    
  }
  getCategoria() {
    return this._service.getAllCategorias()
      .then(result => { 
        this.categorias = result;
        console.log(this.categorias);
      })
      .catch(err => {
        console.log(err);
      })
  }

  getPlatos() {
    return this._service.getAllPlatos()
      .then(result => {
        this.platos = result;
        console.log(this.platos);
      })
      .catch(err => {
        console.log(err);
      })
  }
  getId(id) {
    for (var key in this.platos) {
      if (this.platos.hasOwnProperty(key)) {
        var element = this.platos[key];
        if (id === element.id) {
          console.log('soy el plato ' + element.id);
          Materialize.toast(element.nombre, 4000);
          // this.valor++;
        }
        // console.log(id +' '+ element.id);
      }
    }
  }

}
