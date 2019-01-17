import {Component, Input} from '@angular/core';

/**
 * @author CK
 * @date 2019/1/17
 * @Description: 交互机制
 */
@Component({
  selector: 'f2-interaction',
  template: ``
})
export class F2Interaction {

  @Input() option: any[];


  setChartInteraction(chart: any) {
    chart.interaction(this.option[0], this.option[1]);
  }

}
