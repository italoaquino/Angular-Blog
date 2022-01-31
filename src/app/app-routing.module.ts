import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './posts/details/details/details.component';

const routes: Routes = [
  {path : '', pathMatch: 'full', redirectTo : 'posts'},
  {
    path: 'posts',
    loadChildren: () => import('./posts/posts.module').then(m => m.PostsModule)
  },
  {
    path: 'formulario',
    loadChildren: () => import('./formulario/formulario.module').then(m => m.FormularioModule)
  },

  {path : 'posts/details/:guid', component : DetailsComponent},
 

  {
    path: 'gerenciar',
    loadChildren: () => import('./gerenciar/gerenciar.module').then(m => m.GerenciarModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
