import { Component, OnInit } from '@angular/core';
import { catchError, empty, Observable, of, Subject } from 'rxjs';
import { Post } from '../models/post';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  showNavigationArrows = false;
  showNavigationIndicators = false;
  images = ['../../assets/livros.jpg', '../../assets/livros.jpg', '../../assets/livros.jpg'];


  posts$ : Observable<Post[]> | undefined
  error$ = new Subject<boolean>();

  constructor(private PostService : PostService) { }

  ngOnInit(): void {

    this.posts$ = this.PostService.list()
    .pipe(
      catchError(error => {
        console.error(error);
        this.error$.next(true);
        return of();
      })
    )
  }

}
