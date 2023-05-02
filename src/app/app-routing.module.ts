import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SubjectComponent } from './subject/subject.component';
import { WildCardComponentComponent } from './wild-card-component/wild-card-component.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'search/:subject',
    component:HomeComponent
  },
  { path: 'subjects/:title', 
  component: SubjectComponent 
  },
  {
    path:'**',
    component:WildCardComponentComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
