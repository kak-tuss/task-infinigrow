import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../data.service';
import { BudgetData } from '../interfaces';

@Component({
  selector: 'app-builder',
  templateUrl: './builder.component.html',
  styleUrls: ['./builder.component.scss']
})
export class BuilderComponent implements OnInit {

  channels$: Observable<BudgetData[]> = null;
  selectedId: number = 0;

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    this.channels$ = this.dataService.getBudgetsData();
  }

  selectChannel(e: BudgetData) {
    console.log('selectChannel', e);
    this.selectedId = e.id;
  }

}
