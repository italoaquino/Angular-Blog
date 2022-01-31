import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../../services/post.service';
import { Post } from '../../models/post';
import { catchError, Observable, of, pipe } from 'rxjs';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  posts$ : Observable<Post>  | undefined;

  valor: string | undefined;
  error$: any;
  constructor(private route : ActivatedRoute, private service : PostService) { }

  ngOnInit(): void {



    this.route.params.subscribe(
      (params : any) => {
        this.valor = params['guid']
      }
    );
      
    this.posts$ = this.service.details(this.valor).pipe(
      catchError(error => {
        console.error(error);
        this.error$.next(true);
        return of();
      })
    )
    


  }
 
}
