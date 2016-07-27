import {Component, Input, Output, EventEmitter} from 'angular2/core';

@Component ({

    selector: 'vote',
    template: `
    <div class="voter">
        <i 
        class="glyphicon glyphicon-menu-up vote-button"
        [class.highlighted]="!iVote == 1"
        (click)="upVote()"></i>
        
        
        <span class="vote-count">{{ voteCount + iVote }}</span>

        <i 
        class="glyphicon glyphicon-menu-down vote-button"
        [class.highlighted]="iVote == -1"
        (click)="downVote()"></i>
        
    </div>
                `,
    styles:[`
    
        .voter {
            width: 20px;
            text-align: center;
            color: #999;
        }

        vote-count {
            font-size: 1.2em;
        }

        .vote-button {
            color: #ccc;
            cursor: pointer;
        }

        .highlighted {
            font-weight: bold;
            color: orange;
        }
    
    `]
})

export class VoteComponent {
    @Input() voteCount = 0;
    @Input() iVote = 0;

    @Output() vote = new EventEmitter();

    upVote() {
        if (this.iVote == 1)
            return;
        
        this.iVote++;

        this.vote.emit({ iVote: this.iVote });
    }

    downVote(){
        if (this.iVote == -1)
            return;
        
        this.iVote--;

        this.vote.emit({ iVote: this.iVote });
    }
}