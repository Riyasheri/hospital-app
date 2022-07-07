import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FrontPageComponent } from './front-page/front-page.component';
import { SearchdepartmentComponent } from './searchdepartment/searchdepartment.component';
import { ViewdoctorsComponent } from './viewdoctors/viewdoctors.component';

@NgModule({
  declarations: [
    AppComponent,
    FrontPageComponent,
    SearchdepartmentComponent,
    ViewdoctorsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
