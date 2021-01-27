import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MainLoaderService } from '../shared/helpers/main-loader.service';
import { IAgency } from './models/agency.model';

@Component({
  selector: 'app-agencies',
  templateUrl: './agencies.component.html',
  styleUrls: ['./agencies.component.scss']
})
export class AgenciesComponent implements OnInit {

  showButton = true;
  agencies: IAgency[] = [];

  constructor(
    private router: Router,
    private mainLoaderService: MainLoaderService,
  ) { }

  ngOnInit() {
    this.mainLoaderService.isLoaded = false;
    setTimeout(() => {
      if (this.router.url === '/') {
        this.mainLoaderService.isLoaded = false;
        this.router.navigate(['/listado-agencia']);
      }
    }, 2000);
  }

}
