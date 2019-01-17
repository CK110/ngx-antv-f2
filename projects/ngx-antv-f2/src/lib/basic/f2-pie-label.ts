import {Component, Input} from '@angular/core';

export interface PieLabelConfig {

  anchorOffset: number; // 锚点的偏移量
  inflectionOffset: number; // 拐点的偏移量
  sidePadding: number; // 文本距离画布左右两边的距离
  lineHeight: number; // 文本的最大行高
  adjustOffset: number; // 发生调整时的偏移量
  skipOverlapLabels: boolean; // 是否不展示重叠的文本
  lineStyle: object; // 连接线的样式
  anchorStyle: object; // 锚点的样式
  label1: Function; // label1 文本内容及其样式，Function 类型，回调函数
  label2: Function; // label2 文本内容及其样式，Function 类型，回调函数
  onClick: Function; // 点击行为，回调函数
  triggerOn: string; // 点击行为触发的事件类型
  activeShape: number; // 当有图形被选中的时候，是否激活图形
  activeStyle: object; // 设置激活图形的样式

}

/**
 * @author CK
 * @date 2019/1/17
 * @Description:
 */
@Component({
  selector: 'f2-pie-label',
  template: ''
})
export class F2PieLabel {

  @Input() config: any;

  setChartPieLabel(chart: any) {
    chart.pieLabel(this.config);
  }
}
