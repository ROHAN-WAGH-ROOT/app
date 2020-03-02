import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'proj';
  welcomeMessage='Hello issc';
  Score="1000";
  student={
    name:'rahul',
    age:20
  };
  //student.name;
  students=['rohan','raju','rahul','nikita','priti'];
}
