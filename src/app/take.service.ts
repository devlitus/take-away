import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class TakeService {

  constructor(private _http: Http) { }

  categoria() {
    const url = 'http://localhost/Proyectos_Angular/take-away/api-takeaway/api-rest/takeaway.php/categorias';

    return new Promise(
      resolve => {
        this._http.get(url)
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
          .map(res => res.json())
          .subscribe(data => {
            resolve(data['data']);
          },
          err => {
            console.log(err);

          })
      }
    );
  }
}
