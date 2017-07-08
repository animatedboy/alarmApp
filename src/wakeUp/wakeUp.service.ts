import {Injectable} from '@angular/core';
import {RestProxy} from '../core/restProxy/restProxy.service';
import {URLCreater,BaseResponse} from '../core/utilities/utility';
import {wakeUp} from "./wakeUp.component";
import {CreateAlarmComponent} from './createAlarm/createAlarm.component';
import {DialogService} from '../core/dialog/dialog.service';


@Injectable()
export class WakeUpService {
    constructor(private dialogService:DialogService,private http:RestProxy){

    }
    private minuteTickInterval;
    private quotesUrl = new URLCreater('api/quotes/random/');
    private getTime(vdo:wakeUp) {
        vdo.currentTime = new Date();
    };
    private weekDay = ["sun","mon","tue","wed","thu","fri","sat"];

    private getAlarms(vdo) {
        let alarms = JSON.parse(localStorage.getItem('alarms')) ;
        vdo.alarms = alarms?alarms:[];
    };

    public setAlarms(vdo) {
        localStorage.setItem('alarms', JSON.stringify(vdo.alarms));
    };

    private checkAlarm(vdo:wakeUp){
      let hr = vdo.currentTime.getHours(),min = vdo.currentTime.getMinutes(),today= this.weekDay[vdo.currentTime.getDay()];
      
      let activeAlarm = vdo.alarms.filter((alarm)=>{
          return alarm.isActive;
      });
      
      activeAlarm.forEach((alarm)=>{
        if(alarm.time.hour == hr && alarm.time.minute == min && alarm.isActive ){
            if(!alarm.isRepeat){
                this.http.getData(this.quotesUrl.createGET({},{})).then((result)=>{
                     this.dialogService.alert("Alert",result.data.quote+ " - "+result.data.author);
              });
              alarm.isActive=false;
              this.setAlarms(vdo);
            }else if(alarm.isRepeat && alarm.repeatOn.indexOf(today)>-1){
              this.http.getData(this.quotesUrl.createGET({},{})).then((result)=>{
                     this.dialogService.alert("Alert",result.data.quote+ " - "+result.data.author);
              });
            }
        }
      });
    }

    private minuteTick(vdo) {
         let that  = this;
        return function () {
            that.getTime(vdo);
            that.minuteTickInterval = setTimeout(that.minuteTick(vdo), 60000); 
            that.checkAlarm(vdo);
        }
    };

    
    public init(vdo: wakeUp) {
        this.getAlarms(vdo);
        var setTick = this.minuteTick(vdo);
        setTick();
    };

    public createAlarm(vdo){
        let data = {
            isEdit:false,
            alarm:{},
            currentTime:vdo.currentTime
        }
        this.dialogService.showDialog("Create alarm","alarm",CreateAlarmComponent,data).then((result)=>{
            if(result){
            vdo.alarms.push(result);
            this.setAlarms(vdo);
            }
        }).catch((error)=>{

        })  

        
    }

    public editAlarm(vdo,alarm,index){
        let data = {
            isEdit:true,
            alarm:alarm,
            currentTime:vdo.currentTime
        }
        this.dialogService.showDialog("Edit alarm","alarm",CreateAlarmComponent,data).then((result)=>{
            if(result){
            vdo.alarms[index] = result;
            this.setAlarms(vdo);
            }
        }).catch((error)=>{

        })  
    };


    public deleteAlarm(vdo,index){
        vdo.alarms.splice(index,1);
        this.setAlarms(vdo);
    }



}