import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';
import { timer } from 'rxjs';
import { mergeMap } from 'rxjs/operators';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  constructor( private _spotiservice:SpotifyService ) {

  } 

  ngOnInit() { 
    const reloadInterval = 1800000;

    timer(0, reloadInterval).pipe(
      mergeMap(_ => this._spotiservice.getToken())).subscribe()
        
  }

  

}
