import {Observable} from "rxjs";

export interface INote {
  id:number;
  article:string;
  header:string;
  icon:string;
  date:string;
  body:string;
  shortBody:string;
  images:IImage[];

  // imagesPathKey:string;

  react(id:number)
}


export interface IImage{
  path:string;
  text:string;
  alt_text:string;
}

export interface ILinks{
  notes:string;
  illustration:string;
}
