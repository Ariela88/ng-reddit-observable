import { Injectable } from '@angular/core';
import { Post } from '../model/post';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  favourites: Post[] = [];

  constructor() {

    if (localStorage.getItem('favourites')) {
      this.favourites = JSON.parse(localStorage.getItem('favourites')!)
    }
  }

  savePost(post: Post) {
    post.isFavourite = true;
    this.favourites.push(post);
    console.log(this.favourites)
    localStorage.setItem('favourites', JSON.stringify(this.favourites));
  }

  removePost(post: Post) {
    post.isFavourite = false;
    this.favourites = this.favourites.filter((p) => p.id !== post.id);
    console.log(this.favourites)
    localStorage.setItem('favourites', JSON.stringify(this.favourites));
  }

  toggleFavourites(post: Post) {
    if (this.isFavourite(post)) {
      this.removePost(post)

    }else{
      this.savePost(post)
    }
  }


  isFavourite(post: Post):boolean {


    console.log('favourites',post)

    return this.favourites.some(p => p.id===post.id)


  }
}
