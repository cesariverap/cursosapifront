import { Component, OnInit } from '@angular/core';
import { CousesApiService } from './services/couses-api.service';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'courses-front';
  courses =[];
  coursesList = [];
  page = null;
  tempParginator = []
  constructor(private api:CousesApiService){
    
  }

  ngOnInit(): void {
    this.getCouses(1);
  }

  async getCouses(page){
    if(page === this.page){
      return
    }
    this.page = page;
    try {
      let result = await firstValueFrom(this.api.getCourses(page));
      if(result){
        this.courses = result['cursos'];
        this.coursesList = result['cursos'];
        this.getTotalPages();
      }else{
        
      }
    } catch (error) {
      this. getCouses(this.page);
    }
  }

  async getTotalPages(){
    try {
      let result = await firstValueFrom(this.api.totalPages());
      if(result){
        this.tempParginator = [];
        for (let index = 0; index < result['total_pages']; index++) {
          this.tempParginator.push(index + 1)
        }
      }else{
        
      }
    } catch (error) {
      this.getTotalPages();
    }
  }

  searchCourse(e){
    if(e.length > 0){
      this.coursesList = this.courses.filter(c => c.title.toLocaleLowerCase().includes(e));
    }else{
      this.coursesList = this.courses;
    }
  }
}
