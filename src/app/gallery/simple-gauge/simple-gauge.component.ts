import {Component, OnInit} from '@angular/core';
import * as F2 from '@antv/f2/lib/core';

@Component({
  selector: 'app-simple-gauge',
  templateUrl: './simple-gauge.component.html',
  styleUrls: ['./simple-gauge.component.css']
})
export class SimpleGaugeComponent implements OnInit {

  data = [{
    const: 'a',
    actual: 75,
    expect: 100
  }];

  f2Config = {
    chart: {
      config: {
        padding: [0],
        // height: 100,
        // width: 100,
      }
    },
    source: {
      colDefs: {
        actual: {
          max: 100,
          min: 0,
          nice: false
        }
      }
    },
    polar: {
      config: {
        transposed: true,
        innerRadius: 0.8,
        startAngle: -1.25 * Math.PI,
        endAngle: 0.25 * Math.PI
      }
    },
    geometry: {
      animate: () => {
        return {
          appear: {
            duration: 1100,
            easing: 'linear',
            animation: (shape, animateCfg) => {
              const startAngle = shape.attr('startAngle');
              let endAngle = shape.attr('endAngle');
              if (startAngle > endAngle) {
                endAngle += Math.PI * 2; // -Math.PI/2 到 0
              }
              shape.attr('endAngle', startAngle);
              shape.animate().to(F2.Util.mix({
                attrs: {
                  endAngle: endAngle
                }
              }, animateCfg)).onUpdate((frame: number) => {
                document.getElementById(`text`).innerHTML = Math.round(frame * 75) + '%';
              });
            }
          }
        };
      }
    },
    guide: {
      config: () => {
        return {
          position: ['50%', '50%'],
          html: `<div style="width:90px;white-space: normal;text-align: center;color: #595a5c;">
                  <p style="color:#999;font-weight: bold;font-size: 12px;margin: 0;">本月进度</p>
                  <p id="text" style="font-size: 18px;margin: 4px 0 0 0;font-weight: bold;">0</p>
                 </div>`
        };
      }
    }
  };


  constructor() {
  }

  ngOnInit() {
  }


}
