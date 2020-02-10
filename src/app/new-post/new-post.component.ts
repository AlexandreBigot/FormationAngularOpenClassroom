import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Post } from '../models/Post.model';
import { PostService } from '../services/postService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {

  constructor(private postService: PostService, private router: Router) { }

  ngOnInit() { }

  onSubmit(form: NgForm) {
    const newPost = new Post(form.value['titrePost'], form.value['contenuPost']);
    this.postService.createNewPost(newPost);
    this.router.navigate(['posts']);
  }

}
