import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ALLOCATION_MANUAL, ALLOCATION_AUTO } from '../interfaces';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.scss']
})
export class SwitchComponent implements OnInit {
  allocationManual = ALLOCATION_MANUAL;
  allocationAuto = ALLOCATION_AUTO;
  @Input() allocation: boolean = ALLOCATION_AUTO;
  @Output() valueChanged: EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit(): void { 
    console.log('init', this.allocation);
  }

  setAllocation(newAllocation) {
    if (this.allocation != newAllocation) {
      this.allocation = newAllocation;
      this.valueChanged.emit(newAllocation);
    }
  }

  cbClick(e) {
    e.preventDefault()
  }
}
