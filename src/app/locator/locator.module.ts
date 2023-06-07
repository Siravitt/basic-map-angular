import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InputNumberModule } from 'primeng/inputnumber';
import { ButtonModule } from 'primeng/button';

import { LocatorComponent } from './locator.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [LocatorComponent],
  imports: [CommonModule, InputNumberModule, ButtonModule, FormsModule],
  exports: [LocatorComponent]
})
export class LocatorModule {}
