export interface Post {

  id: string;
  author: string;
  title: string;
  created_utc: number;
  url: string;
  permalink: string;
  thumbnail: string;
  isFavourite?:boolean;

}
