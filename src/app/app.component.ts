import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent implements OnInit{
  title = 'Hire expert freelancers for any job, online';
  logo: string = "Freelancer";
  hire: string = "Hire Freelancers";
  find: string = "Find Work";
  workings: string = "How It Works";
  admins: string = "You are the captain now";



  constructor() { }

  ngOnInit(){

  }
}
