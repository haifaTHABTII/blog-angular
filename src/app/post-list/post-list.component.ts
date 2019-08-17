import { Component, ViewChildren, ElementRef, QueryList } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

 @ViewChildren('buttonYes') buttonYes: QueryList<ElementRef>;
  @ViewChildren('buttonNo') buttonNo: QueryList<ElementRef>;
  
  created_at = new Date();
  
  posts = [
  
  {
    title: 'mon premier post',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet',
    loveIt: 0,
    dLoveIt: 0 
  
  },
  
  {
    title: 'mon deuxieme post',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet',
    loveIt: 0,
    dLoveIt: 0  
  
  },
  
  {
    title: 'Encore un post',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet',
    loveIt: 0,
    dLoveIt: 0  
  
  }
  ] 
  
  
  
  onLoveIt(index: number){
  this.posts[index].loveIt ++;
  
  }
  
  onDLoveIt(index: number){
  this.posts[index].dLoveIt ++;
  
  }


}
