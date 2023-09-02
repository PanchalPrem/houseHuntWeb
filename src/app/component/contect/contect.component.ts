import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiServiceService } from 'src/api-service.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-contect',
  templateUrl: './contect.component.html',
  styleUrls: ['./contect.component.css'],
})
export class ContectComponent implements OnInit {
  inquiryForm: any = FormGroup;
  get f() { return this.inquiryForm.controls; }
  emailPattern = "^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.com";
  constructor(
    private service: ApiServiceService,
    private fb: FormBuilder,private toster: ToastrService
    )
  {}

  ngOnInit(): void {
    this.inquiryForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required,Validators.pattern(this.emailPattern)]],
      number: ['', [Validators.required,Validators.pattern("^[0-9]*$")]],
      message: ['',[Validators.required]],
    });
  }
  submit() {
    this.service.inquiry(this.inquiryForm.value).subscribe((res: any) => {
      if (res.ErrorCode == 200) {
        this.inquiryForm.reset();
        this.toster.success(res.ErrorMessage);
      } else {
        this.toster.error(res.ErrorMessage);
      }
    });
  }
}
