import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {
  
  constructor( private dataService: DataService){

  }
  //La pagina es cargada por primera vez
  ngOnInit(){
    this.dataService.getPosts()
      .subscribe( 
        posts => {console.log(posts);
      })
  }
}
