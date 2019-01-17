import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-f2-pie-ring',
  templateUrl: './f2-pie-ring.component.html',
  styleUrls: ['./f2-pie-ring.component.css']
})
export class F2PieRingComponent implements OnInit {

  data = [{
    name: '股票类',
    percent: 83.59,
    a: '1'
  }, {
    name: '债券类',
    percent: 2.17,
    a: '1'
  }, {
    name: '现金类',
    percent: 14.24,
    a: '1'
  }];

  map = {
    '股票类': '83.59%',
    '债券类': '2.17%',
    '现金类': '14.24%',
  };

  colDefs = {
    percent: {
      formatter: function formatter(val) {
        return val + '%';
      }
    }
  };

  legendConfig = {
    position: 'right',
    itemFormatter: (val) => {
      return val + '    ' + this.map[val];
    }
  };

  guideConfig = {
    position: ['50%', '45%'],
    html: `<div style="width: 250px;height: 40px;text-align: center;">
            <div style="font-size: 16px">总资产</div>
            <div style="font-size: 24px">133.08 亿</div>
          </div>`
  };

  constructor() {

  }

  ngOnInit() {
  }

}
