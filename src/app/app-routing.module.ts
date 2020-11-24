import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LoginsuccessComponent } from './loginsuccess/loginsuccess.component';
import { ProductComponent } from './product/product.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  {path:``,component:LoginComponent},
  {path:`loginsuccess`,component:LoginsuccessComponent},
  {path:`register`,component:RegistrationComponent},
  {path:`products`,component:ProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
