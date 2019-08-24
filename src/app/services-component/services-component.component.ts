import { Component, OnInit } from '@angular/core';
import { MyBabyServiceService } from '../services/my-baby-service.service';

@Component({
  selector: 'app-services-component',
  templateUrl: './services-component.component.html',
  styleUrls: ['./services-component.component.css']
})
export class ServicesComponentComponent implements OnInit {

  constructor(private bbyServ: MyBabyServiceService) { }

  ngOnInit() {
    this.bbyServ.print();
  }

}
