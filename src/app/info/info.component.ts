import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  constructor() { }

  submitForm(myInfo: NgForm) {
    console.log(myInfo.value);
  }

  ngOnInit() {
  }

}
