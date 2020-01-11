import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ContactoModel } from 'src/app/models/contacto.model';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styles: []
})
export class ContactoComponent implements OnInit {


  contacto = new ContactoModel
  
  constructor() { 
    

  }

  ngOnInit() {
  }


  onSubmit( form:NgForm ){

    if ( form.invalid ){ return}

    console.log(form);
    console.log(this.contacto);
    
    

  }




}
