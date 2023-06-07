import { Component } from '@angular/core';
import { LocatorService } from '../services/locator.service';
import { ILocate } from '../models/locate.model';
import { MapService } from '../services/map.service';

@Component({
  selector: 'app-locator',
  templateUrl: './locator.component.html',
  styleUrls: ['./locator.component.css'],
})
export class LocatorComponent {
  locate: ILocate = {
    latitude: null,
    longitude: null,
  };

  constructor(
    private locatorService: LocatorService,
    private mapService: MapService
  ) {
    this.locatorService.onClickLocate.subscribe(
      (data) => (this.locate = { ...data })
    );
  }

  onSubmit(value: ILocate) {
    this.mapService.clearPoint();
    this.locatorService.addLocate(value);
    this.locate = {
      latitude: null,
      longitude: null,
    };
    this.locatorService.getLocate();
  }
}
