import {Component, Input} from '@angular/core';

/**
 * @author CK
 * @date 2019/1/13
 * @Description:
 *  1.chart.tooltip(false);
 *  2.chart.tooltip({...});
 */
@Component({
  selector: 'f2-tooltip',
  template: ''
})
export class F2Tooltip {

  /**
   * chart.tooltip(false)
   */
  @Input() disabled: boolean;

  /**
   * chart.tooltip({...})
   */
  @Input() config: any;

  setChartTooltip(chart: any) {
    if (this.disabled === true) {
      chart.tooltip(false);
    } else {
      chart.tooltip(this.config);
    }
    return chart;
  }

}
