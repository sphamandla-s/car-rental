import { Component, Input } from '@angular/core';
import { CarCard } from '../../../models/cars';

@Component({
  selector: 'app-car-rental-card',
  standalone: true,
  imports: [],
  templateUrl: './car-rental-card.component.html',
  styleUrl: './car-rental-card.component.css'
})
export class CarRentalCardComponent {
  @Input()
  car!: CarCard;


  getStarsArray(stars: number, filled: boolean): number[] {
    const starCount = filled ? Math.floor(stars) : 5 - Math.floor(stars);
    return Array.from({ length: starCount }, (_, index) => index);
  }
}
