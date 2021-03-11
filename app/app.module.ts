import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatIconModule} from '@angular/material/icon';
import {MatRadioModule} from '@angular/material/radio';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
// import {NgForm} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    // NgForm,
    MatButtonModule,
    NoopAnimationsModule,
    MatDatepickerModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatRadioModule,
    ReactiveFormsModule,
    FormsModule,
 MatCheckboxModule,
 MatFormFieldModule,
 MatInputModule,
 MatIconModule,
 MatSelectModule

  ],

  exports: [
    MatDatepickerModule,
    MatFormFieldModule,
 
    MatInputModule,
    BrowserAnimationsModule
  ],
  providers: [ MatDatepickerModule ],


  bootstrap: [AppComponent]
})



export class AppModule { }
