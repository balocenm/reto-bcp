import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MainLoaderService } from 'src/app/shared/helpers/main-loader.service';
import { IAgency } from '../../models/agency.model';
import { AgencyService } from '../../services/agencies.service';

@Component({
  selector: 'app-agencies-list',
  templateUrl: './agencies-list.component.html',
  styleUrls: ['./agencies-list.component.scss']
})
export class AgenciesListComponent implements OnInit {

  agencies: IAgency[] = [];

  constructor(
    private angencyService: AgencyService,
    private router: Router,
    private mainLoaderService: MainLoaderService,

  ) { }

  ngOnInit() {
    this.mainLoaderService.isLoaded = false;
    this.agencies = this.angencyService.getAgencies();

  }
  showDetail(id: string): void {
    this.router.navigate(['detalle-agencia', id]);
  }

}
