import { HttpClient } from "@angular/common/http";
import { education } from "./education-interface";
import { Injectable } from "@angular/core";
@Injectable({ providedIn: 'root' })
export class EducationService {
  private educationList: education[] = [];

  constructor(
    private _httpClient: HttpClient,
  ){}

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
}