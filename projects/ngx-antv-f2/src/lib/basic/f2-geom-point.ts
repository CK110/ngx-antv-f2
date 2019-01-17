import {Component, Input} from '@angular/core';

/**
 * @author CK
 * @date 2019/1/16
 * @Description:
 */
@Component({
  selector: 'f2-geom-point',
  template: ''
})
export class F2GeomPoint {

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
}
