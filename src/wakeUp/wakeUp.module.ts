import { NgModule }           from '@angular/core';
import { CommonModule }       from '@angular/common';
import { FormsModule }        from '@angular/forms';
import { WakeUpComponent }   from './wakeUp.component';
import { RouterModule }        from '@angular/router';
import {WakeUpRoutes} from './wakeUp.routing';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {CreateAlarmComponent} from './createAlarm/createAlarm.component'


@NgModule({
  imports:      [ CommonModule, FormsModule, RouterModule.forChild(WakeUpRoutes),NgbModule],
  declarations: [ WakeUpComponent,CreateAlarmComponent],
  providers:    [  ],
  entryComponents:[CreateAlarmComponent]
})
export class WakeUpModule { }
