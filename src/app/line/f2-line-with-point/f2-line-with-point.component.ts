import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-f2-line-with-point',
  templateUrl: './f2-line-with-point.component.html',
  styleUrls: ['./f2-line-with-point.component.css']
})
export class F2LineWithPointComponent implements OnInit {

  data = [{
    day: '周一',
    value: 300
  }, {
    day: '周二',
    value: 400
  }, {
    day: '周三',
    value: 350
  }, {
    day: '周四',
    value: 500
  }, {
    day: '周五',
    value: 490
  }, {
    day: '周六',
    value: 600
  }, {
    day: '周日',
    value: 900
  }];

  constructor() {
  }

  ngOnInit() {
  }

  onShowFunc = (ev) => {
    const items = ev.items;
    items[0].name = null;
    items[0].value = '$ ' + items[0].value;
  }

  labelFunc = (text, index, total) => {
    const textCfg: any = {};
    if (index === 0) {
      textCfg.textAlign = 'left';
    } else if (index === total - 1) {
      textCfg.textAlign = 'right';
    }
    return textCfg;
  }
}
