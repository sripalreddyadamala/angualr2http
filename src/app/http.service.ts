import {Injectable} from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Rx'
@Injectable()

export class HttpService {

  constructor(private http: Http) {
  }

  getData() {
    return this.http.get('https://angular2-course-72994.firebaseio.com/title.json')
      .map((response: Response) => response.json());
    //map will take response of type response  and using a fat arrow function extract json
  }

  sendData(user: any) {
    const body = JSON.stringify(user);
    //only string of text can be send in post request
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
//these method takes a userobject of type any
    return this.http.post('https://angular2-course-72994.firebaseio.com/data.json',body,{
      headers:headers
    })
  .map((data: Response) => data.json())
      .catch(this.handleError);
    }
  private handleError(error:any){
    console.log(error);
    return Observable.throw(error.json().error || 'server error');
  }
  getOwndata(){

    return this.http.get('https://angular2-course-72994.firebaseio.com/data.json')
      .map((response: Response) => response.json());
    //map will take response of type response  and using a fat arrow function extract json
  }
}

