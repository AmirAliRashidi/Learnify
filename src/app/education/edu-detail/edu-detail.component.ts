import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

import { education } from '../education-interface';
import { EducationService } from '../education.service';
import { AddEditCourseComponent } from '../add-edit-course/add-edit-course.component';
import { GENERAL_TEXT } from 'src/app/_dict/en';

@Component({
  selector: 'app-edu-detail',
  templateUrl: './edu-detail.component.html',
  styleUrls: ['./edu-detail.component.scss']
})
export class EduDetailComponent implements OnInit {
  educationId: string | null = '';
  edu: education | undefined;
  isLoading: boolean = true;
  dict = GENERAL_TEXT;

  constructor(
    private _educationService: EducationService,
    private _route: ActivatedRoute,
    private _snackBar: MatSnackBar,
    private _locale: Location,
    public _dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this._route.paramMap.subscribe(paramMap => { this.educationId = paramMap.get('id'); });
    this.getEduDetail();
  }

  getEduDetail() {
    this.isLoading = true;
    setTimeout(() => {
      this.edu = this._educationService.getEducation(Number(this.educationId));
      this.isLoading = false;
    }, 1000);
  }

  goBack() {
    this._locale.back();
  }

  openDialog(mode: 'add' | 'edit', id?: number) {
    const dialogRef = this._dialog.open(AddEditCourseComponent, {
      data: {
        mode: mode,
        id: id,
      },
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.getEduDetail();
        this._snackBar.open('Course edited Successfully!!', 'Ok!', {
          horizontalPosition: "right",
          verticalPosition: "top",
          duration: 5000,
        });
      }
    });
  }
}