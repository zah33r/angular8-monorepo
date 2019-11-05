import { Component, OnInit } from '@angular/core';
import { GlobalSharedService } from 'projects/startup/src/app/app.component.service';

@Component({
  selector: 'app-feature-a',
  templateUrl: './feature-a.component.html',
  styleUrls: ['./feature-a.component.css']
})
export class FeatureAComponent implements OnInit {
  valueFromShareService: string = '';

  constructor(private globalService: GlobalSharedService) { }

  ngOnInit() {
    this.valueFromShareService = this.globalService.aSharedProperty;
  }

}
