import { Directive, Component, OnInit, HostListener, Input } from '@angular/core';
import { TakeService } from '../take.service';

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
  public total = 0;

  constructor(private _service: TakeService) {}

  ngOnInit() {
    this.getCategoria();
    this.getPlatos();
  }
  getCategoria() {
    return this._service.getAllCategorias()
      .then(result => {
        this.categorias = result;
        // console.log(this.categorias);
      })
      .catch(err => {
        console.log(err);
      });
  }

  getPlatos() {
    return this._service.getAllPlatos()
      .then(result => {
        this.platos = result;
        // console.log(this.platos);
      })
      .catch(err => {
        console.log(err);
      });
  }
  getId(id) {
    for (let key in this.platos) {
      if (this.platos.hasOwnProperty(key)) {
        let element = this.platos[key];
        if (id === element.id) {
          this.listPedido.push({'nombre': element.nombre, 'descripcion': element.descripcion, 'precio': element.precio});

          // console.log('soy el plato ' + element.id);
          Materialize.toast(element.nombre, 4000);
        }
      }
    }
    this.totalCompra();

/*     console.log(this.total);
    console.log(this.listPedido); */
  }
  totalCompra() {
    let precios;
    for (let key in this.listPedido) {
      precios = parseFloat(this.listPedido[key].precio);
    }
    return this.total = this.total + precios;
  }
}
@Directive({
  selector: '[myModal]'
})

export class ModaCarrito {
  @Input('click') onclick;

  constructor() {
  }

  @HostListener('click')
  onClick() {
    $('.modal').modal();
    $('#modal1').modal('open');
  }
}
