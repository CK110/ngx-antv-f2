import {Component, Input} from '@angular/core';

/**
 * @author CK
 * @date 2019/1/13
 * @Description: 配置坐标轴
 */
@Component({
  selector: 'f2-axis',
  template: ''
})
export class F2Axis {

  /**
   * chart.axis(false)
   */
  @Input() disabled: boolean;


  /**
   * chart.axis(field, false)
   * chart.axis(field, config)
   */
  @Input() option: [string, object];


  setChartAxis(chart: any) {
    if (this.disabled === true) {
      chart.axis(false);
    } else {
      chart.axis(this.option[0], this.option[1]);
    }
  }

}
