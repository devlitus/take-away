import { Injectable } from '@angular/core';
<<<<<<< HEAD
import { Http, Jsonp, URLSearchParams } from "@angular/http";
=======
import { Http, URLSearchParams } from "@angular/http";
>>>>>>> devel
import 'rxjs/add/operator/map';

@Injectable()
export class TakeService {

<<<<<<< HEAD
  constructor(private _http: Http, private _jsonp: Jsonp) { }

  categoria() {
    const url = 'http://localhost/Proyectos_Angular/take-away/api-takeaway/api-rest/takeaway.php/categorias';
    const param = new URLSearchParams();
    param.set('callback', 'JSONP_CALLBACK');
    return new Promise(
      resolve => {
        this._jsonp.get(url, { params: param })
          .map(res => res.json())
          .subscribe(data => {
            console.log(data['data']);
          },
          err => {
            console.log(err);
          })
      }
    );
  }



  getAllCategorias() {
    const url = 'http://localhost/Proyectos_Angular/take-away/api-takeaway/api-rest/takeaway.php/categorias';
    return new Promise(
      resolve => {
        this._http.get(url)
          .map(respons => respons.json())
          .subscribe(data => {
            resolve(data['data']);
          },
          err => {
            console.log(err);
          })
      }
    );
  }

  /**
   * getPlatos
   */
  public getAllPlatos() {
    const url = 'http://localhost/Proyectos_Angular/take-away/api-takeaway/api-rest/takeaway.php/platos';
    return new Promise(
      resolve => {
        this._http.get(url)
          .map(res => res.json()).subscribe(data => {
            resolve(data['data']);
          },
          err => {
          console.log(err);
=======
  constructor(public http: Http) { }

  getDatos(search) {
    const url = 'http://localhost/proyectos_Angular/take-away/api-takeaway/api-rest/takeaway.php/';
    const param = new URLSearchParams();
    param.set('/', search);
    return new Promise(
      resolve => {
        this.http.get(url, { params: param })
          .map(respons => respons.json())
          .subscribe(data => {
            resolve(data);
          },
          err => {
            console.log(err);
>>>>>>> devel
        })
      }
    )
  }
<<<<<<< HEAD

=======
>>>>>>> devel
}
