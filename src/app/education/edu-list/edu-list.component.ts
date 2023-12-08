import { Component, OnInit } from '@angular/core';
import { education } from '../education-interface';
import { EducationService } from '../education.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edu-list',
  templateUrl: './edu-list.component.html',
  styleUrls: ['./edu-list.component.scss'],
})
export class EduListComponent implements OnInit {

  educationList: education[] = [];
  isLoading: boolean = true;

  constructor(
    private _educationService: EducationService,
    private _router: Router,
  ) { }

  ngOnInit(): void {
    this.getEducationList();
  }

  getEducationList() {
    this.isLoading = true;
    setTimeout(() => {
      this.educationList = this._educationService.getEdicationList();
      this.isLoading = false;
    }, 1500);
  }

  refresh() {
    this.isLoading = true;
    this._educationService.init();
    setTimeout(() => {
      this.isLoading = false;
      this.educationList = this._educationService.getEdicationList();
    }, 1500);
  }

  gotoCourse(id: number) {
    this._router.navigateByUrl('edu/edu-detail/' + id);
  }

  setBackgroundImageUrl(id: number): string {
    return `url('https://picsum.photos/id/${id}/300/200')`
  }
}
