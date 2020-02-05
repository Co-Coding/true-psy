// import { Component, OnInit } from '@angular/core';
// import { SpotifyService } from 'src/app/services/spotify.service';
// import { interval, Subscription } from 'rxjs';

// @Component({
//   selector: 'app-musica',
//   templateUrl: './musica.component.html',
//   styles: []
// })
// export class MusicaComponent {


//   subscription: Subscription;
//   intervalId: number;

//   newReleases: any[];
//   error: any;

//   constructor(private spotify: SpotifyService) {

    
    
//     if (!sessionStorage.getItem('token')) {
//       this.getToken();
//     } else {
//       this.getNewReleases();
//     }
//     console.log(this.newReleases);
//   }

//   getToken() {
//     this.spotify.getToken().subscribe(data => {});
//   }

//   getNewReleases() {
//     this.spotify.getNewReleases()
//       .subscribe( (data: any) => {
//         this.newReleases = data
//         console.log(data);
//         (err: any) => (this.error = err.error.error.message)
//       } 
//       );
//   }

//    ngOnInit() {

//    }

// }





