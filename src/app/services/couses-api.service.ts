import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})

export class CousesApiService {
  url = "https://apiparacursosdeestudiantes-grbfahavd7d6hkgk.brazilsouth-01.azurewebsites.net/";
  constructor(
    private http: HttpClient
  ) {}

  getCourses(body){
    return this.http.get(`${this.url}/api/cursos?page=${body}`);
  }

  totalPages(){
    return this.http.get(`${this.url}/api/cursos/total_pages`);
  }

  detailCourse(body){
     return this.http.get(`${this.url}/api/cursos/info_from_url?url=${body}`);
  }
}
