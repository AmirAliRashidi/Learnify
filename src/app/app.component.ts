import { Component, OnInit } from '@angular/core';
import { EducationService } from './education/education.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(
    private _educationService: EducationService,
  ){}
  ngOnInit(): void {
    this._educationService.init();
  }
}
