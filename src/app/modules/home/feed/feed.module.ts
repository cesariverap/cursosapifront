import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeedRoutingModule } from './feed-routing.module';
import { FeedComponent } from '../../../pages/home/feed/feed.component';
import { GlobalModule } from '../../global/global.module';
import { PrimengModule } from '../../primeng/primeng.module';
import { HomeFeedComponent } from '../../../pages/home/feed/home-feed/home-feed.component';


@NgModule({
  declarations: [
    FeedComponent,
    HomeFeedComponent
  ],
  imports: [
    CommonModule,
    FeedRoutingModule,
    GlobalModule,
    PrimengModule
  ]
})
export class FeedModule { }
