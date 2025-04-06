import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule,RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
loginObj:any = {
  username: '',
  password: ''
}

router = inject(Router);

onLogin()
{
  if(this.loginObj.username == 'admin123' && this.loginObj.password == 'admin123')
  {
    this.router.navigateByUrl('dashboard');
  }
  else
  {
    alert("Invalid Credentials");
  }
}

}
