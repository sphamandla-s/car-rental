import { Component } from '@angular/core';
import { Nav_Links } from '../../consents';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  navLinks = Nav_Links
}
