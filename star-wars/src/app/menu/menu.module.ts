import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AutoCompleteModule } from '../auto-complete/auto-complete.module';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    AutoCompleteModule
  ],
  declarations: [MenuComponent],
  exports: [MenuComponent]
})
export class MenuModule { }
