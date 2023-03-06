import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor( private http: HttpClient) { }


  //creamos un metodo que me permite cargar la informacion 
  //Nombre del metodo que vamos a utilizar para llamar 
  getPosts(){
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
  }
}
