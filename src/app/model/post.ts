export interface Post {

  id: string;
  author: string;
  title: string;
  created: number;
  url: string;
  permalink: string;
  thumbnail: string;
  isFavourite?:boolean;

}
