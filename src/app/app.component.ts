import { Component } from '@angular/core';
import { MainLoaderService } from './shared/helpers/main-loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    private mainLoaderService: MainLoaderService,
  ) {
    this.mainLoaderService.isLoaded = true;
  }
}
