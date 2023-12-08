import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EduListComponent } from "./edu-list/edu-list.component";
import { EduDetailComponent } from "./edu-detail/edu-detail.component";

const routes: Routes = [
  {
    path: 'edu-list',
    component: EduListComponent,
  },
  {
    path: 'edu-detail/:id',
    component: EduDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)]
})
export class EducationRoutingModule { }