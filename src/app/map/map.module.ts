import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapService } from '../services/map.service';

import { MapComponent } from './map.component';
import { LocatorComponent } from '../locator/locator.component';
import { LocatorModule } from '../locator/locator.module';

@NgModule({
  declarations: [MapComponent],
  imports: [CommonModule, LocatorModule],
  providers: [MapService],
  bootstrap: [MapComponent],
})
export class MapModule {}
