import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RollHistoryService {

  constructor() { }

  rollHistory: any[] = [];
  addrollHistory = (rh: any) => {
    this.rollHistory = [
      ...this.rollHistory
      , rh
    ];
  };

}
