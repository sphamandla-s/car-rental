import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CarRentalCardComponent } from './components/shared/car-rental-card/car-rental-card.component';
import { carsData } from './models/cars';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { Choose } from './consents';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCancel, faCheckCircle, faDriversLicense, faLocationPinLock, faMoneyBill1Wave, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FooterComponent } from './components/footer/footer.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CarRentalCardComponent, HeaderComponent,FooterComponent, CommonModule,FontAwesomeModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  cars = carsData
  chooseUs = Choose
  icons = [faPhone,faMoneyBill1Wave,faCheckCircle, faLocationPinLock, faDriversLicense,  faCancel]
}
