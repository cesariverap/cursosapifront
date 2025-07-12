import { Component, OnInit } from '@angular/core';
import { CousesApiService } from '../../services/couses-api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';
@Component({
  selector: 'app-detail-course',
  templateUrl: './detail-course.component.html',
  styleUrl: './detail-course.component.scss'
})
export class DetailCourseComponent implements OnInit{
  sidebarVisible = true;
  id = "";
  constructor(private route: ActivatedRoute, private router: Router, private api:CousesApiService){

  }
  ngOnInit(): void {
    this.id ="";
    this.route.queryParamMap.subscribe(params => {
      this.id = atob(params.get('course')); // 'course' es el nombre del parámetro en tu URL
      this.getDetail();
    });
  }

  async getDetail(){
      try {
        let result = await firstValueFrom(this.api.detailCourse(this.id));
        if(result){
          console.log(result['curso']['coupon'])
          const url = result['curso']['link'];
          const parts = url.split('/');
          const lastSegment = parts[parts.length - 1];
          window.open(`https://www.udemy.com/course/${lastSegment}/?couponCode=${result['curso']['coupon']}`, '_bank');
          this.goToHome();
        }else{

        }
      } catch (error) {
        this.getDetail();
      }
    }

  goToHome(){
    this.router.navigate([`/`])
   }
}
