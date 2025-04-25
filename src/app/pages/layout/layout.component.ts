import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent
{

router = inject(Router);
logout()
{
  this.router.navigateByUrl('login');
}

dropdownOpen = false;

toggleDropdown(event: Event) {
  event.preventDefault(); // Prevents href navigation
  this.dropdownOpen = !this.dropdownOpen;
}

}
