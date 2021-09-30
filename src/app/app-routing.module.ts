import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';

const routes: Routes = [
  {path: 'app-home', component: HomeComponent},
  {path: 'app-signup', component: SignupComponent},
  {path: 'app-login', component: LoginComponent},
  {path: 'app-navbar', component: NavbarComponent},
  {path: 'app-footer', component: FooterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
