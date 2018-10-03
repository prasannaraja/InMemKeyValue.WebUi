import { Component, Inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Http, Headers, RequestOptions } from '@angular/http';

@Component({
  selector: 'app-list-keys',
  templateUrl: './list-keys.component.html'
})
export class ListKeysComponent {

  public kvpModel: KeyValueModel[];

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    let params = new HttpParams().set("_namespace", "test"); 
    http.get<KeyValueModel[]>('http://localhost:56535/' + 'api/Values', { params: params }).subscribe(result => {
      debugger;

      this.kvpModel = result;
    }, error => console.error(error));
  }
}

interface KeyValueModel {
  _namespace: string;
  key: string;
  value: object;
}

