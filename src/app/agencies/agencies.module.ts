import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgenciesListComponent } from './views/agencies-list/agencies-list.component';
import { AgencieDetailComponent } from './views/agencie-detail/agencie-detail.component';
import { AgenciesComponent } from './agencies.component';
import { AgenciesRoutingModule } from './agencies-routing.module';
import { ComponentsModule } from './components/components.module';
import { AgmCoreModule } from '@agm/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AgenciesComponent,
    AgenciesListComponent,
    AgencieDetailComponent
  ],
  imports: [
    CommonModule,
    AgenciesRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    ComponentsModule,
    AgmCoreModule.forRoot({
      apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
    })
  ]
})
export class AgenciesModule { }
