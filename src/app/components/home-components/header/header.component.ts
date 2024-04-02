import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { faMapLocation } from '@fortawesome/free-solid-svg-icons';
import { faLocationCrosshairs } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NavbarComponent,FontAwesomeModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  locationIcon = faMapLocation
  currentLocation = faLocationCrosshairs
}
