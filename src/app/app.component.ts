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
  masterProjectList: Project[] = [
    new Project("Website Development", "Project", "Starting at $99/hr")
    new Project("Logo Design", "Contest", "Starting at $149/hr")
  ];
}
