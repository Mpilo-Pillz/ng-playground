// app.component.ts
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

type OperatingSystems = 'Windows' | 'Linux' | 'MacOS';

interface OperatingSystem {
  id: number;
  operatingSystem: OperatingSystems;
  selected: boolean;
}

interface Technician {
  id: number;
  name: string;
  surname: string;
  age: number;
  os: OperatingSystem[];
}

@Component({
  selector: 'app-table-dynamic-rows',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './table-dynamic-rows.component.html',
  styleUrl: './table-dynamic-rows.component.scss',
})
export class TableDynamicRowsComponent {
  technicians: Technician[] = [
    {
      id: 1,
      name: 'Thabiso',
      surname: 'Mokgatle',
      age: 25,
      os: [
        { id: 1, operatingSystem: 'Windows', selected: true },
        { id: 2, operatingSystem: 'Linux', selected: false },
        { id: 3, operatingSystem: 'MacOS', selected: true },
      ],
    },
    {
      id: 2,
      name: 'Thabo',
      surname: 'Magagula',
      age: 30,
      os: [
        { id: 1, operatingSystem: 'Windows', selected: true },
        { id: 2, operatingSystem: 'Linux', selected: false },
        { id: 3, operatingSystem: 'MacOS', selected: false },
      ],
    },
  ];

  osNames = ['Windows', 'Linux', 'MacOS'];

  updateTable(): void {
    // Find missing operating systems
    let osCoverage = { Windows: false, Linux: false, MacOS: false };
    this.technicians.forEach((tech) => {
      tech.os.forEach((os) => {
        if (os.selected) {
          osCoverage[os.operatingSystem] = true;
        }
      });
    });

    // Check if all operating systems are covered
    if (Object.values(osCoverage).includes(false)) {
      const missingOS = this.osNames.filter(
        (os) => !osCoverage[os as OperatingSystems]
      );

      // Add only one technician for missing OS if not covered
      if (this.technicians.length < 3) {
        this.technicians.push({
          id: this.technicians.length + 1,
          name: '',
          surname: '',
          age: 0,
          os: this.osNames.map((os) => ({
            id:
              this.technicians[0].os.find((o) => o.operatingSystem === os)
                ?.id || 0,
            operatingSystem: os as OperatingSystems,
            selected: missingOS.includes(os),
          })),
        });
      }
    }
  }
}

// import { CommonModule } from '@angular/common';
// import { Component } from '@angular/core';
// import { FormsModule } from '@angular/forms';

// interface OperatingSystem {
//   id: number;
//   operatingSystem: string;
//   selected: boolean;
// }

// interface Technician {
//   id: number;
//   name: string;
//   surname: string;
//   age: number;
//   os: OperatingSystem[];
// }

// @Component({
//   selector: 'app-table-dynamic-rows',
//   standalone: true,
//   imports: [FormsModule, CommonModule],
//   templateUrl: './table-dynamic-rows.component.html',
//   styleUrl: './table-dynamic-rows.component.scss',
// })
// export class TableDynamicRowsComponent {
//   technicians: Technician[] = [
//     {
//       id: 1,
//       name: 'Thabiso',
//       surname: 'Mokgatle',
//       age: 25,
//       os: [
//         { id: 1, operatingSystem: 'Windows', selected: true },
//         { id: 2, operatingSystem: 'Linux', selected: false },
//         { id: 3, operatingSystem: 'MacOS', selected: true },
//       ],
//     },
//     {
//       id: 2,
//       name: 'Thabo',
//       surname: 'Magagula',
//       age: 30,
//       os: [
//         { id: 1, operatingSystem: 'Windows', selected: true },
//         { id: 2, operatingSystem: 'Linux', selected: false },
//         { id: 3, operatingSystem: 'MacOS', selected: false },
//       ],
//     },
//   ];

//   updateTable(): void {
//     const allOS = ['Windows', 'Linux', 'MacOS'];
//     this.technicians.forEach((tech) => {
//       allOS.forEach((os) => {
//         if (
//           !tech.os.some(
//             (system) => system.operatingSystem === os && system.selected
//           )
//         ) {
//           this.technicians.push({
//             id: tech.id,
//             name: '',
//             surname: '',
//             age: tech.age,
//             os: allOS.map((system) => ({
//               id: tech.os.find((o) => o.operatingSystem === system)?.id || 0,
//               operatingSystem: system,
//               selected: system === os,
//             })),
//           });
//         }
//       });
//     });
//   }
// }

// // export class TableDynamicRowsComponent {
// //   customers = [
// //     {
// //       id: 1,
// //       name: 'Thabiso',
// //       surname: 'Mokgatle',
// //       age: 25,
// //       os: [
// //         { id: 1, operatingSystem: 'Windows', selected: true},
// //         { id: 2, operatingSystem: 'Linux', selected: false},
// //         { id: 3, operatingSystem: 'MacOS' , selected: true},
// //       ],
// //     },
// //     {
// //       id: 2,
// //       name: 'Thabo',
// //       surname: 'Magagula',
// //       age: 30,
// //       os: [
// //         { id: 1, operatingSystem: 'Windows', selected: true },
// //         { id: 2, operatingSystem: 'Linux' , selected: false},
// //         { id: 3, operatingSystem: 'MacOS' , selected: false},
// //       ],
// //     },
// //   ];
// // }
