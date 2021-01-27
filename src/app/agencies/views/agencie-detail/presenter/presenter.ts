import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IAgency } from 'src/app/agencies/models/agency.model';
import { AgencyControl } from './controls/agency-detail';

@Injectable()
export class Presenter {
  protected _form: FormGroup;
  protected idControl = new AgencyControl();
  protected agenciaControl = new AgencyControl();
  protected departamentoControl = new AgencyControl();
  protected provinciaControl = new AgencyControl();
  protected distritoControl = new AgencyControl();
  protected direccionControl = new AgencyControl();
  protected latitudControl = new AgencyControl();
  protected longitudControl = new AgencyControl();

  constructor() {
    this._form = new FormGroup({
      id: this.idControl,
      agencia: this.agenciaControl,
      departamento: this.departamentoControl,
      provincia: this.provinciaControl,
      distrito: this.distritoControl,
      direccion: this.direccionControl,
      lat: this.latitudControl,
      lon: this.longitudControl,
    });
  }

  get form(): FormGroup {
    return this._form;
  }

  get id(): AgencyControl {
    return this.idControl;
  }

  get agencia(): AgencyControl {
    return this.agenciaControl;
  }

  get departamento(): AgencyControl {
    return this.departamentoControl;
  }

  get provincia(): AgencyControl {
    return this.provinciaControl;
  }

  get distrito(): AgencyControl {
    return this.distritoControl;
  }

  get direccion(): AgencyControl {
    return this.direccionControl;
  }

  get lat(): AgencyControl {
    return this.latitudControl;
  }

  get lon(): AgencyControl {
    return this.longitudControl;
  }

  setForm(form: IAgency): void {
    this.form.setValue(form);
  }

  toJsonForm(): IAgency {
    return {
      id: this.id.value,
      agencia: this.agencia.value,
      departamento: this.departamento.value,
      provincia: this.provincia.value,
      direccion: this.direccion.value,
      distrito: this.distrito.value,
      lat: this.lat.value,
      lon: this.lon.value,
    };
  }
}
