import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Project } from '../models/freelance.model';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent {
  @Input() childProjectList: Project[];
  @Output() sendClick = new EventEmitter();

  projectHeader: string = "Hello";

  hypeButtonClicked(projectToEdit: Project){
    this.sendClick.emit(projectToEdit);
  }
  typeColor(currentProject){
    if (currentProject.trend === 2){
      return "bg-success";
    } else if(currentProject.trend === 1){
      return "bg-warning";
    } else {
      return "bg-danger";
    }
  }
}
