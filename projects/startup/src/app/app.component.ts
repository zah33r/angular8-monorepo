import { Component } from '@angular/core';
import { GlobalSharedService } from './app.component.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'startup';
  constructor(service: GlobalSharedService) {
    // this.title = service.aSharedProperty;
  }
}
