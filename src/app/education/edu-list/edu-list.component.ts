import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

import { education } from '../education-interface';
import { EducationService } from '../education.service';
import { AddEditCourseComponent } from '../add-edit-course/add-edit-course.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-edu-list',
  templateUrl: './edu-list.component.html',
  styleUrls: ['./edu-list.component.scss'],
})
export class EduListComponent implements OnInit {

  educationList: education[] = [];
  isLoading: boolean = true;

  constructor(
    private _router: Router,
    public dialog: MatDialog,
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
    return `url('https://picsum.photos/id/${id}/300/200')`
  }

  openDialog() {
    const dialogRef = this.dialog.open(AddEditCourseComponent, {
      data: {
        mode: 'add',
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.educationList = this._educationService.getEdicationList();
        this._snackBar.open('Course added Successfully!!', 'Ok!', {
          horizontalPosition: "right",
          verticalPosition: "top",
          duration: 5000,
        });
      }
    });
  }
}
