import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detail-course',
  templateUrl: './detail-course.component.html',
  styleUrl: './detail-course.component.scss'
})
export class DetailCourseComponent implements OnInit{
  sidebarVisible = true;
  constructor(private router: Router){

  }
  ngOnInit(): void {
    console.log("componente iniciado ")
  }

  goToHome(){
    this.router.navigate([`/`])
   }
}
