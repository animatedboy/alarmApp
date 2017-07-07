import { Component, OnInit }      from '@angular/core';
import { WakeUpService } from './wakeUp.service';
import {Observable} from 'rxjs/Observable'

@Component({
  selector: 'wake-up',
  templateUrl: './wakeUp.component.html',
  providers:[WakeUpService]
})

export class WakeUpComponent implements OnInit  {
 constructor(private wakeUpService:WakeUpService){}

 vdo = new wakeUp();

 createAlarm(){
   this.wakeUpService.createAlarm();
 }

 ngOnInit(){
  this.wakeUpService.init(this.vdo);
 }


}

export class wakeUp {
  public currentTime :Date;
  public alarms :Object
}

