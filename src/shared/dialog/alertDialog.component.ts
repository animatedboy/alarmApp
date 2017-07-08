import {Component, OnInit,Input} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'alert-dialog',
    templateUrl:'./alertDialog.component.html'
})

export class AlertDialog {

    public title: string;
    public message: string;

    constructor(public activeModal: NgbActiveModal) {

    }
}