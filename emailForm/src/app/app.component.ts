import { Component } from '@angular/core';

interface Day {
  dayNumber: number;
  weekNumber: number;
  isBookable: boolean;
  dayInWeek: number;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // row = new Array(9);
  marchDays: Day[] = [
    {
      dayNumber: 1,
      weekNumber: 1,
      isBookable: false,
      dayInWeek: 1,
    },
    {
      dayNumber: 2,
      weekNumber: 1,
      isBookable: true,
      dayInWeek: 2,
    },
    {
      dayNumber: 3,
      weekNumber: 1,
      isBookable: false,
      dayInWeek: 3,
    },
    {
      dayNumber: 4,
      weekNumber: 1,
      isBookable: false,
      dayInWeek: 4,
    },
    {
      dayNumber: 5,
      weekNumber: 1,
      isBookable: true,
      dayInWeek: 5,
    },
    {
      dayNumber: 6,
      weekNumber: 1,
      isBookable: true,
      dayInWeek: 6,
    },
    {
      dayNumber: 7,
      weekNumber: 1,
      isBookable: true,
      dayInWeek: 7,
    },
    {
      dayNumber: 8,
      weekNumber: 2,
      isBookable: true,
      dayInWeek: 1,
    },
    {
      dayNumber: 9,
      weekNumber: 2,
      isBookable: true,
      dayInWeek: 2,
    },
    {
      dayNumber: 10,
      weekNumber: 2,
      isBookable: true,
      dayInWeek: 3,
    },
    {
      dayNumber: 11,
      weekNumber: 2,
      isBookable: true,
      dayInWeek: 4,
    },
    {
      dayNumber: 12,
      weekNumber: 2,
      isBookable: true,
      dayInWeek: 5,
    },
    {
      dayNumber: 13,
      weekNumber: 2,
      isBookable: true,
      dayInWeek: 6,
    },
    {
      dayNumber: 14,
      weekNumber: 2,
      isBookable: true,
      dayInWeek: 7,
    },
    {
      dayNumber: 15,
      weekNumber: 3,
      isBookable: true,
      dayInWeek: 1,
    },
    {
      dayNumber: 16,
      weekNumber: 3,
      isBookable: true,
      dayInWeek: 2,
    },
    {
      dayNumber: 17,
      weekNumber: 3,
      isBookable: true,
      dayInWeek: 3,
    },
    {
      dayNumber: 18,
      weekNumber: 3,
      isBookable: true,
      dayInWeek: 4,
    },
    {
      dayNumber: 19,
      weekNumber: 3,
      isBookable: true,
      dayInWeek: 5,
    },
    {
      dayNumber: 20,
      weekNumber: 3,
      isBookable: true,
      dayInWeek: 6,
    },
    {
      dayNumber: 21,
      weekNumber: 3,
      isBookable: true,
      dayInWeek: 7,
    },
    {
      dayNumber: 22,
      weekNumber: 4,
      isBookable: true,
      dayInWeek: 1,
    },
    {
      dayNumber: 23,
      weekNumber: 4,
      isBookable: true,
      dayInWeek: 2,
    },
    {
      dayNumber: 24,
      weekNumber: 4,
      isBookable: true,
      dayInWeek: 3,
    },
    {
      dayNumber: 25,
      weekNumber: 4,
      isBookable: true,
      dayInWeek: 4,
    },
    {
      dayNumber: 26,
      weekNumber: 4,
      isBookable: true,
      dayInWeek: 5,
    },
    {
      dayNumber: 27,
      weekNumber: 4,
      isBookable: true,
      dayInWeek: 6,
    },
    {
      dayNumber: 28,
      weekNumber: 4,
      isBookable: true,
      dayInWeek: 7,
    },
    {
      dayNumber: 29,
      weekNumber: 5,
      isBookable: true,
      dayInWeek: 1,
    },
    {
      dayNumber: 30,
      weekNumber: 5,
      isBookable: true,
      dayInWeek: 2,
    },
    {
      dayNumber: 31,
      weekNumber: 5,
      isBookable: true,
      dayInWeek: 3,
    },
  ];

