import {inject, Injectable, signal, Signal} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Post} from '../interfaces/post';
import {Observable, tap} from "rxjs";
import {toSignal} from "@angular/core/rxjs-interop";

@Injectable({
    providedIn: 'root'
})
export class PostsService {
    // Local variables
    postsUrl: string = "http://localhost:8000";
    private readonly posts$: Observable<Post[]>;
    private readonly posts:Signal<Post[]> = signal<Post[]>([]);
    httpClient: HttpClient = inject(HttpClient);

    constructor() {
        // Get data from JSON server
        const endpoint = '/posts';
        this.posts$ = this.httpClient.get<Post[]>(`${this.postsUrl}${endpoint}`).pipe(
            tap(console.log)
        );
        this.posts = toSignal(this.posts$, {
            initialValue: []
        })
    }

    // Get all posts
    getAllPosts = () : Signal<Post[]> => {
        return this.posts;
    }
}
