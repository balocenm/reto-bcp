import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MainLoaderService } from 'src/app/shared/helpers/main-loader.service';
import { IAgency } from '../../models/agency.model';
import { AgencyService } from '../../services/agencies.service';
import { Presenter } from './presenter/presenter';

@Component({
  selector: 'app-agencie-detail',
  templateUrl: './agencie-detail.component.html',
  styleUrls: ['./agencie-detail.component.scss'],
  providers: [Presenter],
})
export class AgencieDetailComponent implements OnInit {

  Agency: IAgency;
  id: string;

  lat: number;
  lon: number;
  disabledButton: boolean;

  constructor(
    public presenter: Presenter,
    public agencyService: AgencyService,
    public router: Router,
    public route: ActivatedRoute,
    private mainLoaderService: MainLoaderService,

  ) {
    this.disabledButton = true;
    const id = route.snapshot.paramMap.get('id');
    if (id) {
      this.id = id;
      this.Agency = this.getAgency(id);
      this.setMap();
    }
  }

  ngOnInit(): void {
    this.mainLoaderService.isLoaded = false;
    this.presenter.setForm(this.Agency);
  }

  setMap(): void {
    this.lat = this.Agency.lat;
    this.lon = this.Agency.lon;
  }

  onSubmit(): void {
    this.agencyService.save(this.id, this.presenter.toJsonForm());
    this.router.navigate(['/listado-agencia']);
  }

  getAgency(id: string): IAgency {
    return this.agencyService.get(id);
  }

  return() {
    this.router.navigate(['/listado-agencia']);

  }

}
