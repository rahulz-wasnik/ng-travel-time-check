import { Component, OnInit, Input } from '@angular/core';
import { Bus } from 'src/app/model/bus';

@Component({
  selector: 'app-buses',
  templateUrl: './buses.component.html',
  styleUrls: ['./buses.component.scss']
})
export class BusesComponent implements OnInit {

  @Input() buses: Bus[];

  constructor() { }

  ngOnInit() {
  }

}
