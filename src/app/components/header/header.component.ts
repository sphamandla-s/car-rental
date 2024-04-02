import { Component } from '@angular/core';
import { NavbarComponent } from '../shared/navbar/navbar.component';
import { faArrowUp, faCarAlt, faGasPump, faGears, faTachometer } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NavbarComponent, FontAwesomeModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  icons = [faGasPump, faTachometer, faGears, faCarAlt]
arrow = faArrowUp

iconsDesc = ["Flue Type", "Milage", "Transmission", "Model"]
}
