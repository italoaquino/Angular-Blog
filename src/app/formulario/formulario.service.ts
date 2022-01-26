import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { take } from 'rxjs';
import { Post } from '../posts/models/post';

@Injectable({
  providedIn: 'root'
})
export class FormularioService {

  private readonly API = "http://www.localhost:8080/v1/posts/"

  constructor(private http : HttpClient) { }

  create(post : Post){
    return this.http.post(this.API, post).pipe(take(1))
  }

}
