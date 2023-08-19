import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DateFormControl } from '../date-form-control';

@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.css']
})
export class CardFormComponent {
  cardForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(5)]),
    cardNumber: new FormControl('', [Validators.required, Validators.minLength(16), Validators.maxLength(16)]),
    expiration: new DateFormControl('', [Validators.required, Validators.pattern(/^(0[1-9]|1[0-2])\/\d{2}$/)]),
    securityCode: new FormControl('', [Validators.required,Validators.min(100), Validators.max(999)] )
  })

  constructor() {
    console.log(this.cardForm.controls.name);
    
  }

  get cardFormGroup(): FormGroup {
    // return this.cardForm?.get('name') as unknown as FormGroup;
    return this.cardForm?.controls?.name as unknown as FormGroup;
  }

  onSubmit() {
    console.log("Form Submitted");
    
  }
  onResetClick() {
    this.cardForm.reset()
  }

}
