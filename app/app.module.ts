import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClarityModule } from 'clarity-angular';
import { ROUTING } from "./app.routing";
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserService } from './user.service';

@NgModule({
  imports:  [ 
    BrowserModule, 
    FormsModule, 
    ClarityModule,
    ROUTING,
    HttpClientModule 
  ],
  declarations: [ AppComponent, HomeComponent, LoginComponent, RegisterComponent ],
  bootstrap:    [ AppComponent ],
  providers: [UserService]
})
export class AppModule { }
