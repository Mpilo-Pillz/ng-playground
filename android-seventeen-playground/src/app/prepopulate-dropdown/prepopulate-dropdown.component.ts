import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-prepopulate-dropdown',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './prepopulate-dropdown.component.html',
  styleUrl: './prepopulate-dropdown.component.scss',
})
export class PrepopulateDropdownComponent {
  customers: any = [
    { id: 1, name: 'Alice', genders: ['Female'], shoeSizes: [36, 37] },
    { id: 2, name: 'Bob', genders: ['Male'], shoeSizes: [42, 43] },
    // ... more customers
  ];

  selectedCustomer = this.customers[0]!; // Default to the first customer
  selectedGender = this.selectedCustomer?.genders[0];
  selectedShoeSize = this.selectedCustomer?.shoeSizes[0];

  selectCustomer(customerId: number) {
    this.selectedCustomer = this.customers.find(
      (c: any) => c.id === customerId
    );
    this.selectedGender = this.selectedCustomer?.genders[0];
    this.selectedShoeSize = this.selectedCustomer?.shoeSizes[0];
  }
}
