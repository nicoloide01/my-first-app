import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-assignment',
    templateUrl: './assignment.component.html',
    styleUrls: ['./assignment.component.css']
})
export class AssignmentComponent implements OnInit{
    username = '';
    allowErase = true;

    ErasePermission(){
        if(this.username == ''){
            this.allowErase = true;
        }
        else{
            this.allowErase = false;
        }
    }
    EraseUsername(){
        this.username = '';
    }

    ngOnInit() {
    }
}