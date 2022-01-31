import { Component, Input, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {

  constructor(private bsModelRef :BsModalRef ) { }

  @Input() message: String | undefined;
  @Input() type : String | undefined 
  
  ngOnInit(): void {
  }

  OnCLose(){
    this.bsModelRef.hide();
  }

}
