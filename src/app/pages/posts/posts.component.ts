import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {

  //creamos una propiedad llamada "mensaje" en la cual especificamos que va a ser un arreglo de cualquier objeto
  // mensajes: any[] = []; dejamos codigo de como empezamos el curso..
  mensajes: any;


          //  servicio -  nombre   -   tipo
  constructor( private dataService: DataService){}

  //La pagina es cargada por primera vez entonces aca llamo al metodo que esta en DataService
  ngOnInit(){
    //this.mensaje ahora es un puntero a el valor de estos posteos, osea de esta suscripcion 
    this.mensajes = this.dataService.getPosts();

      //Lo dejamos como referencia de cuando empezabamos el curso
      // .subscribe( 
      //   (posts: any ) => 
      //   {console.log(posts);
      //   //asigno los mensajes a los posteos que recibo de mi servicio
      //   this.mensajes = posts;  
      // });
  }
}
