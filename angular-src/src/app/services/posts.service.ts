import { Post } from './../store/postStore/post.model';
import { User } from './../model/user';
import { State } from './../interfaces/state';
import { Store } from '@ngrx/store';
import { Posts } from './../interfaces/posts';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient, private store: Store<State>) { }

  getPosts(): Observable<Posts[]> {
    return this.http.get<Posts[]>('https://jsonplaceholder.typicode.com/posts');
  }
  getState(): Observable<any> {
      return this.store.select('name');
  }
  addPost(data: Post): Observable<Post> {
     return this.http.post<Post>('https://jsonplaceholder.typicode.com/posts', data, httpOptions);
  }
}
