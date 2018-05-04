import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Project } from '../models/freelance.model';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent {
  projectHeader: string = "Hello";
  @Input() childProjectList: Project[];
}
