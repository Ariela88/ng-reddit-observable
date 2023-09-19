import { Injectable } from '@angular/core';
import { Post } from '../model/post';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StorageService {


  favouritesSubject = new BehaviorSubject<Post[]>([])


  // favourites: Post[] = [];

  constructor() {



    if (localStorage.getItem('favourites')) {
      this.favouritesSubject.next(JSON.parse(localStorage.getItem('favourites')!))

    }
  }

  savePost(post: Post) {
    post.isFavourite = true;
    const actualArray = this.favouritesSubject.value
    const newArray = [...actualArray, post]
    this.favouritesSubject.next(newArray)
    localStorage.setItem('favourites', JSON.stringify(newArray));

  }

  removePost(post: Post) {
    post.isFavourite = false;
    const actualArray = this.favouritesSubject.value
    const newArray = actualArray.filter((p) => p.id !== post.id);
    this.favouritesSubject.next(newArray)
    localStorage.setItem('favourites', JSON.stringify(newArray));
  }

  toggleFavourites(post: Post) {
    if (this.isFavourite(post)) {
      this.removePost(post)

    } else {
      this.savePost(post)
    }
  }


  isFavourite(post: Post): boolean {


     return this.favouritesSubject.value.some(p => p.id === post.id)


  }
}
