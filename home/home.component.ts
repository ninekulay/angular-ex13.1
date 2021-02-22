import { Component , Input } from'@angular/core';
@Component({
    selector:'app-home',
    templateUrl:'./home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent {
    @Input()
    title: string;
    description: string;
    count=0;
    fruits = [{name:"apple",price:20,quantity: 0}, 
    {name:"banana",price:10,quantity: 0}, 
    {name:"durian",price:120,quantity: 0}, 
    {name:"mango",price:40,quantity: 0}, 
    {name:"grape",price:100,quantity: 0}];
    constructor() {}
    countNumber() {
        this.count = this.count + 1; 
    }
    clickAdd = function (item) {
        item.quantity += 1;
    };
    clickRemove = function (item) {
        if (item.quantity > 0) {
            item.quantity -= 1;
            return true;
        } else {
            return false;   
        }
    };
}
