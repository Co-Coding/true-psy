import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ProductoresComponent } from './components/productores/productores.component';
import { MusicaComponent } from './components/musica/musica.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { ArtistainfoComponent } from './components/artistainfo/artistainfo.component';


const routes: Routes = [
          { path: 'home' , component: HomeComponent  },
          { path: 'about' , component: AboutComponent  },
          { path: 'artistas' , component: ProductoresComponent  },
          { path: 'musica' , component: MusicaComponent  },
          { path: 'contacto' , component: ContactoComponent  },
          { path: 'artista/:id' , component: ArtistainfoComponent  },
          { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ HomeComponent, AboutComponent, ProductoresComponent, MusicaComponent, ContactoComponent, ArtistainfoComponent ];
