import { Post } from '../models/Post.model';
import { Subject } from 'rxjs/internal/Subject';
import { Injectable } from '@angular/core';

@Injectable()
export class PostService {

    postsSubject = new Subject<Post[]>();
    posts: Post[] = [
        {
            titrePost: 'Premier post',
            datePost: new Date(),
            loveItsPost: 0,
            contenuPost: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum ligula eget elit ullamcorper consectetur. Ut est dolor, auctor placerat tortor et, fermentum accumsan lectus. Donec pharetra vestibulum tempor. Praesent sapien odio, sagittis interdum sapien a, consequat fermentum velit. Cras id ipsum nulla. Curabitur rutrum tristique tortor sit amet ultrices. Etiam id dictum nisl, nec hendrerit tellus. Aliquam placerat sit amet lorem eu dignissim. Nam lobortis, felis eu volutpat eleifend, ligula sapien efficitur metus, et commodo nibh odio ac purus. Quisque dignissim ligula turpis, lacinia venenatis arcu imperdiet sed. Suspendisse sollicitudin vulputate sem, eu convallis ligula rutrum nec. In hac habitasse platea dictumst. Suspendisse sagittis turpis mi, in vehicula nulla malesuada eget. Etiam vel accumsan lorem. Pellentesque ullamcorper felis eu dolor lobortis, ac facilisis dui rhoncus.'
        },
        {
            titrePost: 'Second post',
            datePost: new Date(),
            loveItsPost: -10,
            contenuPost: 'In rhoncus erat a justo ullamcorper, ut maximus nibh porta. Proin convallis tincidunt dui, vitae sollicitudin lacus euismod at. Nulla in malesuada nisl. Proin vitae ipsum hendrerit, faucibus justo at, vulputate libero. In a nibh magna. Pellentesque varius quis ex et iaculis. Curabitur dapibus blandit nunc, dictum feugiat ex posuere vel. Vestibulum eget lectus eget elit mollis luctus eget condimentum sapien. Sed mollis ligula eu condimentum tincidunt. Morbi imperdiet convallis justo, eget tincidunt justo laoreet dignissim. Praesent pulvinar commodo mi vel sodales. Nulla mattis nisi a malesuada suscipit. Quisque dignissim tincidunt magna, at gravida nulla porttitor et. Cras purus massa, consequat in feugiat eget, blandit ut ante. In id lacus mi. Mauris aliquet arcu quis metus maximus, a scelerisque libero efficitur.'
        },
        {
            titrePost: 'Troisième post',
            datePost: new Date(),
            loveItsPost: 10,
            contenuPost: 'Nullam arcu nulla, imperdiet suscipit elit sed, maximus bibendum lectus. Nullam ornare tempor lectus vitae ultrices. Quisque in sagittis dui. Sed finibus maximus justo, et molestie tortor consequat nec. Mauris id ipsum lobortis, laoreet nisi nec, vulputate ex. Etiam molestie justo non blandit sagittis. Morbi sodales quis arcu sit amet scelerisque. Nam posuere erat vel diam volutpat, scelerisque efficitur elit finibus. Duis sed magna elementum, volutpat felis sed, blandit erat. Cras nunc enim, tempor ut iaculis vitae, hendrerit pulvinar arcu. Curabitur non justo nibh. Ut aliquam bibendum sapien nec malesuada. Vestibulum metus nulla, congue vitae lacinia nec, commodo quis lacus. Duis facilisis ex lacus, sed elementum ex condimentum in.'
        }
    ];


    constructor() { };

    emitPosts() {
        this.postsSubject.next(this.posts);
    }

    createNewPost(newPost: Post) {
        this.posts.push(newPost);
        this.emitPosts();
    }

    removePost(postIndex: number) {
        this.posts.splice(postIndex, 1);
        this.emitPosts();
    }

    addLove(postIndex: number) {
        this.posts[postIndex].loveItsPost += 1;
        this.emitPosts();
    }

    removeLove(postIndex: number) {
        this.posts[postIndex].loveItsPost -= 1;
        this.emitPosts();
    }

    getPostByIndex(postIndex: number) {
        return this.posts[postIndex];
    }
}