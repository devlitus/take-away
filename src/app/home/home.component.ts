import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { TakeService } from "../take.service";
=======
>>>>>>> devel

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
<<<<<<< HEAD
  public categoria;
  public plato;
  constructor(private _service: TakeService) {
    this.getCategoria();
    this.getPlato();
   }

  ngOnInit() {
  }
  /**
   * getCategoria
   */
  public getCategoria() {
    return this._service.categoria()
      .then(result => { 
        this.categoria = result;
        console.log(this.categoria);
      })
      .catch(err => {
        console.log(err);
      })
  }
  /**
   * getPlato
  */
  public getPlato() {
    return this._service.getAllPlatos()
      .then(result => { 
        this.plato = result;
      })
      .catch(err => { 
        console.log(err);
      })
  }
=======

  constructor() { }

  ngOnInit() {
  }
>>>>>>> devel

}
