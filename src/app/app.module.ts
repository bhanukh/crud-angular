import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './dashbord/profile/profile.component';
import { HttpClientModule } from '@angular/common/http';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideDatabase, getDatabase } from '@angular/fire/database';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { UserdataService } from './service/userdata.service';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { LogoutComponent } from './dashbord/logout/logout.component';
import { AuthService } from './service/auth.service';
import { UserDetailsComponent } from './signup/user-details/user-details.component';
import { NavbarComponent } from './dashbord/navbar/navbar.component';
import { UserListComponent } from './dashbord/user-list/user-list.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ErrorComponent } from './error/error.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { bg_BG } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import bg from '@angular/common/locales/bg';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NgIf } from '@angular/common';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import {ToastrModule} from 'ngx-toastr'

registerLocaleData(bg);

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    ProfileComponent,
    LogoutComponent,
    UserDetailsComponent,
    NavbarComponent,
    UserListComponent,
    ErrorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore()),
    NoopAnimationsModule,
    NzCardModule,
    NzFormModule,
    NgIf,
    ReactiveFormsModule,
    NzInputModule,
    ToastrModule.forRoot()
  ],
  providers: [
    UserdataService,
    AuthService,
    { provide: FIREBASE_OPTIONS, useValue: environment.firebase },
    { provide: NZ_I18N, useValue: bg_BG },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
