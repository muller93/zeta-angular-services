import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpaceXService {

  constructor(
    private _http: HttpClient
  ) { }

  public getSpaceXInfos() {
    return this._http.get('https://api.spacexdata.com/v3/info');
  }
}
  // #1 Service generálása, HttpClient behúzása, a kívánt végpont megírása
