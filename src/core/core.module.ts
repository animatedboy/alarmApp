import { NgModule }      from '@angular/core';
import {HeaderComponent} from './header/header.component';
import {RestProxy} from './restProxy/restProxy.service';
import {DialogService} from './dialog/dialog.service'


@NgModule({
  imports: [],
  declarations:[HeaderComponent],
  providers:[RestProxy,DialogService],
  exports:[HeaderComponent]
})

export class CoreModule {}