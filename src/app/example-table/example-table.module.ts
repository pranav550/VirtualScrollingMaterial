import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExampleTableComponent } from './example-table.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import {
  MatCheckboxModule,
  MatProgressBarModule,
  MatSortModule,
  MatTableModule
} from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { CoreTableFilterModule } from '../core-table/filter/filter.module';
import { CoreTableMenuModule } from '../core-table/menu/menu.module';
import { CoreTableVirtualScrollModule } from '../core-table/virtual-scroll/virtual-scroll.module';
import {MatFormFieldModule} from '@angular/material';

const components = [ExampleTableComponent];
@NgModule({
  declarations: components,
  exports: components,
  imports: [
    BrowserModule,
    CoreTableFilterModule,
    CoreTableMenuModule,
    CoreTableVirtualScrollModule,
    MatCheckboxModule,
    MatProgressBarModule,
    MatSortModule,
    MatTableModule,
    ScrollingModule,
    MatFormFieldModule
  ],
})
export class ExampleTableModule { }
