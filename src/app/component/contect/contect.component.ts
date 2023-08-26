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
  constructor(
    private service: ApiServiceService,
    private fb: FormBuilder,private toster: ToastrService
    )
  {}

  ngOnInit(): void {
    this.inquiryForm = this.fb.group({
      name: [''],
      email: [''],
      number: [''],
      message: [''],
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
