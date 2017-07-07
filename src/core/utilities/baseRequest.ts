import { RequestMethod } from '@angular/http'

export interface IBaseRequestOps{
     url:string;
     urlParams:any;
     queryParams:any;
     body:any;
     method:RequestMethod
}


