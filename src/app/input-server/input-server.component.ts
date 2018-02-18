import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-input-server',
    templateUrl: './input-server.component.html',
    styleUrls: ['./input-server.component.css']
})

export class InputServerComponent implements OnInit {
    addNewServerStatus: string = '';
    serverName: string = '';
    allowNewServer: boolean = false;
    serverAdded: boolean = false;
    
    constructor() {}

    ngOnInit() {
    }



    private addNewServer() {
        this.addNewServerStatus = 'Server ' + this.serverName + ' was created!';
        this.serverAdded = true;

        this.clearInput();
    }



    private checkInputValue() {
        this.serverName.length > 0 ? this.allowNewServer = true : this.allowNewServer = false;
    }



    private clearInput() {
        this.serverAdded ? this.serverName = '' : this.serverAdded;
    }
}
