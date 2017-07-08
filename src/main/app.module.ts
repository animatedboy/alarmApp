import { NgModule }      from '@angular/core';
import { CoreModule } from '../core/core.module'
import { AppComponent } from './app.component'
import { AppRoutingModule }   from './appRoute.module';
import { HttpModule } from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {WakeUpModule} from '../wakeUp/wakeUp.module'
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {SharedModule} from '../shared/shared.module'

@NgModule({
  imports:      [ BrowserAnimationsModule,HttpModule,AppRoutingModule,CoreModule,WakeUpModule,NgbModule.forRoot()],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ],
  providers:[],
  exports:[]
})

export class AppModule { }
