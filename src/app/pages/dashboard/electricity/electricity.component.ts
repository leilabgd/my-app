import { Component, OnDestroy } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { ElectricityService } from '../../../@core/data/electricity.service';
import { range } from 'rxjs/observable/range';

@Component({
  selector: 'ngx-electricity',
  styleUrls: ['./electricity.component.scss'],
  templateUrl: './electricity.component.html',
})

export class ElectricityComponent implements OnDestroy {


  data: Array<any>;
  years = ['2016', '2017', '2018'];
  months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
  month = this.months[new Date().getUTCMonth()];
 
  // x = new Date(new Date().getUTCFullYear(), new Date().getMonth() + 1, 0).getDate(); ==> renvoie le nbr de jour d'un mois spécifique

  day = new Date().getDate();
  days = [];
  year = new Date().getUTCFullYear();

  currentTheme: string;
  themeSubscription: any;

  constructor(private eService: ElectricityService, private themeService: NbThemeService) {
    this.data = this.eService.getData();

    this.themeSubscription = this.themeService.getJsTheme().subscribe(theme => {
      this.currentTheme = theme.name;
      this.days = [];
     
      for (let i = 1; i <= 31; i++) {
        this.days.push(i);
      }
    });

  }

  ngOnDestroy() {
    this.themeSubscription.unsubscribe();
  }
}
