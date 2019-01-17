import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {F2Module} from '../../projects/ngx-antv-f2/src/lib/basic/f2.module';
import { F2PieBasicComponent } from './pie/f2-pie-basic/f2-pie-basic.component';
import { F2PieRingComponent } from './pie/f2-pie-ring/f2-pie-ring.component';
import { F2LineBasicComponent } from './line/f2-line-basic/f2-line-basic.component';
import { F2LineWithPointComponent } from './line/f2-line-with-point/f2-line-with-point.component';
import { SelectionForPieChartComponent } from './interaction/selection-for-pie-chart/selection-for-pie-chart.component';
import { CustomRenderPieBasicComponent } from './custom/custom-render-pie-basic/custom-render-pie-basic.component';

@NgModule({
  declarations: [
    AppComponent,
    F2PieBasicComponent,
    F2PieRingComponent,
    F2LineBasicComponent,
    F2LineWithPointComponent,
    SelectionForPieChartComponent,
    CustomRenderPieBasicComponent
  ],
  imports: [
    BrowserModule,
    F2Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
