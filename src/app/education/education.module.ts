import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EduListComponent } from './edu-list/edu-list.component';
import { EduDetailComponent } from './edu-detail/edu-detail.component';
import { EducationRoutingModule } from './education-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { BaseModule } from '../base/base.module';

@NgModule({
  declarations: [
    EduListComponent,
    EduDetailComponent
  ],
  imports: [
    CommonModule,
    EducationRoutingModule,
    BaseModule,
    MatButtonModule,
    MatProgressBarModule,
    MatMenuModule,
    MatIconModule,
    MatDividerModule,
  ],

})
export class EducationModule { }
