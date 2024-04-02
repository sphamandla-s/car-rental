import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
router = inject(Router)
email = "";
password = "";
  
   
  signIn(event : Event){
    event.preventDefault();
    console.log(this.email, this.password)
    this.router.navigate(['/home'])
  }
}
