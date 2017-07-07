export interface IBaseResponse{
     status:string;
     message:any;
     data:any;
     errorData:any;
     meta:any;
}

export class BaseResponse  implements IBaseResponse{
    public status:string;
    public message:any;
    public data:any;
    public errorData:any;
    public meta:any
    constructor(){

    }
}