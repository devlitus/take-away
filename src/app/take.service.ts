import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class TakeService {

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
        })
      }
    )
  }
}
