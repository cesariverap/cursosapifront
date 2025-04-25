import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { PrimengModule } from '../primeng/primeng.module';
import { GlobalModule } from '../global/global.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from '../../pages/login/login.component';
import { SignInComponent } from '../../pages/login/sign-in/sign-in.component';


@NgModule({
  declarations: [
    LoginComponent,
    SignInComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    PrimengModule,
    GlobalModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class LoginModule { }
