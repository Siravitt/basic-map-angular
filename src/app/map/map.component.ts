import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import Point from '@arcgis/core/geometry/Point';
import SimpleMarkerSymbol from '@arcgis/core/symbols/SimpleMarkerSymbol';
import Graphic from '@arcgis/core/Graphic';

import MapImageLayer from '@arcgis/core/layers/MapImageLayer';

import { MapService } from '../services/map.service';
import { LocatorService } from '../services/locator.service';
import { ILocate } from '../models/locate.model';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent implements OnInit {
  @ViewChild('mapPanel', { static: true })
  mapPanel!: ElementRef<HTMLDivElement>;

  constructor(
    private mapService: MapService,
    private locatorService: LocatorService
  ) {}

  ngOnInit(): void {
    this.mapService.createMap(this.mapPanel.nativeElement);

    this.locatorService.onLocate.subscribe((data) => {
      if (data.latitude !== null && data.longitude !== null) {
        const point = new Point({
          longitude: data.longitude,
          latitude: data.latitude,
        });

        const marker = new SimpleMarkerSymbol({
          color: [226, 119, 40],
          outline: {
            color: [255, 255, 255],
            width: 2,
          },
        });

        const pointGraphic = new Graphic({
          geometry: point,
          symbol: marker,
        });

        this.mapService.mapView?.graphics.add(pointGraphic);
        this.mapService.mapView?.goTo([data.longitude, data.latitude]);
      }

    });

    const layer = new MapImageLayer({
      url: 'https://sampleserver6.arcgisonline.com/arcgis/rest/services/USA/MapServer/',
    });
    
    this.mapService.map?.add(layer);

    this.mapService.mapView?.on('click', (event) => {
      const newLocate:ILocate = {
        latitude: Math.round(event.mapPoint.latitude * 1000) / 1000,
        longitude: Math.round(event.mapPoint.longitude * 1000) / 1000,
      }
      this.locatorService.addLocate(newLocate);
      this.locatorService.getClickLocate();
    });
  }
}
