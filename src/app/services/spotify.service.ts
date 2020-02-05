import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import configFile from 'src/assets/data/config.json';
import productores from 'src/assets/data/productores.json';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http:HttpClient ) {}


  getQuery( query:string ){

    const url = `${configFile.api.url}${query}`; 

    const headers = new HttpHeaders({
      Authorization: sessionStorage.getItem('token')
    });
    return this.http.get(url, { headers });
    
  }

  getToken(): any {
    return this.http.get(configFile.api.herokuUrl).pipe(
      map((data: any) => {
        // console.log(data);
        sessionStorage.setItem('token', `Bearer ${data.access_token}`);
      })
    );
  }

  getNewReleases() {
    return this.getQuery('browse/new-releases')
    .pipe(
      map(data => data['albums'].items)
    );
  }

   getArtistaTop(idspotify:any){
     return this.getQuery(`artists/${idspotify}/top-tracks?country=AR`)
   }

   getArtistaAlbums(idspotify:any){
     return this.getQuery(`artists/${idspotify}/albums?limit=3`)
   }



  getArtista( termino:string ){
    //https://api.spotify.com/v1/artists/2YIxJ9C0DDvuot3bK6lWNk/top-tracks
    return this.getQuery(`search?q=${ termino }&type=album`);
  }

  }


