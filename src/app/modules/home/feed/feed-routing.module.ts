import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeedComponent } from '../../../pages/home/feed/feed.component';
import { HomeFeedComponent } from '../../../pages/home/feed/home-feed/home-feed.component';

const routes: Routes = [
  { 
    path: "", component: FeedComponent,
    children: [
      { path: "", component: HomeFeedComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeedRoutingModule { }
