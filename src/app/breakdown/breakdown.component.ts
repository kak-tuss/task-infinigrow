import { Component, Input, OnInit } from '@angular/core';
import { ALLOCATION_AUTO, ALLOCATION_MANUAL, BudgetData } from '../interfaces';

@Component({
  selector: 'app-breakdown',
  templateUrl: './breakdown.component.html',
  styleUrls: ['./breakdown.component.scss']
})
export class BreakdownComponent implements OnInit {
  frequency: string[] = ['Annually', 'Quarterly', 'Monthly'];
  frequencyNoun: string[] = ['Annual', 'Quarterly', 'Monthly'];
  totalBudget: number = this.getTotalBudget();
  allocation: boolean = true;
  
  selectedFrequency: {
    "index": number;
    "value": string;
  } = {
    'index': 0, 
    'value': 'Annually'
  };
  @Input() channel: BudgetData = null;
  constructor() { }

  ngOnInit(): void {
  }

  getTotalBudget(): number {
    return 666;
  }

  manualSwitchChange(e) {
    console.log('manualSwitchChange', e);
  }
  

}
