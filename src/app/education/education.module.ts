import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseModule } from '../base/base.module';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatProgressBarModule } from '@angular/material/progress-bar';

import { EduListComponent } from './edu-list/edu-list.component';
import { EducationRoutingModule } from './education-routing.module';
import { EduDetailComponent } from './edu-detail/edu-detail.component';
import { AddEditCourseComponent } from './add-edit-course/add-edit-course.component';

@NgModule({
  declarations: [
    EduListComponent,
    EduDetailComponent,
    AddEditCourseComponent,
  ],
  imports: [
    CommonModule,
    EducationRoutingModule,
    BaseModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatProgressBarModule,
    MatMenuModule,
    MatIconModule,
    MatDividerModule,
    MatDialogModule,
    MatInputModule,
    MatSnackBarModule,
  ],
})
export class EducationModule { }