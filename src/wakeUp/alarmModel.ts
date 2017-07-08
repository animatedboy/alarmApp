import {NgbTimeStruct} from  '@ng-bootstrap/ng-bootstrap'

export class Alarm{
    public time:NgbTimeStruct
    public isActive:Boolean;
    public isRepeat:Boolean;
    public repeatOn:Array<any>;
    public label:String;
}