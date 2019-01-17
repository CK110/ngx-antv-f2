import {Component, Input} from '@angular/core';


export interface RectConfig {
  /**
   * 坐标系的起始点，F2 图表的坐标系原点位于左下角
   */
  start?: any;

  /**
   * 坐标系右上角的画布坐标
   */
  end?: any;

  /**
   * 是否发生转置，true 表示发生了转置
   */
  transposed?: boolean;

  /**
   * 是否是直角坐标系，直角坐标系下为 true
   */
  isRect?: boolean;
}


/**
 * @author CK
 * @date 2019/1/13
 * @Description: 笛卡尔坐标系
 */
@Component({
  selector: 'f2-coord-rect',
  template: ''
})
export class F2CoordRect {

  @Input() config: RectConfig;

  setChartCoord(chart: any) {
    if (this.config) {
      chart.coord('rect', this.config);
    } else {
      chart.coord('rect');
    }
  }

}
