import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { SharedRoutingModule } from './shared-routing.module';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import { provideFirebaseApp } from '@angular/fire/app';
import { provideAuth } from '@angular/fire/auth';
import { provideDatabase } from '@angular/fire/database';
import { provideFirestore } from '@angular/fire/firestore';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';
import { getFirestore } from 'firebase/firestore';
import { environment } from 'src/environments/environment';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { NZ_I18N, en_US } from 'ng-zorro-antd/i18n';
import { AuthService } from '../service/auth.service';
import { UserdataService } from '../service/userdata.service';
import { ErrorComponent } from './components/error/error.component';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { NzNotificationModule } from 'ng-zorro-antd/notification';



@NgModule({
  declarations: [


    ErrorComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore()),
    NzCardModule,
    NzFormModule,
    NgIf,
    ReactiveFormsModule,
    NzInputModule,
    ToastrModule.forRoot({
      positionClass: 'toast-top-right',
      preventDuplicates: true,
      timeOut: 3000,
      progressBar: true,
      progressAnimation: 'decreasing',
    }),
    NzSelectModule,
    NzButtonModule,
    NzModalModule,
    NzUploadModule,
    NzIconModule,
    NgbPaginationModule,
    NzNotificationModule

  ],
  exports:[
    CommonModule,
    SharedRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    NzCardModule,
    NzFormModule,
    NgIf,
    ReactiveFormsModule,
    NzInputModule,
    NzSelectModule,
    NzButtonModule,
    NzModalModule,
    NzUploadModule,
    NzIconModule,
    NgbPaginationModule,
    NzNotificationModule
  ],
  providers: [
    UserdataService,
    AuthService,
    { provide: FIREBASE_OPTIONS, useValue: environment.firebase },
    { provide: NZ_I18N, useValue: en_US },
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class SharedModule { }
