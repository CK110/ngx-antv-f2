import {Component, Input} from '@angular/core';

/**
 * @author CK
 * @date 2019/1/13
 * @Description:
 */
@Component({
  selector: 'f2-geometry',
  template: ''
})
export class F2Geometry {

  /**
   * 几何类型
   *
   * 'point', 'path', 'line', 'area', 'interval', 'polygon', 'schema',
   */
  @Input() type: string;

  /**
   * {
   *   generatePoints: {Boolean},
   *   sortable: {Boolean},
   *   startOnZero: {Boolean},
   *   connectNulls: {Boolean}
   *  }
   */
  @Input() config: object;

  /**
   * 将数据值映射到图形的位置上
   */
  @Input() position: string | string[];

  /**
   * 将数据值映射到图形的颜色上
   */
  @Input() color: string | [string, string | any[] | Function];

  @Input() shape: any;

  @Input() size: any;

  @Input() adjust: any;

  @Input() style: any;

  @Input() animate: any;

  setChartGeometry(chart: any) {
    let geom;
    const geomType = this.type;
    if (geomType === 'point') {
      geom = chart.point();
    } else if (geomType === 'path') {
      geom = chart.path();
    } else if (geomType === 'line') {
      geom = chart.line();
    } else if (geomType === 'area') {
      geom = chart.area();
    } else if (geomType === 'interval') {
      geom = chart.interval();
    } else if (geomType === 'polygon') {
      geom = chart.polygon();
    } else if (geomType === 'schema') {
      geom = chart.schema();
    }
    if (this.position) {
      geom.position(this.position);
    }
    if (this.color) {
      if (Array.isArray(this.color)) {
        geom.color(this.color[0], this.color[1]);
      } else {
        geom.color(this.color);
      }
    }
    if (this.shape) {
      geom.shape(this.shape);
    }

    if (this.size) {
      geom.size(this.size);
    }

    if (this.adjust) {
      geom.adjust(this.adjust);
    }

    if (this.style) {
      geom.style(this.style);
    }

    if (this.animate !== undefined) {
      geom.animate(this.animate);
    }
  }

}
