import { NgModule } from '@angular/core';
import { NgxEchartsModule } from 'ngx-echarts';
import { ThemeModule } from '../../@theme/theme.module';
import { DashboardComponent } from './dashboard.component';
import { ElectricityChartComponent } from './electricity/electricity-chart/electricity-chart.component';
import { StatusCardComponent } from './status-card/status-card.component';
import { ElectricityComponent } from './electricity/electricity.component';
import { ContactsComponent } from './contacts/contacts.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbdModalBasic} from './electricity/modal-basic/modal-basic';
import { NgbdDatepickerPopup } from './electricity/datepicker-popup/datepicker-popup';
import { NgbdModalBuy } from './electricity/modal-buy/modal-buy';

@NgModule({
  imports: [
    ThemeModule,
    NgxEchartsModule,
  ],
  declarations: [
    DashboardComponent,
    ElectricityComponent,
    ElectricityChartComponent,
    StatusCardComponent,
    ContactsComponent,
    NgbdModalBasic,
    NgbdDatepickerPopup,
    NgbdModalBuy,
    
   
  ],
})
export class DashboardModule { }
