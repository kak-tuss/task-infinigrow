import { Component, Input, OnInit, HostListener, EventEmitter, Output, HostBinding } from '@angular/core';
import { BudgetData } from '../interfaces';

@Component({
  selector: 'app-channel',
  templateUrl: './channel.component.html',
  styleUrls: ['./channel.component.scss']
})
export class ChannelComponent implements OnInit {
  @Input() channel: BudgetData;
  @Input() open: boolean = false;
  @Output() channelClicked: EventEmitter<BudgetData> = new EventEmitter<BudgetData>();
  constructor() { }

  ngOnInit(): void {
  }

  @HostBinding('class.no-budget') get hasNoBudget() {return !this.getTotalBudget() };
  @HostBinding('class.open') get isOpen() { return this.open; };
  @HostListener('click')
  onClick(e) {
    console.log(this.channel);
    this.channelClicked.emit(this.channel);
  }
  
  getImageUrl(imgName: string): string {
    return `../../assets/images/${imgName}.svg`;
  }

  getTotalBudget(): number {
    const aggregator = (previousValue, currentValue) => previousValue + currentValue;

    return this.channel.budget.breakdown.reduce(aggregator);
  }

}
