import { Component, OnInit, ViewChild } from '@angular/core';
import {
  NgbActiveModal,
  NgbModal,
  NgbModalConfig,
  NgbModalOptions,
} from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiServiceService } from 'src/api-service.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

declare var $: any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [NgbModalConfig, NgbModal],
})
export class HeaderComponent implements OnInit {
  constructor(
    config: NgbModalConfig,
    private modalService: NgbModal,
    private service: ApiServiceService,
    private fb: FormBuilder,
    private toster: ToastrService,
    private router: Router
  ) {}
  modalReference: any;
  isBtnActive: any = 1;
  signInForm: any = FormGroup;
  signUPForm: any = FormGroup;
  isLogin: any;
  checkLogin: any = true;
  isToggled: boolean = false;
  menubar: boolean = false;
  openPro: boolean = false;
  loader: boolean = true;
  isload: boolean = false;
  emailPattern = "^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.com";

  get f() { return this.signInForm.controls; };
  get g() { return this.signUPForm.controls; }

  // get f(){return this.signInForm.controler}
  ngOnInit(): void {
    this.isLogin = localStorage.getItem('logId');
    this.checkLogin=this.isLogin ==null?true:false
    this.signInForm = this.fb.group({
      email: ['',[Validators.required,Validators.pattern(this.emailPattern)]],
      password: ['',[Validators.required]],
    });
    this.signUPForm = this.fb.group({
      name: ['',[Validators.required]],
      email: ['',[Validators.required,Validators.pattern(this.emailPattern)]],
      mobileno: ['',[Validators.required,Validators.pattern("^[0-9]*$")]],
      password: ['',[Validators.required]],
      gender: ['',[Validators.required]],
    });
  }
  openWindowCustomClass(content: any) {
    this.modalService.open(content);
  }
  toggleBtn(id: number) {
    this.isBtnActive = id;
    if (id == 1) {
      $('#tab-1').css('display', 'block');
      $('#tab-2').css('display', 'none');
    } else {
      $('#tab-2').css('display', 'block');
      $('#tab-1').css('display', 'none');
    }
  }

  toggle() {
    this.isToggled = !this.isToggled;
    if (this.isToggled) {
      $('.main-menu').removeClass('nav-holder');
      $('.main-menu').addClass('vismobmenu');
      this.menubar = true;
    } else {
      $('.main-menu').addClass('nav-holder');
      $('.main-menu').removeClass('vismobmenu');
      this.menubar = false;
    }
  }
  openProfile() {
    this.openPro = !this.openPro;
    if (this.openPro) {
      // $('.main-menu').removeClass('nav-holder');
      $('.proFile').addClass('hu-menu-vis');
      // this.menubar=true
    } else {
      // $('.main-menu').addClass('nav-holder');
      $('.proFile').removeClass('hu-menu-vis');

      // this.menubar=false
    }
  }

  signin() {
    if (!this.signInForm.invalid) {
      this.isload = true;
      this.service.signIn(this.signInForm.value).subscribe((res) => {
        if (res.ErrorCode == 200) {
          this.isload = false;
          this.checkLogin=false
          this.toster.success('Login successfully');
          localStorage.setItem('loginKey', res.authkey);
          localStorage.setItem('logId', res.data[0]._id);
          localStorage.setItem('userData', JSON.stringify(res.data[0]));
          this.signInForm.reset();
          this.isLogin = res.data[0]._id;
          $('.close-reg').trigger('click');
        } else {
          this.toster.warning(res.ErrorMessage);
          this.isload = false;
        }
      });
    } else {
      this.toster.warning('Please fill all feilds');
    }
  }

  signUp() {
    console.log(this.signUPForm.value);

    // if (!this.signUPForm.invalid) {
    //   $('.isregister').addClass('animate-flicker');
    //   this.service.signUp(this.signUPForm.value).subscribe((res) => {
    //     if (res.ErrorCode == 200) {
    //       $('.isregister').removeClass('animate-flicker');

    //       this.signUPForm.reset();
    //       $('.close-reg').trigger('click');
    //       this.toster.success('registration successfully');
    //     } else {
    //       this.toster.warning(res.ErrorMessage);
    //       $('.isregister').removeClass('animate-flicker');
    //     }
    //   });
    // } else {
    //   this.toster.warning('Please fill all feilds');
    // }
  }

  logOut() {
    $('.proFile').removeClass('hu-menu-vis');
    this.isLogin = null;
    this.checkLogin=true
    localStorage.clear();
    this.router.navigateByUrl('/');
  }
}
