import {Component, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {Alarm} from '../alarmModel'

@Component({selector: 'createAlarm', templateUrl: './createAlarm.component.html'})

export class CreateAlarmComponent implements OnInit {

    constructor(public activeModal : NgbActiveModal) {}

    public alarm = new Alarm();
    public data;
    private now = new Date();
    meridian = true;

    ngOnInit() {
        if(!this.data.isEdit){
        this.alarm.time = {
            hour: this.now.getHours(),
            minute: this.now.getMinutes()
        };
        this.alarm.isRepeat = false;
        this.alarm.label = "";
        this.alarm.repeatOn = {
            sun: false,
            mon: false,
            tue: false,
            wed: false,
            thu: false,
            fri: false,
            sat: false
        }
        this.alarm.isActive = true;
    
    }else{
        this.alarm = this.data;
    }
    }
}
