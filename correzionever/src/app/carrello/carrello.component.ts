import { Component, Input } from '@angular/core';
import { CartProduct } from '../Models/cartproduct.model';

@Component({
  selector: 'app-carrello',
  standalone: true,
  imports: [],
  templateUrl: './carrello.component.html',
  styleUrl: './carrello.component.css'
})
export class CarrelloComponent {
  @Input() elemento!: CartProduct
}
