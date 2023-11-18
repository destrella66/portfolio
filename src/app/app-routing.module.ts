import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { SkillsComponent } from './pages/skills/skills.component';

const routes: Routes = [
  // {
  //   path: '', redirectTo: '/home', pathMatch: 'full',
  //   component: HomeComponent
  // },
  // {
  //   path: '/about',
  //   component: AboutComponent
  // },
  // {
  //   path: '/contact',
  //   component: ContactComponent
  // }, {
  //   path: '/projects',
  //   component: ProjectsComponent
  // }, {
  //   path: '/skills',
  //   component: SkillsComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
