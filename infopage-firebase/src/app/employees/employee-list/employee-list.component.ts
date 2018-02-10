import { Component, OnInit } from '@angular/core';
import { EmployeeService } from "../shared/employee.service";
import { Employee } from "../shared/employee.model";

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employeeList: Employee[];

  constructor(private _employeeService: EmployeeService) { }

  ngOnInit() {
    var employeeData = this._employeeService.getData();
    employeeData.snapshotChanges().subscribe(item => {
      this.employeeList = [];
      item.forEach(element => {
        var firebaseData = element.payload.toJSON();
        firebaseData["$key"] = element.key;
        this.employeeList.push(firebaseData as Employee);
      }); 
    });
  }

  onEdit(employee: Employee) {
    // this._employeeService.selectedEmployee = employee;
    this._employeeService.selectedEmployee = Object.assign({}, employee); // update the copy of the initial employee object
  }




}
