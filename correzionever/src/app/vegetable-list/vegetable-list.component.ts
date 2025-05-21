import { Component, Input } from '@angular/core';
import { Vegetables } from '../Models/vegetables.model';
import { CartProduct } from '../Models/cartproduct.model';

@Component({
  selector: 'app-vegetable-list',
  standalone: true,
  imports: [],
  templateUrl: './vegetable-list.component.html',
  styleUrl: './vegetable-list.component.css'
})
export class VegetableListComponent {
  @Input() verdura! : Vegetables
  @Input() cartProdu! : CartProduct[]

  aggiungi(nProd: HTMLInputElement){
    console.log(" Nome: " + this.verdura.nome + " Quantita: " + nProd.value)
    this.cartProdu.push(new CartProduct(this.verdura.nome, this.verdura.descrizione, this.verdura.prezzo, nProd.value)) 

  }
}