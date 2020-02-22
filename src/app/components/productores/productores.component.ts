import { Component, OnInit } from '@angular/core';
import { ProductoresService } from 'src/app/services/productores.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-productores',
  templateUrl: './productores.component.html',
  styles: []
})
export class ProductoresComponent implements OnInit {

  
  productores:any[] = [];

  constructor(  private prodservice:ProductoresService, 
                private router:Router  ) { }

  ngOnInit() {

  this.prodservice.getProductores()
  .subscribe( data => {
    this.productores = data 
    // console.log(data);
  } );
  
}

  verArtista( idx:string ){
    // console.log(idx);
    this.router.navigate( ['/artista', idx] );
    

  }

}
