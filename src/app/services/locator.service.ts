import { EventEmitter, Injectable } from '@angular/core';
import { ILocate } from '../models/locate.model';

@Injectable({
  providedIn: 'root',
})
export class LocatorService {
  onLocate = new EventEmitter<ILocate>();
  onClickLocate = new EventEmitter<ILocate>();

  locate: ILocate = {
    latitude: null,
    longitude: null,
  };

  constructor() {}

  getLocate() {
    this.onLocate.emit(this.locate);
  }

  getClickLocate() {
    this.onClickLocate.emit(this.locate);
  }

  addLocate(value: ILocate) {
    this.locate = { ...value };
  }
}
