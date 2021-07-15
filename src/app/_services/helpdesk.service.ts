import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

const API = 'https://jsonplaceholder.typicode.com/';

export type TPost = {
  id: number;
  userId: number;
  title: string;
  body: string;
}
export interface IPost  {
  id: number;
  userId: number;
  title: string;
  body: string;
}
@Injectable({
  providedIn: 'root'
})
export class HelpdeskService {

  constructor(private http: HttpClient) { }

  getPosts(): Observable<TPost[]> {
    return this.http.get<TPost[]>(API + 'posts');
  }

  savePost() {

  }
}
