import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class TakeService {

  constructor(public http: Http) { }

  getAllCategorias() {
    const url = 'http://localhost/takeaway/api-takeaway/api-rest/takeaway.php/categoria';
  
    return new Promise(
      resolve => {
        this.http.get(url)
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

  getAllPlatos() {
    const url = 'http://localhost/takeaway/api-takeaway/api-rest/takeaway.php/plato';

    return new Promise(
      resolve => {
        this.http.get(url)
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

}
