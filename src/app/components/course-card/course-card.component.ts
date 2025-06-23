import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as CryptoJS from 'crypto-js';

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
  let hash = CryptoJS.MD5(link).toString();
  this.router.navigate([`detail`], { queryParams: { course: hash } })
 }
}
