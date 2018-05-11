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
    new Project("Website Development", "Project", "Starting from $99/hr", 0, 2),
    new Project("Web Design", "Contest", "Starting from $90/hr", 0, 2),
    new Project("SEO Marketing", "Project", "Starting from $100/hr", 0, 2),
    new Project("Mobile App", "Project", "Starting from $200/hr", 0, 2),
    new Project("Article Writing", "Project", "Starting from $50/hr", 0, 2),
    new Project("Business Card", "Contest", "Starting from $30/hr", 0, 2),
    new Project("Logo Design", "Contest", "Starting from $150/hr", 0, 2),
    new Project("Data Entry", "Project", "Starting from $550/hr", 0, 2)
  ];
  selectedProject = null;

  hypeProject(clickedProject) {
    this.selectedProject = clickedProject;
    clickedProject.intLevel += 1;
    if(clickedProject.intLevel > 5){
      clickedProject.trend = 2;
    } else if(clickedProject.intlevel > 1){
      clickedProject.trend = 1;
    }
  }
}
