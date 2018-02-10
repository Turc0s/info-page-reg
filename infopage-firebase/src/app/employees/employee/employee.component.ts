import { Component, OnInit } from '@angular/core';
import { EmployeeService } from "../shared/employee.service";
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private _employeeService: EmployeeService) { }

  ngOnInit() {
    this.resetForm();
  }

  onSubmit(employeeForm: NgForm) {
    this.resetForm();
  }

  // ? -> make the parameter optional
  resetForm(employeeForm?: NgForm) {
    if(employeeForm != null)
      employeeForm.reset();
    this._employeeService.selectedEmployee = {
      $key: null,
      name: "",
      position: "",
      office: "",
      salary: 0
    }
  }

}
