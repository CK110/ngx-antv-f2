import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-selection-for-pie-chart',
  templateUrl: './selection-for-pie-chart.component.html',
  styleUrls: ['./selection-for-pie-chart.component.css']
})
export class SelectionForPieChartComponent implements OnInit {

  @ViewChild('number') numberDiv: ElementRef;

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
    percent: 0.12,
    a: '1'
  }];


  colDefs = {
    percent: {
      formatter: (val) => {
        return val * 100 + '%';
      }
    }
  };

  guideHtmlConfig = {
    position: ['50%', '50%'],
    html: `<div style="text-align: center;width: 100px;height: 72px;vertical-align: middle;">
              <p id="number" style="font-size: 28px;margin: 10px 10px 5px;font-weight: bold;"></p>
              <p id="name" style="font-size: 12px;margin: 0;"></p>
           </div>`
  };

  interactionOption = [
    'pie-select',
    {
      animate: {
        duration: 300,
        easing: 'backOut'
      },
      defaultSelected: {
        name: '机器之血',
        percent: 0.18,
        a: '1'
      },
      onEnd: (ev) => {
        const shape = ev.shape,
          data = ev.data,
          shapeInfo = ev.shapeInfo,
          selected = ev.selected;
        if (shape) {
          if (selected) {
            document.getElementById('number').setAttribute('style', `color: ${shapeInfo.color}`);
            document.getElementById('number').textContent = data.percent * 100 + '%';
            document.getElementById('name').textContent = data.name;
          } else {
            document.getElementById('number').textContent = '';
            document.getElementById('name').textContent = '';
          }
        }
      }
    }
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
