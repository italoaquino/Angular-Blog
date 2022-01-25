import { Component, OnInit } from '@angular/core';
import { Post } from '../models/post';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts!: Post[];


  constructor(private PostService : PostService) { }

  ngOnInit(): void {
    this.PostService.list().subscribe(dados => this.posts = dados);
  }

}
