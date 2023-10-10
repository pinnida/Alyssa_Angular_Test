import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Mock2Service {

  constructor(
    private http: HttpClient
  ) { }


  getMockProductsSmall() {
    return this.http.get<any>('./assets/data/products-small.json');
  }

  getMockProductsSmall_promise() {
    return this.http.get<any>('./assets/data/products-small.json')
      .toPromise()
      .then(res => <any[]>res.data)
      .then(data => { return data; });
  }

}
