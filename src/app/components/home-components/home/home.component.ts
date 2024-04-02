import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { CarRentalCardComponent } from '../../shared/car-rental-card/car-rental-card.component';
import { FooterComponent } from '../footer/footer.component';
import { CommonModule } from '@angular/common';
import { faCancel, faCheckCircle, faDriversLicense, faLocationPinLock, faMoneyBill1Wave, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { carsData } from '../../../models/cars';
import { Choose } from '../../../consents';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CarRentalCardComponent, HeaderComponent,FooterComponent, CommonModule,FontAwesomeModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  cars = carsData
  chooseUs = Choose
  icons = [faPhone,faMoneyBill1Wave,faCheckCircle, faLocationPinLock, faDriversLicense,  faCancel]
}
