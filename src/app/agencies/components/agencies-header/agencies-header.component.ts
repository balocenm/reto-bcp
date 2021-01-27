import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-agencies-header',
  templateUrl: './agencies-header.component.html',
  styleUrls: ['./agencies-header.component.scss']
})
export class AgenciesHeaderComponent implements OnInit {

  @Input() title: string;
  constructor() { }

  ngOnInit() {
  }

}
