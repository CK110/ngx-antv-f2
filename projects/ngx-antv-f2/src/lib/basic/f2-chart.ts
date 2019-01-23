import {
  AfterViewInit,
  Component,
  ContentChild, ContentChildren, EventEmitter, HostListener,
  Input,
  OnDestroy, Output, QueryList,
  ViewChild
} from '@angular/core';
import * as F2 from '@antv/f2/lib/core';
import {F2Source} from './f2-source';
import {F2Geometry} from './f2-geometry';
import {F2CoordPolar} from './f2-coord-polar';
import {F2Legend} from './f2-legend';
import {F2CoordRect} from './f2-coord-rect';
import {F2Axis} from './f2-axis';
import {F2Tooltip} from './f2-tooltip';
import {F2Guide} from './f2-guide';
import {F2Animate} from './f2-animate';
import {F2Interaction} from './f2-interaction';
import {F2PieLabel} from './f2-pie-label';
import {F2ScrollBar} from './f2-scroll-bar';

declare var window: any;

export interface ChartConfig {

  width?: number;

  height?: number;

  /**
   * 图表绘图区域和画布边框的间距，用于显示坐标轴文本、图例
   */
  padding?: number | string | any[];

  /**
   * 图表画布区域四边的预留边距
   */
  appendPadding?: number | any[];

  /**
   * 屏幕画布的像素比
   */
  pixelRatio?: number;

  /**
   * 为 chart 实例注册插件
   */
  plugins?: object | any[];

  /**
   * 是否关闭 chart 的动画
   */
  animate?: boolean;

  /**
   * 用于多 Y 轴的情况下，统一 Y 轴的数值范围
   */
  syncY?: boolean;
}

@Component({
  selector: 'f2-chart',
  template: `
    <div class="chart-wrapper">
      <canvas #canvas></canvas>
      <ng-content></ng-content>
    </div>
  `
})
export class F2Chart implements AfterViewInit, OnDestroy {

  @Input() config: ChartConfig = {};

  /**
   * 是否自定义渲染
   */
  @Input() preventRender: boolean;

  /**
   * 自定义渲染事件
   */
  @Output() customRender = new EventEmitter<any>();

  chart: any;
  @ViewChild('canvas') canvas;
  @ContentChild(F2Source) source: F2Source;
  @ContentChildren(F2Geometry) geometryList: QueryList<F2Geometry>;
  @ContentChildren(F2Axis) axisList: QueryList<F2Axis>;
  @ContentChild(F2CoordRect) coordRect: F2CoordRect;
  @ContentChild(F2CoordPolar) coordPolar: F2CoordPolar;
  @ContentChild(F2Legend) legend: F2Legend;
  @ContentChild(F2Tooltip) tooltip: F2Tooltip;
  @ContentChild(F2Guide) guide: F2Guide;
  @ContentChild(F2Animate) animate: F2Animate;
  @ContentChild(F2Interaction) interaction: F2Interaction;
  @ContentChild(F2PieLabel) pieLabel: F2PieLabel;
  @ContentChild(F2ScrollBar) scrollBar: F2ScrollBar;

  constructor() {

  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    // this.render();
  }

  ngAfterViewInit(): void {
    this.render();

    if (this.source) {
      this.source.dataChange.subscribe((changes) => {
        console.log(changes);
      });
    }
  }

  ngOnDestroy(): void {
    this.destroy();
  }

  render() {
    const defaultConfig = {
      el: this.canvas.nativeElement,
      width: window.innerWidth,
      height: window.innerWidth > window.innerHeight ? (window.innerHeight - 54) : window.innerWidth * 0.707,
      pixelRatio: window.devicePixelRatio
    };

    // 回传chart,自定义渲染
    if (this.preventRender === true) {
      this.customRender.emit({
        defaultConfig: defaultConfig,
        F2: F2
      });
      return;
    }

    const chart = new F2.Chart(Object.assign(this.config, defaultConfig));

    if (this.source && this.source.data) {
      this.source.setChartSource(chart);
    } else {
      return;
    }

    if (this.legend) {
      this.legend.setChartLegend(chart);
    }

    // Coordinate
    if (this.coordRect) {
      this.coordRect.setChartCoord(chart);
    }
    if (this.coordPolar) {
      this.coordPolar.setChartCoord(chart);
    }

    // axis
    if (this.axisList && this.axisList.length > 0) {
      this.axisList.forEach((axis) => {
        axis.setChartAxis(chart);
      });
    }

    // tooltip
    if (this.tooltip) {
      this.tooltip.setChartTooltip(chart);
    }

    // geometry
    if (this.geometryList && this.geometryList.length > 0) {
      this.geometryList.forEach((geometry) => {
        geometry.setChartGeometry(chart);
      });
    }

    // guide
    if (this.guide) {
      this.guide.setChartGuide(chart);
    }

    // animate
    if (this.animate) {
      this.animate.setChartAnimate(chart);
    }

    // pieLabel
    if (this.pieLabel) {
      this.pieLabel.setChartPieLabel(chart);
    }

    // scrollBar
    if (this.scrollBar) {
      this.scrollBar.setChartScrollBar(chart);
    }

    chart.render();

    // interaction
    if (this.interaction) {
      this.interaction.setChartInteraction(chart);
    }

    this.chart = chart;
  }

  repaint() {
    this.chart.repaint();
  }

  rerender() {
    this.destroy();
    this.render();
  }

  destroy() {
    if (this.chart) {
      this.chart.destroy();
    }
  }

}
