import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})




export class AppComponent {
  title = 'studentsystem';
  // favoriteSeason: string;
  submitted=false;
  genders: string[] = ['Male', 'Female'];
  years:string[]=['FE','SE','TE','BE']


user={
  firstname:'',
  lastname:'',
  city:'',
  year:'',
  phone:'',
gender:''

}

  onSubmit(form) {
    this.submitted=true;
  this.user.firstname=form.fname;
  this.user.lastname=form.lname;
  this.user.city=form.cityname;
  this.user.year=form.year;
  this.user.gender=form.gender;
  
  this.user.phone=form.phone;
}
}

