import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { map } from "rxjs/operators";

export interface Post {
  title: '',
  url: ''
}

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private afs: AngularFirestore) { }

  getMenus() {
    return this.afs.collection('posts').snapshotChanges()
    .pipe(map( post => {
        return post.map ( a => {
          const data = a.payload.doc.data() as Post;
          const id = a.payload.doc.id;
          return {id, ...data};
        })
      }))
  }
  addMenu(post: Post) {
    this.afs.collection('posts').add(post);
  }
  deleteMenu(postId) {
    this.afs.doc('posts/'+postId).delete();
  }
  updateMenu(postId, post: Post) {
    this.afs.doc('posts/'+postId).update(post);
  }
}
