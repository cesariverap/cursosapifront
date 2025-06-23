import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailCourseComponent } from './components/detail-course/detail-course.component';

const routes: Routes = [
    { 
        path: 'detail', 
        component: DetailCourseComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }