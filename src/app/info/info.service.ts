import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { stringify } from "@angular/compiler/src/util";
import { Post } from "./post.model";
import { map } from "rxjs/operators";

@Injectable({providedIn: 'root'})
export class InfoService {

    constructor(private http: HttpClient) {}

    // if your component dowsnt care about the respose, subscribe in the service.
    createPost(title: string, content: string) {
        const postData: Post = {title: title, content: content};
        this.http.post<{ name: string }>('https://ng-http-2b26c.firebaseio.com/myinfo.json', postData)
        .subscribe(resData => {
            console.log(resData);
        });
    }

    // If care about the response subscribe in the component
    fetchPost() {
        return this.http.get<{ [key: string ]: Post }>(
            'https://ng-http-2b26c.firebaseio.com/myinfo.json')
            .pipe(
              map(responseData => {
                const data: Post[] = [];
                for (const key in responseData) {
                  if (responseData.hasOwnProperty(key)) {
                    // {...responseData[key], id: key}
                    // this is for add a new object
                    // the , id: key is if we want to grab all the key and delete or move
                    data.push({...responseData[key], id: key});
                  }
                }
                return data;
              }));
    }
}
