import { Component, OnInit, isDevMode } from '@angular/core';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //styleUrls: ['./app.component.css']
  styles: [`
    .disableColor 
    { 
      color: white;
    }

    .enabledColor
    {
      color:yellow;
    }
    `]
})

export class AppComponent implements OnInit{
  title = 'new-app';
  name='';

  btnTest = 'Test Button';
  myBtn = 'My Button';
  isDisabled: boolean = true;
  isBtnClicked:string='No action';
  inputData: string ='';
  color = 'red';
  selectDay='';

  // employees: any[] = [
  //   {empId: 'emp1', empName: 'tom arnold', gender: 'male', dob: '12/8/1988', salary: 1234.22},
  //   {empId: 'emp2', empName: 'sarah lamb', gender: 'female', dob: '10/14/1989', salary: 2352.34},
  //   {empId: 'emp3', empName: 'cheryl aspole', gender: 'female', dob: '7/24/1992', salary: 4577.65},
  //   {empId: 'emp4', empName: 'david leary', gender: 'male', dob: '8/19/1990', salary: 5433.76},
  // ];

  // employees: any[] = [
  //   {empId: 'emp1', empName: 'tom arnold', gender: 'male', dob: '12/8/1988', salary: 1234.22},
  //   {empId: 'emp2', empName: 'sarah lamb', gender: 'female', dob: '10/14/1989', salary: 2352.34},
  //   {empId: 'emp3', empName: 'cheryl aspole', gender: 'female', dob: '7/24/1992', salary: 4577.65},
  //   {empId: 'emp4', empName: 'david leary', gender: 'male', dob: '8/19/1990', salary: 5433.76},
  // ];

  constructor(){
    setTimeout(()=> {
      this.isDisabled = false;
    }, 3000);

    // setTimeout(()=>{
    //   this.isDisabled=true;
    // }, 4000);
  }

  ngOnInit(){
    console.table(environment);

    if (isDevMode()) {
      console.log('Development!');
    }
  }

  onBtnClick(){
    this.isBtnClicked = this.myBtn + " got clicked";
  }

  OnUpdateInput(event: Event){
    //console.log(event);
    this.inputData  = (<HTMLInputElement>event.target).value
  }

  getStyleColor(){
    return this.isDisabled ? 'red' : 'green';
  }
}
