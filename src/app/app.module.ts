import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { registerLocaleData } from '@angular/common';
import bg from '@angular/common/locales/bg';
import { SharedModule } from './shared/shared.module';
import { MainModule } from './main/main.module';

registerLocaleData(bg);

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    MainModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
