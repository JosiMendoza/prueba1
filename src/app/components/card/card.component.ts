import { Component, OnInit } from '@angular/core';
import { TcgDexService } from 'src/app/services/tcg-dex.service'; 
import { Observable } from 'rxjs';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent  implements OnInit {

  data: any[] = [];
  cartaMuestra: any;

  constructor(private tcgDexService: TcgDexService) {}

  ngOnInit() {
    this.llenarData();
  }

  llenarData(){
    this.tcgDexService.getData().subscribe(data => {
      this.data = data;
      this.cartaMuestra = this.data;
      
      console.log(this.data);
      console.log(this.cartaMuestra);


      this.cartaMuestra.image = this.cartaMuestra.image+'/high.png';
      //this.cartaMuestra.image = 'https://assets.tcgdex.net/en/col/col1/1/high.png'  
      console.log(this.cartaMuestra.image);
    })
  }

  conseguirAleatorio(data : any[]){
    const randomIndex = Math.floor(Math.random()* data.length)
    return [data[randomIndex]];
  }
}
