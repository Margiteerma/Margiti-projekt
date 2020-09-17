import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoursesComponent } from './courses/courses.component';
import { HobbiesComponent } from './hobbies/hobbies.component';
import { MainComponent } from './main/main.component';
import { WorkComponent } from './work/work.component';

const routes: Routes = [
{path:"",component: MainComponent},
{path:"work",component: WorkComponent},
{path:"hobbies",component: HobbiesComponent},
{path:"courses",component: CoursesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
