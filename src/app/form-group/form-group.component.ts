import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-group',
  templateUrl: './form-group.component.html',
  styleUrls: ['./form-group.component.css']
})
export class FormGroupComponent implements OnInit {

  userDetails!: FormGroup; //Reactive Form
  
  constructor() { }

  ngOnInit(): void {
    this.initForm(); //Reactive Form
  }

  private initForm(){
    this.userDetails = new FormGroup({
      'firstName' : new FormControl(null, Validators.required),
      'lastName' : new FormControl(null, Validators.required),
      'age': new FormControl(null, Validators.required)
    });
  }

  isValidInput(fieldName :string): boolean{
    return this.userDetails.controls[fieldName].invalid && (this.userDetails.controls[fieldName].dirty || this.userDetails.controls[fieldName].touched);
  }

  onSubmit(){
    const data= this.userDetails.value;
    window.alert(`Your name is ${data.firstName + " " + data.lastName} and your age is ${data.age}`);
  }
}
