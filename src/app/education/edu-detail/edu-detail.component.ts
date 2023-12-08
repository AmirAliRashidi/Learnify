import { Component, OnInit } from '@angular/core';
import { EducationService } from '../education.service';
import { ActivatedRoute } from '@angular/router';
import { education } from '../education-interface';
import { Location } from '@angular/common';

@Component({
  selector: 'app-edu-detail',
  templateUrl: './edu-detail.component.html',
  styleUrls: ['./edu-detail.component.scss']
})
export class EduDetailComponent implements OnInit {
  educationId: string | null = '';
  edu: education | undefined;
  isLoading: boolean = true;
  constructor(
    private _educationService: EducationService,
    private _route: ActivatedRoute,
    private _locale: Location,
  ) { }

  ngOnInit(): void {
    this._route.paramMap.subscribe(paramMap => { this.educationId = paramMap.get('id'); })
    setTimeout(() => {
      this.edu = this._educationService.getEducation(Number(this.educationId))
      this.isLoading = false;
    }, 1000);
  }

  goBack() {
    this._locale.back();
  }
}
