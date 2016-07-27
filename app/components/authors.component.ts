import {Component} from 'angular2/core';
import {AuthorService} from './../services/author.service';
import {AutoGrowDirective} from './../directives/auto-grow.directive'

@Component ({
  selector: 'authors',
  template:`
        <h2>Authors</h2>
        {{title}}
        <br>
        <input type="text" autoGrow>
        <ul>
          <li *ngFor="#author of authors">
          {{ author }}
          </li>
        </ul>
        `,
   providers: [AuthorService]
})
export class AuthorsComponent {
  authors: string[];
  title = "The authors of courses";
  
  constructor (authorService: AuthorService) {
    this.authors = authorService.getAuthors();
  }
}

@Component({
    selector: 'authors',
    template: `
            <h2>Authors</h2>
        {{ title }}
        <ul>
            <li *ngFor = "#author of authors">
            {{ author }}
            </li>
        </ul>
            `,
    providers: [AuthorService]
})


export class AuthorComponent{
    authors: string[];
    title = "The title of the authors page";
    courses;
    
    constructor(authorService: AuthorService){
        this.courses = authorService.getAuthors()
    }
}
