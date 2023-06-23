import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarmainComponent } from './components/navbarmain/navbarmain.component';

const routes: Routes = [
  { path: '', component: NavbarmainComponent },
  { path: 'home', component: NavbarmainComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
