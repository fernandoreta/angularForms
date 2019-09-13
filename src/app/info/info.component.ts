import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  constructor(private http: HttpClient) { }

  submitForm(myInfo: {title: string, content: string}) {
    this.http.post('https://ng-http-2b26c.firebaseio.com/myinfo.json', myInfo)
      .subscribe(resData => {
        console.log(resData);
      });
  }

  private getFetch() {
    this.http.get('https://ng-http-2b26c.firebaseio.com/myinfo.json')
      .pipe(
        map(responseData => {
          const data = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              // {...responseData[key], id: key}
              // this is for add a new object
              // the , id: key is if we want to grab all the key and delete or move
              data.push({...responseData[key], id: key});
            }
          }
          return data;
        }))
        .subscribe(resData => {
          console.log(resData);
        });
  }
  ngOnInit() {
    this.getFetch();
  }

}
