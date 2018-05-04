import { Component, Output } from '@angular/core';
import { Project } from './models/freelance.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Freelancers';
  header: string = "Hire Freelancers Online";
  // masterCategoryList: Category[] = [
  //   new Category("Directory", "Showcase", "Community", "Categories"),
  // ];


  masterProjectList: Project[] = [
    new Project("Website Development", "Starting at $99/hr", 4)
  ];
  //
  //
  // masterContestList: Contest[] = [
  //   new Contest("Logo Design", "Starting at $149/hr", 3),
  // ];
  //
  //
  // masterFormList: Form[] = [
  //   new Form("Contest", "Project", "Local", "Login"),
  // ];
}
