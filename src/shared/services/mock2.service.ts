import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MockDTO } from 'src/assets/data/mock.data';

@Injectable({
  providedIn: 'root'
})
export class Mock2Service {

  constructor(
    private http: HttpClient
  ) { }


  getToDoList(): Observable<any> {
    return this.http.get<any>('/assets/data/todo.data.json');
  }

  getInProgressList(): Observable<any> {
    return this.http.get<any>('/assets/data/inprogress.data.json');
  }

  getDoneList(): Observable<any> {
    return this.http.get<any>('/assets/data/done.data.json');
  }

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
