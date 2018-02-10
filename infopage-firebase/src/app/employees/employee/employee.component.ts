import { Component, OnInit } from '@angular/core';
import { EmployeeService } from "../shared/employee.service";
import { NgForm } from '@angular/forms';
import { ToastrService } from "ngx-toastr";

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private _employeeService: EmployeeService,
            private _toastrService: ToastrService) { }

  ngOnInit() {
    this._employeeService.getData();
    this.resetForm();
  }

  onSubmit(employeeForm: NgForm) {
    if(employeeForm.value == null)
      this._employeeService.insertEmployee(employeeForm.value);
    else
      this._employeeService.updateEmployee(employeeForm.value);
      
    this.resetForm();
    this._toastrService.success("Submitted Successfully", "Employee Register");
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
