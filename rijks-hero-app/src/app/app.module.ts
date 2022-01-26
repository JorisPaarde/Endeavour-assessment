import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArtObjectsComponent } from './art-objects/art-objects.component';
import { ArtObjectDetailComponent } from './art-object-detail/art-object-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ArtObjectsComponent,
    ArtObjectDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
