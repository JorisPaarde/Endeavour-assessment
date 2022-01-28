import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtObjectDetailComponent } from './art-object-detail/art-object-detail.component';
import { ArtObjectsComponent } from './art-objects/art-objects.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: ArtObjectDetailComponent},
  { path: 'art-objects', component: ArtObjectsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }