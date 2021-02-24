import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { menus } from '../menus';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css']
})

export class MenuComponent implements OnInit{

    name = '';
    icon = '';

    constructor(
        private route: ActivatedRoute
    ){}

    ngOnInit(){
        this.route.paramMap.subscribe(params => {
            this.name = menus[Number(params.get('i'))].name;    
            this.icon = menus[Number(params.get('i'))].icon;    
        })
    }

}