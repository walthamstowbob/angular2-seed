import {Component, Input} from 'angular2/core';

@Component({
    selector: 'zippy',
    
    styles: [`
        .zippy {
            border: 1px solid #ccc;
            border-radius: 2px;
            margin-bottom: 20px;
        }
        
        .zippy .zippy-heading {
            padding: 20px;
            font-weight: bold;
        }
        
        .zippy .zippy-heading:hover{
            background: #f0f0f0;
            cursor: pointer;
        }
        
        .zippy .zippy-content {
            padding: 20px;
        }
            `],
    template: `
    
    <div class="zippy">
        <div
            class="zippy-heading"
            (click)="toggle()">    
            {{ heading }}
        <i 
            class="pull-right glyphicon"
            [ngClass]="
                {
                    'glyphicon-chevron-down': !isExpanded,
                    'glyphicon-chevron-up': !isExpanded
                }">
        </i>
        </div>
        <div *ngIf="isExpanded" class="zippy-content">
            <ng-content></ng-content>
        </div>
    </div>
        `,        
})

export class ZippyComponent  { 
   
   isExpanded = false;

   @Input() heading: string;

    toggle(){
        this.isExpanded = !this.isExpanded;
    }
}