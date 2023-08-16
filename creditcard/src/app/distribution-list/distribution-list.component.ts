import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-distribution-list',
  templateUrl: './distribution-list.component.html',
  styleUrls: ['./distribution-list.component.css'],
})
export class DistributionListComponent implements OnInit {
  emailForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}
  ngOnInit(): void {
    this.emailForm = this.formBuilder.group({
      emailList: [
        '',
        [
          Validators.required,
          Validators.pattern(
            /^\s*([\w+.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,4}\s*;?\s*)+$/
          ),
        ],
      ],
    });
  }
}
