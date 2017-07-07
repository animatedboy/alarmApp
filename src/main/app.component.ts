import { Component } from '@angular/core';
//import {LoaderComponent} from '../shared/loader/Component/loaderComponent';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../assets/css/styles.css';


@Component({
  selector: 'my-app',
  template:'<app-header></app-header><router-outlet></router-outlet>',
})
export class AppComponent { 
   title:string="Angular 2"
  //  constructor(){
    
  //    this.title = "Now it should work";
  //  }
}
