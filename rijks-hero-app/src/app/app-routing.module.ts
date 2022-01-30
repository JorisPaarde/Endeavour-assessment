import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtObjectDetailComponent } from './art-object-detail/art-object-detail.component';
import { ArtObjectsComponent } from './art-objects/art-objects.component';


const routes: Routes = [
  { path: '', redirectTo: '/art-objects', pathMatch: 'full' },
  { path: 'detail/:id', component: ArtObjectDetailComponent},
  { path: 'art-objects', component: ArtObjectsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }