import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url = 'http://192.168.1.68:80/strack-peSAP/';

  constructor(private http: HttpClient) { }

  list(){
    return this.http.get(`${this.url}list.php`);
  }

  

}
