import { Component, OnInit } from '@angular/core';
import { CousesApiService } from '../../../../services/couses-api.service';
import { firstValueFrom } from 'rxjs';
@Component({
  selector: 'app-home-feed',
  templateUrl: './home-feed.component.html',
  styleUrl: './home-feed.component.scss'
})
export class HomeFeedComponent implements OnInit{
  date = new Date();
  courses = [];
  loadCouses = false;
  totalCursos = 0;
  page = 0;
  totalPagesCount = 0;
  constructor(
    private azure: CousesApiService
  ){}

  ngOnInit(): void {
    this.getCourses();
  }

  async getCourses(){
    this.loadCouses = true;
    try {
      let result = await firstValueFrom(this.azure.getCourses(1));
      if (!result) {
        
      } else {
        this.courses = result['cursos'];
        this.totalCursos = result['total_cursos'] * this.courses.length;
        this.page = result['page'] + 1;
      }
    } catch (error) {
      console.log(error)
      // if (error.status === 401) {
      //   this.globalService.sendRequest({severity: 'error', summary: 'Error', detail: error.error['message'], type: 'TOAST'});
      // }else if (error.status === 400){
      //   this.globalService.sendRequest({ severity: 'error', summary: 'Error', detail: 'ERROR_THE_REQUEST', type: 'TOAST' });
      // }else{
      //   this.globalService.sendRequest({ severity: 'error', summary: 'Error', detail: 'Error de sistema.', type: 'TOAST' });
      // }
    }
    this.loadCouses = false;
  }

  async onPageChange(e){
    this.loadCouses = true;
    try {
      let result = await firstValueFrom( this.azure.getCourses(e.page + 1));
      if (!result) {
        
      } else {
        this.courses = result['cursos'];
        this.totalCursos = result['total_cursos'] * this.courses.length;
        this.page = result['page'] + 1;
      }
    } catch (error) {
      console.log(error)
      // if (error.status === 401) {
      //   this.globalService.sendRequest({severity: 'error', summary: 'Error', detail: error.error['message'], type: 'TOAST'});
      // }else if (error.status === 400){
      //   this.globalService.sendRequest({ severity: 'error', summary: 'Error', detail: 'ERROR_THE_REQUEST', type: 'TOAST' });
      // }else{
      //   this.globalService.sendRequest({ severity: 'error', summary: 'Error', detail: 'Error de sistema.', type: 'TOAST' });
      // }
    }
    this.loadCouses = false;
  }
}
