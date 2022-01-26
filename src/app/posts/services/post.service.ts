import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { delay, tap } from 'rxjs';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpClient : HttpClient) { }

  private readonly API = "http://www.localhost:8080/v1/posts/"

  list(){
    return this.httpClient.get<Post>(this.API)
      .pipe(
        delay(2000),
        tap(console.log)
      )
  }


}
