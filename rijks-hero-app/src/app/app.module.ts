import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArtObjectsComponent } from './art-objects/art-objects.component';
import { ArtObjectDetailComponent } from './art-object-detail/art-object-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { SearchFormComponent } from './search-form/search-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ArtObjectsComponent,
    ArtObjectDetailComponent,
    MessagesComponent,
    SearchFormComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [ArtObjectsComponent,],
  bootstrap: [AppComponent]
})
export class AppModule { }
