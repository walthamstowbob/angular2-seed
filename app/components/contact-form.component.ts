import {Component} from 'angular2/core';

@Component ({

    selector: 'contact-form',
    templateUrl: 'app/components/contact-form.component.html',
})

export class ContactFormComponent {
    onSubmit(form){
        console.log(form);
    }
}