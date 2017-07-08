import { NgModule }      from '@angular/core';
import { WakeUpComponent }   from './wakeUp.component';
import { RouterModule }        from '@angular/router';
import {WakeUpRoutes} from './wakeUp.routing';
import {SharedModule} from '../shared/shared.module'
import {CreateAlarmComponent} from './createAlarm/createAlarm.component';


@NgModule({
  imports:      [ SharedModule, RouterModule.forChild(WakeUpRoutes)],
  declarations: [ WakeUpComponent,CreateAlarmComponent],
  providers:    [  ],
  entryComponents:[CreateAlarmComponent]
})
export class WakeUpModule { }
