import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { AppComponent } from './app.component';
// import { MusicaComponent } from './components/musica/musica.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { HttpClientModule } from '@angular/common/http';
import { ArtistainfoComponent } from './components/artistainfo/artistainfo.component';
import { FooterComponent } from './components/footer/footer.component';

import { FormsModule } from '@angular/forms';


// import { AboutComponent } from './components/about/about.component';
// import { HomeComponent } from './components/home/home.component';
// import { ProductoresComponent } from './components/productores/productores.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    routingComponents,
    // MusicaComponent,
    ContactoComponent,
    ArtistainfoComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
