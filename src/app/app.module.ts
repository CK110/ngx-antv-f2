import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {F2Module} from '../../projects/ngx-antv-f2/src/lib/basic/f2.module';
import {F2PieBasicComponent} from './pie/f2-pie-basic/f2-pie-basic.component';
import {F2PieRingComponent} from './pie/f2-pie-ring/f2-pie-ring.component';
import {F2LineBasicComponent} from './line/f2-line-basic/f2-line-basic.component';
import {F2LineWithPointComponent} from './line/f2-line-with-point/f2-line-with-point.component';
import {SelectionForPieChartComponent} from './interaction/selection-for-pie-chart/selection-for-pie-chart.component';
import {CustomRenderPieBasicComponent} from './custom/custom-render-pie-basic/custom-render-pie-basic.component';
import {SimpleGaugeComponent} from './gallery/simple-gauge/simple-gauge.component';
import {SimpleGaugeCustomComponent} from './gallery/simple-gauge-custom/simple-gauge-custom.component';

// import * as Geom from '@antv/f2/lib/geom/';
// import * as CoordPolar from '@antv/f2/lib/coord/polar';
// import * as AxisCircle from '@antv/f2/lib/component/axis/circle';
// import * as Adjust from '@antv/f2/lib/geom/adjust/';
// import * as ScaleTimeCat from '@antv/f2/lib/scale/time-cat';
// import * as Tooltip from '@antv/f2/lib/plugin/tooltip';
// import * as Legend from '@antv/f2/lib/plugin/legend';
// import * as GuideComponent from '@antv/f2/lib/component/guide';
// import * as GuidePlugin from '@antv/f2/lib/plugin/guide';
// import * as Animation from '@antv/f2/lib/animation/detail';
// import * as Interaction from '@antv/f2/lib/interaction/';
// import * as ScrollBar from '@antv/f2/lib/plugin/scroll-bar';

// F2.Chart.plugins.register([
//   Geom, // geom类型
//   CoordPolar, // 坐标系类型-极坐标
//   AxisCircle, // Axis坐标轴类型-弧长坐标轴（用于极坐标）
//   Adjust, // adjust数据调整类型
//   ScaleTimeCat, // scale度量类型-timeCat
//   Animation, // 动画-精细的动画模块（包含入场、更新以及销毁动画）
//   GuideComponent, // 辅助元素模块-guide 组件
//   GuidePlugin, // 辅助元素模块-guide 插件
//   Tooltip, // 提示信息模块
//   Legend, // 图例
//   Interaction, // 交互行为引入
//   ScrollBar // 用于辅助 pan 和 pin 两种交互行为，以显示当前图表的数据范围
// ]);

// export function registerShape(F2: any) {
//   console.log(F2);
//   const Shape = F2.Shape;
//   const G = F2.G;
//   const Util = F2.Util;
//   const Global = F2.Global;
//   const Vector2 = G.Vector2;
//
//   // 极坐标下带圆角的柱子，只对极坐标生效
//   Shape.registerShape('interval', 'polar-tick', {
//     draw: function draw(cfg, container) {
//       console.log('222');
//       const points = this.parsePoints(cfg.points);
//       const style = Util.mix({
//         stroke: cfg.color
//       }, Global.shape.interval, cfg.style);
//
//       let newPoints = points.slice(0);
//       if (this._coord.transposed) {
//         newPoints = [points[0], points[3], points[2], points[1]];
//       }
//
//       const center = cfg.center;
//       const x = center.x,
//         y = center.y;
//
//
//       const v = [1, 0];
//       const v0 = [newPoints[0].x - x, newPoints[0].y - y];
//       const v1 = [newPoints[1].x - x, newPoints[1].y - y];
//       const v2 = [newPoints[2].x - x, newPoints[2].y - y];
//
//       let startAngle = Vector2.angleTo(v, v1);
//       let endAngle = Vector2.angleTo(v, v2);
//       const r0 = Vector2.length(v0);
//       const r = Vector2.length(v1);
//
//       if (startAngle >= 1.5 * Math.PI) {
//         startAngle = startAngle - 2 * Math.PI;
//       }
//
//       if (endAngle >= 1.5 * Math.PI) {
//         endAngle = endAngle - 2 * Math.PI;
//       }
//
//       const lineWidth = r - r0;
//       const newRadius = r - lineWidth / 2;
//
//       return container.addShape('Arc', {
//         className: 'interval',
//         attrs: Util.mix({
//           x: x,
//           y: y,
//           startAngle: startAngle,
//           endAngle: endAngle,
//           r: newRadius,
//           lineWidth: lineWidth,
//           lineCap: 'round'
//         }, style)
//       });
//     }
//   });
// }

@NgModule({
  declarations: [
    AppComponent,
    F2PieBasicComponent,
    F2PieRingComponent,
    F2LineBasicComponent,
    F2LineWithPointComponent,
    SelectionForPieChartComponent,
    CustomRenderPieBasicComponent,
    SimpleGaugeComponent,
    SimpleGaugeCustomComponent
  ],
  imports: [
    BrowserModule,
    F2Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
