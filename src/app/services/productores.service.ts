import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ProductoresService {

  constructor( private http:HttpClient ) { }


  productoresService:any = [];

  private url = '/assets/data/productores.json'

  getProductores():Observable<IProductores[]>{
    return this.http.get<IProductores[]>(this.url);
  }

   verArtista( id:string ){
   return this.http.get<IProductores[]>(this.url)
   .pipe(map ( data => data[id] ));
   }


}

export interface IProductores{
idspotify: string,
id: string,
alias: string,
nombre: string,
productora: string,
estilo: string,
img: string,
bio: string
}