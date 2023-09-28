import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RecoverComponent } from './recover/recover.component';
import { CheckinComponent } from './checkin/checkin.component';
import { RegisterComponent } from './register/register.component';





@NgModule({
  declarations: [								
    AppComponent,
      HomeComponent,
      LoginComponent,
      RecoverComponent,
      CheckinComponent,
      RegisterComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
