import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.css']
})
export class CardFormComponent {
  cardForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)])
  })

  constructor() {
    console.log(this.cardForm.controls.name);
    
  }

  get cardFormGroup(): FormGroup {
    // return this.cardForm?.get('name') as unknown as FormGroup;
    return this.cardForm?.controls?.name as unknown as FormGroup;
  }

}
