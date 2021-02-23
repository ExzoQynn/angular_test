import { from } from "rxjs";
import { Component , OnInit } from '@angular/core';
import { menus } from '../menus';

@Component({
    selector: 'app-site-bar',
    templateUrl : './site-bar.component.html',
    styleUrls: ['./site-bar.component.css']
})

export class SiteBarComponent implements OnInit{
    constructor(){}
    menus = menus;
    ngOnInit() {
        
    }
}