import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'creditcard';
  tableData = [
    { nqfLevel: 5, qualification: 'Higher Certificate in Mathematics' },
    { nqfLevel: 6, qualification: 'Diploma in Information Technology' },
    {
      nqfLevel: 7,
      qualification: 'Advanced Diploma in Information Technology',
    },
    {
      nqfLevel: 7,
      qualification: 'BSC Degree in Computer Science and Mathematics',
    },
    { nqfLevel: 7, qualification: 'BSC Degree in Computing' },
    { nqfLevel: 8, qualification: 'BSC Honors in Computing' },
    {
      nqfLevel: 8,
      qualification: 'Postgraduate Diploma in Information Resource Management',
    },
  ];
}
