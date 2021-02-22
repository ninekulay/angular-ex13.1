import { Component , Input } from'@angular/core';
@Component({
    selector:'app-categorymenu',
    templateUrl:'./categorymenu.component.html',
    styleUrls: ['./categorymenu.component.css']
})
export class CategoryMenuComponent {
    @Input()
    items = ["menu1", "menu2", "menu3", "menu4", "menu5"];
    constructor() {}
}
