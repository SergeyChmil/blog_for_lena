//// Надо узнать, насколько безопасно использовать namespace в качестве синглтона
import {Injectable} from "@angular/core";
@Injectable()
export class Links {
  private _localDataURL:string = "http://localhost:3000/notes";
  private _localDomainURL:string = "http://localhost:4200";
  private _imagesURL:string = "src/imgs/notes_illustrations/";

  get localDataURL():string{
    return this._localDataURL;
  }

  get localDomainURL():string{
    return this._localDomainURL;
  }

  get imagesURL():string{
    return this._imagesURL;
  }
}
