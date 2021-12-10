import { Injectable } from '@angular/core';
import {Timestamp} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChronologyDataService {

  constructor() { }

  private createRange(): void {

  }

  private validateDateRange(startDate: Date|number, endDate: Date|number): void {
    if (startDate === endDate) {
      throw new Error('Start-date is the same as end-Date');
    } else if (startDate > endDate) {
      throw new Error('Start-date is the same as end-Date');
    }
  }


}
