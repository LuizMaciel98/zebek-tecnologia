import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SharedComponentsModule } from 'src/app/components/shared-components.module';
import { BlogPostsService } from 'src/app/services/blogPosts.service';
import { BlogPost } from 'src/app/interfaces/blogPost.interface';
import { CommonNavigationService } from 'src/app/services/commonNavigation.service';
// import { Router } from '@angular/router';
// import { CommonNavigationService } from 'src/app/services/commonNavigation.service';

@Component({
    selector: 'app-blog',
    templateUrl: './blog.page.html',
    styleUrls: ['./blog.page.scss'],
    standalone: true,
    imports: [IonicModule, CommonModule, FormsModule, SharedComponentsModule],
    providers: [CommonNavigationService]
})
export class BlogPage implements OnInit {

    title: string = 'Blog';

    _commonNavigationService = inject(CommonNavigationService);
    _blogPostsService = inject(BlogPostsService);

    blogPosts: BlogPost[] | any = [];

    constructor() {
        console.log('blog');
        // this._commonNavigationService.setPageTitle('Blog - Zebek Tecnologia');
    }

    ngOnInit() {
        this._blogPostsService.getBlogPosts().subscribe((blogPostList) => {

            if (blogPostList != null && blogPostList != undefined) {
                if(blogPostList.length > 0) {

                    blogPostList.forEach(blogPost => {

                        blogPost.completeUrl = this.getCurrentPostPath(blogPost.urlPath);
                        
                        this.blogPosts.push(blogPost);
                    });
                }
            }
        });

        console.log(this.blogPosts);
    }

    navigateToBlogPost(urlPath: string) {
        console.log(urlPath);
        this._commonNavigationService.navigate(this.getCurrentPostPath(urlPath));
    }

    getCurrentPostPath(urlPath: string) {
        return 'blog/post/' + urlPath;
    }
}
