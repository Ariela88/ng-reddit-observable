import { Component } from '@angular/core';
import { Post } from 'src/app/model/post';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.scss']
})
export class FavouritesComponent {



  favourites: Post[] = [];



  constructor(public storage: StorageService) { }


  ngOnInit(): void {

    this.storage.favouritesSubject.subscribe(arrayOfFavourites => {
      this.favourites = arrayOfFavourites;
      this.favourites.sort((f1,f2)=>f2.created_utc - f1.created_utc)

    })


  }



}
