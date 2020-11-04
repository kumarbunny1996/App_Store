import { updatePost } from './../postStore/post.actions';
import { Post, PostRes } from './../postStore/post.model';
import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { State } from './../../store/userStore/reducer';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  constructor(private http: HttpClient, private store: Store<State>) {}

  getPosts(): Observable<any> {
    return this.http.get<any>('/api/posts');
  }
  getPost(ROWID: string): Observable<any> {
    return this.http.get<any>(`/api/post/?id=${ROWID}`);
  }
  getState(): Observable<any> {
    return this.store.select('name');
  }
  addPost(data: Post): Observable<any> {
    return this.http.post<any>('/api/addPost', data, httpOptions);
  }
  updatePost(
    postId: string | number,
    changes: Partial<PostRes>
  ): Observable<any> {
    return this.http.put<any>(
      `/api/updatePost/?id=${postId}`,
      changes,
      httpOptions
    );
  }
  deletePost(id: string): Observable<any> {
    return this.http.delete(`/api/deletePost/?id=${id}`);
  }
}
