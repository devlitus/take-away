import { Directive, Component, OnInit, HostListener, Input } from '@angular/core';
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
  public pla;
  public plaNombre;
  public listPedido = [];

  constructor(private _service: TakeService) { 
    
  }

  ngOnInit() {
    this.getCategoria();
    this.getPlatos();
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
          this.listPedido.push({'nombre': element.nombre, 'descripcion': element.descripcion, 'precio':element.precio});
          console.log(this.listPedido);   
          Materialize.toast(element.nombre, 4000);
        }
      }
    }
  }
  
}
@Directive({
  selector: '[myModal]'
})

export class ModaCarrito{
  @Input('click') onclick;

  constructor() {
    
  }

  @HostListener('click') onClick() {
    $('.modal').modal();
    $('#modal1').modal('open');
  }

  
}