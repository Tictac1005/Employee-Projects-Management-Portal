import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  imports: [FormsModule,RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent 
{
  loginObj:any =
  {
    username: "",
    password: ""
  };

http =  inject(HttpClient);
router = inject(Router);

onLogin() {
  debugger;
  this.http.post("https://projectapi.gerasim.in/api/EmployeeManagement/login", this.loginObj)
    .subscribe((res: any) => {
      if (res.result) {
        localStorage.setItem('employeeApp', JSON.stringify(res.data));
        this.router.navigateByUrl('dashboard');
      } else {
        alert(res.message);
      }
    });
}
}