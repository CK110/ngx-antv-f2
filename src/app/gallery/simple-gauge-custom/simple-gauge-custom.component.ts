import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-simple-gauge-custom',
  templateUrl: './simple-gauge-custom.component.html',
  styleUrls: ['./simple-gauge-custom.component.css']
})
export class SimpleGaugeCustomComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  customRender({F2, defaultConfig}) {
    const Shape = F2.Shape;
    const G = F2.G;
    const Util = F2.Util;
    const Global = F2.Global;
    const Vector2 = G.Vector2;

    // 极坐标下带圆角的柱子，只对极坐标生效
    // Shape.registerShape('interval', 'polar-tick', {
    //   draw: function draw(cfg, container) {
    //     const points = this.parsePoints(cfg.points);
    //     const style = Util.mix({
    //       stroke: cfg.color
    //     }, Global.shape.interval, cfg.style);
    //
    //     let newPoints = points.slice(0);
    //     if (this._coord.transposed) {
    //       newPoints = [points[0], points[3], points[2], points[1]];
    //     }
    //
    //     const center = cfg.center;
    //     const x = center.x,
    //       y = center.y;
    //
    //
    //     const v = [1, 0];
    //     const v0 = [newPoints[0].x - x, newPoints[0].y - y];
    //     const v1 = [newPoints[1].x - x, newPoints[1].y - y];
    //     const v2 = [newPoints[2].x - x, newPoints[2].y - y];
    //
    //     let startAngle = Vector2.angleTo(v, v1);
    //     let endAngle = Vector2.angleTo(v, v2);
    //     const r0 = Vector2.length(v0);
    //     const r = Vector2.length(v1);
    //
    //     if (startAngle >= 1.5 * Math.PI) {
    //       startAngle = startAngle - 2 * Math.PI;
    //     }
    //
    //     if (endAngle >= 1.5 * Math.PI) {
    //       endAngle = endAngle - 2 * Math.PI;
    //     }
    //
    //     const lineWidth = r - r0;
    //     const newRadius = r - lineWidth / 2;
    //
    //     return container.addShape('Arc', {
    //       className: 'interval',
    //       attrs: Util.mix({
    //         x: x,
    //         y: y,
    //         startAngle: startAngle,
    //         endAngle: endAngle,
    //         r: newRadius,
    //         lineWidth: lineWidth,
    //         lineCap: 'round'
    //       }, style)
    //     });
    //   }
    // });

    const data = [{
      const: 'a',
      actual: 75,
      expect: 100
    }];

    const chart = new F2.Chart(Object.assign({
      padding: [0, 30, 60],
    }, defaultConfig));

    chart.source(data, {
      actual: {
        max: 100,
        min: 0,
        nice: false
      }
    });
    chart.coord('polar', {
      transposed: true,
      innerRadius: 0.8,
      // startAngle: -Math.PI,
      // endAngle: 0
      startAngle: -1.25 * Math.PI,
      endAngle: 0.25 * Math.PI
    });
    chart.axis(false);
    chart.interval().position('const*expect').shape('polar-tick').size(10).color('#f2f4f7').animate(false); // 背景条
    chart.interval().position('const*actual').shape('polar-tick').size(10).color('rgb(33, 150, 243)').animate({
      appear: {
        duration: 1100,
        easing: 'linear',
        animation: (shape, animateCfg) => {
          const startAngle = shape.attr('startAngle');
          let endAngle = shape.attr('endAngle');
          if (startAngle > endAngle) {
            // -Math.PI/2 到 0
            endAngle += Math.PI * 2;
          }
          shape.attr('endAngle', startAngle);
          shape.animate().to(Util.mix({
            attrs: {
              endAngle: endAngle
            }
          }, animateCfg)).onUpdate((frame: number) => {
            console.log(frame * 75);
            document.getElementById('text').innerHTML = Math.round(frame * 75) + '%';
          });
        }
      }
    });

    // 实际进度
    chart.guide().html({
      position: ['50%', '50%'],
      html: `<div style="width: 120px;color: #595a5c;white-space: nowrap;text-align:center;">
              <p style="font-size: 18px;margin:0;">本月进度</p>
              <p id="text" style="font-size: 48px;margin:0;font-weight: bold;">0</p>
            </div>`
    });
    chart.render();

  }

}
