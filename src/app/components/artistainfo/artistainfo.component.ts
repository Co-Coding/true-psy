import { Component, OnInit } from '@angular/core';
import { ProductoresService } from 'src/app/services/productores.service';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';


@Component({
  selector: 'app-artistainfo',
  templateUrl: './artistainfo.component.html',
  styles: []
})
export class ArtistainfoComponent implements OnInit {

  top:any[] = [] ;
  album:any[] = [] ;
  productores:any = {} ;

  constructor( private produser:ProductoresService, private activateRoute:ActivatedRoute,
               private _spotiservice:SpotifyService ) {

    this.activateRoute.params.subscribe( params => { 
      // console.log(params['id']);
    this.productores =  
    this.produser.verArtista(params['id'])
                  .subscribe( data => {
                          this.productores = data;
                          console.log(this.productores);

    this._spotiservice.getArtistaTop(this.productores.idspotify)
                  .subscribe( (top:any) => {
                     this.top = top.tracks
                    console.log(top.tracks)})

    this._spotiservice.getArtistaAlbums(this.productores.idspotify)
                  .subscribe( (data:any) => {
                    this.album = data.items;
                    console.log(data.items);})


                        });

     });

  } 




  ngOnInit() {
    console.log(this.productores);
    
  }

  

}
