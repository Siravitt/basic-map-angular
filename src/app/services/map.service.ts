import { Injectable } from '@angular/core';

import Map from '@arcgis/core/Map';
import MapImageLayer from '@arcgis/core/layers/MapImageLayer';
import MapView from '@arcgis/core/views/MapView';

@Injectable({
  providedIn: 'root',
})
export class MapService {
  map: Map | null = null;
  mapView: MapView | null = null;

  constructor() {}

  createMap(container: HTMLDivElement) {
    this.map = new Map({
      basemap: 'topo-vector',
    });

    this.mapView = new MapView({
      map: this.map,
      container: container,
      center: [-108.12700000, 41.76010000],
      zoom: 5,
    });

    // const identifyLayer = new MapImageLayer({
    //   url: 'https://sampleserver6.arcgisonline.com/arcgis/rest/services/Census/MapServer',
    //   opacity: 0.5
    // });

    // this.map.add(identifyLayer);
  }

  clearPoint() {
    this.mapView?.graphics.removeAll();
  }
}
