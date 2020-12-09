import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class FileDataService {

    private url = 'http://localhost/TestApi/';
    private URL = 'http://localhost/TestApi/index.php/welcome/index/';

  constructor(private http: HttpClient) {
    }

    getPosts(){
      return new Promise(resolve => {
        this.http.get(this.url).subscribe(data => {
            resolve(data);
        }, error => {
          console.log(error);
        });
      });
    }

    getXID(id: string){
      return new Promise(resolve => {
        this.http.get(this.URL + id).subscribe(data => {
            resolve(data);
        }, error => {
          console.log(error);
        });
      });

    }


}
