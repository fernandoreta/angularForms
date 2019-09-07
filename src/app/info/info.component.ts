import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

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
      .subscribe(resData => {
        console.log(resData);
      });
  }
  ngOnInit() {
    this.getFetch();
  }

}
