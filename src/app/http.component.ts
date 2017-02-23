import {Component, OnInit} from '@angular/core';
import {HttpService} from "./http.service";
import {Response} from "@angular/http";


@Component({
  selector: 'app-root',
  templateUrl: 'http.component.html'
})
export class HttpComponent implements OnInit {
  constructor(private httpService:HttpService){}

  items:any[] = [];
  asyncString = this.httpService.getData();

  onSubmit(username:string,email:string){
this.httpService.sendData({username:username,email:email}).subscribe(
  data => console.log(data)
)
  }


  ngOnInit(){

    this.httpService.getData()
      .subscribe(
        //(data:Response) => console.log(data.json())
        (data:any) => console.log(data)
        //we do not want to transform the data to json over here it is not reliable
        //So map will take observable in to another resorvable
      )
  }

  getOwndata(){
    this.httpService.getOwndata().subscribe(

      data => {
       const  myArray = [];
        for(let key in data){
         myArray.push(data[key]);
        }
        this.items =myArray;
        //since we are getting json object we need to iterate it through to get array so that we can show it in view
      }
    );
  }


}
