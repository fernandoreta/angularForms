import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Post } from './post.model';
import { InfoService } from './info.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  constructor(private http: HttpClient,
              private infoService: InfoService) { }

  loadedPost: Post[] = [];
  isLoading = false;

  submitForm(myInfo: Post) {
    this.infoService.createPost(myInfo.title, myInfo.content);
  }

  onFetchPost() {
    this.isLoading = true;
    this.infoService.fetchPost().subscribe(fetch => {
      this.isLoading = false;
      this.loadedPost = fetch;
    });
  }
  ngOnInit() {
    this.infoService.fetchPost().subscribe(fetch => {
      this.isLoading = false;
      this.loadedPost = fetch;
    });
  }

}
