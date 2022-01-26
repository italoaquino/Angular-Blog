import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { toJSDate } from '@ng-bootstrap/ng-bootstrap/datepicker/ngb-calendar';
import { min } from 'rxjs';
import { PostService } from 'src/app/posts/services/post.service';
import { FormularioService } from '../formulario.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {


  formulario !: FormGroup;

  

  constructor(private builder : FormBuilder, private service : FormularioService) { }

  ngOnInit(): void {
  
    this.formulario = this.builder.group({
      text : [null, Validators.required, Validators.min(10)],
      subtittle : [null, Validators.required, Validators.min(10)],
      tittle : [null, Validators.required, Validators.min(10)],
      author : [null, Validators.required, Validators.min(5)],
    })

  }
  
 
  onSubmit(){
    console.log(this.formulario.value);
    if(this.formulario.valid){
      this.service.create(this.formulario.value).subscribe(
        suecss => console.log('sucess'),
        error => console.log("error"),
        () => console.log('request deu certo')
      );
    }
  }
  resetar(){
    this.formulario.reset();
  }


  

}
