import { Component } from '@angular/core';

export class User {
    public name: any;
    public email: any;
    public password: any;
    public hobbies: any;
}

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent {
    model = new User();

    Hobbies: string[] = [
        'Acrobatics',
        'Acting',
        'Animation',
        'Astronomy',
        'Baking'
    ];

    constructor() { }

    onSubmit(form: { value: any; }) {
        console.log(form.value)
    }
}