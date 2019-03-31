import { Component, OnInit, Input } from '@angular/core';
import { Bus } from 'src/app/model/bus';

@Component({
  selector: 'app-bus-schedule',
  templateUrl: './bus-schedule.component.html',
  styleUrls: ['./bus-schedule.component.scss']
})
export class BusScheduleComponent implements OnInit {

  @Input() buses: Bus[];

  constructor() { }

  ngOnInit() {
  }

}
