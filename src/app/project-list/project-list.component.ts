import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Project } from '../models/freelance.model';
import { Router } from '@angular/router';
import { FirebaseListObservable } from 'angularfire2/database';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css'],
  providers: [ProjectService]
})
export class ProjectListComponent implements OnInit {
  projects: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;

  // @Input() childProjectList: Project[];
  // @Output() sendClick = new EventEmitter();

  constructor(
    private router: Router,
    private projectService: ProjectService
  ) { }

  ngOnInit(){
    this.projects = this.projectService.getProjects();
  }

  // hypeButtonClicked(projectToEdit: Project){
  //   this.sendClick.emit(projectToEdit);
  }
  // typeColor(currentProject){
  //   if (currentProject.trend === 2){
  //     return "bg-success";
  //   } else if(currentProject.trend === 1){
  //     return "bg-warning";
  //   } else {
  //     return "bg-danger";
  //   }
  // }
}
