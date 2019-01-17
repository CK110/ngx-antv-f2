import {Component, Input} from '@angular/core';

/**
 * @author CK
 * @date 2019/1/17
 * @Description:
 */
@Component({
  selector: 'f2-animate',
  template: ``
})
export class F2Animate {

  /**
   * 关闭图表动画
   * chart.animate(false)
   */
  @Input() disabled: boolean;


  /**
   * 对 chart 上的图形元素进行具体的动画配置
   *
   * chart.animate(cfg)
   */
  @Input() config: any;


  setChartAnimate(chart: any) {
    if (this.disabled === true) {
      chart.animate(false);
    } else {
      chart.animate(this.config);
    }
  }

}
