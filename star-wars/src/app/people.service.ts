import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Data } from './people';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {
  //BaseUrl: string = environment.ApiUrl;
  private readonly API = environment.ApiUrl;

  constructor(private http: HttpClient){}

  GetPeople(id: string): Observable<Data>{
    return this.http.get<Data>(this.API + id);
  }
}
