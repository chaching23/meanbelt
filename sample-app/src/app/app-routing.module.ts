import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { showComponent } from './show/show.component';
import { EditComponent } from './edit/edit.component';
import { NewComponent } from './new/new.component';



const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'pets/show/:id',  component: showComponent },
  { path: 'pets/new',  component: NewComponent },
  { path: 'pets/edit/:id', component: EditComponent },
];

  
  
  
  


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule { }
