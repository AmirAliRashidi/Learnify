import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { education } from "./education-interface";

@Injectable({ providedIn: 'root' })
export class EducationService {
  private educationList: education[] = [];

  constructor(
    private _httpClient: HttpClient,
  ) { }

  init() {
    this._httpClient.get("assets/json/db.json").subscribe(data => {
      this.educationList = (data as any).courses;
    })
  }

  getEdicationList(): education[] {
    return this.educationList;
  }

  getEducation(id: number): education | undefined {
    return this.educationList.find(edu => edu.id === id)
  }

  calculateNextId() {
    let index = 0;
    for (let edu of this.educationList) {
      index = index < edu.id ? edu.id : index;
    }
    return index + 1;
  }

  addEducation(edu: education) {
    this.educationList.push(edu);
  }
}