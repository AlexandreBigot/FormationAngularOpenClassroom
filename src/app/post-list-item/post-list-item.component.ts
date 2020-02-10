import { Component, OnInit, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { PostService } from '../services/postService';
import { Post } from '../models/Post.model';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  posts: Post[] = [];
  postsSubscription: Subscription;

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.postsSubscription = this.postService.postsSubject.subscribe(
      (argPosts: Post[]) => {
        this.posts = argPosts;
      }
    );

    this.postService.emitPosts();
  }

  getListItemStyle(postIndex: number) {
    const post: Post = this.postService.getPostByIndex(postIndex);
    if (post.loveItsPost < 0) {
      return 'list-group-item-danger';

    } else if (post.loveItsPost > 0) {
      return 'list-group-item-success';

    } else {
      return 'list-group-item-primary';

    }
  }

  addLove(postIndex: number) {
    this.postService.addLove(postIndex);
  }

  removeLove(postIndex: number) {
    this.postService.removeLove(postIndex);
  }

  removePost(postIndex: number) {
    this.postService.removePost(postIndex);
  }

  ngOnDestroy() {
    this.postsSubscription.unsubscribe();
  }

}
