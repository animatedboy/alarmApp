import {Component, OnInit,Input} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {Alarm} from '../alarmModel'

@Component({selector: 'createAlarm', templateUrl: './createAlarm.component.html'})

export class CreateAlarmComponent implements OnInit {
    @Input() data;
    @Input() title;
    constructor(public activeModal : NgbActiveModal) {}
    public alarm = new Alarm();
    private tempAlarm="";
    public repeatOn = {
            sun: false,
            mon: false,
            tue: false,
            wed: false,
            thu: false,
            fri: false,
            sat: false
        };
    public meridian = true;

    saveAlarm(alarm){
      alarm.repeatOn=[];
      for (var key in this.repeatOn) {
          if (this.repeatOn.hasOwnProperty(key) && this.repeatOn[key]) {
               alarm.repeatOn.push(key);    
          }
      }
      alarm.isActive = true;
      alarm.isRepeat = alarm.repeatOn.length?alarm.isRepeat:false;
      this.activeModal.close(alarm);
    }

    cancelAlarm(){
        this.activeModal.close(this.tempAlarm);
    }

    ngOnInit() {
        if(this.data.isEdit){
            this.tempAlarm = {...this.data.alarm};
            this.alarm = {...this.data.alarm};
            this.alarm.repeatOn.forEach((repeat)=>{
                this.repeatOn[repeat]= true;
            });
        }else{
        this.tempAlarm = "";
        this.alarm.time = {
            hour: this.data.currentTime.getHours(),
            minute: this.data.currentTime.getMinutes(),
            second:0
        };
        this.alarm.isRepeat = false;
        this.alarm.label = "Alarm";
        this.alarm.repeatOn = [];
        this.alarm.isActive = true;
        }  
    }
}
