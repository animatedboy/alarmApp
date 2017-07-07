import {Injectable} from '@angular/core';
import {RestProxy} from '../core/restProxy/restProxy.service';
import {URLCreater,BaseResponse} from '../core/utilities/utility';
import {wakeUp} from "./wakeUp.component";
import {CreateAlarmComponent} from './createAlarm/createAlarm.component';
import {DialogService} from '../core/dialog/dialog.service'

@Injectable()
export class WakeUpService {
    constructor(private dialogService:DialogService){

    }

    private getTime(vdo:wakeUp) {
        vdo.currentTime = new Date();
    };

    private getAlarms(vdo) {
        vdo.alarms = JSON.parse(localStorage.getItem('alarms'));
        vdo.alarms = {
            "14_18":{
                isActive:true
            }
        }
    };

    private setAlarms(vdo) {
        localStorage.setItem('alarms', JSON.stringify(vdo.alarms));
    };

    private checkAlarm(vdo:wakeUp){
      let hr = vdo.currentTime.getHours(),min = vdo.currentTime.getMinutes();
      let time = hr+'_'+min;

      if(vdo.alarms[time] && vdo.alarms[time].isActive){
        window.alert("wake up");
      }

    }

    private minuteTick(vdo) {
         let that  = this;
        return function () {
            that.getTime(vdo);
            that.checkAlarm(vdo);
            setInterval(that.minuteTick(vdo), 60000);
        }
    };

    
    public init(vdo: wakeUp) {
        this.getAlarms(vdo);
        var setTick = this.minuteTick(vdo);
        setTick();
    };

    public createAlarm(){
        this.dialogService.showDialog("Create alarm","alarm",CreateAlarmComponent);
    }

}