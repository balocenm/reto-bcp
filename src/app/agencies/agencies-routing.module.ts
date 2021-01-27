import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgenciesComponent } from './agencies.component';
import { AgencieDetailComponent } from './views/agencie-detail/agencie-detail.component';
import { AgenciesListComponent } from './views/agencies-list/agencies-list.component';

const routes: Routes = [
  {
    path: '', component: AgenciesComponent, children: [
      {path: 'listado-agencia', component: AgenciesListComponent, pathMatch: 'full'},
      {path: 'detalle-agencia/:id', component: AgencieDetailComponent, pathMatch: 'full'},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgenciesRoutingModule {
}
