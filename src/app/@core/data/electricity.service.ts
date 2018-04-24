import { Injectable } from '@angular/core';

@Injectable()
export class ElectricityService {

  private data = [
    {
      title: 'APR',
      days: [
        { day: '20', delta: '0.97%', down: false,  cost: '97' },
        { day: '19', delta: '1.83%', down: true,  cost: '95' },
        { day: '18', delta: '0.64%', down: true,  cost: '94' },
        { day: '17', delta: '2.17%', down: false,  cost: '98' },
        { day: '16', delta: '1.32%', down: true,  cost: '96' },
        { day: '15', delta: '0.05%', down: true,  cost: '96' },
        { day: '14', delta: '1.39%', down: false,  cost: '97' },
        { day: '13', delta: '0.73%', down: true,  cost: '95' },
        { day: '12', delta: '2.61%', down: true,  cost: '92' },
        { day: '11', delta: '0.16%', down: true,  cost: '92' },
        { day: '10', delta: '1.71%', down: true,  cost: '89' },
        { day: '9', delta: '0.37%', down: false,  cost: '91' },
      ],
    },
  ];

  constructor() {
  }

  // TODO: observables
  getData() {
    return this.data;
  }
}
