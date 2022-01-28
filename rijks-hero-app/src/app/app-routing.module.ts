import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtObjectsComponent } from './art-objects/art-objects.component';


const routes: Routes = [
  { path: 'art-objects', component: ArtObjectsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }