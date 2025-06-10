// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CourseCardComponent } from './components/course-card/course-card.component';
import { CategoryFilterComponent } from './components/category-filter/category-filter.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { SearchComponent } from './components/search/search.component';
import { SortFilterComponent } from './components/sort-filter/sort-filter.component';
// import { CourseCardComponent } from './course-card/course-card.component';
// import { CategoryFilterComponent } from './category-filter/category-filter.component';
// import { SortFilterComponent } from './sort-filter/sort-filter.component';
// import { SearchComponent } from './search/search.component';
// import { HeaderComponent } from './header/header.component';
// import { FooterComponent } from './footer/footer.component';
// import { HeroSectionComponent } from './hero-section/hero-section.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseCardComponent,
    CategoryFilterComponent,
    FooterComponent,
    HeaderComponent,
    HeroSectionComponent,
    SearchComponent,
    SortFilterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }