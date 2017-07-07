import {Observable} from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import {Http,URLSearchParams,Headers,ResponseContentType,RequestMethod,RequestOptions,Request,Response} from '@angular/http';
import {IBaseRequestOps,BaseResponse,ResponseStatus} from '../utilities/utility'

@Injectable()
export class RestProxy {

    constructor(private _http:Http) {

    };

     private responseTransformer(response:Response):BaseResponse{
        let transformedResponse = new BaseResponse();
        let result = response.json();
        console.log(result,"result");
        transformedResponse.status = response.ok?ResponseStatus.Success:ResponseStatus.Failure;
        transformedResponse.data= response.ok?result:{};
        transformedResponse.message = result.message?result.message:"";
        
        if(response.status === 401){
           transformedResponse.errorData =!response.ok && result?result.message:[];
           transformedResponse.message = !response.ok && result?result.message:"";
        }else if(!response.ok){
           transformedResponse.errorData = result.errors?result.message:[]; 
        }

        return transformedResponse;
    };

    private setQueryParams (params):URLSearchParams{
        let searchParams = new URLSearchParams();
         for(let key in params){
            searchParams.set(key,params[key])
         } 
         return searchParams;   
    };

    private setHeaders = function(headers?){
       let reqHeaders = new Headers();
         for(let key in headers){
            reqHeaders.set(key,headers[key])
         } 
         reqHeaders.append("Content-Type","application/json");
         return reqHeaders; 
    }

    private setRequestOptions(url:string,method:RequestMethod,params?:URLSearchParams,headers?:Headers,body?:Object,responseType?:ResponseContentType):RequestOptions{
        var requestOptions = new RequestOptions({
            url:url,
            method:method,
            search:params,
            headers:headers,
            body:body?body:null,
            responseType:responseType?responseType:ResponseContentType.Json,
        });

        return requestOptions;
    }

    private baseRequestMaker(URL:IBaseRequestOps):Promise<BaseResponse>{
        let searchParams = this.setQueryParams(URL.queryParams);
        var reqHeaders = this.setHeaders();
        let requestOptions = this.setRequestOptions(URL.url,URL.method,searchParams,reqHeaders,URL.body)
        return this._http.request(new Request(requestOptions)).flatMap((response:Response)=>{
             if (response.ok) {
               let successResult = this.responseTransformer(response)
               return Observable.of(successResult);
             }
        }).catch((response:Response)=>{
               let errorResult = this.responseTransformer(response)
               return Observable.of(errorResult);
        }) .toPromise();
    };

    public getData (URL:IBaseRequestOps):Promise<BaseResponse>{
        return this.baseRequestMaker(URL);
    };

    public saveData(URL:IBaseRequestOps):Promise<BaseResponse>{
         return this.baseRequestMaker(URL);
    };

    public deleteData(URL:IBaseRequestOps):Promise<BaseResponse>{
         return this.baseRequestMaker(URL);
    };

}