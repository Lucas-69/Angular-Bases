import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit{

  @Input() mensaje: any; //la propiedad mensaje va a ser recibida desde componente exterior
  //     Evento nombre =  con esto digo que es un evento e importo EventEmitter() desde angular/core 
  @Output() clickPosts = new EventEmitter();

  
  constructor() {

  }

  ngOnInit() {
      
  }

  onClick(){
    console.log(this.mensaje.id);
  }

}
