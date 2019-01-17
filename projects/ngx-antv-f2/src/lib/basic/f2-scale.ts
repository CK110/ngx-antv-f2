import {Component, Input} from '@angular/core';


export interface ColDef {
  /**
   * 通用属性
   */
  type?: string;
  formatter?: Function;
  range?: number[];
  alias?: string;
  tickCount?: string;
  ticks?: string;

  /**
   * 其他属性
   */
  [key: string]: any;
}

/**
 * @author CK
 * @date 2019/1/13
 * @Description: 为数据字段进行列定义
 */
@Component({
  selector: 'f2-scale',
  template: ``
})
export class F2Scale {

  /**
   * 设置列定义的数据字段名
   */
  @Input() field: string;


  @Input() colDef: ColDef;
}
