import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {F2Axis} from './f2-axis';
import {F2Chart} from './f2-chart';
import {F2Source} from './f2-source';
import {F2Geometry} from './f2-geometry';
import {F2Scale} from './f2-scale';
import {F2CoordPolar} from './f2-coord-polar';
import {F2CoordRect} from './f2-coord-rect';
import {F2Legend} from './f2-legend';
import {F2Tooltip} from './f2-tooltip';
import {F2GeomPoint} from './f2-geom-point';
import {F2Guide} from './f2-guide';
import {F2Animate} from './f2-animate';
import {F2Interaction} from './f2-interaction';
import {F2PieLabel} from './f2-pie-label';
import {F2ScrollBar} from './f2-scroll-bar';

import * as F2 from '@antv/f2/lib/core';
import * as Geom from '@antv/f2/lib/geom/';
import * as CoordPolar from '@antv/f2/lib/coord/polar';
import * as AxisCircle from '@antv/f2/lib/component/axis/circle';
import * as Adjust from '@antv/f2/lib/geom/adjust/';
import * as ScaleTimeCat from '@antv/f2/lib/scale/time-cat';
import * as Tooltip from '@antv/f2/lib/plugin/tooltip';
import * as Legend from '@antv/f2/lib/plugin/legend';
import * as Guide from '@antv/f2/lib/component/guide';
import * as Guide2 from '@antv/f2/lib/plugin/guide';
import * as Animation from '@antv/f2/lib/animation/detail';
import * as Interaction from '@antv/f2/lib/interaction/';
import * as ScrollBar from '@antv/f2/lib/plugin/scroll-bar';

F2.Chart.plugins.register([
  Geom, // geom类型
  CoordPolar, // 坐标系类型-极坐标
  AxisCircle, // Axis坐标轴类型-弧长坐标轴（用于极坐标）
  Adjust, // adjust数据调整类型
  ScaleTimeCat, // scale度量类型-timeCat
  Animation, // 动画-精细的动画模块（包含入场、更新以及销毁动画）
  Guide, // 辅助元素模块-guide 组件
  Guide2, // 辅助元素模块-guide 插件
  Tooltip, // 提示信息模块
  Legend, // 图例
  Interaction, // 交互行为引入
  ScrollBar // 用于辅助 pan 和 pin 两种交互行为，以显示当前图表的数据范围
]);

const F2Component = [
  F2Chart,
  F2Source,
  F2Geometry,
  F2GeomPoint,
  F2Scale,
  F2CoordPolar,
  F2CoordRect,
  F2Legend,
  F2Axis,
  F2Tooltip,
  F2Guide,
  F2Animate,
  F2Interaction,
  F2PieLabel,
  F2ScrollBar,
];

@NgModule({
  imports: [CommonModule],
  declarations: [...F2Component],
  exports: [...F2Component],
})
export class F2Module {
}
