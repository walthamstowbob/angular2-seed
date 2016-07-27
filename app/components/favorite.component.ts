import {Component, Input, Output, EventEmitter} from 'angular2/core';

@Component({
    selector: 'favorite',
    template: `
        <i 
            class="glyphicon"
            [ngClass]="{
                'glyphicon-star-empty': !isFavorite,
                'glyphicon-star': isFavorite
            }"
            (click)="onClick()">
        </i>
        `,
        styles: [`
            .glyphicon-star {
                color: orange;
            }
        `]
        
})
export class FavoriteComponent { 
   @Input() isFavorite = false;

   @Output() change = new EventEmitter();

    onClick(){
        this.isFavorite = !this.isFavorite;
        this.change.emit({ newValue: this.isFavorite })
    }
}