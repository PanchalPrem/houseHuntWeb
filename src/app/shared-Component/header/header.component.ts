import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal, NgbModalConfig, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiServiceService } from 'src/api-service.service';

declare var $:any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [NgbModalConfig, NgbModal],

})
export class HeaderComponent implements OnInit {

  constructor(config: NgbModalConfig, private modalService: NgbModal, private service: ApiServiceService,
    private fb: FormBuilder) { }
  modalReference: any
  isBtnActive:any=1
  signInForm: any = FormGroup;
  signUPForm: any = FormGroup;

  ngOnInit(): void {
    this.signInForm=this.fb.group({
      email:[''],
      password:['']
    })
    this.signUPForm=this.fb.group({
      name:[''],
      email:[''],
      mobileno:[''],
      password:[''],
      gender:['']
    })
  }
  openWindowCustomClass(content: any) {
    // let options: NgbModalOptions = {
    //  windowClass : "myCustomModalClass"
    // };
    this.modalService.open(content);
  }
  toggleBtn(id: number) {
    this.isBtnActive = id
    if (id==1) {
      $('#tab-1').css("display","block");
      $('#tab-2').css("display","none");
    }else{
      $('#tab-2').css("display","block");
      $('#tab-1').css("display","none");
    }
  }

  signin(){
    this.service.signIn(this.signInForm.value).subscribe((res=>{
      if(res.ErrorCode==200){
        this.signInForm.reset()
        $('.close-reg').trigger('click');
        alert("Sign In successfully");
      }else{
        alert(res.ErrorMessage);
      }
    }))
  }

  signUp(){
    this.service.signUp(this.signUPForm.value).subscribe((res=>{
      if(res.ErrorCode==200){
        this.signUPForm.reset();
        $('.close-reg').trigger('click');
        alert("registration successfully");
      }else{
        alert(res.ErrorMessage);
      }
    }))
  }

}
