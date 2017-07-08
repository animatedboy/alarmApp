import { Component, OnInit }      from '@angular/core';
import { WakeUpService } from './wakeUp.service';
import {Observable} from 'rxjs/Observable'
import {Alarm} from './alarmModel'

@Component({
  selector: 'wake-up',
  templateUrl: './wakeUp.component.html',
  providers:[WakeUpService]
})

export class WakeUpComponent implements OnInit  {
 constructor(private wakeUpService:WakeUpService){}

 vdo = new wakeUp();
 

 createAlarm(vdo){
   this.wakeUpService.createAlarm(vdo);
 }

 editAlarm(vdo,alarm,index){
   this.wakeUpService.editAlarm(vdo,alarm,index);
 }

 deleteAlarm(vdo,index){
   this.wakeUpService.deleteAlarm(vdo,index)
 }

 saveChange(vdo){
   this.wakeUpService.setAlarms(vdo);
 }

 ngOnInit(){
   this.vdo.alarms = [];
  this.wakeUpService.init(this.vdo);
 }


}

export class wakeUp {
  public currentTime :Date;
  public alarms :Array<Alarm>
}

