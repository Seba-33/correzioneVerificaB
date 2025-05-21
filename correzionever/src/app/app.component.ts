import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { VegetableListComponent } from './vegetable-list/vegetable-list.component';
import { Vegetables } from './Models/vegetables.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,VegetableListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent  implements OnInit {
  title = 'correzionever';
  loading!: boolean;
  obs! : Observable<Vegetables[]>
  data! : object;
  http : HttpClient;
  vettVerd : Vegetables[] = []

  constructor(http: HttpClient){this.http = http}

  makeChiamata(){
    this.loading = true
    this.obs = this.http.get<Vegetables[]>('https://my-json-server.typicode.com/malizia-g/fine_anno_exp/verdure')
    this.obs.subscribe(this.getData)
  }

  getData = (d : Vegetables[]) =>{
    this.vettVerd = d
    console.log(this.vettVerd)

  }

  ngOnInit(): void {
    this.makeChiamata()
  }

  
}
