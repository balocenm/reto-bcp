import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IAgency } from 'src/app/agencies/models/agency.model';
import { AgencyControl } from './controls/agency-detail';

@Injectable()
export class Presenter {
  protected _form: FormGroup;
  protected _id = new AgencyControl();
  protected _agencia = new AgencyControl();
  protected _departamento = new AgencyControl();
  protected _provincia = new AgencyControl();
  protected _distrito = new AgencyControl();
  protected _direccion = new AgencyControl();
  protected _lat = new AgencyControl();
  protected _lon = new AgencyControl();

  constructor() {
    this._form = new FormGroup({
      id: this._id,
      agencia: this._agencia,
      departamento: this._departamento,
      provincia: this._provincia,
      distrito: this._distrito,
      direccion: this._direccion,
      lat: this._lat,
      lon: this._lon,
    });
  }

  get form(): FormGroup {
    return this._form;
  }

  get id(): AgencyControl {
    return this._id;
  }

  get agencia(): AgencyControl {
    return this._agencia;
  }

  get departamento(): AgencyControl {
    return this._departamento;
  }

  get provincia(): AgencyControl {
    return this._provincia;
  }

  get distrito(): AgencyControl {
    return this._distrito;
  }

  get direccion(): AgencyControl {
    return this._direccion;
  }

  get lat(): AgencyControl {
    return this._lat;
  }

  get lon(): AgencyControl {
    return this._lon;
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
