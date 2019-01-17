import {Component, Input} from '@angular/core';

/**
 * @author CK
 * @date 2019/1/17
 * @Description:
 */
@Component({
  selector: 'f2-scroll-bar',
  template: ''
})
export class F2ScrollBar {

  @Input() config: any;


  setChartScrollBar(chart: any) {
    chart.scrollBar(this.config);
  }

}
