import {Component, Input} from '@angular/core';

/**
 * @author CK
 * @date 2019/1/17
 * @Description: 绘制图表的辅助元素
 */
@Component({
  selector: 'f2-guide',
  template: ''
})
export class F2Guide {

  /**
   * line,text,point,tag,rect,html,arc,regionFilter
   */
  @Input() type: string;

  @Input() config: any;


  setChartGuide(chart: any) {
    if (this.type === 'line') {
      chart.guide().line(this.config);
    } else if (this.type === 'text') {
      chart.guide().text(this.config);
    } else if (this.type === 'point') {
      chart.guide().point(this.config);
    } else if (this.type === 'tag') {
      chart.guide().tag(this.config);
    } else if (this.type === 'rect') {
      chart.guide().rect(this.config);
    } else if (this.type === 'html') {
      chart.guide().html(this.config);
    } else if (this.type === 'arc') {
      chart.guide().arc(this.config);
    } else if (this.type === 'regionFilter') {
      chart.guide().regionFilter(this.config);
    }
  }


}
