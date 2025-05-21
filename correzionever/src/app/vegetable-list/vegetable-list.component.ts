import { Component, Input } from '@angular/core';
import { Vegetables } from '../Models/vegetables.model';

@Component({
  selector: 'app-vegetable-list',
  standalone: true,
  imports: [],
  templateUrl: './vegetable-list.component.html',
  styleUrl: './vegetable-list.component.css'
})
export class VegetableListComponent {
  @Input() verdura! : Vegetables

  aggiungi(nProd: HTMLInputElement){
    console.log(" Nome: " + this.verdura.nome + " Quantita: " + nProd.value)

  }
}