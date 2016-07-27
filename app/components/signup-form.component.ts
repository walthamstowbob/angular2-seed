import {Component} from 'angular2/core';
import {ControlGroup, Control, FormBuilder, Validators} from 'angular2/common';
import {UsernameValidators} from '../validators/usernameValidators';

@Component({
    selector: 'signup-form',
    templateUrl: 'app/components/signup-form.component.html'
})
export class SignUpFormComponent {
    form: ControlGroup;

    constructor(fb: FormBuilder){
        this.form = fb.group({
            username: ['', Validators.compose([
                Validators.required, 
                UsernameValidators.cannotContainSpace
            ]), UsernameValidators.shouldBeUnique],
            password: ['', Validators.required]
        });
    }
    
    //form = new ControlGroup({
    //  username: new Control('', Validators.required),
    //  password: new Control('', Validators.required)
    // });

    signup(){
        // var result = authService.login(this.form.value);
        this.form.find('username').setErrors({
            invalidLogin: true
        });
        
        console.log(this.form.value);
    }
}