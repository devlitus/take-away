import { Component, OnInit } from '@angular/core';
import { TakeService } from "../take.service";

declare var $: any;

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent implements OnInit {
  public fotos = [];
  constructor(private _service: TakeService) { 
    this.getFoto();
  }

  ngOnInit() {
    // $('.carousel').carousel();
    $('.carousel.carousel-slider').carousel({ fullWidth: true });
    
  }

  getFoto() {
    return this._service.getAllPlatos()
      .then(result => { 
        let fotos = result;
        for (var key in fotos) {
          if (fotos.hasOwnProperty(key)) {
            var element = fotos[key];
            this.fotos = element.foto;
            console.log(this.fotos);   
          }
        }
      })
      .catch(err => { 
        console.log(err);
      })
  }

}
