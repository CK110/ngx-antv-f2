import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';

/**
 * @author CK
 * @date 2019/1/13
 * @Description: 装载数据
 */
@Component({
  selector: 'f2-source',
  template: ''
})
export class F2Source implements OnChanges {

  /**
   * 可视化数据
   */
  @Input() data: any[];

  /**
   * 可选，列定义配置（各个字段的度量配置）
   */
  @Input() colDefs: object;

  @Output() dataChange = new EventEmitter<any>();

  ngOnChanges(changes: SimpleChanges) {
    if (changes.data) {
      this.dataChange.next(true);
    }
  }

  setChartSource(chart: any) {
    chart.source(this.data, this.colDefs);
  }
}
