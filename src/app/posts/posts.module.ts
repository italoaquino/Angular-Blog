import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { PostsComponent } from './posts/posts.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    PostsComponent,
   
  ],
  imports: [
    CommonModule,
    PostsRoutingModule,
    MatProgressSpinnerModule,
    NgbModule
  ]
})
export class PostsModule { }
