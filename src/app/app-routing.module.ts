import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
    { 
      path: '', 
      loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule)
    },
    { 
        path: 'home', 
        component: HomeComponent,
        children : [
            {
                path: '',
                loadChildren: () => import('./modules/home/feed/feed.module').then(m => m.FeedModule)
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }