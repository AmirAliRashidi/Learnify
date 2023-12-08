import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { education, educationTag } from '../education-interface';
import { EducationService } from '../education.service';

@Component({
  selector: 'app-add-edit-course',
  templateUrl: './add-edit-course.component.html',
  styleUrls: ['./add-edit-course.component.scss']
})
export class AddEditCourseComponent implements OnInit {
  courseForm: FormGroup;
  tagForm: FormGroup;
  tagList: educationTag[] = [];
  courseDetail: education | undefined;
  
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: {
      mode: 'add' | 'edit',
      id?: number,
    },
    private fb: FormBuilder,
    private _educationService: EducationService,
  ) {
    this.tagForm = this.fb.group({
      name: [null, [Validators.required]],
      description: [null, [Validators.required]]
    })
    this.courseForm = this.fb.group({
      title: [null, [Validators.required]],
      instructorName: [null, [Validators.required]],
      instructorEmail: [null, [Validators.required, Validators.email]],
      description: [null, [Validators.required]],
      duration: [null, [Validators.required]],
      level: [null, [Validators.required]],
      num_students: [null, [Validators.required, Validators.pattern('^[0-9]*$')]],
      price: [null, [Validators.required, Validators.pattern('^[0-9]*$'), Validators.min(1), Validators.max(999999)]],
      rating: [null, [Validators.required, Validators.pattern(/^([0-5]\.\d+)$/), Validators.min(0), Validators.max(5)]],
      tags: [[]]
    });
  }

  ngOnInit(): void {
    
  }

  addTagList() {
    const tag = this.tagForm.getRawValue()
    this.tagList.push(tag)
    this.courseForm.controls['tags'].setValue(this.tagList);
    this.tagForm.controls['name'].setValue(null);
    this.tagForm.controls['description'].setValue(null);
  }

  deleteTagList(tag: educationTag) {
    const tagIndex = this.tagList.findIndex(item => item === tag);
    if(tagIndex !== -1){
      this.tagList.splice(tagIndex, 1);
    }
  }

  editTagList(tag : educationTag){
    this.tagForm.controls['name'].setValue(tag.name);
    this.tagForm.controls['description'].setValue(tag.description);
    this.deleteTagList(tag)
  }

  submitForm() {
    if (this.data.mode === 'add') {
      this.courseDetail = {
        id: this._educationService.calculateNextId(),
        description: this.courseForm.get('description')?.value,
        duration: this.courseForm.get('duration')?.value,
        instructor:{
          name: this.courseForm.get('instructorName')?.value,
          email: this.courseForm.get('instructorEmail')?.value,
        },
        level: this.courseForm.get('level')?.value,
        num_students: this.courseForm.get('num_students')?.value,
        price: this.courseForm.get('price')?.value,
        rating: this.courseForm.get('rating')?.value,
        tags: this.tagList,
        title: this.courseForm.get('title')?.value,
      }
      this._educationService.addEducation(this.courseDetail)
      this.courseDetail = undefined;
    }
  }
}
