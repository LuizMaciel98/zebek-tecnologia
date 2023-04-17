import { Injectable } from '@angular/core';
import {
  addDoc,
  collectionData,
  deleteDoc,
  doc,
  Firestore,
  getDoc,
  query,
  updateDoc,
  where,
} from '@angular/fire/firestore';
import { collection, getDocs } from '@firebase/firestore';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { BlogPost } from '../interfaces/blogPost.interface';

@Injectable({
    providedIn: 'root',
})
export class BlogPostsService {
    private playerSource = new BehaviorSubject<any | null>(null);
    players$ = this.playerSource.asObservable();

    constructor(private firestore: Firestore) {}

    getBlogPosts(filter = '') {
        const blogPostsRef = collection(this.firestore, 'blogPosts');
        let q = query(blogPostsRef);
        if (filter) {
            q = query(blogPostsRef, where('urlPath', '==', filter));
        }
        return collectionData(q) as unknown as Observable<BlogPost[]>;
    }
}