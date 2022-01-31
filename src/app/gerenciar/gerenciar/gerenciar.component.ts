import { Component, OnInit } from '@angular/core';
import { catchError, Observable, of, Subject } from 'rxjs';
import { Post } from 'src/app/posts/models/post';
import { PostService } from 'src/app/posts/services/post.service';

@Component({
  selector: 'app-gerenciar',
  templateUrl: './gerenciar.component.html',
  styleUrls: ['./gerenciar.component.css']
})
export class GerenciarComponent implements OnInit {
  
  error$ = new Subject<boolean>();

  constructor(private service : PostService) { }


  posts : Post[] | undefined

  ngOnInit(): void {
  }

  all(){
    this.service.list()
    .subscribe(dados => this.posts= dados);
  }

}
