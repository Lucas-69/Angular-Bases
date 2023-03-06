import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor( private http: HttpClient) { }


  //creamos un metodo que me permite cargar la informacion 
  //Nombre del metodo que vamos a utilizar para llamar 
  getPosts(){
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
        .pipe(tap(console.log));
  }
  // esto devuelve un observable this.http.get('https://jsonplaceholder.typicode.com/posts')
}
