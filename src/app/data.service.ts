import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DATA } from 'src/assets/data/budgets.json';
import { Budget, BudgetData } from './interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getBudgetsData(): Observable<BudgetData[]> {
    return of(DATA);
  }
}
