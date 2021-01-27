import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-agencies-list-body',
  templateUrl: './agencies-list-body.component.html',
  styleUrls: ['./agencies-list-body.component.scss']
})
export class AgenciesListBodyComponent implements OnInit {

  @Input() local: string;
  @Input() district: string;
  @Input() address: string;
  @Input() icono: string;
  @Output() updateAgency = new EventEmitter();

  constructor() {}

  ngOnInit() {
  }

  updateAgencyEmit() {
    this.updateAgency.emit();
  }

}
