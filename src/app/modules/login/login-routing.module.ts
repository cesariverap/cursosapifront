import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../../pages/login/login.component';
import { SignInComponent } from '../../pages/login/sign-in/sign-in.component';

const routes: Routes = [
  { 
      path: "", component: LoginComponent,
      children: [
        { path: "", component: SignInComponent},
      ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
