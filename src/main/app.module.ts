import { NgModule }      from '@angular/core';
import { FormsModule } from '@angular/forms';//to use ngModel
import { CoreModule } from '../core/core.module'
import { AppComponent } from './app.component'
import { AppRoutingModule }   from './appRoute.module';
import { HttpModule } from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from '@angular/material';
import {WakeUpModule} from '../wakeUp/wakeUp.module'
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports:      [ BrowserAnimationsModule,HttpModule,AppRoutingModule,CoreModule, MaterialModule,WakeUpModule,NgbModule.forRoot()],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ],
  providers:[],
  exports:[]
})

export class AppModule { }
