import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent implements OnInit{
  title = 'Freelancers';
  header: string = "Hire Freelancers Online";


  constructor() { }

  ngOnInit(){

  }

  // hypeProject(clickedProject) {
  //   this.selectedProject = clickedProject;
  //   clickedProject.intLevel += 1;
  //   if(clickedProject.intLevel > 5){
  //     clickedProject.trend = 2;
  //   } else if(clickedProject.intlevel > 1){
  //     clickedProject.trend = 1;
  //   }
  // }
}
