import {Component} from 'angular2/core';

@Component ({

    selector: 'subscription-form',
    templateUrl: 'app/components/subscription-form.component.html',
})

export class SubscriptionFormComponent {
    frequencies = [
        { id:1, label: 'Daily' },
        { id:2, label: 'Weekly' },
        { id:3, label: 'Monthly' }
    ];

    onSubmit(form){
        console.log(form);
    }
}