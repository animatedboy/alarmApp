import { NgModule }           from '@angular/core';
import { CommonModule }       from '@angular/common';
import { FormsModule }        from '@angular/forms';
import { RouterModule }        from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {KeysPipe} from './Pipes/keys.pipe';
import {HourPipe} from './Pipes/hour.pipe'
import {AlertDialog} from './dialog/alertDialog.component'


@NgModule({
  imports:      [ CommonModule,FormsModule,NgbModule],
  declarations: [ KeysPipe,AlertDialog,HourPipe],
  providers:    [ ],
  entryComponents:[AlertDialog],
  exports:[KeysPipe,HourPipe,CommonModule,FormsModule,NgbModule]
})
export class SharedModule { }
