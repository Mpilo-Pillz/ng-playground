import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'android-seventeen-playground';

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
