import { Component, OnInit } from '@angular/core';
import { EducationService } from './education/education.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(
    private _educationService: EducationService,
    private _router: Router,
  ){}
  ngOnInit(): void {
    this._educationService.init();
    this._router.navigateByUrl('/edu/edu-list')
  }
}
