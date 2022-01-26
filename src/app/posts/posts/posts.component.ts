import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../models/post';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  

  posts$ : Observable<Post[]> | undefined

  constructor(private PostService : PostService) { }

  ngOnInit(): void {

    this.posts$ = this.PostService.list();
  }

}
