import {Component, Input} from '@angular/core';

/**
 * @author CK
 * @date 2019/1/13
 * @Description: 配置图例
 */
@Component({
  selector: 'f2-legend',
  template: ''
})
export class F2Legend {

  @Input() config: boolean | object | [string, any];


  setChartLegend(chart: any) {
    chart.legend(this.config);
  }
}
