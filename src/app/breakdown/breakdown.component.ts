import { Component, Input, OnInit } from '@angular/core';
import { BudgetData } from '../interfaces';

@Component({
  selector: 'app-breakdown',
  templateUrl: './breakdown.component.html',
  styleUrls: ['./breakdown.component.scss']
})
export class BreakdownComponent implements OnInit {

  @Input() channel: BudgetData = null;
  constructor() { }

  ngOnInit(): void {
  }

}
