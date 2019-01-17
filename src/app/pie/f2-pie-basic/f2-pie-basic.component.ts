import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-f2-pie-basic',
  templateUrl: './f2-pie-basic.component.html',
  styleUrls: ['./f2-pie-basic.component.css']
})
export class F2PieBasicComponent implements OnInit {

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

}