  febDays = [
    {
      dayNumber: 3,
      weekNumber: 1,
      isBookable: true,
      dayInWeek: 3,
    },
    {
      dayNumber: 4,
      weekNumber: 1,
      isBookable: true,
      dayInWeek: 4,
    },
    {
      dayNumber: 5,
      weekNumber: 1,
      isBookable: true,
      dayInWeek: 5,
    },
    {
      dayNumber: 6,
      weekNumber: 1,
      isBookable: true,
      dayInWeek: 6,
    },
    {
      dayNumber: 7,
      weekNumber: 1,
      isBookable: true,
      dayInWeek: 7,
    },
    {
      dayNumber: 8,
      weekNumber: 2,
      isBookable: true,
      dayInWeek: 1,
    },
    {
      dayNumber: 9,
      weekNumber: 2,
      isBookable: true,
      dayInWeek: 2,
    },
    {
      dayNumber: 10,
      weekNumber: 2,
      isBookable: true,
      dayInWeek: 3,
    },
    {
      dayNumber: 11,
      weekNumber: 2,
      isBookable: true,
      dayInWeek: 4,
    },
    {
      dayNumber: 12,
      weekNumber: 2,
      isBookable: true,
      dayInWeek: 5,
    },
    {
      dayNumber: 13,
      weekNumber: 2,
      isBookable: true,
      dayInWeek: 6,
    },
    {
      dayNumber: 14,
      weekNumber: 2,
      isBookable: true,
      dayInWeek: 7,
    },
    {
      dayNumber: 15,
      weekNumber: 3,
      isBookable: true,
      dayInWeek: 1,
    },
    {
      dayNumber: 16,
      weekNumber: 3,
      isBookable: true,
      dayInWeek: 2,
    },
    {
      dayNumber: 17,
      weekNumber: 3,
      isBookable: true,
      dayInWeek: 3,
    },
    {
      dayNumber: 18,
      weekNumber: 3,
      isBookable: true,
      dayInWeek: 4,
    },
    {
      dayNumber: 19,
      weekNumber: 3,
      isBookable: true,
      dayInWeek: 5,
    },
    {
      dayNumber: 20,
      weekNumber: 3,
      isBookable: true,
      dayInWeek: 6,
    },
    {
      dayNumber: 21,
      weekNumber: 3,
      isBookable: true,
      dayInWeek: 7,
    },
    {
      dayNumber: 22,
      weekNumber: 4,
      isBookable: true,
      dayInWeek: 1,
    },
    {
      dayNumber: 23,
      weekNumber: 4,
      isBookable: true,
      dayInWeek: 2,
    },
    {
      dayNumber: 24,
      weekNumber: 4,
      isBookable: true,
      dayInWeek: 3,
    },
    {
      dayNumber: 25,
      weekNumber: 4,
      isBookable: true,
      dayInWeek: 4,
    },
    {
      dayNumber: 26,
      weekNumber: 4,
      isBookable: true,
      dayInWeek: 5,
    },
    {
      dayNumber: 27,
      weekNumber: 4,
      isBookable: true,
      dayInWeek: 6,
    },
    {
      dayNumber: 28,
      weekNumber: 4,
      isBookable: true,
      dayInWeek: 7,
    },
  ];
  email: String | undefined;
  // model = {
  //   emailControl: ''
  // }

  onSubmit() {
    console.log(this.email);
  }

  getWeeks(): number[] {
    return Array.from(new Set(this.marchDays.map((day) => day.weekNumber)));
  }

  getDaysInWeek(weekNumber: number): Day[] {
    return this.marchDays.filter((day) => day.weekNumber === weekNumber);
  }

  bookDay(day: number) {
    alert(`You have booked day ${day}`);
    // day.isBookable = !day.isBookable;
  }
}
