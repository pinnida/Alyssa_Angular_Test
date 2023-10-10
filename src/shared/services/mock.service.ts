import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

// data
import { mock, mocks, MockDTO } from 'src/assets/data/mock.data';

@Injectable({
  providedIn: 'root'
})
export class MockService {

  constructor(
    private http: HttpClient
  ) { }

  public create$(input: MockDTO): Observable<MockDTO> {
    mocks.push(input);
    return of(input);
  }

  public delete$(id: string): Observable<any> {
    const i = mocks.findIndex(m => m.id === id);
    mocks.splice(i, 1);
    return of();
  }

  public edit$(id: string, input: MockDTO): Observable<MockDTO> {
    const i = mocks.findIndex(m => m.id === id);
    Object.assign(mocks[i], input);
    return of(input);
  }

  public get$(id: string): Observable<MockDTO> {
    return of(mock);
  }

  public getList$(filterData = '', page = 1, perPage = 10, sortBy = '', asc = true, headerResponse?: any): Observable<Array<MockDTO>> {
    headerResponse = headerResponse || {};
    headerResponse.totalCount = mocks.length;
    return of(mocks);
  }
}
