import { Component , Input } from'@angular/core';
@Component({
    selector:'app-searchbar',
    templateUrl:'./searchbar.component.html',
    styleUrls: ['./searchbar.component.css']
})
export class SearchBarComponent {
    @Input()
    title: string;
    description: string;
    constructor() {}
}
