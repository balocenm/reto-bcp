import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgenciesHeaderComponent } from './agencies-header/agencies-header.component';
import { AgenciesListBodyComponent } from './agencies-list-body/agencies-list-body.component';

const COMPONENTS = [
  AgenciesHeaderComponent,
  AgenciesListBodyComponent
];


@NgModule({
  declarations: [
    ...COMPONENTS,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ...COMPONENTS
  ]
})
export class ComponentsModule { }
