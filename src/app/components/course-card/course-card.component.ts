import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.scss'
})
export class CourseCardComponent {
 @Input() course = null;
  constructor(private router: Router){

  }
 goToCouse(link){
  let hash = btoa(link);
  this.router.navigate([`detail`], { queryParams: { course: hash } })
 }
}
