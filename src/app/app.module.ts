import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
// import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyArfvaPl87B55UNe0c0-6zzGae0x-kx7xo",
  authDomain: "articlehub-40376.firebaseapp.com",
  projectId: "articlehub-40376",
  storageBucket: "articlehub-40376.appspot.com",
  messagingSenderId: "62526963294",
  appId: "1:62526963294:web:997785d5b0dde73855becf"
};



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // FontAwesomeModule,
    AngularFireModule.initializeApp(firebaseConfig),
    // AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
