import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { toJSDate } from '@ng-bootstrap/ng-bootstrap/datepicker/ngb-calendar';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { min } from 'rxjs';
import { PostService } from 'src/app/posts/services/post.service';
import { AlertComponent } from 'src/app/shared/alert/alert.component';
import { createThis } from 'typescript';
import { FormularioService } from '../formulario.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {


  formulario !: FormGroup;
  bsModalRef?: BsModalRef;

  

  constructor(private builder : FormBuilder, private service : FormularioService, private modalService : BsModalService) { }

  ngOnInit(): void {
  
    this.formulario = this.builder.group({
      text : [null, Validators.required],
      subtittle : [null, Validators.required],
      tittle : [null, Validators.required],
      author : [null, Validators.required],
    })

  }
  
 
  onSubmit(){
    console.log(this.formulario.value);
    if(this.formulario.valid){
      this.service.create(this.formulario.value).subscribe(
        suecss => this.handlerSucess(),
        error => this.handlerError(),
        () => this.resetar()
      );
    }

    

  }
  resetar(){
    this.formulario.reset();
  }


  handlerSucess(){
    this.bsModalRef = this.modalService.show(AlertComponent);
    this.bsModalRef.content.type = 'alert-success'
    this.bsModalRef.content.message = "Criado com sucesso!"
  }

  handlerError(){
    this.bsModalRef = this.modalService.show(AlertComponent);
    this.bsModalRef.content.type = 'warning'
    this.bsModalRef.content.message = "Erro ao enviar o formulário!"
  }

}
