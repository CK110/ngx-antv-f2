import {Component, Input} from '@angular/core';

export interface PolarConfig {

  /**
   * 极坐标的起始角度，弧度制
   */
  startAngle?: number;

  /**
   * 极坐标的结束角度，弧度制
   */
  endAngle?: number;

  /**
   * 绘制环图时，设置内部空心半径，相对值，0 至 1 范围
   */
  innerRadius?: number;

  /**
   * 设置圆的半径，相对值，0 至 1 范围
   */
  radius?: number;

  /**
   * 判断是否是极坐标，极坐标下为 true
   */
  isPolar?: boolean;

  /**
   * 是否发生转置，true 表示发生了转置
   */
  transposed?: boolean;

  /**
   * 极坐标的圆心所在的画布坐标
   */
  center?: any;

  /**
   * 极坐标的半径值
   */
  circleRadius?: number;

}

/**
 * @author CK
 * @date 2019/1/13
 * @Description: 极坐标系
 */
@Component({
  selector: 'f2-coord-polar',
  template: ''
})
export class F2CoordPolar {

  @Input() config: PolarConfig;


  setChartCoord(chart: any) {
    if (this.config) {
      chart.coord('polar', this.config);
    } else {
      chart.coord('polar');
    }
  }

}
