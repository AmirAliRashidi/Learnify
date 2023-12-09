import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

import { education } from '../education-interface';
import { EducationService } from '../education.service';
import { AddEditCourseComponent } from '../add-edit-course/add-edit-course.component';
import { GENERAL_TEXT } from 'src/app/_dict/en';

@Component({
  selector: 'app-edu-list',
  templateUrl: './edu-list.component.html',
  styleUrls: ['./edu-list.component.scss'],
})
export class EduListComponent implements OnInit {
  educationList: education[] = [];
  isLoading: boolean = true;
  dict = GENERAL_TEXT;

  constructor(
    private _router: Router,
    public _dialog: MatDialog,
    private _snackBar: MatSnackBar,
    private _educationService: EducationService,
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
    return `url('https://picsum.photos/id/${id}/300/200')`;
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
        this.educationList = this._educationService.getEdicationList();
        if (mode === 'add') {
          this._snackBar.open('Course added Successfully!!', 'Ok!', {
            horizontalPosition: "right",
            verticalPosition: "top",
            duration: 5000,
          });
        } else {
          this._snackBar.open('Course edited Successfully!!', 'Ok!', {
            horizontalPosition: "right",
            verticalPosition: "top",
            duration: 5000,
          });
        }
      }
    });
  }
}
