import { Albums } from './../interfaces/albums';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {

  constructor(private http: HttpClient) { }

  getAlbums(): Observable<Albums[]>{
    return this.http.get<Albums[]>('https://jsonplaceholder.typicode.com/albums');
  }
}
