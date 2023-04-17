import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Firestore, collection, collectionData, doc, docData, addDoc, deleteDoc, updateDoc, provideFirestore, getFirestore, FirestoreModule } from '@angular/fire/firestore';
import { provideStorage, getStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { PlayersService } from 'src/app/services/players.service';
import { BlogPostsService } from 'src/app/services/blogPosts.service';
import { Router } from '@angular/router';
import { SharedComponentsModule } from 'src/app/components/shared-components.module';
import { BlogPost } from 'src/app/interfaces/blogPost.interface';
import { CommonNavigationService } from 'src/app/services/commonNavigation.service';

@Component({
    selector: 'app-post',
    templateUrl: './post.page.html',
    styleUrls: ['./post.page.scss'],
    standalone: true,
    imports: [IonicModule, CommonModule, FormsModule, FirestoreModule, SharedComponentsModule],
    providers: [CommonNavigationService]
})
export class PostPage implements OnInit {

    title: string = 'Blog Post';

    _blogPostsService = inject(BlogPostsService);
    _commonNavigationService = inject(CommonNavigationService);

    blogPost: BlogPost | any;

    constructor(private router: Router) {
        // console.log(this.getNotes());
    }
    
    ngOnInit() {
        
        console.log('this.router.url', this.router.url);
        
        let arrayRouter: string[] = this.router.url.split('/');
        
        const url = location.href.replace(location.origin, '');
        this.router.navigateByUrl(url);
        
        let lastIndex: number = arrayRouter.length - 1;
        
        let pathUrl = arrayRouter[lastIndex];
        
        console.log(arrayRouter);
        console.log(arrayRouter.length);
        console.log(pathUrl);
        
        this._blogPostsService.getBlogPosts(pathUrl).subscribe((blogPostList) => {
            if (blogPostList != null && blogPostList != undefined) {
                if(blogPostList.length > 0) {
                    blogPostList.forEach(blogPost => {
                        this.blogPost = blogPost;
                        console.log(this.blogPost);
                        this._commonNavigationService.setPageTitle(this.blogPost.title + ' - Zebek Tecnologia');
                    });
                }
            }
        });
    }


  // getNotes(): Observable<Post[]> {
    // const notesRef = collection(this.firestore, 'posts');
    // console.log(notesRef);
    // return collectionData(notesRef, { idField: 'id'}) as Observable<Post[]>;
  // }

}
