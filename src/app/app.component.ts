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
    new Project("Website Development", "Project", "Starting from $99/hr"),
    new Project("Web Design", "Contest", "Starting from $90/hr"),
    new Project("SEO Marketing", "Project", "Starting from $100/hr"),
    new Project("Mobile App", "Project", "Starting from $200/hr"),
    new Project("Article Writing", "Project", "Starting from $50/hr"),
    new Project("Business Card", "Contest", "Starting from $30/hr"),
    new Project("Logo Design", "Contest", "Starting from $150/hr"),
    new Project("Data Entry", "Project", "Starting from $550/hr")
  ];

  selectedProject(clickedProject) {
    this.selectedProject = clickedProject;
    if(clickedProject.type === "Project"){
      alert("It is a Project!");
    } else if(clickedProject.type === "Contest"){
      alert("It is a Contest!");
    }
  }
}
