## ngx-antv-f2

> Functional [Antvis/F2](https://github.com/antvis/f2) wrapper for Angular 

[![NPM version](https://img.shields.io/npm/v/ngx-antv-f2.svg)](https://www.npmjs.com/package/ngx-antv-f2)


## Demo

[Demo](https://parixpow.github.stackblitz.io/)

## Installation

```
npm i ngx-antv-f2 --save
```

```
import {F2Module} from 'ngx-antv-f2'

@NgModule({
  imports: [
    F2Module
  ]
})
```

## Use

### Use template

#### f2-pie-basic.component.html

```
<f2-chart>
  <f2-source [data]="data" [colDefs]="colDefs"></f2-source>
  <f2-legend [config]="legendConfig"></f2-legend>
  <f2-tooltip [disabled]="true"></f2-tooltip>
  <f2-coord-polar [config]="{transposed: true,radius: 0.85}"></f2-coord-polar>
  <f2-axis [disabled]="true"></f2-axis>
  <f2-geometry [type]="'interval'"
               [position]="'a*percent'"
               [color]="['name',['#1890FF', '#13C2C2', '#2FC25B', '#FACC14', '#F04864', '#8543E0']]"
               [adjust]="'stack'"
               [style]="{lineWidth: 1,stroke: '#fff',lineJoin: 'round',lineCap: 'round'}"
               [animate]="{appear: {duration: 1200,easing: 'bounceOut'}}"
  ></f2-geometry>
</f2-chart>
```

#### f2-pie-basic.component.ts

```
  map = {
    '芳华': '40%',
    '妖猫传': '20%',
    '机器之血': '18%',
    '心理罪': '15%',
    '寻梦环游记': '5%',
    '其他': '2%'
  };

  data = [{
    name: '芳华',
    percent: 0.4,
    a: '1'
  }, {
    name: '妖猫传',
    percent: 0.2,
    a: '1'
  }, {
    name: '机器之血',
    percent: 0.18,
    a: '1'
  }, {
    name: '心理罪',
    percent: 0.15,
    a: '1'
  }, {
    name: '寻梦环游记',
    percent: 0.05,
    a: '1'
  }, {
    name: '其他',
    percent: 0.02,
    a: '1'
  }];

  colDefs = {
    percent: {
      formatter: function formatter(val) {
        return val * 100 + '%';
      }
    }
  };

  legendConfig = {
    position: 'right',
    itemFormatter: (val) => {
      return val + '  ' + this.map[val];
    }
  };

  constructor() {
  }

  ngOnInit() {
  }

```

### custom Render

#### custom-render-pie-basic.component.html

```
<f2-chart [preventRender]="true" (customRender)="customRender($event)"></f2-chart>
```

#### custom-render-pie-basic.component.ts

```
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-custom-render-pie-basic',
  templateUrl: './custom-render-pie-basic.component.html',
  styleUrls: ['./custom-render-pie-basic.component.css']
})
export class CustomRenderPieBasicComponent implements OnInit {

  map = {
    '芳华': '40%',
    '妖猫传': '20%',
    '机器之血': '18%',
    '心理罪': '15%',
    '寻梦环游记': '5%',
    '其他': '2%'
  };

  data = [{
    name: '芳华',
    percent: 0.4,
    a: '1'
  }, {
    name: '妖猫传',
    percent: 0.2,
    a: '1'
  }, {
    name: '机器之血',
    percent: 0.18,
    a: '1'
  }, {
    name: '心理罪',
    percent: 0.15,
    a: '1'
  }, {
    name: '寻梦环游记',
    percent: 0.05,
    a: '1'
  }, {
    name: '其他',
    percent: 0.02,
    a: '1'
  }];

  constructor() {
  }

  ngOnInit() {
  }

  customRender(chart: any) {
    chart.source(this.data, {
      percent: {
        formatter: function formatter(val) {
          return val * 100 + '%';
        }
      }
    });
    chart.legend({
      position: 'right',
      itemFormatter: (val) => {
        return val + '  ' + this.map[val];
      }
    });
    chart.tooltip(false);
    chart.coord('polar', {
      transposed: true,
      radius: 0.85
    });
    chart.axis(false);
    chart.interval()
      .position('a*percent')
      .color('name', ['#1890FF', '#13C2C2', '#2FC25B', '#FACC14', '#F04864', '#8543E0'])
      .adjust('stack')
      .style({
        lineWidth: 1,
        stroke: '#fff',
        lineJoin: 'round',
        lineCap: 'round'
      })
      .animate({
        appear: {
          duration: 1200,
          easing: 'bounceOut'
        }
      });

    chart.render();
  }
}
```




## License

The MIT License (see the [LICENSE](https://github.com/CK110/ngx-antv-f2/blob/master/LICENSE) file for the full text)
